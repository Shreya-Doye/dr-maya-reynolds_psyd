import Image from "next/image";
import { siteImages } from "@/data/site";

export default function IntroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-12">
        <h2 className="font-serif-display text-4xl font-light leading-[1.15] text-ink sm:text-5xl">
          You look like you have it all together. Inside, it might feel
          different.
        </h2>

        <div>
          <p className="text-[12px] font-semibold uppercase leading-relaxed tracking-[0.1em] text-primary">
            You might recognize yourself in this.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Many of the people I work with are high-achieving, thoughtful,
            and self-aware &mdash; but internally feel exhausted, stuck in
            overthinking, or emotionally on edge. Clients frequently come to
            me feeling &ldquo;functional&rdquo; on the outside while quietly
            struggling with constant worry, tension in their body, difficulty
            sleeping, or a sense that they&rsquo;re always bracing for
            something to go wrong.
          </p>
        </div>
      </div>

      {/* Full-bleed photo with overlay message.
          Edit siteImages.introOverlay in src/data/site.ts to change it. */}
      <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden bg-ink/40">
        <Image
          src={siteImages.introOverlay}
          alt="A quiet, contemplative space evoking a slower, more grounded pace"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1400px] px-6 pb-14 lg:px-12 lg:pb-20">
            <p className="max-w-3xl font-serif-display text-3xl font-light leading-[1.2] text-white sm:text-4xl lg:text-5xl">
              Therapy can be a space to slow down, reconnect, and build a
              more sustainable way of living and working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
