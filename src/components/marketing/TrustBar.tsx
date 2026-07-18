import Link from "next/link";

const claims = [
  {
    label: "No home warranty ads, ever",
    href: "/advice/home-warranties-bad-deal",
  },
  {
    label: "Cost data tracked and dated",
    href: "/about/methodology",
  },
  {
    label: "Independently written, not AI-spun",
    href: "/about",
  },
];

export function TrustBar() {
  return (
    <div className="border-y border-ink-200 bg-ink-50">
      <div className="mx-auto max-w-6xl px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-ink-600">
        {claims.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="flex items-center gap-1.5 hover:text-navy-900 hover:underline underline-offset-2"
          >
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            {c.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
