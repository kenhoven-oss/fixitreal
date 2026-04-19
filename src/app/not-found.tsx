import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Page not found",
  description: "The page you're looking for doesn't exist — or hasn't been published yet.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <Section padding="xl" size="sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">404</p>
      <h1 className="mt-3 font-serif text-5xl text-navy-900">Page not found</h1>
      <p className="mt-5 text-lg text-ink-700 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist. Either it never did,
        it moved, or we haven&apos;t published it yet.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-navy-800"
        >
          Back to home
        </Link>
        <Link
          href="/costs"
          className="inline-flex items-center rounded-md border border-ink-300 px-5 py-3 text-sm font-semibold text-navy-900 no-underline hover:border-navy-700"
        >
          Browse repair costs
        </Link>
      </div>
    </Section>
  );
}
