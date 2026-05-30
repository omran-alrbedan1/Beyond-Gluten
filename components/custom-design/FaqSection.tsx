'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FAQS } from '@/constants/site';

export default function FaqSection() {
  const t = useTranslations('customDesign');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#E6C687] font-semibold">
            {t("faq.eyebrow")}
          </p>
          <h2 className="text-4xl text-gray-900 md:text-5xl font-serif font-light">
            {t("faq.title")}
          </h2>
          <div className="w-24 h-px bg-[#E6C687] mx-auto mt-6" />
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <details
              key={faq}
              className="group border border-gray-200 bg-white p-6 transition-all"
              open={openIndex === index}
              onToggle={(e) => {
                if (e.currentTarget.open) {
                  setOpenIndex(index);
                } else if (openIndex === index) {
                  setOpenIndex(null);
                }
              }}
            >
              <summary className="cursor-pointer text-xl text-gray-900 transition-colors hover:text-[#E6C687] font-serif font-light">
                {t(`faq.${faq}.q`)}
              </summary>
              <p className="mt-4 leading-relaxed text-gray-600">{t(`faq.${faq}.a`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
