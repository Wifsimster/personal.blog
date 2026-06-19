<template>
  <article class="bg-white/70 dark:bg-zinc-800/60 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-200/80 dark:border-zinc-700/80">
    <RouterLink :to="postLink" class="block">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
        {{ post.title }}
      </h2>
      <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-zinc-400 mb-3">
        <time :datetime="post.date">{{ formattedDate }}</time>
        <span class="text-gray-300 dark:text-zinc-600">|</span>
        <span>{{ i18n.t('post.readingTime', { min: String(readingTime) }) }}</span>
      </div>
      <p v-if="post.description" class="text-gray-700 dark:text-zinc-300 mb-4 line-clamp-3">
        {{ post.description }}
      </p>
      <div v-if="post.tags && post.tags.length > 0" class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-zinc-400 rounded"
        >
          {{ tag }}
        </span>
      </div>
    </RouterLink>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Post } from '@/utils/posts'
import { formatDate, estimateReadingTime } from '@/utils/posts'
import { useI18n } from '@/composables/useI18n'

const props = defineProps<{
  post: Post
}>()

const i18n = useI18n()

const postLink = computed(() => `${i18n.langPrefix.value}/posts/${props.post.slug}`)
const formattedDate = computed(() => formatDate(props.post.date, i18n.language.value))
const readingTime = computed(() => estimateReadingTime(props.post.html, i18n.language.value))
</script>
