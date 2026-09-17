import Link from "next/link";
import { CalendarSignupForm } from "@/components/marketing/CalendarSignupForm";

type NewsletterBlockProps = {
  variant?: "default" | "inline";
  /**
   * When set to "home-inspection-repairs", swaps the pitch from the
   * general Cost Calendar to the Inspection Repair Negotiation Checklist —
   * the lead magnet that's actually relevant to a reader on a buyer/seller
   * repair-negotiation article. Any other value (or omitted) falls back
   * to the calendar, which is the right default everywhere else on the site.
   */
  pillar?: string;
};

const PITCHES = {
  calendar: {
    heading: "The Home Repair Cost Calendar",
    body: "One task list for every month of the year — with real 2026 cost ranges for each. Free PDF, no email required. Or subscribe for seasonal reminders when the next month's tasks come due.",
    href: "/home-repair-cost-calendar",
    cta: "Get the calendar →",
  },
  checklist: {
    heading: "The Home Inspection Repair Negotiation Checklist",
    body: "The exact triage table for a buyer's repair list — what to fix, what to credit, what to refuse — plus lender concession caps by loan type. Free PDF, no email required. Or subscribe for more negotiation guides like this one.",
    href: "/downloads/home-inspection-repair-checklist.pdf",
    cta: "Get the checklist →",
  },
} as const;

export function NewsletterBlock({ variant = "default", pillar }: NewsletterBlockProps) {
  const isInline = variant === "inline";
  const pitch = pillar === "home-inspection-repairs" ? PITCHES.checklist : PITCHES.calendar;
  // A PDF served by a route handler is a file download, not a page — a
  // plain anchor with `download` does what the reader expects. next/link
  // would attempt a client-side RSC navigation to it, which is wrong here
  // (same reasoning as ChecklistCTA).
  const isPdf = /\.pdf$/i.test(pitch.href);

  const ctaClassName = isInline
    ? "inline-flex items-center rounded-md bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-navy-800"
    : "inline-flex items-center rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-900 no-underline hover:bg-amber-400";

  return (
    <div
      className={
        isInline
          ? "rounded-lg border border-ink-200 bg-ink-50 p-6"
          : "rounded-lg bg-navy-900 text-ink-50 p-8 md:p-10"
      }
    >
      <p
        className={`font-serif text-2xl ${isInline ? "text-navy-900" : "text-white"}`}
      >
        {pitch.heading}
      </p>
      <p
        className={`mt-2 text-sm max-w-lg ${
          isInline ? "text-ink-600" : "text-ink-200"
        }`}
      >
        {pitch.body}
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        {isPdf ? (
          <a href={pitch.href} download className={ctaClassName}>
            {pitch.cta}
          </a>
        ) : (
          <Link href={pitch.href} className={ctaClassName}>
            {pitch.cta}
          </Link>
        )}
      </div>

      <div className="mt-6">
        <CalendarSignupForm variant="inline" />
      </div>
    </div>
  );
}
