import Image from "next/image";
import { officeInfo } from "@/data/site";

export default function OurOffice() {
  return (
    <section id="office" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
          The Space
        </p>
        <h2 className="mt-4 max-w-2xl font-serif-display text-4xl font-light text-ink sm:text-5xl">
          Our Office
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {officeInfo.description}
        </p>

        {/* Highlights — every phrase here is drawn directly from the profile */}
        <ul className="mt-8 flex flex-wrap gap-3" aria-label="Office highlights">
          {officeInfo.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-ink/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-ink/80"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-6 text-sm leading-relaxed text-ink">
          <p className="font-semibold uppercase tracking-[0.1em] text-ink/70">
            Office
          </p>
          <p>{officeInfo.addressLine1}</p>
          <p>{officeInfo.addressLine2}</p>
        </div>
      </div>

      {/* Real office photos from Maya's profile */}
      <div className="mx-auto mt-12 grid max-w-[1400px] grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:gap-8 lg:px-12">
        {officeInfo.photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/3] w-full overflow-hidden border border-ink/10 bg-surface-alt"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
