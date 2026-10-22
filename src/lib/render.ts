/**
 * Build-time rendering of a post body. Everything the SPA used to do in the
 * reader's browser before showing an article now runs once, here, and the
 * result is written into the static page:
 *
 *   1. consecutive images become a responsive grid, each wrapped in <picture>
 *      with its AVIF sibling (src/lib/imageProcessing.ts);
 *   2. inline diagrams get their horizontal-scroll wrapper;
 *   3. DOMPurify filters the markup against the allowlist below;
 *   4. links into a hidden (draft or scheduled) post turn into inert text;
 *   5. h2/h3 get stable ids, collected for the table of contents.
 */
import { JSDOM } from 'jsdom'
import createDOMPurify, { type WindowLike } from 'dompurify'
import { processPostImages } from '@/lib/imageProcessing'
import { getPostBySlug, isDraft, isScheduled } from '@/posts'
import type { Language } from '@/types/i18n'

const { window } = new JSDOM('')
const purify = createDOMPurify(window as unknown as WindowLike)

/**
 * The tags and attributes a post may use. Anything else is stripped from the
 * published page. `.claude/hooks/check-post.mjs` reads both lists out of this
 * file, so extend them here when a post needs a new tag or attribute.
 */
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

/**
 * A published post can cross-link a post that is still a draft or carries a
 * future date. Both stay reachable at their own URL for review, but a live
 * article must not hand every visitor a working link into unpublished
 * content. The anchor becomes muted text with a small suffix instead.
 */
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

/** Give every h2/h3 an id (kept when the author set one) and list them. */
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

  // Diagrams keep a readable type size on a phone by scrolling sideways
  // instead of shrinking. See .diagram-scroll in main.css.
  processed = processed.replace(
    /<svg\b[^>]*\bclass="[^"]*\bdiagram-svg\b[^"]*"[\s\S]*?<\/svg>/g,
    (svg) => `<div class="diagram-scroll">${svg}</div>`
  )

  const sanitized = purify.sanitize(processed, PURIFY_CONFIG)
  return addHeadingIds(neutralizeHiddenPostLinks(sanitized, locale))
}

/** Plain text of a post body, for the client-side search index. */
export function htmlToText(html: string): string {
  const container = window.document.createElement('div')
  container.innerHTML = html
  return container.textContent || ''
}
