# Networx contractor-referral setup

Status: **built, not live.** Nothing Networx-related renders in production until
the two environment variables below are set. The page `/get-quotes` returns
404 in production until then; it renders with a placeholder on Vercel preview
deployments so the consent language can be reviewed.

## What was built

| Piece | Where | Notes |
|---|---|---|
| Config + guard-rails | `src/lib/networx.ts` | Validates env vars; everything off by default. Unit tests in `tests/networx-config.test.ts`. |
| Embedded form | `src/components/leadgen/NetworxQuoteForm.tsx` | Reproduces Networx's standard embed (`#nx_form` + `api.networx.com/iframe.php?aff_id=…&aff_to_form_id=…`). Injected on mount so it survives client-side navigation. |
| TCPA consent language | `src/components/leadgen/TcpaConsent.tsx` | Names **Networx Systems, Inc. and its Partners** (linked to `https://www.networx.com/third-party-contractors`) and covers calls + texts via automated technology. Server-rendered. |
| Quote page | `src/app/get-quotes/page.tsx` | Disclosure box → form → consent → "what happens next" → DIY alternative. `noindex,follow`; not in the sitemap. |
| Privacy policy | `src/app/privacy/page.tsx` | New "Contractor quote requests" section (`#quote-requests`); wording switches from "not yet active" to live automatically. |
| Affiliate disclosure | `src/app/affiliate-disclosure/page.tsx` | Contractor-referrals bullet switches wording the same way. |
| In-article CTA | `src/components/marketing/QuoteRequestCTA.tsx` | Renders nothing until the form is live. Place only after the "hire a pro" verdict in cost / DIY-or-hire articles, never near safety steps. |

## What the signed agreement requires of us

Signed 2026-11-09 (Marketing Services Agreement V202609, Insertion Order,
Exhibit A Compliant Traffic Guidelines; PandaDoc ref WBQ9S-AQRCK-9YMTF-9WUB7).
The parts that touch the site or day-to-day operation:

- **Consent disclosure** (MSA §6, Exhibit A §3) must name Networx and its
  Buyers (inline or via a prominent hyperlinked list), cover phone, text and
  email including automated technology, authorize ATDS / prerecorded
  telemarketing texts to the number provided, say consent is not a condition
  of purchase, and disclose purposes and the consumer's opt-out, revocation
  and deletion rights. No pre-checked boxes or buried disclosures.
  → `TcpaConsent.tsx` + the privacy policy's "Contractor quote requests" section.
- **Records** (MSA §7): keep the exact consent language presented, with
  timestamps/IP/user agent, for 5 years, and produce it within 5 business
  days on request. Git history holds every version of the page and wording;
  `TCPA_CONSENT_VERSION` is stamped on the page. Timestamps, IP and
  TrustedForm for each lead are captured inside Networx's own iframe — get
  Josh to confirm in writing that the embedded form satisfies the TrustedForm
  and record-keeping requirement, since contractually it is our obligation.
- **Opt-outs / complaints** (MSA §5): notify Networx within 3 business days of
  any do-not-contact, deletion request, complaint or legal demand we receive,
  and act on it. The privacy policy tells readers to email hello@fixitreal.com;
  forward anything that arrives to Josh / Legal@networx.com the same day.
- **Prohibited copy** (Exhibit A §1–2): no "free installation", "pre-screened",
  "licensed and insured", "#1 rated", "guaranteed savings", "apply now",
  "qualify", rebate / grant / government-program language, urgency or scare
  tactics, and nothing that disparages contractors. Networx may demand copy
  changes at any time; keep CTA wording plain.
- **Exclusivity** (MSA §5): a request submitted through Networx cannot be
  sent to any other lead service.
- **Invoicing** (MSA §4): *we* invoice Networx monthly by the 15th for the
  previous month's accepted leads; they pay within 30 days. Chargebacks for
  non-compliant leads up to 60 days (2 years for consent defects). Disputes
  within 30 days or waived.
- **Changes** (MSA §14): tell Networx in advance before adding a new source,
  e.g. putting the form on HomeRepairPlanner.com — the IO names no site, so
  get Josh's written OK before activating HRP.
- **Housekeeping**: the signed IO lists the legal address as Green Cove
  Springs, FL 23043 — 23043 is a Virginia zip code (Green Cove Springs is
  32043). Ask Josh to correct it on the next IO.

## Compliance program

The written program the MSA requires lives in `docs/compliance/`:
`networx-compliance-program.md` (policies, training, monitoring, investigation),
`consumer-request-procedure.md` + `consumer-request-log.csv` (3-business-day opt-out handling),
`invoice-procedure.md` + `invoices/ledger.csv` (invoice by the 15th), `consent-language-log.md`
(every wording version and Networx's approval), `training-log.md`, `monitoring-log.md`, and
`evidence/` for screenshots and approval emails. `npm run check-networx-copy` is the automated control.

## Go-live checklist

1. **Reply to Josh** with the contact info and PayPal email (the agreement is
   signed as Kenneth Hoven, individual, so use that as the "company name"
   unless you want it under a business entity — that would need a new IO).
2. **Send Networx the consent language for approval.** Open the Vercel preview
   deployment for this branch, go to `/get-quotes`, and send Josh a screenshot
   of the "Consent to be contacted" box (or the preview link). Do not go live
   before he confirms it.
3. **Get the IDs from the dashboard.** Once the account is open, create a
   general home-repair form in the Networx dashboard. Copy the `aff_id`
   (32 hex characters) and `aff_to_form_id` (number) from the embed code it
   gives you.
4. **Set the env vars in Vercel** (Production, and Preview if you want the live
   form on previews):
   - `NEXT_PUBLIC_NETWORX_AFF_ID`
   - `NEXT_PUBLIC_NETWORX_FORM_ID`
5. **Redeploy.** `/get-quotes`, the privacy and disclosure wording, and the
   in-article CTA all switch on together.
6. **Verify production:** open `/get-quotes`, confirm the Networx iframe loads,
   submit one test lead with your own number (tell Josh first so it is not
   counted), and check it appears in the Networx dashboard.
7. **Then place the CTA** in the top cost / DIY-or-hire articles (one per
   article, after the verdict). Keep it off tools, calculators, the homepage
   and policy pages, consistent with the AdSense placement rules.

## Per-trade forms

Networx issues one form ID per form. If they give you trade-specific forms,
pass the ID per placement: `<NetworxQuoteForm formId="3001" />`. The default
form ID from the env var is used otherwise. Only one form can render per page
because Networx's loader keys off the fixed element id `nx_form`.

## Changing the consent wording

Networx checks the exact phrase and link. If the wording in `TcpaConsent.tsx`
is changed, re-send a screenshot to Networx before deploying.
