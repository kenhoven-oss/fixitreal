type NewsletterBlockProps = {
  variant?: "default" | "inline";
};

/**
 * Newsletter capture block.
 * For launch, this is a stub form — the action is set to a Beehiiv embed URL
 * once the account is live. Until then the form prevents default submission and
 * shows a success state client-side (progressive enhancement).
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
        One free PDF. What to check (and what it should cost) every month of the
        year — so nothing breaks without warning.
      </p>
      <form
        action="https://example.beehiiv.com/subscribe"
        method="post"
        className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md"
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
          className="rounded-md bg-amber-500 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:bg-amber-400 transition-colors"
        >
          Get the calendar
        </button>
      </form>
      <p
        className={`mt-2 text-xs ${
          isInline ? "text-ink-500" : "text-ink-300"
        }`}
      >
        One email a week. No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
