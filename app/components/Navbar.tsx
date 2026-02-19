"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Lang, PageContent } from "@/lib/i18n";

type NavbarProps = {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  content: PageContent["navbar"];
};

export const Navbar = ({ lang, onLangChange, content }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLangClick = (value: Lang) => {
    onLangChange(value);
  };

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        isScrolled
          ? "border-b border-slate-100 bg-white shadow-sm backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-max flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
            MC
          </div>
          <span
            className={`text-sm font-semibold tracking-tight ${
              isScrolled ? "text-navy" : "text-white"
            }`}
          >
            {content.logo}
          </span>
        </div>
        <button
          type="button"
          className={`inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:hidden ${
            isScrolled
              ? "text-slate-700 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="hidden items-center gap-8 lg:flex">
          <ul
            className={`flex items-center gap-6 text-sm font-medium ${
              isScrolled ? "text-slate-700" : "text-white"
            }`}
          >
            {content.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <div
              className={`inline-flex items-center gap-1 rounded-full px-1 py-0.5 text-xs ${
                isScrolled
                  ? "border border-slate-200 bg-slate-50 text-slate-700"
                  : "border border-emerald-300/60 bg-emerald-900/40 text-emerald-50"
              }`}
              aria-label={content.languageLabel}
            >
              <button
                type="button"
                onClick={() => handleLangClick("en")}
                aria-pressed={lang === "en"}
                className={`rounded-full px-2 py-1 transition ${
                  lang === "en"
                    ? "bg-white text-navy shadow-sm"
                    : isScrolled
                      ? "text-slate-500 hover:text-navy"
                      : "text-emerald-100 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleLangClick("id")}
                aria-pressed={lang === "id"}
                className={`rounded-full px-2 py-1 transition ${
                  lang === "id"
                    ? "bg-white text-navy shadow-sm"
                    : isScrolled
                      ? "text-slate-500 hover:text-navy"
                      : "text-emerald-100 hover:text-white"
                }`}
              >
                ID
              </button>
            </div>
            <Link
              href="#order"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {content.orderNow}
            </Link>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-max space-y-4 py-4">
            <ul className="space-y-2 text-sm font-medium text-slate-800">
              {content.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-1.5 hover:bg-slate-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-3">
              <div
                className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-1 py-0.5 text-xs"
                aria-label={content.languageLabel}
              >
                <button
                  type="button"
                  onClick={() => handleLangClick("en")}
                  aria-pressed={lang === "en"}
                  className={`rounded-full px-2 py-1 transition ${
                    lang === "en"
                      ? "bg-white text-navy shadow-sm"
                      : "text-slate-500 hover:text-navy"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => handleLangClick("id")}
                  aria-pressed={lang === "id"}
                  className={`rounded-full px-2 py-1 transition ${
                    lang === "id"
                      ? "bg-white text-navy shadow-sm"
                      : "text-slate-500 hover:text-navy"
                  }`}
                >
                  ID
                </button>
              </div>
              <Link
                href="#order"
                className="inline-flex flex-1 justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                onClick={() => setIsOpen(false)}
              >
                {content.orderNow}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
