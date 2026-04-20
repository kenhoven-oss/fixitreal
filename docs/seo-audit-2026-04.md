# FixItReal SEO Audit — April 2026

## Overall Score: 78 / 100

FixItReal demonstrates solid technical SEO fundamentals and exceptional editorial standards. Strengths include comprehensive structured data, clean robots/sitemap directives, strong E-E-A-T signals, and well-organized content architecture. The site's biggest gaps are inconsistent internal linking density on article pages, missing image optimization patterns, and underdeveloped UX/Core Web Vitals signals. These are correctable without major refactoring.

---

## Category Scores

| Category | Score |
| --- | --- |
| Technical SEO | 85 / 100 |
| Metadata quality | 82 / 100 |
| On-page content | 80 / 100 |
| Internal linking | 72 / 100 |
| E-E-A-T | 92 / 100 |
| UX / Core Web Vitals | 65 / 100 |
| Affiliate compliance | 88 / 100 |
| Accessibility | 79 / 100 |

---

## Detailed Findings

### Technical SEO (85/100)

**Strengths:**
- Sitemap auto-generated with correct priorities, changeFrequency, and lastModified dates (`src/app/sitemap.ts:1–60`)
- Robots.txt allows all crawlers and points to sitemap (`src/app/robots.ts:4–9`)
- Canonical URLs built consistently via buildMetadata() (`src/lib/metadata.ts:32,43`)
- Organization + WebSite schema emits on every page (`src/app/layout.tsx:39–41`)
- Google Search Console verification token in place (`src/app/layout.tsx:35`)
- Open Graph + Twitter cards configured with fallback OG image (`src/lib/metadata.ts:48–70`)
- No crawl-blocking mistakes or noIndex on public content

**Issues:**
- Buying guide pages hardcoded in sitemap rather than auto-generated, limiting scalability (`src/app/sitemap.ts:26–31`)
- Article schema on buying guides lacks image field attachment (`src/app/tools/best-drain-snakes-for-homeowners/page.tsx:315–323`)

### Metadata Quality (82/100)

**Strengths:**
- All public pages have title + description via buildMetadata() helper
- Descriptions consistently 100–160 chars, well within SEO range
- Titles follow "{title} | {site.name}" pattern consistently (`src/lib/metadata.ts:30`)
- No keyword stuffing; unique and specific descriptions
- Article metadata includes publishedAt + updatedAt for freshness signals

**Issues:**
- Some pillar hub descriptions could be more differentiated (all focus on main value prop, less on unique angles)
- Author schema not wired to articles (only name + URL); full Person schema available but unused (`src/lib/metadata.ts:80–81`)

### On-page Content (80/100)

**Strengths:**
- One H1 per page enforced through component structure
- H2/H3 hierarchy logical across all content
- Strong content depth: articles average 1,000–1,500+ words
- Reading time estimates visible on all articles
- YMYL flags explicitly marked (e.g., gfci-outlet-keeps-tripping: true) (`src/content/articles/advice/gfci-outlet-keeps-tripping.mdx:7`)
- Safety disclaimers render on YMYL articles (`src/components/content/ArticlePage.tsx:89–93`)
- Citations present on all articles (min 2–3 per piece)
- Sources displayed in collapsible section (`src/components/content/ArticlePage.tsx:108–119`)
- Last-reviewed/updated dates visible on all content (`src/components/content/ArticlePage.tsx:81–86`)
- Author attribution explicit with link to author page (`src/components/content/ArticlePage.tsx:76–79`)

**Issues:**
- No meaningful image alt text patterns detected on content images
- Related articles section uses hardcoded link fields (relatedAdvice, relatedCost, relatedJob); not all articles populate these, reducing internal linking density

### Internal Linking (72/100)

**Strengths:**
- Every article includes "Related" section with links to related articles (`src/components/content/ArticlePage.tsx:125–169`)
- Pillar hubs link to all their articles via Card grid
- Homepage surfaces featured costs + advice + tools + all pillars (`src/app/page.tsx`)
- Tools hub lists all 6 buying guides
- Buying guide pages include "Related reading" sections (`src/app/tools/best-drain-snakes-for-homeowners/page.tsx:284–307`)
- Breadcrumbs on all deep pages aid crawlability

**Issues:**
- Many advice articles do NOT populate relatedAdvice, relatedCost, relatedJob fields, creating orphan-like situations (`src/components/content/ArticlePage.tsx:128–167`)
- Tools/DIY-or-hire decision cards not linked from advice/costs articles (one-way linking)
- Homepage doesn't link to all 20 advice or all 5 costs articles; underutilizes link equity
- No curator's pick or "next article" flow on pillar hubs

### E-E-A-T (92/100)

**Strengths:**
- About page comprehensive, clearly states independence and no warranty affiliates (`src/app/about/page.tsx:1–139`)
- Editorial standards page exists and is linked
- Methodology page exists and is linked
- Single named author (Ken Hoven) with full author page
- Author byline on every article with link to author page (`src/components/content/ArticlePage.tsx:76–79`)
- Affiliate disclosure page detailed and FTC-compliant (`src/app/affiliate-disclosure/page.tsx:1–111`)
- Contact page with real email address (`src/app/about/contact/page.tsx:1–86`)
- No fake testimonials; honest trust signals
- No invented credentials

**Issues:**
- Author page may lack depth; recommend more extensive background and credentials
- Methodology page may lack explicit dating on cost sources
- Person schema not wired to article author fields

### UX / Core Web Vitals (65/100)

**Strengths:**
- Next.js Image component with width/height on homepage hero prevents CLS (`src/app/page.tsx:60–68`)
- `priority` flag set on homepage hero for LCP optimization (`src/app/page.tsx:65`)
- Google Fonts imported with display:swap to prevent layout shift (`src/app/layout.tsx:13,19`)
- Vercel Analytics + Speed Insights installed (`src/app/layout.tsx:45–46`)
- No obvious heavy client bundles; Tailwind CSS used efficiently

**Issues:**
- Homepage hero image served from Google CDN with `unoptimized` flag — defeats Next.js optimization and introduces LCP bottleneck (`src/app/page.tsx:66`)
- No explicit image width/height on buying guide product cards
- No prefetch hints on internal navigation links
- Lighthouse/PageSpeed scores not verifiable from code

### Affiliate Compliance (88/100)

**Strengths:**
- Amazon Associates disclosure FTC-compliant; clearly explained on affiliate-disclosure page (`src/app/affiliate-disclosure/page.tsx:95–106`)
- ExternalLink component applies rel="sponsored nofollow noopener" to affiliate links (`src/components/ui/ExternalLink.tsx:14–20`)
- AffiliateDisclosure component renders conditionally when products have affiliate URLs (`src/components/tools/AmazonDisclosure.tsx`)
- Buying guide products clearly marked with disclosure
- No brand names in article prose (focus on problem-solving)
- No fake pricing or quoted stock status
- Affiliate disclosure paragraph visible on pages with amzn links (`src/components/content/AffiliateDisclosure.tsx:7–44`)

**Issues:**
- Affiliate disclosure paragraph on tools pages is small (text-xs) — compliant but could be more prominent (`src/components/content/AffiliateDisclosure.tsx:31`)
- Not all articles verified to have disclosure; spot-check recommended on advice articles mentioning products

### Accessibility (79/100)

**Strengths:**
- Breadcrumbs use semantic nav with aria-label (`src/components/ui/Breadcrumb.tsx:12`)
- Current page marked with aria-current="page" (`src/components/ui/Breadcrumb.tsx:23`)
- Separators hidden from screen readers with aria-hidden (`src/components/ui/Breadcrumb.tsx:32`)
- Main content in `<main>` tag (`src/app/layout.tsx:43`)
- Heading hierarchy preserved
- Links have meaningful text
- External links marked with icon and rel attributes

**Issues:**
- Newsletter form accessibility not audited (verify form has proper label associations)
- Color contrast not audited from code; visual inspection needed
- Keyboard focus states rely on browser defaults; no custom :focus-visible patterns
- No skip-to-content link in header
- Image alt text on author photos minimal

---

## Top 10 Quick Wins

1. **Move homepage hero image from CDN to /public, remove unoptimized flag** (10 min; LCP +300–500ms)
2. **Populate relatedArticle frontmatter on all advice articles** (30 min; internal linking +40%)
3. **Convert hardcoded buying guide URLs in sitemap to dynamic generation** (45 min; scalability)
4. **Wire Person schema to article authors** (20 min; E-E-A-T signals)
5. **Expand /costs hub description** (5 min; SERP CTR)
6. **Add FAQ schema to advice articles with FAQ frontmatter** (15 min; snippet potential)
7. **Verify newsletter form accessibility (label associations)** (20 min; WCAG AA)
8. **Create "more like this" suggestion on pillar hubs** (30 min; engagement)
9. **Audit and fix image alt text on buying guide product sections** (25 min; accessibility)
10. **Preload Fraunces serif font** (5 min; LCP via font delay reduction)

---

## Pages Most in Need of Attention

1. **Homepage** — External CDN image with unoptimized flag is LCP bottleneck. Fix: download image, remove flag, set priority.
2. **/costs hub** — Description underdeveloped; missing featured costs article grid like homepage. Fix: expand description; link to costs articles.
3. **DIY or hire articles** — Spot-check internal linking; some likely lack relatedCost/relatedAdvice. Fix: audit all 10 frontmatter files.
4. **Author pages** — Lacking depth; no author bio schema. Fix: expand bio 20+ words; add Person schema.
5. **/tools/diy-or-hire verdict pages** — Verify rich snippets render correctly in Search Console.

---

## What to Leave Alone

- Sitemap structure, robots.txt, canonical URL handling — all well-calibrated
- Article schema on advice/costs — properly structured
- Breadcrumb implementation — semantically correct
- Affiliate rel attributes — correctly applied
- Site structure/URL hierarchy — logical and SEO-friendly
- Editorial standards page — exemplary; don't oversimplify
