#!/usr/bin/env node

/**
 * Post-build script: generates RSS 2.0 feeds for both languages.
 *
 * Reads post data from Vue SFC source files and writes:
 *   - dist/rss.xml     (French feed)
 *   - dist/en/rss.xml  (English feed)
 *
 * Usage: node scripts/generate-rss.mjs
 * Env:   SITE_URL (default: https://blog.battistella.ovh)
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** Posts dated after today are scheduled: written, merged, not yet published. */
const TODAY_ISO = new Date().toISOString().slice(0, 10)
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const POSTS_SRC = join(ROOT, 'src', 'posts')

const SITE_URL = (process.env.SITE_URL || 'https://blog.battistella.ovh').replace(/\/$/, '')
const SITE_NAME = 'Wifsimster Blog'
const AUTHOR_EMAIL = 'battistella@proton.me'
const AUTHOR_NAME = 'Wifsimster'

// ─── Post data extraction ──────────────────────────────────────────

/**
 * Extract a quoted string value after a given key in text.
 * Handles single quotes, double quotes, and escaped characters.
 */
function extractStringAfterKey(text, key) {
  const pattern = new RegExp(`${key}:\\s*(['"\`])`)
  const match = pattern.exec(text)
  if (!match) return ''

  const quoteChar = match[1]
  const startIdx = match.index + match[0].length

  let value = ''
  let i = startIdx
  while (i < text.length) {
    if (text[i] === '\\' && i + 1 < text.length) {
      const next = text[i + 1]
      if (next === quoteChar) value += quoteChar
      else if (next === 'n') value += '\n'
      else if (next === '\\') value += '\\'
      else value += next
      i += 2
    } else if (text[i] === quoteChar) {
      break
    } else {
      value += text[i]
      i++
    }
  }

  return value.trim()
}

/**
 * Extract the html template literal from a PostContent block.
 * Looks for: html: `...` where the content is a plain template literal
 * without escaped backticks (matches the project convention).
 */
function extractHtmlBlock(content, varName) {
  const blockRegex = new RegExp(`const\\s+${varName}\\s*:\\s*PostContent\\s*=\\s*\\{`, 'm')
  const blockMatch = blockRegex.exec(content)
  if (!blockMatch) return ''

  const blockStart = blockMatch.index + blockMatch[0].length
  const htmlKeyIdx = content.indexOf('html:', blockStart)
  if (htmlKeyIdx === -1) return ''

  // Find the opening backtick after html:
  let i = htmlKeyIdx + 'html:'.length
  while (i < content.length && content[i] !== '`') i++
  if (i >= content.length) return ''
  const htmlStart = i + 1

  // Find the closing backtick (assumes no escaped backticks inside)
  let j = htmlStart
  while (j < content.length) {
    if (content[j] === '\\' && j + 1 < content.length) {
      j += 2
      continue
    }
    if (content[j] === '`') break
    j++
  }
  if (j >= content.length) return ''

  return content.substring(htmlStart, j)
}

/**
 * Extract title and description from a named content block.
 */
function extractContentBlock(content, varName) {
  const blockRegex = new RegExp(`const\\s+${varName}\\s*:\\s*PostContent\\s*=\\s*\\{`, 'm')
  const blockMatch = blockRegex.exec(content)
  if (!blockMatch) return { title: '', description: '', html: '' }

  const blockStart = blockMatch.index + blockMatch[0].length

  let htmlIdx = content.indexOf('\n  html:', blockStart)
  if (htmlIdx === -1) htmlIdx = content.indexOf('\n\thtml:', blockStart)
  if (htmlIdx === -1) htmlIdx = content.indexOf('html:', blockStart)
  if (htmlIdx === -1) return { title: '', description: '', html: '' }

  const fieldsBlock = content.substring(blockStart, htmlIdx)

  return {
    title: extractStringAfterKey(fieldsBlock, 'title'),
    description: extractStringAfterKey(fieldsBlock, 'description'),
    html: extractHtmlBlock(content, varName)
  }
}

/**
 * True when the post's metadata block carries `draft: true`. Drafts stay
 * reachable in the SPA for review, but are excluded from everything a crawler
 * or a feed reader sees.
 */
function isDraft(content) {
  const match = /export\s+const\s+metadata\s*:\s*PostMetadata\s*=\s*\{([\s\S]*?)\n\}/.exec(content)
  const block = match ? match[1] : ''
  return /\bdraft\s*:\s*true\b/.test(block)
}

/**
 * Parse a Vue SFC file and extract post metadata + content for both languages.
 */
function extractPostData(filePath) {
  const content = readFileSync(filePath, 'utf-8')

  const slug = extractStringAfterKey(content, 'slug')
  if (!slug) return null

  const date = extractStringAfterKey(content, 'date')

  const tagsMatch = content.match(/tags:\s*\[([^\]]*)\]/)
  const tags = tagsMatch
    ? (tagsMatch[1].match(/['"]([^'"]+)['"]/g) || []).map(t => t.replace(/['"]/g, ''))
    : []

  const fr = extractContentBlock(content, 'frenchContent')
  const en = extractContentBlock(content, 'englishContent')

  return { slug, date, tags, fr, en, draft: isDraft(content), scheduled: date > TODAY_ISO }
}

// ─── RSS generation ────────────────────────────────────────────────

function escapeXml(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function wrapCdata(str) {
  if (!str) return '<![CDATA[]]>'
  // Avoid breaking out of CDATA: split any literal "]]>" sequences.
  const safe = String(str).replace(/]]>/g, ']]]]><![CDATA[>')
  return `<![CDATA[${safe}]]>`
}

/**
 * Ensure relative image/link URLs become absolute URLs in the feed.
 */
function absolutizeUrls(html, baseUrl) {
  if (!html) return ''
  return html
    .replace(/(src|href)="\/([^"]*)"/g, (_m, attr, path) => `${attr}="${baseUrl}/${path}"`)
    .replace(/(src|href)='\/([^']*)'/g, (_m, attr, path) => `${attr}='${baseUrl}/${path}'`)
}

function toRfc822Date(dateStr) {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return new Date().toUTCString()
  return d.toUTCString()
}

function buildRssFeed(posts, lang) {
  const isEn = lang === 'en'
  const urlPrefix = isEn ? '/en' : ''
  const feedUrl = `${SITE_URL}${urlPrefix}/rss.xml`
  const siteLink = `${SITE_URL}${urlPrefix}/`
  const langCode = isEn ? 'en-us' : 'fr-fr'
  const feedTitle = isEn ? `${SITE_NAME} — Personal Blog` : `${SITE_NAME} — Blog personnel`
  const feedDescription = isEn
    ? 'Articles on DIY, electronics, home automation and software engineering.'
    : 'Articles sur le DIY, l\'électronique, la domotique et le développement logiciel.'

  const lastBuildDate = new Date().toUTCString()
  const latestPubDate = posts.length > 0 ? toRfc822Date(posts[0].date) : lastBuildDate

  const items = posts.map(post => {
    const content = isEn ? post.en : post.fr
    if (!content.title) return ''

    const postUrl = `${SITE_URL}${urlPrefix}/posts/${post.slug}`
    const pubDate = toRfc822Date(post.date)
    const description = content.description || ''
    const fullHtml = absolutizeUrls(content.html || '', SITE_URL)

    const categories = (post.tags || [])
      .map(tag => `      <category>${escapeXml(tag)}</category>`)
      .join('\n')

    return `    <item>
      <title>${escapeXml(content.title)}</title>
      <link>${escapeXml(postUrl)}</link>
      <guid isPermaLink="true">${escapeXml(postUrl)}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(AUTHOR_EMAIL)} (${escapeXml(AUTHOR_NAME)})</author>
${categories}
      <description>${wrapCdata(description)}</description>
      <content:encoded>${wrapCdata(fullHtml)}</content:encoded>
    </item>`
  }).filter(Boolean).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(feedTitle)}</title>
    <link>${escapeXml(siteLink)}</link>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(feedDescription)}</description>
    <language>${langCode}</language>
    <copyright>© 2017-${new Date().getFullYear()} ${escapeXml(AUTHOR_NAME)}</copyright>
    <managingEditor>${escapeXml(AUTHOR_EMAIL)} (${escapeXml(AUTHOR_NAME)})</managingEditor>
    <webMaster>${escapeXml(AUTHOR_EMAIL)} (${escapeXml(AUTHOR_NAME)})</webMaster>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <pubDate>${latestPubDate}</pubDate>
    <generator>Custom Node.js RSS generator</generator>
${items}
  </channel>
</rss>
`
}

// ─── Main ───────────────────────────────────────────────────────────

function main() {
  console.log('Generating RSS feeds...')
  console.log(`  Site URL: ${SITE_URL}`)

  if (!existsSync(DIST)) {
    console.error('  Error: dist/ not found. Run "vite build" first.')
    process.exit(1)
  }

  const postFiles = readdirSync(POSTS_SRC).filter(f => f.endsWith('.vue'))
  const parsed = postFiles
    .map(f => extractPostData(join(POSTS_SRC, f)))
    .filter(Boolean)
  const drafts = parsed.filter(p => p.draft)
  const scheduled = parsed.filter(p => !p.draft && p.scheduled)
  const posts = parsed
    .filter(p => !p.draft && !p.scheduled)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  console.log(`  Found ${posts.length} posts (${drafts.length} draft(s), ${scheduled.length} scheduled skipped)`)

  // French feed → dist/rss.xml
  const frFeed = buildRssFeed(posts, 'fr')
  writeFileSync(join(DIST, 'rss.xml'), frFeed)
  console.log('  Wrote dist/rss.xml')

  // English feed → dist/en/rss.xml
  const enDir = join(DIST, 'en')
  mkdirSync(enDir, { recursive: true })
  const enFeed = buildRssFeed(posts, 'en')
  writeFileSync(join(enDir, 'rss.xml'), enFeed)
  console.log('  Wrote dist/en/rss.xml')

  console.log(`\n  RSS generation complete: ${posts.length} posts, 2 feeds`)
}

main()
