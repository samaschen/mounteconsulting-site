"use client";

import { useState } from "react";
import { home } from "@/lib/content";

const fieldClass =
  "w-full border border-contact-green bg-white px-3 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-500 outline-none transition focus:border-contact-green focus:ring-2 focus:ring-contact-green/25";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const ph = home.contact.placeholders;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        fallbackMailto?: boolean;
        mailto?: string;
      };

      if (res.ok) {
        setSubmitted(true);
        return;
      }

      if (res.status === 503 && data.fallbackMailto && data.mailto) {
        window.location.href = data.mailto;
        setSubmitted(true);
        return;
      }

      setError(data.error ?? "Something went wrong. Please try again.");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl space-y-4">
      {submitted ? (
        <p className="text-sm font-medium text-contact-green">{home.contact.thanks}</p>
      ) : (
        <>
          {error ? (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          ) : null}
          <div>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={ph.name}
              aria-label={ph.name}
              disabled={loading}
              className={fieldClass}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={ph.email}
              aria-label={ph.email}
              disabled={loading}
              className={fieldClass}
            />
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={ph.phone}
              aria-label={ph.phone}
              disabled={loading}
              className={fieldClass}
            />
          </div>
          <div>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              autoComplete="off"
              placeholder={ph.subject}
              aria-label={ph.subject}
              disabled={loading}
              className={fieldClass}
            />
          </div>
          <div>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder={ph.message}
              aria-label="Message"
              disabled={loading}
              className={`${fieldClass} resize-y`}
            />
          </div>
          <div className="flex justify-end pt-1">
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-contact-green px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-contact-green/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-contact-green disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending…" : home.contact.send}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
