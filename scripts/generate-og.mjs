#!/usr/bin/env node

/**
 * Post-build script: generates OG (Open Graph) thumbnail images and HTML pages
 * for social media sharing.
 *
 * Reads post data from Vue SFC source files, generates:
 * 1. OG images (1200x630 PNG) per post × language
 * 2. HTML files with OG meta tags per post route (using dist/index.html as template)
 *
 * Usage: node scripts/generate-og.mjs
 * Env:   SITE_URL (default: https://wifsimster.github.io)
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const POSTS_SRC = join(ROOT, 'src', 'posts')

const SITE_URL = (process.env.SITE_URL || 'https://blog.battistella.ovh').replace(/\/$/, '')
const SITE_NAME = 'Wifsimster Blog'
const AUTHOR_NAME = 'Wifsimster'
const OG_WIDTH = 1200
const OG_HEIGHT = 630

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
 * Extract title and description from a named content block
 * (e.g. frenchContent or englishContent).
 */
function extractContentBlock(content, varName) {
  const blockRegex = new RegExp(`const\\s+${varName}\\s*:\\s*PostContent\\s*=\\s*\\{`, 'm')
  const blockMatch = blockRegex.exec(content)
  if (!blockMatch) return { title: '', description: '' }

  const blockStart = blockMatch.index + blockMatch[0].length

  // Find the html: field which marks the end of simple fields
  let htmlIdx = content.indexOf('\n  html:', blockStart)
  if (htmlIdx === -1) htmlIdx = content.indexOf('\n\thtml:', blockStart)
  if (htmlIdx === -1) htmlIdx = content.indexOf('html:', blockStart)
  if (htmlIdx === -1) return { title: '', description: '' }

  const fieldsBlock = content.substring(blockStart, htmlIdx)

  return {
    title: extractStringAfterKey(fieldsBlock, 'title'),
    description: extractStringAfterKey(fieldsBlock, 'description')
  }
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

  return { slug, date, tags, fr, en }
}

// ─── Font loading ───────────────────────────────────────────────────

async function loadFonts() {
  const cssUrl = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700'

  // Use IE 11 user-agent to get WOFF format (supported by satori)
  const cssRes = await fetch(cssUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'
    }
  })
  const css = await cssRes.text()

  const fonts = []
  const blockRegex = /@font-face\s*\{([^}]+)\}/g
  let match

  while ((match = blockRegex.exec(css)) !== null) {
    const block = match[1]
    const weightMatch = block.match(/font-weight:\s*(\d+)/)
    const urlMatch = block.match(/url\(([^)]+)\)/)

    if (weightMatch && urlMatch) {
      const fontUrl = urlMatch[1].replace(/['"]/g, '')
      const fontRes = await fetch(fontUrl)
      const data = await fontRes.arrayBuffer()

      fonts.push({
        name: 'Inter',
        weight: parseInt(weightMatch[1]),
        style: 'normal',
        data
      })
    }
  }

  if (fonts.length === 0) throw new Error('No fonts loaded from Google Fonts')
  return fonts
}

// ─── OG image generation ────────────────────────────────────────────

function createOgElement(title, description, tags) {
  const titleFontSize = title.length > 80 ? 32 : title.length > 50 ? 40 : 48
  const descText = description
    ? (description.length > 160 ? description.substring(0, 157) + '...' : description)
    : null

  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '60px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        fontFamily: 'Inter',
      },
      children: [
        // Accent bar
        {
          type: 'div',
          props: {
            style: {
              width: '80px',
              height: '4px',
              background: '#3b82f6',
              borderRadius: '2px',
            }
          }
        },
        // Title + description
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              flex: '1',
              justifyContent: 'center',
              paddingTop: '20px',
              paddingBottom: '20px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: `${titleFontSize}px`,
                    color: '#f1f5f9',
                    fontWeight: 700,
                    lineHeight: '1.3',
                  },
                  children: title,
                }
              },
              ...(descText ? [{
                type: 'div',
                props: {
                  style: {
                    fontSize: '20px',
                    color: '#94a3b8',
                    lineHeight: '1.5',
                    marginTop: '20px',
                  },
                  children: descText,
                }
              }] : []),
            ]
          }
        },
        // Footer: blog name + tags
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: { fontSize: '18px', color: '#64748b' },
                  children: SITE_NAME,
                }
              },
              ...(tags.length > 0 ? [{
                type: 'div',
                props: {
                  style: { display: 'flex', gap: '8px' },
                  children: tags.slice(0, 3).map(tag => ({
                    type: 'div',
                    props: {
                      style: {
                        fontSize: '14px',
                        color: '#60a5fa',
                        background: 'rgba(59, 130, 246, 0.15)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                      },
                      children: tag,
                    }
                  }))
                }
              }] : []),
            ]
          }
        },
      ]
    }
  }
}

async function generateOgImage(element, fonts, outputPath) {
  const svg = await satori(element, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts,
  })

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: OG_WIDTH },
  })
  const png = resvg.render().asPng()

  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, png)
}

// ─── OG HTML generation ────────────────────────────────────────────

function escapeAttr(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function generateOgHtml(template, post, lang, opts = {}) {
  const { hasFr = true, hasEn = true } = opts
  const content = lang === 'en' ? post.en : post.fr
  const locale = lang === 'en' ? 'en_US' : 'fr_FR'
  const urlPrefix = lang === 'en' ? '/en' : ''
  const postUrl = `${SITE_URL}${urlPrefix}/posts/${post.slug}`
  const frUrl = `${SITE_URL}/posts/${post.slug}`
  const enUrl = `${SITE_URL}/en/posts/${post.slug}`
  const ogImageUrl = `${SITE_URL}/images/og/${post.slug}-${lang}.png`

  const ogTags = [
    `<meta property="og:title" content="${escapeAttr(content.title)}">`,
    `<meta property="og:description" content="${escapeAttr(content.description || '')}">`,
    `<meta property="og:image" content="${ogImageUrl}">`,
    `<meta property="og:image:width" content="${OG_WIDTH}">`,
    `<meta property="og:image:height" content="${OG_HEIGHT}">`,
    `<meta property="og:url" content="${postUrl}">`,
    `<meta property="og:type" content="article">`,
    `<meta property="og:locale" content="${locale}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeAttr(content.title)}">`,
    `<meta name="twitter:description" content="${escapeAttr(content.description || '')}">`,
    `<meta name="twitter:image" content="${ogImageUrl}">`,
  ].join('\n    ')

  // Canonical + hreflang alternates. FR is the primary locale (x-default).
  const seoLinks = [
    `<link rel="canonical" href="${escapeAttr(postUrl)}">`,
    ...(hasFr ? [`<link rel="alternate" hreflang="fr" href="${escapeAttr(frUrl)}">`] : []),
    ...(hasEn ? [`<link rel="alternate" hreflang="en" href="${escapeAttr(enUrl)}">`] : []),
    ...(hasFr ? [`<link rel="alternate" hreflang="x-default" href="${escapeAttr(frUrl)}">`] : []),
  ].join('\n    ')

  // Article JSON-LD structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.title,
    description: content.description || '',
    image: ogImageUrl,
    url: postUrl,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    inLanguage: lang === 'en' ? 'en' : 'fr',
    keywords: (post.tags || []).join(', '),
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl
    }
  }
  // Strip undefined fields for clean output
  const jsonLd = JSON.stringify(articleSchema, (_k, v) => v === undefined ? undefined : v)
    .replace(/</g, '\\u003c')
  const jsonLdScript = `<script type="application/ld+json">${jsonLd}</script>`

  let html = template

  // Update <title>
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeAttr(content.title)} - ${SITE_NAME}</title>`
  )

  // Update description meta
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeAttr(content.description || '')}">`
  )

  // Remove default OG tags from template (we inject per-post ones below)
  html = html.replace(/\s*<meta property="og:type" content="[^"]*">/, '')
  html = html.replace(/\s*<meta property="og:image" content="[^"]*">/, '')
  html = html.replace(/\s*<meta property="og:image:width" content="[^"]*">/, '')
  html = html.replace(/\s*<meta property="og:image:height" content="[^"]*">/, '')
  html = html.replace(/\s*<meta name="twitter:card" content="[^"]*">/, '')

  // Set lang attribute
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)

  // Inject SEO links + OG tags + JSON-LD before </head>
  html = html.replace(
    '</head>',
    `    ${seoLinks}\n    ${ogTags}\n    ${jsonLdScript}\n  </head>`
  )

  return html
}

// ─── Homepage HTML generation ──────────────────────────────────────

const HOME_COPY = {
  fr: {
    title: 'Wifsimster Blog — DIY, domotique, électronique et rénovation',
    description: 'Blog personnel de Wifsimster : projets DIY, domotique (ESP8266, Raspberry Pi, Jeedom), électronique et rénovation de maison.'
  },
  en: {
    title: 'Wifsimster Blog — DIY, Home Automation, Electronics & Renovation',
    description: 'Personal blog by Wifsimster: DIY projects, home automation (ESP8266, Raspberry Pi, Jeedom), electronics, and house renovation.'
  }
}

function generateHomeHtml(template, lang) {
  const copy = HOME_COPY[lang]
  const locale = lang === 'en' ? 'en_US' : 'fr_FR'
  const frUrl = `${SITE_URL}/`
  const enUrl = `${SITE_URL}/en`
  const homeUrl = lang === 'en' ? enUrl : frUrl
  const ogImageUrl = `${SITE_URL}/images/og/default.png`

  const ogTags = [
    `<meta property="og:title" content="${escapeAttr(copy.title)}">`,
    `<meta property="og:description" content="${escapeAttr(copy.description)}">`,
    `<meta property="og:image" content="${ogImageUrl}">`,
    `<meta property="og:image:width" content="${OG_WIDTH}">`,
    `<meta property="og:image:height" content="${OG_HEIGHT}">`,
    `<meta property="og:url" content="${homeUrl}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:locale" content="${locale}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeAttr(copy.title)}">`,
    `<meta name="twitter:description" content="${escapeAttr(copy.description)}">`,
    `<meta name="twitter:image" content="${ogImageUrl}">`,
  ].join('\n    ')

  const seoLinks = [
    `<link rel="canonical" href="${escapeAttr(homeUrl)}">`,
    `<link rel="alternate" hreflang="fr" href="${escapeAttr(frUrl)}">`,
    `<link rel="alternate" hreflang="en" href="${escapeAttr(enUrl)}">`,
    `<link rel="alternate" hreflang="x-default" href="${escapeAttr(frUrl)}">`,
  ].join('\n    ')

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: lang === 'en' ? 'en' : 'fr',
    description: copy.description,
    publisher: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: SITE_URL
    }
  }
  const jsonLd = JSON.stringify(websiteSchema).replace(/</g, '\\u003c')
  const jsonLdScript = `<script type="application/ld+json">${jsonLd}</script>`

  let html = template

  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeAttr(copy.title)}</title>`
  )
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${escapeAttr(copy.description)}">`
  )

  // Remove default OG/Twitter tags from template (we inject locale-specific ones)
  html = html.replace(/\s*<meta property="og:type" content="[^"]*">/, '')
  html = html.replace(/\s*<meta property="og:image" content="[^"]*">/, '')
  html = html.replace(/\s*<meta property="og:image:width" content="[^"]*">/, '')
  html = html.replace(/\s*<meta property="og:image:height" content="[^"]*">/, '')
  html = html.replace(/\s*<meta name="twitter:card" content="[^"]*">/, '')

  html = html.replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)

  html = html.replace(
    '</head>',
    `    ${seoLinks}\n    ${ogTags}\n    ${jsonLdScript}\n  </head>`
  )

  return html
}

// ─── Default homepage OG image ──────────────────────────────────────

function createDefaultOgElement() {
  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
        fontFamily: 'Inter',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              width: '80px',
              height: '4px',
              background: '#3b82f6',
              borderRadius: '2px',
              marginBottom: '32px',
            }
          }
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: '56px',
              color: '#f1f5f9',
              fontWeight: 700,
              textAlign: 'center',
            },
            children: SITE_NAME,
          }
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: '22px',
              color: '#94a3b8',
              marginTop: '16px',
              textAlign: 'center',
            },
            children: 'DIY, Electronics, Home Automation & Software Engineering',
          }
        },
      ]
    }
  }
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  console.log('Generating OG pages and images...')
  console.log(`  Site URL: ${SITE_URL}`)

  if (!SITE_URL || SITE_URL === 'https://wifsimster.github.io') {
    console.warn('  Warning: Using default SITE_URL. Set SITE_URL env var for production.')
  }

  // 1. Extract post data from Vue SFC files
  const postFiles = readdirSync(POSTS_SRC).filter(f => f.endsWith('.vue'))
  const posts = postFiles.map(f => extractPostData(join(POSTS_SRC, f))).filter(Boolean)
  console.log(`  Found ${posts.length} posts`)

  // 2. Load fonts
  let fonts
  try {
    fonts = await loadFonts()
    console.log(`  Loaded ${fonts.length} font weights`)
  } catch (error) {
    console.warn(`  Warning: Could not load fonts (${error.message})`)
    console.warn('  Skipping OG image generation, HTML pages will still be created.')
    fonts = null
  }

  // 3. Generate OG images
  const ogDir = join(DIST, 'images', 'og')
  let imageCount = 0

  if (fonts) {
    mkdirSync(ogDir, { recursive: true })

    // Default blog OG image
    const defaultElement = createDefaultOgElement()
    await generateOgImage(defaultElement, fonts, join(ogDir, 'default.png'))
    imageCount++

    // Per-post OG images
    for (const post of posts) {
      for (const lang of ['fr', 'en']) {
        const content = lang === 'en' ? post.en : post.fr
        if (!content.title) continue

        const element = createOgElement(content.title, content.description, post.tags)
        await generateOgImage(element, fonts, join(ogDir, `${post.slug}-${lang}.png`))
        imageCount++
      }
    }

    console.log(`  Generated ${imageCount} OG images`)
  }

  // 4. Read dist/index.html as template
  const templatePath = join(DIST, 'index.html')
  if (!existsSync(templatePath)) {
    console.error('  Error: dist/index.html not found. Run "vite build" first.')
    process.exit(1)
  }
  const template = readFileSync(templatePath, 'utf-8')

  // 5. Generate per-post HTML files
  let htmlCount = 0

  for (const post of posts) {
    const hasFr = !!post.fr.title
    const hasEn = !!post.en.title
    for (const lang of ['fr', 'en']) {
      const content = lang === 'en' ? post.en : post.fr
      if (!content.title) continue

      const html = generateOgHtml(template, post, lang, { hasFr, hasEn })

      const urlPrefix = lang === 'en' ? 'en/posts' : 'posts'
      const outDir = join(DIST, urlPrefix, post.slug)
      mkdirSync(outDir, { recursive: true })
      writeFileSync(join(outDir, 'index.html'), html)
      htmlCount++
    }
  }

  // 5b. Generate homepage HTML (FR overwrites dist/index.html, EN writes dist/en/index.html)
  const frHomeHtml = generateHomeHtml(template, 'fr')
  writeFileSync(join(DIST, 'index.html'), frHomeHtml)
  htmlCount++

  const enHomeHtml = generateHomeHtml(template, 'en')
  const enHomeDir = join(DIST, 'en')
  mkdirSync(enHomeDir, { recursive: true })
  writeFileSync(join(enHomeDir, 'index.html'), enHomeHtml)
  htmlCount++

  console.log(`  Generated ${htmlCount} HTML files`)

  // 6. Validate
  let errors = 0

  for (const post of posts) {
    for (const lang of ['fr', 'en']) {
      const content = lang === 'en' ? post.en : post.fr
      if (!content.title) continue

      const urlPrefix = lang === 'en' ? 'en/posts' : 'posts'
      const htmlPath = join(DIST, urlPrefix, post.slug, 'index.html')

      if (!existsSync(htmlPath)) {
        console.error(`  Missing: ${htmlPath}`)
        errors++
        continue
      }

      const html = readFileSync(htmlPath, 'utf-8')
      for (const tag of ['og:title', 'og:description', 'og:image', 'og:url']) {
        if (!html.includes(tag)) {
          console.error(`  Missing ${tag} in ${htmlPath}`)
          errors++
        }
      }
    }
  }

  if (errors > 0) {
    console.error(`\n  ${errors} validation errors`)
    process.exit(1)
  }

  console.log(`\n  OG generation complete: ${posts.length} posts, ${htmlCount} HTML files, ${imageCount} images`)
}

main().catch(err => {
  console.error('OG generation failed:', err)
  process.exit(1)
})
