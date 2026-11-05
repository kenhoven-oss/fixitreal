# Google AdSense — owner setup guide for FixItReal.com

This is the step-by-step for taking the site from "AdSense-ready" to "ads live",
written for the site owner. Nothing in this guide is automatic: every switch is an
environment variable in Vercel that you set deliberately, and ads cannot appear
until you set them.

Last reviewed against Google's documentation on 2026-11-05. The AdSense interface
changes often; menu names below are the ones Google used at that date.

## How the integration behaves

| Vercel variable | Default | Effect |
| --- | --- | --- |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | unset | Your `ca-pub-` + 16-digit ID. Nothing ad-related renders without it. Also turns on `/ads.txt`. |
| `NEXT_PUBLIC_ADSENSE_VERIFICATION` | `off` | `meta` adds `<meta name="google-adsense-account">` to every page; `script` adds the AdSense code snippet to the `<head>` of every page. Neither shows ads. |
| `NEXT_PUBLIC_ADS_ENABLED` | unset (off) | `true` turns on live ad slots on eligible pages. Ignored unless the publisher ID is valid. |
| `NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE` | unset | Numeric ad-unit ID for in-article placements. Without it, slots render nothing even when ads are enabled. |

Where ads can appear once enabled (hard limits in `src/lib/ad-policy.ts`):

| Page type | Ads |
| --- | --- |
| Homepage | **None** |
| Calculators & tools (`/tools/*-estimator`, `-calculator`, `-tracker`, quote checker, DIY-or-hire tool) | **None** |
| Product buying guides (`/tools/best-*`) | **None** (affiliate pages; kept clean on purpose) |
| About, Contact, Privacy, Terms, Disclaimer, Affiliate disclosure, Corrections, Methodology, Editorial standards, author pages | **None** |
| State / metro local cost pages | **None** |
| Emergency Repairs articles | **None** (safety-critical first-ten-minutes content) |
| DIY-or-Hire, Advice, Inspection, Senior Safety, What-Is-This articles | Up to **2** in-article placements |
| Repair cost guides (`/costs/<slug>`) | Up to **2** in-article placements |

Within an article, slot positions are chosen automatically at build time
(`src/lib/ad-placement.ts`): always at a `##` section boundary, only after at
least ~200 words of introduction, with a ~350-word gap between the two, never
above a short closing section, and never directly next to a safety warning,
cost estimate box, fair-price checker, verdict box, product picks, newsletter
block, or table. Headings that read as urgent instructions ("Shut off the gas",
"If it's sparking right now") are never used. Over the current 127 articles this
yields two slots on 68, one on 55, and none on 4.

Formats: a single responsive display unit per slot, labelled "Advertisements",
loaded after the page is interactive and only requested when the slot is within
~600px of the viewport. No anchors, vignettes, interstitials, or side rails.

## Step 1 — Create or sign in to AdSense

1. Go to <https://adsense.google.com/> and sign in with the Google account you
   want to own the earnings (the same one that owns Search Console for
   fixitreal.com is simplest).
2. If you're new, complete the sign-up: your site URL (`https://www.fixitreal.com`),
   payment country, and acceptance of the terms. You must be 18+.

## Step 2 — Add fixitreal.com as a site

1. In AdSense: **Sites → Add site** (new accounts land on this screen).
2. Enter `fixitreal.com` (AdSense normalises the `www`).

## Step 3 — Get your publisher ID

**Account → Settings → Account information**. The publisher ID looks like
`ca-pub-1234567890123456`. Copy it exactly.

## Step 4 — Verify ownership (no ads yet)

AdSense offers three equivalent verification methods. Pick ONE; the site
supports all three and none of them displays ads.

| Method in AdSense | What to set in Vercel |
| --- | --- |
| **Meta tag** (recommended — lightest) | `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-…` and `NEXT_PUBLIC_ADSENSE_VERIFICATION=meta` |
| **AdSense code snippet** | `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-…` and `NEXT_PUBLIC_ADSENSE_VERIFICATION=script` |
| **Ads.txt snippet** | `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-…` only. `/ads.txt` then serves `google.com, pub-…, DIRECT, f08c47fec0942fa0` (the format from [Google's ads.txt guide](https://support.google.com/adsense/answer/12171612)). |

In Vercel: **Project → Settings → Environment Variables → Add**, tick
**Production** (and Preview if you want to inspect it on a preview URL), then
**Deployments → Redeploy** the latest production deployment so the build picks
the variables up. `NEXT_PUBLIC_*` values are baked in at build time — changing
them always needs a redeploy.

Check it worked before telling AdSense:

- Meta tag: view source of <https://www.fixitreal.com/> and look for
  `<meta name="google-adsense-account" content="ca-pub-…">`.
- Script: view source and look for `pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-…` in `<head>`.
- ads.txt: open <https://www.fixitreal.com/ads.txt> in a browser.

Then in AdSense, tick **"I've placed the code"** (or the ads.txt / meta-tag
equivalent) and click **Verify**.

## Step 5 — Consent for EEA / UK / Swiss visitors (do this before requesting review)

Google requires a Google-certified consent management platform (CMP) before it
will serve **personalized** ads to visitors in the European Economic Area, the
UK, or Switzerland (see [Google's consent requirements](https://support.google.com/adsense/answer/13554116)).
The site is set up to use **Google's own CMP**, which needs no extra code — it
is delivered by the same AdSense script:

1. In AdSense, during site setup you'll be asked **"Choose how to collect consent"**.
   Choose **Google's CMP** ("Create a GDPR message with Google").
   You can also reach this later under **Privacy & messaging → European regulations**.
2. Pick the **three-button** layout (Consent / Manage options / Do not consent).
   The privacy policy already tells readers they can decline.
3. Under **Privacy & messaging**, also publish a **US states** message if
   AdSense prompts for one (CCPA/CPRA "opt out" handling is built into it).
4. Leave the message **unpublished / in draft** until ads are live; publishing
   it on a site with no ads just shows an empty prompt. Publish it in the same
   session as Step 8.

The site does **not** need a cookie banner for anything else: analytics are
cookieless (Vercel Web Analytics / Speed Insights), and there are no other
trackers.

## Step 6 — Request review

In **Sites**, with the site verified and the CMP choice made, click
**Request review**. Google says reviews typically take a few days and sometimes
2–4 weeks. Leave the verification variables in place for the whole review.

Nothing in this repo can guarantee approval. What it does: original content with
named authorship, visible editorial standards and methodology, About / Contact /
Privacy / Terms / Disclaimer / Affiliate-disclosure pages all linked from the
footer, a clean mobile layout, no placeholder ads, and policies that describe
exactly what the site does.

## Step 7 — Confirm approval

AdSense emails the account owner, and **Sites** shows the site as **Ready**.
If instead it says **Needs attention**, the reason is listed on the site's card
(most often "low value content" or a policy page issue); fix and re-request.

## Step 8 — Turn ads on (only after approval)

1. **Create the ad unit.** AdSense → **Ads → By ad unit → Display ads**. Name it
   `FixItReal in-article`, keep **Responsive**, click **Create**. Copy the
   numeric `data-ad-slot` value from the generated code (ten digits). You do not
   need to paste the code anywhere — the site already renders it.
2. **Turn Auto ads OFF for the site.** AdSense → **Ads → By site → fixitreal.com
   → Edit (pencil)**. Make sure **Auto ads** is **off**, then **Apply to site**.
   This matters: Auto ads ignore the site's manual placement rules and would add
   anchors, vignettes and side rails on every page, including the homepage.
   If you ever want to experiment with them later, use **Page exclusions** to
   exclude `/`, `/tools/*`, `/about/*`, `/privacy`, `/terms`, `/disclaimer`,
   `/affiliate-disclosure`, `/corrections`, `/emergency-repairs/*`, and turn off
   every **Overlay format**.
3. **Publish the consent message** from Step 5 (Privacy & messaging → European
   regulations → Publish).
4. **Set the Vercel variables** (Production):
   - `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-…` (already set)
   - `NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE=<the ten-digit slot id>`
   - `NEXT_PUBLIC_ADS_ENABLED=true`
   - `NEXT_PUBLIC_ADSENSE_VERIFICATION=meta` (keep; harmless) or `off`
5. **Redeploy** production.

To switch ads off again at any time: set `NEXT_PUBLIC_ADS_ENABLED=false` (or
delete it) and redeploy. The page HTML returns to exactly what it was before.

## Step 9 — Confirm live placements are working

1. Open an article, e.g. <https://www.fixitreal.com/diy-or-hire/water-heater>,
   with ad-blockers off. You should see a small "ADVERTISEMENTS" label with a
   280px-tall box above the first `##` heading after the intro, and (on most
   articles) a second one further down. New accounts often show **blank space
   for the first hours to days** while Google's crawler reads the pages — that
   is normal and the reserved box prevents layout shift in the meantime.
2. Open the homepage, a calculator (`/tools/repair-cost-estimator`), and
   `/privacy`: there must be no label, no box, and no request to
   `pagead2.googlesyndication.com` in the browser's Network tab.
3. In Chrome DevTools → Console, there should be no `adsbygoogle.push() error`
   messages. "No slot size for availableWidth=0" means a slot was hidden;
   report it.
4. In AdSense → **Sites**, the status should read **Ready**, and **Policy
   center** should be empty.
5. Run <https://pagespeed.web.dev/> on an article before and after. Expect CLS
   to stay below 0.1 (the boxes reserve their height) and LCP to be within a few
   hundred milliseconds of the pre-ads number (the script loads after the page
   is interactive and ads are requested lazily).

## Step 10 — Reading the numbers

AdSense → **Reports**. The two figures worth watching weekly:

- **Page RPM** = earnings per 1,000 page views. The site-wide number is dragged
  down by ad-free pages (homepage, tools), so compare **Reports → Pages** for
  article URLs.
- **Active View viewable %** per ad unit. If the second slot is rarely viewable,
  it's too deep; the `secondSlotTarget` constant in `src/lib/ad-placement.ts`
  moves it up.

Payments: **Payments → Payments info** — add a payment method and complete tax
info; Google pays monthly once the balance passes the threshold (US$100 at the
time of writing). Earnings from a site this size will be modest at first; treat
the first 60 days as a measurement period before changing placements.

## Things the code deliberately does not do

- No fake or placeholder publisher ID, ad-unit ID, or ads.txt line — the
  corresponding features simply stay off until you provide real values.
- No Auto ads tag. Auto ads are controlled in the AdSense dashboard; the
  recommendation is to leave them off.
- No anchor / vignette / interstitial / sticky formats.
- No third-party CMP library. Google's CMP is served by the AdSense script.
- No ads on pages that render affiliate product cards in bulk (buying guides),
  so readers are never choosing between an ad and an affiliate button.

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| No meta tag / script after setting variables | Build hasn't re-run. Redeploy; `NEXT_PUBLIC_*` values are compile-time. Also check the ID matches `ca-pub-` + 16 digits exactly — anything else is ignored and a warning is printed in the build log. |
| `/ads.txt` is 404 | Publisher ID not set (or malformed) in the environment that built that deployment. |
| Ads enabled but no boxes on articles | `NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE` missing or non-numeric. |
| Boxes but blank | Normal for new sites for up to a few days; also happens with ad blockers, and on pages Google has not crawled. |
| Ads showing on the homepage or a calculator | Auto ads were turned on in AdSense (Step 8.2). The site never renders slots there. |
| Consent message not appearing for EU testers | Message not published, or Google's CMP not selected under Privacy & messaging. |
