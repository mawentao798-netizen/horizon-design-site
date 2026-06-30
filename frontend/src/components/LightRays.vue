<script setup>
import { Mesh, Program, Renderer, Triangle } from 'ogl'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  raysOrigin: { type: String, default: 'top-center' },
  raysColor: { type: String, default: '#ffffff' },
  raysSpeed: { type: Number, default: 1 },
  lightSpread: { type: Number, default: 1 },
  rayLength: { type: Number, default: 2 },
  pulsating: { type: Boolean, default: false },
  fadeDistance: { type: Number, default: 1 },
  saturation: { type: Number, default: 1 },
  followMouse: { type: Boolean, default: true },
  mouseInfluence: { type: Number, default: 0.1 },
  noiseAmount: { type: Number, default: 0 },
  distortion: { type: Number, default: 0 },
})

const containerRef = ref(null)
const state = {
  animationId: null,
  cleanup: null,
  mesh: null,
  observer: null,
  renderer: null,
  uniforms: null,
  mouse: { x: 0.5, y: 0.5 },
  smoothMouse: { x: 0.5, y: 0.5 },
}

function hexToRgb(hex) {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return match
    ? [parseInt(match[1], 16) / 255, parseInt(match[2], 16) / 255, parseInt(match[3], 16) / 255]
    : [1, 1, 1]
}

function getAnchorAndDir(origin, width, height) {
  const outside = 0.2
  switch (origin) {
    case 'top-left':
      return { anchor: [0, -outside * height], dir: [0, 1] }
    case 'top-right':
      return { anchor: [width, -outside * height], dir: [0, 1] }
    case 'left':
      return { anchor: [-outside * width, 0.5 * height], dir: [1, 0] }
    case 'right':
      return { anchor: [(1 + outside) * width, 0.5 * height], dir: [-1, 0] }
    case 'bottom-left':
      return { anchor: [0, (1 + outside) * height], dir: [0, -1] }
    case 'bottom-center':
      return { anchor: [0.5 * width, (1 + outside) * height], dir: [0, -1] }
    case 'bottom-right':
      return { anchor: [width, (1 + outside) * height], dir: [0, -1] }
    default:
      return { anchor: [0.5 * width, -outside * height], dir: [0, 1] }
  }
}

const vertexShader = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec2 iResolution;
uniform vec2 rayPos;
uniform vec2 rayDir;
uniform vec3 raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2 mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);
  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;
  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3 + 0.2 * cos(-distortedAngle * seedB + iTime * speed)),
    0.0,
    1.0
  );
  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
  vec2 finalRayDir = rayDir;

  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }

  vec4 rays1 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);

  fragColor = rays1 * 0.5 + rays2 * 0.4;

  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }

  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;

  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }

  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}`

function updatePlacement() {
  if (!containerRef.value || !state.renderer || !state.uniforms) return

  const widthCss = containerRef.value.clientWidth
  const heightCss = containerRef.value.clientHeight
  const dpr = Math.min(window.devicePixelRatio || 1, 2)

  state.renderer.dpr = dpr
  state.renderer.setSize(widthCss, heightCss)

  const width = widthCss * dpr
  const height = heightCss * dpr
  const { anchor, dir } = getAnchorAndDir(props.raysOrigin, width, height)

  state.uniforms.iResolution.value = [width, height]
  state.uniforms.rayPos.value = anchor
  state.uniforms.rayDir.value = dir
}

function applyUniformProps() {
  if (!state.uniforms) return

  state.uniforms.raysColor.value = hexToRgb(props.raysColor)
  state.uniforms.raysSpeed.value = props.raysSpeed
  state.uniforms.lightSpread.value = props.lightSpread
  state.uniforms.rayLength.value = props.rayLength
  state.uniforms.pulsating.value = props.pulsating ? 1 : 0
  state.uniforms.fadeDistance.value = props.fadeDistance
  state.uniforms.saturation.value = props.saturation
  state.uniforms.mouseInfluence.value = props.mouseInfluence
  state.uniforms.noiseAmount.value = props.noiseAmount
  state.uniforms.distortion.value = props.distortion

  updatePlacement()
}

function animate(time) {
  if (!state.renderer || !state.uniforms || !state.mesh) return

  state.uniforms.iTime.value = time * 0.001

  if (props.followMouse && props.mouseInfluence > 0) {
    const smoothing = 0.92
    state.smoothMouse.x = state.smoothMouse.x * smoothing + state.mouse.x * (1 - smoothing)
    state.smoothMouse.y = state.smoothMouse.y * smoothing + state.mouse.y * (1 - smoothing)
    state.uniforms.mousePos.value = [state.smoothMouse.x, state.smoothMouse.y]
  }

  state.renderer.render({ scene: state.mesh })
  state.animationId = requestAnimationFrame(animate)
}

function handleMouseMove(event) {
  if (!containerRef.value) return

  const rect = containerRef.value.getBoundingClientRect()
  state.mouse = {
    x: (event.clientX - rect.left) / rect.width,
    y: (event.clientY - rect.top) / rect.height,
  }
}

function destroyWebGL() {
  if (state.animationId) cancelAnimationFrame(state.animationId)
  state.animationId = null
  window.removeEventListener('resize', updatePlacement)
  window.removeEventListener('mousemove', handleMouseMove)

  if (state.renderer) {
    const canvas = state.renderer.gl.canvas
    const loseContext = state.renderer.gl.getExtension('WEBGL_lose_context')
    if (loseContext) loseContext.loseContext()
    if (canvas?.parentNode) canvas.parentNode.removeChild(canvas)
  }

  state.mesh = null
  state.renderer = null
  state.uniforms = null
}

function initWebGL() {
  if (!containerRef.value || state.renderer) return

  const renderer = new Renderer({
    dpr: Math.min(window.devicePixelRatio || 1, 2),
    alpha: true,
  })
  state.renderer = renderer

  const gl = renderer.gl
  gl.canvas.style.width = '100%'
  gl.canvas.style.height = '100%'

  while (containerRef.value.firstChild) {
    containerRef.value.removeChild(containerRef.value.firstChild)
  }
  containerRef.value.appendChild(gl.canvas)

  state.uniforms = {
    iTime: { value: 0 },
    iResolution: { value: [1, 1] },
    rayPos: { value: [0, 0] },
    rayDir: { value: [0, 1] },
    raysColor: { value: hexToRgb(props.raysColor) },
    raysSpeed: { value: props.raysSpeed },
    lightSpread: { value: props.lightSpread },
    rayLength: { value: props.rayLength },
    pulsating: { value: props.pulsating ? 1 : 0 },
    fadeDistance: { value: props.fadeDistance },
    saturation: { value: props.saturation },
    mousePos: { value: [0.5, 0.5] },
    mouseInfluence: { value: props.mouseInfluence },
    noiseAmount: { value: props.noiseAmount },
    distortion: { value: props.distortion },
  }

  const geometry = new Triangle(gl)
  const program = new Program(gl, {
    vertex: vertexShader,
    fragment: fragmentShader,
    uniforms: state.uniforms,
  })

  state.mesh = new Mesh(gl, { geometry, program })
  updatePlacement()
  window.addEventListener('resize', updatePlacement)
  if (props.followMouse) window.addEventListener('mousemove', handleMouseMove)
  state.animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  state.observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) {
      initWebGL()
    } else {
      destroyWebGL()
    }
  }, { threshold: 0.01 })

  if (containerRef.value) state.observer.observe(containerRef.value)
})

onBeforeUnmount(() => {
  if (state.observer) state.observer.disconnect()
  destroyWebGL()
})

watch(() => ({ ...props }), applyUniformProps, { deep: true })
</script>

<template>
  <div ref="containerRef" class="light-rays-container" />
</template>
