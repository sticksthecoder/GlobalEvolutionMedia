type VisualPlaceholderProps = {
  label?: string;
  caption?: string;
  className?: string;
};

export function VisualPlaceholder({
  label = "Visual",
  caption = "Coming soon",
  className = "",
}: VisualPlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-line bg-surface ${className}`}
      aria-label={`${label} placeholder`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(45, 69, 123, 0.35), transparent 70%), linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-40" />
      <div className="relative z-10 px-4 text-center">
        <p className="text-[10px] uppercase tracking-[0.28em] text-steel">{label}</p>
        <p className="font-display mt-2 text-sm text-silver md:text-base">{caption}</p>
      </div>
    </div>
  );
}
