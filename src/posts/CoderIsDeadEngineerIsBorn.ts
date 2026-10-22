import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'coder-is-dead-engineer-is-born',
  date: '2026-03-15',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'Coding Was Never the Job',
  description: 'Coding was never the job. It was the bottleneck we mistook for the craft. AI removed it. What remains is what always mattered: architecture, domain expertise, product vision, and judgment. A look at the new roles emerging in software development.',
  html: `<p><strong>TL;DR:</strong> The "coder" job — the person whose primary value is translating intent into syntax — is being automated away. But software development isn't dying. It's evolving into what it always should have been: designing systems, understanding businesses, engineering context, and exercising judgment. The roles of tomorrow are already emerging. Some companies are already hiring for them.</p>
<hr>
<p>In my previous article, I argued that <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">the SDLC is dead</a>. That the ceremony, the process, the human gates — most of it was always waste. AI agents just made it impossible to pretend otherwise.</p>
<p>But killing the process raises an obvious question: <strong>if AI writes the code, runs the tests, generates the docs, and deploys to production — what's left for humans to do?</strong></p>
<p>The numbers should wake you up: junior developer hiring in Big Tech has collapsed 73% in a single year. The "coder" job is disappearing in real time. But the answer to what's left isn't "nothing." It's "everything that actually mattered all along." We just couldn't see it because we were too busy typing semicolons.</p>

<h2>Coding was never the job</h2>
<p>Here's the thing nobody wants to say out loud: <strong>coding was always a translation layer.</strong> A lossy, slow, error-prone translation layer between what you meant and what the machine did.</p>
<p>You had a business rule in your head. You translated it into a programming language. The compiler translated it into machine code. At every step, fidelity was lost. Every bug was a translation error. Every code review was a check on whether the translation was accurate. The entire industry built ceremonies around managing the risk of this translation going wrong.</p>
<p>AI agents short-circuit the entire chain. You describe what you want. The agent produces working code. Not pseudo-code, not a draft — working, tested, deployable code. The translation layer that defined a generation of careers is being compressed to near-zero.</p>
<p>Andrej Karpathy recently built an open-source tool that scores every job in America on AI exposure, using data from all 342 Bureau of Labor Statistics occupations. Software developers score 8-9 out of 10. That's higher than nurses, physicians, and retail workers. The work product is digital, the job can be done from a home office, and the core activity — writing code — is exactly what LLMs are best at.</p>
<blockquote><p>"The profession is being dramatically refactored."<br>— <strong>Andrej Karpathy</strong></p></blockquote>
<p>But here's the nuance that most people miss: that 8-9 score covers the entire "Software Developers" BLS category — coding and engineering lumped together. <strong>My argument is that the coding part of that score drives the exposure. The engineering part — deciding what to build, why, and how the pieces fit together — is precisely what AI cannot do.</strong> The coder is exposed. The engineer is not.</p>

<p>Strip away the coding, and what's left is what senior engineers have always known mattered most: understanding the domain, designing the architecture, making product decisions, and exercising judgment. That's what software development was always supposed to be. We just buried it under ten layers of syntax, frameworks, and process.</p>

<h2>What my team looks like today</h2>
<p>I'm not theorizing. My team is already moving this way — honestly, not completely there yet.</p>
<p>Most of my developers own the full chain: product understanding, code, tests, documentation, and release. They don't hand off to a QA team. They don't ask DevOps to configure the pipeline. They do it all — with AI agents handling the implementation layer.</p>
<p>But I'll be honest: we still have a dedicated PO for interoperability. In healthcare, interoperability — HL7, HPRIM, FHIR, the protocols that connect hospital systems — is such a deep and critical domain that it still requires a specialist who lives and breathes those standards. The business complexity is massive. What we're actively working on is simplifying the analysis layer by structuring all that business context so agents can help more. The role isn't gone yet — it's evolving.</p>
<p>Here's how we handle a feature request today. It comes in — from a user, from field feedback, from a spotted anomaly. The developer picks it up directly. They understand the business need, discuss the edge cases with the PO, describe the solution to the agent with the right architectural context, review the output, validate the tests, and push to production. One person. One morning. Same traceability.</p>
<p>In the old world, that same request went through a PO who writes a story, a developer who implements it, a reviewer who checks it, a QA who validates it, and a release manager who ships it. Five roles. Three weeks minimum. The need was the same. Only the ceremony changed.</p>
<p>My three interns and one apprentice — all final-year engineering students — work the same way. They don't specialize in "Java" or "Angular." They specialize in understanding the problem. The agent handles the rest. They progress faster than any junior I've seen in 14 years because they spend their cognitive energy on the domain, not on syntax battles.</p>
<p>This is not the future. This is a Tuesday.</p>

<h2>The great merge</h2>
<p>The most visible sign of this transformation is the convergence of roles. The walls between developer, product owner, designer, QA, and DevOps are collapsing. Not because the skills don't matter — but because one person can now own the full spectrum. This trend is already concrete in the US — and almost invisible in France, where job postings on APEC and Welcome to the Jungle still read like 2019. That gap is the opportunity.</p>

<h3>Product Engineer — the most concrete new role</h3>
<p>This is already showing up on job boards — around 3-5% of engineering postings in the US, and starting to appear in French scale-ups. A single person combining product vision, technical fluency, and domain expertise — previously split across PM, PO, and developer. Andrew Ng noted that teams are flipping ratios from 1 PM per 4 engineers to the equivalent of 2 PMs per 1 engineer, as AI compresses the implementation gap.</p>
<blockquote><p>"Reflexive AI usage is now a baseline expectation."<br>— <strong>Tobi Lütke</strong>, CEO of Shopify</p></blockquote>
<p>Shopify calls these people "spiky generalists" — deep in one area, but defaulting to the highest-impact work rather than staying in a prescribed role. When an agent can generate any UI component or backend endpoint, the value shifts from implementation to product judgment — understanding users, designing interfaces, making prioritization calls. The designer + frontend developer merge follows naturally.</p>

<h3>Context Engineer — the role that doesn't exist on French job boards yet</h3>
<p>This is what I do every day, and it's the role I'm most excited about — even though as of March 2026, you won't find a single "Context Engineer" posting on a French job site. The title exists at EY in New York. MIT Technology Review named the arc from "vibe coding to context engineering" as the defining shift of 2025. But in France? Zero. That lag is exactly the problem this article is about.</p>
<p>A Context Engineer doesn't write code — they design the information architecture that makes AI agents effective. Architecture decisions, business rules, domain constraints, all structured so the agent has exactly what it needs. It's not prompt engineering — it's systems thinking applied to AI. The companies that create this role first will have a massive advantage.</p>

<h3>Software Orchestrator / Agentic Engineer — the most conceptual, and the furthest out</h3>
<blockquote><p>"The 'Software Engineer' title could vanish by 2026."<br>— <strong>Boris Cherny</strong>, creator of Claude Code at Anthropic</p></blockquote>
<p>Cherny predicts it will be replaced by "Software Orchestrator" — someone who manages swarms of agents rather than writing code. Andrej Karpathy calls it "agentic engineering" — the evolution beyond vibe coding, where you design and manage AI workflows rather than chatting with a model. This is the limit case of role convergence — and the one that sounds most like science fiction. But managing agents toward goals, reviewing their outputs, designing their workflows? This is what I do at 9am on a Tuesday.</p>

<h3>The end of standalone QA</h3>
<p><strong>If your architecture isn't testable, your QA team is compensating for the architecture.</strong> That's the uncomfortable truth behind the QA role as it exists in most organizations. When business rules are well-defined and the system is designed for testability, automated verification was always the right answer — even before AI. AI just made the gap impossible to ignore.</p>
<p>Agents generate comprehensive test suites alongside the code. They cover edge cases systematically. They run in seconds. The scripted manual QA workflow — follow a test plan, click through screens, fill bug reports — has no future. Google and Meta have already eliminated traditional QA roles in favor of SDETs (Software Development Engineers in Test).</p>
<p>What survives — and this matters — is the domain expert who notices when something feels wrong even when all tests pass. Exploratory testing, clinical workflow validation, the person who knows the system deeply enough to spot anomalies: that's judgment, and it's irreplaceable. But it's a skill embedded in every team member, not a separate role sitting behind a handoff.</p>

<h2>The skills that actually matter</h2>
<p>If you're a software professional wondering what to invest in, here's my honest take:</p>
<p><strong>Domain expertise is the new moat.</strong> The person who understands why a workflow has seven states instead of three, why two database tables can't be merged even though they look identical, or why a business rule was implemented that way ten years ago — that person is irreplaceable. No agent has that knowledge. No model was trained on it. It lives in your head, and it's what makes the difference between code that works and code that works in the real world.</p>
<p><strong>Architectural thinking is the new seniority marker.</strong> Clean Architecture, hexagonal boundaries, dependency inversion, system decomposition — these aren't abstract concepts anymore. They're the structure that makes AI agents effective. A well-architected system is one where agents can operate autonomously within clear boundaries. A poorly-architected system is one where every agent output needs manual review because nobody trusts where the code ends up.</p>
<p><strong>Context engineering is the new core skill.</strong> The ability to structure domain knowledge, constraints, and decisions in a format that agents can consume. This is not prompt engineering. Prompt engineering is asking the right question. Context engineering is building the entire knowledge system that makes every question produce the right answer. It's the highest-leverage skill in software development right now.</p>
<p><strong>Product vision is the new differentiator.</strong> When implementation is near-free, the bottleneck shifts entirely to knowing what to build. Understanding user needs, market dynamics, business constraints — and translating that into intent that agents can execute. The developer who also thinks like a product owner is worth ten who just "write code."</p>
<p><strong>Judgment is the last line of defense.</strong> Knowing when the agent is wrong. Knowing when the test covers the obvious case but misses the critical one. Knowing when to ship and when to stop. This comes from experience, from scars, from having been wrong before. No shortcut. No model replacement.</p>
<p>One important nuance: none of this means understanding code no longer matters. You cannot supervise an AI that writes code if you cannot read code. The ability to evaluate what you can no longer efficiently produce yourself — that's a durable, asymmetric advantage. Coding isn't the job. But understanding code is still the foundation.</p>

<h2>What to do about it</h2>
<p>For <strong>individuals</strong>:</p>
<ol>
<li><strong>Stop investing in language expertise.</strong> "5 years of Java" is a depreciating asset. Invest in domain knowledge, architectural patterns, and learning to work with AI agents effectively. This week: list three business rules in your current project that only you know, and aren't documented anywhere. That's your moat. Start writing it down.</li>
<li><strong>Learn to think in products, not features.</strong> Understand the full chain from user need to production. Don't wait for a PO to tell you what to build. This week: attend a user demo or support call and note three things the ticket didn't capture.</li>
<li><strong>Build your context engineering skills.</strong> Practice structuring knowledge for agents. Start with an <a target="_blank" rel="noopener noreferrer" href="https://adr.github.io/">Architecture Decision Record (ADR)</a> for your current project's three biggest constraints. Build a domain glossary. Write a constraint document that an agent can consume. This is the new literacy.</li>
<li><strong>Develop domain depth.</strong> Pick an industry. Learn it deeply. The intersection of tech fluency and domain expertise is where the highest value lives.</li>
</ol>
<p>For <strong>organizations</strong>:</p>
<ol>
<li><strong>Rewrite your job descriptions.</strong> Replace "5 years of Spring Boot" with "deep understanding of healthcare workflows" or "experience designing systems that evolve over decades." Instead of asking candidates to implement a sort algorithm, ask them to decompose a real business workflow into bounded contexts.</li>
<li><strong>Merge roles deliberately.</strong> Don't wait for it to happen organically. Create Product Engineer roles. Give developers product ownership. Let your best people operate across the full spectrum. In France, this means working with HR, the CSE, and the syntec classification grid — it's a 3-5 year transformation, not a quarterly OKR. Start with new hires and voluntary reclassifications.</li>
<li><strong>Invest in testable architecture over standalone QA.</strong> The money you spend on a separate QA team is better spent on architectural fitness functions, automated verification, and CI/CD pipelines. Embed quality judgment in every team member rather than isolating it in a handoff.</li>
<li><strong>Invest in context infrastructure.</strong> Document your domain knowledge, architecture decisions, and business rules in agent-consumable formats. This is the highest-ROI investment in 2026.</li>
</ol>

<p><strong>A word for the experienced developer reading this with a knot in your stomach.</strong> If you have 8 years of Java and you're wondering if your career is over — it's not. Your domain knowledge, your understanding of why things were built the way they were, your instinct for what will break — that's exactly what survives. The transition doesn't start with learning a new title. It starts with naming what you already know that isn't code: the business rules, the architectural decisions, the domain quirks that live in your head and nowhere else. That knowledge is your moat. Start documenting it.</p>
<p><strong>And a word of honesty about the next generation.</strong> My interns progress fast. But if junior hiring collapses 73%, how do the next interns get in? Domain expertise comes from working inside a domain — you can't develop it from the outside. The ladder my team is climbing is being pulled up behind them. I don't have a solution to that. But I refuse to pretend it isn't happening. If you're in a position to hire juniors, do it. Give them real problems, real context, real stakes. The industry needs them more than ever — even if the job descriptions haven't caught up yet.</p>

<blockquote><p>"The knowledge and skill of being a software developer has been commoditised. If everyone can be a software developer, what does that mean if your identity function is that you're a software developer?"<br>— <strong>Geoffrey Huntley</strong></p></blockquote>

<h2>Conclusion</h2>
<p>Coding was never the job. The person whose primary value was translating business intent into programming language syntax — that role is being automated. Fast. Andrej Karpathy scored it 8-9 out of 10 on AI exposure. The market agrees: junior developer hiring in Big Tech has collapsed 73% in a year.</p>
<p>But software development? Software development is finally being born. Freed from the weight of syntax, it's becoming what it always should have been: understanding problems, designing solutions, engineering context, and exercising judgment. The roles are merging. The walls are falling. The person who can think about the product, design the architecture, engineer the context, and validate the output — that person doesn't just survive. They thrive.</p>
<p>My team already works this way. Every person owns the full chain. The interns learn faster than any junior I've ever seen. The quality is higher because the cognitive energy goes to the domain, not to debugging semicolons.</p>
<p>This is not a prediction. This is a Tuesday at my office.</p>

<hr>
<h2>Sources</h2>
<ol>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/karpathy/llm-job-exposure">Andrej Karpathy — LLM Job Exposure Scoring</a> — AI exposure scores for all 342 BLS occupations (software devs: 8-9/10)</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.technologyreview.com/2025/11/05/1127477/from-vibe-coding-to-context-engineering-2025-in-software-development/">MIT Technology Review — From vibe coding to context engineering</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://careers.ey.com/ey/job/New-York-Context-Engineer-Manager-Consulting-Location-OPEN-NY-10001-8604/1370274733/">EY — Context Engineer job posting</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@falkgottlob/the-rise-of-the-ai-product-engineer-redefining-product-development-through-end-to-end-ownership-bedefd22c703">The Rise of the AI Product Engineer (Medium, Falk Gottlob)</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://productschool.com/blog/product-fundamentals/product-management-trends">Product School — Product Management Trends 2026</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/2025/04/07/shopify-ceo-prove-ai-cant-do-jobs-before-asking-for-more-headcount.html">CNBC — Shopify CEO on AI-first hiring</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/tobi/status/1909251946235437514">Tobi Lütke on X — Shopify's "spiky generalists"</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://aidevdayindia.org/blogs/latest-ai-news/anthropic-software-engineer-job-news.html">Boris Cherny (Anthropic) — "Software Engineer" title could vanish by 2026</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/karpathy/status/2004607146781278521">Andrej Karpathy on X — "profession is being dramatically refactored"</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.thehansindia.com/technology/tech-news/karpathy-says-vibe-coding-is-fading-as-agentic-engineering-becomes-the-new-ai-coding-era-1045758">Karpathy: Vibe coding fading, agentic engineering rising</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://designengineer.io/">Design Engineer job board</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.coderabbit.ai/blog/developers-are-dead-long-live-developers">CodeRabbit — Developers are dead. Long live developers.</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.washingtonpost.com/business/2025/03/14/programming-jobs-lost-artificial-intelligence/">Washington Post — A big drop in programmers may be the first sign of job loss to AI</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.reveliolabs.com/news/macro/is-ai-responsible-for-the-rise-in-entry-level-unemployment/">Revelio Labs — Is AI responsible for the rise in entry-level unemployment?</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.pwc.com/us/en/tech-effect/ai-analytics/agentic-ai-workforce-redesign.html">PwC — No more pyramids: Rethinking your workforce for the agentic AI era</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://omnis.partners/the-rise-of-the-full-stack-generalist-the-most-important-hire-for-ai-startups-in-2025/">Omnis Partners — The Rise of the Full-Stack Generalist</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.cio.com/article/4062024/demand-for-junior-developers-softens-as-ai-takes-over.html">CIO.com — Demand for junior developers softens as AI takes over</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://ghuntley.com/real/">Geoffrey Huntley — Software development now costs less than the wage of a minimum wage worker</a></li>
</ol>`
}

const frenchContent: PostContent = {
  title: 'Coder n\'a jamais été le métier',
  description: 'Coder n\'a jamais été le métier. C\'était le goulot d\'étranglement qu\'on a confondu avec l\'artisanat. L\'IA l\'a supprimé. Ce qui reste est ce qui a toujours compté : l\'architecture, l\'expertise métier, la vision produit et le jugement. Un regard sur les nouveaux rôles qui émergent dans le développement logiciel.',
  html: `<p><strong>TL;DR :</strong> Le métier de "codeur" — la personne dont la valeur principale est de traduire une intention en syntaxe — est en train d'être automatisé. Mais le développement logiciel ne meurt pas. Il évolue vers ce qu'il aurait toujours dû être : concevoir des systèmes, comprendre les métiers, structurer le contexte et exercer son jugement. Les rôles de demain émergent déjà. Certaines entreprises recrutent déjà pour eux.</p>
<hr>
<p>Dans mon article précédent, j'ai argumenté que <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">le SDLC est mort</a>. Que la cérémonie, le processus, les validations humaines — la majeure partie a toujours été du gaspillage. Les agents IA ont juste rendu impossible de faire semblant.</p>
<p>Mais tuer le processus soulève une question évidente : <strong>si l'IA écrit le code, exécute les tests, génère la doc et déploie en production — que reste-t-il aux humains ?</strong></p>
<p>Les chiffres devraient vous réveiller : le recrutement de développeurs juniors en Big Tech s'est effondré de 73% en un an. Le métier de "codeur" disparaît en temps réel. Mais la réponse à ce qui reste n'est pas "rien." C'est "tout ce qui comptait vraiment depuis le début." On ne le voyait pas parce qu'on était trop occupés à taper des points-virgules.</p>

<h2>Coder n'a jamais été le métier</h2>
<p>Voici ce que personne ne veut dire tout haut : <strong>coder a toujours été une couche de traduction.</strong> Une couche de traduction lente, imparfaite et source d'erreurs entre ce que vous vouliez dire et ce que la machine faisait.</p>
<p>Vous aviez une règle métier en tête. Vous la traduisiez dans un langage de programmation. Le compilateur la traduisait en code machine. À chaque étape, de la fidélité était perdue. Chaque bug était une erreur de traduction. Chaque revue de code était une vérification de l'exactitude de cette traduction. Toute l'industrie a construit des cérémonies autour de la gestion du risque que cette traduction tourne mal.</p>
<p>Les agents IA court-circuitent toute la chaîne. Vous décrivez ce que vous voulez. L'agent produit du code fonctionnel. Pas du pseudo-code, pas un brouillon — du code fonctionnel, testé, déployable. La couche de traduction qui a défini une génération de carrières est compressée à quasi-zéro.</p>
<p>Andrej Karpathy a récemment construit un outil open-source qui note chaque métier aux États-Unis sur son exposition à l'IA, à partir des 342 professions du Bureau of Labor Statistics. Les développeurs logiciels sont notés 8-9 sur 10. C'est plus haut que les infirmiers, les médecins et les vendeurs. Le produit du travail est numérique, le poste peut s'exercer entièrement à distance, et l'activité principale — écrire du code — est exactement ce que les LLMs font le mieux.</p>
<blockquote><p>"La profession est en train d'être profondément restructurée."<br>— <strong>Andrej Karpathy</strong></p></blockquote>
<p>Mais voici la nuance qui échappe à la plupart : ce score de 8-9 couvre toute la catégorie BLS "Software Developers" — codage et ingénierie confondus. <strong>Mon argument est que c'est la partie codage qui tire l'exposition vers le haut. La partie ingénierie — décider quoi construire, pourquoi, et comment les pièces s'assemblent — est précisément ce que l'IA ne sait pas faire.</strong> Le codeur est exposé. L'ingénieur ne l'est pas.</p>

<p>Enlevez le code, et ce qui reste est ce que les ingénieurs seniors ont toujours su être l'essentiel : comprendre le domaine, concevoir l'architecture, prendre des décisions produit et exercer le jugement. C'est ça que le développement logiciel aurait toujours dû être. On l'a juste enterré sous dix couches de syntaxe, de frameworks et de processus.</p>

<h2>À quoi ressemble mon équipe aujourd'hui</h2>
<p>Je ne théorise pas. Mon équipe est déjà en mouvement — honnêtement, pas encore au bout de la transition.</p>
<p>La plupart de mes développeurs maîtrisent toute la chaîne : compréhension produit, code, tests, documentation et livraison. Ils ne passent pas le relais à une équipe QA. Ils ne demandent pas au DevOps de configurer le pipeline. Ils font tout avec les agents IA.</p>
<p>Mais je vais être honnête : on a encore un PO dédié pour l'interopérabilité. En santé, l'interopérabilité — HL7, HPRIM, FHIR, les protocoles qui connectent les systèmes hospitaliers — est un domaine tellement profond et critique qu'il nécessite encore un spécialiste qui vit et respire ces standards. La complexité métier est massive. Nous travaillons activement à simplifier la couche d'analyse en structurant tout ce contexte métier pour que les agents puissent aider davantage. Le rôle n'a pas disparu — il évolue.</p>
<p>Voici comment on traite une demande de fonctionnalité aujourd'hui. Elle arrive — d'un utilisateur, d'un retour terrain, d'une anomalie repérée. Le développeur la prend en charge directement. Il comprend le besoin métier, discute des cas limites avec le PO, décrit la solution à l'agent avec le bon contexte architectural, valide le résultat, vérifie les tests, et pousse en production. Une personne. Une matinée. Même traçabilité.</p>
<p>Dans l'ancien monde, cette même demande passait par un PO qui écrit une story, un développeur qui implémente, un relecteur qui valide, un QA qui vérifie, et un responsable de mise en production qui livre. Cinq rôles. Trois semaines minimum. Le besoin était le même. Seule la cérémonie changeait.</p>
<p>Mes trois stagiaires et mon alternant — tous en dernière année d'école d'ingénieur — travaillent de la même façon. Ils ne se spécialisent pas en "Java" ou "Angular." Ils se spécialisent dans la compréhension du problème. L'agent gère le reste. Ils progressent plus vite que n'importe quel junior que j'ai vu en 14 ans parce qu'ils investissent leur énergie cognitive dans le domaine, pas dans des batailles de syntaxe.</p>
<p>Ce n'est pas le futur. C'est un mardi.</p>

<h2>La grande fusion</h2>
<p>Le signe le plus visible de cette transformation, c'est la convergence des rôles. Les murs entre développeur, product owner, designer, QA et DevOps s'effondrent. Pas parce que les compétences ne comptent plus — mais parce qu'une seule personne peut désormais couvrir tout le spectre. Cette tendance est déjà concrète aux US — et quasiment invisible en France, où les offres sur APEC et Welcome to the Jungle semblent encore dater de 2019. C'est précisément là qu'est le levier.</p>

<h3>Product Engineer — le nouveau rôle le plus concret</h3>
<p>Il apparaît déjà sur les sites d'emploi — environ 3-5% des offres d'ingénierie aux US, et il commence à émerger dans les scale-ups françaises. Une personne unique combinant vision produit, maîtrise technique et expertise métier — auparavant répartis entre PM, PO et développeur. Andrew Ng a noté que les équipes inversent les ratios de 1 PM pour 4 ingénieurs vers l'équivalent de 2 PMs pour 1 ingénieur, à mesure que l'IA réduit l'écart d'implémentation.</p>
<blockquote><p>"L'utilisation réflexe de l'IA est désormais une attente de base."<br>— <strong>Tobi Lütke</strong>, PDG de Shopify</p></blockquote>
<p>Shopify appelle ces profils des "spiky generalists" — profonds dans un domaine, mais naturellement tournés vers les tâches à plus forte valeur plutôt que confinés dans un rôle prescrit. Quand un agent peut générer n'importe quel composant UI ou endpoint backend, la valeur se déplace de l'implémentation vers le jugement produit — comprendre les utilisateurs, concevoir les interfaces, prendre les décisions de priorisation. La fusion designer + développeur frontend suit naturellement.</p>

<h3>Context Engineer — le rôle qui n'existe pas encore sur les sites d'emploi français</h3>
<p>C'est ce que je fais chaque jour, et c'est le rôle qui m'enthousiasme le plus — même si en mars 2026, vous ne trouverez pas une seule offre de "Context Engineer" sur un site d'emploi français. Le titre existe chez EY à New York. Le MIT Technology Review a nommé l'arc du "vibe coding au context engineering" comme le tournant majeur de 2025. Mais en France ? Zéro. Ce retard est exactement le problème dont cet article parle.</p>
<p>Un Context Engineer n'écrit pas de code — il conçoit l'architecture d'information qui rend les agents IA efficaces. Décisions architecturales, règles métier, contraintes domaine, le tout structuré pour que l'agent ait exactement ce dont il a besoin. Ce n'est pas du prompt engineering — c'est de la pensée système appliquée à l'IA. Les entreprises qui créeront ce rôle en premier auront un avantage massif.</p>

<h3>Software Orchestrator / Agentic Engineer — le plus conceptuel, et le plus lointain</h3>
<blockquote><p>"Le titre 'Software Engineer' pourrait disparaître d'ici 2026."<br>— <strong>Boris Cherny</strong>, créateur de Claude Code chez Anthropic</p></blockquote>
<p>Cherny prédit qu'il sera remplacé par "Software Orchestrator" — quelqu'un qui gère des essaims d'agents plutôt que d'écrire du code. Andrej Karpathy appelle ça l'"agentic engineering" — l'évolution au-delà du vibe coding, où l'on conçoit et gère des workflows IA plutôt que de discuter avec un modèle. C'est le cas limite de la convergence des rôles — et celui qui ressemble le plus à de la science-fiction. Mais gérer des agents vers des objectifs, valider leurs résultats, concevoir leurs workflows ? C'est ce que je fais à 9h un mardi matin.</p>

<h3>La fin du QA en tant que rôle autonome</h3>
<p><strong>Si votre architecture n'est pas testable, votre équipe QA compense l'architecture.</strong> C'est la vérité inconfortable derrière le rôle de QA tel qu'il existe dans la plupart des organisations. Quand les règles métier sont bien définies et le système conçu pour la testabilité, la vérification automatisée a toujours été la bonne réponse — même avant l'IA. L'IA a juste rendu l'écart impossible à ignorer.</p>
<p>Les agents génèrent des suites de tests complètes en même temps que le code. Ils couvrent les cas limites systématiquement. Ils s'exécutent en secondes. Le workflow de QA manuelle scriptée — suivre un plan de test, cliquer sur des écrans, remplir des rapports de bugs — n'a pas d'avenir. Google et Meta ont déjà éliminé les rôles de QA traditionnels au profit des SDETs (Software Development Engineers in Test).</p>
<p>Ce qui survit — et c'est important — c'est l'expert métier qui remarque quand quelque chose ne va pas même quand tous les tests passent. Le test exploratoire, la validation de workflows cliniques, la personne qui connaît le système assez bien pour détecter les anomalies : c'est du jugement, et c'est irremplaçable. Mais c'est une compétence intégrée dans chaque membre de l'équipe, pas un rôle séparé derrière un passage de relais.</p>

<h2>Les compétences qui comptent vraiment</h2>
<p>Si vous êtes un professionnel du logiciel et que vous vous demandez sur quoi investir, voici mon point de vue sans détour :</p>
<p><strong>L'expertise métier est le nouveau rempart.</strong> La personne qui comprend pourquoi un workflow a sept états au lieu de trois, pourquoi deux tables ne peuvent pas être fusionnées même si elles semblent identiques, ou pourquoi une règle de gestion a été implémentée de cette façon il y a dix ans — cette personne est irremplaçable. Aucun agent n'a cette connaissance. Aucun modèle n'a été entraîné dessus. Elle vit dans votre tête, et c'est ce qui fait la différence entre du code qui fonctionne et du code qui fonctionne dans le monde réel.</p>
<p><strong>La pensée architecturale est le nouveau marqueur de séniorité.</strong> Clean Architecture, frontières hexagonales, inversion de dépendances, décomposition système — ce ne sont plus des concepts abstraits. C'est la structure qui rend les agents IA efficaces. Un système bien architecturé est un système où les agents peuvent opérer de manière autonome dans des frontières claires. Un système mal architecturé est un système où chaque output d'agent nécessite une revue manuelle parce que personne ne fait confiance à l'endroit où le code atterrit.</p>
<p><strong>L'ingénierie de contexte est la nouvelle compétence fondamentale.</strong> La capacité à structurer la connaissance métier, les contraintes et les décisions dans un format que les agents peuvent consommer. Ce n'est pas du prompt engineering. Le prompt engineering, c'est poser la bonne question. L'ingénierie de contexte, c'est construire tout le système de connaissance qui fait que chaque question produit la bonne réponse. C'est la compétence à plus fort levier dans le développement logiciel aujourd'hui.</p>
<p><strong>La vision produit est le nouveau différenciateur.</strong> Quand l'implémentation est quasi-gratuite, le goulot d'étranglement se déplace entièrement vers savoir quoi construire. Comprendre les besoins utilisateurs, les dynamiques de marché, les contraintes business — et traduire ça en intention que les agents peuvent exécuter. Le développeur qui pense aussi comme un product owner vaut dix développeurs qui "écrivent du code."</p>
<p><strong>Le jugement est la dernière ligne de défense.</strong> Savoir quand l'agent a tort. Savoir quand le test couvre le cas évident mais rate le cas critique. Savoir quand livrer et quand s'arrêter. Ça vient de l'expérience, des cicatrices, d'avoir eu tort avant. Pas de raccourci. Pas de remplacement par un modèle.</p>
<p>Une nuance importante : rien de tout cela ne signifie que comprendre le code n'a plus de valeur. On ne peut pas superviser une IA qui écrit du code si on ne sait pas lire du code. La capacité à évaluer ce qu'on ne produit plus soi-même efficacement — c'est un avantage durable et asymétrique. Coder n'est pas le métier. Mais comprendre le code reste le socle.</p>

<h2>Que faire concrètement</h2>
<p>Pour les <strong>individus</strong> :</p>
<ol>
<li><strong>Arrêtez d'investir dans l'expertise d'un langage.</strong> "5 ans de Java" est un actif qui se déprécie. Investissez dans la connaissance métier, les patterns architecturaux et l'apprentissage du travail avec les agents IA. Cette semaine : listez trois règles métier de votre projet actuel que vous seul connaissez et qui ne sont documentées nulle part. C'est votre valeur irremplaçable. Commencez à les écrire.</li>
<li><strong>Apprenez à penser en produits, pas en fonctionnalités.</strong> Comprenez toute la chaîne du besoin utilisateur à la production. N'attendez pas qu'un PO vous dise quoi construire. Cette semaine : assistez à une démo utilisateur ou un appel support et notez trois choses que le ticket ne capturait pas.</li>
<li><strong>Développez vos compétences en ingénierie de contexte.</strong> Entraînez-vous à structurer la connaissance pour les agents. Commencez par un <a target="_blank" rel="noopener noreferrer" href="https://adr.github.io/">Architecture Decision Record (ADR)</a> sur les trois plus grosses contraintes de votre projet actuel. Construisez un glossaire métier. Rédigez un document de contraintes qu'un agent peut consommer. C'est la nouvelle littératie.</li>
<li><strong>Creusez un domaine.</strong> Choisissez une industrie. Apprenez-la en profondeur. L'intersection de la maîtrise technique et de l'expertise métier, c'est là que la plus haute valeur se trouve.</li>
</ol>
<p>Pour les <strong>organisations</strong> :</p>
<ol>
<li><strong>Réécrivez vos fiches de poste.</strong> Remplacez "5 ans de Spring Boot" par "compréhension approfondie des workflows hospitaliers" ou "expérience dans la conception de systèmes qui évoluent sur des décennies." Au lieu de demander aux candidats d'implémenter un algorithme de tri, demandez-leur de décomposer un workflow métier réel en contextes délimités (<em>bounded contexts</em>).</li>
<li><strong>Fusionnez les rôles délibérément.</strong> N'attendez pas que ça se fasse tout seul. Créez des postes de Product Engineer. Donnez aux développeurs la propriété produit. Laissez vos meilleurs talents opérer sur tout le spectre. En France, ça implique de travailler avec les RH, le CSE et la grille de classification syntec — c'est une transformation sur 3-5 ans, pas un OKR trimestriel. Commencez par les nouvelles embauches et les reclassifications volontaires.</li>
<li><strong>Investissez dans l'architecture testable plutôt que dans la QA autonome.</strong> L'argent que vous dépensez pour une équipe QA séparée est mieux investi dans des fonctions de fitness architecturale, la vérification automatisée et des pipelines CI/CD. Intégrez le jugement qualité dans chaque membre de l'équipe plutôt que de l'isoler dans un passage de relais.</li>
<li><strong>Investissez dans l'infrastructure de contexte.</strong> Documentez vos connaissances métier, décisions d'architecture et règles de gestion dans des formats consommables par les agents. C'est l'investissement au meilleur ROI en 2026.</li>
</ol>

<p><strong>Un mot pour le développeur expérimenté qui lit ceci avec un nœud au ventre.</strong> Si vous avez 8 ans de Java et que vous vous demandez si votre carrière est finie — elle ne l'est pas. Votre connaissance métier, votre compréhension de pourquoi les choses ont été construites ainsi, votre instinct pour ce qui va casser — c'est exactement ce qui survit. La transition ne commence pas par apprendre un nouveau titre de poste. Elle commence par nommer ce que vous savez déjà qui n'est pas du code : les règles métier, les décisions d'architecture, les particularités du domaine qui vivent dans votre tête et nulle part ailleurs. Cette connaissance est votre avantage. Commencez à la documenter.</p>
<p><strong>Et un mot d'honnêteté sur la génération suivante.</strong> Mes stagiaires progressent vite. Mais si le recrutement junior s'effondre de 73%, comment les prochains stagiaires entrent-ils ? L'expertise métier se développe en travaillant dans un domaine — on ne peut pas la construire de l'extérieur. On retire l'échelle derrière eux. Je n'ai pas de solution à ça. Mais je refuse de faire semblant que ça n'arrive pas. Si vous êtes en position de recruter des juniors, faites-le. Donnez-leur de vrais problèmes, du vrai contexte, de vrais enjeux. L'industrie a plus que jamais besoin d'eux — même si les offres d'emploi n'ont pas encore évolué.</p>

<blockquote><p>"La connaissance et la compétence d'être développeur logiciel a été banalisée. Si tout le monde peut être développeur, qu'est-ce que ça veut dire quand vous vous définissez comme développeur ?"<br>— <strong>Geoffrey Huntley</strong></p></blockquote>

<h2>Conclusion</h2>
<p>Coder n'a jamais été le métier. La personne dont la valeur principale était de traduire une intention métier en syntaxe de langage de programmation — ce rôle est en train d'être automatisé. Vite. Andrej Karpathy l'a noté 8-9 sur 10 en exposition à l'IA. Le marché est d'accord : le recrutement junior en Big Tech s'est effondré de 73% en un an.</p>
<p>Mais le développement logiciel ? Le développement logiciel est enfin en train de naître. Libéré du poids de la syntaxe, il devient ce qu'il aurait toujours dû être : comprendre les problèmes, concevoir des solutions, structurer le contexte et exercer le jugement. Les rôles fusionnent. Les murs tombent. La personne qui peut penser le produit, concevoir l'architecture, structurer le contexte et valider le résultat — cette personne ne se contente pas de survivre. Elle prospère.</p>
<p>Mon équipe fonctionne déjà comme ça. Chaque personne maîtrise toute la chaîne. Les stagiaires apprennent plus vite que n'importe quel junior que j'ai vu. La qualité est meilleure parce que l'énergie cognitive va au domaine, pas au débogage de points-virgules.</p>
<p>Ce n'est pas une prédiction. C'est un mardi à mon bureau.</p>

<hr>
<h2>Sources</h2>
<ol>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/karpathy/llm-job-exposure">Andrej Karpathy — LLM Job Exposure Scoring</a> — scores d'exposition IA pour les 342 professions BLS (développeurs : 8-9/10)</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.technologyreview.com/2025/11/05/1127477/from-vibe-coding-to-context-engineering-2025-in-software-development/">MIT Technology Review — Du vibe coding au context engineering</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://careers.ey.com/ey/job/New-York-Context-Engineer-Manager-Consulting-Location-OPEN-NY-10001-8604/1370274733/">EY — Offre d'emploi Context Engineer</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@falkgottlob/the-rise-of-the-ai-product-engineer-redefining-product-development-through-end-to-end-ownership-bedefd22c703">The Rise of the AI Product Engineer (Medium, Falk Gottlob)</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://productschool.com/blog/product-fundamentals/product-management-trends">Product School — Tendances Product Management 2026</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/2025/04/07/shopify-ceo-prove-ai-cant-do-jobs-before-asking-for-more-headcount.html">CNBC — Le PDG de Shopify sur le recrutement AI-first</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/tobi/status/1909251946235437514">Tobi Lütke sur X — Les "spiky generalists" de Shopify</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://aidevdayindia.org/blogs/latest-ai-news/anthropic-software-engineer-job-news.html">Boris Cherny (Anthropic) — Le titre "Software Engineer" pourrait disparaître d'ici 2026</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/karpathy/status/2004607146781278521">Andrej Karpathy sur X — "La profession est en train d'être profondément restructurée"</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.thehansindia.com/technology/tech-news/karpathy-says-vibe-coding-is-fading-as-agentic-engineering-becomes-the-new-ai-coding-era-1045758">Karpathy : le vibe coding s'efface, l'agentic engineering monte</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://designengineer.io/">Design Engineer — site d'offres d'emploi dédié</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.coderabbit.ai/blog/developers-are-dead-long-live-developers">CodeRabbit — Developers are dead. Long live developers.</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.washingtonpost.com/business/2025/03/14/programming-jobs-lost-artificial-intelligence/">Washington Post — Une forte baisse des programmeurs, premier signe de pertes d'emplois liées à l'IA</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.reveliolabs.com/news/macro/is-ai-responsible-for-the-rise-in-entry-level-unemployment/">Revelio Labs — L'IA est-elle responsable de la hausse du chômage junior ?</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.pwc.com/us/en/tech-effect/ai-analytics/agentic-ai-workforce-redesign.html">PwC — No more pyramids: Rethinking your workforce for the agentic AI era</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://omnis.partners/the-rise-of-the-full-stack-generalist-the-most-important-hire-for-ai-startups-in-2025/">Omnis Partners — The Rise of the Full-Stack Generalist</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.cio.com/article/4062024/demand-for-junior-developers-softens-as-ai-takes-over.html">CIO.com — La demande de développeurs juniors faiblit face à l'IA</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://ghuntley.com/real/">Geoffrey Huntley — Le développement logiciel coûte désormais moins que le salaire minimum</a></li>
</ol>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

