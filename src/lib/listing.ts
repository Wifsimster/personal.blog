import { getAllPosts, getAllTags } from '@/posts'
import { sortPostsByDate, type Post } from '@/lib/posts'
import type { Language } from '@/types/i18n'

export function filterTags(): string[] {
  return Object.entries(getAllTags())
    .filter(([, count]) => count > 1)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag)
}

export function topTags(): string[] {
  return Object.entries(getAllTags())
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([tag]) => tag)
}

export function groupByYear(posts: Post[]): Array<{ year: number; posts: Post[] }> {
  const grouped = new Map<number, Post[]>()
  for (const post of sortPostsByDate(posts)) {
    const year = new Date(post.date).getFullYear()
    if (!grouped.has(year)) grouped.set(year, [])
    grouped.get(year)!.push(post)
  }
  return Array.from(grouped.entries())
    .map(([year, list]) => ({ year, posts: list }))
    .sort((a, b) => b.year - a.year)
}

export function relatedPosts(post: Post, lang: Language): Post[] {
  if (!post.tags?.length) return []
  const currentTags = new Set(post.tags)
  return getAllPosts(lang)
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ post: p, score: (p.tags || []).filter((t) => currentTags.has(t)).length }))
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
    .slice(0, 3)
    .map((s) => s.post)
}

export function excerpt(post: Post): string {
  if (post.description) return post.description
  const text = post.html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&[^;]+;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (!text) return ''
  return text.length > 180 ? text.slice(0, 180).replace(/\S+$/, '').trim() + '…' : text
}
