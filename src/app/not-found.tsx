import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Page not found",
  description:
    "The page you're looking for doesn't exist — or hasn't been published yet.",
  path: "/404",
  noIndex: true,
});

/**
 * Curated "most likely what you wanted" list for 404s. Ordered by the
 * intent strength of the typical FixItReal visitor — most arrive trying
 * to make a specific repair decision, so DIY-or-hire articles and the
 * decision tool come first; cost guides come next; explore browse last.
 */
const popularLinks: Array<{ href: string; label: string; hint: string }> = [
  { href: "/diy-or-hire/toilet", label: "Toilet replacement", hint: "DIY-or-hire verdict + cost" },
  { href: "/diy-or-hire/water-heater", label: "Water heater", hint: "When DIY makes sense and when it doesn't" },
  { href: "/diy-or-hire/unclog-drain", label: "Unclog a drain", hint: "Step-by-step DIY" },
  { href: "/diy-or-hire/garbage-disposal", label: "Garbage disposal", hint: "Three failure modes, all DIY-fixable" },
  { href: "/costs", label: "Repair cost ranges", hint: "2026 prices, with the math shown" },
  { href: "/tools/diy-or-hire", label: "DIY-or-hire decision tool", hint: "Quick verdict in 30 seconds" },
  { href: "/advice", label: "Honest advice", hint: "Contractor vetting, red flags, pricing" },
  { href: "/topics", label: "All topics", hint: "Browse by appliance or system" },
];

export default function NotFound() {
  return (
    <Section padding="xl" size="md">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
        404
      </p>
      <h1 className="mt-3 font-serif text-5xl text-navy-900">
        Page not found
      </h1>
      <p className="mt-5 text-lg text-ink-700 leading-relaxed max-w-2xl">
        The page you&apos;re looking for doesn&apos;t exist — either it never
        did, it moved, or we haven&apos;t published it yet. Here&apos;s what
        most visitors come here for:
      </p>

      <div className="mt-8 grid gap-3 md:grid-cols-2 max-w-3xl">
        {popularLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group rounded-md border border-ink-200 bg-white px-4 py-3 no-underline transition-colors hover:border-navy-700 hover:shadow-sm"
          >
            <p className="font-serif text-base text-navy-900 group-hover:text-navy-700">
              {l.label} →
            </p>
            <p className="mt-0.5 text-sm text-ink-600">{l.hint}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 max-w-2xl">
        <p className="text-sm text-ink-700">
          Or search for the exact topic you had in mind:
        </p>
        <form
          action="/search"
          method="GET"
          role="search"
          className="mt-3 flex gap-2"
        >
          <label htmlFor="q" className="sr-only">
            Search FixItReal
          </label>
          <input
            id="q"
            name="q"
            type="search"
            placeholder="Try: breaker, water heater, GFCI, toilet cost…"
            className="flex-1 rounded-md border border-ink-300 bg-white px-4 py-2.5 text-sm text-navy-900 placeholder:text-ink-500 focus:border-navy-700 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
          />
          <button
            type="submit"
            className="rounded-md bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-800"
          >
            Search
          </button>
        </form>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-navy-700 hover:text-navy-900 border-b-2 border-amber-500 pb-0.5"
        >
          Back to home →
        </Link>
      </div>
    </Section>
  );
}
