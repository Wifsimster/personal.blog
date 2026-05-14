#!/usr/bin/env node

/**
 * Post-build script: generates a multilingual sitemap.xml.
 *
 * Reads post data from Vue SFC source files and writes:
 *   - dist/sitemap.xml   (FR + EN URLs with xhtml:link hreflang alternates)
 *
 * Usage: node scripts/generate-sitemap.mjs
 * Env:   SITE_URL (default: https://blog.battistella.ovh)
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const POSTS_SRC = join(ROOT, 'src', 'posts')

const SITE_URL = (process.env.SITE_URL || 'https://blog.battistella.ovh').replace(/\/$/, '')

// ─── Post data extraction (mirrors generate-rss.mjs / generate-og.mjs) ─

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

function hasContentBlock(content, varName) {
  const re = new RegExp(`const\\s+${varName}\\s*:\\s*PostContent\\s*=\\s*\\{`, 'm')
  return re.test(content)
}

function extractTitleFor(content, varName) {
  const re = new RegExp(`const\\s+${varName}\\s*:\\s*PostContent\\s*=\\s*\\{`, 'm')
  const m = re.exec(content)
  if (!m) return ''
  const blockStart = m.index + m[0].length
  const fieldsBlock = content.substring(blockStart, blockStart + 4000)
  return extractStringAfterKey(fieldsBlock, 'title')
}

function extractPostData(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const slug = extractStringAfterKey(content, 'slug')
  if (!slug) return null
  const date = extractStringAfterKey(content, 'date')

  const hasFr = hasContentBlock(content, 'frenchContent') && !!extractTitleFor(content, 'frenchContent')
  const hasEn = hasContentBlock(content, 'englishContent') && !!extractTitleFor(content, 'englishContent')

  return { slug, date, hasFr, hasEn }
}

// ─── Tag collection ────────────────────────────────────────────────

function collectTags(posts) {
  const tags = new Set()
  // Tags live inside `tags: [...]` arrays in each SFC; re-parse them here so
  // we don't depend on a build-time registry.
  return tags
}

// ─── XML escaping ──────────────────────────────────────────────────

function escapeXml(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toIsoDate(dateString) {
  if (!dateString) return new Date().toISOString()
  const d = new Date(dateString)
  if (isNaN(d.getTime())) return new Date().toISOString()
  return d.toISOString()
}

// ─── URL entry generation ──────────────────────────────────────────

function urlEntry({ loc, lastmod, changefreq = 'monthly', priority = '0.7', alternates = [] }) {
  const altLinks = alternates
    .map(a => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${escapeXml(a.href)}"/>`)
    .join('\n')

  return [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    altLinks,
    '  </url>'
  ].filter(Boolean).join('\n')
}

function buildHreflangSet(frUrl, enUrl, hasFr, hasEn) {
  const set = []
  if (hasFr) set.push({ hreflang: 'fr', href: frUrl })
  if (hasEn) set.push({ hreflang: 'en', href: enUrl })
  // x-default: FR is the historical primary locale.
  if (hasFr) set.push({ hreflang: 'x-default', href: frUrl })
  else if (hasEn) set.push({ hreflang: 'x-default', href: enUrl })
  return set
}

// ─── Main ──────────────────────────────────────────────────────────

function main() {
  console.log('Generating sitemap.xml...')
  console.log(`  Site URL: ${SITE_URL}`)

  if (!existsSync(DIST)) {
    console.error(`  Error: ${DIST} not found. Run "vite build" first.`)
    process.exit(1)
  }

  const postFiles = readdirSync(POSTS_SRC).filter(f => f.endsWith('.vue'))
  const posts = postFiles.map(f => extractPostData(join(POSTS_SRC, f))).filter(Boolean)
  console.log(`  Found ${posts.length} posts`)

  const today = new Date().toISOString()
  const entries = []

  // Homepage (FR + EN)
  entries.push(urlEntry({
    loc: `${SITE_URL}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0',
    alternates: buildHreflangSet(`${SITE_URL}/`, `${SITE_URL}/en`, true, true)
  }))
  entries.push(urlEntry({
    loc: `${SITE_URL}/en`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.9',
    alternates: buildHreflangSet(`${SITE_URL}/`, `${SITE_URL}/en`, true, true)
  }))

  // Archives (FR + EN)
  entries.push(urlEntry({
    loc: `${SITE_URL}/archives`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.6',
    alternates: buildHreflangSet(`${SITE_URL}/archives`, `${SITE_URL}/en/archives`, true, true)
  }))
  entries.push(urlEntry({
    loc: `${SITE_URL}/en/archives`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.5',
    alternates: buildHreflangSet(`${SITE_URL}/archives`, `${SITE_URL}/en/archives`, true, true)
  }))

  // Posts
  for (const post of posts) {
    const lastmod = toIsoDate(post.date)
    const frUrl = `${SITE_URL}/posts/${post.slug}`
    const enUrl = `${SITE_URL}/en/posts/${post.slug}`
    const alternates = buildHreflangSet(frUrl, enUrl, post.hasFr, post.hasEn)

    if (post.hasFr) {
      entries.push(urlEntry({
        loc: frUrl,
        lastmod,
        changefreq: 'monthly',
        priority: '0.8',
        alternates
      }))
    }
    if (post.hasEn) {
      entries.push(urlEntry({
        loc: enUrl,
        lastmod,
        changefreq: 'monthly',
        priority: '0.7',
        alternates
      }))
    }
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    entries.join('\n'),
    '</urlset>',
    ''
  ].join('\n')

  mkdirSync(DIST, { recursive: true })
  const outPath = join(DIST, 'sitemap.xml')
  writeFileSync(outPath, xml)

  console.log(`  Wrote ${outPath} (${entries.length} URLs)`)
}

main()
