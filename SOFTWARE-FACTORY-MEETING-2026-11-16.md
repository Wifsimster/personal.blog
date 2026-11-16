# Software factory article — meeting, 2026-11-16

Post: `src/posts/SoftwareFactoryOrTenCraftsmen.ts`, slug `software-factory-or-ten-craftsmen`, shipped as `draft: true`.

Material: the author's internal year review given on 12 November after BDX I/O (29-30 October), its speaker notes, and the Solstice* repository rules on review proof. All internal, anonymised.

## Round 1 — four personas

**Adrien, delivery research.** The 2026 sense of "software factory" traces to the StrongDM account (relayed by Simon Willison, 7 February) and to vendor write-ups on improvement loops. No DORA-grade measurement says review is the bottleneck. Agent-reviews-agent reliability is unproven in production. Page fetches were blocked in the session: the three external links were confirmed at search level only.

**Claire, engineering leadership.** The August post already said "agents review agents". What is new is governance: since 14 October the main branch requires no human approval, a required check wants a proof tied to a commit and a green run. Publish the 75 % with its 9 % and 25 % companions or not at all. The cost shift is a side story. "Factory or ten craftsmen" is the turn of the article: the constraint is upstream, in how work is sliced.

**Marc-Antoine, skeptical staff engineer.** Checked the claims against the repository. Binding to commit and green run, risk tier from paths, manual promotion: verified. Reviewer independence, refusal of self-proof, the security pass: declarative. The four-round limit exists in code and has never fired. Test counts are still typed, so the rule would catch half of its founding incident. No production environment exists yet.

**Élise, editorial.** Three angles: the deck's question, "three decisions left", "the factory has a bill". Recommended the first, with a "where August was wrong" passage. Three diagrams: the line with target stations dashed, the six steps against three decisions, the seat concentration. Use "licence" in French to avoid the pun with `skills-not-seats`.

## Escalation to the author

1. Animated factory visual from the deck: **redraw it for the blog** (not reuse the isometric scene).
2. Angle: **factory or ten craftsmen**.
3. Internal figures: **ratios only**. No credit volumes, no group policy, no third-party company named from the conference.
4. Product status: **on-site tests in progress**. No result figure available.

## Round 2 — convergence

- All four agreed the full line is a target and only code, tests and review run. The animation carries that with solid and dashed stations.
- Claire and Marc-Antoine both refused "75 % without human review" as a trophy. Resolved: the three figures are listed together, followed by "a fact about our process, not about our code".
- Élise wanted an explicit retraction of an August line; Marc-Antoine found the August claim still partly holds (a non-author is still required on the outside-facing perimeter, it may now be an agent). Resolved: one paragraph that states the change and leaves the verdict open.
- Dropped: "agents are better than you" (a position, unmeasured, reads as a headcount argument), tool recommendations, provider questions, model names.
- The slide's animated isometric scene is not reused. The redraw is a flat 640-unit SVG with a 320-unit phone variant, animated by classes in `src/styles/main.css`, static under reduced motion.

## Decisions

- Title: « Une usine logicielle, ou dix artisans très équipés ? » / "A Software Factory, or Ten Very Well-Equipped Craftsmen?"
- About 1,700 words per language, three diagrams.
- No sanitizer change: the animation uses only allowed tags and the `class` attribute.

## Follow-ups for the author

- Read both languages on `/drafts`, then delete `draft: true` to publish.
- Confirm the three external links and the Warp attribution of the two loops.
- Decide whether to add this post to the series blocks of earlier posts once it is published.
- Add an escaped-defect figure when the on-site tests produce one.
