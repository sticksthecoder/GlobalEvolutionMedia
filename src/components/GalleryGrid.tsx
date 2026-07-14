"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { galleryImages } from "../lib/gallery";

type GalleryGridProps = {
  limit?: number;
};

export function GalleryGrid({ limit }: GalleryGridProps) {
  const items = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((image, index) => (
        <Reveal key={image.src} delay={index * 0.06}>
          <figure className="group relative aspect-[4/5] overflow-hidden bg-surface-2">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-60" />
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
