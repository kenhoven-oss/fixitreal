# FixItReal.com — Build Plan & Implementation Blueprint

**Prepared:** 2026-04-19
**For:** Ken Hoven / solo operator
**Companion to:** [STRATEGY.md](STRATEGY.md), [STRATEGY_V2.md](STRATEGY_V2.md)

---

## A. Staged Implementation Plan

**Ship target: 6–8 weeks from today.** Solo founder, nights-and-weekends pace.

### Phase 0 — Foundation (Week 1)

- Design system: pick 2 fonts, primary/accent colors, spacing scale, set up Tailwind theme in `globals.css`
- Build shared components: `Header`, `Footer`, `NewsletterBlock`, `ExpertBadge`, `TrustBar`, `Prose` wrapper
- Stub the 5 trust pages (About, Editorial Standards, Methodology, Affiliate Disclosure, Contact) with real content
- Set up MDX content loader + frontmatter typing
- Choose and wire email provider (**recommendation: Beehiiv** — free tier, monetization built in, better deliverability than ConvertKit for this use case)
- Set up Vercel Analytics + Google Search Console
- Build lead magnet PDF: "The Home Repair Cost Calendar"

### Phase 1 — Content Wave A (Weeks 2–3)

Publish **10 of 15 pages** — all non-YMYL, no expert blocker:

Honest Advice (5):

- How to vet a contractor
- Why home warranties are usually a bad deal
- 7 signs a repair quote is overpriced
- When a handyman is enough, when you need a licensed contractor
- What to ask before hiring an electrician or plumber

Repair Costs (3 non-YMYL):

- Plumber hourly cost
- Electrician hourly cost
- Toilet replacement cost

DIY or Hire (2 non-YMYL):

- Garbage disposal repair vs replace
- Drywall repair: DIY or hire

Homepage goes live here. Newsletter capture live. Sitemap submitted to Google Search Console.

### Phase 2 — Content Wave B (Weeks 4–5)

Publish remaining **5 pages**. Any YMYL-adjacent content (water heater, dishwasher install, ceiling fan) gets expert review before publish — budget $75–$150 for per-article review:

- Water heater replacement cost
- Garbage disposal replacement cost
- Ceiling fan installation: DIY or hire
- Toilet replacement: DIY or hire
- Dishwasher installation: DIY or hire

### Phase 3 — Tool (Weeks 6–8)

- Ship the DIY-or-Hire Decision Tool with 10 seed jobs
- Embed at `/tools/diy-or-hire` + as block on homepage + as sidebar on matching decision articles
- Generate shareable OG images for tool results (Next.js `ImageResponse`)

### Phase 4 — Iterate (Month 3+)

- Apply to Mediavine Journey at 1K sessions
- Begin lead-gen partner applications (Modernize/Networx) as traffic crosses 5K monthly uniques
- Review analytics; decide between: expanding decision tool library OR shipping cost estimator as Tool #2

**Total launch content: 15 articles, 5 trust pages, 1 tool, homepage.** Nothing more.

---

## B. Sitemap & URL Structure

```
/                                        Homepage
/diy-or-hire                             Pillar hub (10 articles indexed)
/diy-or-hire/garbage-disposal            Decision article
/diy-or-hire/drywall-repair
/diy-or-hire/ceiling-fan-installation
/diy-or-hire/toilet-replacement
/diy-or-hire/dishwasher-installation

/costs                                   Pillar hub
/costs/water-heater-replacement          Cost article
/costs/plumber-hourly
/costs/electrician-hourly
/costs/toilet-replacement
/costs/garbage-disposal-replacement

/advice                                  Pillar hub
/advice/vetting-a-contractor             Advice article
/advice/home-warranties-bad-deal
/advice/signs-of-overpriced-quote
/advice/handyman-vs-licensed-contractor
/advice/questions-before-hiring

/tools/diy-or-hire                       Decision tool (standalone URL)

/about                                   Redirects to /about/team or serves index
/about/editorial-standards
/about/methodology
/about/contact
/affiliate-disclosure

/sitemap.xml                             Auto-generated (next-sitemap)
/robots.txt                              Auto-generated
/feed.xml                                RSS (optional, good for AI crawlers)
```

**URL conventions:**

- All lowercase, hyphenated slugs
- No `/blog/` prefix (adds noise)
- Pillar hubs singular (`/costs`, not `/cost-guides`) — tighter, more memorable
- Tools pluralized (`/tools/`) to leave room for Tool #2 later without restructuring

---

## C. Homepage Wireframe Copy

```
─────────────────────────────────────────────────────────────
[NAV: FixItReal]  DIY or Hire  ·  Costs  ·  Advice  ·  About  🔍  ✉️
─────────────────────────────────────────────────────────────

HERO
───
H1: Fix it right, not twice.
Sub: Honest answers to the questions every homeowner asks:
     Should I fix this myself, what should it cost, and
     who do I trust to do it?

[ Pick a job: (dropdown: "replace a toilet", "install a ceiling fan"…) ]
[ Get the answer → ]

Secondary links: Browse repair costs · Read honest advice

───

TRUST BAR (thin, 1 line)
🛡 Reviewed by licensed tradespeople  ·  ❌ No home warranty ads, ever
·  📊 Cost data tracked and dated

───

DIY OR HIRE TOOL BLOCK
H2: Should you DIY, or is this one worth hiring out?

[ Embedded version of the tool's job-selector — 6 of the 10 jobs as
  quick-pick cards. Click → routes to /tools/diy-or-hire?job=X ]

───

POPULAR REPAIR COSTS
H2: What things actually cost in 2026
Sub: Real numbers. Updated quarterly. No ranges wide enough to be useless.

[ 3 cost cards, each showing: headline cost ("$180–$240"),
  project name, "see the breakdown" → /costs/X ]

[ Link: See all cost guides → ]

───

HONEST ADVICE
H2: The advice Angi's blog won't publish
Sub: We don't take money from home warranty companies. We name names.

[ 3 advice cards, preview text showing strong opinions ]

[ Link: Read all advice → ]

───

WHY TRUST FIXITREAL
H2: What you won't find here
- No home warranty affiliates, ever
- No product reviews of tools we haven't used
- No contractor lead-gen that doesn't meet our criteria
- No AI-written content without human review
- Every YMYL article reviewed by a licensed pro

[ Link: Our methodology → ]

───

EMAIL SIGNUP
H2: The Home Repair Cost Calendar
Sub: Free. The one-page PDF that tells you what to check — and what it
     should cost — every month of the year.
[ email input ] [ Get the calendar → ]

───

LATEST ARTICLES
(3-column grid, most recent from each pillar)

───

FOOTER
About  ·  Editorial Standards  ·  Methodology  ·  Affiliate Disclosure
·  Contact  ·  © FixItReal 2026
```

**Copy notes:**

- Hero is direct, 2 sentences max, one action
- Trust Bar appears *above* the tool to set credibility before interaction
- "What you won't find here" is load-bearing — it's your brand differentiator stated explicitly
- No stock images in the hero. Use typography.

---

## D. Page Templates

### D.1 DIY or Hire template (`/diy-or-hire/[slug]`)

```
[Breadcrumb: DIY or Hire / Garbage Disposal]

[VERDICT BANNER]                              ← sticky on scroll (optional)
🟢 DIY Recommended — most homeowners save ~$180
Risk: Low  ·  Permit: None  ·  Time: 45 min  ·  Cost: $85 vs $265

H1: Should you replace your own garbage disposal?

By [author] · Reviewed by [expert name, License # 12345 · CA]
Updated: April 2026

[TL;DR BOX — 3 lines]

## The short answer
One paragraph. The verdict and the one reason.

## When it's a clear DIY
- Bullet
- Bullet

## When it's worth hiring out
- Bullet
- Bullet

## What the job actually involves
Numbered steps, 5–8 max. Link to YouTube videos (not embedded — external link
so we're not competing with them in the SERP).

## Honest cost breakdown
| DIY | Pro |
| --- | --- |
| Parts $X | Labor $Y |
| Tools $X | Parts $Z |
| Total $X | Total $Y |

[DIY-or-Hire TOOL EMBED — filtered to this job by default]

## Red flags that change the answer
Paragraph naming specific scenarios.

## Related
- [Link to cost guide for same job]
- [Link to the "vetting a contractor" advice article]
- [Link to adjacent decisions]

[NEWSLETTER BLOCK]
```

**JSON-LD on this page:** `HowTo` + `FAQPage` + `BreadcrumbList`

### D.2 Repair Cost template (`/costs/[slug]`)

```
[Breadcrumb]

[COST HEADLINE — big, unmissable]
$1,350 – $2,400 to replace a standard 50-gal water heater
(Last updated: April 2026 · 87 contractor quotes)

H1: Water heater replacement cost in 2026

By [author] · Reviewed by [expert]
Updated: April 2026

[METHODOLOGY LINK — "how we got this number"]

## Cost breakdown
| Component | Typical Cost | Notes |
| --- | --- | --- |
| Water heater (40–50 gal) | $550–$900 | Gas vs electric affects this |
| Labor (plumber) | $500–$900 | 3–5 hr at $130–$180/hr |
| Permit | $50–$200 | Required in 41 states |
| Haul-away | $50–$100 | Usually included |
| Code-upgrade extras | $100–$600 | Expansion tank, drip pan, seismic straps |

## By region
| Region | Median | Range |
| --- | --- | --- |
| West | $1,850 | $1,500–$2,600 |
| Northeast | $1,950 | $1,600–$2,700 |
| Midwest | $1,350 | $1,100–$1,800 |
| South | $1,400 | $1,150–$2,000 |

## Why it costs what it costs
Plain-language 2 paragraphs.

## What you shouldn't pay more than
Opinionated 2 sentences. This is the brand voice moment.

## Get free quotes                ← LEAD-GEN EMBED
[ Quote form: ZIP, name, email, phone, "I need:" dropdown ]
Powered by [Partner] · We get paid when you request a quote.
We still recommend you get 3.

## Should you DIY instead?
Short paragraph + [Link to matching decision article]

## Related
- Matching decision article
- Adjacent cost guides
- Related advice

[NEWSLETTER BLOCK]
```

**JSON-LD:** `Article` + `FAQPage` + schema-less structured pricing data in a `<dl>` that LLMs can parse.

### D.3 Honest Advice template (`/advice/[slug]`)

```
[Breadcrumb]

H1: Why home warranties are (almost) always a bad deal

By [author] · Updated April 2026 · 7 min read

[LEAD IMAGE or PULL QUOTE — not stock photo. Either illustration or blockquote]

Essay-style. Direct paragraphs. Opinion is explicit.

No tables required (unless advice piece needs them).

Subheadings for scannability:
## The 3 reasons the math doesn't work
## The companies to specifically avoid
## When a warranty *does* make sense (rare)
## What to do instead
## What if my realtor is pushing one?

[ PULL QUOTE every 800 words to break text ]

## Related
[Cross-pillar links]

[NEWSLETTER BLOCK]
```

**JSON-LD:** `Article` + `Person` for author.

---

## E. DIY-or-Hire Tool Data Structure

Single TypeScript file at `src/content/jobs.ts`. No DB for launch. Content-as-code.

```ts
// src/content/jobs.ts

export type Trade =
  | "plumbing" | "electrical" | "hvac" | "appliance" | "cosmetic" | "mechanical";

export type RiskLevel = "low" | "moderate" | "high" | "extreme";
export type Verdict = "diy-recommended" | "maybe-diy" | "hire-a-pro";

export type Job = {
  slug: string;                     // "replace-toilet"
  name: string;                     // "Replace a toilet"
  trade: Trade;
  ymyl: boolean;                    // requires expert review
  expertReviewer?: string;          // "Jamie R., Licensed Plumber CA #12345"
  difficulty: 1 | 2 | 3 | 4 | 5;    // 1 easy, 5 expert
  risk: RiskLevel;
  permit: {
    commonlyRequired: boolean;
    notes: string;                  // "Required in 41 states; check local"
  };
  time: {
    diyMinutes: number;
    proMinutes: number;
  };
  cost: {
    diy: { low: number; high: number; notes?: string };
    pro: { low: number; high: number; notes?: string };
  };
  toolsNeeded: string[];
  verdict: Verdict;
  reasoning: string;                // 1 sentence, shown on result screen
  relatedArticles: {
    decision?: string;              // slug → /diy-or-hire/[slug]
    cost?: string;                  // slug → /costs/[slug]
    advice?: string[];              // slugs → /advice/[slug]
  };
  lastReviewed: string;             // ISO date
};

export const jobs: readonly Job[] = [
  {
    slug: "replace-toilet",
    name: "Replace a toilet",
    trade: "plumbing",
    ymyl: false,
    difficulty: 2,
    risk: "low",
    permit: { commonlyRequired: false, notes: "Not typically required." },
    time: { diyMinutes: 90, proMinutes: 60 },
    cost: {
      diy:  { low: 140, high: 400, notes: "Toilet + wax ring + supply line" },
      pro:  { low: 300, high: 600, notes: "Plus disposal of old unit" },
    },
    toolsNeeded: ["adjustable wrench", "putty knife", "bucket", "gloves"],
    verdict: "diy-recommended",
    reasoning:
      "Toilet replacement is mechanical, low-risk, and well-documented. Saves $150–$300.",
    relatedArticles: {
      decision: "toilet-replacement",
      cost: "toilet-replacement",
      advice: ["questions-before-hiring"],
    },
    lastReviewed: "2026-04-15",
  },
  // ... 9 more
] as const;

export function getJob(slug: string): Job | undefined {
  return jobs.find(j => j.slug === slug);
}

export function getJobsByVerdict(verdict: Verdict): Job[] {
  return jobs.filter(j => j.verdict === verdict);
}

export function getJobsByTrade(trade: Trade): Job[] {
  return jobs.filter(j => j.trade === trade);
}
```

**Why this shape:**

- Single source of truth for the tool, cost-article cost boxes, and decision-article verdict banners — all three templates read from the same data, so numbers never drift.
- No DB, no CMS. Edit a file, git push, Vercel redeploys. Solo-friendly.
- Type-checked by TS; broken data breaks the build, not production.
- Easy to migrate to DB later (keep the same shape, swap the source).

---

## F. Internal Linking

Three linking rules, hard-coded into templates:

1. **Decision ↔ Cost ↔ Advice triad.** Every decision article links to the matching cost article and at least 1 advice article. Every cost article links back to the decision article. This triangulates topical authority.
2. **Tool embed on every matching page.** `/diy-or-hire/toilet-replacement` embeds the DIY-or-Hire tool filtered to `job=replace-toilet`. Same for cost pages.
3. **Pillar hub links down and up.** Hubs (`/diy-or-hire`, `/costs`, `/advice`) link to every article in the pillar. Every article has a breadcrumb link back to the hub.

Footer: trust pages only, no sitemap-style link lists.

Header: just the 3 pillars + About + search. No mega-nav. (Resist this instinct forever.)

Don't build a "related posts" algorithm. Hand-pick 3 links per article, tied to the content. Solo sites drift fast with auto-recommenders.

---

## G. What's Weak or Missing

### 1. Tool ordering — flagging once, then moving on

The prompt overrides the "cost estimator first" recommendation from STRATEGY_V2. That's a **brand-first bet over an SEO-first bet** — and "DIY or Hire" is the wedge. Trade-off accepted: slower initial traffic, stronger brand coherence. Known trade. Don't relitigate.

### 2. Expert review is still vague

The prompt says *"High-risk electrical topics should be clearly flagged for expert review or caution."* That's a hedge, not a plan. Make the commitment concrete:

- **Named reviewer on retainer OR per-article** (budget range)
- **Show their photo + license number** on every YMYL article
- **Flag YMYL articles visibly** ("Electrical work can cause injury or fire. This article was reviewed by [Name], Licensed Electrician [state] [license #].")

The four YMYL jobs in the tool (GFCI, panel, water heater, possibly dishwasher wiring) need named backing or the tool loses credibility the moment a reader checks the About page and sees no electrician.

### 3. "Search or job selector" is ambiguous

The homepage spec lists both a search box and a job selector. Pick one for launch:

- **Search** = full-text search (requires an index, more engineering, fewer benefits at 15 articles)
- **Job selector** = dropdown of 10 jobs from the tool (zero engineering, maps directly to the tool)

Go with **job selector**. Skip search entirely for launch. At 15 articles, users don't need it.

### 4. Cost data provenance isn't specified

Cost guides will have numbers. Where do they come from? Options:

- **Seed from published sources** (HomeGuide, Fixr, Angi) + transparently credit — fast but derivative
- **Crowdsource from readers** (form on each cost guide) — slow but defensible
- **Pay 5–10 contractors $50 each** for anonymized recent quotes in their metro — fastest path to genuine primary data

The **methodology page claim is only as strong as the source answer.** Decide before publishing cost guides.

### 5. Lead-gen integration isn't scoped

Modernize/Networx planned for month 3+. But the quote form needs to be in the cost-article template from day one — even if it just goes to a mailto: for now. Shipping the template with the form slot means day-1 lead-gen activation is a config change, not a redesign.

### 6. Analytics & SEO plumbing not mentioned

Add to Phase 0:

- Vercel Analytics (already free)
- Google Search Console verification (meta tag in `layout.tsx`)
- `next-sitemap` for `sitemap.xml` + `robots.txt`
- Open Graph images per article (use `ImageResponse` in route segments)
- Per-page canonical URLs (already in the metadata helper)

### 7. Content authoring workflow not specified

Who writes the 15 articles? If self, budget 5–8 hours per article for quality output at ~2,000 words — that's 75–120 hours of writing. Over 4 weeks nights-and-weekends: tight but doable. If hiring, go with one writer at $100–$150/article ($1,500–$2,250 total for 15). Don't use AI drafts without heavy human rewriting — post-HCU risk outweighs savings.

### 8. Missing trust-page content

The prompt lists 5 trust pages but doesn't specify content. Each needs real substance:

- **About:** Who you are, why the site exists, what makes you credible (even if credibility = "ex-homeowner who got ripped off")
- **Editorial standards:** How articles are reviewed, conflict-of-interest policy, update cadence
- **Methodology:** How cost data is collected (answering #4 above)
- **Affiliate disclosure:** Plain-English, not legal boilerplate
- **Contact:** Real email address, not a form (trust signal)

If these pages feel thin, the entire "consumer advocate" positioning collapses. Budget 4–6 hours to write them well.

---

## H. Simplest Next.js Implementation

### Stack (keep what's shipped, add minimum)

Already shipped:

- Next.js 16.2, TS, Tailwind 4, App Router, `src/` layout, `@/*` alias
- Metadata + JSON-LD helpers
- Header/Footer/site config

Add:

- **Content:** `@next/mdx` + `gray-matter` + `remark-gfm` (for MDX articles with frontmatter)
- **Sitemap:** `next-sitemap`
- **OG images:** Next.js built-in `ImageResponse` (no extra dep)
- **Email:** Beehiiv's embed form (zero engineering)

Skip for launch:

- No CMS (Contentlayer, Sanity, etc.) — YAGNI for 15 articles
- No search library — job selector is enough
- No analytics library beyond Vercel Analytics
- No state management — everything server-rendered

### File structure (extends current scaffold)

```
src/
  app/
    layout.tsx                           (existing, enhance)
    page.tsx                             homepage
    diy-or-hire/
      page.tsx                           pillar hub
      [slug]/
        page.tsx                         decision article
    costs/
      page.tsx
      [slug]/
        page.tsx
    advice/
      page.tsx
      [slug]/
        page.tsx
    tools/
      diy-or-hire/
        page.tsx                         tool UI (reads ?job= param)
    about/
      page.tsx                           About
      editorial-standards/page.tsx
      methodology/page.tsx
      contact/page.tsx
    affiliate-disclosure/page.tsx
    sitemap.ts                           or use next-sitemap
    opengraph-image.tsx                  default OG
  content/
    site.ts                              existing
    jobs.ts                              DIY-or-Hire tool data
    articles/
      diy-or-hire/
        garbage-disposal.mdx
        drywall-repair.mdx
        ...
      costs/
        water-heater-replacement.mdx
        ...
      advice/
        vetting-a-contractor.mdx
        ...
  lib/
    env.ts                               existing
    metadata.ts                          existing
    jsonld.ts                            existing, extend with HowTo + FAQPage helpers
    articles.ts                          MDX loader + frontmatter parser
  components/
    Header.tsx                           existing
    Footer.tsx                           existing
    NewsletterBlock.tsx                  new
    TrustBar.tsx                         new
    ExpertBadge.tsx                      new
    VerdictBanner.tsx                    new (for decision articles)
    CostTable.tsx                        new (for cost articles)
    JobSelector.tsx                      new (homepage + tool)
    DiyOrHireTool.tsx                    new (tool UI)
    QuoteForm.tsx                        new (stub → real partner form later)
    Prose.tsx                            new (typography wrapper for MDX)
```

### MDX article shape

```mdx
---
title: "Why home warranties are (almost) always a bad deal"
slug: home-warranties-bad-deal
pillar: advice
description: "The math, the companies to avoid, and what to do instead."
author: ken-hoven
reviewedBy: null
publishedAt: 2026-05-01
updatedAt: 2026-05-01
readingMinutes: 7
---

Essay content in markdown...

<PullQuote>The average homeowner pays more in premiums over 5 years than
they'd ever get back in repairs.</PullQuote>

More content...
```

Frontmatter parsed with `gray-matter`. Type-checked via a Zod schema in `lib/articles.ts`. Unknown frontmatter keys = build error. Every article validates or the deploy fails — that's the whole value.

### The tool (simplest viable)

`/app/tools/diy-or-hire/page.tsx` reads `?job=` query param, looks up the job in `jobs.ts`, renders the result card. If no `?job=` param, renders the job selector.

Shareable URL: `fixitreal.com/tools/diy-or-hire?job=replace-toilet` → always opens directly to that result. OG image auto-generated via `opengraph-image.tsx` in the route segment. That's the share loop.

No React state, no client components needed beyond the job-selector dropdown (which can even be a server-rendered form with a GET action). **That's the lean version.**

### Deployment

Already on Vercel via GitHub. Every push to `main` redeploys. Preview deploys per PR. Nothing to change.

---

## Bottom Line

A 6–8 week plan that can ship, with a 15-article corpus, one tool, and a brand story Google and humans both understand. The things that will make or break it:

1. **Write the trust pages like journalism, not boilerplate.** That's the product.
2. **Commit concretely to expert review for YMYL articles.** Name, license, photo. Non-negotiable for 2 of the 5 decision articles and 1 of the 5 cost articles.
3. **Decide cost-data source before writing cost guides.** Either seed transparently or crowdsource or pay contractors — pick and publish the methodology.
4. **Resist scope creep.** No search, no auto-related-posts, no second tool, no YouTube, no tool-review section, no appliance error codes. Not yet.
5. **Ship the tool at week 8, not week 1.** Content first — the tool amplifies content that already exists.

---

*End of build plan.*
