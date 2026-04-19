import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 mt-auto">
      <div className="mx-auto max-w-5xl px-6 py-6 text-sm text-black/60 dark:text-white/60">
        &copy; {year} {site.name}
      </div>
    </footer>
  );
}
