import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";
import { VisualPlaceholder } from "../../components/VisualPlaceholder";
import { roster } from "../../lib/talent";

export const metadata: Metadata = {
  title: "Talent Agency",
  description:
    "Professional representation for creators, artists, influencers, DJs and entertainers.",
};

const audiences = [
  {
    title: "Creators & influencers",
    body: "Strategic placement, brand collaborations, and career guidance that grow your audience and your income.",
  },
  {
    title: "Artists & entertainers",
    body: "Booking support, image building, and partnerships that put your craft in front of the right rooms.",
  },
  {
    title: "DJs & performers",
    body: "Representation that treats your sound as a brand — from stage presence to commercial opportunities.",
  },
];

export default function TalentAgencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Talent Agency"
        title="Representation with intention."
        description="We connect creators, artists, DJs and influencers with opportunities — bridging talent and brands through professional representation and strategic partnerships."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl tracking-wide text-foreground md:text-4xl">
            Who we represent
          </h2>
          <p className="mt-5 max-w-2xl text-muted leading-relaxed">
            GEM advocates for talent who are ready to grow. We help you show up professionally,
            land the right work, and build a brand that lasts beyond a single campaign.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {audiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="border-t border-line pt-6">
                <h3 className="font-display text-2xl text-silver">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-steel">Current roster</p>
            <h3 className="font-display mt-4 max-w-2xl text-3xl tracking-wide text-foreground md:text-4xl">
              Talent we represent
            </h3>
            <p className="mt-4 max-w-2xl text-muted leading-relaxed">
              Profiles will appear here as we publish the current roster — each with a photo, bio,
              and industry.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {roster.map((talent, index) => (
              <Reveal key={`${talent.industry}-${index}`} delay={index * 0.08}>
                <article className="border border-line bg-surface/60">
                  <VisualPlaceholder
                    label="Portrait"
                    caption="Photo coming soon"
                    className="aspect-[4/5] w-full border-0 border-b"
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-steel">{talent.industry}</p>
                    <h4 className="font-display mt-3 text-2xl text-silver">{talent.name}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{talent.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-16 border border-line bg-surface p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-steel">For brands</p>
          <h3 className="font-display mt-4 text-2xl text-foreground md:text-3xl">
            Need the right face, voice, or presence for your campaign?
          </h3>
          <p className="mt-4 max-w-2xl text-muted">
            Partner with GEM to access vetted talent aligned to your brand story — and media
            support to bring the collaboration to life.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-sm bg-steel px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-[#3a58a0]"
          >
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </>
  );
}
