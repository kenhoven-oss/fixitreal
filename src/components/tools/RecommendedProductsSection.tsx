import type { ReactNode } from "react";
import {
  RecommendedProductCard,
  type RecommendedProduct,
} from "./RecommendedProductCard";

type ComparisonRow = {
  /** Which product (match by `name`) this row belongs to. */
  productName: string;
  /** Short one-liner per column — e.g. { "Best for": "Sink clogs", "Length": "25 ft" }. */
  values: Record<string, string>;
};

type RecommendedProductsSectionProps = {
  /** Section heading, e.g. "Recommended drain snakes". */
  heading: string;
  /** Optional short paragraph under the heading. */
  intro?: ReactNode;
  /** The product list. Cards render in this order. */
  products: RecommendedProduct[];
  /**
   * Optional explicit comparison table override. Normally you don't need
   * this — the section auto-builds a comparison table from each product's
   * `bestFor`, `avoidIf`, `typicalUse`, `skillLevel`, `riskLevel`,
   * `verdict`, and (if set) `affiliateUrl` fields. Pass an explicit
   * `comparison` object only when you want custom columns or labels.
   */
  comparison?: {
    columns: string[];
    rows: ComparisonRow[];
  };
};

/**
 * Default columns for the auto-derived at-a-glance comparison table.
 *
 * Why these specific columns: they answer the "should I buy this for me?"
 * question in one row — what it's for, what disqualifies it, how often a
 * typical homeowner uses it, whether they can use it safely, the damage
 * risk if they can't, and a plain-English verdict. Plus a buy link when
 * one exists, satisfying the affiliate-page audit requirement that the
 * comparison surface a "buy / consider link" per product.
 */
const DEFAULT_COLUMNS = [
  "Best for",
  "Avoid if",
  "Typical homeowner use",
  "Skill level",
  "Risk level",
  "Verdict",
  "Where to buy",
] as const;

/**
 * Build comparison rows from the product list. A row is included only when
 * the product has at least one of the comparison fields filled in, so a
 * page that hasn't been enriched yet shows nothing here instead of an
 * "(coming soon)" placeholder.
 */
function autoComparison(
  products: RecommendedProduct[]
): { columns: string[]; rows: ComparisonRow[] } | null {
  const rows: ComparisonRow[] = [];
  for (const p of products) {
    const filled =
      p.bestFor ||
      p.avoidIf ||
      p.typicalUse ||
      p.skillLevel ||
      p.riskLevel ||
      p.verdict;
    if (!filled) continue;
    // We require at least one of avoidIf/skillLevel/riskLevel/verdict before
    // a row qualifies for the comparison — bestFor alone is on every card
    // already, so it's not enough on its own to justify the table.
    const minimumEnrichment =
      p.avoidIf || p.skillLevel || p.riskLevel || p.verdict;
    if (!minimumEnrichment) continue;
    rows.push({
      productName: p.name,
      values: {
        "Best for": p.bestFor ?? "—",
        "Avoid if": p.avoidIf ?? "—",
        "Typical homeowner use": p.typicalUse ?? "—",
        "Skill level": p.skillLevel ?? "—",
        "Risk level": p.riskLevel ?? "—",
        Verdict: p.verdict ?? "—",
        "Where to buy": p.affiliateUrl?.trim()
          ? "Amazon (see card)"
          : "—",
      },
    });
  }
  if (rows.length === 0) return null;
  return { columns: [...DEFAULT_COLUMNS], rows };
}

export function RecommendedProductsSection({
  heading,
  intro,
  products,
  comparison,
}: RecommendedProductsSectionProps) {
  // Explicit override wins; otherwise try to auto-build.
  const table = comparison ?? autoComparison(products);

  return (
    <section className="mt-10">
      <h2 className="font-serif text-3xl text-navy-900">{heading}</h2>
      {intro && (
        <div className="mt-3 text-ink-700 leading-relaxed max-w-3xl">{intro}</div>
      )}

      {/* ------------------------------------------------------------------
          At-a-glance comparison table — auto-built from product data.
          Renders only when at least one product has enrichment fields
          filled in. No "coming soon" placeholder.
      ------------------------------------------------------------------ */}
      {table && (
        <div className="mt-6 overflow-x-auto rounded-lg border border-ink-200">
          <table className="min-w-full text-sm">
            <caption className="sr-only">
              At-a-glance comparison of recommended {heading.toLowerCase()}
            </caption>
            <thead className="bg-ink-50 text-left">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 font-semibold text-navy-900"
                >
                  Product / tool type
                </th>
                {table.columns.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className="px-4 py-3 font-semibold text-navy-900"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.productName} className="border-t border-ink-200">
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-left text-navy-900"
                  >
                    {row.productName}
                  </th>
                  {table.columns.map((c) => (
                    <td key={c} className="px-4 py-3 text-ink-700 align-top">
                      {row.values[c] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Product cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <RecommendedProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
