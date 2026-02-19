import type { Metadata } from "next";
import type { Lang, PageContent } from "@/lib/i18n";

const baseUrl = "https://www.mounjaroweightclinic.com";

export const getBaseMetadata = (lang: Lang, content: PageContent): Metadata => {
  const title = content.meta.title;
  const description = content.meta.description;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    alternates: {
      canonical: "./"
    },
    openGraph: {
      type: "website",
      url: baseUrl,
      siteName: content.meta.siteName,
      title,
      description,
      locale: lang === "en" ? "en_GB" : "id_ID"
    },
    twitter: {
      card: "summary_large_image",
      site: "@mounjaroclinic",
      creator: "@mounjaroclinic",
      title,
      description
    }
  };
};

export const getMedicalOrganizationJsonLd = (content: PageContent) => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: content.meta.siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    medicalSpecialty: ["Obesity", "Endocrinology"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB"
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom"
    }
  };
};

export const getFaqJsonLd = (faqItems: PageContent["faq"]["items"]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
};

