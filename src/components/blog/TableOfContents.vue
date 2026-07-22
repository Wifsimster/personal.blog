<template>
  <aside
    v-if="headings.length > 0"
    class="hidden lg:flex lg:flex-col w-64 border-l border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50"
  >
    <div class="sticky top-0 max-h-screen overflow-y-auto p-6">
      <h2 class="text-sm font-semibold text-gray-900 dark:text-zinc-100 mb-4">
        {{ i18n.t('toc.title') }}
      </h2>
      <nav class="space-y-1">
        <a
          v-for="heading in headings"
          :key="heading.id"
          :href="`#${heading.id}`"
          :class="[
            'block text-sm transition-colors rounded px-2 py-1 focus-ring',
            heading.level === 2
              ? 'text-gray-700 dark:text-zinc-300 font-medium'
              : 'text-gray-600 dark:text-zinc-400 pl-6',
            'hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-zinc-800',
            activeHeadingId === heading.id
              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 font-medium border-l-2 border-primary-600 dark:border-primary-400'
              : ''
          ]"
          @click.prevent="scrollToHeading(heading.id)"
        >
          {{ heading.text }}
        </a>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useThrottleFn } from '@vueuse/core'
import { useI18n } from '@/composables/useI18n'

interface Heading {
  id: string
  text: string
  level: number
}

// Constants
const SCROLL_OFFSET = 80 // Offset for fixed headers when scrolling
const ACTIVE_HEADING_OFFSET = 100 // Offset from top to consider a heading as active
const THROTTLE_DELAY = 100 // Throttle delay in milliseconds for scroll handler

const route = useRoute()
const i18n = useI18n()
const headings = ref<Heading[]>([])
const activeHeadingId = ref<string>('')

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function extractHeadings(): void {
  headings.value = []
  
  // Find the post content container
  const postContent = document.querySelector('.prose')
  if (!postContent) return

  // Find all h2 and h3 headings
  const headingElements = postContent.querySelectorAll('h2, h3')
  
  headingElements.forEach((element, index) => {
    const text = element.textContent || ''
    if (!text.trim()) return

    // Generate ID if not present
    let id = element.id
    if (!id) {
      id = slugify(text)
      // Ensure uniqueness
      let uniqueId = id
      let counter = 1
      while (document.getElementById(uniqueId)) {
        uniqueId = `${id}-${counter}`
        counter++
      }
      id = uniqueId
      element.id = id
    }

    headings.value.push({
      id,
      text: text.trim(),
      level: parseInt(element.tagName.substring(1))
    })
  })
}

function scrollToHeading(id: string): void {
  const element = document.getElementById(id)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - SCROLL_OFFSET

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

function updateActiveHeading(): void {
  if (headings.value.length === 0) return

  const scrollPosition = window.scrollY + ACTIVE_HEADING_OFFSET

  // Find the last heading that is above the scroll position
  let activeId = ''
  
  for (let i = headings.value.length - 1; i >= 0; i--) {
    const heading = headings.value[i]
    const element = document.getElementById(heading.id)
    
    if (element) {
      const elementTop = element.offsetTop
      
      if (elementTop <= scrollPosition) {
        activeId = heading.id
        break
      }
    }
  }

  // If no heading is found, use the first one
  if (!activeId && headings.value.length > 0) {
    activeId = headings.value[0].id
  }

  activeHeadingId.value = activeId
}

// Throttled scroll handler to improve performance
const handleScroll = useThrottleFn(() => {
  updateActiveHeading()
}, THROTTLE_DELAY)

async function updateHeadings(): Promise<void> {
  // Wait for post content to be rendered
  await nextTick()
  await new Promise(resolve => setTimeout(resolve, 300))
  extractHeadings()
  updateActiveHeading()
}

onMounted(() => {
  updateHeadings()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
  activeHeadingId.value = ''
  updateHeadings()
})
</script>
