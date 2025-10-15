---
layout: post
title: "Strategies for Creating Simple and Intuitive User Experiences"
subtitle: "My mother taught me that booking a doctor's appointment shouldn't feel like launching a rocket to the Moon"
date: 2025-01-29
categories: ux design simplicity
---

My mother is 68 years old and not particularly tech-savvy. The other day she called me for help with an app. After ten minutes of frustration on both sides, she told me something that stuck with me: "I don't understand why it has to be so complicated. I just want to book a doctor's appointment, not launch a rocket to the Moon."

She was right. And that sentence encapsulates everything you need to know about creating simple and intuitive user experiences: our job isn't to show how smart we are, but to make people's lives easier.

## What "simple" really means

Simplicity is deceptive. It seems easy, but it's the result of difficult choices, painful cuts, and a lot of discipline. As Antoine de Saint-Exupéry said: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."

When I talk about simplicity in UX, I mean several things:

**Cognitive clarity**

The user immediately understands what they can do, how to do it, and what will happen when they do it. There's no ambiguity, no need to think too much.

**Friction reduction**

Every extra step between the user and their goal is friction. Simplicity means eliminating or reducing this friction to the bare minimum.

**Forgiveness**

Errors are easy to correct. The interface prevents errors where possible and makes it easy to go back when necessary.

**Naturalness**

The interaction feels obvious, almost inevitable. The user doesn't wonder "how does it work?" but simply uses it.

## The enemies of simplicity

Before talking about how to create simplicity, let's talk about what kills it. Because in my experience, complexity almost never arises intentionally. It accumulates, feature after feature, compromise after compromise.

### Feature creep

It's enemy number one. You start with a simple, clean idea. Then someone says: "It would be nice if it could also do this." And then: "Our competitors have this feature." And then: "This stakeholder absolutely wants this thing."

A year later, you have a product that does a thousand things but none particularly well. The interface is crowded, menus are three levels deep, users get lost.

I've seen this pattern too many times. A to-do list app that becomes a project management tool. A note-taking app that tries to be also a calendar, task manager, and CRM. A product that loses its identity trying to be everything to everyone.

The strategy to fight feature creep? Say no. A lot, often. And when you say yes to a new feature, always ask yourself: what can we remove to make room?

### Organizational complexity reflected in the UI

Conway's Law says that organizations design systems that reflect their communication structure. And this also applies to the user interface.

I've seen interfaces where every department wanted its section, its menu, its space. The result is a fragmented experience that only makes sense to those who know the company's organizational chart.

The user doesn't know (and doesn't care) that "Customer Service" and "Support" are two different departments. They just want to solve their problem. But they find themselves with two separate sections with overlapping functionality, because they reflect the company's internal structure.

The strategy? Design for user needs, not for organizational structure. And you need someone with enough authority to say "no" when internal politics tries to invade the interface.

### The power user illusion

"But power users need these advanced features!"

It's true. But the solution isn't to put everything on the first screen. It's not to overload the base interface to satisfy 5% of users.

The solution is progressive disclosure: show simple things first, make complex ones accessible for those who seek them. Shortcuts for power users, but sensible defaults for everyone else.

Gmail is a perfect example. The base interface is very simple: read email, reply, search. But if you're a power user, you can activate lab features, create complex filters, use advanced keyboard shortcuts. Everything is there, but it's not thrown in your face.

### The technological temptation

New technology = desire to use it. Complex animations, elaborate gestures, "innovative" interfaces. Sometimes it works. Often it confuses.

I've seen apps that use complicated gestures because "it's cool." But the user doesn't know about these gestures, doesn't discover them, gets frustrated. Technology should be invisible, serving the experience, not an end in itself.

The strategy? Always ask yourself: does this technology serve the user or serve my ego?

## Practical strategies for simplicity

Enough with problems. Let's talk about solutions. Here are the strategies I apply to create simple and intuitive experiences.

### 1. Start from the user's goal

Before any wireframe, I ask myself: what does the user want to achieve? Not what I want them to do, but what they want to do.

And then: what's the shortest path between where they are now and where they want to get?

**User story mapping**

I write very simple user stories:
- "As a user, I want to book a medical appointment so I can see the doctor"
- "As a user, I want to check my balance so I know how much money I have"

Each story has a clear goal. And then I map the minimum steps needed to reach it. Every step I add must be justified. "Is this step really necessary? Can we eliminate it? Can we merge it?"

**The 'grandmother' test**

I made it up, but it works. If my grandmother (or my mother, or someone not technologically sophisticated) can't complete the main task in less than a minute, without instructions, I've failed.

This forces me to focus on the essential and make everything obvious.

### 2. Information architecture matters

How you organize information determines whether the user finds what they're looking for or gets lost.

**Card sorting**

I ask users to organize various functionalities into categories that make sense to them. I don't impose my mental structure. I discover theirs.

I'm often surprised. Things that are obviously connected to me aren't to them. Categories I thought were clear are confusing.

Card sorting shows me users' mental models. And that's the model I must follow.

**The 7±2 rule**

The human brain can hold about 7 elements (plus or minus 2) in working memory. This applies to menus, options, steps in a process.

If I have a menu with 15 items, the user is already overloaded. I need to group, categorize, hide what's not essential.

**Visual hierarchy**

Not everything has the same importance. The interface must reflect this with size, color, position, spacing.

The main call-to-action must be obvious. Secondary actions more discrete. Supporting information even less prominent.

When everything screams for attention, nothing gets noticed. Hierarchy creates focus.

### 3. Consistency and familiar patterns

The human brain loves patterns. When something works as we expect, we process it effortlessly. When it surprises, we have to stop and think.

**Internal consistency**

If in one part of the app the red button means "delete," it must mean "delete" everywhere. If swiping right does one thing on one screen, it must do the same thing elsewhere.

Every time I break consistency, I force the user to learn again. It's a cognitive cost.

**Convention and standard patterns**

Don't reinvent the wheel. If there's a standard pattern everyone knows, use it.

The logo in the top left that goes back to home. The hamburger icon for the menu. The cart for e-commerce. The magnifying glass for search.

Yes, maybe they're not the most creative patterns. But they're familiar. And familiarity reduces friction.

Sometimes someone says: "But we want to be original!" And I respond: "Be original in solving users' problems, not in confusing them with new patterns."

**Jakob's Law**

Users spend most of their time on other sites, not on yours. This means their expectations are formed by those other sites. If you deviate too much, you better have a good reason.

### 4. Immediate and clear feedback

The user must always know what's happening. Silence creates anxiety and confusion.

**Loading states**

Never leave the user staring at a screen that seems stuck. Spinners, skeleton screens, progress bars. Something that says: "I'm working for you, wait."

And if the operation takes time, give an indication of how long. "Uploading... 45% complete" is infinitely better than a generic "Loading."

**Confirmations and success**

When the user completes an action, confirm it. A success message, an animation, a visible state change. Something that says: "You did it."

Especially for important or irreversible actions. If I just deleted something, tell me clearly. And maybe give me the ability to undo.

**Errors that help**

When something goes wrong, don't just say "Error." Explain what happened, why, and what I can do to solve it.

"Error 500" is useless. "We can't load your data. Check your internet connection and try again" is useful.

And when possible, prevent errors instead of handling them. Real-time validation, suggestions, intelligent defaults.

### 5. Progressive disclosure: reveal complexity gradually

Not everything needs to be visible all the time. Progressive disclosure means showing only what's needed at the moment, and making the rest available for those who seek it.

**Intelligent defaults**

Most users use the defaults. So those defaults must be excellent for the majority of cases.

In a form, pre-fill what you can. Suggest reasonable values. The user can always change, but starts from a sensible base.

**Advanced options hidden but accessible**

90% of users will never need those advanced options. Put them under an "Advanced settings" or "More options." Keep the interface clean for the majority, but also satisfy power users.

**Gradual onboarding**

Don't explain all features on the first day. Show the essential ones, and introduce others when they're relevant.

Empty states are great for this. When the user arrives in a new section, a contextual message can explain what they can do there.

**Information chunking**

If I need to show a lot of information, divide it into digestible chunks. Tabs, accordions, step-by-step wizards. Something that allows the user to process one piece at a time.

### 6. Test, test, test

I can think I've created the perfect interface. But only real users can confirm.

**Frequent usability testing**

I don't wait to have the finished product. I test prototypes, I test beta, I test the live version. Continuously.

I watch people use the interface. Where do they hesitate? Where do they click? Where do they get confused? Each test gives me insights to improve.

**Test with real users, not colleagues**

Colleagues know the product, know the context, have assumptions. Real users arrive fresh, without preconceptions. They're the ones who reveal the real problems.

**The five-second test**

I show a screen for 5 seconds, then hide it. What does the user remember? What caught their attention? If they don't remember the most important thing, the visual hierarchy is wrong.

**Analytics and heatmaps**

Quantitative data complements qualitative tests. Where do users actually click? What paths do they follow? Where do they abandon?

If a feature isn't being used, maybe it's not clear. Or maybe it's not needed. Either way, it's a problem to solve.

## Specific patterns that work

Beyond general strategies, there are specific patterns I've seen work repeatedly to create simplicity.

### Single-page focus

Instead of distributing a process across a thousand pages, sometimes everything can fit on a single well-designed screen.

Amazon checkout has optimized this: address, payment, review, all on one page. Scroll, fill in, order. No clicking back and forth.

Obviously it depends on context. But when possible, reducing the number of pages reduces friction.

### Inline editing

Instead of click on "edit," change values in a form, click on "save," why not allow direct editing?

Click on text, modify, click outside, saved. Simple, immediate.

### Smart defaults and automatic personalization

If I know that 80% of users choose option A, that's the default. If I know where the user lives, I pre-select their city.

The fewer decisions the user has to make, the faster they go.

### Natural language input

Instead of complex dropdowns for dates or numbers, sometimes a text field that understands "in 2 weeks" or "next Monday" is simpler.

Technology must adapt to the natural way people think, not vice versa.

### Empty states that educate

When a section is empty, instead of showing nothing or a generic "No data," use that space to guide the user.

"You don't have projects yet. Create your first project to get started" with a nice prominent button.

Empty states are opportunities for contextual onboarding.

## The inevitable trade-offs

Creating simplicity means making choices. And every choice has trade-offs.

**Simplicity vs. Power**

Sometimes powerful features are inherently complex. Photoshop can't be as simple as Paint while maintaining all its capabilities.

The trade-off is: who is your primary user? If it's a professional willing to invest time to learn, more complexity is fine. If it's a casual user who wants immediate results, you need to simplify even at the cost of reducing functionality.

**Simplicity vs. Control**

Automating and hiding details creates simplicity. But it takes away control. Some users want that control.

The trade-off is progressive disclosure: automatic defaults for those who want simplicity, advanced options for those who want control.

**Simplicity vs. Completeness**

Covering every possible use case makes the interface complex. Covering only common cases makes it simple but limited.

The trade-off is identifying use cases that represent 80% of situations and optimizing for those. The remaining 20% might require extra steps or workarounds. That's acceptable.

## Simplicity is a continuous process

Here's the thing: you don't create a simple experience once and you're done. The world changes, users change, the product evolves.

What was simple three years ago can seem dated today. New patterns become standard. Users' expectations grow.

So simplicity requires continuous maintenance:

**Periodic interface reviews**

Every six months, I look at the interface with fresh eyes. What has become complicated? Where has complexity accumulated? What can we simplify?

**Debt reduction**

Just as technical debt exists, design debt exists. Accumulated inconsistencies, temporary workarounds that became permanent, old patterns mixed with new ones.

I dedicate time to cleaning up this debt, even if it doesn't add new features. Because simplicity is a feature.

**Listen to customer support**

Recurring customer support questions are signals. If many people ask the same thing, maybe the interface isn't clear.

Instead of writing better documentation, can I make the interface more obvious?

## Real-world examples

I like to study products that have made simplicity their strength.

**Google search**

A search box. A button. Results. That's all that's needed for most users. Advanced operators exist, but they're hidden.

**Stripe**

Made payment integration simple, which is inherently complex. Clear APIs, excellent documentation, intuitive dashboard. The complexity is there, but it's well managed.

**Notion**

Starting from a simple concept (content blocks), built a powerful tool while keeping the interface clean. Complexity reveals itself gradually.

**Superhuman**

Email with powerful keyboard shortcuts. For a power user it's simplicity: everything fast, no mouse. For others it would be complex. They know their target and optimize for that.

## Simplicity as competitive advantage

In a world where everyone adds features, whoever removes wins.

Users are tired of complicated interfaces. They're tired of having to read manuals. They want tools that work, period.

If your product does one thing but does it incredibly well and simply, you have an advantage. Look at Calendly: book meetings. That's it. But it does it so well that it's become the default.

Simplicity is also easier to communicate. "Book meetings in 30 seconds" is a strong message. "Our tool has 47 features" isn't.

And simplicity scales better. The simpler the product, the easier it is to onboard new users, support them, make them advocates.

## The courage to simplify

It takes courage to simplify. It means saying no. It sometimes means removing existing features. It means disappointing some stakeholders to better serve users.

But it's the courage that makes the difference between a mediocre product and an excellent one.

Every time I'm tempted to add something, I stop. I breathe. And I ask myself: does this make the product better or just more complex?

If I'm not 100% sure it makes it better, I don't add it.

This discipline is difficult. But it's the only way to create experiences people love.

Because in the end, my mother is right. Booking a doctor's appointment shouldn't be like launching a rocket to the Moon. It should be simple, obvious, human.

And that's our job: making technology so simple that it disappears, leaving room for people's lives.
