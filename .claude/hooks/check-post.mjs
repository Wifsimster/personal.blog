#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs'
import { resolve, basename } from 'node:path'

const ROOT = resolve(import.meta.dirname, '../..')
const SANITIZER = resolve(ROOT, 'src/lib/render.ts')
const REGISTRY = resolve(ROOT, 'src/posts/index.ts')

function allowlist() {
  const src = readFileSync(SANITIZER, 'utf8')
  const grab = (key) => {
    const m = src.match(new RegExp(`${key}:\\s*\\[([^\\]]*)\\]`))
    if (!m) throw new Error(`could not parse ${key} from ${SANITIZER}`)
    return new Set(m[1].match(/'([^']+)'/g).map((s) => s.slice(1, -1)))
  }
  return { tags: grab('ALLOWED_TAGS'), attrs: grab('ALLOWED_ATTR') }
}

function htmlBlocks(src) {
  const blocks = []
  const re = /html:\s*`/g
  let m
  while ((m = re.exec(src)) !== null) {
    let i = re.lastIndex
    for (; i < src.length; i++) {
      if (src[i] === '\\') { i++; continue }
      if (src[i] === '`') break
    }
    blocks.push({
      html: src.slice(re.lastIndex, i),
      line: src.slice(0, re.lastIndex).split('\n').length
    })
    re.lastIndex = i + 1
  }
  return blocks
}

const VOID_OK = new Set(['br', 'img', 'source'])
const SVG_TAGS = new Set(['svg', 'g', 'rect', 'line', 'polygon', 'polyline', 'path',
  'circle', 'ellipse', 'text', 'tspan'])

function checkFile(file, { tags, attrs }, registry) {
  const src = readFileSync(file, 'utf8')
  const out = []
  const add = (line, code, msg) => out.push({ file, line, code, msg })

  const blocks = htmlBlocks(src)
  if (blocks.length === 0) return out

  const slug = src.match(/slug:\s*'([^']+)'/)?.[1]
  if (!slug) add(1, 'no-slug', 'metadata.slug is missing')
  else if (!registry.includes(`'${slug}'`))
    add(1, 'unregistered', `slug '${slug}' is not in src/posts/index.ts — the post will 404`)
  if (!registry.includes(`from './${basename(file, '.ts')}'`))
    add(1, 'unimported', `${basename(file)} is not imported in src/posts/index.ts`)

  for (const k of ['frenchContent', 'englishContent'])
    if (!src.includes(`const ${k}`)) add(1, 'missing-locale', `${k} is missing — posts are FR + EN, always`)

  for (const { html, line: base } of blocks) {
    const lineOf = (idx) => base + html.slice(0, idx).split('\n').length - 1

    for (const t of html.matchAll(/<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>/g)) {
      const [full, tag, rawAttrs] = t
      const name = tag.toLowerCase()
      const canonical = [...tags].find((a) => a.toLowerCase() === name)
      if (!canonical)
        add(lineOf(t.index), 'stripped-tag',
          `<${tag}> is not in ALLOWED_TAGS — DOMPurify deletes it at render, silently`)
      const attrNames = rawAttrs.replace(/"[^"]*"|'[^']*'/g, '""')
      for (const a of attrNames.matchAll(/([a-zA-Z][a-zA-Z0-9:_.-]*)\s*=/g)) {
        const attr = a[1]
        if (![...attrs].some((x) => x.toLowerCase() === attr.toLowerCase()))
          add(lineOf(t.index), 'stripped-attr',
            `${attr}="…" on <${tag}> is not in ALLOWED_ATTR — DOMPurify deletes it at render, silently`)
      }
      if (full.endsWith('/>') && !VOID_OK.has(name) && !SVG_TAGS.has(name))
        add(lineOf(t.index), 'self-closed', `<${tag}/> self-closes; HTML parsers ignore that — use <${tag}>…</${tag}>`)
    }

    for (const svg of html.matchAll(/<svg\b[^>]*class="[^"]*\bdiagram-svg\b[^"]*"[\s\S]*?<\/svg>/g)) {
      const body = svg[0]
      const at = (i) => lineOf(svg.index + i)
      const open = body.slice(0, body.indexOf('>'))
      if (!/role="img"/.test(open)) add(at(0), 'diagram-a11y', 'diagram <svg> is missing role="img"')
      if (!/aria-label="/.test(open))
        add(at(0), 'diagram-a11y', 'diagram <svg> is missing aria-label stating the chart\'s conclusion')

      const grad = body.indexOf('linearGradient')
      if (grad !== -1 && /stop-color="currentColor"/.test(body))
        add(at(grad), 'dead-gradient',
          'linearGradient with stop-color="currentColor" collapses to transparent in Chromium — use fill-opacity')

      for (const c of body.matchAll(/(?:fill|stroke)="(#[0-9a-fA-F]{3,8}|rgba?\([^)]*\))"/g))
        add(at(c.index), 'hardcoded-color',
          `${c[1]} will not invert under dark mode — use fill="currentColor" with fill-opacity`)

      const vb = open.match(/viewBox="0 0 (\d+)/)
      const w = vb ? Number(vb[1]) : 0
      if (/\bdiagram-narrow\b/.test(open)) {
        if (w && w !== 320)
          add(at(0), 'canvas-width',
            `viewBox is ${w} units — a diagram-narrow phone drawing is drawn on 320 so nominal sizes survive on a 360px phone`)
      } else if (w && w !== 640)
        add(at(0), 'canvas-width',
          `viewBox is ${w} units — diagrams are drawn on 640 so nominal sizes survive; never widen the canvas to make room`)

      for (const f of body.matchAll(/font-size="([\d.]+)"/g)) {
        const nominal = Number(f[1])
        if (nominal < 13)
          add(at(f.index), 'tiny-font',
            `font-size ${nominal} is under the floor of 13 (eyebrow 14.5, headline 28) — redesign the layout or cut the label, never shrink the text`)
      }
    }

    const emoji = /[\u{1F300}-\u{1FAFF}]|\u{FE0F}/u.exec(html)
    if (emoji) add(lineOf(emoji.index), 'emoji', 'no emojis (CLAUDE.md §2)')
  }
  return out
}

const args = process.argv.slice(2)
const registry = readFileSync(REGISTRY, 'utf8')
const lists = allowlist()

const files = args.includes('--all')
  ? readdirSync(resolve(ROOT, 'src/posts')).filter((f) => f.endsWith('.ts') && f !== 'index.ts').map((f) => resolve(ROOT, 'src/posts', f))
  : args.filter((f) => /src\/posts\/(?!index\.ts$)[^/]*\.ts$/.test(f))

if (files.length === 0) process.exit(0)

const findings = files.flatMap((f) => {
  try { return checkFile(f, lists, registry) } catch (e) {
    return [{ file: f, line: 1, code: 'validator-error', msg: e.message }]
  }
})

if (findings.length === 0) process.exit(0)

const rel = (f) => f.replace(ROOT + '/', '')
for (const f of findings) console.error(`${rel(f.file)}:${f.line}  [${f.code}] ${f.msg}`)
console.error(`\n${findings.length} post rule violation(s). These do not fail the build — they fail silently in the browser.`)
process.exit(2)
