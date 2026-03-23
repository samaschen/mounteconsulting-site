import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  contained = true,
  padded = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  contained?: boolean;
  /** When false, skip default vertical padding (e.g. full-bleed hero). */
  padded?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${padded ? "py-16 sm:py-20" : ""} ${className}`.trim()}
    >
      <div
        className={
          contained ? "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" : undefined
        }
      >
        {children}
      </div>
    </section>
  );
}
