type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-50" />
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-20 md:pt-36">
        {eyebrow ? (
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-steel">{eyebrow}</p>
        ) : null}
        <h1 className="font-display max-w-3xl text-4xl leading-tight tracking-wide text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{description}</p>
      </div>
    </section>
  );
}
