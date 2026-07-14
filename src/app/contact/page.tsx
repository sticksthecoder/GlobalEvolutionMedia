import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Get in touch with Global Evolution Media. Contact details coming soon.",
};

const placeholders = [
  {
    label: "Email",
    value: "Coming soon",
    note: "Direct inbox for talent and brand enquiries.",
  },
  {
    label: "Phone",
    value: "Coming soon",
    note: "Prefer a call? Numbers will be listed here shortly.",
  },
  {
    label: "Socials",
    value: "Coming soon",
    note: "Follow GEM on the platforms where your audience already is.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacts"
        title="Get in touch."
        description="We are updating our public contact channels. In the meantime, reach out through the channels below as they come online — or check back soon."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {placeholders.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <article className="h-full border border-line bg-surface p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-steel">{item.label}</p>
                <p className="font-display mt-4 text-2xl text-silver">{item.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 border border-dashed border-line/80 bg-surface-2/50 p-8 md:p-10">
          <h2 className="font-display text-2xl text-foreground md:text-3xl">Message form</h2>
          <p className="mt-3 max-w-xl text-muted">
            An enquiry form is coming soon. Until then, please use the contact details above once
            they are published.
          </p>
        </Reveal>
      </section>
    </>
  );
}
