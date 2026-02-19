"use client";

import { motion } from "framer-motion";
import type { PageContent } from "@/lib/i18n";

type TrustBadgesProps = {
  content: PageContent["trust"];
};

export const TrustBadges = ({ content }: TrustBadgesProps) => {
  return (
    <section className="section-padding border-y border-slate-100 bg-slate-50/60" aria-label={content.title}>
      <div className="container-max flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md space-y-2">
          <h2 className="text-lg font-semibold text-navy">{content.title}</h2>
          <p className="text-sm text-slate-600">{content.subtitle}</p>
        </div>
        <motion.div
          className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {content.badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col rounded-2xl bg-white px-4 py-3 text-sm shadow-sm"
            >
              <span className="font-semibold text-navy">{badge.label}</span>
              {badge.description && (
                <span className="text-xs text-slate-600">{badge.description}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

