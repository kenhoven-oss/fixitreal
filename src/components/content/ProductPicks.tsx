import Link from "next/link";
import { isAffiliateUrl } from "@/lib/amazon";
import { PRODUCT_PICKS, type ProductPick } from "@/content/product-picks";

type ProductPicksProps = {
  /**
   * Registry key in src/content/product-picks.ts. This is how MDX uses the
   * component — a plain string attribute, because next-mdx-remote drops
   * expression attributes (see the registry's header comment).
   */
  id?: string;
  /** Box heading. Defaults to "Recommended for this job". */
  title?: string;
  /** One to three picks. More than three turns an article into a storefront. */
  picks?: ProductPick[];
  /** Optional internal buying guide, kept alongside — never instead of. */
  guideHref?: string;
  /** Link text for the internal guide. */
  guideLabel?: string;
  /** Two or more internal guides, when the job spans categories. */
  guides?: Array<{ href: string; label: string }>;
};

/**
 * Restrained contextual product block for repair articles.
 *
 * DESIGN CONSTRAINTS (deliberate, do not "improve" these away)
 * -----------------------------------------------------------
 * - No Amazon images, star ratings, review counts or prices. We have no
 *   Product Advertising API licence, and hard-coded prices go stale and
 *   breach the Associates terms.
 * - No urgency, no "#1 bestseller", no "cheapest". The CTA says what the
 *   link does and nothing more.
 * - The internal buying guide link sits next to the affiliate CTA rather
 *   than being replaced by it: a reader who wants to compare should be able
 *   to, and the internal link is worth more to the site than the click-out.
 * - Visually quiet — a thin bordered box in the body flow, not a coloured
 *   advertisement. FixItReal is a repair site that monetises useful
 *   recommendations, not a storefront with articles attached.
 */
export function ProductPicks({
  id,
  title,
  picks,
  guideHref,
  guideLabel,
  guides,
}: ProductPicksProps) {
  const block = id ? PRODUCT_PICKS[id] : undefined;
  if (id && !block) {
    throw new Error(
      `<ProductPicks id="${id}"> has no entry in src/content/product-picks.ts`
    );
  }
  const resolvedPicks = picks ?? block?.picks ?? [];
  const heading = title ?? block?.title ?? "Recommended for this job";
  const usable = resolvedPicks.filter(
    (p) => p.href?.trim() && isAffiliateUrl(p.href)
  );
  const guideLinks =
    guides ??
    block?.guides ??
    (guideHref
      ? [{ href: guideHref, label: guideLabel ?? "See our buying guide" }]
      : []);
  if (usable.length === 0 && guideLinks.length === 0) return null;

  return (
    <aside
      role="note"
      aria-label={heading}
      className="my-8 rounded-lg border border-ink-200 bg-ink-50/70 p-5"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
        {heading}
      </p>
      <ul className="mt-3 space-y-4">
        {usable.map((p) => (
          <li key={p.href + p.name} className="text-sm">
            <p className="font-semibold text-navy-900">{p.name}</p>
            <p className="mt-1 text-ink-700 leading-relaxed">{p.why}</p>
            <a
              href={p.href.trim()}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 no-underline border-b border-amber-500 pb-0.5 hover:text-navy-900"
            >
              {p.label ?? "Check on Amazon"}
              <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>
      {guideLinks.length > 0 && (
        <p className="mt-4 text-xs text-ink-600">
          {"Want to compare before you buy? "}
          {guideLinks.map((g, i) => (
            <span key={g.href}>
              {i > 0 ? " · " : ""}
              <Link
                href={g.href}
                className="no-underline text-navy-700 hover:text-navy-900 border-b border-ink-300"
              >
                {g.label}
              </Link>
            </span>
          ))}
        </p>
      )}
      <p className="mt-3 text-[11px] leading-relaxed text-ink-500">
        Affiliate links. As an Amazon Associate I earn from qualifying
        purchases, at no extra cost to you. Picks are editorial — see{" "}
        <Link
          href="/affiliate-disclosure"
          className="no-underline text-ink-600 hover:text-navy-900 border-b border-ink-300"
        >
          how we decide
        </Link>
        .
      </p>
    </aside>
  );
}
