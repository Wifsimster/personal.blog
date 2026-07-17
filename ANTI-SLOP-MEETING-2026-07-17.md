# Anti-AI-Slop Content Check — `ai-agents-h1-2026-verdict` — 2026-07-17

Four-persona review of `src/posts/AiAgentsH1Verdict.vue` ("100% Agent-Written:
Six Months on a Greenfield Rebuild", published 2026-07-16), run per the working
method in `CLAUDE.md`. Question on the table: **does the latest post read as AI
slop, and what must change?**

Personas:

- **Nora** — AI-slop forensics (linguistic fingerprints of LLM prose, EN + FR)
- **Serge** — skeptical senior engineer (numbers, contradictions, vendor-number hygiene)
- **Claire** — French native editor (anglicisms, calques, FR↔EN relationship)
- **Marc** — editorial strategist (series voice, self-congratulation drift, pacing)

---

## Round 1 — findings per persona

### Nora (slop forensics)

**Verdict: hybrid — human in substance, machine in cadence.** Vocabulary is
clean (zero "delve/landscape/crucial/robust/testament"; FR has no "force est de
constater"), sourcing discipline reads authored, FR/EN are genuine rewrites.
What trips the detector is pure rhythm:

- **"Not X; it's Y" contrast scaffolding: 11× EN / 12× FR.** One is style, a
  dozen is the machine's default sentence generator.
- **"Nobody sells smarter anymore; they sell checks its own work" appears
  verbatim twice in the first screen** (TL;DR + opening section), plus a
  seven-strong "nobody/personne" chorus.
- **Em-dash density ~21/1,000 words EN** (edited human prose: 3–8).
- **Zinger metronome:** 10–12 of 35 paragraphs end on a ≤9-word epigram; every
  H2 closes on a blockquote or one-liner.
- **"quietly/quiet" intensifier 4× EN**; "says everything / the real X" family
  5×; four bold-lead list blocks in the identical shape.

### Serge (skeptic)

**The arithmetic core is sound** (verified independently): commit bars sum to
4,500; 4,500/127 days = 35.4/day; 0.95²⁰ = 0.358 and 0.95⁵⁰ = 0.077 match the
prose; both SVG timelines, TL;DR and prose dates all agree. But:

- **HIGH — freeze-date contradiction:** body says counters "frozen on July 15",
  Sources say "snapshot of July 16" (EN + FR). The Kimi "a day after I froze
  these counters" arithmetic only works with the 15th.
- **HIGH — MCP source is future-dated:** the linked post
  (`…/2026-07-28-release-candidate/`) post-dates publication by 12 days and
  undercuts the body's "same month [May]" claim.
- **HIGH — cadence contradiction:** "a new frontier model every six to ten
  weeks" vs the SVG's own "~one every three weeks" (which is what the dates say).
- **HIGH — 30 services vs "forty-odd briefs — one per service".**
- **MEDIUM — the scorecard's only two unlaundered numbers:** MIT's "95% of
  pilots" (contested, uncaveated, unsourced) and "delegation stuck at 0–20% of
  tasks" (unattributed precision) — the exact house sin.
- MEDIUM — EN "a couple hundred docs" vs FR "250"; "over 500 deployments" is an
  orphan number; Kimi K3 specs and the Klarna reversal have no source line;
  the "100%" absolute has no stated audit mechanism.

### Claire (French editor)

**The FR is majoritairement natif** — terminology ("point de contrôle",
"périmètre", "flotte") is remarkably consistent, typography is correct outside
the SVGs, and the TL;DR/July sections are true rewrites, not translations. Real
problems:

- **HIGH:** lowercase after period ("plus de 600 fichiers…"); **"sweep" left in
  English** where the article's own pivot word is "chantier"; **"plus une
  signature d'auteur" / "plus une démo"** — the "not…anymore" calque that can
  read as "in addition to", one of them inside a pull-quote; "c'est celle que
  cette série **tourne**" (English syntax); section title "Où cela laisse la
  série" (word-for-word "Where this leaves the series").
- **MEDIUM:** "double exploitation" for "double run"; "rewrite"/"refonte" mixed
  in one paragraph; "points de contrôle humains" colliding with the gate term;
  "ce qu'on ose leur confier" repeated within three lines; "n'ont rien retiré
  de tout ceci de nos épaules"; SVG number formatting ("+24%", "1000 / run").

### Marc (house style)

**"At sentence level this sounds like him… shipped as-is, it's the first piece
in the series that sounds slightly pleased with itself."**

- Opens on setup; the strongest sentence ("No human on this project types
  production code anymore") is buried at mid-article.
- **The counters appear five times** (description, TL;DR, SVG, bullet, intro) —
  press-release cadence.
- **HIGH — the unplanned "postscript" paragraph** argues that being admired is
  a measurement — unfalsifiable, self-flattering, the opposite of "measure
  before you believe". Cut whole.
- **HIGH — pull-quote at the Cherny section repeats its own preceding sentence
  almost verbatim** ("every rung bought with a guardrail…" ×2).
- "What still belongs to humans" has drifted into a roadmap/victory lap (2
  items vs DORA post's 4; half of item 1 is a capability boast).
- Series inconsistency: **the DORA post promises this checkpoint "corrects one
  call"** — this post grades itself 4/4 and corrects nothing.
- Endorsed: both remaining diagrams, the scorecard format, the Cherny "keep the
  ladder, ignore the catalogue" move, the Monday list, the Solstice
  vendor-number caveat, the FR rewrite quality.

---

## Round 2 — convergence

Where the personas independently agreed:

1. **The piece is not slop, but it is under-pruned.** Nora (cadence), Marc
   (accumulation) and Claire (native FR, real rewrites) all land on the same
   verdict: authored substance, machine-shaped rhythm in places, and the fixes
   are mechanical, not structural.
2. **The contradictions are the most damaging finding** (Serge ×4, Marc
   independently caught the MCP link). This post explicitly invites a careful
   reader; a careful reader catches July 15/16 in one sitting.
3. **The duplicated "nobody sells smarter" line and the duplicated Cherny
   pull-quote must go** — flagged HIGH by Nora and Marc independently.
4. **The scorecard must not contain unlaundered numbers** — Serge on facts,
   Marc on voice, same conclusion: caveat MIT's 95%, fuzz the 0–20%.
5. **The postscript paragraph** — Marc HIGH; Nora's "self-congratulation"
   pattern points at the same place. Cut (restorable in PR review if the
   underlying event deserves one concrete sentence instead).
6. Claire's five FR HIGHs had no dissent.

Where they disagreed / what was **not** applied:

- **Wholesale cadence rewrites** (em-dash pass −30, thinning "not X; it's Y"
  from 11 to 3, breaking the zinger metronome everywhere): applying all of it
  mechanically risks sanding off the voice the series is built on. Applied only
  the instances with converged concrete replacements; the rest is listed below
  as a recommendation for a human pass.
- **Cutting the second SVG (release timeline)** and **rebuilding "What still
  belongs to humans"**: structural authorship calls, not slop fixes. Escalated.

## Action plan — applied in this PR

`src/posts/AiAgentsH1Verdict.vue`, both locales unless noted:

1. Sources snapshot date 16 → **15 July** (+ "deployments" added to the
   telemetry enumeration) — fixes HIGH-1, MEDIUM-6.
2. "every six to ten weeks" → "every few weeks" — fixes HIGH-3.
3. "one per service" → "one per service and micro-frontend"; EN docs count
   aligned to FR's "some 250" — fixes HIGH-4, MEDIUM-3.
4. Opening-section duplicate of the "nobody sells smarter" thesis replaced with
   a plain observation (the line survives once, in the TL;DR); "quietly"
   dropped from the TL;DR; "Let's take it in order"/"Reprenons dans l'ordre" cut.
5. MIT 95% now carries its caveat; "0–20%" now labeled "depending on the study".
6. The 100% claim now states its audit mechanism (every change enters as an
   agent-opened PR) instead of resting on assertion.
7. Postscript paragraph cut (EN + FR).
8. Duplicate Cherny blockquote cut (EN + FR); in-text sentence kept.
9. Rhetorical-question scaffold at the method section flattened to a statement;
   "not bureaucracy; it's" flattened — two of Nora's HIGH instances.
10. Claire's FR fixes: capitalization; "sweep"→"chantier"; "plus une signature
    d'auteur"→"et non plus…"; "plus une démo"→"pas une démo"; "que cette série
    tourne"→"autour de laquelle…"; "Où cela laisse la série"→"Où en est la
    série"; "du rewrite"→"de la refonte"; "points de contrôle humains"→"jalons
    de validation humaine"; "en somme" dropped; "ce qu'on ose leur confier"
    dedup; "retiré de tout ceci de nos épaules" reworded; "cadrage
    d'éditeur"→"grille de lecture d'éditeur"; FR SVG number formatting
    ("+24 %", "≤ 10 %", "1 000").

## Decisions

- The signature line "Nobody sells 'smarter' anymore; they sell 'checks its own
  work'" **survives exactly once** (TL;DR).
- Voice-level tics (em-dash density, zingers, remaining contrast scaffolds) are
  **flagged, not mass-edited** — a machine sanding machine-tells out of a human
  voice is its own kind of slop.

## Follow-ups for Wifsimster (the human)

1. **MCP source link** (`…/2026-07-28-release-candidate/`): future-dated
   relative to publication and contradicts the body's "May" claim. Only you
   know the right May citation — replace or move the claim to July. Left
   untouched.
2. **DORA cross-link promise**: `DoraAiRoiReport.vue` says this checkpoint
   "corrects one call"; the scorecard is 4/4. Either amend that line in the
   DORA post or make "Holds, amended" an explicit correction here.
3. **Confirm the real snapshot date** was July 15 (standardized to 15 because
   the Kimi arithmetic depends on it — if the snapshot was truly the 16th, the
   body needs the opposite fix).
4. Decide on the optional human pass Nora recommends: thin the remaining
   "not X; it's Y" constructions (~8 left per language), an em-dash reduction
   pass, and 3–4 paragraphs ending on a concrete detail instead of an epigram.
5. Marc's structural suggestions, your call: cut the release-timeline SVG (the
   staircase already carries the cadence), rebuild "What still belongs to
   humans" around the admitted missing value metric, add source lines for Kimi
   K3 and Klarna, soften "PRs will soon merge on their own" if you don't want
   that in print for a regulated-healthcare project.
