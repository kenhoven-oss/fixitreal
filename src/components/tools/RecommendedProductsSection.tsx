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
   * Optional comparison table. Provide column labels and one row per
   * product. Leave undefined to show the placeholder instead.
   */
  comparison?: {
    columns: string[];
    rows: ComparisonRow[];
  };
};

export function RecommendedProductsSection({
  heading,
  intro,
  products,
  comparison,
}: RecommendedProductsSectionProps) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-3xl text-navy-900">{heading}</h2>
      {intro && (
        <div className="mt-3 text-ink-700 leading-relaxed max-w-3xl">{intro}</div>
      )}

      {/* ------------------------------------------------------------------
          Comparison table
          If you pass a `comparison` prop, it renders here as a real table.
          If you don't, a styled placeholder shows until you fill one in.
      ------------------------------------------------------------------ */}
      <div className="mt-6">
        {comparison ? (
          <div className="overflow-x-auto rounded-lg border border-ink-200">
            <table className="min-w-full text-sm">
              <thead className="bg-ink-50 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-navy-900">Product</th>
                  {comparison.columns.map((c) => (
                    <th key={c} className="px-4 py-3 font-semibold text-navy-900">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row) => (
                  <tr key={row.productName} className="border-t border-ink-200">
                    <td className="px-4 py-3 font-medium text-navy-900">
                      {row.productName}
                    </td>
                    {comparison.columns.map((c) => (
                      <td key={c} className="px-4 py-3 text-ink-700">
                        {row.values[c] ?? "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-ink-300 bg-ink-50 px-5 py-4 text-sm text-ink-600">
            <strong className="text-navy-900">At-a-glance comparison (coming)</strong>
            <p className="mt-1">
              A quick-compare table will appear here once we&apos;ve added the
              full set of specs for each option. Meanwhile, the cards below
              cover the key points.
            </p>
          </div>
        )}
      </div>

      {/* Product cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <RecommendedProductCard key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
