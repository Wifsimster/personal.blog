# New Article — Subagents Personas Meeting

**Date:** 2026-05-16
**Site:** https://blog.battistella.ovh
**Branch:** `claude/review-dora-report-RlxZf`
**Subject:** Plan a new article on the release of the DORA *ROI of AI-assisted Software Development* report (v. 2026.1).
**Format:** Four specialist personas reviewed the DORA report and the blog context in parallel (Round 1). A mid-meeting input — two LinkedIn reactions supplied by the author — was added. Findings were then converged into a shared article plan (Round 2).
**Outcome:** Article shipped as `src/posts/DoraAiRoiReport.vue` (slug `dora-ai-roi-report`), bilingual FR/EN.

---

## Attendees

| Persona | Role | Lens |
|---|---|---|
| **Adrien** | DevOps & DORA research specialist | Factual accuracy, research integrity, the *Accelerate* lineage |
| **Camille** | Engineering leadership / CTO | The business case, ROI, defending an AI budget |
| **Théo** | Skeptical senior engineer & critical reader | Intellectual honesty, vendor-incentive filter |
| **Léa** | Content & editorial strategist (FR/EN) | Voice, structure, series fit, titles, light SEO |

---

## Round 1 — Persona contributions

### Adrien — DevOps & DORA research

**Load-bearing findings the article must get right:**

1. *"AI is an amplifier"* is a research-backed conditional claim, not a metaphor: AI raises both throughput **and** instability; the net effect depends on pre-existing capabilities.
2. Keep a hard line between **established delivery findings** (throughput, instability, change failure rate — from survey research) and the **modeled ROI economics** (39%, ~8-month payback, the J-Curve shape — an illustrative financial model the report itself flags as high-uncertainty).
3. Productivity is task-dependent: 35–40% on greenfield, **≤10% on complex legacy/brownfield** — lead with the ≤10% figure for a regulated-software audience.
4. AI adoption is **associated with** increased delivery instability — say "associated with," not "causes."

**Misreadings to avoid:** treating 39%/8-month as empirical; treating the J-Curve as measured rather than conceptual; conflating "78% of execs" / 727% (vendor/exec-survey figures) with DORA primary research; reading "code is a liability" as anti-AI.

**Open question:** The report disclaims its own numbers — how hard should the article push the worked-example economics?

### Camille — Engineering leadership / CTO

**Messages that matter to leaders:** "AI is an amplifier" is a *budget-defense argument* (don't buy your way out of an org problem); the J-Curve is a *governance commitment* to a named, budgeted dip; "measure bottlenecks cleared, not code"; the instability rise must be said out loud.

**On the numbers:** present 39% / 8-month / 727% as illustrative or vendor-customer figures, never forecasts. The genuinely useful number is the **$3.3M J-Curve cost line** — it teaches leaders to put the dip on the budget.

**"Don't cut headcount":** make it financial, not moral — the report's own value model is ~95% "headcount reinvestment capacity"; cutting people deletes the largest line of your own ROI case, right at the bottom of the dip.

**Actionable:** baseline DORA metrics *before* scaling AI; add an explicit J-Curve budget line; track leading indicators (experiment frequency) not lagging ROI; audit the context layer (IDP, AI-accessible data).

### Théo — Skeptical senior engineer

**Weak spots to push back on:** the 39% is a tower of assumptions; **$11M of the $11.6M value is one lever** (headcount reinvestment capacity), resting on 12.5% time-saved **and** ~100% conversion of that time to value; "avoided cost of hiring" only books value if hiring demand actually existed; 727% is self-selected (survivorship bias); the J-Curve is a narrative model, not a measured curve; vendor incentive is structural ("contact us").

**Genuinely solid, endorse it:** "AI is an amplifier"; the greenfield/brownfield gap; foundations-first; and the report's *own* caveats ("all models are wrong").

**Must not bury:** AI adoption associated with increased delivery instability — a vendor admitting this is the most credible thing in the document.

**Handling the vendor angle:** state it plainly once, early; then endorse the directional claims and refuse the precise numbers. Reader should finish thinking *the author read this critically*, not *the author is reselling it*.

### Léa — Content & editorial strategist

**Title (recommended):** EN *"DORA Just Confirmed What My Team Already Lived"* / FR *"DORA vient de confirmer ce que mon équipe a déjà vécu."*
**Slug:** `dora-ai-roi-report` · **Date:** 2026-05-16 · **Tags:** `['Software', 'AI', 'Opinion']` (identical to the AI series).

**Angle:** "my field report, independently peer-reviewed" — the author's lived experience (J-Curve, persona panels, AI-as-amplifier) now independently confirmed by external research, while staying skeptical of the vendor math. Dual posture (vindicated **and** skeptical) is what protects the series' no-hype credibility.

**Structure:** TL;DR + `<hr>`; h2 sections; an `<svg class="diagram-svg">` J-Curve; mandatory "What still belongs to humans" honest section; "What to do Monday morning" `<ol>`; series cross-link; and — because the post is data-heavy — a closing **Sources** section (`<hr>` + `<h2>Sources</h2>`).

**SVG idea:** the J-Curve — descending-then-rising curve, dip annotated with learning curve / verification tax / pipeline adaptation, baseline dashed, plus a marker for "where is your team?".

**Open question:** treat the 5%→6% instability finding as its own beat, or fold it into "What still belongs to humans"?

---

## Mid-meeting input — the report's LinkedIn reception

The author supplied two LinkedIn posts discussing the report — the channel through which the report actually surfaced:

- **Robert Schrader** (Head of Software Engineering) — a measured analysis. Key added point: the report provides value-model formulas, but the *actual* ROI calculation needs a **baseline and a target** built on software/product delivery metrics. Reliable numbers are "especially hard in heterogeneous organizations with fragmented system landscapes, tool chains and revenue drivers other than software products or e-commerce." DORA warns metrics must be applied **in context**, at the application/service level.
- **Jean-Rémy Revy** (Head of Architecture, Ippon Technologies) — relayed it as confirmation of what he'd been promoting. Key line: *"Pas de ROI sans l'adoption d'un cadre de travail méthodologique adéquat et d'un outillage de contrôle aligné"* — and a plain-language restatement of the J-Curve.

This reception was folded into the plan as both the article's **hook** ("I found it on LinkedIn") and a dedicated **measurement** section.

---

## Round 2 — Convergence

**Where the personas converged independently:**

1. **Diagnosis solid, arithmetic soft.** All four separated the report's *qualitative diagnosis* (amplifier, J-Curve, foundations-first, code-as-liability) from its *quantitative model* (39%, 727%, ~8-month payback). The article endorses the first and openly distrusts the second.
2. **The vendor frame must be named once, early, without sneering.** DORA earns a serious read; the "delta" practice and the "contact us" pattern earn a caveat.
3. **The instability finding is the credibility anchor.** A vendor admitting AI degrades delivery stability survives the incentive filter — it gets visible weight.

**Resolutions to the open questions:**

- *Adrien (push the economics?)* → Quote 39% / 8-month / 727% as concrete anchors, but always wrapped in the report's own disclaimer and Théo's "one lever does all the work" critique. The article states outright: *"forget the 39%."*
- *Camille (the verification tax)* → Name it as a real, currently-invisible cost; use delivery metrics (deployment frequency, lead time) as proxies; note the author's persona-review panel as a way of paying the tax deliberately rather than letting it bleed.
- *Théo (does the freed hour get absorbed?)* → Made an explicit "What still belongs to humans" point: the freed hour converts to value only if someone **deliberately** redirects it; the model's $11M is conditional on that decision.
- *Léa (instability — own beat?)* → Own beat, paired with the brownfield gap under "The findings that flatter no one," with an honest note that 5%→6% is a modest illustrative delta — the point is the *direction* and the *vendor candor*.

---

## Consolidated article plan (shipped)

**File:** `src/posts/DoraAiRoiReport.vue` · **slug:** `dora-ai-roi-report` · bilingual FR/EN.

Section order: TL;DR → intro (found on LinkedIn / what DORA is / vendor disclaimer) → *"AI is an amplifier"* → *The J-Curve finally has a name* (+ J-Curve SVG) → *The ROI math, and the number I don't trust* → *The real problem is measurement* (LinkedIn-sourced) → *The findings that flatter no one* (≤10% brownfield + 5%→6% instability) → *Don't lay people off* → *What still belongs to humans* → *What to do Monday morning* (`<ol>`) → *Conclusion* + series cross-link → *Sources*.

---

## Decisions

1. **Angle:** field report independently confirmed by external research — vindicated **and** skeptical.
2. **Numbers:** every vendor/illustrative figure is quoted with its caveat; the article explicitly tells readers to ignore the headline 39%.
3. **Reception:** the LinkedIn discussion (Schrader, Revy) is the hook and grounds the dedicated measurement section.
4. **Series fit:** cross-links `sdlc-is-dead`, `coder-is-dead-engineer-is-born`, `ai-team-reflex`; reuses the house style (TL;DR, SVG diagram, honest section, Monday-morning list, Sources).
