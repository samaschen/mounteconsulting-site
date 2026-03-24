/** Central SEO constants — production canonical host is non-www. */

export const siteUrl = "https://mounteconsulting.com";
export const siteName = "MountE Consulting";
export const siteDescription =
  "MountE Consulting provides data science, analytics, machine learning, and marketing optimization solutions for modern businesses.";

/** Add `public/og-image.png` (recommended 1200×630) for social previews. */
export const ogImagePath = "/og-image.png";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export const logoUrl = absoluteUrl("/images/brand/mounte-consulting-logo.png");
