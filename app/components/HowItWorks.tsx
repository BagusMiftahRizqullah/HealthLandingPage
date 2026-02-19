"use client";

import { motion } from "framer-motion";
import type { PageContent } from "@/lib/i18n";

type HowItWorksProps = {
  content: PageContent["howItWorks"];
};

export const HowItWorks = ({ content }: HowItWorksProps) => {
  return (
    <section
      id="how-it-works"
      className="section-padding bg-slate-50/60"
      aria-labelledby="how-it-works-title"
    >
      <div className="container-max">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2
            id="how-it-works-title"
            className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            {content.title}
          </h2>
        </div>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {content.steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col rounded-2xl bg-white p-6 text-sm shadow-soft"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-accent">
                {index + 1}
              </div>
              <h3 className="mb-2 text-sm font-semibold text-navy">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                {step.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

