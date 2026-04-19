# FixItReal.com — Session Handoff

**Last session:** 2026-04-19
**Repo state:** clean, everything committed and pushed
**Latest commit:** `db9eda7` — gate calendar PDF behind email signup
**Live site:** https://www.fixitreal.com

---

## What's shipped

- **Next.js 16.2 + TS + Tailwind 4** on Vercel, auto-deploying from `main`
- **38+ indexable routes**: homepage, 3 pillar hubs, 15 MDX articles, 10 DIY-or-Hire tool result pages, tools hub, 5 trust pages (about, editorial standards, methodology, contact, affiliate disclosure), author profile, 404, calendar landing page, PDF download route, sitemap.xml, robots.txt
- **Full schema.org JSON-LD** per page type (Article, HowTo, FAQPage, BreadcrumbList, CollectionPage, WebApplication, Person, Organization, WebSite, AboutPage, ContactPage)
- **Brand system**: navy `#182D4A` + amber `#D4A038` + warm ink grays. Inter + Fraunces fonts via next/font.
- **House-shaped favicon** (icon.tsx + apple-icon.tsx) — navy square, white house silhouette, amber accent slash
- **Dynamic per-page OG images** for tool results + homepage; default OG fallback for everything else
- **Author**: Ken Hoven as honest homeowner byline (no licensure claimed)
- **Home Repair Cost Calendar**: 12-month maintenance landing page + generated PDF (via `@react-pdf/renderer`), gated behind email+name form that POSTs to Beehiiv
- **Google Search Console** HTML-tag verification wired sitewide
- **Namecheap email forwarding**: `hello@fixitreal.com` → `ken.hoven@gmail.com` (MX + SPF records confirmed live)

---

## Strategy docs in the repo (read these if context is cold)

1. [`docs/STRATEGY.md`](STRATEGY.md) — V1, full competitive research memo
2. [`docs/STRATEGY_V2.md`](STRATEGY_V2.md) — V2, lean-version pressure test
3. [`docs/STRATEGY_V3.md`](STRATEGY_V3.md) — V3, implementation blueprint
4. [`docs/STRATEGY_V4.md`](STRATEGY_V4.md) — V4, 10/10 SEO build brief
5. [`README.md`](../README.md) — project setup, scripts, env vars, multi-PC
6. This file — current handoff

---

## Multi-PC resume checklist (new machine)

**Required software:**
1. **Git** (≥ 2.40) — https://git-scm.com/download/win for Windows, or `brew install git` on Mac
2. **Node.js LTS (≥ 20)** — https://nodejs.org
3. **Editor** — VS Code or Cursor; anything that speaks TypeScript

**Auth:**
- On first `git push`, Git Credential Manager opens a browser for GitHub OAuth. One click, then seamless forever.

**Get running:**
```bash
git clone https://github.com/kenhoven-oss/fixitreal.git
cd fixitreal
npm install
npm run dev        # http://localhost:3000
```

No `.env.local` is strictly required for local dev — defaults point at `https://www.fixitreal.com`.

**Optional tooling** (install if needed):
- **GitHub CLI** (`gh`): `winget install GitHub.cli`
- **ImageMagick** (for logo/image manipulation): `winget install ImageMagick.ImageMagick`

---

## Immediate outstanding actions (user)

### 1. Beehiiv welcome automation + double opt-in ⚠️ HIGH PRIORITY

The signup form on `/home-repair-cost-calendar` POSTs to `fixitreal.beehiiv.com/subscribe`, but **Beehiiv does not yet email the PDF** to new subscribers. Without this automation, the form collects emails but delivers nothing.

**Two things to set up in the Beehiiv dashboard:**

**A. Double opt-in** (email verification): find the toggle in one of these locations:
- Growth → Subscribe Forms → edit form → Double opt-in: ON
- OR Settings → Publication → Email confirmation: ON
- OR use Cmd/Ctrl+K search for "opt-in"

**B. Welcome automation** (PDF delivery):
- Left sidebar → **Automations** → **+ New Automation** → name it "Calendar PDF Delivery"
- Trigger: **"New subscription"** (or "Subscriber confirmed")
- Add step: **Send email**
  - Subject: `Your free Home Repair Cost Calendar (as promised)`
  - From name: `Ken Hoven`
  - Body: include this link prominently → `https://www.fixitreal.com/downloads/home-repair-cost-calendar.pdf`
- Publish / Activate

**Test:** open https://www.fixitreal.com/home-repair-cost-calendar in incognito, submit a `ken.hoven+test@gmail.com` email, confirm the link, verify the PDF email arrives.

### 2. Google Search Console verification

The HTML meta tag is live on every page. Open https://search.google.com/search-console and:
1. Add property → **URL prefix** → `https://www.fixitreal.com`
2. Pick **HTML tag** verification method → VERIFY (should succeed immediately)
3. After verify: Sitemaps → submit `sitemap.xml`

### 3. Test Namecheap email forwarding

Send an email to `hello@fixitreal.com` from any outside account → should land in `ken.hoven@gmail.com` within 60 seconds. If not, double-check the Namecheap Email Forwarding setting.

---

## Outstanding dev work (site improvements)

From the content/SEO audit, in rough priority order. None blocking, all incremental improvements.

### High impact (40 min total)

1. **Fix `replace-panel` tool result page** — `src/content/jobs.ts` line ~529 — `ifYouDiy: "Don't."` is too terse, looks like a broken template on a YMYL page. Rewrite to 60–100 words explaining why panel work is never DIY.

2. **Conditional DIY card on hire-a-pro tool pages** — `src/app/tools/diy-or-hire/[job]/page.tsx` ~lines 110–135 — gate the "If you DIY" card on `j.verdict !== "hire-a-pro"`, and swap in a "Why we say hire" card for hire verdicts. Currently hire-a-pro jobs show a DIY card that fights the verdict.

3. **Wire `featuredDecisions` on homepage** — `src/app/page.tsx` — the variable is loaded then discarded with `void featuredDecisions;`. Remove the void and render a third featured section ("Should you DIY this? Our honest verdicts") matching the other two pillars.

4. **Make TrustBar claims clickable** — `src/components/marketing/TrustBar.tsx` — currently static text. Make the three claims into links:
   - "No home warranty ads" → `/advice/home-warranties-bad-deal`
   - "Cost data tracked and dated" → `/about/methodology`
   - "Independently written, not AI-spun" → `/about`

### Medium impact (60–90 min)

5. **Inline citations** — add inline source links in body copy for claims like:
   - CPSC ER-visits figure on `src/content/articles/diy-or-hire/garage-door-opener.mdx`
   - BBB complaint volume + Choice Home Warranty lawsuit on `src/content/articles/advice/home-warranties-bad-deal.mdx`
   - NFPA dryer-vent fire stat on `src/content/cost-calendar.ts`
   - Regional variation table source on `src/content/articles/costs/water-heater-replacement.mdx`
   - Deck collapse statistic (CPSC NEISS) on May card in `src/content/cost-calendar.ts`
   
   Use the existing `<a>` override in MDX or `Citation` component. Pattern: `[text with specific claim](https://source-url)`.

6. **Soften methodology overclaim** — `src/app/about/methodology/page.tsx` line ~76-90 — the "paying contractors for anonymized quotes across 10 metros" section is currently present-tense but no data exists yet. Reword to future-tense intention with a target date, or remove until the first dataset lands.

7. **Add reviewer / affiliate disclosures** — garage-door-opener article recommends specific product models (Chamberlain, Liftmaster, etc.) without disclosure. Add a one-liner: "No affiliate links on the products above — recommendations based on service network and parts availability."

### Low impact (quick fixes)

8. **Typo** — `src/content/cost-calendar.ts` January row: "off off-peak" → "off-peak"

9. **"Reviewed by" on calendar** — add a reviewed-by line to the calendar landing page since it touches multiple trades.

10. **Standardize cost formatting** in calendar — mix of "$X-$Y" vs "DIY $X · Pro $Y" vs "DIY free · Pro $X". Pick one pattern and use throughout.

11. **Author bio expansion** — `src/content/authors/ken-hoven.ts` — the `credentials` array is `["Homeowner", "15+ years DIY repairs"]`. Consider expanding the `bio` and adding a real sentence or two about professional background if any.

---

## Technical notes

### File structure (where things live)

```
src/
  app/                     # Next.js App Router
    page.tsx              # homepage
    layout.tsx            # root layout, fonts, site JSON-LD
    sitemap.ts, robots.ts # SEO plumbing
    icon.tsx              # favicon (dynamic, house shape)
    apple-icon.tsx
    opengraph-image.tsx   # default site OG card
    not-found.tsx         # 404
    middleware.ts         # noindex on preview deploys
    [pillar]/             # /diy-or-hire, /costs, /advice
      page.tsx            # pillar hub
      [slug]/page.tsx     # article template
    tools/
      diy-or-hire/
        page.tsx          # selector
        [job]/page.tsx    # result pages
        [job]/opengraph-image.tsx
    about/
      page.tsx, editorial-standards, methodology, contact
      authors/[slug]/page.tsx
    affiliate-disclosure/page.tsx
    home-repair-cost-calendar/page.tsx
    downloads/home-repair-cost-calendar.pdf/route.ts  # PDF generator
  components/
    content/              # ArticlePage, Prose, FaqBlock, PullQuote, Citation
    layout/               # Header, Footer
    marketing/            # NewsletterBlock, TrustBar, WhatWeDontDo, CalendarSignupForm
    tool/                 # VerdictBanner, JobSelector, CostComparisonTable
    ui/                   # Section, Card, Badge, Breadcrumb, ExternalLink
    calendar/             # CalendarPdf (react-pdf)
  content/
    site.ts               # site config (name, tagline, nav, pillars)
    jobs.ts               # 10 DIY-or-Hire job records
    cost-calendar.ts      # 12 months × 3 tasks each
    authors/ken-hoven.ts
    articles/
      [pillar]/[slug].mdx # 15 MDX articles
  lib/
    env.ts, metadata.ts, jsonld.ts, seo.ts, articles.ts, articles-loader.ts
```

### Design tokens

All defined in `src/app/globals.css` via Tailwind 4 `@theme` block:
- `--color-navy-50` through `--color-navy-900` (brand primary)
- `--color-amber-50` through `--color-amber-900` (accent)
- `--color-ink-50` through `--color-ink-900` (warm neutrals)
- `--font-sans: var(--font-inter)`, `--font-serif: var(--font-fraunces)`

**Do not** wrap `@theme` in `@media` — Tailwind 4 applies those tokens unconditionally (this was a bug in launch that broke the light-mode body background).

### Content authoring

Articles are MDX files at `src/content/articles/[pillar]/[slug].mdx`. Frontmatter is validated by Zod (`src/lib/articles.ts`) at build — broken frontmatter = failed build.

Required fields: `title` (10–100 chars), `slug`, `pillar`, `description` (100–160 chars), `author`, `ymyl`, `publishedAt` (ISO date), `readingMinutes`, `keywords` (3–10), `citations` (min 2 with label + url).

Optional: `verdict`, `costLow/High`, `related*`, `faq` (array of question/answer).

### Monetization gaps (intentional, deferred)

- **Lead-gen quote forms** on cost pages: slot exists (`<QuoteForm />` placeholder) — real Modernize/Networx integration in month 3+ when traffic warrants
- **Mediavine display ads**: apply at 1K sessions (Journey tier), ~$5K/year revenue threshold for main tier
- **Amazon Associates**: tag ID not wired yet; add to `src/lib/env.ts` and article templates when ready

---

## When you come back

In a fresh Claude Code session tomorrow on the new PC:

1. `cd` into the project dir after `git clone`
2. Ask Claude to read the memory files + this HANDOFF doc first
3. Pick any item from "Outstanding dev work" and say "continue on item N"

Project memory files will persist in `~/.claude/projects/` — Claude will have context on user preferences and stack automatically.

Good progress today. 🏠
