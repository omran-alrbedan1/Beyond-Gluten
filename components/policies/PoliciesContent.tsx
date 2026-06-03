'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { sectionVariants, policiesContentSectionVariants, policiesContentIconVariants, policiesContentChevronVariants, policiesContentPanelVariants } from '@/constants/variants';

const SECTION_ICONS = [
  'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
];

export default function PoliciesContent() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const t = useTranslations('policies');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sections = t.raw('sections') as Array<{ title: string; body: string }>;

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28 overflow-hidden bg-[#F9F9F9]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="space-y-5"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
              variants={policiesContentSectionVariants(index)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover="hover"
            >
              <button
                onClick={() => toggleSection(index)}
                className={`w-full flex items-center gap-4 p-6 md:p-8 text-left transition-all duration-300 cursor-pointer ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-theme-blob-3 flex items-center justify-center text-theme-brand shrink-0"
                  variants={policiesContentIconVariants(index)}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={SECTION_ICONS[index]} />
                  </svg>
                </motion.div>

                <div className="flex-1">
                  <h2 className="text-lg md:text-xl font-bold text-theme-strong">
                    {section.title}
                  </h2>
                </div>

                <motion.svg
                  className="w-5 h-5 text-theme-brand shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={policiesContentChevronVariants}
                  initial="closed"
                  animate={openIndex === index ? 'open' : 'closed'}
                >
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
              </button>

              <motion.div
                variants={policiesContentPanelVariants}
                initial={false}
                animate={openIndex === index ? 'open' : 'closed'}
                className="overflow-hidden"
              >
                <div className={`px-6 md:px-8 pb-6 md:pb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="w-full h-[1px] bg-theme-brand/10 mb-5" />
                  <p className="text-sm md:text-base leading-relaxed text-theme-muted">
                    {section.body}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
