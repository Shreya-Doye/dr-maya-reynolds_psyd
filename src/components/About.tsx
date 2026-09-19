import Image from "next/image";
import PillButton from "@/components/ui/PillButton";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-background px-6 py-10 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] bg-surface-alt p-6 sm:p-10 lg:p-16">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-16">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden lg:mx-0">
            <Image
              src="/images/maya-profile.jpg"
              alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, California"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary">
              About
            </p>
            <h2 className="mt-4 font-serif-display text-4xl font-light text-ink sm:text-5xl">
              Dr. Maya Reynolds,{" "}
              <span className="font-script text-accent text-5xl sm:text-6xl">
                PsyD
              </span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              I&rsquo;m a licensed clinical psychologist based in Santa
              Monica, California, offering therapy for adults who feel
              overwhelmed by anxiety, stress, or the lingering effects of
              past experiences. My work often focuses on anxiety, panic,
              trauma, and burnout.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              In addition to trauma and anxiety, I frequently support clients
              dealing with professional burnout, perfectionism, and high
              internal pressure &mdash; many of them entrepreneurs, creatives,
              or professionals who feel disconnected from themselves after
              years of pushing through stress. I offer both in-person
              therapy from my Santa Monica office and secure telehealth
              sessions for clients located anywhere in California.
            </p>

            <blockquote className="mt-8 border-l-2 border-accent pl-6">
              <p className="font-serif-display text-2xl font-light leading-snug text-ink sm:text-3xl">
                &ldquo;If you&rsquo;re looking for a therapist who combines
                practical tools with depth-oriented work &mdash; and who
                understands the realities of living and working in a
                fast-paced environment &mdash; I may be a good fit.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.1em] text-ink/70">
                &ndash; Dr. Maya Reynolds, PsyD
              </footer>
            </blockquote>

            <div className="mt-8">
              <PillButton href="#contact">Schedule an Appointment</PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
