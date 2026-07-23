import Link from "next/link";
import { contactDetails } from "../lib/contact";
import { navLinks, siteName } from "../lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl tracking-wide text-silver">{siteName}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Talent agency and media house bridging creators with opportunity across South Africa
            and beyond.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-steel">Explore</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-steel">Connect</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a
                href={contactDetails.emailHref}
                className="transition hover:text-foreground"
              >
                {contactDetails.email}
              </a>
            </li>
            <li>
              <a
                href={contactDetails.phoneHref}
                className="transition hover:text-foreground"
              >
                {contactDetails.phone}
              </a>
            </li>
            <li>
              <a
                href={contactDetails.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-foreground"
              >
                Instagram — @{contactDetails.instagram.handle}
              </a>
            </li>
          </ul>
          <Link
            href="/contact"
            className="mt-5 inline-flex text-sm text-silver underline-offset-4 transition hover:text-foreground hover:underline"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {year} gemnetwork.co.za</p>
          <p>GEM Network</p>
        </div>
      </div>
    </footer>
  );
}
