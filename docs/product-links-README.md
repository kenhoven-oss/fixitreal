# Adding affiliate links

`product-links.csv` is the single source of truth for every affiliate link on
the site. You paste links into the spreadsheet; a script copies them into the
code. Double-click the CSV — Excel opens it directly.

> `product-links-article-companions.csv` is **superseded** and kept only for
> history. Everything in it now lives in `product-links.csv`. Don't edit it.

---

## The short version

1. `npm run sync-product-links -- --dry-run` — see what still needs a link.
2. Get the link from Amazon SiteStripe.
3. Paste it into the **Affiliate URL** column, set **Status** to `Live`, save.
4. `npm run sync-product-links` — writes it into the code.
5. `npm run check-links` — confirms the link actually resolves.
6. Commit and push. Vercel deploys from `main`.

You never have to touch `page.tsx` or think about `rel` attributes.

---

## Getting the link from Amazon

1. Sign in to [Amazon Associates](https://affiliate-program.amazon.com/) —
   SiteStripe only appears when you're signed in to the Associates account.
2. Open the product page on amazon.com. The SiteStripe bar appears across the
   top of the page.
3. Click **Text** in the SiteStripe bar.
4. Copy the short link. It looks like `https://amzn.to/4tZgObP`.

**Use the SiteStripe short link, not a hand-built URL.** Copying the address
bar and appending `?tag=...` is easy to get wrong — a stripped tag earns
nothing. `check-links` validates `amzn.to` links specifically.

**Pick the product before you look at the commission.** These are the pages
where the site's independence is either real or it isn't. On safety products
especially — smoke, CO, fire, water — the pick should follow the certification
(UL 217, UL 2034, BS EN 1869, 10-year sealed) and let the commission land
where it lands.

---

## The two kinds of link

### Buying-guide product cards — automated

Rows whose **Page** starts with `/tools/`. These are the product cards on the
`best-*` guides. `sync-product-links` writes the URL into the matching
`affiliateUrl` field for you, matched on **Product Name**.

The buy button and the Amazon disclosure both appear automatically once the
field is non-empty. Leaving it as `""` renders the card without a buy button,
which is the correct state for a draft.

### Inline links in article prose — by hand

Rows whose **Page** starts with `/advice/`. These sit inside a sentence in an
MDX file, and no script can know where in a sentence a link belongs. Add them
as an ordinary markdown link:

```md
A [sump pump battery backup](https://amzn.to/4mIu0PZ) runs off a deep-cycle
battery and kicks in when the primary fails.
```

Then record the same URL in the CSV. `sync-product-links` verifies the two
agree and flags it if they drift.

**`rel` is automatic.** The MDX renderer routes every external link through
`ExternalLink`, which detects `amzn.to` and Amazon URLs carrying a `tag=`
parameter and emits `rel="sponsored nofollow noopener noreferrer"`. Ordinary
citations (energy.gov, BLS) correctly get only `noopener noreferrer`, so
outbound authority isn't wasted on them. You don't need to add anything.

---

## Columns

| Column | What goes in it |
|---|---|
| **Page** | Route path — `/tools/best-...` for a product card, `/advice/...` for an inline link |
| **Product Name** | Must match the `name:` field in `page.tsx` **exactly**. This is the join key. |
| **Badge** | "Best Overall", "Best Budget", etc. May be blank. |
| **Category** | Short tag shown under the product name |
| **Amazon Search Hint** | Paste into Amazon to find the right product fast |
| **Affiliate URL (paste here)** | The `https://amzn.to/...` link from SiteStripe |
| **Status** | `Draft` until the link is pasted; `Live` once filled in |
| **Notes** | Required specs, size constraints, certifications to check |

If `sync-product-links` reports **COULD NOT MATCH**, the Product Name in the
CSV and the `name:` in the code have diverged — usually a typo, or an em dash
where the code has a hyphen. Fix the CSV to match the code.

---

## Adding a new buying guide

1. Build the guide with a `products` array, each entry `affiliateUrl: ""`.
2. `npm run affiliate-coverage` — the new products show up as empty slots.
3. Add one CSV row per product with a search hint. Status `Draft`.
4. Fill in links as you get to them, then `npm run sync-product-links`.

---

## The related commands

| Command | What it answers |
|---|---|
| `npm run affiliate-coverage` | Where is there no link at all? |
| `npm run sync-product-links` | Push CSV links into the code |
| `npm run check-links` | Do the links we have still resolve? |

Run `check-links` periodically, not only after edits. Amazon retires ASINs
without warning — that's how the Klein NCVT5KIT link ended up serving a 404 to
every reader of the voltage-tester guide.

---

## Why CSV and not .xlsx

Excel opens CSVs natively with no conversion, and plain text diffs cleanly in
git so changes are visible over time. If you want a formatted .xlsx, save-as
from Excel and keep both — the CSV stays the source of truth, because it's what
`sync-product-links` reads.
