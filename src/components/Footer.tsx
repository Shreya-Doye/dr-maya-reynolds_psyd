import { footerNav, focusAreas, officeInfo } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-surface">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-serif-display text-3xl leading-none text-ink">
            Dr. Maya Reynolds
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            PsyD &middot; Clinical Psychology
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            Thoughtful, evidence-based therapy for adults navigating anxiety,
            trauma, and burnout &mdash; in Santa Monica and online throughout
            California.
          </p>
        </div>

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/70">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {footerNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-ink hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/70">
            Focus Areas
          </p>
          <ul className="mt-5 space-y-3">
            {focusAreas.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm text-ink hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/70">
            Office
          </p>
          <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-ink">
            <p>{officeInfo.addressLine1}</p>
            <p>{officeInfo.addressLine2}</p>
          </address>
          <p className="mt-5 text-sm italic leading-relaxed text-muted">
            {officeInfo.availability}
          </p>
        </div>
      </div>

      <div className="bg-accent-dark py-4">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-2 gap-y-1 px-6 text-xs text-white/90 lg:px-12">
          <span>Terms</span>
          <span>|</span>
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Disclaimer</span>
        </div>
      </div>
    </footer>
  );
}
