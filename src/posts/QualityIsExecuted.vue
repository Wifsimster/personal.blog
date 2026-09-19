<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'quality-is-executed',
  date: '2026-08-29',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'Quality Isn\'t Read. It\'s Executed.',
  description: 'Yes, I trust the frontier models — I run them every day and I know what they produce. But calibrated confidence is still personal, not proof about the system. Here is the quality system I built on a regulated hospital ERP: what quality means when the software has to hold up in court, the 4 layers that enforce it, the ladder we measure it on, and what it still does not prove.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Yes, I trust the frontier models: I put them through their paces daily, across very different scenarios. That trust is calibrated, which is the opposite of blind — and it proves nothing, because it says something about me and nothing about the software. On regulated healthcare software, quality is a set of properties that must hold on every single change: an audit trail that stands up in court, an identity nobody can forge, accessibility as a legal obligation, interoperability contracts that do not lie. Not one of them depends on who wrote the line. So I stopped defending them by reading diffs and started compiling them. 67 recorded decisions, 39 checks that fail the build, one pre-merge verdict, and exactly one perimeter where the answer is deliberately a human. We measure one thing: which stage each defect is caught at. Two of those stages are still empty — we are not live, and the first on-site tests are weeks away. Review itself is mostly agents reviewing agents; what is left to people is what a machine cannot carry — the legally binding calls and the security ones. The point was never to slow down. It is to go faster and better at once.</p></div>
<hr>
<p>Yes, I trust the frontier models. I put them through their paces every day, across very different scenarios, and I know fairly precisely what they produce: where they are excellent, where they drift, what comes back when the brief is bad. There is nothing blind about that trust. It is the product of daily calibration.</p>
<p>And it proves nothing.</p>
<p>My confidence is a fact about me, not a property of the software. It does not transfer, it cannot be audited, and it is worth nothing to someone asking how we guarantee that an audit record gets written. That is why I no longer read diffs line by line, and why I built something else instead.</p>

<h2>What quality means here</h2>
<p>The software we write — <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, an <abbr title="Enterprise Resource Planning — the administrative backbone of a hospital group">ERP</abbr> for a group of French public hospitals — manages patient records. That context sets the whole definition.</p>
<p>Quality here is not a score and not a defect count. It is a short list of properties that have to be true after every change, without exception:</p>
<ul>
<li>Writes that can be held against us later carry a legal audit trail, and the write is refused if the trail cannot be written.</li>
<li>A user's identity is never inferred from something the caller can type.</li>
<li>Regulated fields are never returned in the clear.</li>
<li>Accessibility is not a nice-to-have. In French public procurement it is a legal obligation with a named standard.</li>
<li>The interoperability contract we publish describes what the deployment actually serves.</li>
</ul>
<p>Not one of those is verified by asking "does the feature work". Each is a property of the system that a perfectly working feature can silently violate. That is the whole problem, and it existed long before agents.</p>
<blockquote><p>Quality is not the absence of bugs. It is the set of properties that survive the next change.</p></blockquote>

<h2>Why reading stopped being the instrument</h2>
<p>Two reasons, and only one is about volume. Volume is real and everyone has said it: more code arrives each week than any team reads with genuine attention.</p>
<p>The second survives even with infinite reading time. Reading a diff is an instrument for finding a wrong line. The defects that get through are usually a <em>missing</em> line, in a file the diff never opened.</p>
<blockquote><p>You cannot notice an absence in a document that does not contain it.</p></blockquote>
<p>Almost half our checks exist because the obligation spans files. A resource class announced in the public contract means a service address must be provisioned in the deployment file. A port published next to the gateway silently removes the authentication the gateway performs. The change under review is locally correct; the obligation lives where the reviewer is not looking. That is exactly where human review is weakest and a script strongest.</p>
<p>One finding changed how I read a proposal. A study accepted at <abbr title="Mining Software Repositories — a peer-reviewed software-engineering conference">MSR</abbr> 2026 measured that agent-written pull requests carry noticeably more redundant code — and that reviewers rated them <em>more</em> favourably than human ones. Idiomatic, well-commented code buys less suspicion than it has earned. It is plausible before it is correct, and plausibility is what a reviewer stops on.</p>
<p>None of which makes it a new species of defect: a tired engineer forgets the same call on a Friday afternoon. What changed is the rate of the omission and the cost of catching it by reading.</p>

<h2>The 4 layers</h2>
<p>None of this is a verdict on the models. Those properties have to hold whoever wrote the line — an agent, a senior engineer, or me on a Friday evening. So they no longer rest on anyone's attention. They rest on code that runs.</p>
<p><strong>67 recorded decisions.</strong> Dated, versioned, read by every agent before anything structural. They carry the <em>reason</em> — the part an agent otherwise refactors away because it looks like an accident. No human on the team reads all 67. Nor do I.</p>
<p><strong>39 blocking checks</strong>, inside 44 continuous-integration jobs. One per property, each born of a real mistake. A single design rule governs them, and it is the only transferable thing in this post: <strong>derive the perimeter from the code, never recopy it</strong>. A hand-maintained list is wrong one rename later, and it fails silently.</p>
<p><strong>1 verdict before the merge.</strong> One command, scoped to the diff, running exactly what the pipeline runs, printing PASS or FAIL. It does not prove the change is good; it converts "please have a look" into a claim someone can check.</p>
<p><strong>1 human perimeter, on purpose.</strong> The surface reachable from outside the hospital information system: static entry secret, destructive delete. Review by a non-author, mandatory. We could have written a script; we decided that kind of mistake should cost a conversation.</p>
<p>A word on review, because the word misleads. On my team it is overwhelmingly automated: agents review agents and file a report. The human does not read the lines. The human reads what happened, and owns what a machine cannot own — the legally binding decisions and the security trade-offs.</p>
<blockquote><p>Responsibility does not delegate to a model.</p></blockquote>
<p>None of this exists to slow anyone down, and I would drop all of it tomorrow if it did. An executable rule is what lets us merge without a meeting. Speed and quality are not traded against each other here: they move together.</p>
<svg viewBox="0 0 640 316" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The quality system has four layers, each narrower than the last: 67 recorded architecture decisions, 39 checks that fail the build, one pre-merge PASS or FAIL verdict, and one perimeter deliberately reserved for human review." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">WHAT A CHANGE MEETS, IN ORDER</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">4 layers. Only one is a person.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="100" width="576" height="40" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="32" y="152" width="448" height="40" rx="8" fill="currentColor" fill-opacity="0.18"></rect>
<rect x="32" y="204" width="320" height="40" rx="8" fill="currentColor" fill-opacity="0.25"></rect>
<rect x="32" y="256" width="200" height="40" rx="8" fill="currentColor" fill-opacity="0.34"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600">
<text x="48" y="126">67 recorded decisions</text>
<text x="48" y="178">39 blocking checks</text>
<text x="48" y="230">1 pre-merge verdict</text>
<text x="48" y="282">1 human perimeter</text>
</g></svg>

<h2>How we prove it</h2>
<p>"We have guardrails" is a claim, not evidence. A system that enforces properties has to be measured, or it is just architecture with good intentions.</p>
<p>We measure on one ladder: <strong>how many stages a defect clears before something catches it.</strong> 6 stages, in order — the build, code review, manual testing, <abbr title="Quality Assurance — the qualification stage before a release is accepted">QA</abbr>, the pilot site, production. Every defect is labelled with the stage that caught it. Everything else we track hangs off that: defect density against merged proposals, time to fix by severity, the reopen rate, the standing backlog.</p>
<p>The last two stages get their own name, and it is the only number I would defend in a steering committee: <strong>escaped defects</strong>. Anything found at the pilot site or in production escaped every net we own.</p>
<p>This reframes what a guardrail is <em>for</em>. A check is not there to reduce a defect count. It is there to move one class of defect permanently leftward — from "a tester finds it" to "the build refuses it" — and it never moves back. That is why the count of executable rules matters more than the count of bugs. A fixed bug can come back. A written rule cannot.</p>
<blockquote><p>The question is not how many defects we found. It is how far each one got before something stopped it.</p></blockquote>
<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Defects are classified by the stage that caught them, across six stages from the build pipeline through code review, manual testing, QA and the pilot site to production; the last two count as escaped defects, and every executable rule added gets a class of defect caught one stage earlier, permanently." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE ONLY LADDER WE SCORE ON</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Which stage caught it?</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="129" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.25"></rect>
<rect x="226" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.2"></rect>
<rect x="323" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="420" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="517" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.8">
<text x="76" y="128">build</text>
<text x="173" y="128">review</text>
<text x="270" y="128">manual test</text>
<text x="367" y="128">QA</text>
<text x="464" y="128">pilot</text>
<text x="561" y="128">production</text>
</g>
<path d="M 420 152 L 420 164 L 606 164 L 606 152" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 513 164 L 513 176" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<text x="513" y="200" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" text-anchor="middle">escaped defects</text>
<text x="48" y="228" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.8">every executable rule gets a class caught one stage earlier</text>
<path d="M 350 246 L 48 246" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<path d="M 60 238 L 48 246 L 60 254" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="32" y="276" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">the classification we use, not a measured distribution</text>
<text x="32" y="294" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">the last two stages are empty: the product is not live yet, tests on site are weeks away</text>
</svg>

<h2>What none of this proves</h2>
<p><strong>My confidence does not transfer.</strong> It does not exist for the person who joins on Monday, nor for a model I have not put through its paces, nor for me on a subject I know badly. The checks are what remains when my calibration is absent.</p>
<p><strong>It is a ratchet, not a net.</strong> 39 checks encode 39 defects already paid for. Each was written after something got through. We cannot repeat 39 specific mistakes — which says nothing about the ones nobody has noticed yet.</p>
<p><strong>The verdict is narrow.</strong> PASS means no <em>known</em> rule is violated. The end-to-end phase runs against mocks, never a real database. Several of the defects that taught us most would have sailed through it.</p>
<p><strong>The last two stages are empty because we have not reached them yet.</strong> Nothing escaped to a pilot site or to production because there is neither, yet. The first on-site tests are a few weeks away. That is when those two columns start filling, and when I find out what everything above is actually worth. The hardest evidence — what survives real users on real hospital data — is evidence we do not have. Anyone showing a leakage chart with the last two columns empty is showing a calendar, not a result. Including me.</p>
<p><strong>Checks catch the disease they treat.</strong> One of ours came from a schema change that only applied to freshly created databases: green in the pipeline, green locally, broken everywhere else. Its first version had a blind spot of exactly the same shape.</p>
<p><strong>Derogations are not counted.</strong> About 12 are in use, each with a written reason beside it. Exactly one check counts them over time. Nothing prevents an agent from writing its own exemption to turn itself green. That is the open flaw in everything above, and I have no fix for it.</p>

<h2>What still belongs to humans</h2>
<p>Being surprised first. Every one of these checks exists because a person felt something was off and went looking. No rule has ever written the first rule.</p>
<p>Deciding what a defect means. That a control cannot be reached with a keyboard is a technical fact. That it puts us in breach of a legal accessibility obligation, and therefore blocks a release instead of joining a backlog, is a judgement.</p>
<p>Judging a derogation. An exemption marked in the code is auditable only if somebody goes and reads it — the marker does not audit itself.</p>
<p>Signing. A legally binding decision commits somebody, and a model cannot be that somebody. That is not a limit of the current generation. It is what binding means.</p>
<p>And the question no check asks: whether the thing should exist at all.</p>
<p>None of this is an argument for fewer people. People are the ones who get surprised first, and being surprised is the only part of this that does not scale by writing more scripts.</p>

<h2>What to do Monday morning</h2>
<ol>
<li><strong>Write down the properties, not the process.</strong> Five sentences that must stay true after every change. If you cannot name them, no amount of tooling will protect them.</li>
<li><strong>Label every defect with the stage that caught it.</strong> One field, and the highest-value measurement in this post. Without it you count bugs instead of measuring reach.</li>
<li><strong>Take one incident you already paid for and make it fail the build this week.</strong> Not a policy. One incident, one script.</li>
<li><strong>Prefer the obligations that cross files</strong>, and derive every perimeter from the code. Anything you maintain by hand drifts, and it drifts quietly.</li>
<li><strong>Count your derogations against a baseline that can only go down.</strong> I have one of those. I should have 40.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">Doctrine Compounds. Models Don't.</a> — why the rules outlive the models that read them. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">The Backlog Was Never the Job</a> — who signs when the rule and the judgement disagree. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a> — the verification tax, counted. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">One More Prompt</a> — why my own sense of speed is not evidence. <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">The LAN Is Dead</a> — the checkbox nobody read. <a target="_blank" rel="noopener noreferrer" href="/posts/skills-not-seats">The Skill Was Real. The Seat Wasn't.</a> — testing is not the only skill that stopped needing its own seat.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2601.21276">More Code, Less Reuse (MSR 2026)</a>: agent-written proposals carry measurably more redundant code, and reviewers rated them <em>more</em> favourably than human ones. Peer-reviewed, no vendor funding. Sentiment is not review rigour — take the direction, not a rate.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2211.03622">Perry et al., Do Users Write More Insecure Code with AI Assistants? (ACM CCS 2023)</a>: assisted participants wrote less secure code and were more confident it was secure. 47 participants, lab setting, a model three generations old. Cite it for the mechanism, never as a current rate.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/html/2603.28592v1">Debt Behind the AI Boom (2026)</a>: 304,362 metadata-verified agent-authored commits; of the issues found, 89.1% maintainability, 5.8% runtime bugs, 5.1% security. The authors state they ran no human baseline, so it describes the shape of the debt, not a gap against people.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.gitclear.com/the_ai_code_quality_maintainability_gap">GitClear — The AI Code Quality Maintainability Gap (2026)</a>: duplication up, refactoring down across 623 million changed lines. Calendar-year correlation with no authorship attribution, published by a vendor selling code-quality analytics. Corroboration, not proof.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/">Veracode GenAI Code Security (2025, re-tested 2026)</a>: 45% of generated samples failed a security check, flat across model generations. Vendor-funded, synthetic prompts, no review and no pipeline in the loop — raw model output, not shipped code. The flat line is the only durable point.</li>
<li>On the most-quoted number in this debate — the 19% slowdown measured on experienced developers in mature repositories — I wrote what happened when its own authors withdrew the framing, in <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">the post on measuring your own perception</a>. It is not re-argued here.</li>
<li>Solstice* — the layers, the counts and the measurement ladder come from the repository and its issue tracker. Internal, no links: the codename is fictitious and the real project, its products and its vendor are anonymized. Figures verified on 29 August 2026.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: "La qualité ne se relit pas. Elle s'exécute.",
  description: "Oui, je fais confiance aux modèles de pointe — je les éprouve tous les jours et je sais ce qu'ils produisent. Mais une confiance étalonnée reste une donnée personnelle, pas une preuve sur le système. Voici le système qualité que j'ai construit sur un ERP hospitalier régulé : ce que qualité veut dire quand le logiciel est opposable, les 4 couches qui la tiennent, l'échelle sur laquelle on la mesure, et ce qu'il ne prouve toujours pas.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Oui, je fais confiance aux modèles de pointe : je les éprouve tous les jours, sur des scénarios très différents. Cette confiance est étalonnée : elle n'a rien d'aveugle — et elle ne prouve rien, parce qu'elle dit quelque chose sur moi et rien sur le logiciel. En santé régulée, la qualité est un ensemble de propriétés qui doivent tenir après chaque changement : une trace d'audit opposable, une identité que personne ne peut usurper, l'accessibilité comme obligation légale, des contrats d'interopérabilité qui ne mentent pas. Aucune ne dépend de qui a écrit la ligne. J'ai donc cessé de les défendre en relisant des diffs et j'ai commencé à les compiler. 67 décisions consignées, 39 contrôles qui font échouer la chaîne, un verdict avant fusion, et exactement un périmètre où la réponse reste volontairement humaine. On mesure une seule chose : à quelle étape chaque défaut est attrapé. Deux de ces étapes sont encore vides : le produit n'est pas en service, et les premiers tests sur site arrivent dans quelques semaines. La revue elle-même est surtout affaire d'agents qui relisent des agents ; ce qui reste aux humains est ce qu'une machine ne peut pas porter — l'opposable et la sécurité. Le but n'a jamais été de ralentir. C'est d'aller plus vite et mieux à la fois.</p></div>
<hr>
<p>Oui, je fais confiance aux modèles de pointe. Je les éprouve tous les jours, sur des scénarios très différents, et je sais assez précisément ce qu'ils produisent : où ils sont excellents, où ils dérapent, ce qu'ils rendent quand la consigne est mauvaise. Cette confiance n'a rien d'aveugle. Elle est le résultat d'un étalonnage quotidien.</p>
<p>Et elle ne prouve rien.</p>
<p>Ma confiance parle de moi, pas du logiciel. Elle ne se transmet pas, elle ne s'audite pas, et elle ne vaudra rien devant quelqu'un qui demande comment nous garantissons qu'une trace d'audit est écrite. C'est pour cela que je ne relis plus les diffs ligne à ligne, et que j'ai construit autre chose à la place.</p>

<h2>Ce que « qualité » veut dire ici</h2>
<p>Le logiciel qu'on écrit — <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, un <abbr title="Enterprise Resource Planning — la colonne vertébrale administrative d'un groupement hospitalier">ERP</abbr> pour un groupement d'hôpitaux publics — gère des dossiers patients. Ce contexte décide de toute la définition.</p>
<p>Ici, la qualité n'est ni une note ni un décompte de défauts. C'est une courte liste de propriétés qui doivent être vraies après chaque changement, sans exception :</p>
<ul>
<li>Une écriture qui peut nous être opposée porte une trace d'audit légale, et l'écriture est refusée si la trace ne peut pas être écrite.</li>
<li>L'identité d'un utilisateur ne se déduit jamais de quelque chose que l'appelant peut taper.</li>
<li>Les champs régulés ne sortent jamais en clair.</li>
<li>L'accessibilité n'est pas un confort. Dans la commande publique française, c'est une obligation légale avec un référentiel nommé.</li>
<li>Le contrat d'interopérabilité que nous publions décrit ce que le déploiement sert réellement.</li>
</ul>
<p>Aucune de ces propriétés ne se vérifie en demandant « est-ce que la fonctionnalité marche ». Chacune peut être violée en silence par une fonctionnalité qui marche parfaitement. C'est tout le problème, et il existait bien avant les agents.</p>
<blockquote><p>La qualité n'est pas l'absence de bogues. C'est l'ensemble des propriétés qui survivent au changement suivant.</p></blockquote>

<h2>Pourquoi la relecture a cessé d'être l'instrument</h2>
<p>Deux raisons, et une seule concerne le volume. Le volume est réel et tout le monde l'a constaté : il arrive chaque semaine plus de code qu'aucune équipe n'en lit vraiment.</p>
<p>La seconde tient même avec un temps de lecture infini. Relire un diff est un instrument fait pour trouver une ligne fausse. Les défauts qui passent sont le plus souvent une ligne <em>manquante</em>, dans un fichier que le diff n'a jamais ouvert.</p>
<blockquote><p>On ne remarque pas une absence dans un document qui ne la contient pas.</p></blockquote>
<p>Près de la moitié de nos contrôles existent parce que l'obligation traverse les fichiers. Une classe de ressource annoncée dans le contrat public oblige à provisionner une adresse dans le fichier de déploiement. Un port publié à côté de la passerelle supprime silencieusement l'authentification qu'elle assure. Le changement relu est localement correct ; l'obligation vit là où le relecteur ne regarde pas. C'est exactement là que la revue humaine est au plus faible et un script au plus fort.</p>
<p>Un résultat a changé ma façon de lire une proposition. Une étude acceptée à <abbr title="Mining Software Repositories — conférence de génie logiciel à comité de lecture">MSR</abbr> 2026 mesure que les propositions écrites par des agents portent nettement plus de code redondant — et que les relecteurs les ont jugées <em>plus</em> favorablement que celles des humains. Un code idiomatique et bien commenté inspire moins de méfiance qu'il n'en mériterait. Il est plausible avant d'être juste, et c'est sur la plausibilité que le relecteur s'arrête.</p>
<p>Ce n'est pas une nouvelle espèce de défaut pour autant : un ingénieur fatigué oublie le même appel un vendredi après-midi. Ce qui a changé, c'est la cadence de l'omission et le coût de sa détection par la lecture.</p>

<h2>Les 4 couches</h2>
<p>Rien de tout cela n'est un jugement sur les modèles. Ces propriétés doivent tenir quel que soit l'auteur de la ligne : un agent, un ingénieur chevronné, ou moi un vendredi soir. Elles ne reposent donc plus sur l'attention de quelqu'un, mais sur du code qui s'exécute.</p>
<p><strong>67 décisions consignées.</strong> Datées, versionnées, lues par chaque agent avant tout changement structurant. Elles portent la <em>raison</em> — la partie qu'un agent supprime au premier remaniement parce qu'elle ressemble à un accident. Aucun humain de l'équipe ne lit les 67. Moi non plus.</p>
<p><strong>39 contrôles bloquants</strong>, dans 44 travaux d'intégration continue. Un par propriété, chacun né d'une erreur réelle. Une seule règle de conception les gouverne, et c'est la seule chose transposable de ce billet : <strong>dériver le périmètre du code, jamais le recopier</strong>. Une liste tenue à la main est fausse un renommage plus tard, et elle échoue en silence.</p>
<p><strong>1 verdict avant la fusion.</strong> Une commande cadrée sur le diff, qui rejoue exactement les contrôles de la chaîne et imprime PASS ou FAIL. Elle ne prouve pas que le changement est bon : elle transforme « jette un œil » en une affirmation vérifiable.</p>
<p><strong>1 périmètre humain, exprès.</strong> La surface joignable de l'extérieur, secret d'entrée statique et suppression destructrice. Revue obligatoire par un non-auteur. Nous aurions pu écrire un script ; nous avons décidé que cette erreur-là devait coûter une conversation.</p>
<p>Un mot sur la revue, parce que le mot induit en erreur. Chez nous elle est très majoritairement automatisée : des agents relisent des agents et rendent un rapport. L'humain ne lit pas les lignes, il lit ce qui s'est passé — et il assume ce qu'une machine ne peut pas assumer : les décisions opposables et les arbitrages de sécurité.</p>
<blockquote><p>Une responsabilité ne se délègue pas à un modèle.</p></blockquote>
<p>Rien de tout cela n'existe pour ralentir, et j'abandonnerais l'ensemble demain si c'était le cas. Une règle exécutable est ce qui permet de fusionner sans réunion. La vélocité et la qualité ne s'échangent pas ici : elles montent ensemble.</p>
<svg viewBox="0 0 640 316" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Le système qualité compte quatre couches, chacune plus étroite que la précédente : 67 décisions d'architecture consignées, 39 contrôles qui font échouer la chaîne, un verdict PASS ou FAIL avant fusion, et un périmètre volontairement réservé à la revue humaine." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CE QU'UN CHANGEMENT RENCONTRE, DANS L'ORDRE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">4 couches. Une seule est humaine.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="100" width="576" height="40" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="32" y="152" width="448" height="40" rx="8" fill="currentColor" fill-opacity="0.18"></rect>
<rect x="32" y="204" width="320" height="40" rx="8" fill="currentColor" fill-opacity="0.25"></rect>
<rect x="32" y="256" width="200" height="40" rx="8" fill="currentColor" fill-opacity="0.34"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600">
<text x="48" y="126">67 décisions consignées</text>
<text x="48" y="178">39 contrôles bloquants</text>
<text x="48" y="230">1 verdict avant fusion</text>
<text x="48" y="282">1 périmètre humain</text>
</g></svg>

<h2>Comment on le prouve</h2>
<p>« Nous avons des garde-fous » est une affirmation, pas une preuve. Un système qui impose des propriétés doit être mesuré, sinon ce n'est que de l'architecture pleine de bonnes intentions.</p>
<p>Nous mesurons sur une seule échelle : <strong>combien d'étapes un défaut franchit avant que quelque chose l'attrape.</strong> 6 étapes, dans l'ordre — la chaîne, la revue de code, le test manuel, la <abbr title="Quality Assurance — l'étape de qualification avant acceptation d'une livraison">recette</abbr>, le client pilote, la production. Chaque défaut porte l'étape qui l'a attrapé. Tout le reste en découle : densité de défauts rapportée aux propositions fusionnées, délai de correction par sévérité, taux de réouverture, backlog ouvert.</p>
<p>Les deux dernières étapes ont leur propre nom, et c'est le seul chiffre que je défendrais en comité de pilotage : les <strong>défauts échappés</strong>. Tout ce qui est trouvé chez le pilote ou en production a échappé à tous nos filets.</p>
<p>Cela redéfinit ce à quoi sert un garde-fou. Un contrôle n'est pas là pour faire baisser un décompte. Il est là pour déplacer une classe de défauts définitivement vers la gauche — de « un testeur le trouve » à « la compilation le refuse » — et cela ne revient jamais en arrière. Voilà pourquoi le nombre de règles exécutables compte davantage que le nombre de bogues. Un bogue corrigé peut revenir. Une règle écrite, non.</p>
<blockquote><p>La question n'est pas combien de défauts nous avons trouvés. C'est jusqu'où chacun est allé avant que quelque chose l'arrête.</p></blockquote>
<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Les défauts sont classés par l'étape qui les a attrapés, sur six étapes allant de la chaîne de compilation à la production en passant par la revue, le test manuel, la recette et le client pilote ; les deux dernières comptent comme défauts échappés, et chaque règle exécutable ajoutée fait attraper une classe de défauts une étape plus tôt, définitivement." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA SEULE ÉCHELLE QUI NOUS NOTE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">À quelle étape a-t-il été attrapé ?</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="129" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.25"></rect>
<rect x="226" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.2"></rect>
<rect x="323" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="420" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="517" y="104" width="89" height="38" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.8">
<text x="76" y="128">chaîne</text>
<text x="173" y="128">revue</text>
<text x="270" y="128">test manuel</text>
<text x="367" y="128">recette</text>
<text x="464" y="128">pilote</text>
<text x="561" y="128">production</text>
</g>
<path d="M 420 152 L 420 164 L 606 164 L 606 152" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 513 164 L 513 176" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<text x="513" y="200" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" text-anchor="middle">défauts échappés</text>
<text x="48" y="228" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.8">chaque règle exécutable fait attraper une classe une étape plus tôt</text>
<path d="M 350 246 L 48 246" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<path d="M 60 238 L 48 246 L 60 254" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="32" y="276" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">la classification que nous utilisons, pas une distribution mesurée</text>
<text x="32" y="294" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">les deux dernières étapes sont vides : le produit n'est pas encore en service</text>
</svg>

<h2>Ce que tout cela ne prouve pas</h2>
<p><strong>Ma confiance ne se transmet pas.</strong> Elle n'existe pas chez la personne qui arrive lundi, ni pour un modèle que je n'ai pas encore éprouvé, ni pour moi sur un sujet que je maîtrise mal. Les contrôles sont ce qui reste quand mon étalonnage n'est pas là.</p>
<p><strong>Ça n'attrape pas tout, ça empêche de retomber.</strong> 39 contrôles encodent 39 défauts déjà payés. Chacun a été écrit après coup, une fois le mal fait. Nous ne pouvons plus refaire 39 erreurs précises — cela ne dit rien de celles que personne n'a encore remarquées.</p>
<p><strong>Le verdict est étroit.</strong> PASS signifie qu'aucune règle <em>connue</em> n'est violée. La phase de bout en bout tourne sur des bouchons, jamais sur une vraie base. Plusieurs des défauts qui nous ont le plus appris seraient passés au travers.</p>
<p><strong>Les deux dernières étapes sont vides parce que nous n'y sommes pas encore arrivés.</strong> Rien ne s'est échappé chez un client pilote ni en production, pour la bonne raison qu'il n'y a encore ni l'un ni l'autre. Les premiers tests sur site sont dans quelques semaines. C'est là que ces deux colonnes commenceront à se remplir, et que je saurai ce que tout ce qui précède vaut vraiment. La preuve la plus dure — ce qui survit à de vrais utilisateurs, sur de vraies données hospitalières — nous ne l'avons pas. Quiconque vous présente un tableau de détection dont les deux dernières colonnes sont vides vous montre un calendrier, pas un résultat. Moi compris.</p>
<p><strong>Les contrôles attrapent la maladie qu'ils soignent.</strong> L'un des nôtres est né d'un changement de schéma qui ne s'appliquait qu'aux bases neuves : vert en chaîne, vert en local, cassé partout ailleurs. Sa première version avait un angle mort exactement de la même forme.</p>
<p><strong>Les dérogations ne sont pas comptées.</strong> Environ 12 sont en usage, chacune avec sa raison écrite à côté. Un seul contrôle les compte dans le temps. Rien n'empêche un agent d'écrire sa propre exemption pour se rendre vert. C'est la faille ouverte de tout ce qui précède, et je n'ai pas de correctif.</p>
<h2>Ce qui reste aux humains</h2>
<p>Être surpris le premier. Chacun de ces contrôles existe parce qu'une personne a senti que quelque chose clochait et est allée regarder. Aucune règle n'a jamais écrit la première règle.</p>
<p>Décider ce qu'un défaut signifie. Qu'un contrôle ne soit pas atteignable au clavier est un fait technique. Que cela nous mette en défaut sur une obligation légale d'accessibilité, et bloque donc une livraison au lieu de rejoindre un backlog, est un jugement.</p>
<p>Juger une dérogation. Une exemption marquée dans le code n'est auditable que si quelqu'un va la lire — le marqueur ne s'audite pas tout seul.</p>
<p>Signer. Une décision opposable engage quelqu'un, et un modèle ne peut pas être ce quelqu'un. Ce n'est pas une limite de la génération actuelle. C'est le sens du mot.</p>
<p>Et la question qu'aucun contrôle ne pose : est-ce que ça devrait exister.</p>
<p>Rien de tout cela n'est un argument pour moins de monde. Ce sont les gens qui sont surpris les premiers, et être surpris est la seule partie de tout ceci qui ne passe pas à l'échelle en écrivant plus de scripts.</p>

<h2>Quoi faire lundi matin</h2>
<ol>
<li><strong>Écrivez les propriétés, pas le processus.</strong> Cinq phrases qui doivent rester vraies après chaque changement. Si vous ne savez pas les nommer, aucun outillage ne les protégera.</li>
<li><strong>Étiquetez chaque défaut avec l'étape qui l'a attrapé.</strong> Un champ, et c'est la mesure la plus rentable de tout ce billet. Sans elle, vous comptez des bogues au lieu de mesurer leur portée.</li>
<li><strong>Prenez un incident déjà payé et transformez-le en contrôle bloquant cette semaine.</strong> Pas une politique. Un incident, un script.</li>
<li><strong>Préférez les obligations qui traversent les fichiers</strong>, et dérivez chaque périmètre du code. Tout ce qu'on tient à la main dérive, et ça dérive sans bruit.</li>
<li><strong>Comptez vos dérogations contre une référence qui ne peut que décroître.</strong> Un seul de mes contrôles le fait. Il devrait y en avoir 40.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">La doctrine capitalise. Pas les modèles.</a> — pourquoi les règles survivent aux modèles qui les lisent. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">Le backlog n'a jamais été le métier</a> — qui signe quand la règle et le jugement divergent. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % écrit par des agents</a> — la taxe de vérification, comptée. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">Encore un prompt</a> — pourquoi mon propre ressenti de vitesse n'est pas une preuve. <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">Le LAN est mort</a> — la case que personne n'a lue. <a target="_blank" rel="noopener noreferrer" href="/posts/skills-not-seats">La compétence était réelle. Le poste, non.</a> — le test n'est pas la seule compétence à avoir cessé d'avoir besoin de son propre poste.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2601.21276">More Code, Less Reuse (MSR 2026)</a> : les propositions écrites par des agents portent nettement plus de code redondant, et les relecteurs les ont jugées <em>plus</em> favorablement que celles des humains. Comité de lecture, aucun financement d'éditeur. Le sentiment n'est pas la rigueur de revue : prenez la direction, pas un taux.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2211.03622">Perry et coll., Do Users Write More Insecure Code with AI Assistants ? (ACM CCS 2023)</a> : les participants assistés ont écrit du code moins sûr et étaient plus convaincus qu'il l'était. 47 participants, cadre de laboratoire, modèle vieux de trois générations. À citer pour le mécanisme, jamais comme un taux actuel.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/html/2603.28592v1">Debt Behind the AI Boom (2026)</a> : 304 362 commits écrits par des agents et vérifiés par métadonnées ; parmi les problèmes trouvés, 89,1 % de maintenabilité, 5,8 % de bogues d'exécution, 5,1 % de sécurité. Les auteurs déclarent n'avoir fait tourner aucune référence humaine : cela décrit la forme de la dette, pas un écart avec les gens.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.gitclear.com/the_ai_code_quality_maintainability_gap">GitClear — The AI Code Quality Maintainability Gap (2026)</a> : duplication en hausse, remaniement en baisse sur 623 millions de lignes modifiées. Corrélation par année civile, sans attribution d'auteur, publiée par une société qui vend de l'analyse de qualité de code. Corroboration, pas preuve.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/">Veracode GenAI Code Security (2025, retesté en 2026)</a> : 45 % des échantillons produits échouent à un contrôle de sécurité, stable d'une génération à l'autre. Financé par l'éditeur, invites synthétiques, sans revue ni chaîne dans la boucle : sortie brute d'un modèle, pas du code livré. La platitude de la courbe est le seul point durable.</li>
<li>Sur le chiffre le plus cité de ce débat — les 19 % de ralentissement mesurés sur des développeurs expérimentés dans des dépôts matures — j'ai écrit ce qui s'est passé quand ses propres auteurs en ont retiré le cadrage, dans <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">le billet sur la mesure de son propre ressenti</a>. Il n'est pas rejoué ici.</li>
<li>Solstice* — les couches, les décomptes et l'échelle de mesure viennent du dépôt et de son suivi d'issues. Interne, sans lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés. Chiffres vérifiés le 29 août 2026.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'QualityIsExecuted',
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
