# Exhibit A prohibited-phrase audit — 2026-11-09

Scope: all page, component, content and library files in the FixItReal and HomeRepairPlanner
repositories, scanned for every example phrase in Exhibit A §1 ("Incentives and Promotions",
"Government or Funding Claims", "Misleading Rankings or Certifications", "Misleading Pricing or
Financing Claims", "Misleading Offerings", "Misleading Surveys or Quizzes").

Result: **no hits on any Networx-facing surface** (the `/get-quotes` page, the consent and form
components, the in-article CTA, and the privacy / terms / disclosure pages).

Editorial hits, reviewed and retained — all are advice to the homeowner, not marketing claims about
Networx or its contractors, which is what Exhibit A §2 governs:
- "licensed and insured" — articles telling readers to *ask* whether a tradesperson is licensed and
  insured (electrician-hourly, plumber-hourly, handyman-hourly-rate, roto-rooter-vs-local-plumber,
  and the contractor-quote-checker's red-flag text).
- "big savings" — a code comment in `src/app/page.tsx`, not rendered.
- "never before" — a code comment in `src/content/product-picks.ts`, not rendered.
- "lowest price" (HRP `QuoteCompare.tsx`) — the quote-comparison tool warning that the lowest-priced
  bid is missing items.
- "state program", "rebate", "grant" — cost articles explaining tax credits and utility rebates
  factually; senior-safety articles mentioning grant programs for grab bars. Educational, not an
  inducement to submit a lead.

Control going forward: `npm run check-networx-copy` (in `check-all`) fails the build on any Exhibit A
phrase in Networx-facing files and lists editorial hits for review.
