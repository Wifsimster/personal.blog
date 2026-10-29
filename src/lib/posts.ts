/// <reference types="vite/client" />

export interface PostMetadata {
  slug: string
  date: string
  tags?: string[]
  draft?: boolean
}

export interface PostContent {
  title: string
  description?: string
  html: string
}

export interface Post {
  slug: string
  title: string
  date: string
  description?: string
  tags?: string[]
  html: string
  lang: 'fr' | 'en'
  draft?: boolean
}

export interface PostsData {
  posts: Post[]
  tags: Record<string, number>
}

export interface PostComponent {
  metadata: PostMetadata
  getContent: (locale: 'fr' | 'en') => PostContent
}

export function formatDate(dateString: string, lang: 'fr' | 'en' = 'fr'): string {
  if (!dateString || typeof dateString !== 'string') {
    if (import.meta.env.DEV) {
      console.warn(`formatDate: Invalid dateString provided: ${dateString}`)
    }
    return dateString || ''
  }

  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    if (import.meta.env.DEV) {
      console.warn(`formatDate: Invalid date string: ${dateString}`)
    }
    return dateString
  }

  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date)
}

export function getSlugFromFilename(filename: string): string {
  if (!filename || typeof filename !== 'string') {
    if (import.meta.env.DEV) {
      console.warn(`getSlugFromFilename: Invalid filename provided: ${filename}`)
    }
    return filename || ''
  }
  return filename.replace(/\.md$/, '')
}

export function estimateReadingTime(html: string, lang: 'fr' | 'en' = 'fr'): number {
  if (!html) return 1
  const text = html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').replace(/\s+/g, ' ').trim()
  const wordCount = text.split(/\s+/).filter(w => w.length > 0).length
  const wpm = lang === 'fr' ? 200 : 238
  return Math.max(1, Math.ceil(wordCount / wpm))
}

export function sortPostsByDate(posts: Post[], order: 'asc' | 'desc' = 'desc'): Post[] {
  if (!Array.isArray(posts)) {
    if (import.meta.env.DEV) {
      console.warn('sortPostsByDate: Invalid posts array provided')
    }
    return []
  }

  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()

    if (isNaN(dateA) && isNaN(dateB)) return 0
    if (isNaN(dateA)) return 1
    if (isNaN(dateB)) return -1

    return order === 'desc' ? dateB - dateA : dateA - dateB
  })
}