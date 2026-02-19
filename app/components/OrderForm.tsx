"use client";

import { useState } from "react";
import type { PageContent } from "@/lib/i18n";

type OrderFormProps = {
  content: PageContent["order"];
};

export const OrderForm = ({ content }: OrderFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  return (
    <section
      id="order"
      className="section-padding bg-navy"
      aria-labelledby="order-title"
    >
      <div className="container-max grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-3 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            {content.eyebrow}
          </p>
          <h2
            id="order-title"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {content.title}
          </h2>
          <p className="max-w-xl text-sm text-slate-100 sm:text-base">
            {content.subtitle}
          </p>
          <p className="text-xs text-slate-300">
            This form is not monitored for emergencies. If you are unwell or
            worried about new or worsening symptoms, contact your GP, NHS 111 or
            local emergency services.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-xs font-medium text-navy"
              >
                {content.form.name}
              </label>
              <input
                id="name"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-navy outline-none ring-offset-2 ring-offset-white focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs font-medium text-navy"
              >
                {content.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-navy outline-none ring-offset-2 ring-offset-white focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="phone"
                className="text-xs font-medium text-navy"
              >
                {content.form.phone}
              </label>
              <input
                id="phone"
                name="phone"
                required
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-navy outline-none ring-offset-2 ring-offset-white focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="message"
                className="text-xs font-medium text-navy"
              >
                {content.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder={content.form.messagePlaceholder}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-navy outline-none ring-offset-2 ring-offset-white focus:border-accent focus:bg-white focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-700">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                required
              />
              <label htmlFor="consent" className="cursor-pointer">
                {content.form.consent}
              </label>
            </div>
            <button
              type="submit"
              disabled={!consent}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {content.form.submit}
            </button>
            {submitted && (
              <p className="text-xs text-emerald-600">
                {content.form.success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
