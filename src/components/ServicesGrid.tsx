import Image from "next/image";
import { home } from "@/lib/content";

export function ServicesGrid() {
  return (
    <div className="mt-12 grid gap-14 md:mt-14 md:grid-cols-3 md:gap-8 lg:gap-12">
      {home.services.items.map((item) => (
        <article key={item.title} className="flex flex-col items-center text-center">
          <h3 className="font-serif text-xl font-semibold text-clients-forest sm:text-2xl">
            {item.title}
          </h3>
          <div className="relative mt-8 aspect-square w-full max-w-[280px] overflow-hidden sm:max-w-xs">
            <Image
              src={item.imageSrc}
              alt={item.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-8 text-sm leading-relaxed text-mounte-forest/80 sm:text-base">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
