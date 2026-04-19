# FixItReal.com — Final SEO Build Brief

**Prepared:** 2026-04-19
**Supersedes for build purposes:** [STRATEGY.md](STRATEGY.md), [STRATEGY_V2.md](STRATEGY_V2.md), [STRATEGY_V3.md](STRATEGY_V3.md)

---

## 1. Executive Summary

The current FixItReal plan (V3) is strategically sound but **SEO-underspecified**. It will ship a credible site; it won't ship a 10/10 SEO site. The gap between 7/10 and 10/10 isn't more content — it's **schema depth, internal-link discipline, E-E-A-T surfacing, Core Web Vitals hygiene, and crawlability plumbing that must be in place from the first deploy.**

Three structural problems in V3 that this brief fixes:

1. **Thin pillar hubs** (only 5 articles per pillar at launch) — Google reads this as weak topical authority. Hubs need depth signals beyond article lists.
2. **No schema strategy per page type** — every page type has a specific schema.org shape that should be mandatory, not optional.
3. **Tool has no SEO plan** — right now it's a UI; for ranking it needs its own content layer, schema, and indexable result pages.

Fix those three and the rest of V3 stands up. This brief gives you the exact standards and a launch-day checklist.

**Bottom line: 10/10 SEO at this scale means technical excellence + editorial rigor, not volume.** The lean scope is the right scope. Lean + technically pristine > broad + sloppy. Every single time.

---

## 2. What Already Supports a 10/10 SEO Target

- **Next.js 16 + App Router.** Server components, fast by default, Core Web Vitals green out of the box. Best-in-class React SEO platform.
- **Vercel hosting + CDN.** Edge caching, global PoPs, sub-100ms TTFB from most of the US. Non-trivial ranking signal.
- **Clean URL structure already sketched.** Lowercase, hyphenated, pillar-based, no `/blog/` noise, no query strings.
- **Metadata helper + canonical handling in `src/lib/metadata.ts`.** Every page already gets canonical URL, OG, Twitter card, locale — the single biggest thing most sites get wrong, and it's already right.
- **JSON-LD helper scaffolded.** Organization + WebSite schema already on every page. Needs extension to per-page-type schemas, but the pattern is in place.
- **HTTPS + valid SSL cert.** Already provisioned by Vercel.
- **Mobile-first responsive approach.** Tailwind defaults + the scaffolded layout are mobile-clean.
- **Namespaced content types (`/diy-or-hire/`, `/costs/`, `/advice/`, `/tools/`).** Crisp topical signals.
- **Apex → www redirect already configured as 307.** Canonical host is clear.

Roughly 60% of a 10/10 foundation for free.

---

## 3. What's Missing or Weak (for 10/10 SEO)

### High-priority gaps

1. **No `sitemap.xml` or `robots.txt` yet.** Both required day one.
2. **No per-page-type JSON-LD strategy.** `HowTo`, `FAQPage`, `Article`, `BreadcrumbList`, `Product`, `SoftwareApplication` — each page type needs its own.
3. **No per-article Open Graph images.** Every article shares the same default OG. Social/search CTR suffers.
4. **No image optimization strategy.** `next/image` usage, alt text discipline, AVIF/WebP, dimensions attributes — unspecified in V3.
5. **Breadcrumbs not specified.** Both visual and `BreadcrumbList` schema — missing.
6. **Author / reviewer schema not modeled.** `Person` schema on authors, `reviewedBy` relationships on YMYL pages — not specified.
7. **Thin pillar hubs.** 5 articles under `/costs` reads as weak authority. Hubs need original editorial content, not just link lists.
8. **Tool SEO plan missing.** `/tools/diy-or-hire?job=X` fragments; Google reads these as duplicate URLs. Needs either unique rendered URLs per job or canonical strategy.
9. **FAQ blocks not mandatory.** Every cost guide and decision page should have an FAQ section with `FAQPage` schema.
10. **No explicit 404/500 page strategy.** Soft 404s kill crawl budget.

### Medium-priority

11. **No RSS/Atom feed.** LLM crawlers and news aggregators use these.
12. **`updatedAt` dates not surfaced in UI or schema** on most page types.
13. **No external linking policy.** Sites that never link out look suspicious. Cite sources.
14. **No analytics + Search Console verification plan.** Built-in to Phase 0 but not explicit.
15. **Article reading time** — SEO-irrelevant but UX signal that feeds dwell time.

### Quiet future landmines

16. **Missing `X-Robots-Tag` policy.** Staging/preview deploys could leak into Google index.
17. **No consideration for Vercel-generated preview URLs** — `*-git-*.vercel.app` previews are public and can accidentally get indexed.
18. **No policy for query params** (e.g., `?ref=newsletter`). Without explicit canonical, these cause duplicate-content dilution.
19. **No `hreflang` strategy.** Irrelevant for English-only launch, but plan to add `en-US` explicitly so future locale work doesn't require URL restructure.

---

## 4. Final SEO Standards for the Build

### A. Technical SEO (mandatory at launch)

**Site architecture**

- Maximum 3 clicks from homepage to any article. Pillar hub at depth 1, article at depth 2.
- Every page linked from at least 2 other pages on the site (no orphans).
- Footer contains a lightweight sitemap (grouped by pillar) to guarantee link reachability.

**URL structure**

- Lowercase, hyphenated, singular pillar nouns (`/costs` not `/cost-guides`).
- No trailing slashes except on hub roots (pick a convention and enforce with middleware).
- No query strings for indexable content. Query strings only for tool state, which is canonicalized.
- No `.html` extensions.

**Canonical strategy**

- Every page declares `<link rel="canonical">` via `metadata.alternates.canonical`. Already in place.
- Tool result pages (`/tools/diy-or-hire?job=X`) canonical to `/tools/diy-or-hire/[job]` once we move to path segments (see §7).
- Pagination canonicals to page 1 OR uses `rel="prev/next"` — pick one; launch without pagination.

**XML sitemap**

- Use `next-sitemap` or Next.js's built-in `app/sitemap.ts`.
- Include: homepage, 3 pillar hubs, 15 articles, 5 trust pages, tool root. **Exclude**: search result pages, tool result fragments, 404/500.
- Regenerate on build. Register with Google Search Console + Bing Webmaster Tools.

**robots.txt**

- Allow all production crawlers.
- Explicitly block preview deploys: match `*.vercel.app` → `Disallow: /`. Use Vercel's `X-Robots-Tag` header via `middleware.ts` to enforce `noindex` on non-production hosts.
- Link to sitemap.xml.

**Metadata standards** (already scaffolded — extend)

- Title: `<Page-specific H1> | FixItReal` — max 60 chars total, H1 part truncated if needed.
- Description: 140–155 chars, active voice, include primary entity + intent word ("cost", "decision", "guide").
- OG image: 1200x630 PNG, per-page dynamic via `opengraph-image.tsx` in each route segment. Include title + brand + optional cost/verdict number.
- Twitter: `summary_large_image` card.
- `metadataBase` already set to site URL.

**Structured data (JSON-LD) by page type**

| Page type | Schemas |
|---|---|
| Homepage | `Organization`, `WebSite` |
| Pillar hub | `CollectionPage` + `BreadcrumbList` |
| DIY-or-Hire article | `HowTo` + `FAQPage` + `BreadcrumbList` + `Article` with `author`/`reviewedBy` |
| Repair Cost article | `Article` + `FAQPage` + `BreadcrumbList` + structured price range + `author`/`reviewedBy` |
| Honest Advice article | `Article` + `FAQPage` (if applicable) + `BreadcrumbList` + `author` |
| Trust pages | `AboutPage` / `ContactPage` + `BreadcrumbList` |
| Tool page | `WebApplication` + `BreadcrumbList` |
| Tool result pages | `Article` with job-specific schema + `BreadcrumbList` |

**Internal linking standards**

- Decision ↔ Cost ↔ Advice triad: every article in one pillar links to at least 1 article in each other pillar. Hand-curated, not algorithmic.
- Anchor text: descriptive, keyword-present but natural. Avoid "click here". 3–6 word anchors.
- Zero broken internal links tolerated — add a link-check script to the build pipeline.
- Footer sitemap grouped by pillar — keeps all pages ≤ 2 clicks.

**Image SEO**

- Use `next/image` exclusively. Never raw `<img>`.
- Every image has `width`, `height`, `alt`. Alt text describes the content for someone who can't see it (not SEO stuffing).
- Priority-load the hero image only (`priority` prop).
- Next.js auto-converts to AVIF/WebP with appropriate `sizes` attribute.

**Crawlability & indexing hygiene**

- All production pages return 200 OK. No soft 404s. A real 404 template returns HTTP 404.
- No `noindex` on production pages (unless explicitly a thin page you don't want indexed).
- Preview deploys must carry `X-Robots-Tag: noindex, nofollow` via middleware checking the hostname.
- Verify the site in Google Search Console + Bing Webmaster Tools on launch day.

### B. On-page SEO

**Title tag standards**

- Format: `<Specific Topic> | FixItReal` (brand suffix optional — skip if title nears 60 chars).
- Put the target keyword first. "Water heater replacement cost in 2026 | FixItReal" — not "The complete guide to what water heaters cost".
- Unique per page. Never duplicate.

**Meta description standards**

- 140–155 chars.
- Lead with the answer or the hook — first 90 chars appear on mobile SERPs.
- Include a number or specific claim when possible.
- Active voice. No "In this article, we will discuss…"
- End with an implicit CTA if natural.

**Heading hierarchy**

- One H1 per page, matches the page's core intent.
- H2s are scannable sections. 4–8 H2s per article.
- H3s only when nesting is genuinely needed. Avoid H4+.
- Heading text is descriptive, not cute.

**Intro copy structure**

- First 100 words answer the query directly.
- No preamble. Get to the answer.
- Include the primary entity and the intent entity in the first sentence.
- Opinion / angle in the lead.

**Entity relevance & semantic completeness**

- Each page covers its topic end-to-end. A "water heater cost" article that doesn't mention permits, regional variation, tank vs tankless, gas vs electric, and labor rates is incomplete.
- Mention related entities naturally (brand names, tool names, code sections) — LLMs and Google both reward semantic density.

**FAQ usage**

- Every cost guide and decision article has a FAQ block with 4–8 questions.
- FAQs come from actual user questions (Reddit threads, People Also Ask, contractor forums). Don't invent.
- Marked up with `FAQPage` schema.

**Update signals**

- Visible "Updated: [Month Year]" on every content page, next to the byline.
- `dateModified` in Article JSON-LD matches.
- Materially update 5–8 articles per quarter.

**Trust language**

- Every YMYL article ends with: "Reviewed by [Name], [Credential], License #[State+Number], Last reviewed: [date]."
- Cost guides show: "Based on [N] quotes tracked from [date range]."

**Author / reviewer handling**

- Author entity: a `Person` with a dedicated `/about/authors/[slug]` page.
- Reviewer shown with badge + link to reviewer profile page.
- Schema: `author` and `reviewedBy` properties on `Article` pointing to the author's URL.

**YMYL handling**

- Articles covering electrical, gas, water-supply, structural, or anything that can cause injury or code violation are YMYL.
- Before publishing any YMYL article: expert review complete, reviewer credentials displayed, safety warnings prominent.
- YMYL articles default to a more conservative verdict and always surface permit + code requirements.

**Content freshness**

- Minimum quarterly review cycle for cost guides.
- Advice articles can be refreshed annually unless industry changes.

### C. Content quality / E-E-A-T

**Every page must include:**

- Visible author byline with link to author profile.
- Publish date + update date (if different).
- Where relevant: reviewer byline with credentials.
- External citations to authoritative sources — minimum 3 per cost guide, 2 per decision article, 2 per advice piece.
- An original angle the big sites can't publish.

**Sitewide trust signals**

- "Meet our experts" page with real people, real photos, real credentials.
- "How we collect cost data" methodology page.
- "Editorial standards" page.
- Affiliate disclosure on every article + sitewide page.
- A visible "What we don't do" section (brand moat).

**Methodology presentation**

- First-class page at `/about/methodology`.
- Specifies: where cost data comes from, sample size, date range, what metros, how quotes are validated, who reviews YMYL content.
- Update quarterly with a changelog.

**Expert review presentation**

- Inline badge component on article header: photo + name + credential + license # + state + "Reviewed [date]".
- Link to full expert profile page.

**Avoid (these make pages feel thin/generic/AI-written):**

- Opening with "Are you wondering…" / "In today's world…" / "Home repair can be tricky…"
- Listicle headlines with "10 Best" / "Top 15"
- Tables with generic nationwide "average" prices and no sourcing.
- "We'll cover" preambles.
- Padded paragraphs.
- Stock photos of smiling contractors.

### D. UX / performance SEO

**Core Web Vitals priorities**

- **LCP** < 2.5s.
- **INP** < 200ms. Server components by default. Client components only for tool interaction.
- **CLS** < 0.1. Every image has `width`/`height`.

**Homepage restraint**

- < 150 KB total transferred (excluding fonts).
- No carousels, no autoplay video, no heavy animations.
- Self-host fonts via `next/font`.

**Kills to avoid:**

- Popup modals in first 10 seconds.
- Chat bubbles at launch.
- Auto-sticky newsletter bars.
- Third-party tag managers on launch.
- Cookie banners unless legally required.
- Full-page hero images on blog-style pages.

---

## 5. Final Sitemap & URL Structure

```
/                                         ← Homepage
/diy-or-hire                              ← Hub: CollectionPage + editorial intro (300+ words)
/diy-or-hire/[slug]                       ← Decision articles (5 at launch)
/costs                                    ← Hub: editorial intro, featured costs
/costs/[slug]                             ← Cost articles (5 at launch)
/advice                                   ← Hub: editorial intro, featured advice
/advice/[slug]                            ← Advice articles (5 at launch)
/tools                                    ← Tools hub (1 tool at launch)
/tools/diy-or-hire                        ← Tool entry / job selector
/tools/diy-or-hire/[job-slug]             ← Tool result pages (indexable, 10 jobs)
/about                                    ← About: AboutPage schema
/about/editorial-standards
/about/methodology
/about/authors/[slug]                     ← Author profiles (Person schema)
/about/experts/[slug]                     ← Expert reviewer profiles (Person schema)
/about/contact                            ← ContactPage schema
/affiliate-disclosure
/sitemap.xml                              ← Generated
/robots.txt                               ← Generated
/feed.xml                                 ← RSS
/opengraph-image.png                      ← Default OG fallback
```

**Changes from V3:**

- Added `/tools` hub.
- **Tool result pages as path segments** (`/tools/diy-or-hire/[job-slug]`), not query params.
- Added `/about/authors/[slug]` and `/about/experts/[slug]` for Person schema depth.
- Added `/feed.xml`.

---

## 6. Final 15 Launch Pages

### Decisions (5)

1. Garbage disposal: repair vs replace
2. Toilet: DIY or hire
3. Ceiling fan installation: DIY or hire (YMYL — expert-reviewed)
4. Dishwasher installation: DIY or hire
5. Garage door opener installation: DIY or pro (YMYL — expert-reviewed — brand-voice moment)

### Costs (5)

6. Plumber hourly cost in 2026
7. Electrician hourly cost in 2026
8. Water heater replacement cost (2026, ZIP-aware, YMYL — expert-reviewed)
9. Toilet replacement cost
10. Garbage disposal replacement cost

### Advice (5)

11. How to vet a contractor (14-point checklist)
12. Why home warranties are (almost) always a bad deal
13. 7 signs a repair quote is overpriced
14. The hidden fees in a typical home repair quote
15. How to get 3 contractor quotes without wasting their time

**Why this set beats V3:**

- Stronger link-magnet potential (warranty + hidden fees + quote-gathering all earn natural links).
- Better internal-linking triangulation (every pillar has 1 flagship + 4 supporting).
- The garage door opener decision is a brand voice moment.
- Keeps topical authority tight.

---

## 7. Final Tool Roadmap

### Tool #1 (launch): DIY-or-Hire Decision Tool

**Structural changes for SEO viability (vs. V3 spec):**

1. **Move from query params to path segments.**
   - `/tools/diy-or-hire` → job selector UI
   - `/tools/diy-or-hire/[job]` → individual result pages with unique content

2. **Each result page is a mini-article, not just a JSON dump.**
   - H1, verdict banner, decision rationale (150–250 words unique per job), cost comparison table, time/tools/risk/permit, "If you DIY" vs "If you hire", related articles, FAQ, expert badge (YMYL)

3. **Schema on each result page:**
   - `WebApplication` (parent) + `HowTo` OR `Article` (per result) + `FAQPage` + `BreadcrumbList`

4. **Sitemap:** Include all 10 job result URLs.

This turns the tool from "a UI feature" into "10 indexable content pages with a structured UI wrapper."

### Tool #2 (month 3–4): Cost Estimator (MVP 5–10 jobs)

Moved up from month 6 — SEO-strongest second tool.

### Tool #3 (month 6–9): Contractor Quote Scorecard

Paste 3 quotes → scored against cost data → "middle quote is closest to fair market."

---

## 8. Final Page Template Standards

### 8.1 Homepage

**Must-have sections:** H1 + tagline, trust bar, primary CTA (job selector), featured costs row, featured advice row, "What we don't do" trust block, newsletter block, footer.

**Above the fold:** H1 + tagline + trust bar + primary CTA.

**Schema:** `Organization` + `WebSite`.

### 8.2 Pillar hub

**Must-have sections:** H1, 300+ words of original editorial intro, article grid, cross-pillar links, newsletter.

**Above the fold:** H1 + intro lead + first 3 articles.

**Schema:** `CollectionPage` + `BreadcrumbList`.

### 8.3 DIY-or-Hire article

**Must-have sections:** Breadcrumb, H1, verdict banner, byline + reviewer + date, TL;DR, short answer, when DIY / when hire, job steps, cost breakdown table, tool embed, red flags, FAQ, related, newsletter.

**Above the fold:** Breadcrumb, H1, verdict banner, byline, TL;DR.

**Schema:** `Article` + `HowTo` + `FAQPage` + `BreadcrumbList`.

### 8.4 Repair Cost article

**Must-have sections:** Breadcrumb, H1, cost headline (big), byline + reviewer + date, methodology link, cost breakdown, regional table, why it costs what it costs, what you shouldn't pay more than, quote form, "should you DIY?", FAQ, related, newsletter.

**Above the fold:** Breadcrumb, H1, cost headline, byline, last-updated date.

**Schema:** `Article` + `FAQPage` + `BreadcrumbList` + structured price data.

### 8.5 Honest Advice article

**Must-have sections:** Breadcrumb, H1, byline + date + reading time, opinionated lead, subheadings every 250–400 words, pull quotes every 800 words, external citations, FAQ if applicable, related, newsletter.

**Above the fold:** Breadcrumb, H1, byline, opinionated lead.

**Schema:** `Article` + `FAQPage` (if present) + `BreadcrumbList`.

### 8.6 Trust pages

**Must-haves:** Real person photos, real contact info, specific claims, date of last policy update, internal links to related trust pages.

**Schema:** `AboutPage`, `ContactPage`, or `Article` depending on page.

### 8.7 Tool pages

**Tool index (`/tools/diy-or-hire`):** H1, editorial intro (150+ words), job selector (10 jobs as cards), "how this tool works", "what we consider", related. Schema: `WebApplication` + `BreadcrumbList`.

**Tool result (`/tools/diy-or-hire/[job]`):** H1, verdict banner + reasoning, structured summary, "what you'll need" (DIY) or "what it costs" (Hire), FAQ, related articles, share buttons with per-result OG. Schema: `HowTo`/`Article` + `FAQPage` + `BreadcrumbList`.

---

## 9. Launch-Day SEO Checklist

**Must be DONE before going live:**

- [ ] `sitemap.xml` generated and at `/sitemap.xml`
- [ ] `robots.txt` at `/robots.txt` (allow production; disallow on non-prod via middleware)
- [ ] Google Search Console verified
- [ ] Bing Webmaster Tools verified
- [ ] Canonical URLs on every route
- [ ] Per-route `opengraph-image.tsx` for articles
- [ ] JSON-LD schemas per page type, server-rendered
- [ ] Visible breadcrumbs + `BreadcrumbList` schema on all non-home pages
- [ ] `Organization` + `WebSite` schema on homepage
- [ ] 15 articles published, each with byline + update date + reviewer (YMYL) + 3+ external citations + FAQ block
- [ ] Pillar hubs have 300+ word editorial intros
- [ ] Trust pages substantive (not boilerplate)
- [ ] Every article reachable within 3 clicks from homepage
- [ ] No orphan pages (each page linked from ≥ 2 others)
- [ ] Image alt text + dimensions on every image
- [ ] `next/image` used everywhere
- [ ] Self-hosted fonts via `next/font`
- [ ] HTTPS enforced
- [ ] apex → www 307 redirect confirmed
- [ ] 404 page returns HTTP 404
- [ ] Core Web Vitals green on PageSpeed Insights for homepage + 3 article archetypes
- [ ] Preview deploys carry `X-Robots-Tag: noindex` via middleware
- [ ] RSS feed at `/feed.xml`

**Can wait until month 2:**

- Schema testing with Rich Results Test on every page type
- Manual link-check across all internal links
- Server log analysis (requires traffic)
- Core Web Vitals field data from real users (CrUX)
- Indexed page count monitoring

**Monitor in Search Console immediately:**

- Coverage report
- Manual Actions report
- Mobile Usability
- Core Web Vitals
- URL Inspection on key pages

**Mistakes that drop you from 10/10 to 7/10:**

- Launching without per-article OG images
- Thin pillar hubs (list only, no editorial)
- YMYL articles without named expert reviewer
- Missing FAQ schema on pages that have FAQ blocks
- Trust pages under 300 words each
- Tool result pages on query params instead of path segments
- Heading hierarchy violations
- Stock-photo hero on homepage
- Generic listicle headlines
- External links with `nofollow` on legitimate citations

---

## 10. Final Implementation Roadmap

### Week 1 — Foundation

- Design system in Tailwind theme + core components
- `next-sitemap` installed + configured
- `robots.txt` strategy + middleware for non-prod `X-Robots-Tag`
- Extended JSON-LD helpers
- `opengraph-image.tsx` template
- MDX + `gray-matter` + frontmatter Zod schema
- Google Search Console + Bing WMT verified
- Beehiiv account + embed form
- Draft lead magnet PDF

### Week 2 — Trust + Tool foundations

- 5 trust pages written and published
- Author profile page + at least one expert reviewer confirmed for YMYL
- DIY-or-Hire tool data populated with 10 jobs
- Tool index page + 10 tool result pages built (server-rendered, schema-complete)
- Pillar hub pages built with 300+ word intros

### Week 3 — Content wave A (non-YMYL, 8 articles)

- Plumber hourly cost
- Electrician hourly cost
- Toilet replacement cost
- Garbage disposal replacement cost
- Garbage disposal: repair vs replace
- Toilet: DIY or hire
- How to vet a contractor
- 7 signs a repair quote is overpriced

### Week 4 — Content wave B (7 articles) + launch

- Water heater replacement cost (YMYL — expert-reviewed)
- Ceiling fan installation: DIY or hire (YMYL — expert-reviewed)
- Garage door opener installation (YMYL — expert-reviewed)
- Dishwasher installation: DIY or hire
- Why home warranties are a bad deal
- The hidden fees in a typical repair quote
- How to get 3 contractor quotes

**Launch.** Submit sitemap. Verify all checklist items.

### Month 2

- Monitor Search Console. Fix indexing issues within 48 hours.
- Newsletter weekly by end of month 2.
- Publish 2 new articles per week.
- Outreach for quality backlinks (HARO, podcast guesting, Reddit).
- Apply to Mediavine Journey at 1K sessions.

### Month 3

- Ship Cost Estimator tool (MVP 5 jobs → 15).
- Start quarterly "State of Home Repair Costs" data report.
- 30 articles total.
- Apply to Modernize / Networx at 5K monthly uniques.

---

## 11. Rewritten Final Build Prompt

> **Build brief: FixItReal.com — Lean launch, 10/10 SEO standard.**
>
> **Positioning:** FixItReal is a consumer-advocate home repair site that helps homeowners know what to fix, what it should cost, and when to hire help.
> **Tagline:** "Fix it right, not twice."
> **Homepage explainer:** "Know what to fix, what to buy, and when to hire help."
>
> **Stack:** Next.js 16.2 (App Router, `src/`, `@/*`), TypeScript, Tailwind 4, MDX with `gray-matter` + frontmatter Zod validation, `next-sitemap`, Beehiiv for email. Deployed on Vercel, repo `kenhoven-oss/fixitreal`. Already scaffolded with metadata + JSON-LD helpers.
>
> **Scope (no scope creep):** Homepage, 3 pillar hubs (`/diy-or-hire`, `/costs`, `/advice`), 15 articles (5 per pillar), 1 tool (`/tools/diy-or-hire` + 10 path-segment result pages), 5 trust pages (About, Editorial Standards, Methodology, Affiliate Disclosure, Contact), author/reviewer profile pages, email capture with lead magnet. No search, no tutorial library, no tool-review section, no CMS.
>
> **Launch content (exact 15):** Garbage disposal repair vs replace; Toilet DIY or hire; Ceiling fan DIY or hire (YMYL — expert-reviewed); Dishwasher DIY or hire; Garage door opener DIY or pro (YMYL — expert-reviewed); Plumber hourly cost; Electrician hourly cost; Water heater replacement cost (YMYL — expert-reviewed); Toilet replacement cost; Garbage disposal replacement cost; How to vet a contractor; Why home warranties are a bad deal; 7 signs a repair quote is overpriced; Hidden fees in home repair quotes; How to get 3 contractor quotes.
>
> **SEO standards (non-negotiable at launch):**
>
> - Canonical URL on every page.
> - Per-page JSON-LD: Homepage → Organization + WebSite; Hubs → CollectionPage + BreadcrumbList; DIY-or-Hire articles → Article + HowTo + FAQPage + BreadcrumbList; Cost articles → Article + FAQPage + BreadcrumbList + price data; Advice articles → Article + FAQPage + BreadcrumbList; Tool result pages → HowTo/Article + FAQPage + BreadcrumbList; Author/Expert profiles → Person.
> - Every article: H1, byline, update date, FAQ block, 3+ external citations, breadcrumb (visible + schema), 800+ words, original angle.
> - YMYL articles: reviewer badge with name, credential, license #, state, review date. Link to expert profile page.
> - Per-article dynamic OG images via `opengraph-image.tsx`.
> - `sitemap.xml` generated, registered in Search Console + Bing WMT.
> - `robots.txt` allows production, middleware emits `X-Robots-Tag: noindex` on non-production hosts.
> - `next/image` for all images, alt text + dimensions everywhere.
> - Pillar hubs contain 300+ word editorial intros.
> - Tool result pages on path segments, server-rendered with unique schema + OG per job.
>
> **Page templates:** Per §8. Every template spec must be implemented exactly.
>
> **Trust standards:**
>
> - Real author bio with photo.
> - At least one named credentialed expert reviewer on retainer or per-article basis — before YMYL articles publish.
> - `/about/methodology` reads like journalism, not boilerplate.
> - No home warranty affiliates. No AI-generated content without human rewriting. No stock photos. No listicle headlines.
>
> **Performance:** Core Web Vitals green. Homepage < 150 KB. LCP < 2.5s. No third-party tag managers at launch. Self-hosted fonts via `next/font`.
>
> **Monetization (deferred; build template slots now):**
>
> - Cost articles have a `<QuoteForm />` slot.
> - All articles have the `NewsletterBlock`.
> - Amazon Associates links only on pages that justify them.
> - No home warranties. Ever.
>
> **Not at launch:** search, mega-nav, related-posts algorithm, chat bubble, cookie banner, YouTube, appliance error-code database, courses, digital products, tool-review section, broad tutorial library.
>
> **Ship target:** 4 weeks from start.
> **Success definition for 10/10 SEO at launch:** Every item in §9 checklist green; PageSpeed Insights green for homepage + 3 article archetypes; Search Console verified + sitemap submitted + zero coverage errors; every article passes Rich Results Test for its target schema; every YMYL article carries expert review.

---

*End of brief.*
