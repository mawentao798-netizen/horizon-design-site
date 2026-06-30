<script setup>
import { gsap } from 'gsap'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  logo: { type: String, required: true },
  logoAlt: { type: String, default: 'Logo' },
  items: { type: Array, required: true },
  activeHref: { type: String, default: '' },
  ease: { type: String, default: 'power3.easeOut' },
  baseColor: { type: String, default: '#fff' },
  pillColor: { type: String, default: '#120f17' },
  hoveredPillTextColor: { type: String, default: '#120f17' },
  pillTextColor: { type: String, default: '' },
  initialLoadAnimation: { type: Boolean, default: true },
})

const circleRefs = ref([])
const hamburgerRef = ref(null)
const isMobileMenuOpen = ref(false)
const logoImgRef = ref(null)
const logoRef = ref(null)
const mobileMenuRef = ref(null)
const navItemsRef = ref(null)

const timelines = []
const activeTweens = []
let logoTween = null

const cssVars = computed(() => ({
  '--base': props.baseColor,
  '--pill-bg': props.pillColor,
  '--hover-text': props.hoveredPillTextColor,
  '--pill-text': props.pillTextColor || props.baseColor,
}))

function setCircleRef(element, index) {
  if (element) circleRefs.value[index] = element
}

function layout() {
  circleRefs.value.forEach((circle, index) => {
    if (!circle?.parentElement) return

    const pill = circle.parentElement
    const rect = pill.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const radius = ((width * width) / 4 + height * height) / (2 * height)
    const diameter = Math.ceil(2 * radius) + 2
    const delta = Math.ceil(radius - Math.sqrt(Math.max(0, radius * radius - (width * width) / 4))) + 1
    const originY = diameter - delta

    circle.style.width = `${diameter}px`
    circle.style.height = `${diameter}px`
    circle.style.bottom = `-${delta}px`

    gsap.set(circle, {
      xPercent: -50,
      scale: 0,
      transformOrigin: `50% ${originY}px`,
    })

    const label = pill.querySelector('.pill-label')
    const hoverLabel = pill.querySelector('.pill-label-hover')
    if (label) gsap.set(label, { y: 0 })
    if (hoverLabel) gsap.set(hoverLabel, { y: height + 12, opacity: 0 })

    timelines[index]?.kill()
    const timeline = gsap.timeline({ paused: true })
    timeline.to(circle, { scale: 1.2, xPercent: -50, duration: 2, ease: props.ease, overwrite: 'auto' }, 0)

    if (label) timeline.to(label, { y: -(height + 8), duration: 2, ease: props.ease, overwrite: 'auto' }, 0)
    if (hoverLabel) {
      gsap.set(hoverLabel, { y: Math.ceil(height + 100), opacity: 0 })
      timeline.to(hoverLabel, { y: 0, opacity: 1, duration: 2, ease: props.ease, overwrite: 'auto' }, 0)
    }

    timelines[index] = timeline
  })
}

async function initialize() {
  await nextTick()
  layout()

  if (mobileMenuRef.value) {
    gsap.set(mobileMenuRef.value, { visibility: 'hidden', opacity: 0, scaleY: 1 })
  }

  if (!props.initialLoadAnimation) return

  if (logoRef.value) {
    gsap.set(logoRef.value, { scale: 0 })
    gsap.to(logoRef.value, { scale: 1, duration: 0.6, ease: props.ease })
  }

  if (navItemsRef.value) {
    gsap.set(navItemsRef.value, { width: 0, overflow: 'hidden' })
    gsap.to(navItemsRef.value, { width: 'auto', duration: 0.6, ease: props.ease })
  }
}

function handleEnter(index) {
  const timeline = timelines[index]
  if (!timeline) return
  activeTweens[index]?.kill()
  activeTweens[index] = timeline.tweenTo(timeline.duration(), {
    duration: 0.3,
    ease: props.ease,
    overwrite: 'auto',
  })
}

function handleLeave(index) {
  const timeline = timelines[index]
  if (!timeline) return
  activeTweens[index]?.kill()
  activeTweens[index] = timeline.tweenTo(0, {
    duration: 0.2,
    ease: props.ease,
    overwrite: 'auto',
  })
}

function handleLogoEnter() {
  const image = logoImgRef.value
  if (!image) return
  logoTween?.kill()
  gsap.set(image, { rotate: 0 })
  logoTween = gsap.to(image, { rotate: 360, duration: 0.2, ease: props.ease, overwrite: 'auto' })
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
  const menu = mobileMenuRef.value
  const hamburger = hamburgerRef.value

  if (hamburger) {
    const lines = hamburger.querySelectorAll('.hamburger-line')
    gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease: props.ease })
    gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease: props.ease })
  }

  if (!menu) return
  gsap.to(menu, {
    opacity: 0,
    y: 10,
    scaleY: 1,
    duration: 0.2,
    ease: props.ease,
    transformOrigin: 'top center',
    onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
  })
}

function toggleMobileMenu() {
  const nextState = !isMobileMenuOpen.value
  isMobileMenuOpen.value = nextState
  const hamburger = hamburgerRef.value
  const menu = mobileMenuRef.value

  if (hamburger) {
    const lines = hamburger.querySelectorAll('.hamburger-line')
    if (nextState) {
      gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease: props.ease })
      gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease: props.ease })
    } else {
      gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease: props.ease })
      gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease: props.ease })
    }
  }

  if (!menu) return
  if (nextState) {
    gsap.set(menu, { visibility: 'visible' })
    gsap.fromTo(
      menu,
      { opacity: 0, y: 10, scaleY: 1 },
      { opacity: 1, y: 0, scaleY: 1, duration: 0.3, ease: props.ease, transformOrigin: 'top center' },
    )
  } else {
    closeMobileMenu()
  }
}

onMounted(() => {
  initialize()
  window.addEventListener('resize', layout)
  if (document.fonts?.ready) document.fonts.ready.then(layout).catch(() => {})
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', layout)
  timelines.forEach((timeline) => timeline?.kill())
  activeTweens.forEach((tween) => tween?.kill())
  logoTween?.kill()
})

watch(() => [props.items, props.ease], initialize, { deep: true })
</script>

<template>
  <div class="pill-nav-container">
    <nav class="pill-nav" :style="cssVars" aria-label="Primary">
      <a ref="logoRef" class="pill-logo" href="#/" aria-label="Home" @mouseenter="handleLogoEnter">
        <img ref="logoImgRef" :src="logo" :alt="logoAlt" />
      </a>

      <div ref="navItemsRef" class="pill-nav-items desktop-only">
        <ul class="pill-list" role="menubar">
          <li v-for="(item, index) in items" :key="item.href || index" role="none">
            <a
              role="menuitem"
              :href="item.href"
              :class="['pill', { 'is-active': activeHref === item.href }]"
              :aria-label="item.ariaLabel || item.label"
              @mouseenter="handleEnter(index)"
              @mouseleave="handleLeave(index)"
            >
              <span :ref="(element) => setCircleRef(element, index)" class="hover-circle" aria-hidden="true" />
              <span class="label-stack">
                <span class="pill-label">{{ item.label }}</span>
                <span class="pill-label-hover" aria-hidden="true">{{ item.label }}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <button
        ref="hamburgerRef"
        class="mobile-menu-button mobile-only"
        type="button"
        aria-label="Toggle menu"
        @click="toggleMobileMenu"
      >
        <span class="hamburger-line" />
        <span class="hamburger-line" />
      </button>
    </nav>

    <div ref="mobileMenuRef" class="mobile-menu-popover mobile-only" :style="cssVars">
      <ul class="mobile-menu-list">
        <li v-for="(item, index) in items" :key="item.href || `mobile-${index}`">
          <a
            :href="item.href"
            :class="['mobile-menu-link', { 'is-active': activeHref === item.href }]"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
