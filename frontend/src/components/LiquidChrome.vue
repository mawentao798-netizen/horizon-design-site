<script setup>
import { Mesh, Program, Renderer, Triangle } from 'ogl'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  baseColor: { type: Array, default: () => [0.1, 0.1, 0.1] },
  speed: { type: Number, default: 0.2 },
  amplitude: { type: Number, default: 0.3 },
  frequencyX: { type: Number, default: 3 },
  frequencyY: { type: Number, default: 3 },
  interactive: { type: Boolean, default: true },
})

const containerRef = ref(null)
const state = {
  animationId: null,
  mesh: null,
  program: null,
  renderer: null,
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`

const fragmentShader = `
precision highp float;
uniform float uTime;
uniform vec3 uResolution;
uniform vec3 uBaseColor;
uniform float uAmplitude;
uniform float uFrequencyX;
uniform float uFrequencyY;
uniform vec2 uMouse;
varying vec2 vUv;

vec4 renderImage(vec2 uvCoord) {
  vec2 fragCoord = uvCoord * uResolution.xy;
  vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

  for (float i = 1.0; i < 10.0; i++) {
    uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
    uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
  }

  vec2 diff = (uvCoord - uMouse);
  float dist = length(diff);
  float falloff = exp(-dist * 20.0);
  float ripple = sin(10.0 * dist - uTime * 2.0) * 0.03;
  uv += (diff / (dist + 0.0001)) * ripple * falloff;

  vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
  return vec4(color, 1.0);
}

void main() {
  vec4 col = vec4(0.0);
  int samples = 0;
  for (int i = -1; i <= 1; i++) {
    for (int j = -1; j <= 1; j++) {
      vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
      col += renderImage(vUv + offset);
      samples++;
    }
  }
  gl_FragColor = col / float(samples);
}`

function resize() {
  if (!containerRef.value || !state.renderer || !state.program) return

  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const width = containerRef.value.offsetWidth
  const height = containerRef.value.offsetHeight
  state.renderer.dpr = dpr
  state.renderer.setSize(width, height)

  const resolution = state.program.uniforms.uResolution.value
  resolution[0] = state.renderer.gl.canvas.width
  resolution[1] = state.renderer.gl.canvas.height
  resolution[2] = state.renderer.gl.canvas.width / state.renderer.gl.canvas.height
}

function applyProps() {
  if (!state.program) return

  state.program.uniforms.uBaseColor.value = new Float32Array(props.baseColor)
  state.program.uniforms.uAmplitude.value = props.amplitude
  state.program.uniforms.uFrequencyX.value = props.frequencyX
  state.program.uniforms.uFrequencyY.value = props.frequencyY
}

function handleMouseMove(event) {
  if (!containerRef.value || !state.program) return

  const rect = containerRef.value.getBoundingClientRect()
  const mouse = state.program.uniforms.uMouse.value
  mouse[0] = (event.clientX - rect.left) / rect.width
  mouse[1] = 1 - (event.clientY - rect.top) / rect.height
}

function handleTouchMove(event) {
  if (!containerRef.value || !state.program || event.touches.length === 0) return

  const touch = event.touches[0]
  const rect = containerRef.value.getBoundingClientRect()
  const mouse = state.program.uniforms.uMouse.value
  mouse[0] = (touch.clientX - rect.left) / rect.width
  mouse[1] = 1 - (touch.clientY - rect.top) / rect.height
}

function animate(time) {
  if (!state.renderer || !state.program || !state.mesh) return

  state.animationId = requestAnimationFrame(animate)
  state.program.uniforms.uTime.value = time * 0.001 * props.speed
  state.renderer.render({ scene: state.mesh })
}

function destroyWebGL() {
  if (state.animationId) cancelAnimationFrame(state.animationId)
  state.animationId = null
  window.removeEventListener('resize', resize)

  if (containerRef.value) {
    containerRef.value.removeEventListener('mousemove', handleMouseMove)
    containerRef.value.removeEventListener('touchmove', handleTouchMove)
  }

  if (state.renderer) {
    const gl = state.renderer.gl
    const canvas = gl.canvas
    if (canvas.parentElement) canvas.parentElement.removeChild(canvas)
    gl.getExtension('WEBGL_lose_context')?.loseContext()
  }

  state.mesh = null
  state.program = null
  state.renderer = null
}

function initWebGL() {
  if (!containerRef.value || state.renderer) return

  const renderer = new Renderer({
    antialias: true,
    dpr: Math.min(window.devicePixelRatio || 1, 2),
  })
  state.renderer = renderer

  const gl = renderer.gl
  gl.clearColor(0, 0, 0, 1)
  gl.canvas.style.width = '100%'
  gl.canvas.style.height = '100%'

  const geometry = new Triangle(gl)
  const program = new Program(gl, {
    vertex: vertexShader,
    fragment: fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: new Float32Array([gl.canvas.width, gl.canvas.height, 1]) },
      uBaseColor: { value: new Float32Array(props.baseColor) },
      uAmplitude: { value: props.amplitude },
      uFrequencyX: { value: props.frequencyX },
      uFrequencyY: { value: props.frequencyY },
      uMouse: { value: new Float32Array([0.5, 0.5]) },
    },
  })
  state.program = program
  state.mesh = new Mesh(gl, { geometry, program })

  containerRef.value.appendChild(gl.canvas)
  resize()
  window.addEventListener('resize', resize)

  if (props.interactive) {
    containerRef.value.addEventListener('mousemove', handleMouseMove)
    containerRef.value.addEventListener('touchmove', handleTouchMove, { passive: true })
  }

  state.animationId = requestAnimationFrame(animate)
}

onMounted(initWebGL)
onBeforeUnmount(destroyWebGL)

watch(
  () => [props.baseColor, props.amplitude, props.frequencyX, props.frequencyY],
  applyProps,
  { deep: true },
)

watch(
  () => props.interactive,
  (interactive) => {
    if (!containerRef.value) return
    containerRef.value.removeEventListener('mousemove', handleMouseMove)
    containerRef.value.removeEventListener('touchmove', handleTouchMove)
    if (interactive) {
      containerRef.value.addEventListener('mousemove', handleMouseMove)
      containerRef.value.addEventListener('touchmove', handleTouchMove, { passive: true })
    }
  },
)
</script>

<template>
  <div ref="containerRef" class="liquid-chrome-container" />
</template>
