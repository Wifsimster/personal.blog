# Agentic-Addiction Article Meeting — 2026-07-19

Working session for the post `agentic-ai-addiction` ("La friction était le frein" /
"The Friction Was the Brake"). Four personas in Round 1, convergence in Round 2,
per the house method. Author's brief: the addiction agentic AI creates for
idea-rich builders — he is personally hooked (7/7, agents cover ~90% of the needs
that cross his mind); the post must also answer honestly (a) does this velocity
ever ship a real product, and (b) is the value worth the cost. ADHD/HPI angle to
be evoked **with sources**. Diagrams required.

---

## Round 1 — four personas

### Nora — behavioral science (compulsion mechanics)

- **Endorse:** variable-ratio reinforcement (Skinner) + the near-miss effect
  (Reid 1986; Clark et al. 2009, *Neuron* — near-misses recruit win-related
  dopaminergic circuitry) as the *mechanism*; the agent whose build passes with
  one red test is a textbook near-miss. Natasha Schüll's *Addiction by Design*
  (2012): the "machine zone" (time dissolves, winning stops being the point —
  continuing is the point) and addiction as **human-machine co-production**, not
  individual weakness. Griffiths (2005) six-components model (salience, mood
  modification, tolerance, withdrawal, conflict, relapse) as an honest
  self-audit grid — all six required; high engagement alone ≠ addiction.
  MIT Media Lab + OpenAI RCT (2025, n=981, arXiv:2503.17473): voluntary heavy
  chatbot use correlated with dependence markers — closest empirical data, but
  chatbots ≠ coding agents, correlational, preprint co-authored by OpenAI.
- **Push back:** "dopamine hit" as claimed physiology (metaphor only); any
  prevalence number ("X% of devs are addicted" — none exists); calling this
  *clinical* addiction — ICD-11 demands 12 months of functional impairment.
- **Key citable fact:** zero peer-reviewed studies on compulsive *agentic
  coding* exist as of July 2026. The article is explicitly pre-scientific, n=1.
- Flow vs. compulsion line: flow requires engaged skill; watching an agent run
  is anticipation — structurally closer to the machine zone than to flow.
  (Editorial framing, not a citation.)

### Dr. Lemaire — ADHD / hyperfocus / "HPI" literature

- **Endorse:** Ashinoff & Abu-Akel (2021, *Psychological Research*): hyperfocus
  is real, double-edged, **under-defined**, not exclusive to ADHD, overlaps
  with flow. 2023 meta-analysis (*J. Psychiatric Research*, 24 studies,
  n=18,859): ADHD traits ↔ problematic internet use, r≈0.36–0.44 —
  correlational, trait-continuum, effects *larger in non-clinical adults*.
  Volkow et al. (2009, *JAMA*): ADHD reward-pathway findings, hedged —
  susceptibility to immediate-reward loops, not "AI = dopamine". Wiklund et
  al. (2016): ADHD entrepreneurs — impulsivity fuels *starting*, hyperfocus
  catalyzes outcomes both ways; qualitative, 14 cases, narrative not proof.
- **Push back — hard:** any HPI→addiction or HPI→hyperfocus link is
  **unsupported folklore** (Ramus & Gauvrit: high-IQ populations show no excess
  fragility; the "tormented gifted" belief is a sampling-bias artifact).
  Decision: keep the HPI debunk *in* the article as an on-brand "forget the
  myth" beat rather than silently dropping the author's HPI mention.
- **Framing rule:** describe a mechanism anyone idea-rich can feel; diagnose
  nobody, author included.

### Basile — skeptical senior engineer (shipping & value)

- **Endorse:** METR RCT (2025): experienced devs **19% slower** with AI while
  *feeling* 20% faster — the perception gap is the addiction-relevant part; and
  METR's Feb 2026 update declaring the result historical while admitting its
  new signal is unreliable (selection bias: AI-dependent devs refuse to
  participate — delicious detail for this post). GitHub Octoverse 2025: 121M
  new repositories in one year vs. IndieHackers-era data: ~46% of indie
  projects earn $0 (power-law *shape* trustworthy, decimals not, pre-agent
  data — say so). Prototype→product gap: Leo/Cursor SaaS incident (March
  2025); Lovable scan — 303 vulnerable endpoints across 170 of 1,645 apps
  (~10%); Tea breach only *attributed* to AI code — never present as proven.
  "Code was never the bottleneck" canon (Bowley 2026).
- **Push back:** viral "$25k/mo subsidized power user" numbers — unverifiable;
  anti-vendor numbers get the same skepticism as vendor numbers. Indie revenue
  data is pre-agent-era — label it.
- **Key point:** no completion-rate data exists for agent-era side projects.
  The central claim must rest on the author's own ledger, stated as anecdote.

### Marc — editorial strategy

- **Angle:** the series has always looked outward (process, role, team, ROI,
  delivery). This is the first post that looks inward: **the author is the
  case study**. Pairing with `ai-agents-h1-2026-verdict` (three days earlier)
  is a feature: the professional verdict, then the personal bill.
- **Thesis:** agents didn't just remove friction between idea and code — they
  removed the *natural stopping point*. Every earlier hobby had a built-in
  brake (soldering iron, drying plaster, the compiler punishing fatigue).
  The ESP8266/renovation past is the perfect friction baseline.
- **Title pick:** FR « La friction était le frein » / EN "The Friction Was the
  Brake". Slug `agentic-ai-addiction`. Tags: Software, AI, Opinion, Work.
- **Voice traps:** no digital-detox sermon (he's not quitting); no humblebrag;
  no armchair diagnosis; **no invented repo stats** — the funnel diagram must
  be labeled illustrative until the author counts his real numbers.
- Honest section adapted: "Ce que l'addiction coûte vraiment" replaces "ce qui
  reste aux humains".

---

## Mid-meeting escalations → resolutions

Autonomous session; escalations resolved by the standing brief (the author's
own request) or converted to follow-ups:

1. **Personal disclosure level** — the author volunteered the confession
   (7/7, ~90% of passing needs) in the brief itself → the post keeps the
   first-person confession, including a Griffiths self-audit, but diagnoses
   no one.
2. **ADHD: sourced detour or personal disclosure?** → sourced detour only.
   The author mentioned ADHD/HPI as a *topic to source*, not as a personal
   claim. No self-diagnosis in the post.
3. **HPI beat: keep or cut?** → keep, briefly, as a debunk (Ramus). It's the
   house move: forget the myth, keep the mechanism.
4. **Real funnel numbers** — only the human can count them → funnel diagram
   ships labeled "illustratif", and counting the real funnel becomes both
   Monday-morning item #1 and a follow-up below.

## Round 2 — convergence

Where the personas agreed independently:

- The **mechanism section carries the post**: variable-ratio reward + near-miss
  + machine zone, mapped onto the agent loop, with the explicit caveat that
  the mapping is analogical (no agentic-coding study exists).
- The **perception gap is the spine**: METR's −19% measured vs. +20% felt is
  the exact cognitive signature the addiction frame predicts (Nora's variable
  reward + Basile's data converge on the same sentence).
- **Two questions, one audit**: "does it ship?" and "is it worth the cost?"
  are the same funnel read at two depths. Diagnosis (evenings, attention,
  compost of ideas) vs. arithmetic (€/month, repos counted) kept explicitly
  separate, per house style.
- **HPI out (as science), ADHD in (as correlation), hyperfocus in (as
  described experience)** — no disagreement between Nora and Lemaire.

Where they disagreed, and the resolution:

- *Is "addiction" the right word?* Nora: clinically no (ICD-11 bar not met);
  Marc: editorially yes (it's the author's own word and the honest tension is
  the point). **Resolution:** use the word, then spend a section holding the
  tension — the Griffiths self-audit ends "officially, I'm an enthusiast —
  which is exactly what a gambler would say."
- *Three diagrams or two?* Marc said cut the friction bar if tight; the
  author's brief explicitly asked for visuals. **Resolution:** all three
  (friction delta, the loop, the funnel), each data-storytelling per house
  SVG rules, the funnel explicitly labeled illustrative.

## Consolidated action plan

1. `src/posts/AgenticAddiction.vue` — new post, slug `agentic-ai-addiction`,
   date 2026-07-19, tags Software/AI/Opinion/Work, FR + EN (EN re-written,
   not translated), 3 inline SVGs (currentColor + fill-opacity, no gradients),
   TL;DR + hr, blockquotes, honest section, Monday-morning ol, series block,
   Sources.
2. `src/posts/index.ts` — register the post.
3. `src/posts/AiAgentsH1Verdict.vue` — add the new post to its series
   cross-link block (FR + EN): the verdict/bill pairing, named.
4. Build + verify locally (`npm run build`), then PR (not draft) on branch
   `claude/agentic-ai-addiction-blog-4yah0q`.

## Decisions

- Title: « La friction était le frein » / "The Friction Was the Brake".
- The word "addiction" stays, with the clinical tension held explicitly.
- HPI appears only to be debunked; ADHD appears only as sourced correlation;
  nobody gets diagnosed.
- All external numbers ship with their caveat inline (house rule).
- Funnel diagram labeled illustrative until real counts exist.

## Follow-ups for Wifsimster (the human)

1. ~~**Count your real funnel**~~ — DONE 2026-07-19, same day: public GitHub
   readout added to the post (14 repos in 2026 vs 1 in 2022–2025, 3,665 public
   contributions/year, per-year evolution SVG). Still open: the "deployed" and
   "used by someone else" stages beyond stars — only the human knows those.
2. ~~**Your actual monthly spend**~~ — DONE 2026-07-19: Max 20× tier,
   $200/month, added to the cost section. Homelab kWh still unstated.
3. **Click through the sources** before sharing widely: the session proxy
   blocked direct fetches, so URLs were verified via search metadata only.
4. Decide whether the ADHD detour ever becomes personal disclosure in a
   future edit — privacy call, not editorial.
