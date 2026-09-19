import Image from "next/image";
import { officeInfo, siteImages } from "@/data/site";
import AppointmentForm from "@/components/AppointmentForm";

export default function AppointmentCTA() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="px-6 lg:px-0 lg:pr-14">
          {/* Photo — edit siteImages.cta in src/data/site.ts to change it. */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-alt">
            <Image
              src={siteImages.cta}
              alt="A warm, welcoming space representing the start of a therapy journey"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="photo-tint-primary absolute inset-0" />
          </div>

          <p className="mt-8 text-[12px] font-semibold uppercase tracking-[0.18em] text-secondary">
            Schedule an Appointment
          </p>
          <h2 className="mt-4 font-serif-display text-4xl font-light leading-[1.15] text-ink sm:text-5xl">
            Ready to feel more like{" "}
            <span className="font-script text-accent text-5xl sm:text-6xl">
              yourself
            </span>{" "}
            again?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            {officeInfo.availability}
          </p>

          <div className="mt-6 space-y-1 text-sm leading-relaxed text-ink">
            <p className="font-semibold uppercase tracking-[0.1em] text-ink/70">
              Office
            </p>
            <p>{officeInfo.addressLine1}</p>
            <p>{officeInfo.addressLine2}</p>
          </div>
        </div>

        <div className="px-6 lg:px-0">
          <div className="border border-ink/10 bg-surface p-6 sm:p-10">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
