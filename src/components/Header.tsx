import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={160}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <nav className="flex gap-6 text-sm">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
