"use client";

import { useState, type FormEvent } from "react";

type CalendarSignupFormProps = {
  variant?: "hero" | "inline";
};

const SUBSCRIBE_URL = "/api/subscribe";

export function CalendarSignupForm({ variant = "hero" }: CalendarSignupFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const isHero = variant === "hero";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    const firstName = String(formData.get("first_name") ?? "").trim();

    // Basic client-side validation (Beehiiv does the real verification via double opt-in)
    if (!firstName || firstName.length < 2) {
      setError("Please enter your first name.");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch(SUBSCRIBE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });
      if (!res.ok) throw new Error("subscription failed");
      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Please try again in a moment.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className={
          isHero
            ? "rounded-lg bg-amber-50 border border-amber-200 p-6 md:p-8"
            : "rounded-lg bg-amber-50 border border-amber-200 p-5"
        }
      >
        <p className="font-serif text-2xl text-navy-900">Check your inbox</p>
        <p className="mt-3 text-ink-800 leading-relaxed">
          We just sent a confirmation email. Click the link in it to confirm
          your address and your free Home Repair Cost Calendar PDF will arrive
          in the welcome email right after.
        </p>
        <p className="mt-2 text-sm text-ink-600">
          Don&apos;t see it within 5 minutes? Check your spam folder.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={
        isHero
          ? "rounded-lg border border-ink-200 bg-white p-6 md:p-8 shadow-sm"
          : ""
      }
    >
      {isHero && (
        <>
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
            Get the PDF
          </p>
          <p className="mt-2 font-serif text-2xl text-navy-900">
            Free — emailed straight to your inbox
          </p>
          <p className="mt-2 text-sm text-ink-600">
            One confirmation click to verify your email, then the calendar PDF
            arrives. No spam, unsubscribe anytime.
          </p>
        </>
      )}

      <div className={`${isHero ? "mt-5" : ""} grid gap-3 sm:grid-cols-2`}>
        <div>
          <label htmlFor="first_name" className="sr-only">
            First name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            required
            minLength={2}
            placeholder="First name"
            autoComplete="given-name"
            className="w-full rounded-md border border-ink-300 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-navy-500"
          />
        </div>
        <div>
          <label htmlFor="cal_email" className="sr-only">
            Email address
          </label>
          <input
            id="cal_email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full rounded-md border border-ink-300 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-navy-500"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-3 w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-navy-900 px-6 py-2.5 text-sm font-semibold text-white no-underline hover:bg-navy-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Email me the calendar →"}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-700">{error}</p>
      )}

      <p className="mt-3 text-xs text-ink-500 leading-relaxed">
        We use double opt-in — you&apos;ll get one confirmation email. After
        that, expect a weekly newsletter with the month&apos;s maintenance
        tasks and one contractor-vetting tip. Unsubscribe anytime with one
        click.
      </p>
    </form>
  );
}
