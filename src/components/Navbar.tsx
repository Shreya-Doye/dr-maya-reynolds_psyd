"use client";

import Image from "next/image";
import { useState } from "react";
import { navLinks } from "@/data/site";
import PillButton from "@/components/ui/PillButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 border-b border-ink/10 bg-background/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 lg:px-12">
        {/* Logo */}
        <a href="#top" className="flex flex-shrink-0 items-center gap-3">
          <span className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-primary/30">
            <Image
              src="/images/maya-profile.jpg"
              alt="Dr. Maya Reynolds, PsyD"
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-serif-display text-2xl text-ink">
              Dr. Maya Reynolds
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
              PsyD &middot; Clinical Psychology
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton href="#contact">Schedule an Appointment</PillButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`h-[1.5px] w-7 bg-ink transition-transform ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-7 bg-ink transition-opacity ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-7 bg-ink transition-transform ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="border-t border-ink/10 bg-background px-6 pb-8 pt-2 lg:hidden"
          aria-label="Mobile primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block border-b border-ink/10 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-ink"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6">
            <PillButton
              href="#contact"
              className="w-full"
              onClick={() => setMobileOpen(false)}
            >
              Schedule an Appointment
            </PillButton>
          </div>
        </nav>
      )}
    </header>
  );
}
