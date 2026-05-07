<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'ai-team-reflex',
  date: '2026-05-07',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'AI Became a Team Reflex — From Meetings to Production',
  description: 'Six months into 2026, my team\'s workflow has quietly rewritten itself — and the job has never been this enjoyable. A panel of persona sub-agents reviews every PR and every issue. Meetings record themselves and turn into assigned GitHub/GitLab issues. The boring parts are gone. What\'s left is business, domain, product. The work we always wanted.',
  html: `<p><strong>TL;DR:</strong> Since January 2026 and the latest wave of Anthropic models, my team's workflow has quietly rewritten itself — and the job has never been this enjoyable. A panel of persona sub-agents now debates every merge request and every incoming issue, flagging blockers we'd never have spotted on our own. Meetings record themselves — phone recorder or Teams transcript — and a skill turns the audio into a structured report, then opens GitHub or GitLab issues assigned to the right people. The technical chores, the meeting minutes, the follow-up emails — gone. What we do all day now is the thing we came here for: business, domain, product. The job we always wanted is finally the job we have.</p>
<hr>
<p>In March I wrote that <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">the SDLC is dead</a>. A day later I argued that <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coding was never the job</a>. Six months into 2026, I want to write the third panel of that triptych — not as a manifesto this time, just a report from the floor. What does an AI-native team actually look like on a Tuesday? Mine. Here is what it does.</p>
<p>Nobody decided this. There was no kick-off, no PowerPoint, no "AI strategy". The latest Anthropic models landed in January, we tinkered, something stuck, then something else stuck, and four months later the workflow looks nothing like it did in December. <strong>AI didn't replace anyone on my team. It quietly absorbed the parts of the job we hated.</strong></p>
<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A PR, an issue or a meeting transcript triggers a skill that spawns a panel of persona sub-agents — security, domain, performance, junior — who debate. The output is a structured report and issues automatically opened via the GitHub or GitLab CLI." class="diagram-svg">
<g fill="none" stroke="currentColor" stroke-width="1.5">
<rect x="8" y="95" width="110" height="70" rx="6"></rect>
<line x1="118" y1="130" x2="144" y2="130"></line>
<rect x="150" y="108" width="80" height="44" rx="6"></rect>
<line x1="230" y1="130" x2="256" y2="130"></line>
<rect x="262" y="40" width="270" height="180" rx="8" stroke-dasharray="4,3"></rect>
<rect x="275" y="70" width="120" height="40" rx="4"></rect>
<rect x="405" y="70" width="120" height="40" rx="4"></rect>
<rect x="275" y="160" width="120" height="40" rx="4"></rect>
<rect x="405" y="160" width="120" height="40" rx="4"></rect>
<line x1="395" y1="90" x2="401" y2="90"></line>
<line x1="465" y1="110" x2="465" y2="156"></line>
<line x1="405" y1="180" x2="399" y2="180"></line>
<line x1="335" y1="160" x2="335" y2="114"></line>
<line x1="532" y1="130" x2="558" y2="130"></line>
<rect x="564" y="85" width="148" height="90" rx="6"></rect>
</g>
<g fill="currentColor" stroke="none">
<polygon points="144,125 152,130 144,135"></polygon>
<polygon points="256,125 264,130 256,135"></polygon>
<polygon points="558,125 566,130 558,135"></polygon>
<polygon points="401,86 405,90 401,94"></polygon>
<polygon points="461,156 465,160 469,156"></polygon>
<polygon points="399,176 395,180 399,184"></polygon>
<polygon points="331,114 335,110 339,114"></polygon>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle">
<text x="63" y="120">PR</text>
<text x="63" y="138">Issue</text>
<text x="63" y="156">Meeting</text>
<text x="190" y="134">Skill</text>
<text x="397" y="58" font-size="11" font-style="italic">Persona panel — sub-agents debate</text>
<text x="335" y="95">Security</text>
<text x="465" y="95">Domain</text>
<text x="335" y="185">Perf</text>
<text x="465" y="185">Junior</text>
<text x="638" y="118">Structured report</text>
<text x="638" y="138">+ assigned issues</text>
<text x="638" y="158" font-size="11">via gh / glab CLI</text>
<text x="360" y="262" font-size="13" font-style="italic">One pipeline. PRs, issues, meetings — same panel.</text>
</g>
</svg>

<h2>The review panel nobody asked for</h2>
<p>Code review used to be the bottleneck. A PR sat for two days. Then a senior reviewed it, missed half of what mattered (it was Friday), approved it. Now it goes through what I call the <em>review panel</em>.</p>
<p>When a merge request is opened, a dedicated skill triggers. It pulls the diff, the linked ticket, the architectural context. Then it spawns a small council of sub-agents with personas — a security reviewer, a domain expert, a performance hawk, a junior playing devil's advocate — and lets them argue. They actually argue. The transcript is brutal, often more rigorous than what three senior engineers would produce in a room. By the time a human looks at the PR, the analysis is structured, the blockers are named, and half the time the developer has already addressed them in a follow-up commit.</p>
<blockquote><p>"The panel doesn't replace the review. It removes the noise before the review."</p></blockquote>
<p>The thing that surprised me most isn't the speed. It's the depth. <strong>The agents catch the things we don't catch — the edge case nobody thought of, the architectural smell hidden three layers down, the contract that quietly broke.</strong> Three senior engineers in a room would have said "looks good to me" and moved on. The panel doesn't have a Friday afternoon.</p>
<p>We use the same panel on incoming issues. Every issue that lands in our backlog goes through it before triage. The output is a structured analysis — what's actually being asked, what's missing, what blockers it implies, what it touches in the codebase. It's the kind of analysis a Tech Lead would do on a good day, except every day, on every issue, in two minutes. The triage meeting that used to take an hour now takes ten because everyone walks in with the panel's notes.</p>
<p>Quality went up. Nobody on the team had to be convinced. <strong>It just works, and once you've seen a panel of agents tear apart your PR, you don't go back.</strong></p>
<p>This adversarial-panel pattern isn't unique to code review. <a target="_blank" rel="noopener noreferrer" href="https://www.aihero.dev/skills-grill-me">Matt Pocock's grill-me skill</a> applies the same idea to raw thinking — an agent that interrogates your reasoning until the thin parts surface. I keep one running on the side for product trade-offs, architectural calls, and the half-formed ideas I'd otherwise walk into a meeting with. It hits, every time. Same medicine, different patient.</p>

<h2>The meeting that records itself</h2>
<p>Roughly two months ago, something else stuck. Meetings started recording themselves.</p>
<p>In person, on a phone — yes, a phone in the middle of the table, recording, transcribing locally. It became a default for some of us, the way bringing a notebook to a meeting used to be a default. For remote calls, the Teams transcript already exists. Either way, when the meeting ends, there's a transcript.</p>
<p>We pipe the transcript through a skill that generates a structured report. Topics covered, points of interest, blockers, decisions made, and — this is the part that earned the tool its place — <strong>action items assigned to each person</strong>. With names. The kind of summary one of us used to spend forty-five minutes writing the next morning, except now it's done before we leave the room and nobody forgets the action they were handed.</p>
<p>Then the magic part. The same pipeline can take those action items and turn them into issues — assigned to the right people, in the right project, via the GitHub or GitLab CLI. The meeting ends. The issues are open. The owners are notified. The Tech Lead didn't have to do anything except attend.</p>
<blockquote><p>"The 45-minute follow-up email I used to write at 11pm doesn't exist anymore. The work it described is already in the backlog before the meeting ends."</p></blockquote>
<p>The same pipeline keeps the roadmaps current. Dailies, weeklies — the agent reads the summary, updates the project roadmaps I maintain, moves what shipped, surfaces what slipped, flags new dependencies. The roadmap stops being a document I dreaded updating on Friday afternoon and becomes a live artifact that reflects what was just discussed. <strong>Everyone — team, PO, stakeholders — sees the same thing, in sync, without anyone having to merge five versions on Monday morning.</strong></p>
<p>I want to be honest about what's hard here. Not every transcript is clean — names get misheard, sarcasm gets indexed as a decision, sometimes the agent assigns an action to the wrong person. So we review before publishing. The skill produces a draft. The human approves. That's the only ceremony we kept, and it takes thirty seconds.</p>

<h2>The product memory we never had</h2>
<p>There's a side effect of the meeting pipeline I didn't see coming. Once every meeting becomes a structured report, those reports stop being ephemeral artifacts. They accumulate. They become a <em>history</em>.</p>
<p>A history of product decisions. Not the official decision frozen in a SharePoint — the actual evolution. Why we picked option B in March. What we ruled out. The constraint that surfaced in week 18 and flipped the answer. Who pushed for what, and what changed their mind.</p>
<p>For the first time in fourteen years of enterprise work, my team has a continuous, queryable record of <em>how</em> we got to the product we have. Not a snapshot. A trajectory.</p>
<p>Everyone can interrogate it. The PO. The PM. The testers. The developers. Even the security officer and the compliance team. They ask the agent a question — <em>"why are we still validating this field server-side when the spec moved last quarter?"</em> — and the agent reads the history, surfaces the meeting where the call was made, the trade-off that forced it, and the standard that justified it. <strong>Asynchronously.</strong> No human had to remember.</p>
<blockquote><p>"The codebase used to remember what the product was. Now it remembers why."</p></blockquote>
<p>The knowledge base writes itself. Decisions, debates, regulatory constraints, product standards — everything ends up encoded in the same place the code lives. Every persona on the panel reads from it. Every reviewer is, implicitly, also reviewing against it.</p>
<p><strong>Onboarding got dramatically better.</strong> A new joiner used to spend weeks chasing context — pinging seniors, mining old Confluence pages, sitting in shadow meetings. Now they ask the agent. The agent answers from the actual product history, with sources. The senior is freed from being a walking documentation server. The new joiner is productive in days, not months.</p>
<p>In a domain like ours — regulated, full of standards, full of "you can't do that because article 14.3 of the directive says…" — this is transformative. The agents are constantly challenging our choices against the regulations we wrote down and the product standards we committed to. Not as a one-shot audit. As a constant, low-noise hum of <em>"are you sure this still complies with X?"</em> in every PR review, every issue analysis, every architectural decision.</p>
<p><strong>It saves us from going down the wrong path. Daily.</strong> That alone is a quiet, deep happiness I didn't expect.</p>

<h2>The tests we always promised to write</h2>
<p>There's a third workflow that crept in. It might be the one I'm most happy about.</p>
<p>Automated non-regression tests. End-to-end coverage. Business-rule validation. The stuff every team's roadmap <em>contained</em> and no team's roadmap actually <em>delivered</em>. The tests we promised the security committee. The tests we promised the auditor. The tests we promised ourselves three roadmaps in a row, then quietly demoted to "phase 2" because the next feature couldn't wait.</p>
<p>For fourteen years, I've watched teams degrade their own deliverables this exact same way. Not from laziness — from arithmetic. A senior writes a feature in three days. The same senior would write the e2e coverage in another three. So the e2e coverage gets cut. Every time. The deliverable ships with a known quality gap nobody talks about in the steering committee.</p>
<p><strong>That math is broken now.</strong></p>
<p>The agents generate the e2e suite alongside the feature. Same loop, same context, same domain rules. Business non-regression scenarios — the ones that come straight out of the spec, the ones that live in the head of the PO, the ones a user reported in a ticket two years ago — get encoded as tests, automatically, when the feature is built. Not in phase 2. Not in Q3. <em>In the same merge request.</em></p>
<p>And the panel reviews it. The domain persona checks that the test actually represents the rule. The performance persona flags scenarios that will be slow. The junior persona asks "what about this edge case?" — and the senior persona answers in code.</p>
<blockquote><p>"We are finally producing the test coverage we owed our applications a decade ago. It feels like clearing a debt I had given up on."</p></blockquote>
<p>I want to be honest about how big a deal this is. <strong>The roadmap-driven quality gap is the single biggest reason most enterprise software is fragile.</strong> Everyone knows it. Nobody fixes it, because the fix never makes it through prioritization. Now the fix doesn't <em>need</em> to make it through prioritization — it ships with the feature, by default, because the agent doesn't get tired and doesn't have a deadline.</p>
<p>The applications I'm responsible for have more e2e coverage today than they had after a decade of human effort. I keep saying this out loud and I keep finding it absurd. <em>Crazy</em> is the right word.</p>

<h2>What changed inside the team</h2>
<p>It would be easy to read this and assume the team got smaller, faster, more individualistic. The opposite happened.</p>
<p><strong>Junior developers ramp up faster.</strong> They walk into PRs with the panel's analysis already in hand. They walk into meetings with the previous one's notes already structured. They no longer have to ask "what's important here?" — the agents have already framed the question. Their cognitive energy goes to the domain, not to navigating the process.</p>
<p><strong>Seniors stopped wasting time on review theater.</strong> Five years ago, doing a thorough PR review meant blocking out two hours, reading every line, missing things anyway. Now the panel does the first pass. The senior spends ten minutes on what actually requires judgment — architectural choices, business edge cases, the things the agent cannot decide. The time saved goes to mentoring, design, and shipping to production.</p>
<p><strong>Nobody is fighting it.</strong> This is what surprised me most. There was no resistance. The team didn't need a training plan or a change-management workshop. They tried the panel once, saw it catch a real issue, and the habit took. <strong>Six months in, asking someone on my team to "review without the panel" would feel like asking them to compile by hand.</strong></p>

<h2>The job we always wanted</h2>
<p>Here's the part nobody tells you about. <strong>It's actually fun.</strong></p>
<p>I haven't written meeting minutes in two months. I haven't formatted a follow-up email since March. I haven't spent a Saturday morning fighting with a CI YAML file or hunting down a flaky test. The technical chores I used to dread — they don't exist anymore. The agents handle them, better and faster than I ever did, and they don't complain.</p>
<p>What I do all day now is the work I actually wanted to do. Sit with the PO and stress-test a clinical workflow. Read a field report carefully until I understand what the clinical user actually meant, not just what the ticket said. Sketch a domain model on a whiteboard with two colleagues until it clicks. Read the latest interoperability regulation and figure out what it means for our roadmap. Argue with my Tech Lead peer about whether we're modeling the wrong concept.</p>
<p>In other words: <strong>business.</strong> The actual problem we are paid to solve.</p>
<blockquote><p>"My calendar is now full of conversations about the domain. It used to be full of conversations about the process. The shift is the entire job."</p></blockquote>
<p>The shift is not subtle. It's the thing every senior developer secretly always wanted: more domain, more product, more conversation with the people the software actually serves — and less time spent translating intent into syntax, fighting build tools, or formatting a meeting summary nobody will read.</p>
<p>The team feels it. The juniors feel it more than anyone. They came into the industry expecting to spend years stuck in the technical layer before they were allowed to think about the business. <strong>They're not stuck.</strong> They're already in the conversations that matter, with the panel handling the technical discipline they haven't built yet. Watching them make their first real domain trade-off in week three of an apprenticeship, instead of week eighty — that's the part I didn't expect to love this much.</p>
<p>I've been doing this job for fourteen years. I have never enjoyed it as much as I do now. <strong>The profession has changed under our feet, and the version we landed on is the one I always hoped existed.</strong></p>

<h2>What still belongs to humans</h2>
<p>I don't want to oversell this. Plenty of things are still ours.</p>
<p><strong>Deciding what to build.</strong> No agent has the political read of a project, the customer relationship, or the strategic context that says "we don't ship that even if we can." That's still a Tech Lead, a PO, a person who knows the room.</p>
<p><strong>Catching the panel when it's wrong.</strong> The agents argue well. They are also confidently wrong sometimes. Spotting it requires domain expertise — the same kind of judgment I wrote about in the previous article. The panel doesn't replace the engineer. It frees the engineer for the work that actually requires being one.</p>
<p><strong>Holding the architecture.</strong> The panel reviews against constraints we wrote. Someone has to write those constraints, keep them current, and make the call when the system needs to bend. That's still us. <strong>Garbage context in, garbage debate out.</strong></p>
<p><strong>Talking to the team.</strong> A meeting transcribed and turned into issues is not a one-on-one. The hard conversations, the morale check, the "are you actually OK" — those don't go through a transcript pipeline. They never will.</p>

<h2>What to do Monday morning</h2>
<p>If you want to take one thing from this and try it this week, here's the order I would suggest:</p>
<ol>
<li><strong>Start with the issue analysis panel.</strong> It's the easiest entry point. Take ten incoming issues, run them through a small council of persona sub-agents, compare the output to what your triage meeting produced. You'll be uncomfortable. Then convinced.</li>
<li><strong>Add the PR review panel.</strong> Same idea, on a single repo, on volunteer PRs first. Don't impose it. Wait for someone to say "wait, the panel caught this and we missed it." That's the moment it spreads.</li>
<li><strong>Record one meeting.</strong> Just one. Run the transcript through a summary skill. Compare it to whatever follow-up email you would have written. Decide whether you can still justify writing the email by hand.</li>
<li><strong>Wire issue creation last.</strong> Don't automate issue creation until your transcript-to-summary loop is trustworthy. Otherwise you spam your backlog. When it's trustworthy, the GitHub or GitLab CLI integration is fifteen minutes of work and saves hours every week.</li>
<li><strong>Keep the human approval step.</strong> Drafts, not auto-pushes. Trust comes from watching the agent be right, not from skipping the check.</li>
</ol>

<h2>Conclusion</h2>
<p>I keep waiting for the moment this stops feeling magical. It hasn't come yet.</p>
<p>We've absorbed agents into reviews, into triage, into meetings, into the backlog. None of it was planned. Each piece earned its place by being obviously better than what we did before. The team is bigger than it was a year ago — interns and apprentices joined the headcount — ships more, sleeps more, and complains less. <strong>The boring parts of the job are gone. What's left is the work I came into this industry to do — and I haven't enjoyed Mondays this much since I was a junior. We're going to make the most of it.</strong></p>
<p>The profession changed. The change is good. Less syntax, less ceremony, less reporting — more domain, more product, more conversations with the people we build for. That trade is the one I would have signed for ten years ago if anyone had offered it.</p>
<p>If you read the previous two articles and thought I was being theoretical — I wasn't. This is what it looks like in practice, inside a French enterprise, in May 2026. Six months ago none of this existed. Six months from now, I have no idea what we'll have absorbed next. That's the only honest forecast I have.</p>
<p>The tools are here. The reflex is the only thing left to install.</p>
<p>What's the most boring meeting on your calendar this week? Record it. See what comes out.</p>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — why the process was always waste. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — what the engineer becomes when the syntax layer disappears.</p>`
}

const frenchContent: PostContent = {
  title: 'L\'IA est devenue un réflexe d\'équipe — des réunions à la prod',
  description: 'Six mois après le début 2026, le workflow de mon équipe s\'est réécrit tout seul — et le métier n\'a jamais été aussi agréable. Un panel de sous-agents avec personas review chaque PR et chaque issue. Les réunions s\'enregistrent et se transforment en issues GitHub/GitLab assignées. Les corvées ont disparu. Ce qui reste : du métier, du produit, du business. Le travail qu\'on a toujours voulu faire.',
  html: `<p><strong>TL;DR :</strong> Depuis janvier 2026 et la dernière vague de modèles Anthropic, le workflow de mon équipe s'est réécrit tout seul — et le métier n'a jamais été aussi agréable. Un panel de sous-agents avec personas débat désormais de chaque merge request et de chaque issue qui arrive, et identifie des blocages auxquels on n'aurait jamais pensé, même à plusieurs. Les réunions s'enregistrent toutes seules — magnétophone du téléphone ou transcript Teams — et un skill transforme l'audio en compte rendu structuré, puis ouvre des issues GitHub ou GitLab assignées aux bonnes personnes. Les corvées techniques, les comptes rendus, les mails de relance — disparus. Ce qu'on fait toute la journée maintenant, c'est ce pour quoi on est venu : du métier, du produit, du business. Le travail qu'on a toujours voulu faire est enfin celui qu'on fait.</p>
<hr>
<p>En mars j'ai écrit que <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">le SDLC est mort</a>. Le lendemain, j'ai défendu l'idée que <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coder n'a jamais été le métier</a>. Six mois après le début 2026, je veux écrire le troisième panneau de ce triptyque — pas comme un manifeste cette fois, juste un retour de terrain. À quoi ressemble vraiment une équipe IA-native un mardi ? La mienne. Voici ce qu'elle fait.</p>
<p>Personne n'a décidé tout ça. Pas de kick-off, pas de PowerPoint, pas de "stratégie IA". Les derniers modèles Anthropic sont arrivés en janvier, on a bricolé, un truc a tenu, puis un autre a tenu, et quatre mois plus tard le workflow ne ressemble plus du tout à celui de décembre. <strong>L'IA n'a remplacé personne dans mon équipe. Elle a juste absorbé silencieusement les parties du métier qu'on détestait.</strong></p>
<svg viewBox="0 0 720 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Une PR, une issue ou un transcript de réunion déclenche un skill qui convoque un panel de sous-agents avec personas — sécurité, métier, performance, junior — qui débattent. La sortie est un compte rendu structuré et des issues ouvertes automatiquement via la CLI GitHub ou GitLab." class="diagram-svg">
<g fill="none" stroke="currentColor" stroke-width="1.5">
<rect x="8" y="95" width="110" height="70" rx="6"></rect>
<line x1="118" y1="130" x2="144" y2="130"></line>
<rect x="150" y="108" width="80" height="44" rx="6"></rect>
<line x1="230" y1="130" x2="256" y2="130"></line>
<rect x="262" y="40" width="270" height="180" rx="8" stroke-dasharray="4,3"></rect>
<rect x="275" y="70" width="120" height="40" rx="4"></rect>
<rect x="405" y="70" width="120" height="40" rx="4"></rect>
<rect x="275" y="160" width="120" height="40" rx="4"></rect>
<rect x="405" y="160" width="120" height="40" rx="4"></rect>
<line x1="395" y1="90" x2="401" y2="90"></line>
<line x1="465" y1="110" x2="465" y2="156"></line>
<line x1="405" y1="180" x2="399" y2="180"></line>
<line x1="335" y1="160" x2="335" y2="114"></line>
<line x1="532" y1="130" x2="558" y2="130"></line>
<rect x="564" y="85" width="148" height="90" rx="6"></rect>
</g>
<g fill="currentColor" stroke="none">
<polygon points="144,125 152,130 144,135"></polygon>
<polygon points="256,125 264,130 256,135"></polygon>
<polygon points="558,125 566,130 558,135"></polygon>
<polygon points="401,86 405,90 401,94"></polygon>
<polygon points="461,156 465,160 469,156"></polygon>
<polygon points="399,176 395,180 399,184"></polygon>
<polygon points="331,114 335,110 339,114"></polygon>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle">
<text x="63" y="120">PR</text>
<text x="63" y="138">Issue</text>
<text x="63" y="156">Réunion</text>
<text x="190" y="134">Skill</text>
<text x="397" y="58" font-size="11" font-style="italic">Panel de personas — les sous-agents débattent</text>
<text x="335" y="95">Sécurité</text>
<text x="465" y="95">Métier</text>
<text x="335" y="185">Perf</text>
<text x="465" y="185">Junior</text>
<text x="638" y="118">Compte rendu</text>
<text x="638" y="138">+ issues assignées</text>
<text x="638" y="158" font-size="11">via gh / glab CLI</text>
<text x="360" y="262" font-size="13" font-style="italic">Une seule chaîne. PR, issues, réunions — même panel.</text>
</g>
</svg>

<h2>Le panel de review que personne n'a demandé</h2>
<p>La revue de code, c'était le goulot d'étranglement. Une PR attendait deux jours. Puis un senior la relisait, ratait la moitié de ce qui comptait (c'était vendredi), validait. Maintenant elle passe par ce que j'appelle le <em>panel de review</em>.</p>
<p>Quand une merge request est ouverte, un skill dédié se déclenche. Il récupère le diff, le ticket lié, le contexte architectural. Puis il convoque un petit conseil de sous-agents avec personas — un reviewer sécurité, un expert métier, un fanatique des perfs, un junior qui joue l'avocat du diable — et il les laisse débattre. Ils débattent vraiment. Le transcript est brutal, souvent plus rigoureux que ce que trois ingénieurs seniors produiraient dans une pièce. Au moment où un humain regarde la PR, l'analyse est structurée, les blocages sont nommés, et la moitié du temps le développeur a déjà corrigé en commit suivant.</p>
<blockquote><p>"Le panel ne remplace pas la revue. Il retire le bruit avant la revue."</p></blockquote>
<p>Ce qui m'a le plus surpris, ce n'est pas la vitesse. C'est la profondeur. <strong>Les agents attrapent ce qu'on n'attrape pas — le cas limite auquel personne n'avait pensé, la mauvaise odeur architecturale planquée trois couches plus bas, le contrat qui s'est silencieusement cassé.</strong> Trois ingénieurs seniors dans une pièce auraient dit "ça me semble bon" et seraient passés à autre chose. Le panel n'a pas de vendredi après-midi.</p>
<p>On utilise le même panel sur les issues entrantes. Chaque issue qui atterrit dans notre backlog passe par lui avant le tri. Le résultat est une analyse structurée — ce qui est vraiment demandé, ce qui manque, les blocages que ça implique, ce que ça touche dans le code. C'est le genre d'analyse qu'un Tech Lead ferait un bon jour, sauf que c'est tous les jours, sur toutes les issues, en deux minutes. La réunion de tri qui prenait une heure en prend dix parce que tout le monde arrive avec les notes du panel.</p>
<p>La qualité a monté. Personne dans l'équipe n'a eu besoin d'être convaincu. <strong>Ça marche, et une fois que tu as vu un panel d'agents démolir ta PR, tu ne reviens plus en arrière.</strong></p>
<p>Ce schéma de panel adversarial n'est pas propre à la revue de code. <a target="_blank" rel="noopener noreferrer" href="https://www.aihero.dev/skills-grill-me">Le skill grill-me de Matt Pocock</a> applique la même idée à la pensée brute — un agent qui te cuisine sur ton raisonnement jusqu'à ce que les zones fragiles remontent. J'en garde un actif en parallèle pour les arbitrages produit, les choix d'architecture, les idées à moitié formées avec lesquelles j'aurais sinon débarqué en réunion. Ça fait mouche, à chaque fois. Même remède, autre patient.</p>

<h2>La réunion qui s'enregistre toute seule</h2>
<p>Il y a presque deux mois, autre chose s'est installé. Les réunions ont commencé à s'enregistrer toutes seules.</p>
<p>En présentiel, sur le téléphone — oui, un téléphone au milieu de la table, qui enregistre, transcrit en local. C'est devenu un réflexe pour certains, comme amener un cahier en réunion l'était avant. En distanciel, le transcript Teams existe déjà. Dans les deux cas, à la fin de la réunion, il y a un transcript.</p>
<p>On passe le transcript dans un skill qui génère un compte rendu structuré. Les sujets traités, les points d'intérêt, les blocages, les décisions prises et — c'est cette partie qui a vraiment imposé l'outil — <strong>les actions assignées à chaque personne</strong>. Avec les noms. Le genre de compte rendu qu'on passait quarante-cinq minutes à écrire le lendemain matin, sauf que là c'est fait avant qu'on ait quitté la pièce et personne n'oublie l'action qu'on lui a confiée.</p>
<p>Puis la partie magique. La même chaîne peut prendre ces actions et les transformer en issues — assignées aux bonnes personnes, dans le bon projet, via la CLI GitHub ou GitLab. La réunion se termine. Les issues sont ouvertes. Les responsables sont notifiés. Le Tech Lead n'a rien eu à faire à part assister.</p>
<blockquote><p>"Le mail de relance de quarante-cinq minutes que j'écrivais à 23h n'existe plus. Le travail qu'il décrivait est déjà dans le backlog avant que la réunion ne se termine."</p></blockquote>
<p>La même chaîne maintient les roadmaps à jour. Daily, weekly — l'agent lit le compte rendu, met à jour les roadmaps des projets que je maintiens, déplace ce qui a été livré, fait remonter ce qui a glissé, signale les nouvelles dépendances. La roadmap arrête d'être un document que je redoutais de mettre à jour le vendredi après-midi pour devenir un artefact vivant qui reflète ce qui vient d'être dit. <strong>Tout le monde — équipe, PO, parties prenantes — voit la même chose, synchronisé, sans que personne n'ait à fusionner cinq versions le lundi matin.</strong></p>
<p>Je veux être honnête sur ce qui est dur. Tous les transcripts ne sont pas propres — des prénoms mal entendus, du sarcasme indexé comme une décision, parfois l'agent assigne une action à la mauvaise personne. Donc on relit avant de publier. Le skill produit un brouillon. L'humain valide. C'est la seule cérémonie qu'on a gardée, et elle prend trente secondes.</p>

<h2>La mémoire produit qu'on n'a jamais eue</h2>
<p>Il y a un effet de bord de la chaîne de réunions que je n'avais pas vu venir. À partir du moment où chaque réunion devient un compte rendu structuré, ces comptes rendus arrêtent d'être des artefacts éphémères. Ils s'accumulent. Ils deviennent une <em>histoire</em>.</p>
<p>Une histoire des décisions produit. Pas la décision officielle figée dans un SharePoint — l'évolution réelle. Pourquoi on a choisi l'option B en mars. Ce qu'on a écarté. La contrainte qui est remontée en semaine 18 et a renversé la réponse. Qui a poussé quoi, et qu'est-ce qui les a fait changer d'avis.</p>
<p>Pour la première fois en quatorze ans d'environnement entreprise, mon équipe a un enregistrement continu et interrogeable de <em>comment</em> on est arrivés au produit qu'on a aujourd'hui. Pas un instantané. Une trajectoire.</p>
<p>Tout le monde peut l'interroger. Le PO. Le PM. Les testeurs. Les développeurs. Même le RSSI et l'équipe conformité. Ils posent une question à l'agent — <em>"pourquoi on valide encore ce champ côté serveur alors que la spec a bougé au trimestre dernier ?"</em> — et l'agent lit l'historique, ressort la réunion où la décision a été prise, l'arbitrage qui l'a imposée, et le standard qui la justifiait. <strong>De manière asynchrone.</strong> Aucun humain n'a eu besoin de se souvenir.</p>
<blockquote><p>"La codebase mémorisait ce qu'était le produit. Maintenant elle mémorise pourquoi."</p></blockquote>
<p>La knowledge base s'écrit toute seule. Décisions, débats, contraintes réglementaires, standards produit — tout finit encodé au même endroit que le code. Chaque persona du panel y lit. Chaque reviewer review aussi, implicitement, contre cette base.</p>
<p><strong>L'onboarding s'est dramatiquement amélioré.</strong> Un nouvel arrivant passait avant des semaines à chasser le contexte — solliciter les seniors, fouiller des vieilles pages Confluence, assister à des réunions en observateur. Maintenant il demande à l'agent. L'agent répond à partir de l'historique réel du produit, avec les sources. Le senior est libéré de son rôle de serveur de documentation ambulant. Le nouvel arrivant est productif en jours, pas en mois.</p>
<p>Dans un domaine comme le nôtre — régulé, plein de standards, plein de <em>"tu ne peux pas faire ça parce que l'article 14.3 de la directive dit…"</em> — c'est transformatif. Les agents challengent en permanence nos choix contre les réglementations qu'on a écrites et les standards produit qu'on s'est engagés à tenir. Pas comme un audit ponctuel. Comme un bourdonnement continu, à bas bruit, du <em>"tu es sûr que ça respecte toujours X ?"</em> dans chaque revue de PR, chaque analyse d'issue, chaque décision d'architecture.</p>
<p><strong>Ça nous évite de partir dans la mauvaise direction. Au quotidien.</strong> Ce simple fait, c'est un bonheur calme et profond que je n'avais pas anticipé.</p>

<h2>Les tests qu'on promettait toujours d'écrire</h2>
<p>Il y a un troisième workflow qui s'est installé. C'est peut-être celui qui me fait le plus plaisir.</p>
<p>Les tests de non-régression automatisés. La couverture end-to-end. La validation des règles métier. Les choses que chaque roadmap d'équipe <em>contenait</em> et qu'aucune roadmap n'a jamais vraiment <em>livrées</em>. Les tests qu'on promettait au comité sécurité. Les tests qu'on promettait à l'auditeur. Les tests qu'on se promettait à nous-mêmes trois roadmaps de suite, avant de les rétrograder discrètement en "phase 2" parce que la prochaine fonctionnalité ne pouvait pas attendre.</p>
<p>Pendant quatorze ans, j'ai vu les équipes dégrader leurs propres livrables exactement de la même façon. Pas par paresse — par arithmétique. Un senior écrit une fonctionnalité en trois jours. Le même senior écrirait la couverture e2e en trois jours de plus. Donc la couverture saute. À chaque fois. Le livrable part en prod avec un trou de qualité connu dont personne ne parle en COPIL.</p>
<p><strong>Cette arithmétique est cassée maintenant.</strong></p>
<p>Les agents génèrent la suite e2e en même temps que la fonctionnalité. Même boucle, même contexte, mêmes règles métier. Les scénarios de non-régression métier — ceux qui sortent directement de la spec, ceux qui vivent dans la tête du PO, ceux qu'un utilisateur a remontés dans un ticket il y a deux ans — sont encodés en tests, automatiquement, au moment où la fonctionnalité est construite. Pas en phase 2. Pas au Q3. <em>Dans la même merge request.</em></p>
<p>Et le panel les review. Le persona métier vérifie que le test représente bien la règle. Le persona performance signale les scénarios qui seront lents. Le persona junior demande "et ce cas limite ?" — et le persona senior répond en code.</p>
<blockquote><p>"On produit enfin la couverture de tests qu'on devait à nos applications depuis dix ans. C'est comme rembourser une dette que j'avais fini par considérer comme perdue."</p></blockquote>
<p>Je veux être honnête sur l'ampleur de la chose. <strong>Le trou de qualité créé par la roadmap est la cause numéro un de la fragilité des logiciels d'entreprise.</strong> Tout le monde le sait. Personne ne le corrige, parce que la correction ne passe jamais le filtre de priorisation. Maintenant la correction n'a <em>plus besoin</em> de passer ce filtre — elle part avec la fonctionnalité, par défaut, parce que l'agent ne fatigue pas et n'a pas de deadline.</p>
<p>Les applications dont je suis responsable ont plus de couverture e2e aujourd'hui qu'après une décennie d'effort humain. Je me l'entends dire à voix haute et je continue de trouver ça absurde. <em>Fou</em>, c'est le bon mot.</p>

<h2>Ce qui a changé dans l'équipe</h2>
<p>Il serait facile de lire ça et de penser que l'équipe est devenue plus petite, plus rapide, plus individualiste. Le contraire s'est produit.</p>
<p><strong>Les juniors montent en compétence plus vite.</strong> Ils arrivent en revue avec l'analyse du panel déjà en main. Ils arrivent en réunion avec le compte rendu de la précédente déjà structuré. Ils n'ont plus besoin de demander "qu'est-ce qui est important ici ?" — les agents ont déjà cadré la question. Leur énergie cognitive va au métier, pas à naviguer dans le processus.</p>
<p><strong>Les seniors ont arrêté de perdre du temps en théâtre de revue.</strong> Il y a cinq ans, faire une revue de PR sérieuse voulait dire bloquer deux heures, lire chaque ligne, et rater des choses quand même. Maintenant le panel fait le premier passage. Le senior passe dix minutes sur ce qui demande vraiment du jugement — choix architecturaux, cas limites métier, les choses que l'agent ne peut pas trancher. Le temps gagné part en mentorat, en design, en livraison.</p>
<p><strong>Personne ne lutte contre.</strong> C'est ce qui m'a le plus surpris. Pas de résistance. L'équipe n'a pas eu besoin d'un plan de formation ni d'un atelier conduite du changement. Ils ont essayé le panel une fois, l'ont vu attraper un vrai problème, et l'habitude s'est prise. <strong>Six mois plus tard, demander à quelqu'un de mon équipe de "reviewer sans le panel" reviendrait à lui demander de compiler à la main.</strong></p>

<h2>Le métier qu'on a toujours voulu faire</h2>
<p>Voilà la partie dont personne ne parle. <strong>C'est franchement agréable.</strong></p>
<p>Je n'ai pas rédigé de compte rendu de réunion depuis deux mois. Je n'ai pas formaté de mail de relance depuis mars. Je n'ai pas passé de samedi matin à me battre avec un YAML de CI ou à chasser un test instable. Les corvées techniques que je redoutais — elles n'existent plus. Les agents s'en occupent, mieux et plus vite que je ne l'ai jamais fait, et eux ne râlent pas.</p>
<p>Ce que je fais maintenant toute la journée, c'est le travail que je voulais vraiment faire. M'asseoir avec le PO et stress-tester un workflow clinique. Lire un retour terrain attentivement jusqu'à comprendre ce que l'utilisateur clinique voulait vraiment dire — pas juste ce que le ticket disait. Croquer un modèle métier au tableau avec deux collègues jusqu'à ce que ça fasse "clic". Lire la dernière réglementation d'interopérabilité et chercher ce que ça implique pour notre roadmap. Engueuler mon homologue Tech Lead parce qu'on modélise le mauvais concept.</p>
<p>Autrement dit : <strong>du métier.</strong> Le vrai problème qu'on est payés à résoudre.</p>
<blockquote><p>"Mon agenda est désormais rempli de conversations sur le métier. Il était rempli de conversations sur le processus. Ce déplacement-là, c'est tout le métier."</p></blockquote>
<p>Le changement n'est pas subtil. C'est ce que chaque développeur senior a toujours voulu en secret : plus de métier, plus de produit, plus d'échanges avec les gens que le logiciel sert vraiment — et moins de temps à traduire une intention en syntaxe, à se battre avec des outils de build, ou à formater un compte rendu que personne ne lira.</p>
<p>L'équipe le ressent. Les juniors plus que les autres. Ils sont arrivés dans le métier en s'attendant à passer des années bloqués dans la couche technique avant d'avoir le droit de penser au métier. <strong>Ils ne sont pas bloqués.</strong> Ils sont déjà dans les conversations qui comptent, avec le panel qui tient la discipline technique qu'ils n'ont pas encore acquise. Voir un alternant faire son premier vrai arbitrage métier en troisième semaine au lieu de la quatre-vingtième — ça, c'est la partie que je n'avais pas anticipée et qui me rend heureux.</p>
<p>Je fais ce métier depuis quatorze ans. Je ne l'ai jamais autant aimé que maintenant. <strong>Le métier a changé sous nos pieds, et la version sur laquelle on a atterri, c'est celle dont je rêvais sans oser le dire.</strong></p>

<h2>Ce qui reste aux humains</h2>
<p>Je ne veux pas survendre. Beaucoup de choses sont encore les nôtres.</p>
<p><strong>Décider ce qu'on construit.</strong> Aucun agent n'a la lecture politique d'un projet, la relation client, ni le contexte stratégique qui dit "on ne livre pas ça même si on peut". Ça reste un Tech Lead, un PO, quelqu'un qui connaît la salle.</p>
<p><strong>Détecter quand le panel se trompe.</strong> Les agents argumentent bien. Ils se trompent aussi parfois avec aplomb. Le repérer demande de l'expertise métier — ce même jugement dont je parlais dans l'article précédent. Le panel ne remplace pas l'ingénieur. Il libère l'ingénieur pour le travail qui demande vraiment d'en être un.</p>
<p><strong>Tenir l'architecture.</strong> Le panel revoit contre des contraintes qu'on a écrites. Quelqu'un doit écrire ces contraintes, les maintenir à jour, et trancher quand le système doit plier. Ça reste nous. <strong>Mauvais contexte en entrée, mauvais débat en sortie.</strong></p>
<p><strong>Parler à l'équipe.</strong> Une réunion transcrite et transformée en issues, ce n'est pas un un-à-un. Les conversations difficiles, le check moral, le "tu vas vraiment bien ?" — ça ne passe pas par une chaîne de transcript. Ça n'y passera jamais.</p>

<h2>Que faire lundi matin</h2>
<p>Si vous voulez retenir une chose de cet article et l'essayer cette semaine, voici l'ordre que je conseillerais :</p>
<ol>
<li><strong>Commencer par le panel d'analyse d'issues.</strong> C'est le point d'entrée le plus facile. Prenez dix issues entrantes, faites-les passer par un petit conseil de sous-agents avec personas, comparez la sortie à ce que produit votre réunion de tri. Vous serez mal à l'aise. Puis convaincu.</li>
<li><strong>Ajouter le panel de revue de PR.</strong> Même idée, sur un seul repo, sur des PR volontaires d'abord. Ne l'imposez pas. Attendez que quelqu'un dise "attends, le panel a vu ça et nous on est passés à côté". C'est le moment où ça se diffuse.</li>
<li><strong>Enregistrer une réunion.</strong> Une seule. Passez le transcript dans un skill de résumé. Comparez au mail de relance que vous auriez écrit. Décidez si vous pouvez encore justifier de l'écrire à la main.</li>
<li><strong>Câbler la création d'issues en dernier.</strong> N'automatisez pas la création d'issues tant que la boucle transcript → compte rendu n'est pas fiable. Sinon vous spammez le backlog. Quand elle l'est, l'intégration CLI GitHub ou GitLab prend quinze minutes et vous fait gagner des heures par semaine.</li>
<li><strong>Garder l'étape d'approbation humaine.</strong> Des brouillons, pas du push automatique. La confiance vient en regardant l'agent avoir raison, pas en sautant la vérification.</li>
</ol>

<h2>Conclusion</h2>
<p>J'attends toujours le moment où ça arrête d'avoir l'air magique. Il n'est pas encore venu.</p>
<p>On a absorbé des agents dans les revues, dans le tri, dans les réunions, dans le backlog. Rien de tout ça n'a été planifié. Chaque morceau a gagné sa place en étant manifestement meilleur que ce qu'on faisait avant. L'équipe est plus grande qu'il y a un an — les stagiaires et alternants se sont ajoutés à l'effectif — livre plus, dort mieux, râle moins. <strong>Les parties chiantes du métier ont disparu. Ce qui reste, c'est le travail pour lequel je suis venu dans cette industrie — et je n'ai pas autant aimé mes lundis depuis que je suis junior. Autant en profiter.</strong></p>
<p>Le métier a changé. Le changement est bon. Moins de syntaxe, moins de cérémonie, moins de reporting — plus de métier, plus de produit, plus de conversations avec les gens pour qui on construit. Cet échange-là, je l'aurais signé sans hésiter il y a dix ans si quelqu'un me l'avait proposé.</p>
<p>Si vous avez lu les deux articles précédents en pensant que je faisais de la théorie — non. C'est ce que ça donne en pratique, dans une entreprise française, en mai 2026. Il y a six mois, rien de tout ça n'existait. Dans six mois, je n'ai aucune idée de ce qu'on aura absorbé d'autre. C'est la seule prévision honnête que j'ai.</p>
<p>Les outils sont là. Le réflexe, c'est la seule chose qu'il reste à installer.</p>
<p>Quelle est la réunion la plus chiante de votre semaine ? Enregistrez-la. Voyez ce qui en sort.</p>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le processus a toujours été du gaspillage. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — ce que devient l'ingénieur quand la couche de syntaxe disparaît.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'AiTeamReflex',
  props: {
    locale: {
      type: String as () => 'fr' | 'en',
      required: true
    }
  },
  setup(props) {
    const content = computed(() => {
      return getContent(props.locale)
    })
    return { content }
  },
  template: '<div v-html="content.html"></div>'
})
</script>

<template>
  <div v-html="content.html"></div>
</template>
