"use client";

import { motion } from "framer-motion";
import type { PageContent } from "@/lib/i18n";

type TestimonialsProps = {
  content: PageContent["testimonials"];
};

export const Testimonials = ({ content }: TestimonialsProps) => {
  return (
    <section
      id="testimonials"
      className="section-padding bg-slate-50/60"
      aria-labelledby="testimonials-title"
    >
      <div className="container-max">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2
            id="testimonials-title"
            className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            {content.title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-700 sm:text-base">
            {content.subtitle}
          </p>
          <p className="text-xs font-medium text-emerald-600">
            {content.ratingLabel}
          </p>
        </div>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {content.cards.map((card) => (
            <article
              key={card.name}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 text-sm shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-navy">
                    {card.name}, {card.age}
                  </h3>
                  <p className="text-xs text-slate-600">
                    Start weight {card.initialWeight}
                  </p>
                </div>
                <div className="text-right text-xs font-medium text-emerald-600">
                  <p>{card.weightLost}</p>
                  <p className="mt-1 text-amber-500" aria-label="5 out of 5 stars">
                    ★★★★★
                  </p>
                </div>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-slate-700">
                “{card.quote}”
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
