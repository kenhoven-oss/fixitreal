import Link from "next/link";

type AffiliateDisclosureProps = {
  variant?: "inline" | "banner";
};

export function AffiliateDisclosure({ variant = "inline" }: AffiliateDisclosureProps) {
  if (variant === "banner") {
    return (
      <aside
        role="note"
        className="mt-8 -mb-3 border-l-2 border-ink-200 pl-3 text-xs text-ink-600 leading-relaxed"
      >
        <strong className="font-medium text-ink-700">Disclosure:</strong>{" "}
        This article contains affiliate links; we may earn a small commission
        at no extra cost to you. As an Amazon Associate, I earn from qualifying
        purchases. Picks are editorial —{" "}
        <Link
          href="/affiliate-disclosure"
          className="text-ink-700 hover:text-navy-900 underline decoration-ink-300"
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
      This page contains affiliate links. As an Amazon Associate, I earn from
      qualifying purchases — at no extra cost to you. See our{" "}
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
