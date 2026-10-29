import { JSDOM } from 'jsdom'
import createDOMPurify, { type WindowLike } from 'dompurify'
import { processPostImages } from '@/lib/imageProcessing'
import { getPostBySlug, isDraft, isScheduled } from '@/posts'
import type { Language } from '@/types/i18n'

const { window } = new JSDOM('')
const purify = createDOMPurify(window as unknown as WindowLike)

const PURIFY_CONFIG = {
  ALLOWED_TAGS: ['p', 'br', 'hr', 'strong', 'em', 'u', 'abbr', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img', 'picture', 'source', 'figure', 'figcaption', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'svg', 'g', 'rect', 'line', 'polygon', 'polyline', 'path', 'circle', 'ellipse', 'text', 'tspan'],
  ALLOWED_ATTR: ['href', 'download', 'src', 'srcset', 'sizes', 'type', 'media', 'loading', 'decoding', 'alt', 'title', 'class', 'id', 'target', 'rel', 'data-gallery-image', 'viewBox', 'xmlns', 'role', 'aria-label', 'aria-labelledby', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity', 'stroke-linecap', 'stroke-linejoin', 'stroke-dasharray', 'opacity', 'x', 'y', 'x1', 'x2', 'y1', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'width', 'height', 'points', 'd', 'transform', 'font-family', 'font-size', 'font-weight', 'font-style', 'letter-spacing', 'text-anchor', 'dominant-baseline']
}

const NOT_YET_LABEL: Record<Language, string> = {
  fr: ' (à venir)',
  en: ' (coming soon)'
}

export interface Heading {
  id: string
  text: string
  level: number
}

export interface RenderedPost {
  html: string
  headings: Heading[]
}

function neutralizeHiddenPostLinks(html: string, locale: Language): string {
  const re = /<a[^>]*href="\/(?:en\/)?posts\/([a-z0-9-]+)"[^>]*>([\s\S]*?)<\/a>/g
  return html.replace(re, (anchor, slug: string, inner: string) => {
    const info = getPostBySlug(slug)
    const hidden = !!info && (isDraft(info) || isScheduled(info))
    return hidden
      ? `<span class="text-gray-500 dark:text-zinc-500">${inner}${NOT_YET_LABEL[locale]}</span>`
      : anchor
  })
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function addHeadingIds(html: string): RenderedPost {
  const container = window.document.createElement('div')
  container.innerHTML = html
  const taken = new Set(Array.from(container.querySelectorAll('[id]'), (el) => el.id))
  const headings: Heading[] = []

  for (const element of Array.from(container.querySelectorAll('h2, h3'))) {
    const text = element.textContent || ''
    if (!text.trim()) continue

    let id = element.id
    if (!id) {
      const base = slugify(text)
      id = base
      let counter = 1
      while (taken.has(id)) {
        id = `${base}-${counter}`
        counter++
      }
      element.id = id
      taken.add(id)
    }
    headings.push({ id, text: text.trim(), level: parseInt(element.tagName.substring(1)) })
  }

  return { html: container.innerHTML, headings }
}

export function renderPostHtml(html: string, locale: Language): RenderedPost {
  if (!html) return { html: '', headings: [] }

  let processed = processPostImages(html, window.document)

  processed = processed.replace(
    /<svg\b[^>]*\bclass="[^"]*\bdiagram-svg\b[^"]*"[\s\S]*?<\/svg>/g,
    (svg) => `<div class="diagram-scroll">${svg}</div>`
  )

  const sanitized = purify.sanitize(processed, PURIFY_CONFIG)
  return addHeadingIds(neutralizeHiddenPostLinks(sanitized, locale))
}

export function htmlToText(html: string): string {
  const container = window.document.createElement('div')
  container.innerHTML = html
  return container.textContent || ''
}
