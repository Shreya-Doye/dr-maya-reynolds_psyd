"use client";

import { useState } from "react";
import { methods } from "@/data/site";

export default function MethodsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <h2 className="font-serif-display text-4xl font-light leading-[1.2] text-ink sm:text-5xl">
          Some of the{" "}
          <span className="font-script text-accent text-5xl sm:text-6xl">
            methods
          </span>{" "}
          I use
        </h2>

        <div>
          {methods.map((method, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={method.label} className="border-b border-ink/15">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className="flex h-5 w-5 flex-shrink-0 items-center justify-center text-lg font-light text-primary"
                    aria-hidden="true"
                  >
                    {isOpen ? "\u2212" : "+"}
                  </span>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">
                    {method.label}
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-5 pl-9 text-sm leading-relaxed text-muted">
                    {method.detail}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
