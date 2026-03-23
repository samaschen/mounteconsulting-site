"use client";

import Image from "next/image";
import { home } from "@/lib/content";

/** Circular logos on dark green, infinite auto-scroll (marquee). */
export function ClientLogos() {
  const items = home.clients.items;

  return (
    <div className="relative -mx-4 overflow-hidden sm:mx-0">
      <div
        className="client-marquee flex w-max animate-marquee-logos gap-5 hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:max-w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-5 sm:gap-6"
        role="list"
        aria-label="Client logos"
      >
        {items.map((c, i) => (
          <LogoCircle key={`a-${c.label}-${i}`} c={c} />
        ))}
        {items.map((c, i) => (
          <LogoCircle key={`b-${c.label}-${i}`} c={c} duplicate />
        ))}
      </div>
    </div>
  );
}

function LogoCircle({
  c,
  duplicate = false,
}: {
  c: (typeof home.clients.items)[number];
  duplicate?: boolean;
}) {
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={duplicate ? -1 : undefined}
      aria-hidden={duplicate || undefined}
      className={`group relative flex aspect-square w-[7.25rem] flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)] sm:w-32 md:w-[8.5rem] ${duplicate ? "motion-reduce:hidden" : ""}`}
      role="listitem"
    >
      <span className="relative block h-[80%] w-[80%]">
        <Image
          src={c.imageSrc}
          alt={duplicate ? "" : c.label}
          fill
          sizes="(max-width: 768px) 116px, 136px"
          className="object-contain transition group-hover:opacity-95"
        />
      </span>
    </a>
  );
}
