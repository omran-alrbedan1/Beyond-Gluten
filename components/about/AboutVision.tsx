'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { whyChooseUsContainerVariants, whyChooseUsHeaderVariants, aboutVisionCardVariants } from '@/constants/variants';

const VALUE_ICONS = [
  {
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    bg: 'bg-theme-blob-3 text-theme-brand',
  },
  {
    path: 'M13 10V3L4 14h7v7l9-11h-7z',
    bg: 'bg-theme-blob-3 text-theme-brand',
  },
  {
    path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    bg: 'bg-theme-blob-3 text-theme-brand',
  },
  {
    path: 'M9 12l2 2 4-5m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bg: 'bg-theme-blob-3 text-theme-brand',
  },
];

export default function AboutVision() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const t = useTranslations('about');
  const values = t.raw('values.items') as Array<{ title: string; description: string }>;

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28 overflow-hidden bg-theme-blob-3">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={whyChooseUsHeaderVariants}
        >
          <motion.div className="flex items-center gap-3 mb-2">
            <motion.div
              className="w-8 h-[1px] bg-theme-brand/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transformOrigin: isRTL ? 'left' : 'right' }}
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-theme-brand">
              {t('values.title')}
            </span>
            <motion.div
              className="w-8 h-[1px] bg-theme-brand/40"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transformOrigin: isRTL ? 'right' : 'left' }}
            />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1 text-theme-strong">
            {t('values.title')}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={whyChooseUsContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500"
              variants={aboutVisionCardVariants(index)}
              whileHover={{ y: -8, transition: { type: 'spring' as const, stiffness: 300 } }}
            >
              <motion.div
                className={`w-16 h-16 rounded-full ${VALUE_ICONS[index].bg} flex items-center justify-center mx-auto mb-6 group-hover:bg-theme-brand group-hover:text-white transition-all duration-500`}
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: 'spring' as const, stiffness: 260, damping: 20, delay: 0.3 + 0.2 * index }}
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={VALUE_ICONS[index].path} />
                </svg>
              </motion.div>

              <h3 className="text-lg font-bold mb-3 text-theme-strong">
                {value.title}
              </h3>

              <p className="text-sm leading-relaxed text-theme-muted">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
