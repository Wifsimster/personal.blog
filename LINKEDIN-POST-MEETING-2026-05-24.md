# LinkedIn Post — Subagents Personas Meeting

**Date:** 2026-05-24
**Branch:** `claude/linkedin-agentic-ai-skills-jXQHf`
**Subject:** Critique and rework of the LinkedIn post on agentic AI hiring criteria.
**Format:** Four specialist personas reviewed both versions of the post in parallel.
**Outcome:** v2 of `linkedin-agentic-ai-skills-short.md` addressing convergent critiques.

---

## Attendees

| Persona | Role | Lens |
|---|---|---|
| **Léa** | Content & editorial strategist (FR/EN) | Hook, structure, rhythm, voice |
| **Marion** | French tech recruiter (12y, CAC40 + scale-ups) | Strawmen, market reality, defense of the recruiter side |
| **Théo** | Skeptical senior engineer (15y) | Intellectual honesty, weak arguments, falsifiability |
| **Camille** | CTO / VP Eng (signs JDs, scale-ups 30-80) | Hiring leader's view, dunks to preempt |

---

## Round 1 — Persona contributions

### Léa — Editorial strategist

- **Hook is buried.** The strongest line in the post (the boulier metaphor) sits at line 15. LinkedIn cuts at ~200 chars; above-the-fold is currently a recruiter quote — people scroll past those. Lead with the metaphor.
- **Three restatements of the same idea.** "Ça n'a jamais été la bonne chose" → "On ne sait pas ce qu'on cherche" → "Aucune n'apparaît dans une fiche de poste" → "Arrêtez de chercher des experts React". Pick one. Recommends cutting lines 19-23.
- **Eight bullets is two too many.** Jugement / Adaptabilité / Curiosité / Capacité d'apprentissage = four bullets saying "stay sharp." Communication is already inside Expertise métier + Context engineering. Cut to 5, lead with Context engineering.
- **Closing lands flat.** "Le futur du recrutement tech, c'est ça. Et c'est maintenant." reads as ChatGPT-cadence and clones the SDLC article. Stop on "capables d'apprendre n'importe quoi en deux semaines."
- **Voice off-notes.** "Les soft skills n'ont jamais été aussi importantes. Jamais." — double "Jamais" is influencer cadence, not Damien's voice. "Il est temps de réagir" — recycled from SDLC article.
- **Recommended opening:** *"Recruter un dev sur sa maîtrise de React en 2026, c'est recruter un comptable sur sa vitesse au boulier. Hier soir, 18:28, j'ai reçu exactement ce message."* (198 chars)

### Marion — French tech recruiter

- **Strawman #1.** "Vous ne savez pas ce que fait votre client" is half-true at best. Three real reasons a JD lists frameworks: (1) **ATS keyword filtering** — Workday/Taleo won't surface CVs without "React, Node, TypeScript" in plain text ; (2) **the hiring manager (a Tech Lead like Damien himself) wrote the brief**, not the recruiter; (3) **legal anonymization** — frameworks are objectifiable filter criteria, "curieux et lucide" is not.
- **Cheap shot on salary.** 65k for a Lead at Paris in 2026 is median-low, not generous, but the recruiter doesn't fix the price — the comité de rému + DAF + SYNTEC grid do. Attacking the messenger.
- **Soft-skills cliché trap.** "Curiosité, adaptabilité, communication, apprentissage" is the bullet-point bingo of every JD since 2015 and every founder pitch since Richard Branson 2011. Damien does not differentiate. Only "Context engineering" is genuinely 2026 — lean on it, jettison the rest.
- **Where experience still matters.** Damien would not let a junior + Claude ship to his healthcare prod. Framework intuition is the hallucination detector. His own argument eats itself: he wants Jugement, but Jugement is acquired through the stack-years he dismisses.
- **Publication risk.** Will circulate in WhatsApp recruiter groups with a screenshot and "encore un TLM qui nous explique notre métier." Net effect: gains engagement, costs ~30% of passive inbound for 6 months.
- **The 20% to reframe:** drop "vous ne savez pas ce que fait votre client" → "ce brief reflète une commande cassée en amont (ATS, grille, urgence)" ; cut bullets to 3 (context eng, jugement, expertise métier) ; add a humility line on experience ; attack the system, not Maïssane.

### Théo — Skeptical engineer

- **"Le code est une commodité. Comme l'électricité."** Sloppy. Electricity is fungible (1 kWh = 1 kWh) ; code isn't (two correct implementations can differ 100x in latency, attack surface, ops cost). The metaphor holds for CRUD/glue code (~60-70% of agency output). It collapses on: matching engines, real-time systems, crypto, ML kernels, embedded, fault-tolerant distributed systems, any legacy where invariants live nowhere written. Better metaphor: *"comme la traduction littéraire après DeepL"* — abundant, sufficient for 80%, dangerous on the 20% that count.
- **"Pas en 2015" is an overclaim.** In 2015 putting a React-naive dev on a 200k-line SPA cost 6 months of productivity. Saying it never mattered rewrites history for the punchline. Defensible: "shouldn't have been *the central criterion*." Current line: indefensible.
- **"Un dev compétent apprend React en quelques semaines."** True for syntax. False for SSR/streaming boundaries, hydration mismatches, perf on low-end mobile, a11y past `aria-label`, state at scale, design-system interop. Those take 18-24 months in real environments.
- **The biggest argumentative gap.** Where do agents still fail in May 2026? Damien never names it. Modes of failure: silent regression on multi-file refactors when a cross-module invariant isn't in context ; debugging memory leaks under load ; auditing transitive CVE ; perf regressions from Postgres plan changes. The agent writes code ; it doesn't *own* the system.
- **"Aucune n'apparaît dans une fiche de poste française"** is falsifiable in 3 minutes on Welcome to the Jungle — and probably false. What Damien means is "they appear in decoration, never as filter criteria." Say that.
- **Internal contradiction.** He sanctifies "Expertise métier" (accumulated tacit knowledge of unwritten rules) and dismisses "4-5 years of React" — but 4-5 years of React *is* tacit knowledge of the framework's traps. The line between "tool" and "domain" is arbitrary and never argued.
- **Must not ship as-is:** "Pas en 2015." Cut it ; the rest holds better.

### Camille — CTO / VP Eng

- **JDs are bureaucratic compromises, not theses.** Four constraints any CTO juggles: (1) ATS keyword pollution, (2) CFO budget-grade standardization, (3) legal anti-discrimination filter objectivity, (4) hiring-manager pattern-match anchor. Damien is attacking the storefront thinking it's the store.
- **Salary reality.** 65k for a Lead 4-5y at Paris mid-2026 is median-high, not scandalous. French salary compression (~30k employer cost for ~800€ net/month between 55-75k) means the "pay more for soft skills" argument hits a structural wall.
- **What real hiring signals look like** (not in Damien's list): a thing shipped end-to-end and narrated through to post-mortem ; an incident history and the RCA the candidate wrote ; mentoring traceability ; a product disagreement won ; a serious OSS PR or repo. Damien lists *outcomes* (jugement, curiosité) ; CTOs measure *evidence*.
- **Junior+AI vs senior.** Not equivalent in May 2026, and especially not in Damien's own domain (healthcare — HDS, traçabilité, criminal liability of the directeur). The agent hallucinates regulatory edge cases the senior has hit three times. Damien writes from healthcare and forgets it two paragraphs in.
- **Dunks to preempt:** (1) "Easy when you're already senior — how does a junior get hired on your grid?" ; (2) "You're describing exactly the JD you'd publish if you hired tomorrow — be honest" ; (3) "Code as commodity, tell that to the team debugging a memory leak on a Sunday night."
- **The paragraph to add:** *"Je ne demande pas de retirer React de la JD. Je demande d'ajouter une 9ème ligne : 'Racontez-nous un système que vous avez possédé de bout en bout, l'incident qui vous a appris quelque chose, et la fois où vous avez dit non au produit.' Trois questions. Zéro framework. Tout le signal."* Turns a complaint into an operational proposition. Speaks the language of the people who sign JDs.

---

## Round 2 — Convergence

**Load-bearing fixes (all four agree, or 3+ overlap):**

1. **Cut "Pas en 2015"** (Théo, Léa). Indefensible overclaim. Keep "Pas en 2020."
2. **Reduce bullet list from 8 to 3** (Marion, Léa, Théo). Lead with Context engineering. Keep Expertise métier and Jugement. Cut Adaptabilité / Curiosité / Communication / Capacité d'apprentissage as cliché bingo since 2015.
3. **Reframe the target: system, not recruiter** (Marion, Camille). Replace "Vous ne savez pas ce que fait votre client" with explicit naming of ATS / SYNTEC / budget grid / hiring-manager-wrote-this constraints.
4. **Replace the electricity metaphor** (Théo). Use traducteur/dictionnaire/DeepL — fits the "abundant but dangerous on 20%" thesis.
5. **Name where agents still fail in May 2026** (Théo, Camille). Incidents, cross-cutting refactors, regulated invariants, debugging under load. Plug the biggest argumentative hole.
6. **Add humility line** (Marion, Camille). "Je ne dis pas qu'un junior remplace un senior. Je dis que ce qui fait le senior, ce n'est plus la stack — c'est le jugement *sur* la stack."
7. **Replace "Aucune n'apparaît"** with "apparaissent en décoration, jamais en critère de filtrage réel" (Théo).
8. **Replace the flat closing** (Léa). Use Camille's 9th-line proposition: three questions, zero framework, all signal. Turns complaint into proposal.
9. **Drop "Les soft skills n'ont jamais été aussi importantes"** (Marion, Léa). Branson 2011 cliché.
10. **Open with the boulier metaphor** (Léa). Move above the recruiter quote for above-the-fold impact.

**Not adopted:**
- Léa's "Sinon dans 18 mois vous recruterez les survivants" — too apocalyptic, near-clone of SDLC article's "extinction gap."
- Camille's full real-hiring-signals list (mentoring traceability, OSS, etc.) — substantive but breaks the LinkedIn budget. Save for a follow-up blog article.

**Open question for Damien:**
- Keep the P.S. to Maïssane? Marion says the body still punches her despite the P.S. — but Léa likes it as humanizing. Author's call.
