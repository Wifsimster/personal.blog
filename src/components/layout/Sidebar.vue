<template>
  <aside class="hidden lg:flex lg:flex-col w-80 border-r border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/50 sticky top-0 h-screen">
    <div class="flex-1 overflow-y-auto p-6">
      <!-- Top Section: Name and Theme Toggles -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-2">
          <RouterLink
            :to="i18n.langPrefix.value || '/'"
            class="text-lg font-semibold text-gray-900 dark:text-zinc-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
          >
            Damien BATTISTELLA
          </RouterLink>
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="i18n.switchLanguage(lang === 'fr' ? 'en' : 'fr')"
            class="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors flex items-center justify-center text-xs font-medium text-gray-700 dark:text-zinc-300"
            :aria-label="lang === 'fr' ? 'Switch to English' : 'Passer en français'"
          >
            {{ lang === 'fr' ? 'EN' : 'FR' }}
          </button>
          <button
            @click="darkMode.toggleDark()"
            class="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors flex items-center justify-center"
            :aria-label="darkMode.isDark.value ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <i :class="darkMode.isDark.value ? 'pi pi-moon' : 'pi pi-sun'" class="text-sm text-gray-700 dark:text-zinc-300"></i>
          </button>
        </div>
      </div>

      <hr class="border-gray-200 dark:border-zinc-800 mb-6" />

      <!-- Search Section -->
      <div class="mb-6">
        <div class="relative">
          <input
            v-model="localSearchQuery"
            type="text"
            :placeholder="i18n.t('home.searchPlaceholder')"
            @keyup.enter="handleSearch"
            class="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 placeholder-gray-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 text-sm"
          />
          <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-zinc-500 text-sm"></i>
          <button
            v-if="localSearchQuery"
            @click="clearSearch"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-zinc-500 hover:text-gray-600 dark:hover:text-zinc-300 transition-colors"
            aria-label="Clear search"
          >
            <i class="pi pi-times text-sm"></i>
          </button>
        </div>
        <!-- Top Tags -->
        <div v-if="topKeywords.length > 0" class="mt-3 flex flex-wrap gap-2">
          <RouterLink
            v-for="tag in topKeywords"
            :key="tag"
            :to="`${i18n.langPrefix.value}/tags/${encodeURIComponent(tag)}`"
            class="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            {{ tag }}
          </RouterLink>
        </div>
      </div>

      <hr class="border-gray-200 dark:border-zinc-800 mb-6" />

      <!-- About Me Section -->
      <div class="mb-6">
        <h2 class="text-sm font-semibold text-gray-900 dark:text-zinc-100 mb-3">
          {{ i18n.t('sidebar.aboutMe') }}
        </h2>
        <p class="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed mb-3">
          <template v-for="(segment, idx) in aboutMeSegments" :key="idx">
            <span v-if="segment.highlight" class="text-primary-600 dark:text-primary-400">{{ segment.text }}</span>
            <template v-else>{{ segment.text }}</template>
          </template>
        </p>
        <a
          href="https://cv.battistella.ovh/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
        >
          <i class="pi pi-user text-base"></i>
          <span>{{ i18n.t('sidebar.viewCV') }}</span>
        </a>
      </div>

      <hr class="border-gray-200 dark:border-zinc-800 mb-6" />

      <!-- Stay Connected Section -->
      <div>
        <h2 class="text-sm font-semibold text-gray-900 dark:text-zinc-100 mb-3">
          {{ i18n.t('sidebar.stayConnected') }}
        </h2>
        <div class="space-y-1">
          <a
            href="https://github.com/Wifsimster"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
          >
            <i class="pi pi-github text-base"></i>
            <span>{{ i18n.t('sidebar.github') }}</span>
          </a>
          <a
            href="https://www.linkedin.com/in/damien-battistella-💻-67964115"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
          >
            <i class="pi pi-linkedin text-base"></i>
            <span>{{ i18n.t('sidebar.linkedin') }}</span>
          </a>
          <a
            href="https://x.com/Wifsimster"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
          >
            <i class="pi pi-twitter text-base"></i>
            <span>{{ i18n.t('sidebar.x') }}</span>
          </a>
          <a
            :href="rssFeedUrl"
            target="_blank"
            rel="noopener noreferrer"
            type="application/rss+xml"
            class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded transition-colors"
          >
            <i class="pi pi-rss text-base"></i>
            <span>{{ i18n.t('sidebar.rssFeed') }}</span>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { useDarkMode } from '@/composables/useDarkMode'
import { useSearch } from '@/composables/useSearch'
import { getAllTags } from '@/posts'

const i18n = useI18n()
const darkMode = useDarkMode()
const router = useRouter()
const { searchQuery, setSearchQuery, clearSearch: clearGlobalSearch } = useSearch()

const lang = computed(() => i18n.language.value)
const localSearchQuery = ref('')
const rssFeedUrl = computed(() => lang.value === 'en' ? '/en/rss.xml' : '/rss.xml')

// Get top 3 tags
const tagCounts = getAllTags()
const topKeywords = computed(() => {
  return Object.entries(tagCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 3)
    .map(([tag]) => tag)
})

// Sync local search with global search
watch(searchQuery, (newValue) => {
  localSearchQuery.value = newValue
}, { immediate: true })

const handleSearch = () => {
  if (localSearchQuery.value.trim()) {
    setSearchQuery(localSearchQuery.value.trim())
    const homePath = i18n.langPrefix.value || '/'
    if (router.currentRoute.value.path !== homePath) {
      router.push(homePath)
    }
  }
}


const clearSearch = () => {
  localSearchQuery.value = ''
  clearGlobalSearch()
}

const aboutMeSegments = computed<Array<{ text: string; highlight: boolean }>>(() => {
  const text = i18n.t('sidebar.aboutMeText')
  const token = 'Damien BATTISTELLA'
  const idx = text.indexOf(token)
  if (idx === -1) return [{ text, highlight: false }]
  const segments: Array<{ text: string; highlight: boolean }> = []
  if (idx > 0) segments.push({ text: text.slice(0, idx), highlight: false })
  segments.push({ text: token, highlight: true })
  const tail = text.slice(idx + token.length)
  if (tail) segments.push({ text: tail, highlight: false })
  return segments
})
</script>
