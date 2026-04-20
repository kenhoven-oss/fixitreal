import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

const trustLinks = [
  { href: "/about", label: "About" },
  { href: "/about/editorial-standards", label: "Editorial standards" },
  { href: "/about/methodology", label: "Methodology" },
  { href: "/about/contact", label: "Contact" },
  { href: "/affiliate-disclosure", label: "Affiliate disclosure" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 bg-ink-50 mt-20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block no-underline" aria-label={site.name}>
              <Image
                src="/logo.png"
                alt={site.name}
                width={360}
                height={90}
                className="h-20 w-auto md:h-24"
              />
            </Link>
            <p className="mt-4 text-sm text-ink-600 max-w-sm">{site.tagline}</p>
            <p className="mt-3 text-xs text-ink-500 max-w-sm">{site.description}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Browse</p>
            <ul className="mt-3 space-y-2 text-sm">
              {site.pillars.map((p) => (
                <li key={p.slug}>
                  <Link href={p.href} className="no-underline text-ink-700 hover:text-navy-900">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/tools" className="no-underline text-ink-700 hover:text-navy-900">
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Trust</p>
            <ul className="mt-3 space-y-2 text-sm">
              {trustLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="no-underline text-ink-700 hover:text-navy-900">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-ink-200 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink-500">
          <span>&copy; {year} {site.name}. All rights reserved.</span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
