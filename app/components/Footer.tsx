"use client";

import Link from "next/link";
import type { PageContent } from "@/lib/i18n";

type FooterProps = {
  content: PageContent["footer"];
};

export const Footer = ({ content }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white" aria-label="Footer">
      <div className="container-max section-padding grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
              MC
            </div>
            <span className="text-sm font-semibold text-navy">
              {content.linksTitle}
            </span>
          </div>
          <p className="text-xs text-slate-500">
            {content.medicalDisclaimerBody}
          </p>
        </div>
        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {content.linksTitle}
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {content.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-700 transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-slate-500">
            {content.medicalDisclaimerTitle}
          </p>
          <p className="text-xs text-slate-400">
            {content.copyright}
            {currentYear} Mounjaro Weight Loss Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

