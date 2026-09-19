import Image from "next/image";
import PillButton from "@/components/ui/PillButton";
import { siteImages } from "@/data/site";

export default function HowWeWork() {
  return (
    <section id="approach" className="scroll-mt-24 bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
          My Approach
        </p>
        <h2 className="mt-6 max-w-4xl font-serif-display text-4xl font-light leading-[1.2] text-ink sm:text-5xl">
          Practical tools, held within a{" "}
          <span className="font-script text-accent text-5xl sm:text-6xl">
            warm
          </span>{" "}
          collaborative relationship.
        </h2>
      </div>

      {/* Block 1: photo left, copy right.
          Edit siteImages.approach1 in src/data/site.ts to change it. */}
      <div className="mx-auto mt-16 grid max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-alt lg:aspect-[6/5]">
          <Image
            src={siteImages.approach1}
            alt="A calm, grounded setting reflecting a structured yet reflective therapy session"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="photo-tint-accent absolute inset-0" />
        </div>

        <div className="px-6 lg:px-0 lg:pr-14">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
            Grounded, evidence-based care
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive, while still
            leaving space for reflection and depth. I integrate
            evidence-based methods &mdash; including cognitive-behavioral
            therapy (CBT), EMDR, mindfulness-based practices, and
            body-oriented techniques &mdash; to help you understand both the
            emotional and physiological sides of what you&rsquo;re
            experiencing.
          </p>
        </div>
      </div>

      {/* Block 2: copy left, photo right (reversed).
          Edit siteImages.approach2 in src/data/site.ts to change it. */}
      <div className="mx-auto mt-20 grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="order-2 lg:order-1 lg:pr-14">
          <p className="font-serif-display text-3xl font-light leading-[1.25] text-ink sm:text-4xl">
            Trauma work is paced carefully, with an emphasis on safety and
            stabilization.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            I work with adults who have experienced single-incident trauma as
            well as more complex, long-standing patterns that may stem from
            childhood, relationships, or chronic stress. The focus is on
            helping you feel more regulated in your daily life &mdash; not
            just during sessions. I also frequently support clients dealing
            with professional burnout, perfectionism, and high internal
            pressure, including entrepreneurs, creatives, and professionals
            who feel disconnected from themselves after years of pushing
            through stress.
          </p>
          <div className="mt-8">
            <PillButton href="#contact">Schedule a Session</PillButton>
          </div>
        </div>

        <div className="order-1 aspect-[4/3] w-full overflow-hidden bg-surface-alt lg:order-2 lg:aspect-[6/5]">
          <div className="relative h-full w-full">
            <Image
              src={siteImages.approach2}
              alt="A quiet, contemplative setting reflecting stability and paced, careful trauma work"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="photo-tint-secondary absolute inset-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
