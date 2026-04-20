import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "What FixItReal collects, how we use it, and how to contact us about your data. Plain English, no dark patterns.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Section padding="md" size="lg">
        <Breadcrumb
          items={[
            { name: "Home", href: "/" },
            { name: "Privacy", href: "/privacy" },
          ]}
        />
      </Section>

      <Section padding="sm" size="sm">
        <h1 className="font-serif text-4xl text-navy-900">Privacy policy</h1>
        <p className="mt-2 text-sm text-ink-600">Last updated: April 2026</p>

        <div className="mt-8 space-y-5 text-ink-800 leading-relaxed">
          <p>
            This policy explains what data FixItReal collects when you visit the
            site, how we use it, and how to reach us about it. We try to keep
            this short. If anything below isn&apos;t clear, email us at{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
            >
              {site.contactEmail}
            </a>
            .
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">What we collect</h2>
          <p>
            We collect two kinds of information:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Information you give us.</strong> When you sign up for our
              newsletter or request the Home Repair Cost Calendar, we collect
              your first name and email address. When you email us, we receive
              whatever you write in the message.
            </li>
            <li>
              <strong>Information collected automatically.</strong> Like most
              websites, we receive basic technical data (IP address, browser,
              pages visited, referring site) from your visit. We use
              privacy-respecting analytics through Vercel to understand which
              pages are useful and whether the site is fast enough.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">How we use it</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Deliver the resources you asked for (the calendar PDF, the
              newsletter).
            </li>
            <li>
              Reply to your questions when you email us.
            </li>
            <li>
              Measure overall traffic, page performance, and which articles are
              genuinely helpful. We don&apos;t build personal profiles of
              individual readers.
            </li>
            <li>
              Protect the site from abuse, spam, and bots.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Who we share it with</h2>
          <p>
            We share data only with the service providers we use to operate the
            site:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Beehiiv</strong> — handles our email list and sends the
              newsletter. Your email address and first name are stored there.
            </li>
            <li>
              <strong>Vercel</strong> — hosts the site and provides the
              analytics and performance data mentioned above.
            </li>
            <li>
              <strong>Google Search Console / Impact</strong> — site
              verification only. These tools don&apos;t receive personally
              identifiable visitor data from us.
            </li>
          </ul>
          <p>
            We don&apos;t sell your data. We don&apos;t share email addresses
            with advertisers or other newsletters. If that ever changes, this
            page will change first and you&apos;ll get a heads-up in the
            newsletter.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Cookies</h2>
          <p>
            We use a small number of cookies for essentials: remembering that
            you&apos;ve dismissed a banner, keeping the site functional, and
            capturing anonymous analytics. We don&apos;t run ad-retargeting
            pixels or third-party marketing trackers.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Affiliate links and third-party sites</h2>
          <p>
            Some pages contain affiliate links to retailers such as Amazon. When
            you click one and buy something, the retailer may set their own
            cookies and collect their own data. That&apos;s governed by their
            privacy policy, not ours. See our{" "}
            <Link
              href="/affiliate-disclosure"
              className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
            >
              affiliate disclosure
            </Link>{" "}
            for the full picture on how we earn.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Your choices</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Unsubscribe anytime.</strong> Every newsletter email has a
              one-click unsubscribe link.
            </li>
            <li>
              <strong>Request deletion.</strong> Email us at{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
              >
                {site.contactEmail}
              </a>{" "}
              and we&apos;ll remove your data from our lists. If you&apos;re in
              California, the EU, or the UK and want to exercise any additional
              rights your local law provides (access, correction, portability),
              email us and we&apos;ll handle it.
            </li>
            <li>
              <strong>Browser controls.</strong> You can disable cookies in your
              browser at any time. Parts of the site may be less convenient
              without them, but you&apos;ll still be able to read everything.
            </li>
          </ul>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Children</h2>
          <p>
            FixItReal isn&apos;t directed at children under 13. We don&apos;t
            knowingly collect data from them. If you believe a child has
            submitted information to us, email us and we&apos;ll delete it.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Changes to this policy</h2>
          <p>
            If we change how we handle data, we&apos;ll update this page and
            move the &ldquo;Last updated&rdquo; date. Material changes will also
            be called out in the newsletter.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Contact</h2>
          <p>
            Questions about privacy go to{" "}
            <a
              href={`mailto:${site.contactEmail}`}
              className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
            >
              {site.contactEmail}
            </a>
            . We read every message.
          </p>
        </div>
      </Section>
    </>
  );
}
