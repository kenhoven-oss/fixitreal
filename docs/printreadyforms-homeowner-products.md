# PrintReadyForms × FixItReal — the two products that should exist

**Status:** proposal, 2026-09-17. Nothing here is built on PrintReadyForms yet.

## The problem

PrintReadyForms sells B2B forms — contractor estimate packs, landlord bundles,
HR templates. Its only product FixItReal links today,
`contractor-estimate-quote-pack`, is written "for general contractors who need
a professional estimate form for every job they bid." FixItReal's reader is the
homeowner *receiving* that estimate. The overlap is two of its four forms (the
scope-of-work sheet and the bid comparison matrix), which is why it is linked on
exactly three pages and no more.

A cross-sell on the 22 cost pages and 9 inspection pages needs products written
for the homeowner. The content for both already exists on FixItReal — the work
is packaging, not writing.

## Product 1 — Home Inspection Repair Negotiation Kit

Buyer or seller, post-inspection. Comparison: the free PDF at
`/downloads/home-inspection-repair-checklist.pdf` is the 3-page checklist
version; the kit is the fillable, editable, re-usable version.

| Piece | Format | Source on FixItReal |
| --- | --- | --- |
| Four-bucket triage worksheet (must / will / credit / won't) | Excel, one row per inspection item, bucket dropdown, running credit total | `buyer-repair-request-response` |
| Credit sizing calculator — buyer estimate + contingency, checked against the lender concession cap by loan type | Excel | `repair-credit-vs-fix-before-closing` |
| Written repair-response template (the "Item 1: Credit $150 at closing" format) | Word | `buyer-repair-request-response` |
| Buyer-side repair request template — lead with safety, then leaks, drop cosmetics | Word | `which-inspection-repairs-sellers-must-fix` |
| Required-vs-negotiable reference (FHA/VA MPRs, state point-of-sale items, must-not-refuse list) | PDF | `which-inspection-repairs-sellers-must-fix` |

Link from: all 9 `/home-inspection-repairs/` pages. Suggested price band: the
same as the contractor pack.

## Product 2 — Contractor Quote Comparison Kit

Homeowner about to collect three quotes for a job over ~$500.

| Piece | Format | Source on FixItReal |
| --- | --- | --- |
| Scope-of-work sheet the homeowner fills once and hands to every bidder | Word | `three-contractor-quotes` ("document the job") |
| Three-quote comparison matrix — same line items down the side, one column per contractor, itemized vs. lump-sum flag | Excel | `three-contractor-quotes` ("comparing the quotes") |
| Overpriced-quote checker — the seven red flags as a scored checklist, with the "fair range" from the matching cost guide | Excel | `signs-of-overpriced-quote`, `/tools/contractor-quote-checker` |
| Contractor vetting checklist — license lookup by state, insurance, references, deposit limits | PDF | `vetting-a-contractor`, `contractor-red-flags` |
| Change-order form (homeowner-side: nothing added without a signed price) | Word | `signs-of-overpriced-quote` ("scope creep") |

Link from: all 22 `/costs/` guides, the three quote/vetting advice pages, and
`/tools/contractor-quote-checker`. This one replaces the contractor pack on the
three pages that currently link it.

## Why these two and not more

Both sit at the exact moment the reader has money on the table and a decision
to make. Nothing else on the site has that. A "home maintenance log" would be a
third candidate, but the free cost calendar already covers it and it has no
purchase moment.

## What FixItReal needs once they exist

One `<PrintReadyFormsCTA>` per page with the right `href` and a per-page
`utmCampaign`. The component already exists; the placements are listed above.
