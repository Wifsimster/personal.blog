# Being a Nerd in the AI Era — Persona Meeting, 2026-09-30

Author's raw thesis (paraphrased): start by defining nerd, geek, no-life and the
neighbouring words so everyone knows what is being discussed. Then the AI
revolution and the liberation of creativity it brings to people who need to
create constantly, test things, build POCs, experiment.

Working title: « Être un nerd à l'ère de l'IA ». Branch: `article/nerd-ai-era`.
Note: Round 1 outputs were truncated by retention; this file keeps the
findings that survived. Anything not listed was not recovered.

## Round 1 — four personas in parallel

**Researcher A, lexicon and culture.** Verified: nerd first documented in Dr.
Seuss, *If I Ran the Zoo* (1950), slang sense 1951; the "knurd" story is oral
tradition, etymonline says "probably" from "nert"/"nut". Geek comes from
"geck" (fool), 1510s, sideshow freak by 1911, insult through the 1980s,
neutral college slang from about 1989 (etymonline). Hacker: Jargon File,
"enjoys the intellectual challenge of creatively overcoming limitations";
"cracker" is the term for the malicious sense. Maker: extension of DIY culture
(Wikipedia, Maker culture). French: Wiktionnaire nerd = « Socialement handicapé
et passionné par des sujets liés à la science »; fr.wikipedia Geek: « connotation
méliorative et communautaire », geek keeps community ties, no-life does not.
**Not verified:** any French dictionary entry for geek or no-life (Larousse,
CNRTL failed); Kendall, *Nerd Nation*; Paul Graham first-hand. Do not cite them.
**Endorse:** the insult-to-identity arc (sideshow freak, 1980s insult, 1989
neutral) as the spine of the definitions section.

**Researcher B, AI and creativity evidence.**
| Claim | Source | Status |
|---|---|---|
| Experienced devs +19% slower with AI on their own repos (16 devs, 246 tasks); they believed -20% | METR, arxiv 2507.09089 | verified, brownfield only |
| METR 2026 follow-up: -18% / -4%, described as "unreliable signal" (selection effects) | metr.org/blog/2026-02-24-uplift-update | verified |
| AI ideas: novelty +8.1%, usefulness +9.0%, larger for less creative writers; stories more similar to each other | Doshi & Hauser, Sci. Adv. 2024 (PMC11244532) | verified, 293 writers, no software |
| Jagged frontier: +12.2% tasks, +25.1% speed inside; 19% less correct outside | Dell'Acqua et al., SSRN 4573321 (Crossref abstract) | verified via abstract only |
| Time -40%, quality +18% | Noy & Zhang, Science 2023 (abstract) | verified via abstract only |
| Clones 8.3% to 12.3%, refactoring 25% to <10% (2021-2024) | GitClear 2025 | verified, vendor data |
| DORA 2025: 90% adoption, "mirror and multiplier" | Google blog 2025-09-23 | secondary only |
| Share of AI-built prototypes that never ship; measured prototype-cost collapse | none found | **unverified, do not claim** |

**Skeptical senior engineer.** Objections, ranked:
1. The thesis is already refuted by the author's own post: `AgenticAddiction.vue:40`
   (friction "selected" ideas) and `:175` (about 10 of 14 repos alive at 90%).
2. Creating is not shipping; the bottleneck moves to validation, distribution, maintenance.
3. Friction taught craft; a person who never hit the wall cannot review the agent's output.
4. The joy migrates from making to supervising (`SdlcIsDead.vue:108-110` sells the maker's loop).
5. "No life" as a badge glorifies the overwork the addiction post diagnoses.
6. Excludes people without spare evenings or the $200/month (`AgenticAddiction.vue:179`).
7. Regulated healthcare: a POC has no traceability, validation or risk file; the danger is a 90% prototype reaching a clinical workflow.
**Endorse:** tie the definition to behaviour, never to a diagnosis (CLAUDE.md §6);
the Sunday-to-Monday transfer (`AgenticAddiction.vue:181`); one-user own-use products.
**Push back:** drop "liberates"; use "removes the cost of trying; the cost of
finishing is unchanged"; present it as a field report, not a generalisation about nerds.

**Editorial strategist.** Recommended angle A: *the cost of trying hit zero, the
cost of finishing did not*. Rejected B (the nerd outlives the difficulty, thinner
evidence) and C (golden age of tinkerers, hype). Outline, about 2,100 words per
language: TL;DR and opening; nerd/geek/no-life (400); the author's version
stated plainly (200); what used to filter ideas (300); what AI freed (450, diagram 1);
where the bottleneck moved (350, diagram 2, one paragraph linking to the addiction
post); at work, a cheap POC is not a validated feature (250); what remains for
humans (150); Monday-morning `<ol>` of 3 items (48 h rule for a POC, an explicit
graveyard, one finished project per month); series block; sources.
Title candidates FR: « Essayer ne coûte plus rien. Choisir, si. » / « Le nerd
n'attend plus la permission de tester ». EN: « Free to Try, Still Paying to
Finish » / « Nerds Didn't Change. The Price of a Prototype Did ».
Diagrams need real data (first-commit dates per year; an idea-to-still-running
funnel over one quarter). No data, no diagram; never estimate.

## Convergence (Round 2, preliminary)

- All four agree the article cannot be a pure celebration; the addiction post
  already owns the dark side, so this one must not retell it.
- Strong convergence on the reframe: AI removes the cost of trying, not the cost of finishing.
- Disagreement: the skeptic asks whether this is a sequel or a correction of the
  addiction post; the strategist assumes sequel. Only the author can resolve it.
- Evidence gap: nothing measures the prototype graveyard, so the article's only
  evidence for it is the author's own funnel. It must be framed as a field report.

## Decisions needed from the author (escalated before writing)

1. Sequel or correction of `agentic-ai-addiction`? (Recommended: sequel, angle A.)
2. "No life": a word to reclaim, or one to define only to reject? (Recommended: dissect, separate passion from compulsion.)
3. Real data for the two diagrams (first-commit dates per year; a one-quarter funnel), or drop the diagrams?
4. One real POC from work that died or was rejected in a regulated context, for the healthcare section; otherwise that section stays short and opinion-flagged.
5. Title and "liberates" wording: keep the thesis word or accept the reframe?

## Decisions (author, 2026-09-30 19:56 UTC)

1. **Independent post, not a sequel.** It must stand alone; at most one short link to `agentic-ai-addiction`, no retelling of it.
2. **"No life": follow the recommendation** — dissect the word, separate passion from compulsion, do not reclaim it as a badge.
3. **Data: pull it from the author's repositories, previous articles and home-automation work** (no invented numbers; diagrams only on real data).
4. Healthcare POC: not answered. Default: short section, explicitly opinion-flagged, no invented case.
5. Title/"liberates": not answered. Default: follow the reframe (cost of trying removed, cost of finishing unchanged), field-report framing.

## Follow-ups for the human

Approve the draft, the diagrams and the title. Post ships with `draft: true`; removing it is publishing.
