#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const TODAY_ISO = new Date().toISOString().slice(0, 10)
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const POSTS_SRC = join(ROOT, 'src', 'posts')

const SITE_URL = (process.env.SITE_URL || 'https://blog.battistella.ovh').replace(/\/$/, '')
const SITE_NAME = 'Wifsimster Blog'
const OG_WIDTH = 1200
const OG_HEIGHT = 630

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

function extractContentBlock(content, varName) {
  const blockRegex = new RegExp(`const\\s+${varName}\\s*:\\s*PostContent\\s*=\\s*\\{`, 'm')
  const blockMatch = blockRegex.exec(content)
  if (!blockMatch) return { title: '', description: '' }

  const blockStart = blockMatch.index + blockMatch[0].length

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

function isDraft(content) {
  const match = /export\s+const\s+metadata\s*:\s*PostMetadata\s*=\s*\{([\s\S]*?)\n\}/.exec(content)
  const block = match ? match[1] : ''
  return /\bdraft\s*:\s*true\b/.test(block)
}

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

async function loadFonts() {
  const cssUrl = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700'

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

async function main() {
  console.log('Generating OG pages and images...')
  console.log(`  Site URL: ${SITE_URL}`)

  if (!SITE_URL || SITE_URL === 'https://wifsimster.github.io') {
    console.warn('  Warning: Using default SITE_URL. Set SITE_URL env var for production.')
  }

  const postFiles = readdirSync(POSTS_SRC).filter(f => f.endsWith('.ts') && f !== 'index.ts')
  const parsed = postFiles.map(f => extractPostData(join(POSTS_SRC, f))).filter(Boolean)
  const draftCount = parsed.filter(p => p.draft).length
  const scheduledCount = parsed.filter(p => !p.draft && p.scheduled).length
  const posts = parsed.filter(p => !p.draft && !p.scheduled)
  console.log(`  Found ${posts.length} posts (${draftCount} draft(s), ${scheduledCount} scheduled skipped)`)

  let fonts
  try {
    fonts = await loadFonts()
    console.log(`  Loaded ${fonts.length} font weights`)
  } catch (error) {
    console.warn(`  Warning: Could not load fonts (${error.message})`)
    console.warn('  Skipping OG image generation, HTML pages will still be created.')
    fonts = null
  }

  const ogDir = join(DIST, 'images', 'og')
  let imageCount = 0

  if (fonts) {
    mkdirSync(ogDir, { recursive: true })

    const defaultElement = createDefaultOgElement()
    await generateOgImage(defaultElement, fonts, join(ogDir, 'default.png'))
    imageCount++

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

  let errors = 0
  let htmlCount = 0

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

      htmlCount++
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

  console.log(`\n  OG generation complete: ${posts.length} posts, ${htmlCount} pages checked, ${imageCount} images`)
}

main().catch(err => {
  console.error('OG generation failed:', err)
  process.exit(1)
})
