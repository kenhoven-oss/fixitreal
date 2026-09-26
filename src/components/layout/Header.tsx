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
        >
          {/*
            `sizes` is required here even though the logo is a fixed size.
            Without it, next/image builds the srcset from the `width` prop
            (964) and offers 1x/2x candidates — so every retina visitor was
            downloading the 2048px variant of a logo that renders at ~235px,
            on every page, as a `priority` (render-blocking) LCP candidate.
            Declaring the real display width lets next/image serve a ~256px
            file instead. The image carries the accessible name (alt) so
            the link needs no aria-label; one announcement, and image
            search gets a real label.
          */}
          <Image
            src="/FIXitREALlogo.png"
            alt={`${site.name} — honest home repair advice`}
            width={964}
            height={329}
            sizes="(min-width: 768px) 235px, 165px"
            priority
            className="h-14 w-auto md:h-20"
          />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm font-semibold text-navy-900">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline hover:text-amber-700 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/search"
            aria-label="Search FixItReal"
            className="no-underline flex items-center gap-1.5 text-ink-700 hover:text-amber-700 transition-colors"
            title="Search"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span className="sr-only md:not-sr-only">Search</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
