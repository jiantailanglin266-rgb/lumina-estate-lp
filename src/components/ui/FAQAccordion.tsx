"use client";

import { useState } from "react";
import type { Faq } from "@/lib/content";

/**
 * FAQアコーディオン。1問ずつ開閉。アニメーションは控えめ。
 */
export default function FAQAccordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;

        return (
          <div key={i}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-gold"
              >
                <span className="flex items-start gap-4">
                  <span className="font-display text-lg text-gold">Q</span>
                  <span className="text-base font-medium leading-relaxed">
                    {item.q}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`relative mt-1 h-4 w-4 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid overflow-hidden transition-all duration-400 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0">
                <p className="flex items-start gap-4 pb-7 pl-0 text-sm leading-loose text-stone">
                  <span className="font-display text-lg text-mist">A</span>
                  <span>{item.a}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
