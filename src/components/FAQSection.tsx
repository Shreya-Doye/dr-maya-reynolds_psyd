"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="scroll-mt-24 bg-surface-alt py-20 lg:py-28">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-secondary">
          Frequently Asked Questions
        </p>
        <h2 className="mt-4 font-serif-display text-4xl font-light text-ink sm:text-5xl">
          Questions clients often ask
        </h2>

        <div className="mt-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-ink/15">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-serif-display text-xl text-ink sm:text-2xl">
                    {faq.question}
                  </span>
                  <span
                    className="flex h-6 w-6 flex-shrink-0 items-center justify-center text-xl font-light text-primary"
                    aria-hidden="true"
                  >
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-10 text-[15px] leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
