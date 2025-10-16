---
layout: post
title: "Lessons from Public Sector Digital Transformation: When Technology Must Serve Everyone"
subtitle: "What I learned building digital services for millions of people who have no choice but to use them"
date: 2025-10-16
categories: digital-transformation public-sector civic-tech lessons-learned
---

I still remember the support call that changed how I think about our work. An elderly woman, frustrated and almost in tears, couldn't complete a simple form renewal online. She'd been trying for two hours. The interface worked perfectly in our tests. But for her, it was incomprehensible.

We fixed her issue that day. But that conversation stayed with me. Because unlike in commercial tech, where users can walk away if something doesn't work, in public services there's often no alternative. You must use the system. And when that system fails you, it's not just a bad user experience. It's denied access to rights and services.

This is what makes digital transformation in the public sector fundamentally different from anything I'd worked on before. And after years building systems that millions of people depend on, I've learned some hard lessons about what works, what doesn't, and why it matters so much to get it right.

## Why public sector digital is a different game entirely

When I moved from commercial tech to public sector work, I thought the principles would be the same. Good design is good design, right? Well, yes and no. The principles might be universal, but the constraints and stakes are completely different.

**The monopoly problem**

In commercial software, bad user experience gets punished by the market. Users leave, revenue drops, the company fixes it or dies. It's harsh but it works as a forcing function for quality.

In public services, that mechanism doesn't exist. Citizens can't choose a different government. If the tax payment system is terrible, you still have to use it. If the permit application process is broken, you still need that permit. The absence of choice means the absence of natural quality pressure.

This changes everything about how you must think about responsibility. You're not building a product that competes for users. You're building civic infrastructure that people depend on. Every design decision that excludes someone isn't just a poor choice, it's a systemic failure.

**Universal accessibility isn't optional**

Commercial products can target specific user segments. "Our app is for tech-savvy professionals aged 25-40." You optimize for your target audience and accept that others might not be your users.

In public services, your target audience is everyone. The 25-year-old software engineer and the 75-year-old retiree with limited tech experience and the person with visual impairments and the recent immigrant still learning the language and the rural resident with spotty internet connection.

You must design for the least capable user while still being efficient for the most capable. This is an enormously difficult design challenge, and one that commercial software rarely has to solve.

**Legacy systems and institutional constraints**

Commercial startups can choose modern tech stacks, iterate rapidly, break things and fix them. Public sector organizations rarely have that luxury.

You're often dealing with systems that are decades old, built in languages few people still write, with documentation that ranges from sparse to nonexistent. You can't just throw them away and start fresh. The risk is too high, the cost too great, and the systems are often mission-critical.

Then there are procurement processes designed to prevent corruption but which also prevent agility. Fixed-price contracts that require detailed specs upfront, the opposite of iterative development. Approval processes with multiple stakeholders and political considerations. Budget cycles that don't align with software delivery timelines.

These constraints are real and often frustrating. But they exist for reasons, some good, some historical. Understanding them is part of the work.

## The patterns of failure I've seen too often

Let me be honest about what doesn't work. I've seen these patterns repeat across different projects, different organizations, different countries.

### Digitizing without transforming

This is the most common failure mode. Take an existing bureaucratic process, however complex and outdated, and simply move it online without questioning anything.

The paper form had 40 fields, many of which were redundant or unnecessary? The digital form has 40 fields. The process required physical signatures from three different departments? Now it requires three different digital signatures and document uploads.

You haven't improved the process. You've just changed the medium of frustration from paper to pixels.

Real digital transformation means using the opportunity to rethink from first principles. What information do we actually need? What can we retrieve from existing databases rather than asking the user? How can we simplify the decision tree? What steps can be eliminated entirely?

I worked on a project where the original paper process had been designed in the 1970s and had accumulated layers of requirements over decades, each added for some reason that no one quite remembered. When we finally sat down and asked what was legally required versus what was historical artifact, we cut the process from 40 questions to 12. Same legal validity, vastly better user experience.

But getting there required someone with the authority to question the sacred cows. That's often the hardest part.

### Assuming technical literacy that doesn't exist

Systems built with assumptions that everyone has a smartphone with data, reliable internet, an email address they check regularly, and the ability to navigate complex interfaces.

But millions of people don't meet these assumptions. And they have the same legal right to access public services.

I've seen authentication systems that require users to install mobile apps, complete multistep verification processes, remember complex passwords that expire monthly, and navigate confusing error messages when something goes wrong.

For someone comfortable with technology, it's annoying but manageable. For someone who barely uses computers, it's an insurmountable barrier. They give up. They call support lines that are overwhelmed. They show up in person at offices, defeating the entire purpose of digital transformation.

The problem isn't that these users are incapable. The problem is that we've built systems that require a level of technical literacy that we shouldn't assume everyone has.

### Security theater that prevents legitimate access

Security is genuinely important, especially for systems handling sensitive personal data. But I've seen security measures that are more about appearing secure than actually being secure, while making the system unusable.

Password requirements so complex that users can't remember them, so they write them on sticky notes. Two-factor authentication via SMS, which sounds secure until you realize that SMS delivery is unreliable and some users don't have mobile phones. Account lockouts after two failed login attempts, creating enormous support burden.

The end result is systems that frustrate legitimate users while doing little to stop actual attackers. Meanwhile, support staff spend their time resetting passwords instead of helping with actual problems.

Good security finds the balance between protection and usability. It's risk management, not risk elimination. And it considers the full system, including human behavior, not just technical controls.

### The single channel fallacy

Building one digital channel and declaring mission accomplished. But assuming everyone can and will use that channel is naive.

Some people prefer phone support. Some need in-person assistance. Some want to do everything themselves online but need help the first time. Some have specific accessibility needs that the standard interface doesn't meet.

A true digital transformation requires a multi-channel strategy where all channels are integrated. The person who starts a request online should be able to follow up by phone. The support staff should be able to see the status of the person's online request. The in-person office should be able to help someone complete a digital form.

These channels shouldn't be silos. They should be different interfaces to the same underlying system.

### Launch and abandon

The classic pattern: big effort to design and build the system, big launch announcement, then the team moves on to the next project. No ongoing ownership, no monitoring, no iteration based on real usage.

Two years later, the system is broken in subtle ways, hasn't been updated for changing requirements, has accumulated a backlog of known issues that no one has the budget to fix. But it's still the official system, so people are forced to use it.

In commercial software, a product that isn't maintained gets replaced by competitors. In public sector, it becomes a zombie system, neither alive nor dead, just persisting because replacing it would require another big initiative that no one wants to fund.

## What actually works: principles that deliver results

I don't want this to be just a catalog of failures. I've also seen successes. Systems that genuinely work, that people use without frustration, that improve lives. It's absolutely possible. But it requires the right approach.

### Starting with users, not requirements

Before writing specifications or choosing technologies, go talk to the people who will actually use the system. And I don't mean focus groups in conference rooms. I mean field research.

Go to the physical offices where people currently access these services. Watch what they do. See where they get confused. Listen to the questions they ask the staff. Observe the workarounds they've developed to cope with current systems.

Talk to the frontline staff who interact with citizens every day. They see the patterns. They know where the system is broken. They've heard every edge case and exception. They're an invaluable source of insight, and they're usually delighted that someone is finally asking their opinion.

Talk to diverse users. Not just the tech-comfortable young professionals. Talk to elderly users, to people with disabilities, to immigrants, to residents in rural areas with poor connectivity. Each group will reveal different requirements and constraints.

Then involve users in the design process itself. Not "we built this, tell us if you like it" but "help us figure out how this should work." Co-design workshops, paper prototype testing, iterative feedback sessions.

The system that emerges from this process will be better because it's informed by reality, not assumptions.

### Radical simplification

Every field in a form, every step in a process, every document you require from users should have to justify its existence. "We've always asked for it" isn't justification. "It's required by regulation" needs to be verified, because sometimes it's required by policy that could be changed, or it's habit rather than law.

The goal should be to do as much work as possible on behalf of the user. If you already have their address in a database somewhere, don't make them type it again. If you can calculate something from other information, don't ask them to calculate it. If a step can be automated, automate it.

Pre-fill everything you can. Use intelligent defaults. Show only what's necessary initially, with advanced options available if needed but hidden by default.

And for the love of all that's good, write in plain language. No bureaucratic jargon, no legal language unless absolutely necessary and then with plain language translation. If a 12-year-old can't understand it, rewrite it.

I once worked on simplifying a benefits application. The original form asked "Applicant should indicate current domicile status and specify whether residence address differs from registered address of record." We changed it to "Where do you live?" and a simple address field. Same information, infinitely clearer.

### Accessibility from the start, not as afterthought

Accessibility isn't a nice-to-have feature you add at the end. It's a fundamental requirement that should inform design from day one.

This means following WCAG guidelines as a baseline. Proper semantic HTML. Sufficient color contrast. Keyboard navigation for all functionality. Alt text for images. Clear error messages. Form labels properly associated with inputs.

It means testing with actual assistive technologies. Don't just run an automated checker. Use a screen reader yourself. Try navigating with keyboard only. Use the system on a phone with a small screen.

It means considering cognitive accessibility too. Simple language helps not just people with cognitive disabilities but also people stressed, tired, or using the system in their second language. Clear layouts help everyone. Progressive disclosure reduces cognitive load.

And it means considering context. People might be accessing your system on old devices, on slow connections, in bright sunlight that makes screens hard to read, or while juggling multiple other stressors.

When you design for accessibility, you're not doing a favor for a small minority. You're improving the experience for everyone.

### Building for continuous improvement

The system you launch on day one will not be perfect. It can't be. Real users will reveal problems that no amount of testing could anticipate. Requirements will change. Technology will evolve.

So build for iteration, not for a one-time launch.

This means monitoring from day one. Where are users spending too much time? Where are they abandoning the process? What error messages are they seeing? What questions are they asking support?

This means collecting feedback actively. Simple rating system after interactions. Optional comment field. Regular user surveys. Analysis of support tickets to identify patterns.

This means having a team with ongoing ownership. Not a project that ends but a product that's maintained. Budget for continuous improvement, not just initial build.

And this means creating a culture where feedback leads to action. Quarterly review of metrics, identification of top issues, prioritized fixes, regular releases. Make improvement visible so users see that their feedback matters.

## The human impact when it works

When public sector digital transformation is done well, the impact is profound in ways that commercial software rarely achieves.

**Time is dignity**

Every hour someone doesn't spend waiting in line is an hour they can spend working, caring for family, or just living their life. For someone with a flexible job, that's convenience. For someone who works hourly and can't afford to take time off, it's the difference between making rent and not.

Time saved isn't just efficiency. It's respect for people's lives.

**Stress reduction matters**

Dealing with government bureaucracy is inherently stressful for many people. You're often interacting with government when something difficult is happening: you've lost a job, someone has died, you're dealing with health issues, you're immigrating to a new country.

If the system is simple and clear and supportive, you're removing a source of stress from people who are already stressed. This isn't trivial. This is compassion encoded in design.

**Agency and empowerment**

When you can complete processes independently, when you can see the status of your requests, when you understand what's happening and what you need to do next, you feel like a citizen with agency rather than a supplicant begging for help.

This psychological shift matters. It changes the relationship between people and institutions from one of subservience to one of mutual respect.

**Trust in institutions**

When government services work well, when they're transparent and responsive and treat people with respect, it builds trust in institutions. And that trust is the foundation of democratic society.

Every positive interaction is a small deposit in the bank of civic trust. Every negative interaction is a withdrawal. Over time, this shapes how people view government and their willingness to engage with it.

**Efficiency that enables better service**

And yes, good digital services are more efficient for government too. Less burden on frontline staff, fewer errors, faster processing. But here's the important part: those efficiency gains should be reinvested in better service.

Staff who aren't overwhelmed with handling routine transactions can help with complex cases. They can provide support to people who need it. They can be humans helping humans rather than being overwhelmed by volume.

## The challenges that remain real

I want to be honest that this work isn't easy. There are genuine structural challenges that individual projects can't simply overcome.

**Technical debt and legacy systems**

Many government systems were built decades ago in languages that are now obscure, with architectural patterns that are now outdated, by contractors who are long gone, with documentation that ranges from poor to nonexistent.

You can't just throw them away and start over. The risk is too high. The cost is too great. The knowledge of the edge cases and exceptions is embedded in code that no one fully understands anymore.

So you're left trying to integrate modern systems with ancient backends. Building API layers over systems that were never designed for APIs. Documenting while you work because no other documentation exists.

It's slow, unglamorous work. But it's necessary. The strangler fig pattern works: build new systems around the old, gradually routing traffic to the new, eventually replacing the old. But it takes years.

**Procurement and contracting**

Public sector procurement exists to prevent corruption and ensure value for money. These are legitimate goals. But the processes often make it difficult to work in modern agile ways.

Fixed-price contracts that require detailed specifications upfront. Vendor selection based primarily on cost. Preference for large established vendors who can navigate complex processes over innovative smaller companies.

Long procurement cycles that mean by the time the contract is signed, the requirements have changed. Difficulty in adjusting scope as you learn from users.

Fixing this requires policy changes, not just technical solutions. Some jurisdictions are experimenting with new models: smaller contracts, agile procurement, evaluation based on delivery track record rather than just documentation. But change is slow.

**Organizational culture and change management**

Technology is often the easy part. Culture is hard.

Public organizations are often risk-averse because the consequences of failure are public and political. "We've always done it this way" is a powerful force.

Employees who have worked in certain ways for decades might see digitalization as a threat. "Will I be replaced by automation?" is a real and legitimate fear.

Successful digital transformation requires bringing people along. Early involvement in design decisions. Clear communication about why things are changing. Training and support during transitions. Celebrating successes to build momentum.

And it requires leadership that's willing to take risks and support innovation even when there are inevitable stumbles along the way.

**The persistent digital divide**

Not everyone has equal access to technology. Elderly people, low-income households, rural areas with poor connectivity, people with certain disabilities, recent immigrants, all face barriers to digital access.

Digital-first cannot mean digital-only. Multiple channels must remain available. But maintaining those channels costs money that's often under pressure.

Investment in digital literacy programs, in connectivity infrastructure, in device access for those who can't afford them, all of these are necessary complements to digital service delivery. They cost money now to prevent exclusion later.

## What this means for those of us building these systems

If you work in technology, you can contribute to making public services better.

**Direct public sector work**

Working directly for government or on government contracts is challenging. The pace can be frustrating compared to startups. The constraints are real. The politics can be maddening.

But the impact is also more direct and meaningful than almost anything in commercial tech. You're literally improving the lives of millions of people. You're working on systems that matter to democracy and social equity.

It's not for everyone. But if you have the temperament for it, it's deeply rewarding work.

**Open source civic tech**

Contributing to open source projects that support government digital services. Shared platforms, component libraries, tools that make it easier for government to deliver good digital services.

This work happens outside government but enables better outcomes inside government.

**Advocacy and feedback**

When you encounter broken public digital services as a user, provide constructive feedback. Help make the case for better investment in digital services. Push back when you see exclusionary design.

Use your expertise and platform to advocate for better outcomes. This matters.

**Knowledge sharing**

Many public sector organizations lack deep technical expertise. Workshops, mentorship, advisory roles, all of these can help transfer knowledge and build capacity.

Not everyone can or should work in public sector full-time. But most of us can contribute something.

## What I hope for

I want to see a future where accessing public services is as easy as ordering from a commercial website, but with the accessibility and inclusion that commercial sites often lack.

Where your data is yours and you can see who accesses it and why. Where processes are transparent and you understand what happens and when. Where feedback is acted upon and systems continuously improve.

Where no one is excluded because the digital system doesn't work for them. Where technology enables access rather than creating barriers.

This isn't a utopia. It's achievable. Several countries have shown it's possible. It requires political will, adequate investment, the right talent, user-centered approach, and long-term commitment. But it can be done.

Every simplified process matters. Every barrier removed matters. Every person who can now access a service they couldn't before matters.

## The real transformation isn't digital

Here's what I've come to understand after years doing this work: digital transformation in the public sector isn't really about technology.

It's about power and access and equity.

It's about whether we're building systems that serve everyone or only those already privileged with access and literacy and ability.

It's about whether government meets people where they are or requires them to meet government where it is.

It's about whether we're using technology to reduce the friction in people's interactions with the state or using it to create new forms of exclusion.

The technology is just the means. The transformation that matters is in the relationship between people and institutions. Making it more respectful, more responsive, more equitable.

That elderly woman who called support in tears, she didn't need better technology. She needed a system designed with empathy for people like her. She needed us to remember that user interfaces aren't neutral, they encode assumptions about who matters.

When I think about the work we do now, I think about her. About whether what we're building would work for her. About whether we're making things genuinely better or just different.

That's the measure that matters.

Not how modern our tech stack is. Not how elegant our code is. But whether the person who needs this service can use it. Whether they're treated with dignity in the process. Whether they come away feeling served rather than frustrated.

That's the transformation that matters. That's the work that's worth doing.

And every day we have the chance to make it a little bit better. Every form we simplify. Every barrier we remove. Every assumption we question.

This is technology in service of the human. Not technology for its own sake, but as a means to a more just and accessible relationship between people and the institutions that serve them.

That's the future worth building. And it's work I'm grateful to be part of.
