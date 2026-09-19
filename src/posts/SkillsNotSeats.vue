<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'skills-not-seats',
  date: '2026-09-19',
  tags: ['Software', 'AI', 'Opinion', 'Work']
}

const englishContent: PostContent = {
  title: 'The Skill Was Real. The Seat Wasn\'t.',
  description: 'Product ownership, testing, security, platform engineering: most of what got hired as a separate seat over the last ten years is a skill that never needed one. On my team the fix landed on the tech lead, who now carries product judgment next to the technical expertise he already had. One field report, not a template — and it updates something I only got half right two posts ago.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> <abbr title="Product Owner — the Scrum role responsible for the backlog">PO</abbr>, <abbr title="Quality Assurance">QA</abbr>, security, <abbr title="Platform engineering and operations, often shortened to DevOps">DevOps</abbr>, and plenty of others. Job titles that barely existed twenty years ago. Now hired and promoted as if they always had. Each names a real skill. None ever needed a seat that could only do that one thing. On my team, the tech lead absorbed product ownership on top of the technical expertise he already had — one field report, not a template for every org. The bigger claim: heading into 2027, an <abbr title="Built around AI agents doing first-draft, first-pass work by default, not as an add-on">AI-native</abbr> team can't afford the coordination a seat was built to sell. Skills have to remerge into whoever already holds the accountability.</p></div>
<hr>
<p>Somewhere in the last decade, a set of skills got promoted into a payroll line.</p>
<p>Product Owner. QA engineer. Security engineer. DevOps engineer. And plenty of others. None of these existed as separate seats twenty years ago. Now most engineering organizations hire and promote for them as if they always had. Each one names something real: product judgment, test judgment, security judgment, operational judgment. None of them ever required a person who could only do that one thing.</p>
<p>Development and architecture went through a version of the same move. Some organizations peeled off a Solution Architect title from the senior developer who used to hold both. But that pairing mostly resisted the split. A tech lead, by default, already carries the development judgment and the architecture judgment. That was never the piece that needed its own seat.</p>
<p>Somewhere between the first Scrum certification and the fortieth dedicated Slack channel, the other skills got seats instead. The seats started acting like the skills needed protecting from the rest of the team.</p>
<p>This is a field report. It's about what happens when you put the seat back where the skill came from. It worked on my team.</p>
<p>I don't think the specific shape is universal. The tech lead absorbing product ownership on top of expertise he already had — that's what happened here. A security-heavy fintech team would land somewhere else. It should.</p>
<p>What generalizes, heading into 2027, is the diagnosis. The seat, not the skill, is what a fast organization can no longer afford. If you are running on <abbr title="Built around AI agents doing first-draft, first-pass work by default, not as an add-on">AI-native</abbr> throughput, the org chart you inherited is now the slowest thing you own.</p>
<blockquote><p>A title bought coordination. It rarely bought the judgment it was named after.</p></blockquote>

<h2>What the decade actually built</h2>
<p>I want to be honest about the history before I argue with it: the cynical version is also the lazy one. Three things happened at once, and only one of them deserves the accusation.</p>
<p>The first is real. Complexity grew faster than any one engineer could hold. Security surface, cloud topology, regulatory traceability — each got deep enough that a generalist skimming all three did worse than a specialist owning one. At least at a given team size.</p>
<p>The second is real too. Once an organization outgrows a room everyone fits in, someone has to do cross-team integration. That work is genuinely full-time past a certain scale. Frameworks built for that moment — the <abbr title="A framework for scaling Agile practices across large organizations, with its own named role catalogue">Scaled Agile Framework</abbr>, for one — publish entire role catalogues: Product Owner, Release Train Engineer, Solution Architect. The honest answer to a real coordination problem, at hundreds of engineers.</p>
<p>The third is the one I'm actually arguing with. Those same catalogues got installed at teams a tenth that size. The seat survived long after the coordination problem it solved had shrunk back down.</p>
<p>Nobody planned it that way. It happened one restructuring at a time, each one locally reasonable. A promotion needed a title. A title needed a scope. A scope needed a headcount line to protect it.</p>
<p>The result reads, from where I sit, less like specialization and more like a piloting layer. A seat whose main output was status, not judgment. Its existence let the people doing the work stop feeling responsible for the parts the seat now covered.</p>
<p>That reading is mine. No framework I'm about to cite makes it for me.</p>
<p><abbr title="Matthew Skelton and Manuel Pais, authors of the 2019 book on organizing teams around cognitive load">Team Topologies</abbr> gets closest to a citable version of the mechanism. But it argues something narrower than my claim. Cognitive load is finite, so a team should shed every hand-off it doesn't need.</p>
<p><abbr title="DevOps Research and Assessment, Google Cloud's research program on software delivery">DORA</abbr>'s own research backs the same instinct from the systems side. Elite performers are measurably more likely to run a loosely coupled architecture. Precisely because it removes cross-team dependency from the critical path.</p>
<p>Neither one argues for merging PO, security and domain expertise into a single person. What they argue is simpler: every hand-off has a cost. An organization that keeps adding seats without asking what hand-off each one adds is paying that cost blind.</p>
<p>That argument gets sharper once agents are in the loop. They absorb most of the relay work a seat used to justify. What stays scarce is not production. It is the finite cognitive load of whoever still has to decide. Every seat still standing after its coordination need has shrunk is a claim on that same limited budget.</p>
<p>The clearest real-world precedent for actually collapsing a seat — not just reducing its hand-offs — is the disappearance of a dedicated "operations" title. <abbr title="Amazon's chief technology officer">Werner Vogels</abbr> described it in 2006. Giving Amazon's developers operational responsibility for what they built raised quality on both sides of an old wall. The wall between building software and running it. The two halves of that judgment — build it well, run it well — never actually needed two different people.</p>
<p>Netflix wrote the same move up a decade later, as <abbr title="Netflix's term for developers who own a service across its whole lifecycle — build, test and operate — instead of handing pieces to separate SRE and QA seats">"full-cycle developers."</abbr> Separate <abbr title="Site Reliability Engineering — the discipline, and the title, that runs production systems">SRE</abbr> and test-engineering seats, folded back into the person writing the change.</p>
<p>Testing and security are living through the same move right now. It's called <abbr title="Catching a class of defect earlier in the pipeline — closer to the developer who wrote it — instead of downstream in a dedicated QA or security stage">"shift left."</abbr> Instead of a QA seat catching what a developer missed downstream, or a security seat gatekeeping a release at the end, the skill returns to whoever is already closest to the change when it's made.</p>

<svg viewBox="0 0 640 356" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative bar chart comparing four roles invented over the last decade — product ownership, testing, security, platform engineering — each split into a skill share that stays with the person and a seat share of coordination and reporting that does not; the seat share is the larger part in every row." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">TEN YEARS OF NEW TITLES · ILLUSTRATIVE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">The skill was real. The seat wasn't.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="100">Product ownership</text>
<text x="32" y="140">Testing</text>
<text x="32" y="180">Security</text>
<text x="32" y="220">Platform / DevOps</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="106" width="190" height="24" rx="8" fill="currentColor" fill-opacity="0.42"></rect>
<rect x="226" y="106" width="382" height="24" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="32" y="146" width="160" height="24" rx="8" fill="currentColor" fill-opacity="0.42"></rect>
<rect x="196" y="146" width="412" height="24" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="32" y="186" width="230" height="24" rx="8" fill="currentColor" fill-opacity="0.42"></rect>
<rect x="266" y="186" width="342" height="24" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="32" y="226" width="210" height="24" rx="8" fill="currentColor" fill-opacity="0.42"></rect>
<rect x="246" y="226" width="362" height="24" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13">
<rect x="32" y="266" width="14" height="14" rx="4" fill="currentColor" fill-opacity="0.42"></rect>
<text x="54" y="277" fill="currentColor" opacity="0.75">the skill — moves with the person</text>
<rect x="32" y="296" width="14" height="14" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"></rect>
<text x="54" y="307" fill="currentColor" opacity="0.75">the seat — the title, the meetings, the reporting line</text>
</g>
<text x="32" y="336" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">illustrative shares — a model of where the weight sits, not a measurement</text>
</svg>

<h2>One field report, not a template</h2>
<p>On <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, I'm the tech lead for the engineering side of a hospital <abbr title="Enterprise Resource Planning — the administrative backbone of a hospital group">ERP</abbr>. I've spent enough years in this domain that I already knew the ins and outs of the patient journey — identity management, its edge cases — before I ever touched a backlog.</p>
<p>The tech lead title already meant I owned the architecture judgment and the development judgment. That was never in question. It's not what changed.</p>
<p>What changed is the third one: business judgment. Reading what a hospital actually needs, and turning it into a priority. That usually sits with a separate PO.</p>
<p>From the start of the Solstice project, product responsibility was mine. We built a deliberately small team, with no separate PO. I make product decisions <abbr title="Not solo: me, an AI agent handling the first draft, and the regulatory constraints — run together, as fast and as automated as the work allows">myself</abbr>, in the same conversation where I make the technical call. The weekly workshop ends with the tickets already written — because the person deciding what we build, and the person who understands why the certified module handles retention a certain way, are the same person. Same meeting. Same moment.</p>
<p>Naming why this setup holds together matters more than the fact that it exists. The relay work a separate PO would have carried — feeding the backlog, formatting tickets, chasing status for a steering committee — is exactly what agents absorb, as I described in <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">an earlier post</a>.</p>
<p>That absorption isn't this post's argument. It's the precondition for it. It frees enough hours in a week for one person to hold product judgment and domain depth at once, without doubling their workload.</p>
<p>Before agents did that packaging work, fusing the two roles meant one side went shallow — product or technical. Now it doesn't have to.</p>
<p>I want to be direct about what doesn't generalize here. It worked because I already had ten years in this domain before I added the product skill on top. I wasn't asking a generalist to become an expert in two things at once. I was asking someone who already half-owned one of them to formally own both.</p>
<p>"Promote your best engineer to also run the backlog" is a recipe for burnout — if the second skill isn't already half-built. It's a <abbr title="How many people can be hit by a bus before a project stalls — a low number means one person's absence breaks the team">bus-factor</abbr> problem if that person becomes the only one who can translate domain nuance into a technical constraint.</p>
<p>Past roughly fifteen to twenty engineers, or more than one product surface, I'd expect this exact shape to break. The fusion becomes two full-time jobs wearing one badge. Not one job with better ergonomics.</p>
<p>What generalizes isn't "make your tech lead do this." It's this: stop assuming a skill needs its own seat, before checking whether it already lives next to the accountability you need.</p>

<h2>This sharpens something I only got half right</h2>
<p>I wrote, two posts ago, that <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">product judgment survives and diffuses across roles</a>. The engineer making micro-decisions hourly. The PM steering by delivery numbers. The PO feeding context through the workshop.</p>
<p>That's still true at the scale that piece was describing: a multi-role team, the wall between product and engineering dissolving from both sides at once.</p>
<p>What I didn't say clearly enough: diffusion has a shape. And the shape depends on how small the team gets. Spread thin enough — a squad small enough for one person to already hold the full context — diffusion doesn't stay spread. It collapses to one name.</p>
<p>That's not a failure of the earlier argument. It's what that argument looks like once there's only one person left to diffuse to.</p>
<p>I'm naming this directly, because a reader of the series will notice the shift before I point it out. The earlier post argued judgment shouldn't consolidate into one role — not without a named answer to who signs, and how juniors learn it. Both answers get harder, not easier, when the role is one person instead of four.</p>
<p>I don't think that makes the fusion wrong. I think it makes the honest section below non-negotiable. Not optional.</p>
<blockquote><p>Judgment did not move to a title. It moved to whoever was already accountable and had room left in the week.</p></blockquote>

<svg viewBox="0 0 640 288" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative comparison of one product decision under two structures: routed through four separate seats it travels the full length of the bar before it is made; routed through one seat that already holds the skill and the accountability, most of that length disappears." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">ONE DECISION, TWO STRUCTURES · ILLUSTRATIVE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">One seat signs. The rest used to relay.</text>
<text x="32" y="100" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">4 separate seats</text>
<rect x="32" y="106" width="540" height="28" rx="8" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="32" y="160" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">1 seat, skill attached</text>
<rect x="32" y="166" width="200" height="28" rx="8" fill="currentColor" fill-opacity="0.42" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<path d="M 572 134 L 572 210 L 232 210 L 232 196" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 396 210 L 396 222" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<text x="396" y="244" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">the hand-offs this removes</text>
<text x="32" y="272" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">illustrative — the shape of what changes, not a measured latency</text>
</svg>

<h2>Where the seat still earns its keep</h2>
<p>None of this argues for fewer people. My team grew this year, interns and apprentices included. The hours a merged title frees don't disappear into a smaller headcount line. They go to discovery, domain depth, and regulatory work — the things every post in this series has already argued were underfunded. Same logic as the DORA piece: the value is in reinvestment, not extraction.</p>
<p>Some of what a seat did isn't overhead at all. It's a legal fact about how regulated software has to be built. No title redesign changes that. On Solstice*, the person who writes a safety-critical change can't be the sole reviewer of its own verification. That's not a management preference. It's the segregation of duties an auditor checks for, by name. Independent security review stays independent.</p>
<p>A junior or apprentice still needs someone to shadow, and a seat to grow into. Collapsing a title doesn't collapse the need to teach the skill to someone who doesn't have it yet.</p>
<p>And past the team size where one person can hold the full context, product management as a function stops being optional. It becomes genuinely full-time again. I wouldn't try this shape at ten times my team's size. I'd be wrong to recommend it there.</p>
<p>The honest list, stated plainly: independent verification on anything safety- or security-critical. A named, accountable signer for every decision chain. An on-ramp for whoever inherits the skill next. None of those three survive being merged away. Everything else on the org chart is a candidate.</p>

<h2>Two ways to get the timing wrong</h2>
<p>Merge too early and quality drops on both sides — the same failure mode a shallow generalist hits. Never merge, and the hand-offs keep running out of habit — even the ones the team no longer needs. The window between the two is narrow: it opens once the second skill is already half-built, not before.</p>
<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration showing that merging a seat and a skill too early drops quality on both sides, while never merging lets the hand-offs run forever; the real window sits in between, narrow, right when the skill is already half-built." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">WHEN TO MERGE · ILLUSTRATIVE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Between the two, a narrow window.</text>
<text x="32" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">Too early</text>
<text x="320" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75" text-anchor="middle">The window</text>
<text x="608" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75" text-anchor="end">Never</text>
<rect x="32" y="104" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="224" y="104" width="192" height="28" rx="6" fill="currentColor" fill-opacity="0.38"></rect>
<line x1="224" y1="104" x2="224" y2="132" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"></line>
<line x1="416" y1="104" x2="416" y2="132" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"></line>
<path d="M 224 132 L 224 150 L 416 150 L 416 132" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 320 150 L 320 162" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<text x="320" y="184" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">the skill is already half there</text>
<text x="32" y="160" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">quality drops on both sides</text>
<text x="608" y="160" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="end">the hand-offs never come back down</text>
<text x="32" y="216" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">illustrative — the shape of the risk, not a measurement</text>
</svg>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — why the process was always waste. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — what the engineer becomes when syntax disappears. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">The Backlog Was Never the Job</a> — the post this one sharpens: judgment diffuses across roles, until the team is small enough that it doesn't. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">Doctrine Compounds. Models Don't.</a> — where the rules that outlive a merged role live. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">The Tests Passed. Nothing Happened.</a> — the other skill that stopped needing its own seat. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA Just Confirmed What My Team Already Lived</a> — the reinvestment logic this post reuses.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://framework.scaledagile.com/glossary/">Scaled Agile Framework — Glossary</a>: Product Owner, Release Train Engineer and Solution Architect are named, official SAFe roles. Cited for the role catalogue's existence, not as an endorsement of the scaling model itself.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://teamtopologies.com/book">Team Topologies (Skelton & Pais, 2019)</a>: the cognitive-load argument for shedding unnecessary hand-offs at the team level. It argues for restructuring teams, not merging individual roles — I am extending its logic further than the authors do, and say so above.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/capabilities/loosely-coupled-teams/">DORA — Loosely coupled teams</a>: elite performers are measurably more likely to run architecture that removes cross-team dependency from the critical path. About systems, not job titles — the analogy is mine.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://queue.acm.org/detail.cfm?id=1142065">Jim Gray, A Conversation with Werner Vogels (ACM Queue, 2006)</a>: the origin of "you build it, you run it" — Amazon developers taking on operational responsibility for what they built.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://netflixtechblog.com/full-cycle-developers-at-netflix-a08c31f83249">Full Cycle Developers at Netflix (Netflix Tech Blog, 2018)</a>: Netflix folding separate SRE and test-engineering seats back into the developer, a decade after Vogels.</li>
<li>Solstice* — the workshop cycle and the team-size figures come from the team's own practice. Internal, no link: the codename is fictitious and the real project, its products and its vendor are anonymized.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'La compétence était réelle. Le poste, non.',
  description: 'Product owner, test, sécurité, plateforme : la plupart de ce qui a été recruté comme poste séparé ces dix dernières années est une compétence qui n\'a jamais eu besoin d\'un poste. Chez moi, la solution est passée par le tech lead, qui porte désormais le jugement produit à côté de l\'expertise technique qu\'il avait déjà. Un retour d\'expérience, pas un modèle — et qui corrige quelque chose que je n\'avais qu\'à moitié dit il y a deux billets.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> <abbr title="Product Owner — le rôle Scrum responsable du backlog">PO</abbr>, <abbr title="Quality Assurance — assurance qualité">QA</abbr>, sécurité, <abbr title="Ingénierie et exploitation de plateforme, souvent raccourci en DevOps">DevOps</abbr>, et bien d'autres. Des intitulés qui existaient à peine il y a vingt ans. Aujourd'hui recrutés et promus comme s'ils avaient toujours existé. Chacun désigne une compétence réelle. Aucun n'a jamais exigé un poste incapable de faire autre chose. Chez moi, le tech lead a absorbé le product ownership par-dessus l'expertise technique qu'il portait déjà — un retour d'expérience, pas un modèle à copier partout. La thèse générale : en route vers 2027, une équipe <abbr title="Construite pour que des agents IA produisent le premier jet par défaut, pas en option">IA-native</abbr> ne peut plus financer la coordination qu'un poste était censé vendre. Les compétences doivent se refondre vers qui porte déjà la responsabilité.</p></div>
<hr>
<p>Quelque part dans la dernière décennie, un ensemble de compétences a été promu en ligne de paie.</p>
<p>Product Owner. Ingénieur QA. Ingénieur sécurité. Ingénieur DevOps. Et bien d'autres. Aucun de ces postes n'existait séparément il y a vingt ans. Aujourd'hui, la plupart des organisations d'ingénierie recrutent et budgètent comme s'ils avaient toujours existé. Chacun désigne quelque chose de réel : le jugement produit, le jugement de test, le jugement sécurité, le jugement opérationnel. Aucun n'a jamais exigé une personne incapable de faire autre chose.</p>
<p>Le développement et l'architecture ont connu une version du même mouvement. Dans certaines organisations, un intitulé « architecte solution » s'est détaché du développeur senior qui portait autrefois les deux. Mais cette paire a surtout résisté à la scission. Un tech lead, par défaut, porte déjà le jugement de développement et le jugement d'architecture. Ça n'a jamais été la part qui avait besoin de son propre poste.</p>
<p>Entre la première certification Scrum et le quarantième canal Slack dédié, les autres compétences ont reçu un poste à la place. Les postes se sont mis à agir comme si la compétence devait être protégée du reste de l'équipe.</p>
<p>Voici un retour d'expérience. Ce qui se passe quand on remet le poste là où la compétence est née. Ça a marché chez moi.</p>
<p>Je ne pense pas que la forme précise soit universelle. Le tech lead qui absorbe le product ownership par-dessus une expertise qu'il avait déjà, c'est ce qui s'est passé ici. Une équipe fintech très exposée à la sécurité atterrirait ailleurs. À juste titre.</p>
<p>Ce qui se généralise, en route vers 2027, c'est le diagnostic. C'est le poste, pas la compétence, qu'une organisation véloce ne peut plus financer. Si vous fonctionnez en régime <abbr title="Construite pour que des agents IA produisent le premier jet par défaut, pas en option">IA-native</abbr>, l'organigramme que vous avez hérité est désormais ce que vous avez de plus lent.</p>
<blockquote><p>Un poste achetait de la coordination. Il achetait rarement le jugement dont il portait le nom.</p></blockquote>

<h2>Ce que la décennie a vraiment construit</h2>
<p>Je veux être honnête sur l'histoire avant de la contester : la version cynique est aussi la version paresseuse. Trois choses se sont produites en même temps, et une seule mérite l'accusation.</p>
<p>La première est réelle. La complexité a grandi plus vite qu'un seul ingénieur ne pouvait la porter. La surface de sécurité, la topologie cloud, la traçabilité réglementaire — chacune est devenue assez profonde pour qu'un généraliste survolant les trois fasse pire qu'un spécialiste n'en tenant qu'une. Du moins à une certaine taille d'équipe.</p>
<p>La deuxième est réelle aussi. Une fois qu'une organisation dépasse une pièce où tout le monde tient, quelqu'un doit faire l'intégration entre équipes. Ce travail est réellement à temps plein, passé une certaine échelle. Des cadres conçus pour ce moment-là — le <abbr title="Un cadre de mise à l'échelle des pratiques Agile dans les grandes organisations, avec son propre catalogue de rôles nommés">Scaled Agile Framework</abbr>, par exemple — publient des catalogues entiers de rôles : Product Owner, Release Train Engineer, Solution Architect. La réponse honnête à un vrai problème de coordination, sur des centaines d'ingénieurs.</p>
<p>La troisième est celle que je conteste vraiment. Ces mêmes catalogues ont été installés dans des équipes dix fois plus petites. Le poste a survécu bien après que le problème de coordination qu'il résolvait s'était réduit.</p>
<p>Personne n'a écrit ça comme un plan. C'est arrivé une réorganisation à la fois, chacune localement raisonnable. Une promotion avait besoin d'un titre. Un titre avait besoin d'un périmètre. Un périmètre avait besoin d'une ligne d'effectif pour le protéger.</p>
<p>Le résultat ressemble, de là où je suis, moins à de la spécialisation qu'à une couche de pilotage. Un poste dont la production principale était du statut, pas du jugement. Son existence permettait aux gens qui faisaient le travail de cesser de se sentir responsables des parties que le poste couvrait désormais.</p>
<p>Cette lecture est la mienne. Aucun des cadres que je vais citer ne la fait à ma place.</p>
<p><abbr title="Matthew Skelton et Manuel Pais, auteurs du livre de 2019 sur l'organisation des équipes autour de la charge cognitive">Team Topologies</abbr> s'approche le plus d'une version citable du mécanisme. Mais défend une thèse plus étroite que la mienne. La charge cognitive est finie, donc une équipe devrait se débarrasser de tout relais dont elle n'a pas besoin.</p>
<p>Les propres recherches de <abbr title="DevOps Research and Assessment, le programme de recherche de Google Cloud sur le delivery logiciel">DORA</abbr> confortent le même instinct côté systèmes. Les organisations les plus performantes sont mesurablement plus susceptibles d'adopter une architecture faiblement couplée. Précisément parce que cela retire la dépendance inter-équipes du chemin critique.</p>
<p>Ni l'un ni l'autre ne plaide pour fusionner le PO, la sécurité et l'expertise métier en une seule personne. Ce qu'ils défendent est plus simple : chaque relais a un coût. Une organisation qui continue d'ajouter des postes sans se demander quel relais chacun ajoute paie ce coût à l'aveugle.</p>
<p>Cet argument devient plus tranchant une fois les agents dans la boucle. Ils absorbent l'essentiel du travail de relais qu'un poste servait à justifier. Ce qui reste rare, ce n'est pas la production. C'est la charge cognitive finie de qui doit encore décider. Chaque poste encore debout après que son besoin de coordination a fondu est une ponction sur ce même budget limité.</p>
<p>Le précédent le plus net pour la disparition réelle d'un poste — pas juste la réduction de ses relais — c'est la disparition d'un intitulé « opérations » dédié. <abbr title="Directeur technique d'Amazon">Werner Vogels</abbr> l'a décrit en 2006. Donner aux développeurs d'Amazon la responsabilité opérationnelle de ce qu'ils construisaient a fait monter la qualité des deux côtés d'un vieux mur. Le mur entre construire un logiciel et l'exploiter. Les deux moitiés de ce jugement — bien construire, bien exploiter — n'avaient en réalité jamais eu besoin de deux personnes différentes.</p>
<p>Netflix a écrit le même mouvement une décennie plus tard, sous le nom de <abbr title="Le terme employé par Netflix pour des développeurs qui possèdent un service sur tout son cycle de vie — construction, test et exploitation — plutôt que de le répartir entre des postes SRE et QA séparés">« full-cycle developers »</abbr>. Les postes séparés de <abbr title="Site Reliability Engineering — la discipline, et le poste, qui exploite les systèmes en production">SRE</abbr> et de test, repliés dans la personne qui écrit le changement.</p>
<p>Le test et la sécurité vivent le même mouvement en ce moment. Ça s'appelle <abbr title="Attraper une classe de défaut plus tôt dans le pipeline — plus près du développeur qui l'a écrit — au lieu d'une étape QA ou sécurité dédiée en aval">« shift left »</abbr>. Au lieu d'un poste QA qui attrape en aval ce qu'un développeur a manqué, ou d'un poste sécurité qui verrouille une livraison à la fin, la compétence revient à qui est déjà le plus proche du changement au moment où il est fait.</p>

<svg viewBox="0 0 640 388" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramme illustratif comparant quatre rôles inventés ces dix dernières années — product ownership, test, sécurité, ingénierie de plateforme — chacun décomposé entre une part compétence qui reste avec la personne et une part poste, coordination et reporting, qui ne la suit pas ; la part poste est la plus grande dans chaque ligne." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">DIX ANS DE NOUVEAUX POSTES · ILLUSTRATIF</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">La compétence était réelle.</text>
<text x="32" y="104" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Le poste, non.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="132">Product ownership</text>
<text x="32" y="172">Test</text>
<text x="32" y="212">Sécurité</text>
<text x="32" y="252">Plateforme / DevOps</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="138" width="190" height="24" rx="8" fill="currentColor" fill-opacity="0.42"></rect>
<rect x="226" y="138" width="382" height="24" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="32" y="178" width="160" height="24" rx="8" fill="currentColor" fill-opacity="0.42"></rect>
<rect x="196" y="178" width="412" height="24" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="32" y="218" width="230" height="24" rx="8" fill="currentColor" fill-opacity="0.42"></rect>
<rect x="266" y="218" width="342" height="24" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="32" y="258" width="210" height="24" rx="8" fill="currentColor" fill-opacity="0.42"></rect>
<rect x="246" y="258" width="362" height="24" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13">
<rect x="32" y="298" width="14" height="14" rx="4" fill="currentColor" fill-opacity="0.42"></rect>
<text x="54" y="309" fill="currentColor" opacity="0.75">la compétence — suit la personne</text>
<rect x="32" y="328" width="14" height="14" rx="4" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22"></rect>
<text x="54" y="339" fill="currentColor" opacity="0.75">le poste — le titre, les réunions, la ligne hiérarchique</text>
</g>
<text x="32" y="368" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">parts illustratives — un modèle de la répartition du poids, pas une mesure</text>
</svg>

<h2>Un retour d'expérience, pas un modèle</h2>
<p>Sur <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, je suis tech lead côté ingénierie d'un <abbr title="Enterprise Resource Planning — la colonne vertébrale administrative d'un groupement hospitalier">ERP</abbr> hospitalier. J'ai passé assez d'années dans ce domaine pour connaître les tenants et aboutissants du parcours patient — la gestion de son identité, ses spécificités — avant même de toucher un backlog.</p>
<p>Le titre de tech lead impliquait déjà que je possédais le jugement d'architecture et le jugement de développement. Ça n'a jamais été en question. Ce n'est pas ce qui a changé.</p>
<p>Ce qui a changé, c'est le troisième : le jugement métier. Comprendre ce dont un hôpital a réellement besoin, et le transformer en priorité. Ça repose, d'ordinaire, sur un PO séparé.</p>
<p>Dès le début du projet Solstice, j'ai pris la responsabilité du produit. Nous avons construit une équipe très restreinte, sans PO séparé : je prends les décisions produit <abbr title="Pas en solo : moi, un agent IA qui produit le premier jet, et les contraintes réglementaires — le tout mené ensemble, aussi rapide et automatisé que possible">moi-même</abbr>, dans la même conversation où je prends la décision technique. L'atelier hebdomadaire se termine avec les tickets déjà écrits, parce que la personne qui décide ce qu'on construit, et la personne qui comprend pourquoi le module certifié gère la rétention d'une certaine façon, sont la même personne. Même réunion. Même moment.</p>
<p>Dire pourquoi cette organisation tient compte plus que le fait qu'elle existe. Le travail de relais qu'un PO séparé aurait porté — alimenter le backlog, formater des tickets, courir après les statuts pour un comité de pilotage — c'est exactement le travail que les agents absorbent, comme je l'ai décrit dans <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">un billet précédent</a>.</p>
<p>Cette absorption n'est pas l'argument de ce billet-ci. Elle en est la condition. Elle libère assez d'heures dans une semaine pour qu'une seule personne porte le jugement produit et la profondeur métier en même temps, sans doubler sa charge de travail.</p>
<p>Avant que les agents ne fassent ce travail d'emballage, fusionner les deux rôles voulait dire qu'un des deux côtés devenait superficiel — le produit ou le technique. Maintenant, ce n'est plus obligatoire.</p>
<p>Je veux être direct sur ce qui, dans mon cas, ne se généralise pas. Ça a marché parce que j'avais déjà dix ans dans ce domaine avant d'ajouter la compétence produit par-dessus. Je ne demandais pas à un généraliste de devenir expert sur deux sujets à la fois. Je demandais à quelqu'un qui maîtrisait déjà à moitié l'une des deux compétences d'assumer formellement les deux.</p>
<p>« Promouvoir votre meilleur ingénieur pour qu'il gère aussi le backlog » est une recette d'épuisement — si la seconde compétence n'est pas déjà à moitié construite. C'est un problème de <abbr title="Le nombre de personnes qu'il faudrait qu'un bus renverse avant qu'un projet ne cale — un chiffre bas signifie que l'absence d'une seule personne bloque l'équipe">bus factor</abbr> si cette personne devient la seule capable de traduire une nuance métier en contrainte technique.</p>
<p>Passé environ quinze à vingt ingénieurs, ou plus d'un périmètre produit, je m'attendrais à ce que cette forme précise se casse. La fusion devient deux métiers à temps plein sous un seul badge. Pas un métier avec une meilleure ergonomie.</p>
<p>Ce qui se généralise, ce n'est pas « faites faire ça à votre tech lead ». C'est ceci : arrêtez de supposer qu'une compétence a besoin de son propre poste, avant d'avoir vérifié si elle vit déjà à côté de la responsabilité qu'il vous faut.</p>

<h2>Ça précise quelque chose que je n'avais qu'à moitié dit</h2>
<p>J'ai écrit, il y a deux billets, que <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">le jugement produit survit et se diffuse à travers les rôles</a>. L'ingénieur qui prend des micro-décisions à l'heure. Le PM qui pilote sur des métriques de livraison. Le PO qui nourrit le contexte par l'atelier.</p>
<p>C'est toujours vrai à l'échelle que ce billet décrivait : une équipe multi-rôles, le mur entre produit et ingénierie qui se dissout des deux côtés à la fois.</p>
<p>Ce que je n'ai pas assez clairement dit à l'époque : la diffusion a une forme. Et cette forme dépend de la taille de l'équipe. Sur une équipe assez petite pour qu'une seule personne porte déjà tout le contexte, la diffusion ne reste pas répartie. Elle s'effondre sur un seul nom.</p>
<p>Ce n'est pas un échec de l'argument précédent. C'est ce à quoi il ressemble une fois qu'il ne reste qu'une seule personne à qui diffuser.</p>
<p>Je le dis directement, parce qu'un lecteur de la série remarquera le glissement avant que je ne le lui signale. Le billet précédent défendait que le jugement ne devrait pas se concentrer sur un seul rôle — pas sans une réponse qui nomme qui signe, et comment les juniors l'apprennent. Les deux réponses deviennent plus difficiles, pas plus faciles, quand le rôle est une personne au lieu de quatre.</p>
<p>Je ne pense pas que cela rende la fusion fausse. Je pense que cela rend la section honnête ci-dessous non négociable. Pas facultative.</p>
<blockquote><p>Le jugement n'a pas migré vers un titre. Il est allé vers qui portait déjà la responsabilité et avait encore de la place dans sa semaine.</p></blockquote>

<svg viewBox="0 0 640 288" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison illustrative d'une décision produit sous deux structures : relayée par quatre postes séparés, elle parcourt toute la longueur de la barre avant d'être prise ; relayée par un seul poste qui porte déjà la compétence et la responsabilité, l'essentiel de cette longueur disparaît." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">UNE DÉCISION, DEUX STRUCTURES · ILLUSTRATIF</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Un poste tranche. Le reste relayait.</text>
<text x="32" y="100" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">4 postes séparés</text>
<rect x="32" y="106" width="540" height="28" rx="8" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="32" y="160" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">1 poste, compétence intégrée</text>
<rect x="32" y="166" width="200" height="28" rx="8" fill="currentColor" fill-opacity="0.42" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<path d="M 572 134 L 572 210 L 232 210 L 232 196" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 396 210 L 396 222" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<text x="396" y="244" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">les relais que ça supprime</text>
<text x="32" y="272" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">illustratif — la forme de ce qui change, pas une latence mesurée</text>
</svg>

<h2>Là où le poste garde sa raison d'être</h2>
<p>Rien de tout cela n'argumente pour moins de monde. Mon équipe a grandi cette année, alternants et apprentis inclus. Les heures qu'un poste fusionné libère ne disparaissent pas dans une ligne d'effectif plus courte. Elles vont vers le terrain, la profondeur métier et le travail réglementaire — ce que chaque billet de cette série a déjà qualifié de sous-financé. Même logique que le billet DORA : la valeur est dans le réinvestissement, pas dans l'extraction.</p>
<p>Une partie de ce que faisait un poste n'a rien d'un coût. C'est un fait légal sur la façon dont le logiciel régulé doit être construit. Aucune refonte de titre ne le change. Sur Solstice*, la personne qui écrit un changement critique pour la sécurité des patients ne peut pas être la seule à relire sa propre vérification. Ce n'est pas une préférence de management. C'est la séparation des tâches qu'un auditeur vérifie nommément. La revue de sécurité indépendante reste indépendante.</p>
<p>Un alternant ou un apprenti a toujours besoin de quelqu'un à observer, et d'un poste vers lequel grandir. Fusionner un titre ne fusionne pas le besoin d'enseigner la compétence à quelqu'un qui ne l'a pas encore.</p>
<p>Et passé la taille d'équipe où une seule personne peut porter tout le contexte, le management produit en tant que fonction cesse d'être optionnel. Il redevient réellement un temps plein. Je n'essaierais pas cette forme à dix fois la taille de mon équipe. J'aurais tort de la recommander à cette échelle.</p>
<p>La liste honnête, dite sans détour : la vérification indépendante sur tout ce qui touche à la sécurité des patients ou à la sûreté, un signataire responsable nommé pour chaque chaîne de décision, et une voie d'apprentissage pour qui doit hériter de la compétence ensuite. Aucun de ces trois ne survit à une fusion. Tout le reste de l'organigramme est candidat.</p>

<h2>Deux façons de se tromper de moment</h2>
<p>Fusionnez trop tôt, et la qualité baisse des deux côtés — le même échec qu'un généraliste trop dilué. Ne fusionnez jamais, et les relais continuent de tourner par habitude — même ceux dont l'équipe n'a plus besoin. La fenêtre entre les deux est étroite : elle s'ouvre une fois la seconde compétence déjà à moitié construite, pas avant.</p>
<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration montrant que fusionner un poste et une compétence trop tôt fait baisser la qualité des deux côtés, alors que ne jamais fusionner laisse les relais perdurer indéfiniment ; la vraie fenêtre se situe entre les deux, étroite, au moment où la compétence est déjà à moitié acquise." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">QUAND FUSIONNER · ILLUSTRATIF</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Entre les deux, une fenêtre étroite.</text>
<text x="32" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">Trop tôt</text>
<text x="320" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75" text-anchor="middle">La fenêtre</text>
<text x="608" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75" text-anchor="end">Jamais</text>
<rect x="32" y="104" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="224" y="104" width="192" height="28" rx="6" fill="currentColor" fill-opacity="0.38"></rect>
<line x1="224" y1="104" x2="224" y2="132" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"></line>
<line x1="416" y1="104" x2="416" y2="132" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"></line>
<path d="M 224 132 L 224 150 L 416 150 L 416 132" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 320 150 L 320 162" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<text x="320" y="184" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">la compétence est déjà à moitié là</text>
<text x="32" y="160" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">la qualité baisse des deux côtés</text>
<text x="608" y="160" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="end">les relais ne redescendent jamais</text>
<text x="32" y="216" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">illustratif — la forme du risque, pas une mesure</text>
</svg>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le processus a toujours été du gaspillage. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — ce que devient l'ingénieur quand la syntaxe disparaît. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">Le backlog n'a jamais été le métier</a> — le billet que celui-ci précise : le jugement se diffuse à travers les rôles, jusqu'à ce que l'équipe soit trop petite pour ça. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">La doctrine capitalise. Pas les modèles.</a> — où vivent les règles qui survivent à un rôle fusionné. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">Les tests passent. Il ne se passe rien.</a> — l'autre compétence qui a cessé d'avoir besoin de son propre poste. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA vient de confirmer ce que mon équipe a déjà vécu</a> — la logique de réinvestissement que ce billet réutilise.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://framework.scaledagile.com/glossary/">Scaled Agile Framework — Glossaire</a> : Product Owner, Release Train Engineer et Solution Architect sont des rôles SAFe officiels et nommés. Cité pour l'existence du catalogue de rôles, pas comme un aval du modèle de mise à l'échelle lui-même.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://teamtopologies.com/book">Team Topologies (Skelton & Pais, 2019)</a> : l'argument de la charge cognitive pour se débarrasser des relais inutiles au niveau de l'équipe. Plaide pour restructurer des équipes, pas fusionner des rôles individuels — j'étends sa logique plus loin que les auteurs, et je le dis plus haut.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/capabilities/loosely-coupled-teams/">DORA — Loosely coupled teams</a> : les organisations les plus performantes sont mesurablement plus susceptibles de faire tourner une architecture qui retire la dépendance inter-équipes du chemin critique. Concerne les systèmes, pas les intitulés de poste — l'analogie est mienne.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://queue.acm.org/detail.cfm?id=1142065">Jim Gray, A Conversation with Werner Vogels (ACM Queue, 2006)</a> : l'origine de « you build it, you run it » — les développeurs d'Amazon prenant la responsabilité opérationnelle de ce qu'ils construisaient.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://netflixtechblog.com/full-cycle-developers-at-netflix-a08c31f83249">Full Cycle Developers at Netflix (Netflix Tech Blog, 2018)</a> : Netflix repliant les postes séparés de SRE et de test dans le développeur, une décennie après Vogels.</li>
<li>Solstice* — le cycle d'atelier et les chiffres de taille d'équipe viennent de la pratique de l'équipe elle-même. Interne, sans lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'SkillsNotSeats',
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
