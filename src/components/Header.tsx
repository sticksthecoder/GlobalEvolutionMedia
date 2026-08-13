"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "../lib/nav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="relative block h-10 w-36 shrink-0 md:h-12 md:w-44"
        >
          <Image
            src="/brand/logo.jpeg"
            alt="Global Evolution Media"
            fill
            className="object-contain object-left"
            sizes="176px"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-3 py-2 text-sm tracking-wide transition-colors ${
                  active ? "text-foreground" : "text-muted hover:text-silver"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-steel transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-sm bg-steel px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-[#3a58a0] sm:inline-flex"
          >
            Contact us
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-silver lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-current transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span className={`h-px w-full bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-px w-full bg-current transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-line bg-background/95 lg:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4" aria-label="Mobile">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line/60 py-3 text-base ${
                  active ? "text-foreground" : "text-muted"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex justify-center rounded-sm bg-steel px-4 py-3 text-sm font-semibold text-foreground"
          >
            Contact us
          </Link>
        </nav>
      </div>
    </header>
  );
}
