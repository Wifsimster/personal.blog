<template>
  <div class="min-h-screen transition-colors duration-200">
    <div ref="spotlight" class="tech-spotlight" aria-hidden="true"></div>
    <AppLayout>
      <RouterView />
    </AppLayout>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import { RouterView } from 'vue-router'
import AppLayout from './components/layout/AppLayout.vue'
import { useI18n } from '@/composables/useI18n'

const i18n = useI18n()

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = i18n.language.value
  }
})

// Cursor spotlight over the background dot grid. Decorative only — the layer
// itself lives in CSS (.tech-spotlight); here we just feed it the pointer
// position via CSS variables, rAF-throttled so we touch the DOM once a frame.
const spotlight = ref<HTMLElement | null>(null)
let rafId = 0
let pendingX = 0
let pendingY = 0

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function applyPosition() {
  rafId = 0
  const el = spotlight.value
  if (!el) return
  el.style.setProperty('--spot-x', `${pendingX}px`)
  el.style.setProperty('--spot-y', `${pendingY}px`)
  el.classList.add('is-active')
}

function onPointerMove(e: PointerEvent) {
  pendingX = e.clientX
  pendingY = e.clientY
  if (!rafId) rafId = requestAnimationFrame(applyPosition)
}

function onPointerLeave() {
  spotlight.value?.classList.remove('is-active')
}

onMounted(() => {
  if (prefersReducedMotion) return
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  document.addEventListener('pointerleave', onPointerLeave)
  window.addEventListener('blur', onPointerLeave)
})

onBeforeUnmount(() => {
  if (rafId) cancelAnimationFrame(rafId)
  window.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerleave', onPointerLeave)
  window.removeEventListener('blur', onPointerLeave)
})
</script>
