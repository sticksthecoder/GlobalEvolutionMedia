import type { Metadata } from "next";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "About us",
  description:
    "GEM is a dynamic talent agency and media house empowering talent and accelerating business growth.",
};

const services = [
  {
    title: "Talent Management",
    body: "Connecting creators, artists, DJs and influencers with the right opportunities — and representing them with professionalism.",
  },
  {
    title: "Media House",
    body: "Professional content creation, video production and brand solutions that make ideas visible and memorable.",
  },
  {
    title: "Business Growth",
    body: "Strategic marketing and creative campaigns designed to help businesses grow with clarity and consistency.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Talent meets opportunity."
        description="GEM is a dynamic talent agency and media house focused on empowering talented individuals and accelerating business growth. We represent creators, artists, influencers, DJs and entertainers while delivering professional marketing, branding and media production services to business."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-steel">Our mission</p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl tracking-wide text-foreground md:text-4xl">
            Create opportunities. Build impactful brands. Forge partnerships that last.
          </h2>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            Our mission is to create opportunities, build impactful brands, and develop meaningful
            partnerships that drive long-term success for both talent and businesses.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="h-full border border-line bg-surface/60 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-steel">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-4 text-2xl text-silver">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{service.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
