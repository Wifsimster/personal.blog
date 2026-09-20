<template>
  <section class="prose prose-lg dark:prose-invert max-w-none">
    <div ref="contentRef" v-html="sanitizedHtml" class="post-content"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
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
  let processedHtml = processPostImages(props.html)

  // Wrap inline diagrams in a horizontally scrollable container. The SVGs use
  // an 800-unit viewBox, so on a narrow viewport scaling them to fit shrinks
  // every label below legibility; the wrapper lets them keep a readable size
  // and scroll instead. See .diagram-scroll in main.css.
  processedHtml = processedHtml.replace(
    /<svg\b[^>]*\bclass="[^"]*\bdiagram-svg\b[^"]*"[\s\S]*?<\/svg>/g,
    (svg) => `<div class="diagram-scroll">${svg}</div>`
  )
  
  // Sanitize HTML to prevent XSS attacks
  return DOMPurify.sanitize(processedHtml, {
    ALLOWED_TAGS: ['p', 'br', 'hr', 'strong', 'em', 'u', 'abbr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img', 'picture', 'source', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'svg', 'g', 'rect', 'line', 'polygon', 'polyline', 'path', 'circle', 'ellipse', 'text', 'tspan'],
    ALLOWED_ATTR: ['href', 'download', 'src', 'srcset', 'sizes', 'type', 'media', 'loading', 'decoding', 'alt', 'title', 'class', 'id', 'target', 'rel', 'data-gallery-image', 'viewBox', 'xmlns', 'role', 'aria-label', 'aria-labelledby', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray', 'opacity', 'x', 'y', 'x1', 'x2', 'y1', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'width', 'height', 'points', 'd', 'transform', 'font-family', 'font-size', 'font-weight', 'font-style', 'letter-spacing', 'text-anchor', 'dominant-baseline']
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

// abbr's title attribute never fires on touch — mobile, the site's primary
// device, can't read it at all. Tap/click toggles a positioned popover
// instead; one shared tooltip node, reused for every abbr on the page.
let abbrTooltipEl: HTMLDivElement | null = null
let activeAbbr: HTMLElement | null = null

const ensureAbbrTooltip = (): HTMLDivElement => {
  if (!abbrTooltipEl) {
    abbrTooltipEl = document.createElement('div')
    abbrTooltipEl.className = 'abbr-tooltip'
    abbrTooltipEl.setAttribute('role', 'tooltip')
    abbrTooltipEl.style.visibility = 'hidden'
    document.body.appendChild(abbrTooltipEl)
  }
  return abbrTooltipEl
}

const hideAbbrTooltip = () => {
  if (abbrTooltipEl) abbrTooltipEl.style.visibility = 'hidden'
  activeAbbr = null
}

const showAbbrTooltip = (abbr: HTMLElement) => {
  const text = abbr.getAttribute('title')
  if (!text) return

  const tooltip = ensureAbbrTooltip()
  tooltip.textContent = text
  tooltip.style.left = '0px'
  tooltip.style.top = '0px'
  tooltip.style.visibility = 'hidden'

  const abbrRect = abbr.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()
  const margin = 8

  let left = abbrRect.left + abbrRect.width / 2 - tooltipRect.width / 2
  left = Math.max(margin, Math.min(left, window.innerWidth - tooltipRect.width - margin))

  let top = abbrRect.bottom + 8
  if (top + tooltipRect.height > window.innerHeight - margin) {
    top = abbrRect.top - tooltipRect.height - 8
  }

  tooltip.style.left = `${left}px`
  tooltip.style.top = `${top}px`
  tooltip.style.visibility = 'visible'
  activeAbbr = abbr
}

const onDocumentPointerDown = (event: PointerEvent) => {
  if (!activeAbbr) return
  const target = event.target as Node
  if (abbrTooltipEl?.contains(target) || activeAbbr.contains(target)) return
  hideAbbrTooltip()
}

const onDocumentKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') hideAbbrTooltip()
}

const onViewportChange = () => {
  if (activeAbbr) hideAbbrTooltip()
}

const setupAbbrTooltips = async () => {
  await nextTick()
  if (!contentRef.value) return

  const abbrs = Array.from(contentRef.value.querySelectorAll('abbr[title]'))
  abbrs.forEach((node) => {
    const abbr = node as HTMLElement
    if ((abbr as any).__abbrHandlerAttached) return

    abbr.setAttribute('tabindex', '0')

    const toggle = (event: Event) => {
      event.stopPropagation()
      if (activeAbbr === abbr) {
        hideAbbrTooltip()
      } else {
        showAbbrTooltip(abbr)
      }
    }

    abbr.addEventListener('click', toggle)
    abbr.addEventListener('keydown', (event) => {
      const key = (event as KeyboardEvent).key
      if (key === 'Enter' || key === ' ') {
        event.preventDefault()
        toggle(event)
      }
    })

    ;(abbr as any).__abbrHandlerAttached = true
  })
}

// A diagram wider than the viewport scrolls (see the note in main.css) but
// gave no sign of it — verified on a real phone, the content just looked
// cut off. These two classes drive the edge-fade mask: set from the actual
// scroll position, so the fade only ever covers an edge that still hides
// content, and disappears once nothing is left to reveal.
const updateDiagramScrollFade = (el: HTMLElement) => {
  const canScrollLeft = el.scrollLeft > 4
  const canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 4
  el.classList.toggle('can-scroll-left', canScrollLeft)
  el.classList.toggle('can-scroll-right', canScrollRight)
}

const getDiagramScrollers = (): HTMLElement[] => {
  if (!contentRef.value) return []
  return Array.from(contentRef.value.querySelectorAll('.diagram-scroll'))
}

const onDiagramScrollersResize = () => {
  getDiagramScrollers().forEach(updateDiagramScrollFade)
}

const setupDiagramScrollFades = async () => {
  await nextTick()
  getDiagramScrollers().forEach((el) => {
    if ((el as any).__scrollFadeAttached) return
    updateDiagramScrollFade(el)
    el.addEventListener('scroll', () => updateDiagramScrollFade(el), { passive: true })
    ;(el as any).__scrollFadeAttached = true
  })
}

// Watch for HTML changes and set up handlers
watch(() => props.html, () => {
  setupImageClickHandlers()
  setupAbbrTooltips()
  hideAbbrTooltip()
  setupDiagramScrollFades()
}, { immediate: false })

onMounted(() => {
  setupImageClickHandlers()
  setupAbbrTooltips()
  setupDiagramScrollFades()
  document.addEventListener('pointerdown', onDocumentPointerDown)
  document.addEventListener('keydown', onDocumentKeydown)
  window.addEventListener('scroll', onViewportChange, true)
  window.addEventListener('resize', onViewportChange)
  window.addEventListener('resize', onDiagramScrollersResize)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', onDocumentPointerDown)
  document.removeEventListener('keydown', onDocumentKeydown)
  window.removeEventListener('scroll', onViewportChange, true)
  window.removeEventListener('resize', onViewportChange)
  window.removeEventListener('resize', onDiagramScrollersResize)
  abbrTooltipEl?.remove()
  abbrTooltipEl = null
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
