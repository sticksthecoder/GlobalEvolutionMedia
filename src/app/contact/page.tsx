import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { contactDetails } from "../../lib/contact";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Get in touch with Global Evolution Media — email, phone, and Instagram for talent and brand enquiries.",
};

const details = [
  {
    label: "Email",
    value: contactDetails.email,
    href: contactDetails.emailHref,
    note: "Direct inbox for talent and brand enquiries.",
  },
  {
    label: "Phone",
    value: contactDetails.phone,
    href: contactDetails.phoneHref,
    note: "Prefer a call? Reach us during business hours.",
  },
  {
    label: "Socials",
    value: `Instagram — @${contactDetails.instagram.handle}`,
    href: contactDetails.instagram.href,
    note: "Follow GEM for updates, work, and behind the scenes.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacts"
        title="Get in touch."
        description="Whether you are talent looking for representation or a brand ready to grow — reach out and we will take it from there."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-steel">Contact details</p>
          <h2 className="font-display mt-4 text-3xl tracking-wide text-foreground md:text-4xl">
            How to reach us
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {details.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <article className="flex h-full flex-col border border-line bg-surface p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-steel">{item.label}</p>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-display mt-4 text-2xl text-silver transition hover:text-foreground"
                >
                  {item.value}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
