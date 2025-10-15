---
layout: post
title: "How to Choose the Right Technologies for a New Digital Project"
date: 2025-03-26
categories: technology-selection architecture decision-making
---

"Should we use React or Vue? PostgreSQL or MongoDB? AWS or Google Cloud?"

Every new project starts with a cascade of technology decisions. And every decision seems crucial, because in part it is. Choosing the wrong technology can mean wasted months, exploding costs, a frustrated team.

But after making these choices dozens of times, I've learned something counterintuitive: the specific technology matters less than you think. What really matters is the process you use to make the choice.

Let me tell you about a project where we got everything wrong. It was 2018, we had to build an e-learning platform. The tech lead was enthusiastic about microservices and Kubernetes. "It's the future," he said. "We need to be cutting-edge."

Six months later, with a team of four people, we were drowning in operational complexity. Deployments took hours. Debugging was a nightmare. 60% of our time went to managing infrastructure instead of building features.

We should have done a simple monolith on Heroku. We would have launched in half the time, with less stress, with the same result for users.

The technology wasn't "wrong" in absolute terms. It was wrong for that context: small team, tight timeline, limited budget, no K8s experience.

That lesson taught me that choosing technologies isn't about finding "the best one." It's finding the most suitable for your specific context.

## The Decision Framework

Over the years I've developed a process for these decisions. It's not perfect, it doesn't always guarantee the right choice, but it significantly reduces the probability of disasters.

### 1. Start with Requirements, Not Technologies

Too often the process is: "I want to use X" → "Now let's find a problem that justifies X".

It should be the opposite.

**Define what the system needs to do:**

- What are the core functional requirements?
- How much traffic does it need to handle? (Both now and in the next 2-3 years)
- What are the latency requirements? (Is 2 seconds OK or do you need millisecond-level performance?)
- Do you need high availability or is a few hours of downtime per year acceptable?
- Is the data critical? What level of data integrity is needed?
- Are there compliance requirements? (GDPR, HIPAA, etc.)

**Define the constraints:**

- Available budget (both upfront and ongoing operational costs)
- Team size and skill set
- Timeline
- Existing dependencies (do you need to integrate with legacy systems?)
- Operational capacity (do you have a DevOps team or do developers manage everything?)

Write these things down. Literally. A document that lists requirements and constraints.

This document becomes your north star. Every technology you consider must be evaluated against these criteria, not against "what's cool" or "what everyone uses."

### 2. Evaluate Fit, Not Features

When comparing technologies, it's tempting to make feature lists.

"Database A has this feature that B doesn't!"

But you'll never use 90% of the features. What matters is how the technology fits your specific use cases.

**The right questions to ask:**

**For the specific problem I have, is this technology designed for that?**

MongoDB is great for certain use cases. But if your data is highly relational, you're swimming upstream. You might make it work, but why make life difficult?

**Does this technology's sweet spot align with my needs?**

Redis is fantastic for caching. Can you use it as a primary database? Technically yes. Is it a good idea? Rarely.

**What am I sacrificing by choosing this technology?**

Every choice is a trade-off. NoSQL gives you schema flexibility but you sacrifice ACID transactions. Microservices give you independence but add operational complexity.

Trade-offs are OK if conscious and acceptable for your case. They're problems if you haven't considered them.

### 3. Consider Total Cost of Ownership

The cost of a technology isn't just the license cost (if there is one).

**Hidden costs we often ignore:**

**Learning curve**

If you choose a technology no one on the team knows, how long does it take to become productive? Weeks? Months?

That time has a cost. And during learning, you'll make mistakes that will lead to problems down the line.

**Operational overhead**

How much work does it require to maintain? Kubernetes is powerful but requires significant expertise to operate well. Managed services like Heroku cost more nominally but save a lot of operational work.

**Hiring and retention**

If you use an obscure tech stack, how hard is it to find developers? How much do you have to pay them? How easily do they leave for opportunities with more mainstream stacks?

**Ecosystem and community**

Technology with a rich ecosystem means ready-made libraries, problems already solved by others, tutorials everywhere, questions on Stack Overflow already answered.

Niche technology means every problem is yours to solve.

**Lock-in and exit cost**

How difficult is it to change in the future if this technology doesn't work? Proprietary cloud services create lock-in. Open source standards facilitate migration.

### 4. Evaluate Maturity and Longevity

**Maturity spectrum:**

**Bleeding edge:** Just released, experimental, could change drastically or die
**Leading edge:** Relatively new, positive momentum, maturing
**Mainstream:** Proven, stable, widely adopted
**Legacy:** Old, declining, but still used

Where you want to be on this spectrum depends on context.

**When to choose bleeding edge:**

- Research or experimental project
- You have time and resources for dealing with instability
- The potential benefit is so high it's worth the risk
- You can afford to fail

**When to choose leading edge:**

- You want to innovate but with a safety net
- You have capacity to contribute to the community and shape the technology
- The team has appetite to learn new things

**When to choose mainstream:**

- Production-critical project
- Small team or limited resources
- Tight timelines
- High risk aversion

**When to choose legacy:**

- Rarely for greenfield projects
- Sometimes for compatibility with existing systems
- Sometimes because team has deep expertise that compensates for age

**Signs of healthy technology:**

- Active and growing community
- Company/foundation with long-term commitment
- Regular releases with clear roadmap
- Adoption in production by serious companies
- Curated and updated documentation
- Ecosystem of libraries and tools

**Red flags:**

- Abandoned project or sporadic maintenance
- Dying or toxic community
- Frequent breaking changes without migration path
- Poor documentation
- Only proof-of-concepts, few production deployments

### 5. Test, Don't Assume

Before committing, test.

**Spike: time-boxed exploration**

Dedicate a week (no more) to building a spike: a small prototype that exercises the critical aspects of the system.

It doesn't need to be production-ready. It needs to answer specific questions:
- Can this technology do X which is critical for us?
- What's the developer experience like?
- What problems emerge?
- How complicated is the operational aspect?

**Benchmark for realistic use cases**

Not generic benchmarks found online. Those test ideal cases that might not reflect your usage.

Test with data and patterns similar to what you expect in production.

**Talk to those who've used it**

Find companies with a use case similar to yours. Ask about their experience.

"What would you do differently?"
"What were the unexpected problems?"
"Would you recommend this technology for a case like ours?"

These conversations are gold. You learn from others' mistakes instead of repeating them.

## The Categories of Decisions

Not all technology decisions are equal. Some are more critical, harder to change.

### Fundamental Architectural Decisions

**Monolith vs Microservices**

**When monolith:**

- Small team (< 10 developers)
- Domain not clearly separable
- Iteration speed is priority
- Limited operational capacity

**When microservices:**

- Large team, organizable into sub-teams
- Domain with clear bounded contexts
- Need to scale different parts independently
- Strong DevOps culture and tooling

**There's no "always better."** Amazon started with a monolith. Many startups fail from premature microservices complexity.

**Cloud provider**

AWS is the leader but not automatically the right choice.

**Consider:**

- Where are your users? (Latency from geographic regions)
- What managed services do you need?
- Do you already have expertise on a provider?
- Costs for your specific workload (vary a lot)
- Lock-in concerns

Multi-cloud sounds nice but adds enormous complexity. Rarely worth it.

**Database paradigm**

Relational (PostgreSQL, MySQL) vs Document (MongoDB) vs Column-family (Cassandra) vs Graph (Neo4j) vs Time-series (InfluxDB)

Depends entirely on the nature of your data and query patterns.

Data with complex relationships? Relational.
Flexible schema, document-oriented? Document DB.
Time-series analytics? Specialized time-series DB.

You might also use more than one (polyglot persistence) but only if complexity is justified.

### Language and Framework Decisions

**Programming language**

The language matters less than the framework and ecosystem around it.

**Consider:**

- Team expertise (more important than anything)
- Ecosystem for your domain (Python for ML, JavaScript for web)
- Performance requirements (Go/Rust for high-performance, Python/Ruby for rapid dev)
- Hiring pool in your area

**Framework**

React vs Vue vs Angular. Express vs Fastify. Rails vs Django.

Honestly? For most projects, the difference is marginal.

**Choose based on:**

- What the team already knows
- Specific ecosystem (e.g., if you use a lot of Next.js ecosystem, React is natural choice)
- Community size (docs, libraries, problem solving)

Avoid jumping on every new framework. Better mastery on one stable than perpetual newbie on latest hype.

### Infrastructure and Tooling Decisions

**Containerization and orchestration**

Docker is practically standard. The question is orchestration.

**Kubernetes** if:

- You need flexibility and total control
- You have team with expertise
- Scale and complexity justify overhead

**Managed platforms** (Heroku, Render, Fly.io) if:

- You want to focus on application, not infra
- Small team
- Higher initial costs are OK to reduce operational burden

**CI/CD**

GitHub Actions, GitLab CI, CircleCI, Jenkins.

Mainly look at:
- Integration with your source control
- Ease of use
- Pricing for your volume
- Specific features you need (e.g., matrix builds)

Don't overdo it. Simple pipeline that works > complex pipeline no one understands.

**Monitoring and Observability**

Not an afterthought. Essential from day one.

Datadog, New Relic, self-hosted (Prometheus + Grafana).

Consider:
- Integration with your stack
- Pricing (can become expensive at scale)
- Features: metrics, logs, traces, all together?
- Ease of setup and use

## Practical Decision Process

OK, you have the framework and considerations. How do you proceed concretely?

### Step 1: Initial Research

**Identify candidates**

For each category (database, language, framework, etc.), list 3-5 options that seem reasonable for your use case.

**Eliminate non-starters**

Clearly not suitable (e.g., incompatible licensing, technical requirements don't match, too immature).

This leaves you with 2-3 serious options per category.

### Step 2: Evaluation Matrix

Create a matrix with:
- Rows: candidate options
- Columns: criteria important to you (performance, ease of use, cost, ecosystem, team expertise, etc.)

For each criterion, assign weight (1-5 how important it is to you).

For each option, score on each criterion (1-5 how well it satisfies).

Multiply and sum.

This isn't exact science. But it forces you to be explicit about what matters and how each option compares.

### Step 3: Spike the Top 2

Take the two with highest scores. Build spikes for both.

After the spike, you have much better feeling. Something that looked good on paper might prove frustrating. Something that seemed OK might surprise you positively.

### Step 4: Decision and Documentation

Choose. But critical: document the "why".

**Decision Record (ADR - Architecture Decision Record)**

Simple template:

```
# ADR-001: Primary database choice

## Context
[Describe problem and requirements]

## Decision
We're using PostgreSQL as primary database.

## Rationale
- Highly relational data
- Team has expertise
- ACID transactions important for us
- Mature ecosystem
- Good balance between features and simplicity

## Alternatives Considered
- MongoDB: Not suitable for our relational use cases
- MySQL: Similar to Postgres but missing some features we need

## Consequences
- Positive: Robust, well understood
- Negative: Vertical scaling has limits (mitigated with read replicas)
- Risk: If schema becomes too rigid (we'll monitor)

## Revisit Date
Q3 2025
```

This document is valuable. When six months later someone asks "why did we choose X?", you have the answer.

And especially: when considering changing, reread the rationale. Maybe the reasons are still valid. Maybe the context has changed and it's time to reconsider.

### Step 5: Commit but Remain Flexible

Once decided, commit. Don't second-guess continuously.

But set checkpoints. "In three months, let's review this choice. If we're hitting problems, we'll consider alternatives."

Some choices are easily reversible (which logging library). Others are difficult (which database). Architect to make as many things reversible as possible.

## Common Mistakes to Avoid

### Resume-Driven Development

Choosing technology because "I want to learn" or "looks good on CV".

If it's a personal side project, go free. If it's a work project, the choice must serve the project, not your career.

Want to learn? Do it on your time, in personal projects. Don't use clients as guinea pigs.

### Hype-Driven Development

"Everyone's talking about X, we must use it!"

Hype isn't bad per se. Often hyped technologies have merit. But you must validate for YOUR case.

**Red flag:** If your justification is "because it's the future" without specific benefits for the current project.

### Analysis Paralysis

Spending weeks comparing every single option, reading every benchmark, discussing every pro/con.

At some point you must decide. Perfect information doesn't exist. If you've done two weeks of research and spikes, you probably have enough info.

Trust your judgment. If you're wrong, you'll correct.

### "Not Invented Here" Syndrome

Refusing existing solutions because "we can do it better ourselves."

Sometimes you can. But often you're underestimating the complexity.

That framework you think you can replicate in a week? Actually has years of handled edge cases, fixed bugs, optimizations.

**Use libraries. Use frameworks. Use managed services.**

Your time is better spent on what's unique to your domain, not reinventing wheels.

### Ignoring the Team

Choosing technology that no one on the team knows or wants to learn.

The team has to work with these technologies every day. If they hate them, they'll be miserable and productivity will crash.

Involve the team in the decision. Listen to their concerns. If they have strong preference for a reasonable option, go with that even if your scoring matrix says otherwise.

## When to Reconsider Made Choices

Not all technology choices last forever.

**Signs it's time to reconsider:**

**Continuous pain**

If every day the team struggles against the technology instead of with it, it might be wrong fit.

**Requirements changed significantly**

You chose for 1,000 users, now you have 100,000. You chose for European market, now you're global.

**New alternatives materially better**

New technology that solves fundamental problems you have with the current one.

**Current technology in decline**

Dying community, no updates, major security issues not fixed.

**But beware:**

**Grass is greener syndrome:** Every technology has problems. The new one seems better because you haven't encountered its problems yet.

**Inverse sunk cost fallacy:** "We've already invested so much in X" isn't a reason to keep it if it's wrong. But neither is "we've invested so much" a reason to throw it away if it works decently.

**Cost of migration:** Changing database, language, framework - it's costly. Time, risk, potential bugs. Must really be worth it.

**Incremental approach:** If you must change, often you can do it gradually. Strangler fig pattern: build new alongside old, migrate piece by piece.

## Case Study: Decisions I've Made

Let me share some real decisions, how I made them, how they went.

### Case 1: Fintech Startup, Team of 3

**Requirements:** MVP in 3 months, financial compliance, team without DevOps

**Decision:**

- Ruby on Rails monolith
- PostgreSQL
- Heroku
- Stripe for payments

**Rationale:**

- Rails allowed rapid development
- Postgres for data integrity (crucial for finance)
- Heroku eliminated operational burden
- Stripe reduces compliance complexity

**Result:** Launched on time, stable system. After two years and 10 developers, still on same stack. Scaled fine.

**Would I do differently?** No. For that context it was the right choice.

### Case 2: E-commerce with High Traffic

**Requirements:** Handle large spikes (Black Friday), real-time inventory, international

**Decision:**

- Node.js microservices for services that need independent scaling
- PostgreSQL for transactional data
- Redis for caching and real-time inventory
- AWS with auto-scaling

**Rationale:**

- Microservices allowed independent scaling of checkout vs browsing
- Postgres for data consistency
- Redis for performance on hot data
- AWS auto-scaling to handle spikes without over-provisioning year-round

**Result:** Handled Black Friday without crashes. Reasonable costs year-round.

**Would I do differently?** Maybe started with monolith and migrated later. Microservices complexity early was challenging. But it worked.

### Case 3: Internal Tool for Data Analysis

**Requirements:** Non-technical users, ad-hoc queries, data visualization

**Decision:**

- Python (Django)
- PostgreSQL
- Metabase for BI
- Deploy on simple VPS

**Rationale:**

- Python ecosystem for data processing
- Metabase gave powerful UI without building from scratch
- Low operational complexity (only internal tool)

**Result:** Happy users, maintained easily.

**Would I do differently?** Maybe just Metabase without custom backend would have been enough. Slightly over-engineered.

## The Final Advice

If I have to give you one piece of advice for choosing technologies:

**Start boring.**

Boring doesn't mean bad. Boring means proven, understood, supported.

Use technologies that:
- The team knows or can learn quickly
- Have track record of success
- Have strong community
- Solve your problem without excessive overhead

When the project is working and you have evidence that boring isn't enough anymore - upgrade specific pieces that benefit from it.

But the default position is boring.

Because boring lets you focus on what matters: solving problems for users, building business, creating value.

Technology is a means, not an end.

Every hour spent fighting with a framework is an hour not spent improving the product.

So choose technologies that get out of your way. That allow you to be productive. That the team can maintain and evolve.

And remember: almost never is the technology choice the main factor of success or failure.

Execution matters more. Team matters more. Product-market fit matters more.

Technology choice? Important, yes. But don't obsess.

Make a reasonable informed choice, commit, execute, iterate.

And if it really is the wrong choice? You'll learn and correct.

That's the real skill: not never making wrong choices, but making good-enough choices quickly and knowing how to evolve them.
