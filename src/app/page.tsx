import Link from "next/link";
import { HomeHero } from "../components/HomeHero";
import { Reveal } from "../components/Reveal";

const pillars = [
  {
    title: "Our story",
    body: "GEM was created to bridge the gap between talent and opportunity. Through professional representation and strategic partnerships, we help creators and businesses grow their brands.",
  },
  {
    title: "Our vision",
    body: "To become a leading talent agency and media house that empowers individuals, strengthens brands, and creates opportunities across South Africa and beyond.",
  },
  {
    title: "Our mission",
    body: "To deliver innovative talent management, marketing, and media solutions that drive growth, inspire creativity, and create long-term success for our clients.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-steel">Why us?</p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl tracking-wide text-foreground md:text-4xl">
              Built for talent. Tuned for brands.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="border-t border-line pt-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display mt-3 text-2xl text-silver">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-steel">Next step</p>
            <h2 className="font-display mt-4 max-w-xl text-3xl tracking-wide text-foreground md:text-4xl">
              Ready to elevate your presence?
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              Whether you are talent looking for representation or a brand seeking media that
              moves — we would love to hear from you.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex rounded-sm bg-steel px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-[#3a58a0]"
            >
              Contact us
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
