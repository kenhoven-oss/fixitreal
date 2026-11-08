import type { RecommendedProduct } from "./RecommendedProductCard";

/**
 * Amazon Associates required disclosure.
 *
 * Amazon's Operating Agreement requires this exact sentence on any page
 * containing Amazon affiliate links:
 *
 *   "As an Amazon Associate, I earn from qualifying purchases."
 *
 * Pass the page's product list. The component only renders if at least
 * one product has a non-empty `affiliateUrl`, so draft pages with blank
 * links stay clean and disclosure-free until they go live.
 */
export function AmazonDisclosure({ products }: { products: RecommendedProduct[] }) {
  const hasAffiliateLink = products.some((p) => !!p.affiliateUrl?.trim());

  if (!hasAffiliateLink) return null;

  return (
    <aside
      role="note"
      className="my-5 border-l-2 border-ink-200 pl-3 text-xs text-ink-600 leading-relaxed"
    >
      <strong className="font-medium text-ink-700">Disclosure:</strong>{" "}
      As an Amazon Associate, I earn from qualifying purchases.
    </aside>
  );
}
