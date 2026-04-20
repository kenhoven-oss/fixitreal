import Link from "next/link";
import { CalendarSignupForm } from "@/components/marketing/CalendarSignupForm";

type NewsletterBlockProps = {
  variant?: "default" | "inline";
};

export function NewsletterBlock({ variant = "default" }: NewsletterBlockProps) {
  const isInline = variant === "inline";
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
        The Home Repair Cost Calendar
      </p>
      <p
        className={`mt-2 text-sm max-w-lg ${
          isInline ? "text-ink-600" : "text-ink-200"
        }`}
      >
        One task list for every month of the year — with real 2026 cost ranges
        for each. Free PDF, no email required. Or subscribe for seasonal
        reminders when the next month&apos;s tasks come due.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href="/home-repair-cost-calendar"
          className={
            isInline
              ? "inline-flex items-center rounded-md bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-navy-800"
              : "inline-flex items-center rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-900 no-underline hover:bg-amber-400"
          }
        >
          Get the calendar →
        </Link>
      </div>

      <div className="mt-6">
        <CalendarSignupForm variant="inline" />
      </div>
    </div>
  );
}
