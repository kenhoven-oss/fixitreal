import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-ink-200 bg-white sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 no-underline"
          aria-label={site.name}
        >
          <Image
            src="/FIXitREALlogo.png"
            alt={site.name}
            width={964}
            height={329}
            priority
            className="h-14 w-auto md:h-20"
          />
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold text-navy-900">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline hover:text-amber-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
