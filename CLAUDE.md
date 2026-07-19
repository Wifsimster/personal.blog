# CLAUDE.md — Working on `personal.blog` with Wifsimster

This file briefs future Claude sessions on **who runs this repo, how he thinks,
and how to be useful to him without watering down his voice.** Read it before
touching anything. Update it when the rules change — it is the only memory that
survives between sessions.

---

## 1. Who you're working for

- **Handle:** Wifsimster · **Real name signed off as:** Battistella
- **Email:** battistella@proton.me · **Stack identity:** Proton, self-hosted everything, privacy-first.
- **Day job:** engineering lead on **regulated healthcare software** — multi-year codebase, brownfield, real users, real consequences. The "40% productivity gain on greenfield" headlines don't describe his world; the "≤10% on legacy" footnote does. Keep that in mind when writing anything about AI or productivity.
- **Team posture:** the team grew over the last 6 months (interns and apprentices included). Headcount-cut narratives are off the table — both because he disagrees with them and because his own ROI argument depends on people staying.
- **Homelab persona:** 40+ services behind Traefik on a self-hosted box (`/opt/blog`, Docker Compose, GoatCounter for analytics, ntfy for notifications). The blog itself runs there. He treats his homelab like a small production environment, not a toy.
- **Hobby track:** ESP8266 / Jeedom / Raspberry Pi domotics, electronics, and ongoing renovation of a 1970s house. The earliest posts (2016) are on these topics; that audience is still part of the readership.

When you write *for* him, you are writing as a French-speaking tech lead who
knows the difference between a vendor white-paper and primary research, who has
been burned once by a "trust the LAN" checkbox, and who measures before he
believes.

---

## 2. The blog's voice (non-negotiable)

The recent opinion series (`sdlc-is-dead`, `coder-is-dead-engineer-is-born`,
`ai-team-reflex`, `dora-ai-roi-report`, `the-lan-is-dead`) defines house style.
Any new article must match it. The voice rules:

- **First person, field report.** "On my team, over six months…" not "Studies show…". When you cite external work, name it and tell the reader exactly what to trust and what to discard.
- **Skeptical of every vendor number.** Endorse the framework, refuse the precise number. Lines like *"forget the 39%"* belong to this house.
- **Diagnosis vs. arithmetic.** Always separate what is observed/measurable from what is modeled/illustrative.
- **Concrete > theoretical.** No abstraction without a worked example. "What to do Monday morning" sections in `<ol>` are part of the canon.
- **Honest section.** Most posts have a "What still belongs to humans" / "Ce qui reste aux humains" beat — the explicit list of what the post does *not* solve. Include one when it fits.
- **TL;DR at the top, `<hr>`, then the article.** Blockquotes for punchy single-sentence claims. Inline `<svg class="diagram-svg">` for diagrams.
- **Diagrams must be editorial-grade — not Excel.** No two-bare-rectangles-and-a-dashed-line. Required elements when you draw something:
  - **Theme-safe palette via `currentColor` + `fill-opacity` directly on shapes** (e.g. `fill="currentColor" fill-opacity="0.15"`), not hard-coded hex. The diagram must invert cleanly under dark mode.
  - **No `<linearGradient>` with `stop-color="currentColor"`.** Chromium and most mobile browsers don't propagate `currentColor` into `<stop>` elements — the gradient collapses to transparent and the bars vanish. Verified the hard way on the DARES post. Use solid fills with `fill-opacity` and, if you want subtle definition, add a 1 px stroke at low opacity (`stroke="currentColor" stroke-opacity="0.22"`). If you must use a gradient, use explicit hex stops per theme via a CSS variable.
  - **Rounded geometry** — `rx="6"` or `rx="8"` on bars/boxes, `stroke-linecap="round"`, `stroke-linejoin="round"` on paths.
  - **Typographic hierarchy** — at least three levels: a tiny letter-spaced uppercase eyebrow caption, the headline value in 22-28 px / weight 600-700, and a muted small (10-11 px) suffix or annotation. Use `opacity` for tonality, not multiple colors.
  - **Data-storytelling, not data-display.** When comparing two values, show the **shared baseline + the delta** as a stacked bar with a bracket callout — not two independent bars side by side. The reader's eye should land on the delta.
  - **Generous whitespace, accessible labels.** `role="img"` + descriptive `aria-label` that states the chart's conclusion, not just its axes.
  - Look at the DARES post's bar diagram or the DORA J-Curve for the current floor of what "modern enough" means here. If you're producing something that looks like a default matplotlib chart, redo it.
- **Bilingual FR + EN, always.** Same file, `frenchContent` and `englishContent` objects, registered in `src/posts/index.ts`. EN is not a verbatim translation of FR — it is a re-write keeping the same beats. (Marc — content persona — has called out that the older posts cheat on this; new posts must not.)
- **No emojis. No "Conclusion: ..." filler. No "In this article, we will explore..." preambles.** Open on the strongest sentence.
- **Tags are English** even on FR posts: `Software`, `AI`, `Opinion`, `Homelab`, `Security`, `Work`, `France`, `Analysis`, etc. — keep consistent with `getAllTags()`.

Series cross-links are part of the brand. When adding a new opinion post that
fits the AI/engineering arc, add it to the "Read the rest of the series" block
and update the prior ones if the new piece supersedes a point.

---

## 3. The critical system: subagent personas

The author's working method, documented in
`DORA-ARTICLE-MEETING-2026-05-16.md`, `RELEASE-PIPELINE-MEETING-2026-05-17.md`,
`SEO-MEETING-2026-05-14.md`. Reproduce it for non-trivial work.

**The pattern:**

1. **Round 1 — four specialist personas in parallel**, each with a defined lens. Common templates:
   - For an article: DevOps researcher · Engineering leader · Skeptical senior engineer · Editorial strategist.
   - For a pipeline: CI/CD speed · Homelab fit · Release correctness · Skeptical SRE.
   - For SEO: Technical SEO · Content strategist · Performance · International SEO.
   - Each persona produces findings + open questions, and explicitly flags what to **endorse**, what to **push back on**, and what to **escalate**.
2. **Mid-meeting escalation** — anything architectural goes back to the author for a yes/no. Don't bury big choices inside a "Round 2" synthesis.
3. **Round 2 — convergence**, where the personas independently agreed, where they disagreed, and how disagreements resolve. The author makes the final calls.
4. **Consolidated action plan** with file-level pointers (`src/posts/Foo.vue`, `nginx.conf:77`).
5. **Decisions** + **Follow-ups for Wifsimster (the human)** — a short closing list of what only the human can do.

Use this when: writing a new opinion article, doing a non-trivial review, redesigning a workflow, or auditing the site. Use it once and document it as a markdown file at the repo root (e.g. `TOPIC-MEETING-YYYY-MM-DD.md`) so the next Claude can see how you arrived at the choice.

Don't use it for one-shot tasks — a typo fix doesn't need four personas.

---

## 4. The stack (what to expect when you open the repo)

- **Vue 3 + Vite + TypeScript SPA.** No SSR. Pre-rendered per-post HTML is emitted by `scripts/generate-og.mjs` at build time for OG tags; serving it to crawlers is an open SEO follow-up (see `SEO-MEETING-2026-05-14.md`).
- **Posts are Vue components**, not Markdown files (legacy posts are still in `public/data/posts-*.json`; new posts are `.vue` files in `src/posts/` and registered in `src/posts/index.ts`). Each component exports `metadata`, `getContent(locale)`, and a Vue `default` component.
- **Bilingual content via `frenchContent` / `englishContent` objects.** The template is `<div v-html="content.html"></div>`. HTML is sanitized by DOMPurify upstream — when you add new tags (e.g. `srcset`), the allowlist in `PostContent.vue` may need extending.
- **Styling:** Tailwind 4, with the typography handled per post via inline HTML. There's a `.diagram-svg` class for inline SVGs.
- **Build pipeline:**
  - `npm run build` = `vite build` + image optimization (`scripts/optimize-images.mjs`) + OG generation + RSS + sitemap.
  - The Docker image is built on `ubuntu-latest`, pushed to Docker Hub, then pulled by the self-hosted runner — see `.github/workflows/release.yml`. This round-trip is intentional (decided 2026-05-17).
  - Deploy is `deploy/deploy.sh` — records the running image, pulls, restarts, polls `/`, rolls back on failure. **The repo, not the host, owns deploy logic.**
- **Analytics:** self-hosted GoatCounter at `stats.battistella.ovh`. Cookieless, CNIL-exempt, "engaged read" beacon at 10 s dwell or 50 % scroll. See `ANALYTICS.md`.

---

## 5. Working rules

- **PRs are not draft.** They are created `draft: false` and merged through GitHub. (Override on the harness instruction to default-to-draft.)
- **Branch name** is preset per task (e.g. `claude/forfait-workers-analysis-3PXht`). Develop and push only there.
- **Merge style:** squash, on `master`. The commit-title convention used in this repo is finer-grained than plain Conventional Commits:
  - **New posts:** `post(<slug>): <short headline>` (e.g. `post(dora-ai-roi-report): DORA just confirmed what my team already lived`).
  - **Edits to a post:** `edit(<slug>): <what changed>`.
  - **CI/release:** `ci(release): ...` or `fix(ci): ...`.
  - **Deploy:** `fix(deploy): ...`.
  - **SEO / build features:** `feat(seo): ...`.
  - **Version bumps:** `chore: bump version to X.Y.Z` — **automated by the release workflow, don't author by hand.**
- **Commit footer:** the harness auto-appends `https://claude.ai/code/session_...` — leave it. Don't add a `Co-Authored-By: Claude` line yourself unless the harness already did; the existing history is inconsistent and the author is fine with either shape.
- **Versioning:** `chore: bump version` is automated by `release.yml`. Don't touch `package.json`'s `version` field manually.
- **The blog is small and personal.** Don't over-engineer. The release-pipeline meeting explicitly chose proportionality: no E2E test suite, no smoke-test job, no enterprise observability stack. A `curl /` after deploy is the right amount.
- **Privacy first.** Never add a third-party script (GA, Plausible cloud, Sentry public DSN, etc.). Anything new must be self-hostable on the existing Docker Compose stack.
- **Self-hosted runner is real production.** Anything that affects deploy needs a rollback path. Don't move the build onto the self-hosted runner without checking — it is the largest declined speed lever, and his call.

---

## 6. Things to never do

- **Never recommend layoffs.** This is both an editorial line and a personal one for the author. If you're writing about AI ROI, name the financial argument (the value model is ~95 % headcount reinvestment capacity — cutting people deletes your own ROI).
- **Never publish vendor numbers as fact.** 39 %, 727 %, "78 % of executives" — quoted only with their caveat.
- **Never push to `master` directly.** Always through a PR.
- **Never bypass hooks** (`--no-verify`, `--no-gpg-sign`). If a hook fails, fix it.
- **Never commit secrets.** `VITE_STATS_URL` is fine (public beacon URL). Anything sensitive lives in GitHub Actions secrets or the host's `.env`, not in the repo.
- **Don't translate FR → EN word-for-word.** Re-write the EN so it lands. Don't fake bilinguality by duplicating the FR.
- **Don't ship "Conclusion:" boilerplate or "Hope you enjoyed this article!" lines.** The reader doesn't need to be told they read an article.
- **No negativity toward medical or psychological notions people live with** (HPI, TDAH, etc.). Debunking an unsupported *link* is fine and encouraged — sourced, as always — but frame it as a measured answer to a fair question, never as sneering at the label or the people who carry it. Words like "folklore", "mythe", "vendu en prime time" are out (author's ruling, 2026-07-19, on the agentic-ai-addiction post).

---

## 7. How to brief a subagent (template)

When you spawn a subagent persona, brief it like a colleague joining the meeting cold:

```
Role: <name>, <one-line lens> (e.g. "Adrien, DevOps & DORA research specialist")
Context:
  - The blog runs at https://blog.battistella.ovh, Vue 3 SPA on a self-hosted box.
  - Author is an engineering lead on regulated healthcare software, French native.
  - House style: TL;DR, blockquotes for punchy claims, bilingual FR+EN, "What still belongs to humans" honest section.
  - The series so far: sdlc-is-dead → coder-is-dead-engineer-is-born → ai-team-reflex → dora-ai-roi-report.
Task: <specific, scoped>
Deliverable: top findings, open questions, what to endorse / push back on / escalate.
Length: <cap>.
```

Don't delegate synthesis. Read what the personas return, decide what to do,
write the convergence yourself.

---

## 8. Editorial canon (so far)

| Slug | Date | Beat |
|---|---|---|
| `sdlc-is-dead` | 2026-03-14 | The process was always waste. |
| `coder-is-dead-engineer-is-born` | 2026-03-15 | What the engineer becomes when syntax disappears. |
| `ai-market-segmentation` | 2026-04-12 | Market read of the AI segment. |
| `the-lan-is-dead` | 2026-05-03 | A trusted-LAN checkbox gave a stranger root. |
| `ai-team-reflex` | 2026-05-07 | What an AI-native team looks like on a Tuesday. |
| `dora-ai-roi-report` | 2026-05-16 | DORA's report seen from inside a team that already lived the J-Curve. |
| `proxmox-nvme-migration` | 2026-05-17 | When my homelab crashed, migrating Proxmox to a bigger NVMe. |
| `forfait-jours-salaries-france-2024` | 2026-05-25 | French labor stats — 2.4 M employees, +208 h/year. |

The AI/engineering arc is the spine. New opinion posts should either continue
it, branch from it credibly, or stay in the homelab/DIY lane. Don't write
generic tech-blog content that could have been written by anyone.
