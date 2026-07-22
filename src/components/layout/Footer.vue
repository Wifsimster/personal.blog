<template>
  <footer class="border-t border-gray-200 dark:border-zinc-800 mt-12 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div class="text-sm text-gray-600 dark:text-zinc-400 flex flex-wrap items-center gap-x-2 gap-y-1 justify-center md:justify-start">
          <span>{{ i18n.t('footer.copyright') }} - {{ i18n.t('footer.blog') }}</span>
          <span aria-hidden="true">·</span>
          <RouterLink
            :to="`${i18n.langPrefix.value}/privacy`"
            class="rounded hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-ring"
          >
            {{ i18n.t('footer.privacy') }}
          </RouterLink>
        </div>
        <div class="flex items-center space-x-6">
          <a
            href="https://github.com/Wifsimster"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded text-gray-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-ring"
            aria-label="GitHub"
          >
            <i class="pi pi-github text-xl"></i>
          </a>
          <a
            href="https://twitter.com/wifsimster"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded text-gray-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-ring"
            aria-label="Twitter"
          >
            <i class="pi pi-twitter text-xl"></i>
          </a>
          <a
            :href="rssFeedUrl"
            target="_blank"
            rel="noopener noreferrer"
            type="application/rss+xml"
            class="rounded text-gray-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus-ring"
            :aria-label="i18n.t('sidebar.rssFeed')"
          >
            <i class="pi pi-rss text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'

const i18n = useI18n()
const rssFeedUrl = computed(() => i18n.language.value === 'en' ? '/en/rss.xml' : '/rss.xml')
</script>
