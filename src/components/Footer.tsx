import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mounte-teal/20 bg-mounte-forest">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-mounte-cream">MountE Consulting</p>
            <p className="text-sm text-mounte-apricot/90">
              © {year} MountE Consulting. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-mounte-cream/90">
              <Link href="/" className="transition hover:text-mounte-apricot">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-mounte-apricot">
                About
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-mounte-apricot/80">
              <Link href="/terms" className="underline-offset-2 hover:text-mounte-cream hover:underline">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy" className="underline-offset-2 hover:text-mounte-cream hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-relaxed text-mounte-apricot/75">
          Information on this site is for general purposes only and does not constitute professional
          advice. Use of this website is subject to our terms and privacy policy.
        </p>
      </div>
    </footer>
  );
}
