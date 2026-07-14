import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Media House",
  description:
    "Content creation, video production, branding and marketing campaigns from the GEM media house.",
};

const offerings = [
  {
    title: "Creative direction",
    body: "Concepts and campaign frameworks that clarify your message before a single frame is shot — ideas rooted in your brand, not templates.",
  },
  {
    title: "Content & video production",
    body: "Professional shoots, edits, and deliverables for social, web, and campaign use — polished work that still feels human.",
  },
  {
    title: "Brand & marketing solutions",
    body: "Visual identity support, campaign assets, and storytelling that help businesses grow with consistency and impact.",
  },
];

export default function MediaHousePage() {
  return (
    <>
      <PageHero
        eyebrow="Media House"
        title="Stories made to be seen."
        description="From concept to campaign, GEM delivers content creation, video production and brand solutions that help businesses and talent stand out."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-steel">How we work</p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl tracking-wide text-foreground md:text-4xl">
            Media that drives growth
          </h2>
        </Reveal>

        <div className="mt-14 space-y-0">
          {offerings.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="grid gap-4 border-t border-line py-10 md:grid-cols-[0.4fr_1fr] md:gap-12">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-2 text-2xl text-silver md:text-3xl">{item.title}</h3>
                </div>
                <p className="self-center text-muted leading-relaxed">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex flex-col items-start gap-6 border border-line bg-surface-2/80 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h3 className="font-display text-2xl text-foreground">Have a project in mind?</h3>
            <p className="mt-2 max-w-lg text-sm text-muted">
              Tell us about your brand, campaign, or content need — we will shape the next steps
              with you.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 rounded-sm border border-silver/35 px-6 py-3 text-sm text-silver transition hover:border-steel hover:text-foreground"
          >
            Contact the media house
          </Link>
        </Reveal>
      </section>
    </>
  );
}
