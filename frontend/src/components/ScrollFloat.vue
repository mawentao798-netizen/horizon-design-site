<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'h2' },
  containerClass: { type: String, default: '' },
  textClass: { type: String, default: '' },
  animationDuration: { type: Number, default: 1 },
  ease: { type: String, default: 'back.inOut(2)' },
  scrollStart: { type: String, default: 'center bottom+=50%' },
  scrollEnd: { type: String, default: 'bottom bottom-=40%' },
  stagger: { type: Number, default: 0.03 },
})

const containerRef = ref(null)
let animation = null

const chars = computed(() =>
  props.text.split('').map((char, index) => ({
    id: `${char}-${index}`,
    value: char === ' ' ? '\u00A0' : char,
  })),
)

function cleanupAnimation() {
  if (!animation) return
  if (animation.scrollTrigger) animation.scrollTrigger.kill()
  animation.kill()
  animation = null
}

async function initAnimation() {
  cleanupAnimation()
  await nextTick()

  const element = containerRef.value
  if (!element) return

  const charElements = element.querySelectorAll('.char')
  if (!charElements.length) return

  animation = gsap.fromTo(
    charElements,
    {
      willChange: 'opacity, transform',
      opacity: 0,
      yPercent: 120,
      scaleY: 2.3,
      scaleX: 0.7,
      transformOrigin: '50% 0%',
    },
    {
      duration: props.animationDuration,
      ease: props.ease,
      opacity: 1,
      yPercent: 0,
      scaleY: 1,
      scaleX: 1,
      stagger: props.stagger,
      scrollTrigger: {
        trigger: element,
        start: props.scrollStart,
        end: props.scrollEnd,
        scrub: true,
      },
    },
  )
}

onMounted(initAnimation)
onBeforeUnmount(cleanupAnimation)

watch(
  () => [
    props.text,
    props.animationDuration,
    props.ease,
    props.scrollStart,
    props.scrollEnd,
    props.stagger,
  ],
  initAnimation,
)
</script>

<template>
  <component :is="tag" ref="containerRef" :class="['scroll-float', containerClass]">
    <span :class="['scroll-float-text', textClass]">
      <span v-for="char in chars" :key="char.id" class="char">{{ char.value }}</span>
    </span>
  </component>
</template>
