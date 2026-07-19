# Review meeting — `agentic-ai-addiction` ("Encore un prompt") — 2026-07-19

Post-publication review requested by Wifsimster: fact-check the content, fix the
French, improve the phrasing, keep the tone. Three personas in round 1, convergence
and edits by the coordinating session.

## Round 1 — personas

### Adrien — fact-checker (web-verified)

**Verdict: 20 of 23 claims accurate with adequate caveats.** Verified exact:
METR (−19% vs +20% felt, and the +24% prior forecast), Octoverse 121M/230 per
minute, Lovable scan (303 endpoints, 170 of 1,645), Tea breach (72,000 images,
AI-attribution correctly hedged), EnrichLead/Cursor incident (all details check
out), Pew 8% vs 15% on 68,879 searches, StatCounter sub-90%, Gartner Feb 2024,
Griffiths six components, Clark 2009 (Cambridge, n=15 fMRI), MIT/OpenAI RCT
(n=981, 4 weeks), Wiklund 2016 (14 cases), Ramus & Gauvrit, Max 20× at $200.

**Found wrong or unverifiable:**
1. **Pew "56% start with a search engine vs 16% with a chatbot" (mid-2026) — not
   in the report.** The June 17, 2026 "Americans and AI" report (n=5,119) has:
   49% ever use a chatbot, 42% use one to search for information, 60% read AI
   summaries. The 16% is a different question (share expecting AI to help
   society). Corrected to the verified 49%/42% pair in body + sources, both
   languages.
2. **Schüll affiliation anachronism** — she wrote *Addiction by Design* at MIT,
   moved to NYU ~2015. Abbr now says both.
3. **Meta-analysis moderator** — "notably stronger in non-clinical adults" could
   not be confirmed at abstract level; softened to "including in non-clinical
   adults" / « y compris chez des adultes non cliniques ».
4. **Volkow 2009** — immediate-vs-delayed reward preference is Volkow's broader
   body of work, not the headline of the 2009 JAMA paper; loosened to
   "consistent with" / « cohérente avec ».
5. **ICD-11** — the 12-month criterion is "normally" 12 months (can be
   shortened); added the qualifier in both languages.

### Claire — French copy editor

10 objective faults + ~20 phrasing improvements, all applied. Highlights:
élision (« avant qu'“addiction” »), « Quoi faire » → « Que faire » (series
canon), « maison de 1970 » → « maison des années 1970 », « portail » → « point
de contrôle » (aligns with the verdict post's vocabulary), « Repos créés » →
« Dépôts créés » (SVG labels + aria-label + guardrail #1; "repos" reads as
rest/nap in French), « faire-part » → « invitations », « neuroscience
primaire » → « recherche primaire en neurosciences » (false friend),
« ICD-11 » → « CIM-11 » in the FR body, « plus par Google » → « et non plus
par Google » (ambiguity), calques fixed (« le système qui fonctionnait »,
« appartient à un clinicien », « perd la soirée », « Où ça laisse la série »,
« le bord du sommeil », « compteur à l'œil nu »), anglicisms trimmed
(check-list, side-projects) or abbr-tagged (agentic coding, paywall,
endpoints). Endorsed: register (constant vouvoiement), French typography,
the native-FR best lines — untouched.

### Marc — consistency & house style

All arithmetic verified correct (230/min, 2-week cadence, 2 220 €, bar-chart
proportionality, Griffiths 3.5/6). Fixed on his findings: FR TL;DR « aucune
étude scientifique » contradicted the body's own MIT/OpenAI citation → « évaluée
par les pairs » ; « 0 € » on a dollar dataset → « 0 $ » ; EN "knowable to the
euro" → "to the dollar" ; tolerance "check, twice" loophole (readers could
compute 4.5/6) → "two proofs for one box" ; three EN sentence splits per the
one-idea-per-sentence rule (EnrichLead, Ramus, subscription paragraphs) ; abbr
added for RCT, DSM-5 (both languages), TEP. ADHD/HPI ruling: fully respected,
no changes needed.

## Round 2 — convergence

No conflicts between personas. The only judgment call: the unverifiable Pew
56/16 stat — replaced with verified figures rather than deleted, keeping the
"not everyone has switched" beat intact. FR TL;DR yearly cost updated implicitly
via body (2 220 €). EN section title "Where this leaves the series" kept (native
EN); FR calque replaced (« Ce que ça change pour la série »).

## Decisions

- Never keep a stat the primary source doesn't contain, even when directionally
  convenient — swapped, not softened.
- « dépôt » in written FR labels; « repo » tolerated in oral-register singular
  (« Pas de nouveau repo », TL;DR quotes).
- Clinical vocabulary aligned (« atteinte fonctionnelle », CIM-11).

## Follow-ups for Wifsimster (the human)

1. **"Fourteen hours of prompting" claim** — as written it reads as physically
   implausible alongside the day job. If it means wall-clock with agents running
   unattended, consider « quatorze heures d'agents en route » / "fourteen hours
   with agents running". Left unchanged: it is your testimony.
2. **GitHub dates spot-check** — the "one repo between Feb 2022 and May 2025"
   headline silently requires the two other 2022 repos to be pre-February and
   the 2025 repo pre-June. One minute on the account settles it.
3. **Section title « est-ce que ça finit ? »** — ambiguous (s'arrêter vs
   aboutir). « Est-ce que ça aboutit ? » is more precise; the current one is
   more brutal. Your call, left as is.
4. **Non-breaking spaces** — no French NBSPs anywhere on the site (all 35
   posts); « ? ; : % » can wrap to line starts. Site-wide fix (build step or
   CSS), not a per-post edit. Worth a one-time decision.
