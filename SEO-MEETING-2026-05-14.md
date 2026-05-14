# SEO Improvement — Subagents Personas Meeting

**Date:** 2026-05-14
**Site:** https://blog.battistella.ovh
**Branch:** `claude/subagents-seo-meeting-kAwUW`
**Format:** Four specialist personas reviewed the repo in parallel, then their findings were synthesized into a shared action plan.

---

## Attendees

| Persona | Role | Lens |
|---|---|---|
| **Priya** | Senior Technical SEO Engineer | Crawlability, indexing, structured data, SPA pre-rendering |
| **Marc** | Content & Keyword Strategist (FR/EN tech-DIY, 15y) | Titles, descriptions, intent, taxonomy, E-E-A-T |
| **Yui** | Performance Engineer (Core Web Vitals) | LCP / INP / CLS, payload, fonts, images |
| **Sofía** | International SEO Specialist | hreflang, locale routing, multilingual indexing |

---

## Round 1 — Persona contributions

### Priya — Technical SEO

**Top 3 findings:**

1. **The SPA fallback hides per-route metadata from crawlers.** `nginx.conf:77` does `try_files $uri $uri/ /index.html;`. `scripts/generate-og.mjs:471-484` *does* emit per-post HTML at `dist/posts/<slug>/index.html` with OG tags, but nginx never serves them — every URL falls back to the global `index.html`. Googlebot needs to render JS to see post-specific titles/descriptions.
2. **No canonical, no hreflang, no JSON-LD anywhere.** `index.html` has none. `generate-og.mjs:304-317` injects OG/Twitter tags only.
3. **No `robots.txt`, no `sitemap.xml`.** Confirmed absent in repo root and `public/`. Across 30 posts × 2 locales, crawlers depend entirely on internal links.

**Recommended actions:**

- **P0** — Create `public/robots.txt` with a `Sitemap:` directive.
- **P0** — Generate `public/sitemap.xml` (extend `scripts/generate-rss.mjs` or new `scripts/generate-sitemap.mjs`) listing all post URLs (FR + EN), home, archives, tags. `<lastmod>` from `post.date`.
- **P0** — Inject `<link rel="canonical">` into both `index.html` and the per-post HTML produced by `generate-og.mjs`. Use `postUrl` already computed at line 301.
- **P1** — Inject `Article` JSON-LD (`@type: Article`, `headline`, `datePublished`, `author: {@type: Person, name: "Wifsimster"}`, `image`, `keywords` from tags) in `generate-og.mjs` before `</head>`.
- **P1** — Add hreflang link set in `index.html` and per-post HTML (see Sofía).
- **P2** — Update `nginx.conf` so requests to `/posts/<slug>` serve `dist/posts/<slug>/index.html` directly (drop the SPA fallback for known pre-rendered routes) so crawlers see real metadata without JS.

**Question:** Do we ship per-post HTML to *all* clients (recommended — better than UA-sniffing) or only to crawlers?

---

### Marc — Content & Keyword Strategy

**Top 3 findings:**

1. **20 of 31 posts are missing from `public/data/posts-*.json`.** The Vue files exist in `src/posts/` (renovation series, SDLC/Coder essays, AI articles), but only 10 made it into the JSON feeds that drive Home, search, filters, tag pages — and therefore internal linking. Those 20 posts are SEO-invisible.
2. **Boilerplate descriptions + thin/keyword-stuffed titles.** Two descriptions start with the identical phrase *"Cet article met en avant"* (`affichage-i2c-esp8266`, `luminosite-jeedom-esp8266`). The post `flash-esp8266` has an 18-char title and a 55-char description — too thin for SERP credibility.
3. **EN posts are not translated.** All 10 EN entries duplicate the FR title, description and body verbatim. The bilingual story is wasted.

**Three post rewrites:**

- **`flash-esp8266`**
  - FR title: *Flash d'un ESP8266* → **Comment flasher un ESP8266 : guide complet NodeMCU**
  - FR desc: → *"Tutoriel pas à pas pour flasher votre ESP8266 avec NodeMCU. Matériel, logiciels, procédure complète pour débuter en IoT."*
  - EN title: **How to Flash an ESP8266 with NodeMCU: Complete Guide**
  - EN desc: *"Step-by-step tutorial to flash an ESP8266 with NodeMCU firmware — hardware setup, tools, and full flashing procedure for IoT beginners."*

- **`affichage-i2c-esp8266`**
  - FR title → **Afficher des données MQTT en temps réel sur un OLED I2C avec un ESP8266**
  - FR desc → *"Branchez un écran OLED 128×64 sur votre ESP8266 pour afficher en direct des données MQTT. Code NodeMCU complet inclus."*

- **`luminosite-jeedom-esp8266`**
  - FR title → **Capteur de luminosité TSL2561 + Jeedom : intégration ESP8266 MQTT**
  - FR desc → *"Installez un TSL2561 sur un ESP8266 pour remonter la luminosité ambiante dans Jeedom. Solution DIY domotique complète."*

**Content gap / pillar opportunities:**

1. **"Guide complet domotique maison Jeedom + ESP8266"** — hub that links the 4 Jeedom posts + the sensor/relay posts. Topic cluster: Jeedom setup → ESP8266 basics → sensors → relais.
2. **"Rénovation maison 1970"** hub — unblock the 5 hidden renovation posts and connect them in a pillar page. High-volume evergreen French keywords.
3. **"ESP8266 vs Raspberry Pi vs Teensy pour la domotique DIY"** — top-of-funnel comparison that links down into existing tutorials.

**Question:** Are the 20 missing posts intentionally hidden, or is `public/data/posts-*.json` an out-of-date export? This is the single biggest content-SEO blocker.

---

### Yui — Core Web Vitals & Performance

**Top 3 findings:**

1. **Unoptimized image payload.** `public/images/` holds 305 JPEGs + 19 PNGs (no WebP/AVIF). Images are emitted without `width`, `height`, `loading="lazy"`, or `srcset`. Largest single file: `affichage-i2c-esp8266-resultat.jpg` (907 KB). Impact: LCP +~500ms on hero images, latent CLS from unknown intrinsic sizes.
2. **Aggressive font loading.** `index.html:19` pulls Merriweather with 8 weights/italics from Google Fonts. `display=swap` is set but there's no `<link rel="preload">` for the critical weights → ~+400ms LCP on serif text blocks.
3. **Vue DevTools ships to production.** `vite.config.ts:10` includes `VueDevTools()` unconditionally — ~+50KB and dev-time hooks live in the production bundle.

**Recommended actions:**

- **P0** — Build-time image pipeline (`sharp` or `imagemin`): emit AVIF + JPG fallback + responsive variants per source. Update `imageProcessing.ts` and the DOMPurify allowlist (`PostContent.vue`) to keep `srcset`, `loading`, `width`, `height`.
- **P0** — Preload critical Merriweather weights (400 + 700) in `index.html`. Drop unused italic/300/900 weights.
- **P1** — Guard `VueDevTools()` behind `process.env.NODE_ENV === 'development'` in `vite.config.ts`.
- **P1** — Post-build injection of `<link rel="preload">` for the largest JS/CSS chunks into the per-route HTML files emitted by `generate-og.mjs`.
- **P2** — Generate post thumbnails for cards on the Home/Archive views (smaller payloads).

**Quick wins (< 1h):**

- Wrap `VueDevTools()` in a dev check.
- Add `<link rel="preload" as="font" crossorigin>` for the two critical Merriweather weights.
- Extend the DOMPurify allowlist now, so future image-pipeline output works without a second round-trip.

**Question:** Do we have a CDN / image service (Cloudflare Polish, ImageKit, etc.), or do we build AVIF locally as part of `npm run build`?

---

### Sofía — International SEO

**Top 3 findings:**

1. **`<html lang="fr">` is hard-coded** in `index.html:2`, including for `/en/*` routes. `useI18n.ts` detects the route language correctly but never writes the attribute back. Googlebot sees every English page declared as French.
2. **Zero hreflang.** `generate-og.mjs:304-317` emits OG (with `og:locale`), but no `<link rel="alternate" hreflang>` and no `<link rel="canonical">`. FR/EN equity is split.
3. **Shared slugs (`/posts/X` ↔ `/en/posts/X`) with identical body content** — hreflang pairing is straightforward to compute, but without canonicals it looks like duplicate content.

**Recommended actions:**

- **P0** — Update `<html lang>` dynamically on every route change. Add to `App.vue` or a router guard:
  ```ts
  watchEffect(() => { document.documentElement.lang = i18n.language.value })
  ```
- **P0** — In `generate-og.mjs` (after the OG tags array, before injection at line ~344), build a `hreflangTags` block and inject it alongside the OG tags:
  ```js
  const hreflangTags = [
    `<link rel="alternate" hreflang="fr" href="${SITE_URL}/posts/${post.slug}">`,
    `<link rel="alternate" hreflang="en" href="${SITE_URL}/en/posts/${post.slug}">`,
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/posts/${post.slug}">`,
    `<link rel="canonical" href="${postUrl}">`
  ].join('\n    ')
  ```
- **P1** — Multilingual `sitemap.xml` using `xhtml:link rel="alternate" hreflang=...` per URL.
- **P1** — Add hreflang to `index.html` for the homepage pair (`/` ↔ `/en`).
- **P2** — `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://blog.battistella.ovh/sitemap.xml
  ```

**Per-post hreflang snippet (slug = `affichage-i2c-esp8266`):**
```html
<link rel="alternate" hreflang="fr" href="https://blog.battistella.ovh/posts/affichage-i2c-esp8266">
<link rel="alternate" hreflang="en" href="https://blog.battistella.ovh/en/posts/affichage-i2c-esp8266">
<link rel="alternate" hreflang="x-default" href="https://blog.battistella.ovh/posts/affichage-i2c-esp8266">
<link rel="canonical" href="https://blog.battistella.ovh/posts/affichage-i2c-esp8266">
```

**Question:** Is FR the canonical primary locale (→ `x-default = FR`)? Legacy says yes; only override if EN is the new strategic priority.

---

## Round 2 — Cross-persona convergence

Three things every persona surfaced independently:

1. **The SPA fallback is the single biggest technical hole.** Pre-rendered HTML already exists in `dist/posts/<slug>/index.html` — nginx just never serves it. Fixing this unblocks everything else (canonical, hreflang, JSON-LD only matter if crawlers actually see them without executing JS).
2. **`public/data/posts-*.json` is the content choke point.** 20 of 31 posts aren't exposed. Whether it's a stale export or an intentional staging gate, it has to be addressed before any on-page SEO work pays off.
3. **The bilingual story is half-built.** Routes exist, OG locale exists, but `html lang`, hreflang, canonical, and actual EN translations are all missing. Either commit to bilingual or drop `/en`.

Where personas disagreed:

- **Priya** wanted nginx UA-sniffing for crawlers (P2). **Sofía & Yui** preferred shipping pre-rendered HTML to *everyone* — same outcome, no UA fragility. **Resolution:** ship pre-rendered HTML universally; SPA hydrates on top.

---

## Consolidated action plan (priority order)

### P0 — Ship this week

1. **Serve pre-rendered HTML.** Modify `nginx.conf` so `/posts/<slug>` and `/en/posts/<slug>` (and home, archives, tags) match `try_files $uri/index.html $uri /index.html;` — pre-rendered file wins, SPA fallback only for unknown routes. *Owner: Priya.*
2. **Fix `public/data/posts-*.json`.** Audit why 20 posts are missing; rebuild the JSON or fix the generator. Unblocks all internal linking and search. *Owner: Marc.*
3. **Dynamic `<html lang>`** via a watchEffect in `App.vue` keyed on `useI18n().language`. *Owner: Sofía.*
4. **`public/robots.txt`** + new `scripts/generate-sitemap.mjs` (multilingual, with `xhtml:link` alternates). Wire it into `npm run build`. *Owner: Priya + Sofía.*
5. **Inject canonical + hreflang + Article JSON-LD** in `generate-og.mjs` (extend the existing per-route HTML emit, lines 297-347). *Owner: Priya + Sofía.*
6. **Drop `VueDevTools()` from production** in `vite.config.ts`. 1-line change. *Owner: Yui.*

### P1 — Next sprint

7. Build-time image pipeline (AVIF + JPG fallback, responsive `srcset`) via `sharp` in `scripts/`. Extend DOMPurify allowlist in `PostContent.vue`. *Yui.*
8. Preload critical Merriweather weights; drop unused weights from the Google Fonts URL in `index.html`. *Yui.*
9. Rewrite top 10 weakest titles/descriptions (start with the three above). *Marc.*
10. Real EN translations — at minimum for the 5 highest-traffic posts. *Marc.*

### P2 — Backlog

11. Pillar/hub pages: "Domotique Jeedom + ESP8266", "Rénovation maison 1970", "ESP8266 vs Raspberry Pi vs Teensy". *Marc.*
12. Per-post `lastmod` driven by git history (not just `post.date`) in the sitemap. *Priya.*
13. Thumbnail variants for Home/Archive cards. *Yui.*

---

## Open questions for Wifsimster (the human)

1. **Ship pre-rendered HTML to everyone, or only crawlers?** Recommendation: everyone.
2. **Are the 20 missing posts intentionally hidden, or is the JSON export broken?** Single biggest blocker.
3. **Bilingual commitment:** invest in real EN translations, or drop `/en/` and consolidate on FR?
4. **Image pipeline:** local AVIF generation at build time, or front-end CDN (Cloudflare Polish / ImageKit)?
5. **`x-default` = FR or EN?** Recommendation: FR.
