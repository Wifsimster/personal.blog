#!/usr/bin/env node

/**
 * Source-prep script: emits AVIF siblings next to every JPG/PNG image under
 * public/images/. The siblings are committed to the repo, so vite copies them
 * verbatim into dist/images/ at build time and CI never re-encodes.
 *
 * This is why it runs against the *source* tree, not dist/: a git checkout does
 * not preserve mtimes, so a build container would otherwise re-encode all ~300
 * images every release. Committing the AVIFs makes the encode a one-time,
 * local, incremental cost (only newly-added images convert).
 *
 * AVIF compresses 30–50% smaller than the original JPG/PNG and is widely
 * supported (Chrome, Edge, Firefox, Safari 16+). Browsers that don't support
 * AVIF fall back via the <picture><source>/<img> wrapper emitted in
 * src/utils/imageProcessing.ts.
 *
 * The script is idempotent: it skips any image that already has an AVIF
 * sibling. Editing an image *in place* (same filename, new content) needs an
 * explicit IMAGE_AVIF_FORCE=1 to regenerate its stale sibling.
 *
 * Usage: node scripts/optimize-images.mjs   (aliased as `npm run optimize:images`)
 * Env:   IMAGE_AVIF_QUALITY   (default 65)
 *        IMAGE_AVIF_EFFORT    (default 4 — range 0..9, higher = slower & smaller)
 *        IMAGE_AVIF_MAX_WIDTH (default 1600 — downscale only, never upscale)
 *        IMAGE_AVIF_FORCE     (set to "1" to regenerate every sibling)
 */

import { readdirSync, statSync, existsSync, unlinkSync } from 'fs'
import { join, dirname, extname, relative } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SOURCE_DIR = join(ROOT, 'public')
const IMAGES_DIR = join(SOURCE_DIR, 'images')

const QUALITY = parseInt(process.env.IMAGE_AVIF_QUALITY || '65', 10)
const EFFORT = parseInt(process.env.IMAGE_AVIF_EFFORT || '4', 10)
const MAX_WIDTH = parseInt(process.env.IMAGE_AVIF_MAX_WIDTH || '1600', 10)
const FORCE = process.env.IMAGE_AVIF_FORCE === '1'

const SOURCE_EXTS = new Set(['.jpg', '.jpeg', '.png'])
// Sharp uses libvips with internal multi-threading sized to libuv's pool. Stacking
// JS-level concurrency on top causes thread contention and slows wall-clock time.
// Process one image at a time and let libvips fan out across all cores.
const CONCURRENCY = 1

// OG card PNGs (images/og/) are referenced as .png in OG meta and don't
// benefit from AVIF siblings, so skip that subtree.
const SKIP_DIRS = new Set([join(IMAGES_DIR, 'og')])

function* walk(dir) {
  if (SKIP_DIRS.has(dir)) return
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(full)
    } else if (entry.isFile()) {
      yield full
    }
  }
}

function avifPathFor(srcPath) {
  return srcPath.replace(/\.(jpe?g|png)$/i, '.avif')
}

async function convertOne(srcPath) {
  const dst = avifPathFor(srcPath)
  const srcStat = statSync(srcPath)

  // Skip whenever a sibling already exists. mtime comparison is deliberately
  // avoided: the AVIFs are committed and a git checkout rewrites mtimes to the
  // checkout time in no guaranteed order, which would re-encode everything in
  // CI. Regenerate a stale sibling with IMAGE_AVIF_FORCE=1.
  if (!FORCE && existsSync(dst)) {
    const dstStat = statSync(dst)
    return { status: 'skipped', src: srcPath, srcSize: srcStat.size, dstSize: dstStat.size }
  }

  const pipeline = sharp(srcPath, { failOn: 'none' }).rotate()
  const metadata = await pipeline.metadata()
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }
  await pipeline.avif({ quality: QUALITY, effort: EFFORT }).toFile(dst)

  const dstStat = statSync(dst)

  // If AVIF turned out larger than the source (rare, mostly tiny diagrams),
  // drop it so the browser doesn't waste a request fetching a worse file.
  if (dstStat.size >= srcStat.size) {
    unlinkSync(dst)
    return { status: 'rejected', src: srcPath, srcSize: srcStat.size, dstSize: dstStat.size }
  }

  return { status: 'converted', src: srcPath, srcSize: srcStat.size, dstSize: dstStat.size }
}

async function runPool(items, worker, concurrency) {
  const results = []
  let cursor = 0
  const lanes = Array.from({ length: Math.min(concurrency, items.length) }, async () => {
    while (cursor < items.length) {
      const idx = cursor++
      results[idx] = await worker(items[idx])
    }
  })
  await Promise.all(lanes)
  return results
}

function fmtBytes(n) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / 1024 / 1024).toFixed(2)} MB`
}

async function main() {
  console.log('Optimizing images (JPG/PNG → AVIF siblings)...')
  console.log(`  Quality=${QUALITY}  Effort=${EFFORT}  MaxWidth=${MAX_WIDTH}  Concurrency=${CONCURRENCY}${FORCE ? '  FORCE' : ''}`)

  if (!existsSync(IMAGES_DIR)) {
    console.error(`  Error: ${IMAGES_DIR} not found.`)
    process.exit(1)
  }

  const sources = []
  for (const file of walk(IMAGES_DIR)) {
    if (SOURCE_EXTS.has(extname(file).toLowerCase())) sources.push(file)
  }
  console.log(`  Found ${sources.length} source images`)

  const results = await runPool(sources, convertOne, CONCURRENCY)

  let converted = 0, skipped = 0, rejected = 0, srcBytes = 0, dstBytes = 0
  for (const r of results) {
    if (!r) continue
    if (r.status === 'converted') {
      converted++
      srcBytes += r.srcSize
      dstBytes += r.dstSize
    } else if (r.status === 'skipped') {
      skipped++
    } else if (r.status === 'rejected') {
      rejected++
      console.log(`  rejected (AVIF >= source): ${relative(SOURCE_DIR, r.src)} (${fmtBytes(r.srcSize)} → ${fmtBytes(r.dstSize)})`)
    }
  }

  const savings = srcBytes - dstBytes
  const pct = srcBytes > 0 ? (savings / srcBytes * 100).toFixed(1) : '0.0'

  console.log(`  Converted: ${converted}  Skipped (cached): ${skipped}  Rejected (no gain): ${rejected}`)
  if (converted > 0) {
    console.log(`  Bytes: ${fmtBytes(srcBytes)} → ${fmtBytes(dstBytes)} (${pct}% smaller, saved ${fmtBytes(savings)})`)
  }
}

main().catch(err => {
  console.error('Image optimization failed:', err)
  process.exit(1)
})
