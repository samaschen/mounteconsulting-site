import Link from "next/link";
import type { ReactNode } from "react";

type Base = {
  children: ReactNode;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  className = "",
}: Base & { href: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 ${className}`}
    >
      {children}
    </Link>
  );
}

/** White ghost button on photo / dark hero */
export function ButtonLinkHeroOutline({
  href,
  children,
  className = "",
}: Base & { href: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-none border border-white bg-transparent px-8 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
    >
      {children}
    </Link>
  );
}

/** Sharp-corner outline (Why MountE → Our Services), forest green on cream */
export function ButtonLinkOutline({
  href,
  children,
  className = "",
}: Base & { href: string }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-none border-2 border-clients-forest bg-transparent px-8 py-3 font-serif text-base font-medium text-clients-forest transition hover:bg-clients-forest/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clients-forest ${className}`}
    >
      {children}
    </Link>
  );
}

export function ButtonPrimary({
  type = "button",
  children,
  className = "",
  disabled,
}: Base & { type?: "button" | "submit"; disabled?: boolean }) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
}
