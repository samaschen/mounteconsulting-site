import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | MountE Consulting",
  description: "Terms and conditions for using the MountE Consulting website.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm text-neutral-500">
        <Link href="/" className="text-brand-600 hover:underline">
          ← Back to home
        </Link>
      </p>
      <h1 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-mounte-forest">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: {new Date().getFullYear()}</p>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-700">
        <p>
          These terms govern your use of the MountE Consulting website. By accessing or using this
          site, you agree to these terms. If you do not agree, please do not use the site.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">Use of the website</h2>
        <p>
          You agree to use this website only for lawful purposes and in a way that does not infringe
          the rights of others or restrict their use and enjoyment of the site.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">Intellectual property</h2>
        <p>
          Content on this site (including text, graphics, and logos) is owned by MountE Consulting
          or its licensors unless otherwise stated. You may not copy, modify, or distribute content
          without prior written permission.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">Disclaimer</h2>
        <p>
          Information is provided &ldquo;as is&rdquo; without warranties of any kind. MountE
          Consulting is not liable for any loss arising from your use of this website or reliance on
          its content.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">Contact</h2>
        <p>
          For questions about these terms, please reach out through the contact form on our{" "}
          <Link href="/#contact" className="text-brand-600 hover:underline">
            home page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
