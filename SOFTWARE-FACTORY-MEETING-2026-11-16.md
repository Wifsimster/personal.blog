# Software factory article — meeting, 2026-11-16

Post: `src/posts/SoftwareFactory.ts`, slug `software-factory`, shipped as `draft: true`.

Material: the author's internal year review given on 12 November after BDX I/O (29-30 October), its speaker notes, and the Solstice* repository rules on review proof. All internal, anonymised.

## Round 1 — four personas

**Adrien, delivery research.** The 2026 sense of "software factory" traces to the StrongDM account (relayed by Simon Willison, 7 February) and to vendor write-ups on improvement loops. No DORA-grade measurement says review is the bottleneck. Agent-reviews-agent reliability is unproven in production. Page fetches were blocked in the session: the three external links were confirmed at search level only.

**Claire, engineering leadership.** The August post already said "agents review agents". What is new is governance: since 14 October the main branch requires no human approval, a required check wants a proof tied to a commit and a green run. Publish the 75 % with its 9 % and 25 % companions or not at all. The cost shift is a side story. "Factory or ten craftsmen" is the turn of the article: the constraint is upstream, in how work is sliced.

**Marc-Antoine, skeptical staff engineer.** Checked the claims against the repository. Binding to commit and green run, risk tier from paths, manual promotion: verified. Reviewer independence, refusal of self-proof, the security pass: declarative. The four-round limit exists in code and has never fired. Test counts are still typed, so the rule would catch half of its founding incident. No production environment exists yet.

**Élise, editorial.** Three angles: the deck's question, "three decisions left", "the factory has a bill". Recommended the first, with a "where August was wrong" passage. Three diagrams: the line with target stations dashed, the six steps against three decisions, the seat concentration. Use "licence" in French to avoid the pun with `skills-not-seats`.

## Escalation to the author

First round of rulings:

1. Animated factory visual from the deck: redraw it for the blog.
2. Angle: factory or ten craftsmen.
3. Internal figures: ratios only.
4. Product status: on-site tests in progress, no result figure available.

After reading the first draft, the author overruled the first three:

- **No section on AI consumption or usage.** Seat concentration, credits and model cost are out.
- **The subject is the software factory and the SDLC only**: where the word comes from, what it means today, what the team does with it.
- **Reuse the team's isometric visuals** instead of the redraw.

## Round 2 — convergence

- The history comes first. Bemer at General Electric in 1968, Hitachi in 1969, System Development Corporation in the mid-1970s, Microsoft in 2004, then the DevOps sense of "usine logicielle". Source: Cusumano's historical work. The thread: every factory standardised what surrounds the programmer, never the station where code is written.
- All four personas agreed the full line is a target and only code, tests and review run. The article says so before any figure.
- Claire and Marc-Antoine both refused "75 % without human review" as a trophy. Resolved: the three figures are listed together, followed by "a fact about our process, not about our code".
- Élise wanted an explicit retraction of an August line; Marc-Antoine found the August claim still partly holds. Resolved: one paragraph that states the change and leaves the verdict open.
- Dropped: "agents are better than you", tool recommendations, provider questions, model names, every usage and cost figure.

## Decisions

- Title: « Software factory : d'où vient le mot, et ce que nous en faisons » / "Software Factory: Where the Word Comes From, and What We Do With It".
- About 1,800 words per language.
- Visuals: the isometric factory scene from the talk, replayed as an animated WebP in French and in English, without the employer logo, slide number or progress bar, with a still for reduced motion. The isometric two-loops symbol (quality, cost) follows the same treatment, with labels added. Both are light images in both themes. Two flat diagrams complete it: the 1968-2026 timeline and the six steps against three human decisions.
- The class-driven flat animation of the first draft is removed from `src/styles/main.css`.

## Follow-ups for the author

- Read both languages on `/drafts`, then delete `draft: true` to publish.
- Confirm the external links; page fetches were blocked in the session. The Cusumano dates were confirmed by search.
- On a phone the scene labels are small; tapping the image opens it in the gallery.
- Decide whether to add this post to the series blocks of earlier posts once it is published.
- Add an escaped-defect figure when the on-site tests produce one.
