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
  /**
   * How the picks were arrived at. Rendered as a plain label under the
   * heading so the reader never has to guess whether a guide is a
   * hands-on test or a research piece. Defaults to "researched" because
   * that is what every guide on the site is today; set "tested" only on
   * a page that has named models, real measurements, and original photos.
   * This is the mechanism behind the homepage promise "every buying guide
   * says whether a pick was tested or researched".
   */
  basis?: "tested" | "researched";
};

const BASIS_LABEL: Record<NonNullable<RecommendedProductsSectionProps["basis"]>, string> = {
  tested:
    "Hands-on tested: we bought or borrowed these units and used them on real jobs.",
  researched:
    "Editorially researched, not hands-on tested: picks are based on manufacturer specs, safety listings, verified owner reports, and our own repair experience — not on lab testing of each unit.",
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
  basis = "researched",
}: RecommendedProductsSectionProps) {
  // Explicit override wins; otherwise try to auto-build.
  const table = comparison ?? autoComparison(products);

  return (
    <section className="mt-10">
      <h2 className="font-serif text-3xl text-navy-900">{heading}</h2>
      <p className="mt-2 inline-flex items-start gap-2 rounded-md border border-ink-200 bg-ink-50 px-3 py-2 text-xs text-ink-700 leading-relaxed max-w-3xl">
        <span className="font-semibold uppercase tracking-wider text-amber-700 shrink-0">
          {basis === "tested" ? "Tested" : "Researched"}
        </span>
        <span>{BASIS_LABEL[basis]}</span>
      </p>
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
