<template>
  <div>
    <!-- Reading progress bar -->
    <div
      v-if="postInfo && post"
      class="fixed top-0 left-0 z-50 h-[3px] bg-primary-500 transition-all duration-150 ease-out"
      :style="{ width: `${progress}%` }"
    ></div>

    <div v-if="postInfo && post">
      <div class="mb-6">
        <RouterLink
          :to="`${langPrefix}/`"
          class="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          {{ i18n.t('post.goBack') }}
        </RouterLink>
      </div>
      <article>
        <header class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
            {{ post.title }}
          </h1>
          <p v-if="post.description" class="text-xl text-gray-600 dark:text-zinc-400 mb-4 subtitle">
            {{ post.description }}
          </p>
          <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-zinc-400 mb-4">
            <time :datetime="post.date">{{ formattedDate }}</time>
            <span class="text-gray-300 dark:text-zinc-600">|</span>
            <span>{{ i18n.t('post.readingTime', { min: String(readingTime) }) }}</span>
          </div>
          <div v-if="post.tags && post.tags.length > 0" class="mb-6">
            <TagList :tags="post.tags" />
          </div>
        </header>
        <main>
          <PostContent
            v-if="post"
            :html="post.html"
            :on-image-click="handleImageClick"
          />
        </main>
      </article>

      <!-- Related Posts -->
      <section v-if="relatedPosts.length > 0" class="mt-12 pt-8 border-t border-gray-200 dark:border-zinc-800">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-zinc-100 mb-6">
          {{ i18n.t('post.relatedPosts') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <RouterLink
            v-for="related in relatedPosts"
            :key="related.slug"
            :to="`${langPrefix}/posts/${related.slug}`"
            class="block p-4 rounded-lg border border-gray-200 dark:border-zinc-700 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-md transition-all bg-white dark:bg-zinc-800"
          >
            <h3 class="font-semibold text-gray-900 dark:text-zinc-100 mb-2 line-clamp-2">
              {{ related.title }}
            </h3>
            <div class="flex items-center gap-3 text-xs text-gray-500 dark:text-zinc-400">
              <time :datetime="related.date">{{ formatDate(related.date, lang) }}</time>
              <span>{{ i18n.t('post.readingTime', { min: String(estimateReadingTime(related.html, lang)) }) }}</span>
            </div>
          </RouterLink>
        </div>
      </section>
    </div>
    <div v-else class="min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div class="text-center max-w-2xl mx-auto">
        <div class="text-8xl mb-6 inline-block">🔍</div>
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-zinc-100 mb-4">
          {{ i18n.t('post.notFound.title') }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-zinc-400 mb-3">
          {{ i18n.t('post.notFound.message') }}
        </p>
        <p class="text-lg text-gray-500 dark:text-zinc-500 mb-8">
          {{ i18n.t('post.notFound.suggestion') }}
        </p>
        <div class="mb-12">
          <RouterLink
            :to="`${langPrefix}/`"
            class="inline-flex items-center px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-lg font-medium transition-all duration-300 hover:bg-primary-700 dark:hover:bg-primary-600 hover:scale-105 hover:shadow-lg active:scale-95 shadow-md"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            {{ i18n.t('post.notFound.backHome') }}
          </RouterLink>
        </div>
        <div class="flex justify-center items-center gap-4 flex-wrap">
          <span class="text-3xl inline-block">📝</span>
          <span class="text-3xl inline-block">💻</span>
          <span class="text-3xl inline-block">🚀</span>
          <span class="text-3xl inline-block">✨</span>
        </div>
      </div>
    </div>
    <ImageGallery
      v-model="galleryIsOpen"
      :images="galleryImages"
      :initial-index="galleryCurrentIndex"
    />
    <BackToTop v-if="postInfo && post" />
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { usePosts } from '@/composables/usePosts'
import { useImageGallery } from '@/composables/useImageGallery'
import { useReadingProgress } from '@/composables/useReadingProgress'
import { useEngagedReadBeacon } from '@/composables/useAnalytics'
import { formatDate, estimateReadingTime } from '@/utils/posts'
import type { Post } from '@/utils/posts'
import { getAllPosts } from '@/posts'
import { sortPostsByDate } from '@/utils/posts'
import TagList from '@/components/blog/TagList.vue'
import ImageGallery from '@/components/blog/ImageGallery.vue'
import PostContent from '@/components/blog/PostContent.vue'
import BackToTop from '@/components/blog/BackToTop.vue'
import { getPostBySlug as getPostInfoBySlug } from '@/posts'
import type { GalleryImage } from '@/components/blog/ImageGallery.vue'

const route = useRoute()
const i18n = useI18n()
const { getPostBySlug } = usePosts()
const gallery = useImageGallery()
const { progress } = useReadingProgress()

const lang = computed(() => route.path.startsWith('/en') ? 'en' : 'fr')
const langPrefix = computed(() => lang.value === 'en' ? '/en' : '')
const slug = computed(() => route.params.slug as string)

const postInfo = computed(() => getPostInfoBySlug(slug.value))
const post = computed<Post | undefined>(() => {
  return getPostBySlug(slug.value, lang.value)
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  return formatDate(post.value.date, lang.value)
})

const readingTime = computed(() => {
  if (!post.value) return 1
  return estimateReadingTime(post.value.html, lang.value)
})

// Fire a single cookieless "engaged read" beacon once the reader has either
// dwelled for 10s or scrolled past 50%. Opts-out automatically if the post
// failed to load (404), if VITE_STATS_URL is unset, or if the reader leaves
// before the threshold.
useEngagedReadBeacon(() => {
  if (!post.value) return null
  return {
    path: route.path,
    title: post.value.title
  }
})

// Dynamic document title
watchEffect(() => {
  if (post.value) {
    document.title = `${post.value.title} | Wifsimster Blog`
  } else {
    document.title = 'Wifsimster Blog'
  }
})

// Related posts: find posts sharing tags with current post, exclude current
const relatedPosts = computed(() => {
  if (!post.value?.tags?.length) return []
  const currentTags = new Set(post.value.tags)
  const currentSlug = slug.value
  const allPosts = getAllPosts(lang.value)

  const scored = allPosts
    .filter(p => p.slug !== currentSlug)
    .map(p => {
      const sharedTags = (p.tags || []).filter(t => currentTags.has(t)).length
      return { post: p, score: sharedTags }
    })
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())

  return scored.slice(0, 3).map(s => s.post)
})

const handleImageClick = (images: GalleryImage[], index: number) => {
  gallery.openGallery(images, index)
}

const galleryImages = computed(() => gallery.images.value)
const galleryCurrentIndex = computed(() => gallery.currentIndex.value)
const galleryIsOpen = computed({
  get: () => gallery.isOpen.value,
  set: (value: boolean) => {
    gallery.isOpen.value = value
  }
})
</script>
