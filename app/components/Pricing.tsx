"use client";

import { motion } from "framer-motion";
import type { PageContent } from "@/lib/i18n";

type PricingProps = {
  content: PageContent["pricing"];
};

export const Pricing = ({ content }: PricingProps) => {
  return (
    <section
      id="pricing"
      className="section-padding"
      aria-labelledby="pricing-title"
    >
      <div className="container-max">
        <div className="mb-8 space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {content.eyebrow}
          </p>
          <h2
            id="pricing-title"
            className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
          >
            {content.title}
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-700 sm:text-base">
            {content.subtitle}
          </p>
        </div>
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {content.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`group flex flex-col rounded-2xl border p-6 text-sm shadow-sm transition-transform duration-200 ${
                tier.highlight
                  ? "border-accent bg-emerald-50/40 shadow-soft hover:-translate-y-1 hover:shadow-lg"
                  : "border-slate-100 bg-white hover:-translate-y-1 hover:shadow-md"
              }`}
            >
              <div className="mb-4 flex items-baseline justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-navy">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-600">{tier.description}</p>
                </div>
                <p className="text-lg font-semibold text-navy">
                  {tier.price}
                </p>
              </div>
              <ul className="mb-4 space-y-2 text-sm text-slate-700">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <button
                  type="button"
                  className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white group-hover:-translate-y-0.5 ${
                    tier.highlight
                      ? "bg-accent text-white shadow-soft hover:bg-primaryStrong focus-visible:ring-accent"
                      : "border border-slate-200 bg-white text-navy hover:border-accent hover:text-accent focus-visible:ring-accent"
                  }`}
                >
                  {tier.highlight ? "Most popular" : "Choose plan"}
                </button>
              </div>
            </div>
          ))}
        </motion.div>
        <p className="mt-4 text-xs text-slate-500">{content.disclaimer}</p>
      </div>
    </section>
  );
};
