import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
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
