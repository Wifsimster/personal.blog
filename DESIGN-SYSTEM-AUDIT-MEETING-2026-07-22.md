# Design-system audit — 2026-07-22

Goal: *analyser le design system, relever les discrepancies, les corriger.*

The blog's design system is Tailwind 4 `@theme` tokens (`src/styles/main.css`: a
`primary` sky-blue scale 50–900, font stacks) over a PrimeVue Aura preset with
`darkModeSelector: '.dark'`. The house convention — confirmed consistent — is
**light = `gray-*`, dark = `zinc-*`** (paired), and **all accents go through
`primary-*`** (no raw `blue/sky/indigo`). That part of the system is sound.

The audit ran the standard four-persona meeting.

---

## Round 1 — four lenses

- **Léa — design-systems engineer** (token/component consistency)
- **Sam — frontend accessibility & UX** (focus, keyboard, contrast, motion)
- **Marc — skeptical senior Vue engineer** (proportionality, over-engineering)
- **Camille — editorial & brand strategist** (one coherent visual voice)

### Discrepancies found

| ID | Discrepancy | Evidence |
|---|---|---|
| D1 | Tag-pill vocabulary broken by one outlier | `PostCard.vue:19` used `rounded` (square) + `dark:bg-zinc-700` while every other pill is `rounded-full` + `dark:bg-zinc-800` |
| D2 | Search-input font-size drift | `Home.vue` / `Tag.vue` inputs omitted `text-sm`; `Header` / `Sidebar` had it — font size differed between pages |
| D3 | Round icon buttons duplicated 5× | `Header` (3) + `Sidebar` (2) — identical shape, no shared token |
| D6 | Divider color drift | Year-group `<h2>` underline used `gray-300 / zinc-700`; every other hr/divider/border uses `gray-200 / zinc-800` |
| D7 | Dead code | `MobileMenu.vue` imported nowhere (Header reimplemented the menu inline); `LanguageToggle.vue` imported only by the dead `MobileMenu` |
| D8 | Two card treatments | `PostCard` glass (`backdrop-blur-sm`, opacity, shadow) vs flat related-post card in `Post.vue:58` |
| a11y | Focus states inconsistent | Only `BackToTop.vue` had a proper `focus-visible` ring. Icon buttons had **no** focus indicator at all; inputs used `focus:` with no ring-offset; pills/links had none |

---

## Mid-meeting escalations (author-level calls)

Per house rule, architectural choices don't get buried in a "Round 2 synthesis":

1. **Component extraction** (`SearchInput` / `IconButton` / `TagChip`) to kill
   D2/D3 duplication. **Declined this pass.** Marc's refusal stands: the copies
   differ in v-model wiring, handlers, and placeholder source; a shared component
   needs enough props/slots that it costs more than it saves on a blog whose
   CLAUDE.md says *don't over-engineer*. Normalize strings in place instead.
2. **D8 card unification.** **Left as-is.** Plausibly intentional (dense 3-col
   related grid vs featured list card); don't unify on an aesthetic assumption.
3. **Archives `h1` scale.** Camille flagged it sits at `text-4xl` like articles
   while `Home` / `Tag` landings use `text-5xl`. **Kept at 4xl** — Archives is a
   utility listing, not a marketing landing. The `5xl` landing / `4xl` article
   split is **endorsed as intentional hierarchy** (article `h1` deliberately
   matches `.prose h1`), not drift. Flagged for the author if he disagrees.

---

## Round 2 — convergence (what shipped)

All four personas converged on: **normalize the drift in place, delete the dead
code, and standardize focus — no new component library.**

| # | Fix | Files |
|---|---|---|
| D7 | Delete orphaned `MobileMenu.vue` + `LanguageToggle.vue` | (removed) |
| D1 | `PostCard` tag pill → `rounded-full` + `dark:bg-zinc-800` (kept muted + hover-less: it's a non-interactive `<span>`) | `PostCard.vue` |
| D2 | Add `text-sm` to `Home` / `Tag` search inputs | `Home.vue`, `Tag.vue` |
| D6 | Year-group `<h2>` underline → `gray-200 / zinc-800` | `Home.vue`, `Tag.vue` |
| a11y | New `.focus-ring` token in `main.css` (the one design-system addition), mirroring the ring `BackToTop.vue` already used. Applied to every button, pill, and block/list link. Inputs keep `focus:` but gained the matching `ring-offset`. Clear-search `×` bumped `gray-400 → gray-500` for the 3:1 non-text contrast minimum. | `main.css` + all layout/blog/view components |

### The `.focus-ring` token

```css
.focus-ring {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500
         focus-visible:ring-offset-2 focus-visible:ring-offset-white
         dark:focus-visible:ring-offset-zinc-900;
}
```

One class, not a repeated 6-utility string — the proportionate DRY move for a
focus standard. Text inputs keep `focus:` (you *want* the ring on mouse-focus of
an input) and reuse the same offset colors inline.

Build verified green (`vite build`); `.focus-ring` compiles to
`.focus-ring:focus-visible` + a `.dark` offset override as intended.

---

## Decisions

- Design tokens (gray/zinc pairing, `primary` accents) were already consistent — left untouched.
- Drift normalized in place; **no** `SearchInput`/`IconButton`/`TagChip` extraction.
- Dead `MobileMenu.vue` + `LanguageToggle.vue` deleted. The live language control stays the inline `FlagIcon` button (on-brand: same editorial-SVG language as the post diagrams); the unused slide-switch is gone.
- Focus is now one standard across the site.

## Follow-ups for Wifsimster (the human)

1. If you'd rather `Archives` read as a landing, bump its `h1` to `text-5xl` (currently `4xl`, kept intentionally).
2. If the icon-button / search-input duplication ever bothers you, the extraction is a deliberate future call — say the word and it's a clean `IconButton` + `SearchInput` pass.
3. D8: related-post cards stayed flat vs `PostCard`'s glass. Unify only if you want them to read as the same card family.
