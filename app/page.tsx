"use client";

import { useState } from "react";
import { Navbar } from "@/app/components/Navbar";
import { Hero } from "@/app/components/Hero";
import { TrustBadges } from "@/app/components/TrustBadges";
import { WhatIsMounjaro } from "@/app/components/WhatIsMounjaro";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Pricing } from "@/app/components/Pricing";
import { Testimonials } from "@/app/components/Testimonials";
import { FAQ } from "@/app/components/FAQ";
import { OrderForm } from "@/app/components/OrderForm";
import { Footer } from "@/app/components/Footer";
import { content, type Lang } from "@/lib/i18n";

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar lang={lang} onLangChange={setLang} content={t.navbar} />
      <main>
        <Hero content={t.hero} />
        <TrustBadges content={t.trust} />
        <WhatIsMounjaro content={t.whatIs} />
        <HowItWorks content={t.howItWorks} />
        <Pricing content={t.pricing} />
        <Testimonials content={t.testimonials} />
        <FAQ content={t.faq} />
        <OrderForm content={t.order} />
      </main>
      <Footer content={t.footer} />
    </div>
  );
}

