import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | MountE Consulting",
  description: "Privacy policy for the MountE Consulting website.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm text-neutral-500">
        <Link href="/" className="text-brand-600 hover:underline">
          ← Back to home
        </Link>
      </p>
      <h1 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-mounte-forest">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: {new Date().getFullYear()}</p>
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-700">
        <p>
          MountE Consulting (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy
          describes how we handle information when you visit our website.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">Information we collect</h2>
        <p>
          We may collect information you voluntarily provide (for example, name, email address, and
          message content when you use our contact form). We may also collect technical data such as
          browser type and pages visited, similar to most websites.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">How we use information</h2>
        <p>
          We use contact submissions to respond to your inquiries. We do not sell your personal
          information. We may use service providers who assist in hosting or operating the site,
          bound by appropriate confidentiality obligations.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">Cookies</h2>
        <p>
          This site may use cookies or similar technologies as needed for basic functionality or
          analytics. You can control cookies through your browser settings.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, or delete your
          personal information. Contact us to make a request.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">Changes</h2>
        <p>
          We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top
          will change when we do.
        </p>
        <h2 className="text-lg font-semibold text-neutral-900">Contact</h2>
        <p>
          Questions about privacy? Use the{" "}
          <Link href="/#contact" className="text-brand-600 hover:underline">
            contact form
          </Link>{" "}
          on our home page.
        </p>
      </div>
    </div>
  );
}
