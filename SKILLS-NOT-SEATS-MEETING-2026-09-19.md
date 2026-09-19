# Skills, Seats, and the Redesign of Job Titles — Persona Meeting, 2026-09-19

Author's raw thesis (paraphrased from his own words): Product Owner is not a job,
it is a skill. Same for test, security, DevOps. Most of the job titles invented
over the last ten years are skills that got turned into separate seats, mostly
to create a piloting/control layer and to de-responsibilize the people doing
the work. Heading into 2027, staying fast and competitive means redefining
these job titles. On his own team, the fix landed on the tech lead absorbing
the product-owner skill on top of domain expertise — operating on both fronts
permanently, removing the friction of the old siloing. Fewer meetings, faster
decisions.

## Round 1 — four personas in parallel

**Adrien, DevOps/org-research.** Team Topologies (Skelton & Pais, 2019) is the
closest real framework, but it argues *against* unlimited role-merging — its
cognitive-load logic supports removing unnecessary hand-offs at the team
level, not one person absorbing PO + security + DevOps + domain expertise.
DORA's "loosely coupled teams" capability and "you build it, you run it"
(Vogels, ACM Queue 2006) are real, citable, and on point for collapsing
build/operate hand-offs specifically. No credible source says roles were
invented mainly as a control/de-responsibilization layer — that is the
author's own synthesis, must be flagged as such, not attributed to DORA or
Skelton & Pais. **Escalate:** regulated-healthcare segregation-of-duties
requirements (independent verification, IEC 62304-style traceability) directly
conflict with a "collapse everything into one generalist" reading. **Escalate:**
the piece reads adjacent to a headcount-cut narrative unless framed explicitly
as title/skill redesign, not fewer humans.

**Sophie, engineering leadership.** The honest history is a triad: real
specialization (complexity, compliance, cloud-tooling depth), real
coordination overhead at multi-team scale, and — yes — control/reporting
theater, most defensibly pinned on SAFe-style scaled-agile role proliferation
specifically, not "all specialization ever." Tech-lead-absorbs-PO is a real,
working pattern at squad scale (5–8 engineers, one product surface); it breaks
on stakeholder-time cannibalizing deep-work time, single-point-of-failure
routing, and burnout past roughly 15–20 people or more than one product
surface. Independent security review, independent V&V on safety-critical
paths, and PM-as-a-function at multi-squad scale are genuinely load-bearing,
not bureaucratic — keep them explicit. Team Topologies, Amazon two-pizza
teams, Netflix "Full Cycle Developers" (Burrell et al., 2018), and Basecamp/
37signals' anti-specialization posture (Shape Up) are real citations; Spotify
"retracting" its squad model is **not** an official reversal — cite the
outside criticism, not a retraction that didn't happen.

**Karim, skeptical senior engineer.** Flags survivorship bias hard: a strong
tech lead absorbing PO reads as "hire/promote exceptional people," not a
repeatable redesign, unless the piece admits that directly. **Escalate:**
structural tension with `po-is-dead-judgment-is-not`, which argued judgment
diffuses across *several named roles* with an explicit junior on-ramp — this
draft's hero move is the single-role collapse that post flagged as the risk
case. "De-responsibilize" as the stated motive for creating PO/QA/security/
DevOps seats reads as contempt for that readership and edges toward the
layoffs narrative even without saying it — the honest framing is
"specialization solved real problems, and some orgs let it calcify into
blame-diffusion theater." "Fewer meetings, faster decisions" is currently a
vibe with no receipt — needs an explicit illustrative/diagnosis label if there
is no real measurement to show.

**Marc, editorial strategist.** Recommended the narrow reframe (tech lead as
one instance of diffusion, not the universal prescription) to avoid
contradicting the prior post. Proposed slug/title candidates, TL;DR/opening/
blockquote drafts, and confirmed tags `Software, AI, Opinion, Work` and
cross-links to `po-is-dead-judgment-is-not`, `quality-is-executed`,
`doctrine-as-code`, `ai-team-reflex`.

## Escalation to the author

Put directly to Wifsimster: ship the narrow reframe, or ship the raw thesis
and own the tension with the earlier post. **He chose to ship the raw thesis
and own the tension explicitly in the text**, rather than soften it.

He then added two clarifications, mid-draft, that shape the final piece
without reversing that call:

1. The tech-lead-absorbs-PO move is **his field report, not a template** — it
   can be done differently on other teams. The article must say so plainly.
2. The actual claim is broader than one role pairing: **skills need to be
   remerged to redefine job titles for AI-native velocity.** The tech lead/PO
   fusion is the worked example that makes the general claim concrete, not
   the thing being prescribed.

## Round 2 — convergence

- **Keep the provocative core**: seats were substantially a coordination/
  control layer, not purely specialized execution — say so plainly, own that
  it updates the softer framing of `po-is-dead-judgment-is-not`.
- **Frame the tech-lead/PO fusion explicitly as one field report**, per the
  author's clarification — this defuses Karim's survivorship-bias flag without
  softening the thesis: the general claim is about merging skills into fewer,
  wider titles; the specific shape is local.
- **Address the tension with the prior post head-on**, in its own short
  section, rather than leaving readers of the series to notice the shift
  themselves.
- **Keep the regulated-industry carve-out non-negotiable**: independent
  security/safety review and segregation of duties are asserted as domain
  fact (first-person, no external citation needed — matches how
  `quality-is-executed` and `po-is-dead-judgment-is-not` already handle this),
  not as a hedge on the thesis.
- **Label the "fewer meetings, faster decisions" claim as illustrative**,
  per the diagnosis-vs-arithmetic rule — no invented number stands in for a
  measurement that does not exist.
- **Sourcing discipline**: Team Topologies, DORA's loosely-coupled-teams
  capability, Vogels/"you build it you run it", and Netflix's Full Cycle
  Developers post are cited for what they actually claim, not stretched to
  cover the author's own "control layer" diagnosis, which is stated as his
  own read.

## Consolidated action plan

- New post: `src/posts/SkillsNotSeats.vue`, slug `skills-not-seats`,
  date `2026-09-19`, tags `Software, AI, Opinion, Work`.
- EN title: "The Skill Was Real. The Seat Wasn't." / FR title: "La compétence
  était réelle. Le poste, non."
- Two diagrams, 640-unit viewBox: (1) skill-share vs seat-share across four
  invented titles, illustrative; (2) one decision routed through four seats
  vs one seat that already signs, illustrative, shared-baseline + delta
  bracket.
- Register in `src/posts/index.ts` (import, registry entry).
- Cross-link additions to "Read the rest of the series" in
  `po-is-dead-judgment-is-not`, `quality-is-executed`, `doctrine-as-code`.
- Run `.claude/hooks/check-post.mjs`, then `npm run build`, then commit,
  push, open the PR (draft: false per house rules), squash-merge once green.

## Decisions

- Raw thesis ships, with the tension against `po-is-dead-judgment-is-not`
  named explicitly in the text rather than smoothed over.
- Tech-lead-absorbs-PO is presented as this team's field report, not a
  universal template.
- Regulated-industry segregation-of-duties carve-out stays non-negotiable and
  un-softened.

## Follow-ups for Wifsimster

- None blocking. If the "fewer meetings, faster decisions" claim should later
  carry a real number, that is the natural next post in the series (a
  decision-latency audit, in the same shape as the DARES/quality posts).
