import type { ReactNode } from "react";

/**
 * Data shape for a single recommended product on a Tools buying-guide page.
 *
 * Paste your Amazon SiteStripe short link (https://amzn.to/...) into
 * `affiliateUrl`. Leave it blank during drafting — the card still renders,
 * the button just doesn't show.
 */
export type RecommendedProduct = {
  /** Display name shown as the card headline. */
  name: string;
  /** Optional pill at the top of the card, e.g. "Best Overall". */
  badge?: string;
  /** One-liner describing the ideal homeowner use case. */
  bestFor: string;
  /** 1–3 sentences of honest, non-testing-based reasoning. */
  whyItMadeTheList: string;
  /** 1–3 sentences on what to compare when buying this category. */
  keyBuyingNotes: string;
  /**
   * Amazon SiteStripe affiliate URL. Leave blank to render the card without
   * a buy button (useful while drafting).
   * Example: "https://amzn.to/4tlV9dU"
   */
  affiliateUrl?: string;
  /** Button label. Defaults to "Check price on Amazon". */
  buttonText?: string;
  /** Optional category tag (e.g. "Manual drain snake"). */
  category?: string;
};

type RecommendedProductCardProps = {
  product: RecommendedProduct;
  children?: ReactNode;
};

export function RecommendedProductCard({ product, children }: RecommendedProductCardProps) {
  const {
    name,
    badge,
    bestFor,
    whyItMadeTheList,
    keyBuyingNotes,
    affiliateUrl,
    buttonText = "Check price on Amazon",
    category,
  } = product;

  return (
    <article className="rounded-lg border border-ink-200 bg-white p-6 md:p-7 flex flex-col gap-4">
      <header className="flex flex-wrap items-start gap-2 justify-between">
        <div>
          {badge && (
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              {badge}
            </p>
          )}
          <h3 className="mt-1 font-serif text-xl text-navy-900 leading-snug">
            {name}
          </h3>
          {category && (
            <p className="mt-1 text-xs text-ink-600">{category}</p>
          )}
        </div>
      </header>

      <dl className="space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-navy-900">Best for</dt>
          <dd className="mt-1 text-ink-700 leading-relaxed">{bestFor}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy-900">Why it made the list</dt>
          <dd className="mt-1 text-ink-700 leading-relaxed">{whyItMadeTheList}</dd>
        </div>
        <div>
          <dt className="font-semibold text-navy-900">What to check</dt>
          <dd className="mt-1 text-ink-700 leading-relaxed">{keyBuyingNotes}</dd>
        </div>
      </dl>

      {children}

      {affiliateUrl ? (
        <a
          href={affiliateUrl}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="mt-auto inline-flex items-center justify-center rounded-md bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white visited:text-white no-underline hover:bg-navy-800 transition-colors"
        >
          {buttonText} ↗
        </a>
      ) : (
        <p className="mt-auto text-xs italic text-ink-500">
          Buying link coming soon.
        </p>
      )}
    </article>
  );
}
