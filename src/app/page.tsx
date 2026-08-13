import Link from "next/link";
import { HomeHero } from "../components/HomeHero";
import { Reveal } from "../components/Reveal";

export default function HomePage() {
  return (
    <>
      <HomeHero />

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
