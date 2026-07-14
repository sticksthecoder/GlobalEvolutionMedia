import type { Metadata } from "next";
import { GalleryGrid } from "../../components/GalleryGrid";
import { PageHero } from "../../components/PageHero";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A selection of creative work and moments from Global Evolution Media.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Selected work & atmosphere."
        description="A visual look at the worlds we build around talent, brands, and media."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <GalleryGrid />
        </Reveal>
      </section>
    </>
  );
}
