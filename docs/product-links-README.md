# Product links tracker

`product-links.csv` is the master list of products on FixItReal Tools
pages that need Amazon affiliate links. Double-click it — Excel opens it
directly.

## Columns

| Column | What goes in it |
|---|---|
| **Page** | The live URL path of the guide (e.g. `/tools/best-drain-snakes-for-homeowners`) |
| **Product Name** | Must match the `name` field in the code exactly |
| **Badge** | "Best Overall", "Best Budget", etc. (may be blank) |
| **Category** | Short tag shown under the product name |
| **Amazon Search Hint** | A suggested search term to paste into Amazon so you find the right product fast |
| **Affiliate URL (paste here)** | The `https://amzn.to/...` link from SiteStripe |
| **Status** | "Draft" until the link is pasted; flip to "Live" once filled in |
| **Notes** | Anything to remember — required specs, size constraints, etc. |

## Workflow

1. **You:** Open `product-links.csv`. Pick a row with Status = Draft.
2. **You:** Open Amazon, paste the search hint, pick a product you'd actually recommend.
3. **You:** Use SiteStripe → Text link → copy. Paste into the "Affiliate URL" cell. Change Status to "Live". Save the CSV.
4. **Me (or future-you):** Copy that URL into the matching `affiliateUrl` field in the corresponding page.tsx. The buy button and Amazon disclosure appear automatically.

## Adding a new guide to the tracker

When you create a new Tools buying guide:
1. Add one row per product to this CSV.
2. Keep Status = Draft until the affiliate URLs are pasted in.
3. The code and the CSV are the two places to keep in sync — the CSV is the "master list" a non-dev can work from; the page.tsx is what actually renders.

## Why CSV and not .xlsx

Excel opens CSVs natively with no conversion. Plain text diffs cleanly in
git so we can both see changes over time. If you prefer a formatted .xlsx
later, save-as from Excel and keep both — the CSV stays the source of
truth.
