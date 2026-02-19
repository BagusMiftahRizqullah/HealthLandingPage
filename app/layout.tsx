import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/i18n";
import { getBaseMetadata, getFaqJsonLd, getMedicalOrganizationJsonLd } from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "500", "600", "700"]
});

const defaultLang = "en" as const;

export const metadata: Metadata = getBaseMetadata(defaultLang, content[defaultLang]);

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const medicalOrganizationJsonLd = getMedicalOrganizationJsonLd(content[defaultLang]);
  const faqJsonLd = getFaqJsonLd(content[defaultLang].faq.items);

  return (
    <html lang={defaultLang} className={plusJakartaSans.variable}>
      <body className="min-h-screen bg-white text-navy antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalOrganizationJsonLd)
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd)
          }}
        />
        {children}
      </body>
    </html>
  );
}

