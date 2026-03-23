import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { ButtonLinkHeroOutline, ButtonLinkOutline } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { ClientLogos } from "@/components/ClientLogos";
import { TestimonialsStrip } from "@/components/TestimonialsStrip";
import { ContactForm } from "@/components/ContactForm";
import { ServicesGrid } from "@/components/ServicesGrid";
import { home, siteMeta } from "@/lib/content";

export const metadata: Metadata = {
  title: siteMeta.home.title,
  description: siteMeta.home.description,
};

export default function HomePage() {
  return (
    <div id="home">
      <Section
        contained={false}
        padded={false}
        className="relative min-h-[min(100dvh,920px)] overflow-hidden"
      >
        <Image
          src={home.hero.backgroundSrc}
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-[center_42%] sm:object-center"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mounte-forest/55 via-black/35 to-mounte-forest/50"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(100dvh,920px)] max-w-6xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 sm:py-32 lg:px-8">
          <Reveal>
            <h1 className="max-w-4xl tracking-tight text-white">
              <span className="block font-serif text-4xl font-semibold sm:text-5xl lg:text-6xl">
                {home.hero.titleBrand}
              </span>
              <span className="mt-4 block font-serif text-2xl font-semibold sm:mt-5 sm:text-3xl lg:text-4xl">
                {home.hero.titleTagline}
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-white/90 sm:text-lg">{home.hero.subtitle}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLinkHeroOutline href="/#why-mounte">{home.hero.ctaLearnMore}</ButtonLinkHeroOutline>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="why-mounte" className="bg-cream">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-clients-forest sm:text-4xl">
              {home.whyMountE.heading}
            </h2>
            <p className="mt-6 text-base font-bold leading-relaxed text-clients-forest sm:text-lg">
              {home.whyMountE.body}
            </p>
            <div className="mt-10 flex justify-center">
              <ButtonLinkOutline href="/#our-services">{home.whyMountE.ctaOurServices}</ButtonLinkOutline>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-clients-forest">
        <Reveal>
          <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-clients-gold sm:text-4xl">
            {home.clients.heading}
          </h2>
          <div className="mt-10">
            <ClientLogos />
          </div>
          <h2 className="mt-16 text-center font-serif text-3xl font-semibold tracking-tight text-clients-gold sm:mt-20 sm:text-4xl">
            What clients say
          </h2>
          <div className="mt-10">
            <TestimonialsStrip />
          </div>
        </Reveal>
      </Section>

      <Section id="our-services" className="bg-cream">
        <Reveal>
          <h2 className="text-center font-serif text-3xl font-semibold tracking-tight text-clients-forest sm:text-4xl">
            {home.services.heading}
          </h2>
          <ServicesGrid />
        </Reveal>
      </Section>

      <Section id="contact" className="bg-contact-yellow">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-contact-green sm:text-3xl">
            {home.contact.heading}
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-contact-green/80">{home.contact.hint}</p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
