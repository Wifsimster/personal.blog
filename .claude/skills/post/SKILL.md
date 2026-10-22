---
name: post
description: Write, register and ship a new bilingual blog post. Use when adding an article to this blog, drafting a new opinion or homelab piece, or when the user invokes /post. Covers the persona meeting, the SFC scaffold, registration in the post registry, diagram rules and the commit convention.
---

# Shipping a post

CLAUDE.md is the doctrine — voice (§2), the persona method (§3), the never-do
list (§6). **Read it; do not restate it here.** This file is only the procedure.

## 1. Decide if it needs a meeting

A new opinion article does (CLAUDE.md §3): four personas in parallel, escalate
anything architectural to the author mid-meeting, then write the convergence
yourself. Document it at the repo root as `TOPIC-MEETING-YYYY-MM-DD.md`.

A homelab/DIY post, or an edit to an existing piece, does not.

## 2. Scaffold

One file, `src/posts/PascalCaseName.ts`. Copy the shape from the most recent
post in the canon table (CLAUDE.md §8) rather than from memory — the scaffold
has drifted before.

```
import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'kebab-case-slug',        // must match the registry key exactly
  date: 'YYYY-MM-DD',
  tags: ['Software', 'AI', 'Opinion'],  // English tags, even on FR posts
  draft: true                     // while writing; delete the line to publish
}

const englishContent: PostContent = { title, description, html: `…` }
const frenchContent: PostContent = { title, description, html: `…` }

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}
```

`draft: true` keeps the post out of every listing, feed, sitemap and OG image
while leaving it readable at `/posts/<slug>` with a banner and `noindex`. All
drafts are listed at the unlisted `/drafts`. Publishing is deleting the line.

`description` is the meta description. Per CLAUDE.md §2 it must make the point
in **different words** from the TL;DR, the opening line and the blockquote.

## 3. Register it

`src/posts/index.ts`, three edits, all required:

1. the `import { metadata as fooMetadata, getContent as getFooContent } from './Foo'` line;
2. the `'kebab-case-slug': { metadata, getContent }` entry in `postRegistry`;
3. nothing else — `getAllPosts`, `getAllTags` and the RSS/sitemap generators all read the registry.

A post that is written but not registered builds green and 404s. The hook
catches this; do not rely on noticing it.

## 4. The sanitizer is the real constraint

Post HTML is rendered `v-html` through DOMPurify in
`src/lib/render.ts`, at build time. **Any tag or attribute outside
`ALLOWED_TAGS` / `ALLOWED_ATTR` is deleted at render with no error** — the
build passes, the content is simply gone.

- Need a tag the allowlist lacks? Extend the allowlist deliberately, in the
  same PR, and say so in the description.
- `iframe` stays out. A third-party embed contradicts CLAUDE.md §5
  (privacy first). Link to the video instead of embedding it.
- `style` is not allowed either. Styling goes through classes.

## 5. Diagrams

CLAUDE.md §2 has the full rules. The three that are actually violated:

- `fill="currentColor"` + `fill-opacity`, never a hex — a hex will not invert
  under dark mode.
- No `<linearGradient>` with `stop-color="currentColor"`. It collapses to
  transparent in Chromium. Verified on the DARES post.
- **Draw on a 640-unit viewBox.** The prose column is boxed in by a
  table-of-contents rail on each side and cannot be widened — a CSS breakout
  slides the diagram *under* the rail. At 640 the scale never drops below 1,
  so **a nominal size is the size the reader gets**. Usable content width is
  576 units (32-unit margins).
- **Font floor is 13** nominal — eyebrow 14.5, headline 28, labels and
  footnotes 13. If a label does not fit, redesign the layout or cut the
  label. Never shrink the text, and never widen the canvas to make room.

`role="img"` plus an `aria-label` that states the chart's *conclusion*, not
its axes.

## 6. Check before committing

```
node .claude/hooks/check-post.mjs src/posts/YourPost.ts
```

Runs automatically after every Edit/Write via the `PostToolUse` hook in
`.claude/settings.json`. It reads the allowlist out of `src/lib/render.ts`
directly, so it cannot fall out of date.

It checks the mechanical rules only — registration, the sanitizer allowlist,
diagram palette/typography/a11y, emoji, both locales present. **It cannot
check voice.** Concision, no verbatim repetition across TL;DR / opening /
blockquote / description, the "what still belongs to humans" beat, `<abbr>` on
every acronym at first use per language — those are still yours to verify by
reading, in both languages.

`npm run lint` and `npm run typecheck` are fast; `npm run build` is the other
gate and it is slower (image optimization + Astro + OG + RSS + sitemap).
Run it once before opening the PR, not per edit.

## 7. Ship

- Branch: whatever the task preset gives you. Never push to `master`.
- Commit title: `post(<slug>): <short headline>` for a new post,
  `edit(<slug>): <what changed>` for a change to one.
- Never hand-edit `package.json`'s `version` — `release.yml` owns it.
- PR is **`draft: false`** (CLAUDE.md §5 overrides the harness default).
- Squash-merge it yourself once the build passes. No confirmation round-trip.
