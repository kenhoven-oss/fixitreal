import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";
import { adsConfig } from "@/lib/ads";
import { ExternalLink } from "@/components/ui/ExternalLink";

/**
 * The advertising sections below read the live ad configuration so the
 * policy never claims ads are running when they are not (or vice versa).
 * Flipping NEXT_PUBLIC_ADS_ENABLED changes the wording on the next deploy.
 */
const adsLive = adsConfig.adsEnabled;

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
        <p className="mt-2 text-sm text-ink-600">Last updated: November 2026</p>

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
              pages visited, referring site) from your visit. We use Vercel
              Web Analytics and Vercel Speed Insights to understand which pages
              are useful and whether the site is fast enough. Both are
              cookieless: they count visits and page performance in aggregate
              and do not track you across other websites.
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
            <li>
              <strong>Google (advertising).</strong>{" "}
              {adsLive ? (
                <>
                  Google serves the display ads on some of our article pages
                  and, in doing so, receives the technical data described in
                  the Advertising section below.
                </>
              ) : (
                <>
                  Not currently. We do not run display advertising today; the
                  Advertising section below explains what will change if we
                  turn on Google AdSense.
                </>
              )}
            </li>
          </ul>
          <p>
            We don&apos;t sell your data. We don&apos;t share email addresses
            with advertisers or other newsletters. If that ever changes, this
            page will change first and you&apos;ll get a heads-up in the
            newsletter.
          </p>

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Cookies and similar technologies</h2>
          <p>
            FixItReal itself does not set tracking cookies. Our analytics are
            cookieless, the site has no login, and the newsletter form stores
            nothing in your browser beyond what it needs to submit. We don&apos;t
            run retargeting pixels or social-media trackers.
          </p>
          {adsLive ? (
            <p>
              The exception is advertising: Google and its advertising partners
              may set cookies or use similar identifiers when an ad is shown on
              one of our article pages. The Advertising section below explains
              what they do and how to control them.
            </p>
          ) : (
            <p>
              If we turn on display advertising, Google and its advertising
              partners would set cookies or use similar identifiers when an ad
              is shown. We&apos;ll update this page and the Advertising section
              below before that happens.
            </p>
          )}

          <h2 className="font-serif text-2xl text-navy-900 mt-8">Advertising</h2>
          {adsLive ? (
            <p>
              Some of our article pages show display ads served by Google
              AdSense. We don&apos;t show ads on the homepage, on our
              calculators and tools, or on pages like this one. Advertisers
              never influence what we write.
            </p>
          ) : (
            <p>
              <strong>We do not currently show display ads.</strong> We plan to
              use Google AdSense on some article pages — never on the homepage,
              on our calculators and tools, or on pages like this one. Because we
              want this policy to be accurate before anything changes, here is
              how Google advertising works when it is active:
            </p>
          )}
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>What Google receives.</strong> To serve and measure an
              ad, Google receives technical information about your visit (such
              as your IP address, browser, the page you&apos;re on, and a
              cookie or device identifier). Google&apos;s use of that data is
              described in{" "}
              <ExternalLink href="https://policies.google.com/technologies/partner-sites">
                How Google uses information from sites that use its services
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://policies.google.com/technologies/ads">
                Google&apos;s advertising technologies page
              </ExternalLink>
              .
            </li>
            <li>
              <strong>Personalized and non-personalized ads.</strong> Google may
              use cookies to show you ads based on your previous visits to this
              and other websites (personalized ads), or ads based only on the
              page you&apos;re reading and general location (non-personalized
              ads). You can turn off personalized advertising in{" "}
              <ExternalLink href="https://adssettings.google.com/">
                Google&apos;s Ads Settings
              </ExternalLink>
              , and opt out of many other vendors&apos; personalized ads at{" "}
              <ExternalLink href="https://optout.aboutads.info/">
                aboutads.info
              </ExternalLink>{" "}
              or, in Europe,{" "}
              <ExternalLink href="https://www.youronlinechoices.com/">
                youronlinechoices.com
              </ExternalLink>
              .
            </li>
            <li>
              <strong>If you&apos;re in the EEA, the UK, or Switzerland.</strong>{" "}
              Before any personalized ad is shown, you&apos;ll see a consent
              message provided by Google (a Google-certified consent management
              platform). You can decline, consent, or manage individual
              purposes and vendors, and you can change your choice later from
              the same message.
            </li>
            <li>
              <strong>US state privacy laws.</strong> Residents of California
              and other states with privacy laws can opt out of personalized
              (&ldquo;targeted&rdquo;) advertising using the Google controls
              above. If you&apos;d like us to help, email{" "}
              <a
                href={`mailto:${site.contactEmail}`}
                className="text-navy-700 hover:text-navy-900 underline decoration-amber-500"
              >
                {site.contactEmail}
              </a>
              .
            </li>
            <li>
              <strong>Ad blockers</strong> are fine with us. The content works
              the same with or without them.
            </li>
          </ul>

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
              <strong>Browser controls.</strong> You can block or delete cookies
              in your browser at any time. You&apos;ll still be able to read
              everything on the site.
            </li>
            <li>
              <strong>Advertising choices.</strong> See the Advertising section
              above for how to turn off personalized ads or change a consent
              choice you made earlier.
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
