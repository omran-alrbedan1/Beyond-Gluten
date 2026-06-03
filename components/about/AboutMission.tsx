'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { sectionVariants, aboutMissionCardVariants, aboutMissionIconVariants, aboutMissionBarVariants } from '@/constants/variants';

export default function AboutMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const t = useTranslations('about');

  const items = [
    {
      key: 'mission',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      key: 'vision',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      key: 'story',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28 overflow-hidden bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-500"
              variants={aboutMissionCardVariants(index)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover="hover"
            >
              <motion.div
                className="w-14 h-14 rounded-xl bg-theme-blob-3 flex items-center justify-center text-theme-brand mb-6 group-hover:bg-theme-brand group-hover:text-white transition-colors duration-500"
                variants={aboutMissionIconVariants(index)}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-3 text-theme-strong">
                {t(`${item.key}.title`)}
              </h3>

              <p className="text-sm leading-relaxed text-theme-muted">
                {t(`${item.key}.body`)}
              </p>

              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-theme-brand rounded-b-2xl"
                variants={aboutMissionBarVariants(index)}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
