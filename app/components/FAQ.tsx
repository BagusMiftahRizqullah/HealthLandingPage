"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PageContent } from "@/lib/i18n";

type FAQProps = {
  content: PageContent["faq"];
};

export const FAQ = ({ content }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="section-padding"
      aria-labelledby="faq-title"
    >
      <div className="container-max">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2
            id="faq-title"
            className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            {content.title}
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-3">
          {content.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-100 bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs transition ${
                      isOpen
                        ? "border-accent bg-accent text-white"
                        : "border-slate-300 bg-white text-slate-700"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-t border-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-700">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

