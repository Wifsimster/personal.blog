<template>
  <header class="sticky top-0 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-zinc-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-14">
        <RouterLink :to="i18n.langPrefix.value || '/'" class="text-lg font-bold text-gray-900 dark:text-zinc-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          Wifsimster Blog
        </RouterLink>
        <div class="flex items-center gap-3">
          <button
            @click="i18n.switchLanguage(i18n.language.value === 'fr' ? 'en' : 'fr')"
            class="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors flex items-center justify-center focus-ring text-gray-700 dark:text-zinc-300"
            :aria-label="i18n.language.value === 'fr' ? 'Passer en anglais' : 'Switch to French'"
            :title="i18n.language.value === 'fr' ? 'Passer en anglais' : 'Switch to French'"
          >
            <FlagIcon :lang="i18n.language.value" class="w-5 h-5" />
          </button>
          <button
            @click="darkMode.toggleDark()"
            class="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors flex items-center justify-center focus-ring"
            :aria-label="darkMode.isDark.value ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <i :class="darkMode.isDark.value ? 'pi pi-moon' : 'pi pi-sun'" class="text-sm text-gray-700 dark:text-zinc-300"></i>
          </button>
          <button
            @click="menuOpen = !menuOpen"
            class="w-8 h-8 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-colors flex items-center justify-center focus-ring"
            aria-label="Toggle menu"
          >
            <i :class="menuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-sm text-gray-700 dark:text-zinc-300"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu Dropdown -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <nav class="px-4 py-3 space-y-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block px-3 py-2 text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-md transition-colors focus-ring"
            active-class="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
        <!-- Search -->
        <div class="px-4 py-3 border-t border-gray-200 dark:border-zinc-800">
          <div class="relative">
            <input
              v-model="localSearchQuery"
              type="text"
              :placeholder="i18n.t('home.searchPlaceholder')"
              @keyup.enter="handleSearch"
              class="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 placeholder-gray-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-900 text-sm"
            />
            <i class="pi pi-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-zinc-500 text-sm"></i>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { useDarkMode } from '@/composables/useDarkMode'
import { useSearch } from '@/composables/useSearch'
import FlagIcon from './FlagIcon.vue'

const i18n = useI18n()
const darkMode = useDarkMode()
const router = useRouter()
const { searchQuery, setSearchQuery } = useSearch()

const menuOpen = ref(false)
const localSearchQuery = ref('')

watch(searchQuery, (newValue) => {
  localSearchQuery.value = newValue
}, { immediate: true })

const navItems = computed(() => {
  return [
    { path: i18n.langPrefix.value || '/', label: i18n.t('nav.home') },
    { path: `${i18n.langPrefix.value}/archives`, label: i18n.t('nav.archives') }
  ]
})

const handleSearch = () => {
  if (localSearchQuery.value.trim()) {
    setSearchQuery(localSearchQuery.value.trim())
    const homePath = i18n.langPrefix.value || '/'
    if (router.currentRoute.value.path !== homePath) {
      router.push(homePath)
    }
    menuOpen.value = false
  }
}
</script>
