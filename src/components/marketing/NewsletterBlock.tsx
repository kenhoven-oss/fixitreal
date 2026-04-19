import Link from "next/link";

type NewsletterBlockProps = {
  variant?: "default" | "inline";
};

/**
 * Newsletter capture block.
 * Points users at the free Home Repair Cost Calendar (landing page + PDF)
 * and offers a weekly newsletter with seasonal reminders.
 */
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

      <form
        action="https://fixitreal.beehiiv.com/subscribe"
        method="post"
        target="_blank"
        className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className={`flex-1 rounded-md px-4 py-2.5 text-sm border outline-none ${
            isInline
              ? "border-ink-300 bg-white text-ink-900 focus:border-navy-500"
              : "border-navy-700 bg-navy-800 text-white placeholder:text-ink-400 focus:border-amber-400"
          }`}
        />
        <button
          type="submit"
          className={
            isInline
              ? "rounded-md border border-navy-900 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-navy-900 hover:text-white"
              : "rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          }
        >
          Subscribe
        </button>
      </form>

      <p
        className={`mt-2 text-xs ${
          isInline ? "text-ink-500" : "text-ink-300"
        }`}
      >
        One email a week. Seasonal reminders + one contractor-vetting tip. No
        spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
