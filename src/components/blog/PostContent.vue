<template>
  <section class="prose prose-lg dark:prose-invert max-w-none">
    <div ref="contentRef" v-html="sanitizedHtml" class="post-content"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import DOMPurify from 'dompurify'
import { processPostImages } from '@/utils/imageProcessing'
import type { GalleryImage } from '@/components/blog/ImageGallery.vue'

const props = defineProps<{
  html: string
  onImageClick?: (images: GalleryImage[], index: number) => void
}>()

const contentRef = ref<HTMLDivElement>()

// Process HTML to wrap images in grid containers, then sanitize
const sanitizedHtml = computed(() => {
  if (!props.html) return ''
  
  // Process images first to wrap them in grid containers
  const processedHtml = processPostImages(props.html)
  
  // Sanitize HTML to prevent XSS attacks
  return DOMPurify.sanitize(processedHtml, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'svg', 'g', 'rect', 'line', 'polygon', 'polyline', 'path', 'circle', 'ellipse', 'text', 'tspan'],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel', 'data-gallery-image', 'viewBox', 'xmlns', 'role', 'aria-label', 'aria-labelledby', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray', 'x', 'y', 'x1', 'x2', 'y1', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'width', 'height', 'points', 'd', 'transform', 'font-family', 'font-size', 'font-weight', 'text-anchor', 'dominant-baseline']
  })
})

// Set up click handlers for images after content is rendered
const setupImageClickHandlers = async () => {
  await nextTick()
  
  if (!contentRef.value || !props.onImageClick) return

  // Collect all images for the gallery
  const allImages: GalleryImage[] = []
  const imageElements = Array.from(contentRef.value.querySelectorAll('img[data-gallery-image]'))
  
  imageElements.forEach((img) => {
    const src = img.getAttribute('src') || ''
    const alt = img.getAttribute('alt') || ''
    if (src) {
      allImages.push({
        itemImageSrc: src,
        thumbnailImageSrc: src,
        alt: alt
      })
    }
  })

  if (allImages.length === 0) return

  // Attach click handlers to each image
  imageElements.forEach((img) => {
    const imgElement = img as HTMLImageElement
    const src = imgElement.getAttribute('src') || ''
    const imageIndex = allImages.findIndex(i => i.itemImageSrc === src)
    
    // Check if handler already attached to avoid duplicates
    if ((imgElement as any).__galleryHandlerAttached) return
    
    // Add click handler
    const clickHandler = () => {
      if (props.onImageClick) {
        props.onImageClick(allImages, imageIndex >= 0 ? imageIndex : 0)
      }
    }
    
    imgElement.addEventListener('click', clickHandler)
    ;(imgElement as any).__galleryHandlerAttached = true
    ;(imgElement as any).__galleryClickHandler = clickHandler
  })
}

// Watch for HTML changes and set up handlers
watch(() => props.html, () => {
  setupImageClickHandlers()
}, { immediate: false })

onMounted(() => {
  setupImageClickHandlers()
})
</script>

<style scoped>
@import "tailwindcss" reference;

.post-content :deep(pre) {
  @apply overflow-x-auto;
}

.post-content :deep(code) {
  @apply font-mono text-sm;
}
</style>
