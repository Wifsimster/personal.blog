<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-3"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-3"
  >
    <button
      v-if="visible"
      type="button"
      :aria-label="i18n.t('post.backToTop')"
      :title="i18n.t('post.backToTop')"
      class="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25 transition-colors duration-200 hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-95 dark:bg-primary-500 dark:shadow-primary-900/40 dark:hover:bg-primary-600 dark:focus-visible:ring-offset-zinc-900"
      @click="scrollToTop"
    >
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import { useI18n } from '@/composables/useI18n'

// Show the button once the reader has scrolled roughly one viewport down.
const SCROLL_THRESHOLD = 400

const i18n = useI18n()
const visible = ref(false)

function updateVisibility() {
  visible.value = window.scrollY > SCROLL_THRESHOLD
}

const handleScroll = useThrottleFn(updateVisibility, 100)

function scrollToTop() {
  // Honor the reader's motion preference; jump instantly if they opted out.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  updateVisibility()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
