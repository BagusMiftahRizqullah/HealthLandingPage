"use client";

import { motion } from "framer-motion";
import type { PageContent } from "@/lib/i18n";

type WhatIsMounjaroProps = {
  content: PageContent["whatIs"];
};

export const WhatIsMounjaro = ({ content }: WhatIsMounjaroProps) => {
  return (
    <section
      id="what-is"
      className="section-padding"
      aria-labelledby="what-is-title"
    >
      <div className="container-max grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2
            id="what-is-title"
            className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            {content.title}
          </h2>
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            {content.lead}
          </p>
          <div className="space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            {content.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm"
        >
          <h3 className="mb-3 text-sm font-semibold text-navy">
            Key points
          </h3>
          <ul className="space-y-2 text-sm text-slate-700">
            {content.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

