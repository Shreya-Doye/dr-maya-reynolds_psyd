import Image from "next/image";
import { services } from "@/data/site";

const tintClass = {
  primary: "photo-tint-primary",
  secondary: "photo-tint-secondary",
  accent: "photo-tint-accent",
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-secondary">
          Areas of Focus
        </p>
        <h2 className="mt-4 max-w-2xl font-serif-display text-4xl font-light text-ink sm:text-5xl">
          Three areas where I focus my work
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Every client is different, but these are the areas clients most
          often bring to our work together.
        </p>
      </div>

      {/* Each card's photo comes from `image` in the services array —
          edit src/data/site.ts to change any of them. */}
      <div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-alt">
              <Image
                src={service.image}
                alt={`Calm imagery representing ${service.title} therapy`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <div className={`${tintClass[service.tone]} absolute inset-0`} />
            </div>
            <h3 className="mt-6 font-serif-display text-2xl text-ink">
              {service.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
