"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { PageContent } from "@/lib/i18n";

type HeroProps = {
  content: PageContent["hero"];
};

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export const Hero = ({ content }: HeroProps) => {
  return (
    <section
      className="section-padding flex min-h-screen items-center bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-700"
      aria-labelledby="hero-title"
    >
      <div className="container-max grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="space-y-6 text-white"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/80 px-3 py-1 text-xs font-medium text-emerald-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{content.eyebrow}</span>
          </div>
          <h1
            id="hero-title"
            className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-emerald-100 sm:text-base">
            {content.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#order"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {content.primaryCta}
            </Link>
            <Link
              href="#order"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-navy shadow-sm transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {content.secondaryCta}
            </Link>
          </div>
          <p className="text-xs text-emerald-100/80">{content.disclaimer}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {content.trustBar.map((item) => (
              <div key={item.label} className="pill">
                {item.label}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-slate-900 to-emerald-700 shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_60%)]" />
            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="space-y-2 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">
                  Mounjaro programme
                </p>
                <p className="text-sm font-medium">
                  Tailored weekly treatment, guided by clinicians.
                </p>
              </div>
              <div className="relative mx-auto h-40 w-full max-w-xs">
                <Image
                  src="https://images.pexels.com/photos/6129683/pexels-photo-6129683.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Clinician supporting a patient with weight management"
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                  priority
                />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-100">
                <div>
                  <p className="font-medium">Avg. 4.9/5 rating</p>
                  <p className="text-[11px] text-emerald-100">Patient-reported satisfaction</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">10,000+</p>
                  <p className="text-[11px] text-emerald-100">Patients supported</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
