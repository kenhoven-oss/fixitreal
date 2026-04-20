# Affiliate link health check

A small script that finds every `amzn.to/...` link in the codebase
(Tools pages + MDX articles) and verifies each one still resolves to a
real, in-stock Amazon product. Useful to run once a month — products get
discontinued, URLs rot, and there's no automatic notification from
Amazon when one of your links breaks.

## Run it

```bash
npm run check-links
```

You'll see one line per unique link:

```
OK   https://amzn.to/4tZgObP  → https://www.amazon.com/dp/B0...
     src\app\tools\best-drain-snakes-for-homeowners\page.tsx:44
FAIL https://amzn.to/4vC5Zy0  HTTP 404
     src\app\tools\best-drain-snakes-for-homeowners\page.tsx:66
```

Summary at the bottom: `41 OK, 1 broken, 42 total`.

Exit code is `1` if anything is broken — suitable for a CI cron if you
ever want automated alerts.

## What "broken" means

- Final status is not `200 OK` (HTTP 404, 503, etc.)
- Redirect lands on an Amazon error page (`/gp/errors/`, `/product-not-found`)

## When a link is broken

1. Open the source file and line number shown.
2. Go to Amazon, find a replacement product in the same category.
3. Use SiteStripe → Text link → copy the new `amzn.to/...`.
4. Paste it into the code, replacing the broken one.
5. Update the matching row in `docs/product-links.csv`.
6. Commit and push.

## Excluded URLs

`scripts/check-affiliate-links.mjs` has a small `EXCLUDE` set for
documentation examples (e.g. the placeholder `amzn.to/4tlV9dU` shown
inside JSDoc as the format example). Real product links are never
added there.

## When not to run

Don't run this script more than a few times a day. Amazon's CDN is
fine with our volume, but being polite to shortened-link services is
a good habit. Monthly cron or ad-hoc is plenty.
