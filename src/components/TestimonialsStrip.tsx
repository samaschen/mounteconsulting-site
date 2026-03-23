import { home } from "@/lib/content";

/** Auto-scrolling testimonials on forest-green band (gold serif, subtle panels). */
export function TestimonialsStrip() {
  const items = home.testimonials;

  return (
    <div className="relative -mx-4 overflow-hidden sm:mx-0">
      <div className="quotes-marquee flex w-max animate-marquee-quotes gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:max-w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-4 sm:gap-6">
        {items.map((t, i) => (
          <TestimonialCard key={`a-${t.name}-${i}`} t={t} />
        ))}
        {items.map((t, i) => (
          <TestimonialCard key={`b-${t.name}-${i}`} t={t} duplicate />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  t,
  duplicate = false,
}: {
  t: (typeof home.testimonials)[number];
  duplicate?: boolean;
}) {
  return (
    <figure
      className={`w-[min(100vw-3rem,26rem)] flex-shrink-0 rounded-2xl border border-white/15 bg-black/20 p-6 shadow-sm backdrop-blur-[2px] sm:w-[26rem] sm:p-8 ${duplicate ? "motion-reduce:hidden" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      <blockquote className="font-serif text-sm italic leading-relaxed text-clients-gold sm:text-base">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-white/20 pt-5">
        <p className="font-medium text-clients-gold">{t.name}</p>
        <p className="mt-1 text-sm text-clients-gold/85">{t.role}</p>
      </figcaption>
    </figure>
  );
}
