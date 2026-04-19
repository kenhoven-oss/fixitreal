import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { NewsletterBlock } from "@/components/marketing/NewsletterBlock";
import { buildMetadata } from "@/lib/metadata";
import { jsonLdScript, articleSchema } from "@/lib/jsonld";
import { costCalendar } from "@/content/cost-calendar";
import { leeHoven } from "@/content/authors/lee-hoven";

export const metadata = buildMetadata({
  title: "The Home Repair Cost Calendar (free)",
  description:
    "One task list for every month of the year — what to check, what it costs, and why it matters. Free. No login. Download the PDF.",
  path: "/home-repair-cost-calendar",
  noIndex: true,
});

const path = "/home-repair-cost-calendar";

export default function CostCalendarPage() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Home Repair Cost Calendar", href: path },
          ]}
        />
      </Section>

      <Section padding="sm" size="md">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
            Free resource
          </p>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-navy-900 leading-tight">
            The Home Repair Cost Calendar
          </h1>
          <p className="mt-4 text-lg text-ink-700 leading-relaxed max-w-2xl">
            One task list for every month of the year. What to check, what it
            should cost, and why it matters — so nothing breaks without warning
            and nothing surprises you on a bill.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/downloads/home-repair-cost-calendar.pdf"
              className="inline-flex items-center rounded-md bg-navy-900 px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-navy-800 transition-colors"
            >
              Download PDF →
            </a>
            <Link
              href="/costs"
              className="inline-flex items-center rounded-md border border-ink-300 px-5 py-3 text-sm font-semibold text-navy-900 bg-white no-underline hover:border-navy-700"
            >
              Browse cost guides
            </Link>
          </div>

          <p className="mt-4 text-sm text-ink-500">
            By{" "}
            <Link href={leeHoven.url} className="no-underline hover:text-navy-900">
              {leeHoven.name}
            </Link>
            {" · "}Updated April 2026
          </p>
        </div>
      </Section>

      <Section padding="md" size="lg">
        <div className="grid gap-6 md:grid-cols-2">
          {costCalendar.map((m) => (
            <article
              key={m.month}
              className="rounded-lg border border-ink-200 bg-white p-6 md:p-7 break-inside-avoid"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl text-navy-900">{m.month}</h2>
                <span className="text-xs uppercase tracking-wider text-amber-700 font-semibold">
                  {m.theme}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-600 italic">{m.subtitle}</p>

              <ol className="mt-5 space-y-4">
                {m.tasks.map((t, idx) => (
                  <li key={idx} className="border-l-2 border-amber-500 pl-4">
                    <div className="flex items-baseline justify-between gap-3 flex-wrap">
                      <p className="font-semibold text-navy-900">{t.title}</p>
                      <p className="text-xs font-mono text-ink-600">{t.cost}</p>
                    </div>
                    <p className="mt-1 text-sm text-ink-700 leading-relaxed">
                      {t.why}
                    </p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg bg-ink-50 border border-ink-200 p-6 md:p-8">
          <h2 className="font-serif text-xl text-navy-900">About this calendar</h2>
          <div className="mt-3 space-y-3 text-sm text-ink-700 leading-relaxed">
            <p>
              This calendar is compiled from published homeowner maintenance
              guidance (NFPA on dryer vent and smoke alarm standards; DOE on
              water heater and HVAC best practices), cost data from our{" "}
              <Link href="/costs" className="no-underline text-navy-700">
                cost guides
              </Link>
              , and our own opinion on what actually matters vs. what sounds
              good but isn&apos;t worth your weekend.
            </p>
            <p>
              Costs shown are 2026 US national ranges. Regional variation can
              be significant — see our{" "}
              <Link href="/about/methodology" className="no-underline text-navy-700">
                methodology
              </Link>
              .
            </p>
            <p>
              Want seasonal email reminders? Our weekly newsletter includes
              the month&apos;s task list with one link to the relevant cost
              guide, plus one contractor-vetting tip.
            </p>
          </div>
        </div>
      </Section>

      <Section padding="lg" size="md" className="print:hidden">
        <NewsletterBlock variant="inline" />
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          articleSchema({
            headline: "The Home Repair Cost Calendar",
            description:
              "Monthly homeowner maintenance task list with current cost ranges and reasoning.",
            url: path,
            datePublished: "2026-04-19",
            dateModified: "2026-04-19",
            authorUrl: leeHoven.url,
            authorName: leeHoven.name,
            articleSection: "Resources",
          })
        )}
      />
    </>
  );
}
