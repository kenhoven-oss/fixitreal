# Affiliate buying-guide pages — how to add one

This note covers the one-file workflow for publishing a new FixItReal Tools
buying guide with Amazon affiliate links.

## File layout

```
src/components/tools/
  RecommendedProductCard.tsx       ← single product card + the RecommendedProduct type
  RecommendedProductsSection.tsx   ← section wrapper (heading, intro, comparison, cards)
  AmazonDisclosure.tsx             ← auto-renders the required Amazon sentence

src/app/tools/
  best-drain-snakes-for-homeowners/
    page.tsx                       ← example guide (copy this to start a new one)
```

## How to add a new buying guide

1. **Copy the example folder:**
   ```
   src/app/tools/best-drain-snakes-for-homeowners/
   ```
   Rename it to your new slug, e.g. `src/app/tools/best-stud-finders-for-homeowners/`.
   The folder name becomes the URL path.

2. **Open `page.tsx` inside the new folder** and edit:
   - `pageTitle`, `pageDescription`, `path` (must match the new folder)
   - The `products` array (see next section)
   - The body prose (intro, "what matters most", "when not to DIY")
   - The `faqs` array
   - The "Related reading" internal links
   - The `datePublished` / `dateModified` in the schema block

3. **Save, commit, push.** Vercel rebuilds automatically.

## How to add or edit products

Each product is a single object in the `products` array. Minimum required
fields:

```ts
{
  name: "25-ft manual hand auger",
  bestFor: "Everyday sink and tub clogs within 20 feet of pipe.",
  whyItMadeTheList: "A 25-foot cable covers most homeowner clogs...",
  keyBuyingNotes: "Look for a 1/4-inch steel cable and a drum with a secure lid.",
  affiliateUrl: "",   // paste your SiteStripe link here when ready
}
```

Optional fields: `badge` ("Best Overall", "Best Budget"...), `category`
("Manual drain snake"...), `buttonText` (defaults to "Check price on Amazon").

### Pasting your Amazon affiliate link

1. Open Amazon.com in a browser where you're signed in as an Associate.
2. Find the product page.
3. Use the SiteStripe bar at the top → **Text** → copy the short link.
   It will look like `https://amzn.to/4tlV9dU`.
4. Paste it into the `affiliateUrl` field of the product object.
5. Done. The card's "Check price on Amazon" button becomes active and links
   to your affiliated URL. `rel="sponsored nofollow noopener"` is added
   automatically.

### Draft mode

Leave `affiliateUrl: ""` (empty string) if you haven't picked a link yet.
The card still renders — it just shows "Buying link coming soon." instead
of a button. As soon as you paste a real link, the button appears.

## Disclosure behavior

The Amazon Associates required sentence —

> As an Amazon Associate, I earn from qualifying purchases.

— renders automatically at the top of the article **only when at least one
product on the page has a non-empty `affiliateUrl`**. If every product is
still in draft mode (no links), the disclosure stays hidden and the page
looks clean.

Nothing to toggle. The `<AmazonDisclosure products={products} />` line in
the page handles it.

## Comparison table

The `RecommendedProductsSection` shows a styled "coming soon" placeholder
where a comparison table will eventually live. When you're ready to add a
real table, pass a `comparison` prop:

```tsx
<RecommendedProductsSection
  heading="Our picks"
  products={products}
  comparison={{
    columns: ["Best for", "Length", "Cable dia."],
    rows: [
      { productName: "25-ft manual hand auger", values: { "Best for": "Sink/tub clogs", "Length": "25 ft", "Cable dia.": "1/4 in" } },
      // one row per product...
    ],
  }}
/>
```

## Rules of thumb

- **No brand names in the body prose.** Only in the structured product
  data. That keeps articles evergreen and usable even if products change.
- **No fabricated testing claims.** The example page uses phrases like
  "covers most homeowner clogs" and "worth the upgrade if you can find
  one" — honest buying guidance, not invented hands-on testing.
- **No prices or star ratings in the data.** Amazon's terms prohibit
  displaying stale prices, and fake ratings are a trust killer.
- **One guide per folder.** Keep each buying guide in its own folder under
  `src/app/tools/`. Don't try to share a page across multiple topics.

## If you ever want to rip affiliate out

Every affiliate link on the site comes from the `products` arrays in
Tools pages. Search the codebase for `amzn.to` to see every one. The
`AmazonDisclosure` component only shows when a page has at least one
active link, so clearing links = clearing disclosures automatically.
