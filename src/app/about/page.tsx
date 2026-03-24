import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { about } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: about.metaDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: absoluteUrl("/about"),
  },
};

function SectionBody({
  block,
}: {
  block: (typeof about.sections)[number];
}) {
  if ("bodyWithBold" in block) {
    return (
      <p className="mt-4 max-w-none text-left text-base leading-relaxed text-neutral-700 sm:text-lg">
        {block.bodyWithBold.before}
        <strong className="font-semibold text-mounte-forest">{block.bodyWithBold.bold}</strong>
        {block.bodyWithBold.after}
      </p>
    );
  }
  return (
    <p className="mt-4 max-w-none text-left text-base leading-relaxed text-neutral-700 sm:text-lg">
      {block.body}
    </p>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-mounte-cream">
      <Section className="pb-6 pt-12 sm:pt-16">
        <Reveal>
          <h1 className="text-center font-serif text-4xl font-semibold tracking-tight text-mounte-forest sm:text-5xl">
            {about.title}
          </h1>
        </Reveal>
      </Section>

      <Section className="pb-16 pt-2 sm:pb-20">
        <Reveal>
          <div className="mx-auto max-w-3xl space-y-10 sm:space-y-12">
            {about.sections.map((block, i) => (
              <section key={block.heading} aria-labelledby={`about-section-${i}`}>
                <h2
                  id={`about-section-${i}`}
                  className="text-left font-serif text-xl font-semibold tracking-tight text-mounte-forest sm:text-2xl"
                >
                  {block.heading}
                </h2>
                <SectionBody block={block} />
              </section>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section padded={false} className="bg-mounte-forest py-16 sm:py-20">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-clients-gold sm:text-3xl">
              {about.founder.heading}
            </h2>
            <div className="mt-8 flex justify-center">
              <Image
                src={about.founder.imageSrc}
                alt={about.founder.imageAlt}
                width={160}
                height={160}
                className="size-36 rounded-sm object-contain sm:size-40"
                priority
              />
            </div>
            <div className="mt-8 space-y-6 text-center text-base leading-relaxed text-mounte-cream/95 sm:text-lg">
              {about.founder.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
