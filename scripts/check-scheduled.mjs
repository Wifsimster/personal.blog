#!/usr/bin/env node
/**
 * Is a scheduled post due but not yet live?
 *
 * Posts carrying a future date are written and merged, but every listing,
 * feed and sitemap filters them out until their date arrives. That filter is
 * evaluated at BUILD time, so nothing publishes them on its own: the site has
 * to be rebuilt after the date passes.
 *
 * This script answers one question — does the live sitemap contain every post
 * that should be published by now? Comparing against the deployed sitemap
 * rather than against a calendar makes it self-healing: a missed run, a failed
 * deploy or a runner outage is caught on the next pass instead of silently
 * skipping an episode forever.
 *
 * Env:   SITE_URL (default: https://blog.battistella.ovh)
 *        TODAY    (YYYY-MM-DD, testing only)
 * Exit:  always 0. Writes `due=<slug,slug>` to $GITHUB_OUTPUT when work is needed.
 */
import { readFileSync, readdirSync, appendFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const POSTS_DIR = join(__dirname, '..', 'src', 'posts')
const SITE_URL = (process.env.SITE_URL || 'https://blog.battistella.ovh').replace(/\/$/, '')
// TODAY is an override for testing only; the cron never sets it.
const TODAY_ISO = process.env.TODAY || new Date().toISOString().slice(0, 10)

function extractStringAfterKey(content, key) {
  const re = new RegExp(`${key}\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1)[^\\\\])*)\\1`)
  const m = re.exec(content)
  return m ? m[2].trim() : ''
}

function isDraft(content) {
  const m = /export\s+const\s+metadata\s*:\s*PostMetadata\s*=\s*\{([\s\S]*?)\n\}/.exec(content)
  return /\bdraft\s*:\s*true\b/.test(m ? m[1] : '')
}

const posts = readdirSync(POSTS_DIR)
  .filter(f => f.endsWith('.vue'))
  .map(f => {
    const content = readFileSync(join(POSTS_DIR, f), 'utf-8')
    const slug = extractStringAfterKey(content, 'slug')
    if (!slug) return null
    return { slug, date: extractStringAfterKey(content, 'date'), draft: isDraft(content) }
  })
  .filter(Boolean)

const shouldBeLive = posts.filter(p => !p.draft && p.date && p.date <= TODAY_ISO)

let sitemap = ''
try {
  const res = await fetch(`${SITE_URL}/sitemap.xml`, { redirect: 'follow' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  sitemap = await res.text()
} catch (err) {
  // Cannot reach the site: say so and do nothing. Triggering a release on a
  // network blip would deploy for no reason, and the next run will catch up.
  console.log(`  Could not fetch ${SITE_URL}/sitemap.xml — ${err.message}`)
  console.log('  Nothing done. This run makes no decision.')
  process.exit(0)
}

const missing = shouldBeLive.filter(p => !sitemap.includes(`/posts/${p.slug}`))
const pending = posts.filter(p => !p.draft && p.date > TODAY_ISO)

console.log(`  Today: ${TODAY_ISO}`)
console.log(`  Should be live: ${shouldBeLive.length}`)
console.log(`  Still scheduled: ${pending.length}${pending.length ? ` (next: ${pending.map(p => `${p.slug} on ${p.date}`).sort().slice(0, 3).join(', ')})` : ''}`)

if (missing.length === 0) {
  console.log('  Live sitemap is up to date. No release needed.')
} else {
  console.log(`  DUE but missing from the live sitemap: ${missing.map(p => p.slug).join(', ')}`)
}

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `due=${missing.map(p => p.slug).join(',')}\n`)
}
