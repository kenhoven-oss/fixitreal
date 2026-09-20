# Lighthouse (mobile, simulated 4G) — production, 2026-09-20

Lighthouse 13.5, `--form-factor=mobile --throttling-method=simulate`, against www.fixitreal.com before any of this branch deployed.

| Page | Perf | LCP | TBT (INP proxy) | CLS | TTFB | FCP | Speed Index |
|---|---:|---:|---:|---:|---:|---:|---:|
| / (home) | 83 | 4.3 s | 60 ms | 0 | 170 ms | 1.2 s | 4.2 s |
| /advice/how-long-do-water-heaters-last | 80 | 4.4 s | 180 ms | 0 | 110 ms | 1.2 s | 4.0 s |
| /costs/toilet-replacement | 81 | 4.6 s | 110 ms | 0 | 100 ms | 1.2 s | 4.2 s |
| /tools/best-plungers-for-homeowners | 81 | 4.5 s | 80 ms | 0 | 80 ms | 1.7 s | 4.3 s |
| /costs/plumber-service-call/ohio (programmatic) | 81 | 4.4 s | 50 ms | 0 | 70 ms | 1.7 s | 4.3 s |

## Reading

- **CLS is 0 on every page** and **TTFB is 70–170 ms** — the layout and the server are not the problem.
- **TBT is low** (50–180 ms); JavaScript is not blocking interaction.
- **LCP is the only failing metric, and it fails the same way everywhere (4.3–4.6 s).** LCP breakdown on the cost page: TTFB 209 ms, element render delay ~1,180 ms (simulated). The LCP element is a text block; the delay is the fonts. Two web fonts are preloaded on every page — Fraunces (serif, 67 KB, with the optical-size axis) and Inter (48 KB) — and under 4G simulation those 115 KB arrive after first paint, and the LCP candidate re-paints on swap.
- Total transfer ~460 KB / 76 requests on a cost page; the largest script chunk is 73 KB (framework) with ~26 KB unused. No third-party scripts on the page. No render-blocking resources flagged. No oversized images (the logo is served responsive via next/image with `sizes`).

## Changed in this branch

- **Fraunces without the `opsz` axis**: 67 KB → 37 KB (−31 KB, −46 % of the serif font, −26 % of all preloaded font bytes). Headings render from the same variable weight axis; the optical-size axis only affected the 17 places serif is used at `text-lg`/`text-base`, which now render at the font's default optical size. **Visual review item**: check a KensTake and a PullQuote on a phone after deploy; if the small serif looks too high-contrast, the alternative is keeping `opsz` and dropping to `display: "optional"` (which trades a possible fallback-font first view for a stable LCP).

## Not changed (with reasons)

- `display: "swap"` kept; `optional` would fix LCP more but can show the fallback font on slow first visits, which is a design change.
- Link prefetching was tested with `prefetch={false}` on header/footer/related links — no measurable LCP change locally, and it slows navigation, so it was reverted.
- The 26 KB of unused JS in the framework chunk is Next.js runtime, not app code.

## Re-measure after deploy

`node scripts/technical-seo-check.mjs` covers SEO; for performance re-run the five URLs above with the same flags and compare the LCP column. Target: LCP under 2.5 s on 4G simulation on the cost and article pages.
