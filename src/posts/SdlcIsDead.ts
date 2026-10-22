import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'sdlc-is-dead',
  date: '2026-03-14',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'The SDLC Is Dead. You Just Haven\'t Noticed Yet.',
  description: 'A point of view on the state of software development in 2026. Why the SDLC was always broken, why AI agents are making it impossible to ignore, and why European tech needs to wake up.',
  html: `<p><strong>TL;DR:</strong> The US has 40 AI foundation models. China has 15. Europe has 3. While American teams ship with AI agents, most European organizations are still debating Agile vs waterfall. The SDLC was always broken — AI just made it impossible to pretend otherwise. This is a wake-up call from inside a French enterprise.</p>
<hr>
<p>Yes, AI is just a tool. But it's the most disruptive tool we've ever had. And this is just the beginning.</p>
<p>For months now, I've been reading articles about AI. On LinkedIn, on X, on tech blogs, on every corner of the internet. AI and disruption. AI and regression. AI and quality collapse. AI and slop. AI is killing software. AI is making us dumber. AI is producing garbage code. AI is the end of craftsmanship.</p>
<p>I've read hundreds of them. And I'm telling you: <strong>I disagree with most of them, in all my being.</strong></p>
<p>Not because the concerns aren't real. Some are. But because the overwhelming narrative is fear disguised as wisdom. People clinging to the way things were, dressing up resistance as rigor, calling inertia "quality standards." The loudest voices are the ones with the most to lose - the process owners, the methodology consultants, the people whose careers are built on the very ceremony that AI is making obsolete.</p>
<p>So here it is. My point of view. Not a reaction to one article, but to all of them. This is how I see the software development job in 2026, and why this year is the welcome disruption I've been secretly hoping for.</p>
<p>Boris Tane recently wrote that <a target="_blank" rel="noopener noreferrer" href="https://boristane.com/blog/the-software-development-lifecycle-is-dead/">the software development lifecycle is dead</a>. AI agents didn't make it faster, they killed it. He's right. But I want to be clear: <strong>I didn't need AI to tell me the SDLC was broken.</strong> I've been saying it for years.</p>
<p>What AI agents are doing now isn't revealing a new truth. They're making an old truth impossible to ignore: <strong>most of the process was always waste.</strong> And nowhere is this more visible than in European industry - especially in France - where organizations are still operating like it's 2015.</p>

<h2>Who I am and why this matters</h2>
<p>I'm a Tech Lead Manager. I've been working in large enterprises since 2012, from banking to healthcare. I lead a team of developers, working on a 30-year-old legacy system and its migration to a modern ecosystem. A disclaimer: I'm not an AI expert. I'm a senior developer who went all-in on AI a year ago. Five months ago, I wouldn't have written this article. The recent wave of LLM models completely rewrote how I think about this job.</p>
<p>I've spent over a decade in this world. A world where a bug doesn't break a dashboard, it breaks a critical business workflow. A world where people will tell you that you absolutely need the full SDLC ceremony because the stakes are too high.</p>
<p>And I'm telling you: the SDLC was always the wrong answer to the right question.</p>

<h2>Europe's mammoths are sleepwalking into irrelevance</h2>
<p>Here's what I see from the inside of French industry: <strong>nothing has changed.</strong></p>
<p>The same organizations. The same processes. The same job postings. The same management structures. Robust? Sure. The way a mammoth is robust - massive, resilient, perfectly adapted to a world that no longer exists.</p>
<p>American startups are shipping products with 3-person teams and AI agents. Chinese companies are iterating at a pace that makes Silicon Valley nervous. And in France? We're still debating whether to adopt Agile or stay waterfall. We're still writing 200-page specifications - and if they even exist, they're most likely outdated and lost somewhere in a filesystem on a Windows Server 2008. We're still hiring based on how many years of Java someone has on their CV.</p>
<p>The numbers tell the story: the US has produced 40 AI foundation models, China 15, and all of Europe combined just 3. The EU holds 5% of global AI compute versus 74% for the US. European worker productivity has dropped to 76% of American levels. Meanwhile, Big Tech junior hiring has collapsed from 32% of new hires to just 7%, with entry-level positions down 73% in the past year alone.</p>
<p>The European software industry - and the French one in particular - has always been conservative. Heavy processes, heavy hierarchies, heavy certifications. There was a time when that solidity was an advantage. That time is over. <strong>2026 is the disruption year.</strong> Not next year. Not in five years. Now.</p>
<p>The organizations that don't react will be outpaced by teams a tenth their size, running circles around them with AI agents, shipping in days what used to take quarters. The mammoth doesn't need to run faster. It needs to evolve. And it's not evolving.</p>
<p>France has world-class engineers, deep domain expertise, and serious industries. What it lacks is the courage to throw away the processes that no longer serve it. We built our reputation on rigor and robustness.</p>
<blockquote><p>"Rigor without speed is just slowness. And robustness without adaptability is just weight. The mammoth was robust too. Look where that got it."</p></blockquote>

<h2>You're still hiring for the wrong skills</h2>
<p>Open any job board in France right now. Look at the tech postings. What do you see?</p>
<ul>
<li>"5 years of Java required"</li>
<li>"Expert in Angular, minimum 3 years"</li>
<li>"Strong knowledge of Spring Boot"</li>
<li>"Must know React Native"</li>
</ul>
<p>In 2026. With AI agents that write production-quality code in any language, any framework, in minutes.</p>
<blockquote><p>"Recruiting on programming language expertise is like recruiting drivers based on their knowledge of horse breeds."</p></blockquote>
<p>The vehicle changed. The skill that matters changed with it.</p>
<p>An AI agent doesn't care if you've spent 10 years writing Java or 2 months. It writes Java. It writes TypeScript. It writes Python. It writes whatever you need, often better than the "expert" you're trying to hire, because it's seen more codebases than any human ever will.</p>
<p>So what should you hire for? The things agents can't do:</p>
<ul>
<li><strong>Domain expertise.</strong> Understanding the problem space. Knowing the business rules that no specification fully captures. Knowing why a workflow has seven states instead of three. This is what gives agents the right context to produce the right code.</li>
<li><strong>Architectural thinking.</strong> Clean Architecture, hexagonal boundaries, dependency rules, system design - the ability to structure systems so they remain maintainable, testable, and evolvable. Agents need to know where to put things. Someone has to define that.</li>
<li><strong>Context engineering.</strong> The new core skill. The ability to give agents the right constraints, the right decisions, the right domain knowledge so they produce what you actually need. This is what separates a developer who uses AI from a developer who is multiplied by AI.</li>
<li><strong>Judgment.</strong> Knowing when the agent is wrong. Knowing when the architecture doesn't fit. Knowing when the test covers the wrong edge case. Knowing when to ship and when to stop.</li>
</ul>
<p>None of these are programming languages. None of these show up on a French job posting. And that's the problem.</p>
<p>But it goes further than rewriting job descriptions. The roles themselves need to be rethought. A developer, a product owner, and a designer can now be the same person. When AI handles the implementation, one person with domain knowledge and product vision can design, build, and ship. Shopify's CEO now requires teams to prove AI can't do a job before requesting new headcount. Anthropic's CEO predicts the first billion-dollar one-person company by 2026. A quarter of Y Combinator's current batch has 95% of their code written by AI. PwC calls it the "rise of the generalist" — the traditional workforce pyramid is collapsing into small teams of AI-augmented generalists who own the full chain from idea to production.</p>

<h2>2026: the year everything breaks</h2>
<p>This isn't gradual. The disruption is happening now, and it's happening fast. In the first two weeks of March 2026 alone: ServiceNow CEO Bill McDermott said on CNBC that graduate unemployment "could easily go into the mid-30s." Meta, after crossing $200B in annual revenue, reportedly began planning layoffs affecting up to 20% of its workforce to fund AI infrastructure. Naval Ravikant declared that "pure software is rapidly becoming un-investable." A random guy in Florida sold his entire house in 5 days using ChatGPT - no real estate agent, no commission, no experience. Anthropic doubled its AI usage limits and expanded its 1M context window to general availability. Two weeks. Not two quarters.</p>
<p>For <strong>employees</strong>: the developer who refuses to work with AI agents will be significantly outproduced by the one who does. McKinsey found that teams with full AI adoption saw productivity gains exceeding 110%. Not because the others are worse engineers. Because the tools changed and they didn't. Expertise in a programming language used to be a career. In 2026, it's a commodity. The agents commoditized it. What's left is everything above the code: domain knowledge, architectural vision, context engineering, judgment. If you want to see which tasks are already being automated in your job, look at the <a target="_blank" rel="noopener noreferrer" href="https://jobsdata.ai/task-visualizer">Job Task Visualizer</a> - AI doesn't replace jobs wholesale, it eats them task by task. And if you're still not sure, check <a target="_blank" rel="noopener noreferrer" href="https://www.ismyjobscrewed.com/">Is My Job Screwed?</a> for a personalized risk assessment.</p>
<p>For <strong>organizations</strong>: the company that still runs two-week sprints, three-day PR reviews, manual QA cycles, and quarterly release trains will ship in a quarter what an AI-native team ships in a week.</p>
<blockquote><p>"That's not a productivity gap. That's a survival gap. Your competitors aren't optimizing their process. They're eliminating it."</p></blockquote>
<p>For <strong>the French tech ecosystem</strong>: we have world-class engineers. We have deep domain expertise in healthcare, aerospace, finance, energy. We have talent. What we don't have is the organizational agility to unleash that talent. We're strangling our best people with processes designed for a world that doesn't exist anymore, and then wondering why we're falling behind.</p>
<p><strong>It's time to react.</strong> Not next quarter. Not after the next reorganization. Now.</p>

<h2>Ship fast or ship never</h2>
<p>Here's what drives me: <strong>impact.</strong></p>
<p>I want to push to production as fast as possible. Not because I'm reckless. Because code sitting in a branch, waiting in a review queue, stuck behind a release train - that code has zero value. It's inventory. And inventory is waste.</p>
<p>The only code that matters is the code running in production, solving real problems for real users. Everything between your intent and production is friction. The job is to minimize that friction.</p>
<p>Before AI agents, "ship fast" was a cultural aspiration. You'd say it in team meetings, then spend three days waiting for a PR review. Now, with agents generating code, tests, and deployment configs in one loop, shipping fast is the default. The question isn't "how do we ship faster?" anymore. It's "what's still in the way?"</p>
<p>The answer, most of the time, is process. Process, and organizations too afraid to let go of it.</p>

<h2>Humans have no place in the loop</h2>
<p>I'll say something that makes a lot of people uncomfortable: <strong>humans should not be testing software. They shouldn't be writing documentation either. Or configuring CI/CD pipelines. Or running deployments. Or even leading most meetings.</strong></p>
<p>And I'm not even talking about coding - that's already handled by agents.</p>
<p>Manual QA is a relic. A human clicking through screens, following test scripts, filing bug reports - that entire workflow is slower, less reliable, and less thorough than automated tests. Every time. Without exception. The same goes for documentation that no one reads because it's always outdated - agents generate it from the code, always in sync, always accurate. CI/CD pipelines? Agents configure, maintain, and optimize them. Deployments? Automated end to end. Meetings? Sub-agents with personas debate, challenge, and produce better decisions than most rooms full of humans.</p>
<p>If your tests can't be automated, your architecture is wrong. That's not an AI opinion. That's a software engineering opinion I've held for years. Testability is a design property. If you need a human to verify your software works, you've built it wrong.</p>
<p>Here's what 2026 looks like: everything is generated alongside the code, everything is automated, everything runs in CI/CD. Faster and more reliable than any human. The agent writes the code, the tests, the docs, the deployment configs - together. Not as an afterthought. Not in separate phases. The entire chain from intent to production is one continuous, automated flow.</p>
<p>Does this happen overnight? No. Building this level of automation takes time, effort, and discipline. It's actually my main focus this year for my applications. But that's the point - this is where you should be investing your energy. Not in manual processes, not in human gates, but in building the automated machinery that lets you ship with confidence.</p>

<h2>Your domain isn't special (and that's the point)</h2>
<p>People will tell you their industry is different. That you can't move fast with sensitive data. That compliance requires the full SDLC ceremony.</p>
<p>They're confusing the <strong>requirement</strong> with the <strong>implementation.</strong></p>
<p>Compliance demands <strong>traceability</strong>, not ceremony. It demands that you can prove what changed, why, and that it was verified. It never demanded story points. It never demanded three-day PR reviews. It never demanded manual QA sign-off.</p>
<p>An agent that generates code, writes tests, runs them, checks types, validates against architectural constraints, and logs every step provides <strong>more traceability</strong> than a human developer who reviewed a PR half-asleep on a Friday afternoon and a QA tester who clicked through 60% of the test script before lunch. We just can't accept that yet, because the ceremony felt safe.</p>
<p>Yes, there are real regulatory constraints - GDPR, the EU AI Act, industry-specific compliance. These are not excuses, they are requirements. And automated pipelines with full audit trails satisfy them better than a human who forgot to update the change log. The regulation demands proof. Agents provide it.</p>
<p>If the SDLC can die in the most regulated, conservative, risk-averse corners of the software industry, it can die anywhere. The question isn't whether your domain is too critical for this. It's whether you're honest enough to admit the ceremony was never what kept it safe.</p>

<h2>What I actually do now</h2>
<p>My role has fundamentally changed. I used to spend my days in the process machine:</p>
<ul>
<li>Writing and refining tickets nobody read twice</li>
<li>Sitting in sprint planning, pretending estimation works</li>
<li>Reviewing PRs line by line</li>
<li>Unblocking developers stuck on context they didn't have</li>
<li>Waiting for QA to manually validate what automated tests already covered</li>
</ul>
<p>Now I spend my days on things that actually matter. Here is what a typical morning looks like: a bug report comes in. In the old world, this is a multi-week odyssey — ticket, triage, estimation, assignment, development, code review, QA, release train. Now, I describe the problem to the agent. I point it to the right module, the architectural constraints, the business rules. Minutes later: a fix, new tests, a passing CI pipeline. In production before lunch. Same traceability. Better test coverage. No ceremony.</p>
<p><strong>Context engineering.</strong> Building the proper context for each application so agents can perfectly understand what we tell them to do. Architecture decisions, constraints, domain knowledge, business rules - all structured so the agent has everything it needs to produce the right code. The quality of what agents build is directly proportional to the quality of context you give them.</p>
<p><strong>Supervision and workflows.</strong> We build the supervision layer. The coding, the review, the testing, the release - that's handled by the tools, the agents. We design the workflows, set the guardrails, define what "done" looks like. Then we let the agents execute.</p>
<p><strong>Even meetings.</strong> We're experimenting with meetings handled by multiple sub-agents with personas - domain experts, architects, product owners - that debate, challenge each other, and produce structured reports and decision proposals. Early results are promising: the output is often more thorough and less biased than what a room full of distracted humans produces in an hour.</p>
<p><strong>Pushing to production.</strong> The fastest path from intent to impact. That's the goal. Always.</p>

<h2>The maker knows</h2>
<p>I'm a maker. Evenings and weekends, I experiment with AI - trying to keep up with the crazy things that come out every single day. We've never had this much innovation at once. Agents and developer brains combined are producing at lightning-fast velocity, and the stream of new tools, new models, new possibilities never stops. Just look at the fastest growing GitHub projects this month: autonomous agents hitting 122K stars, agentic skill frameworks, full AI toolkits, open-source SuperAgents by ByteDance - and repos teaching you how to build your own Claude Code clone from scratch. Next month's list will look completely different. That's the pace we're talking about.</p>
<p>Makers don't follow an SDLC. You have an idea. You prototype. You test it - not by writing a test plan, but by plugging it in and seeing if it works. You iterate. The feedback loop is immediate. You don't write a ticket before soldering a sensor to a breadboard. You don't estimate how many story points it takes to wire a relay. You don't ask a QA team to verify your LED strip works. You plug it in. It lights up or it doesn't. You fix it or you try something else.</p>
<p>What AI agents are bringing to professional software development is <strong>the maker's feedback loop</strong>. Intent, build, test, iterate, ship. No ceremony. No handoffs. No waiting. No manual QA. Just building and shipping.</p>
<p><strong>I've always built things this way. The industry is finally catching up.</strong></p>

<h2>What survives</h2>
<p>Not much.</p>
<p><strong>Domain knowledge</strong> survives. The agent needs someone who understands the problem space. Legacy systems are deep. Business domains are deep. The intersection of both is a maze that no model has fully mapped.</p>
<p><strong>Architectural intent</strong> survives. Clean Architecture isn't dead. The hexagonal boundaries, the dependency rules, the separation of domain from infrastructure - these still matter. But they're expressed as context for the agent, not as diagrams on a whiteboard that get stale in a week.</p>
<p><strong>Automated verification</strong> survives and becomes everything. Tests, type checks, security scans, behavioral diffs, architectural fitness functions - the entire safety net is code, not people. Code checking code.</p>
<p><strong>Observability</strong> survives and becomes the foundation. When code ships continuously, your monitoring stack is your last line of defense. We're moving from "review before ship" to "ship and verify continuously."</p>
<blockquote><p>"Everything else is ceremony. And ceremony is what you do when you don't trust your tools, your architecture, or your automated checks. The tools got good enough. Time to let go."</p></blockquote>
<p>And what about juniors? People will tell you that removing process kills the apprenticeship pipeline. I see the opposite. I currently have three interns and one apprentice, all in their final year of engineering school. The ease with which they pick up AI tools makes them immediately competitive. Onboarding is simplified — they ask their agent questions, it has the business context, the domain specifics, the architectural rules. They progress at a speed I have never seen before in 14 years. AI doesn't kill the junior pipeline. It accelerates it. The juniors who learn to work with agents develop domain knowledge and judgment faster, not slower — because they spend less time fighting syntax and more time understanding the problem.</p>

<h2>What to do Monday morning</h2>
<p>If any of this resonates, here is where to start:</p>
<ol>
<li><strong>Measure your cycle time.</strong> How long from intent to production? Identify every human gate in that chain.</li>
<li><strong>Invest in automated verification.</strong> Tests, type checks, architectural fitness functions, audit trails. Build the safety net before you remove the human gates.</li>
<li><strong>Rethink one role.</strong> Not just the job description — the role itself. Can your developer also own the product vision? Can your PO also design? Replace "5 years of Java" with domain expertise, architectural thinking, context engineering, and judgment.</li>
<li><strong>Run a pilot.</strong> One team, one product, one workflow. Replace manual review with automated checks. Measure speed and customer feedback for 30 days. Quality is subjective — what matters is what your users actually report.</li>
<li><strong>Build the context layer.</strong> Document your architecture decisions, domain rules, and constraints in a format agents can consume. This is the highest-leverage investment you can make right now.</li>
</ol>

<h2>Conclusion</h2>
<p>I read a lot of articles about AI. Most of the time, I disagree. At some point, I needed to speak up about it. AI helped me do it fast, in the right way — structuring the article, writing it in two languages, fact-checking the data, sourcing the statistics. This article is itself proof of what I'm arguing: the tools are here, and they multiply what one person can do.</p>
<p>I'm not claiming to have all the answers. Agents get things wrong. They hallucinate, they miss edge cases, they produce code that looks right but isn't. I've seen it. Studies even show experienced developers can be slower with current AI tools on codebases they already know well. The gains come from rethinking the workflow, not just bolting AI onto the old one. But the answer isn't to go back to three-day PR reviews and manual QA. The answer is better context, better guardrails, better automated verification. The developers who adapt will thrive. The ones who don't will be replaced - not by AI, but by developers who use AI.</p>
<p>AI needs to be part of every day. Not as a novelty, not as an experiment — as a reflex. The use cases are endless and most of them haven't been discovered yet. This is just the start, and everything is going to move very fast.</p>
<p>Stop debating. Start building. The tools are here. The only thing missing is the will to use them.</p>
<p>What's the one process you'd kill tomorrow if you could?</p>
<p><strong>Read the sequel:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — if AI killed the SDLC, what happens to the roles? The coder disappears. The software engineer is finally born.</p>

<hr>
<h2>Sources</h2>
<ol>
<li><a target="_blank" rel="noopener noreferrer" href="https://hai.stanford.edu/ai-index/2025-ai-index-report/research-and-development">Stanford HAI AI Index Report 2025</a> — AI foundation models by country (US 40, China 15, Europe 3)</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://epoch.ai/data-insights/ai-supercomputers-performance-share-by-country">Epoch AI — AI Supercomputers Performance Share by Country</a> — global AI compute share (US ~74%, EU ~5%)</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.oecd.org/en/publications/oecd-compendium-of-productivity-indicators-2025_b024d9e1-en/full-report/cross-country-comparisons-of-labour-productivity-levels_b2fdb493.html">OECD Compendium of Productivity Indicators 2025</a> — Europe/US productivity gap</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.reveliolabs.com/news/macro/is-ai-responsible-for-the-rise-in-entry-level-unemployment/">Revelio Labs — Is AI responsible for the rise in entry-level unemployment?</a> — Big Tech junior hiring collapse</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai">McKinsey — The State of AI</a> — productivity gains from AI adoption</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/2026/03/13/software-ai-agents-college-graduate-unemployment.html">CNBC — Bill McDermott (ServiceNow) on graduate unemployment</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://techcrunch.com/2026/03/14/meta-reportedly-considering-layoffs-that-could-affect-20-of-the-company/">TechCrunch — Meta reportedly considering layoffs affecting up to 20%</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/naval/status/2027981651012473197">Naval Ravikant on X — "Pure software is rapidly becoming un-investable"</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.nbcmiami.com/news/local/innovation-on-6/man-uses-chatgpt-to-sell-his-cooper-city-home-it-exceeded-our-expectations/3778919/">NBC Miami — Man sells his house in 5 days using ChatGPT</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://awesomeagents.ai/news/anthropic-claude-double-usage-off-peak-march-2026/">Anthropic doubles Claude usage limits</a> / <a target="_blank" rel="noopener noreferrer" href="https://awesomeagents.ai/news/anthropic-1m-context-ga-opus-sonnet/">1M context window now GA</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/2025/04/07/shopify-ceo-prove-ai-cant-do-jobs-before-asking-for-more-headcount.html">CNBC — Shopify CEO requires proof AI can't do the job before hiring</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.inc.com/ben-sherry/anthropic-ceo-dario-amodei-predicts-the-first-billion-dollar-solopreneur-by-2026/91193609">Inc. — Anthropic CEO predicts first billion-dollar one-person company</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/garrytan/status/1897303270311489931">Garry Tan on X</a> / <a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/2025/03/15/y-combinator-startups-are-fastest-growing-in-fund-history-because-of-ai.html">CNBC — 25% of YC batch with 95% AI-written code</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.pwc.com/us/en/tech-effect/ai-analytics/agentic-ai-workforce-redesign.html">PwC — No more pyramids: Rethinking your workforce for the agentic AI era</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Significant-Gravitas/AutoGPT">AutoGPT on GitHub</a> — autonomous agents (122K+ stars)</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://jobsdata.ai/task-visualizer">Job Task Visualizer</a> — AI task automation by occupation</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.ismyjobscrewed.com/">Is My Job Screwed?</a> — personalized AI risk assessment</li>
</ol>
<hr>
<p><strong>Five months later:</strong> I partially came back on this one. My team now maintains 134 machine-enforced rules — and I stand by every word above. How both are true is in <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">Doctrine Compounds. Models Don't.</a> — ceremonies for humans died; executable constraints for machines were born.</p>`
}

const frenchContent: PostContent = {
  title: 'Le SDLC est mort. Vous ne l\'avez juste pas encore remarqué.',
  description: 'Un point de vue sur l\'état du développement logiciel en 2026. Pourquoi le SDLC a toujours été défaillant, pourquoi les agents IA rendent cela impossible à ignorer, et pourquoi la tech européenne doit se réveiller.',
  html: `<p><strong>TL;DR :</strong> Les États-Unis ont 40 modèles de fondation IA. La Chine en a 15. L'Europe en a 3. Pendant que les équipes américaines livrent avec des agents IA, la plupart des organisations européennes débattent encore d'Agile vs waterfall. Le SDLC (Software Development Life Cycle) a toujours été cassé — l'IA a juste rendu impossible de faire semblant. Ceci est un signal d'alarme depuis l'intérieur d'une entreprise française.</p>
<hr>
<p>Oui, l'IA n'est qu'un outil. Mais c'est l'outil le plus disruptif qu'on ait jamais eu. Et ce n'est que le début.</p>
<p>Depuis des mois, je lis des articles sur l'IA. Sur LinkedIn, sur X, sur les blogs tech, dans tous les recoins d'Internet. L'IA et la disruption. L'IA et la régression. L'IA et l'effondrement de la qualité. L'IA et le contenu générique de mauvaise qualité. L'IA tue le logiciel. L'IA nous rend plus bêtes. L'IA produit du code poubelle. L'IA, c'est la fin de l'artisanat.</p>
<p>J'en ai lu des centaines. Et je vous le dis : <strong>je suis profondément en désaccord avec la plupart d'entre eux.</strong></p>
<p>Non pas parce que les préoccupations ne sont pas réelles. Certaines le sont. Mais parce que le récit dominant est de la peur déguisée en sagesse. Des gens qui s'accrochent à la façon dont les choses étaient, qui habillent la résistance en rigueur, qui appellent l'inertie "standards de qualité". Les voix les plus fortes sont celles qui ont le plus à perdre - les responsables de processus, les consultants en méthodologie, les personnes dont les carrières sont bâties sur la cérémonie même que l'IA rend obsolète.</p>
<p>Alors voici. Mon point de vue. Celui d'un Tech Lead Manager qui dirige une petite équipe dans une grande entreprise française, et qui a basculé sa façon de travailler depuis un an. Pas une réaction à un article, mais à tous. Voici comment je vois le métier du développement logiciel en 2026, et pourquoi cette année est la disruption bienvenue que j'espérais secrètement.</p>
<p>Boris Tane a récemment écrit que <a target="_blank" rel="noopener noreferrer" href="https://boristane.com/blog/the-software-development-lifecycle-is-dead/">le cycle de vie du développement logiciel est mort</a>. Les agents IA ne l'ont pas accéléré, ils l'ont tué. Il a raison. Mais je veux être clair : <strong>je n'avais pas besoin de l'IA pour me dire que le SDLC était cassé.</strong> Je le dis depuis des années.</p>
<p>Ce que les agents IA font maintenant ne révèle pas une nouvelle vérité. Ils rendent une vieille vérité impossible à ignorer : <strong>la majeure partie du processus a toujours été du gaspillage.</strong> Et nulle part cela n'est plus visible que dans l'industrie européenne - surtout en France - où les organisations fonctionnent encore comme en 2015.</p>

<h2>D'où je parle</h2>
<p>Je suis Tech Lead Manager. Je travaille dans de grandes entreprises depuis 2012, du secteur bancaire à la santé. Je dirige une équipe de développeurs, travaillant sur un système legacy de 30 ans et sa migration vers un écosystème moderne. Un avertissement : je ne suis pas un expert en IA. Je suis un développeur senior qui s'est plongé à fond dans l'IA il y a un an. Il y a cinq mois, je n'aurais pas écrit cet article. Les récents modèles de LLM ont complètement réécrit ma façon de penser ce métier.</p>
<p>J'ai passé plus d'une décennie dans ce monde. Un monde où un bug ne casse pas un tableau de bord, il casse un workflow métier critique. Un monde où les gens vous diront que vous avez absolument besoin de la cérémonie SDLC complète parce que les enjeux sont trop élevés.</p>
<p>Et je vous le dis : le SDLC a toujours été la mauvaise réponse à la bonne question.</p>
<p>La semaine dernière, un rapport de bug arrive. Dans l'ancien monde — ticket, tri, estimation, assignation, développement, revue de code, QA, train de release — c'est une odyssée de plusieurs semaines. Là, je décris le problème à l'agent, je le pointe vers le bon module et les règles métier. Quelques minutes plus tard : un fix, de nouveaux tests, un pipeline CI qui passe. En production avant le déjeuner. C'est cette réalité-là qui a tué le SDLC. Pas une théorie. Une matinée de travail.</p>

<h2>Les mammouths européens marchent vers l'obsolescence en somnambules</h2>
<p>Voici ce que je vois de l'intérieur de l'industrie française : <strong>rien n'a changé.</strong></p>
<p>Les mêmes organisations. Les mêmes processus. Les mêmes offres d'emploi. Les mêmes structures managériales. Robuste ? Bien sûr. De la même façon qu'un mammouth est robuste - massif, résilient, parfaitement adapté à un monde qui n'existe plus.</p>
<p>Les startups américaines livrent des produits avec des équipes de 3 personnes et des agents IA. Les entreprises chinoises itèrent à un rythme qui rend la Silicon Valley nerveuse. Et en France ? On débat encore de l'adoption d'Agile ou du maintien du waterfall. On écrit encore des spécifications de 200 pages - et quand elles existent, elles sont probablement obsolètes et perdues quelque part dans un système de fichiers sur un Windows Server 2008. On recrute encore en fonction du nombre d'années de Java sur un CV.</p>
<p>Les chiffres donnent le vertige : selon les estimations disponibles, les États-Unis ont produit environ 40 modèles de fondation IA, la Chine 15, et toute l'Europe combinée seulement 3. L'UE détiendrait 5% de la puissance de calcul IA mondiale contre 74% pour les US. La productivité européenne est tombée à environ 76% du niveau américain. Pendant ce temps, le recrutement junior dans la Big Tech s'est effondré — de 32% des embauches à seulement 7% selon certaines analyses, avec les postes d'entrée en chute de 73% sur la dernière année.</p>
<p>L'industrie logicielle européenne - et française en particulier - a toujours été conservatrice. Des processus lourds, des hiérarchies lourdes, des certifications lourdes. Il fut un temps où cette solidité était un avantage. Ce temps est révolu. <strong>2026 est l'année de la rupture.</strong> Pas l'année prochaine. Pas dans cinq ans. Maintenant.</p>
<p>Les organisations qui ne réagissent pas seront dépassées par des équipes dix fois plus petites, qui tournent autour d'elles avec des agents IA, livrant en jours ce qui prenait des trimestres. La question n'est pas de courir plus vite. C'est d'évoluer. Et ça n'évolue pas.</p>
<p>La France a des ingénieurs de classe mondiale, une expertise métier profonde et des industries sérieuses. Ce qui lui manque, c'est le courage de jeter les processus qui ne la servent plus. Nous avons bâti notre réputation sur la rigueur et la robustesse.</p>
<blockquote><p>"La rigueur sans la vitesse n'est que de la lenteur. Et la robustesse sans l'adaptabilité n'est que du poids. Le mammouth était robuste aussi. Regardez où ça l'a mené."</p></blockquote>

<h2>Vous recrutez encore pour les mauvaises compétences</h2>
<p>Ouvrez n'importe quel site d'emploi en France en ce moment. Regardez les offres tech. Que voyez-vous ?</p>
<ul>
<li>"5 ans de Java requis"</li>
<li>"Expert Angular, minimum 3 ans"</li>
<li>"Bonne connaissance de Spring Boot"</li>
<li>"Doit connaître React Native"</li>
</ul>
<p>En 2026. Avec des agents IA qui écrivent du code de qualité production dans n'importe quel langage, n'importe quel framework, en minutes.</p>
<blockquote><p>"Recruter sur l'expertise d'un langage de programmation, c'est comme recruter des chauffeurs en fonction de leur connaissance des races de chevaux."</p></blockquote>
<p>Le véhicule a changé. La compétence qui compte a changé avec lui.</p>
<p>Un agent IA se fiche que vous ayez passé 10 ans à écrire du Java ou 2 mois. Il écrit du Java. Il écrit du TypeScript. Il écrit du Python. Il écrit ce dont vous avez besoin, souvent mieux que l'"expert" que vous essayez de recruter, parce qu'il a vu plus de codebases que n'importe quel humain.</p>
<p>Alors pour quoi devriez-vous recruter ? Les choses que les agents ne peuvent pas faire :</p>
<ul>
<li><strong>L'expertise métier.</strong> Comprendre l'espace problème. Connaître les règles métier qu'aucune spécification ne capture pleinement. Savoir pourquoi un workflow a sept états au lieu de trois. C'est ce qui donne aux agents le bon contexte pour produire le bon code.</li>
<li><strong>La pensée architecturale.</strong> Clean Architecture, frontières hexagonales, règles de dépendance, conception système - la capacité à structurer des systèmes pour qu'ils restent maintenables, testables et évoluables. Les agents ont besoin de savoir où mettre les choses. Quelqu'un doit définir cela.</li>
<li><strong>L'ingénierie de contexte.</strong> La nouvelle compétence fondamentale. La capacité à donner aux agents les bonnes contraintes, les bonnes décisions, les bonnes connaissances métier pour qu'ils produisent ce dont vous avez réellement besoin. C'est ce qui sépare un développeur qui utilise l'IA d'un développeur qui est multiplié par l'IA.</li>
<li><strong>Le jugement.</strong> Savoir quand l'agent a tort. Savoir quand l'architecture ne convient pas. Savoir quand le test couvre le mauvais cas limite. Savoir quand livrer et quand s'arrêter.</li>
</ul>
<p>Rien de tout cela n'est un langage de programmation. Rien de tout cela n'apparaît sur une offre d'emploi française. Et c'est le problème.</p>
<p>Mais ça va plus loin que réécrire des fiches de poste. Ce sont les postes eux-mêmes qu'il faut repenser. Un développeur, un product owner et un designer peuvent désormais être la même personne. Quand l'IA gère l'implémentation, une seule personne avec la connaissance métier et la vision produit peut concevoir, construire et livrer. Le PDG de Shopify exige désormais que les équipes prouvent que l'IA ne peut pas faire un travail avant de demander une embauche. Le PDG d'Anthropic prédit la première entreprise à un milliard de dollars avec un seul employé d'ici 2026. Un quart de la promotion actuelle de Y Combinator a 95% de son code écrit par l'IA. PwC appelle ça "la montée du généraliste" — la pyramide traditionnelle des effectifs s'effondre au profit de petites équipes de généralistes augmentés par l'IA qui maîtrisent toute la chaîne de l'idée à la production.</p>

<h2>2026 : l'année où tout casse</h2>
<p>Ce n'est pas graduel. La disruption se produit maintenant, et elle se produit vite. Rien que les deux premières semaines de mars 2026 : le PDG de ServiceNow Bill McDermott déclare sur CNBC que le chômage des jeunes diplômés "pourrait facilement atteindre les 30-35%." Meta, après avoir dépassé les 200 milliards de chiffre d'affaires annuel, prépare des licenciements touchant jusqu'à 20% de ses effectifs pour financer son infrastructure IA. Naval Ravikant déclare que "le logiciel pur est en train de devenir non-investissable." Un inconnu en Floride vend sa maison en 5 jours avec ChatGPT - sans agent immobilier, sans commission, sans expérience. Anthropic double les limites d'utilisation de son IA et ouvre sa fenêtre de contexte d'1M de tokens en disponibilité générale. Deux semaines. Pas deux trimestres.</p>
<p>Pour les <strong>employés</strong> : le développeur qui refuse de travailler avec des agents IA sera largement surpassé par celui qui le fait. Une étude McKinsey a rapporté des gains de productivité dépassant 110% chez les équipes ayant pleinement adopté l'IA. Pas parce que les autres sont de moins bons ingénieurs. Parce que les outils ont changé et pas eux. L'expertise dans un langage de programmation était une carrière. En 2026, c'est devenu un acquis. Les agents l'ont banalisée. Ce qui reste, c'est tout ce qui est au-dessus du code : connaissance métier, vision architecturale, ingénierie de contexte, jugement. Si vous voulez voir quelles tâches sont déjà automatisées dans votre métier, regardez le <a target="_blank" rel="noopener noreferrer" href="https://jobsdata.ai/task-visualizer">Job Task Visualizer</a> - l'IA ne remplace pas les métiers en bloc, elle les grignote tâche par tâche. Et si vous n'êtes toujours pas convaincu, essayez <a target="_blank" rel="noopener noreferrer" href="https://www.ismyjobscrewed.com/">Is My Job Screwed?</a> pour une évaluation personnalisée du risque.</p>
<p>Pour les <strong>organisations</strong> : l'entreprise qui fait encore des sprints de deux semaines, des revues de PR de trois jours, des cycles de QA manuels et des trains de release trimestriels livrera en un trimestre ce qu'une équipe IA-native livre en une semaine.</p>
<blockquote><p>"Ce n'est pas un écart de productivité. C'est un écart fatal. Vos concurrents n'optimisent pas leur processus. Ils l'éliminent."</p></blockquote>
<p>Pour <strong>l'écosystème tech français</strong> : nous avons des ingénieurs de classe mondiale. Nous avons une expertise métier profonde dans la santé, l'aérospatiale, la finance, l'énergie. Nous avons du talent. Ce que nous n'avons pas, c'est l'agilité organisationnelle pour libérer ce talent. Nous étranglons nos meilleurs avec des processus conçus pour un monde qui n'existe plus, puis nous nous demandons pourquoi nous prenons du retard.</p>
<p><strong>Il est temps de réagir.</strong> Pas le trimestre prochain. Pas après la prochaine réorganisation. Maintenant.</p>

<h2>Livrer vite ou ne jamais livrer</h2>
<p>Voici ce qui me motive : <strong>l'impact.</strong></p>
<p>Je veux pousser en production le plus vite possible. Pas parce que je suis imprudent. Parce que du code qui reste dans une branche, qui attend dans une file de revue, coincé derrière un train de release - ce code a zéro valeur. C'est du stock. Et le stock est du gaspillage.</p>
<p>Le seul code qui compte est celui qui tourne en production, qui résout de vrais problèmes pour de vrais utilisateurs. Tout ce qui se trouve entre votre intention et la production est de la friction. Le travail consiste à minimiser cette friction.</p>
<p>Avant les agents IA, "livrer vite" était une aspiration culturelle. Vous le disiez en réunion d'équipe, puis vous passiez trois jours à attendre une revue de PR. Maintenant, avec des agents qui génèrent du code, des tests et des configs de déploiement dans une seule boucle, livrer vite est la valeur par défaut. La question n'est plus "comment livrer plus vite ?" C'est "qu'est-ce qui est encore en travers du chemin ?"</p>
<p>La réponse, la plupart du temps, c'est le processus. Le processus, et des organisations trop frileuses pour s'en défaire.</p>

<h2>Ce que j'ai arrêté de faire faire aux humains</h2>
<p>Je vais dire quelque chose qui met beaucoup de monde mal à l'aise : <strong>les humains ne devraient pas tester le logiciel. Ils ne devraient pas non plus écrire la documentation. Ni configurer les pipelines CI/CD. Ni gérer les déploiements. Ni même animer la plupart des réunions.</strong></p>
<p>Et je ne parle même pas du code - ça, c'est déjà pris en charge par les agents.</p>
<p><strong>La QA manuelle scriptée est une relique.</strong> Un humain qui clique sur des écrans, qui suit des scripts de test, qui remplit des rapports de bugs — tout ce workflow est plus lent, moins fiable et moins exhaustif que les tests automatisés. Un agent génère les tests en même temps que le code. Il couvre les cas limites auxquels le testeur manuel n'aurait jamais pensé. Et il le fait en secondes, pas en jours. Ce qui reste irremplaçable, c'est le test exploratoire — l'humain qui connaît le domaine et détecte qu'un comportement est anormal même quand tous les tests passent. Ce jugement-là, je ne le délègue pas. Mais je refuse de l'emballer dans un script de test de 200 lignes qu'un junior suit à la lettre sans comprendre.</p>
<p><strong>La documentation que personne ne lit est morte aussi.</strong> Vous savez pourquoi personne ne la lit ? Parce qu'elle est toujours obsolète. Dès qu'un humain l'écrit, elle commence à diverger du code. Les agents la génèrent depuis le code source — à chaque changement, automatiquement. Toujours à jour, toujours exacte, toujours synchronisée avec la réalité. Plus de pages Confluence fantômes. Plus de README menteur.</p>
<p><strong>Les pipelines CI/CD n'ont plus besoin de vous.</strong> Combien d'heures avez-vous passé à déboguer des fichiers YAML de pipeline ? À chercher pourquoi un job échoue en CI mais pas en local ? Les agents configurent les pipelines, les maintiennent, les optimisent. Ils détectent les jobs redondants, parallélisent ce qui peut l'être, et corrigent les régressions de build avant que vous n'ouvriez votre terminal le matin.</p>
<p><strong>Les déploiements manuels sont un risque, pas un contrôle.</strong> Chaque intervention humaine dans un déploiement est une source d'erreur. Un script oublié, une variable d'environnement manquante, un rollback mal exécuté. L'automatisation de bout en bout — du commit au production — est plus sûre, plus rapide, et entièrement traçable. L'humain qui appuie sur le bouton "déployer" n'ajoute pas de la sécurité. Il ajoute de la latence et du risque.</p>
<p><strong>Même les réunions.</strong> Des sous-agents avec des personas — architecte, product owner, expert sécurité — débattent, se confrontent et produisent des analyses structurées. Pas de digressions. Pas de politique de bureau. Pas de ce collègue qui monopolise la parole pendant vingt minutes pour ne rien dire. Le résultat est souvent plus approfondi et moins biaisé que ce que la plupart des salles de réunion produisent.</p>
<p>Si la majorité de vos tests ne peuvent pas être automatisés, c'est votre architecture qui est mauvaise. Ce n'est pas une opinion IA. C'est une opinion d'ingénierie logicielle que je porte depuis des années. La testabilité est une propriété de conception. L'humain reste dans la boucle — mais pour le jugement et la supervision, pas pour cliquer sur des boutons.</p>
<p>Voici à quoi ressemble 2026 : tout est généré avec le code, tout est automatisé, tout tourne en CI/CD. Plus rapide et plus fiable que n'importe quel humain. L'agent écrit le code, les tests, la doc, les configs de déploiement - ensemble. Pas comme une réflexion après coup. Pas dans des phases séparées. Toute la chaîne de l'intention à la production est un flux continu et automatisé.</p>
<p>Est-ce que ça arrive du jour au lendemain ? Non. Construire ce niveau d'automatisation prend du temps, de l'effort et de la discipline. C'est d'ailleurs mon principal chantier cette année pour mes applications. Mais c'est justement là où il faut investir son énergie. Pas dans des processus manuels, pas dans des validations manuelles qui bloquent tout, mais dans la construction de la machinerie automatisée qui vous permet de livrer en confiance.</p>

<h2>Arrêtez de vous cacher derrière votre domaine</h2>
<p>Les gens vous diront que leur industrie est différente. Que vous ne pouvez pas aller vite avec des données sensibles. Que la conformité exige la cérémonie SDLC complète.</p>
<p>Ils confondent l'<strong>exigence</strong> avec l'<strong>implémentation.</strong></p>
<p>La conformité exige la <strong>traçabilité</strong>, pas la cérémonie. Elle exige que vous puissiez prouver ce qui a changé, pourquoi, et que cela a été vérifié. Elle n'a jamais exigé de story points. Elle n'a jamais exigé de revues de PR de trois jours. Elle n'a jamais exigé de validation QA manuelle.</p>
<p>Un agent qui génère du code, écrit des tests, les exécute, vérifie les types, valide contre les contraintes architecturales et enregistre chaque étape fournit <strong>plus de traçabilité</strong> qu'un développeur humain qui a revu une PR à moitié endormi un vendredi après-midi et un testeur QA qui a cliqué sur 60% du script de test avant le déjeuner. On ne peut juste pas encore l'accepter, parce que la cérémonie semblait sûre.</p>
<p>Oui, il y a de vraies contraintes réglementaires - RGPD, AI Act européen, conformité sectorielle. Ce ne sont pas des excuses, ce sont des exigences. Et des pipelines automatisés avec des pistes d'audit complètes y répondent mieux qu'un humain qui a oublié de mettre à jour le journal des modifications. La réglementation exige des preuves. Les agents les fournissent.</p>
<p>Si le SDLC peut mourir dans les coins les plus réglementés, conservateurs et réfractaires au risque de l'industrie logicielle, il peut mourir n'importe où. La question n'est pas de savoir si votre domaine est trop critique pour ça. C'est de savoir si vous êtes assez honnête pour admettre que la cérémonie n'a jamais été ce qui le protégeait.</p>

<h2>Ce que je fais vraiment maintenant — et ce qui survit</h2>
<p>Mon rôle a fondamentalement changé. Avant, je passais mes journées dans la machine à processus :</p>
<ul>
<li>Écrire et affiner des tickets que personne ne lisait deux fois</li>
<li>Participer aux sprint plannings en faisant semblant que l'estimation fonctionne</li>
<li>Revoir des PR ligne par ligne</li>
<li>Débloquer des développeurs coincés sur du contexte qu'ils n'avaient pas</li>
<li>Attendre que la QA valide manuellement ce que les tests automatisés couvraient déjà</li>
</ul>
<p>Maintenant je passe mes journées sur ce qui compte vraiment :</p>
<p><strong>L'ingénierie de contexte.</strong> Construire le bon contexte pour chaque application afin que les agents comprennent parfaitement ce qu'on leur demande de faire. Décisions architecturales, contraintes, connaissances métier, règles de gestion - le tout structuré pour que l'agent ait tout ce dont il a besoin pour produire le bon code. La qualité de ce que les agents construisent est directement proportionnelle à la qualité du contexte que vous leur donnez.</p>
<p><strong>Supervision et workflows.</strong> On construit la couche de supervision. Le code, la revue, les tests, la release - c'est géré par les outils, les agents. On conçoit les workflows, on pose les garde-fous, on définit ce que "terminé" veut dire. Puis on laisse les agents exécuter.</p>
<p><strong>Même les réunions.</strong> On expérimente avec des réunions gérées par plusieurs sous-agents avec des personas - experts métier, architectes, product owners - qui débattent, se confrontent mutuellement, et produisent des comptes rendus structurés et des propositions de décision. Les premiers résultats sont prometteurs : le résultat est souvent plus approfondi et moins biaisé que ce qu'une salle remplie d'humains distraits produit en une heure.</p>
<p><strong>Pousser en production.</strong> Le chemin le plus rapide de l'intention à l'impact. C'est l'objectif. Toujours. Ce que les agents IA apportent au développement logiciel professionnel, c'est <strong>la boucle de feedback du maker</strong> : intention, construction, test, itération, livraison. Pas de cérémonie. Pas de passages de relais. Pas d'attente.</p>
<p>Alors qu'est-ce qui survit dans tout ça ? Pas grand-chose.</p>
<p><strong>La connaissance métier</strong> survit. L'agent a besoin de quelqu'un qui comprend l'espace problème. Les systèmes legacy sont profonds. Les domaines métier sont profonds. L'intersection des deux est un labyrinthe qu'aucun modèle n'a entièrement cartographié.</p>
<p><strong>L'intention architecturale</strong> survit. La Clean Architecture n'est pas morte. Les frontières hexagonales, les règles de dépendance, la séparation du domaine et de l'infrastructure - tout cela compte encore. Mais c'est exprimé comme contexte pour l'agent, pas comme des diagrammes sur un tableau blanc qui deviennent obsolètes en une semaine.</p>
<p><strong>La vérification automatisée</strong> survit et devient tout. Tests, vérifications de types, scans de sécurité, diffs comportementaux, fonctions de fitness architecturale - le filet de sécurité entier est du code, pas des personnes. Du code qui vérifie du code.</p>
<p><strong>L'observabilité</strong> survit et devient la fondation. Quand le code est livré en continu, votre stack de monitoring est votre dernière ligne de défense. Nous passons de "revue avant livraison" à "livrer et vérifier en continu."</p>
<blockquote><p>"Tout le reste est de la cérémonie. Et la cérémonie, c'est ce que vous faites quand vous ne faites pas confiance à vos outils, votre architecture ou vos vérifications automatisées. Les outils sont devenus assez bons. Il est temps de lâcher prise."</p></blockquote>
<p>Et les juniors dans tout ça ? On vous dira que supprimer le processus tue le pipeline de formation. Je constate l'inverse. J'ai actuellement trois stagiaires et un alternant, tous en dernière année d'école d'ingénieur. La facilité de prise en main des outils IA les rend immédiatement compétitifs. L'onboarding est simplifié — ils posent des questions à leur agent, qui a le contexte métier, les spécificités du domaine, les règles architecturales. Ils avancent à une vitesse que je n'ai jamais vue en 14 ans de carrière. L'IA ne tue pas le pipeline junior. Elle l'accélère. Les juniors qui apprennent à travailler avec des agents développent la connaissance métier et le jugement plus vite, pas plus lentement — parce qu'ils passent moins de temps à se battre avec la syntaxe et plus de temps à comprendre le problème.</p>

<h2>Que faire lundi matin</h2>
<p>Si cet article vous parle, voici par où commencer :</p>
<ol>
<li><strong>Mesurez votre cycle time.</strong> Combien de temps entre l'intention et la production ? Identifiez chaque point de blocage humain dans cette chaîne.</li>
<li><strong>Investissez dans la vérification automatisée.</strong> Tests, typage, fonctions de fitness architecturale, pistes d'audit. Construisez le filet de sécurité avant de retirer les points de blocage humains.</li>
<li><strong>Repensez un poste.</strong> Pas juste la fiche — le rôle lui-même. Est-ce que votre développeur peut aussi porter la vision produit ? Est-ce que votre PO peut aussi concevoir ? Remplacez "5 ans de Java" par expertise métier, pensée architecturale, ingénierie de contexte et jugement.</li>
<li><strong>Lancez un pilote.</strong> Une équipe, un produit, un workflow. Remplacez la revue manuelle par des vérifications automatisées. Mesurez la vitesse et les retours clients pendant 30 jours. La qualité est subjective — ce qui compte, c'est ce que vos utilisateurs remontent vraiment.</li>
<li><strong>Construisez la couche de contexte.</strong> Documentez vos décisions d'architecture, vos règles métier et vos contraintes dans un format que les agents peuvent consommer. C'est l'investissement le plus rentable que vous puissiez faire maintenant.</li>
</ol>

<h2>Conclusion</h2>
<p>Je lis beaucoup d'articles sur l'IA. La plupart du temps, je ne suis pas d'accord. À un moment, j'ai eu besoin d'en parler. L'IA m'a aidé à le faire vite, de la bonne manière — structurer l'article, l'écrire en deux langues, vérifier les données, sourcer les statistiques. Cet article est lui-même la preuve de ce que j'avance : les outils sont là, et ils multiplient ce qu'une seule personne peut faire.</p>
<p>Je ne prétends pas avoir toutes les réponses. Les agents se trompent. Ils hallucinent, ils ratent des cas limites, ils produisent du code qui a l'air correct mais ne l'est pas. Je l'ai vu. Des études montrent même que des développeurs expérimentés peuvent être plus lents avec les outils IA actuels sur des codebases qu'ils connaissent déjà bien. Les gains viennent de la refonte du workflow, pas du simple ajout de l'IA sur l'ancien. Mais la réponse, ce n'est pas de revenir aux revues de PR de trois jours et à la QA manuelle. La réponse, c'est un meilleur contexte, de meilleurs garde-fous, une meilleure vérification automatisée. Les développeurs qui s'adaptent vont prospérer. Ceux qui ne le font pas seront remplacés - pas par l'IA, mais par des développeurs qui utilisent l'IA.</p>
<p>L'IA doit faire partie de chaque journée. Pas comme une nouveauté, pas comme une expérimentation — comme un réflexe. Les usages sont infinis et la plupart restent à découvrir. Ce n'est que le début, et tout va aller très vite.</p>
<p>Le débat a assez duré. Il est temps de passer à l'action. Les outils sont là. La seule chose qui manque, c'est la volonté de s'en servir.</p>
<p>Quel est le processus que vous supprimeriez demain si vous le pouviez ?</p>
<p><strong>Lire la suite :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — si l'IA a tué le SDLC, qu'advient-il des rôles ? Le codeur disparaît. L'ingénieur logiciel est enfin né.</p>

<hr>
<h2>Sources</h2>
<ol>
<li><a target="_blank" rel="noopener noreferrer" href="https://hai.stanford.edu/ai-index/2025-ai-index-report/research-and-development">Stanford HAI AI Index Report 2025</a> — modèles de fondation IA par pays (US 40, Chine 15, Europe 3)</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://epoch.ai/data-insights/ai-supercomputers-performance-share-by-country">Epoch AI — AI Supercomputers Performance Share by Country</a> — part de la puissance de calcul IA mondiale (US ~74%, UE ~5%)</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.oecd.org/en/publications/oecd-compendium-of-productivity-indicators-2025_b024d9e1-en/full-report/cross-country-comparisons-of-labour-productivity-levels_b2fdb493.html">OECD Compendium of Productivity Indicators 2025</a> — écart de productivité Europe/US</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.reveliolabs.com/news/macro/is-ai-responsible-for-the-rise-in-entry-level-unemployment/">Revelio Labs — Is AI responsible for the rise in entry-level unemployment?</a> — effondrement du recrutement junior en Big Tech</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai">McKinsey — The State of AI</a> — gains de productivité liés à l'adoption de l'IA</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/2026/03/13/software-ai-agents-college-graduate-unemployment.html">CNBC — Bill McDermott (ServiceNow) sur le chômage des diplômés</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://techcrunch.com/2026/03/14/meta-reportedly-considering-layoffs-that-could-affect-20-of-the-company/">TechCrunch — Meta envisage des licenciements touchant jusqu'à 20% des effectifs</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/naval/status/2027981651012473197">Naval Ravikant sur X — "Pure software is rapidly becoming un-investable"</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.nbcmiami.com/news/local/innovation-on-6/man-uses-chatgpt-to-sell-his-cooper-city-home-it-exceeded-our-expectations/3778919/">NBC Miami — Un homme vend sa maison en 5 jours avec ChatGPT</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://awesomeagents.ai/news/anthropic-claude-double-usage-off-peak-march-2026/">Anthropic double les limites d'utilisation de Claude</a> / <a target="_blank" rel="noopener noreferrer" href="https://awesomeagents.ai/news/anthropic-1m-context-ga-opus-sonnet/">Fenêtre de contexte 1M en disponibilité générale</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/2025/04/07/shopify-ceo-prove-ai-cant-do-jobs-before-asking-for-more-headcount.html">CNBC — Le PDG de Shopify exige de prouver que l'IA ne peut pas faire le travail avant d'embaucher</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.inc.com/ben-sherry/anthropic-ceo-dario-amodei-predicts-the-first-billion-dollar-solopreneur-by-2026/91193609">Inc. — Le PDG d'Anthropic prédit la première entreprise à 1 milliard avec un seul employé</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/garrytan/status/1897303270311489931">Garry Tan sur X</a> / <a target="_blank" rel="noopener noreferrer" href="https://www.cnbc.com/2025/03/15/y-combinator-startups-are-fastest-growing-in-fund-history-because-of-ai.html">CNBC — 25% de la promo YC avec 95% de code écrit par l'IA</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.pwc.com/us/en/tech-effect/ai-analytics/agentic-ai-workforce-redesign.html">PwC — No more pyramids: Rethinking your workforce for the agentic AI era</a></li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Significant-Gravitas/AutoGPT">AutoGPT sur GitHub</a> — agents autonomes (122K+ étoiles)</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://jobsdata.ai/task-visualizer">Job Task Visualizer</a> — visualisation des tâches automatisées par métier</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.ismyjobscrewed.com/">Is My Job Screwed?</a> — évaluation personnalisée du risque IA</li>
</ol>
<hr>
<p><strong>Cinq mois plus tard :</strong> je suis partiellement revenu sur ce billet. Mon équipe maintient aujourd'hui 134 règles imposées par des machines — et je maintiens chaque mot ci-dessus. Comment les deux sont vrais à la fois : <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">La doctrine se capitalise. Les modèles, non.</a> — les cérémonies pour humains sont mortes ; les contraintes exécutables pour machines sont nées.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

