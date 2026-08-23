"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteName, siteTagline } from "../lib/nav";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-70" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-14 pt-32 text-center md:px-8 md:pb-16 md:pt-36">
        <motion.div
          className="relative mb-8 h-40 w-full max-w-xl md:mb-10 md:h-52 md:max-w-2xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/brand/logo.jpeg"
            alt={siteName}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 90vw, 672px"
            priority
          />
        </motion.div>

        <motion.h1
          className="font-display text-3xl leading-tight tracking-wide text-foreground sm:text-4xl md:text-5xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {siteTagline}
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          A talent agency and media house connecting creators with opportunity, and brands with
          work that lasts.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/about"
            className="rounded-sm bg-steel px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-[#3a58a0]"
          >
            Discover GEM
          </Link>
          <Link
            href="/contact"
            className="rounded-sm border border-silver/40 px-6 py-3 text-sm text-silver transition hover:border-steel hover:text-foreground"
          >
            Work with us
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="relative w-full"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative min-h-[42vh] w-full overflow-hidden border-y border-line bg-background md:min-h-[52vh]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/visual1.mp4"
            autoPlay={!reduce}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="GEM Network hero visual"
          />
        </div>
      </motion.div>
    </section>
  );
}
