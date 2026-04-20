import Link from "next/link";

type AffiliateDisclosureProps = {
  variant?: "inline" | "banner";
};

export function AffiliateDisclosure({ variant = "inline" }: AffiliateDisclosureProps) {
  if (variant === "banner") {
    return (
      <aside
        role="note"
        className="my-6 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-ink-800"
      >
        <strong className="font-semibold text-navy-900">Affiliate disclosure:</strong>{" "}
        Some links in this article go to retailers through affiliate
        partnerships. If you buy something after clicking one, we may earn a
        small commission at no extra cost to you. Our editorial picks
        aren&apos;t influenced by commissions —{" "}
        <Link
          href="/affiliate-disclosure"
          className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
        >
          how we decide
        </Link>
        .
      </aside>
    );
  }

  return (
    <p className="my-4 text-xs text-ink-600 leading-relaxed">
      <strong className="font-semibold text-ink-800">Disclosure:</strong>{" "}
      This page may contain affiliate links. If you buy something through one,
      we may earn a small commission at no extra cost to you. See our{" "}
      <Link
        href="/affiliate-disclosure"
        className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
      >
        affiliate disclosure
      </Link>
      .
    </p>
  );
}
