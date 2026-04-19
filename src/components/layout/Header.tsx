import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-ink-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center shrink-0 no-underline"
          aria-label={site.name}
        >
          <Image
            src="/logo.png"
            alt={site.name}
            width={180}
            height={45}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <nav className="flex gap-7 text-sm font-medium text-ink-700">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline hover:text-navy-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
