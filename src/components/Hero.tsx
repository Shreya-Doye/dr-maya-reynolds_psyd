import Image from "next/image";
import PillButton from "@/components/ui/PillButton";
import UnderlineLink from "@/components/ui/UnderlineLink";
import { siteImages } from "@/data/site";

export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-10 lg:grid-cols-2 lg:gap-0 lg:py-16 lg:px-12">
        {/* Left: copy */}
        <div className="order-2 lg:order-1 lg:pr-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Clinical Psychologist &middot; Santa Monica, CA
          </p>

          <h1 className="mt-6 font-serif-display text-5xl font-light leading-[1.08] text-ink sm:text-6xl lg:text-7xl">
            Therapy for anxiety, trauma, and{" "}
            <span className="font-script text-accent text-6xl sm:text-7xl lg:text-8xl">
              burnout
            </span>
            .
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            I&rsquo;m Dr. Maya Reynolds, PsyD, a licensed clinical
            psychologist helping high-achieving adults quiet the
            overthinking, ease the tension, and feel steady again &mdash; in
            person in Santa Monica or securely online anywhere in California.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
            <PillButton href="#contact">Schedule an Appointment</PillButton>
            <UnderlineLink href="#approach">See how I work</UnderlineLink>
          </div>
        </div>

        {/* Right: photo — edit siteImages.hero in src/data/site.ts to change */}
        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-alt sm:aspect-[16/11] lg:aspect-[6/5]">
            <Image
              src={siteImages.hero}
              alt="A calm, sunlit space representing a safe, grounding therapy environment"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="photo-tint-primary absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
