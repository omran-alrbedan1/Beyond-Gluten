'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useRef } from 'react';
import { HOME_IMAGES } from '@/constants/images';
import {
  sectionVariants,
  leftCardListVariants,
  rightCardListVariants,
  leftItemVariants,
  rightItemVariants,
  imageVariants,
  circleVariants,
} from '@/constants/variants';

export default function AwesomeFeatures() {
  const t = useTranslations('home.awesomeFeatures');
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const smoothExitY = useSpring(exitY, { stiffness: 100, damping: 30 });
  const smoothExitOpacity = useSpring(exitOpacity, { stiffness: 100, damping: 30 });

  const leftFeatures = t.raw('leftItems') as Array<{
    title: string;
    description: string;
  }>;

  const rightFeatures = t.raw('rightItems') as Array<{
    title: string;
    description: string;
  }>;
  const image = locale === 'ar' ? HOME_IMAGES.awesomeFeatures_arabic : HOME_IMAGES.awesomeFeatures_english;

  return (
    <section ref={sectionRef} className="relative overflow-hidden p-20 lg:py-28 px-6 sm:px-8 lg:px-12 w-full bg-theme-brand text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-theme-blob-1/90 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-theme-blob-3/90 blur-3xl" />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto text-center z-10"
        style={{ y: smoothExitY, opacity: smoothExitOpacity }}
      >
        <motion.div
          className="relative max-w-7xl mx-auto text-center z-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-20%" }}
        >
          <motion.div className="flex flex-col items-center mb-4" variants={leftItemVariants}>
            <span className="text-xs tracking-[0.25em] font-bold text-white/70 uppercase">
              {t('tag')}
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-16 lg:mb-24"
            variants={leftItemVariants}
          >
            {t('title')}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center max-w-6xl mx-auto relative">
            
            <motion.div
              className="lg:col-span-4 flex flex-col gap-12 lg:gap-16 lg:text-right text-center order-2 lg:order-1 relative py-4"
              variants={leftCardListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20%" }}
            >
              <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/5 via-white/40 to-white/5 rounded-full" />

              {leftFeatures.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={leftItemVariants}
                  className="relative max-w-sm mx-auto lg:mr-0 lg:pr-8 group"
                >
                  <div className="hidden lg:block absolute -right-[5px] top-5">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] border-2 border-theme-brand" />
                      <div className="absolute inset-0.5 rounded-full bg-white/80 animate-pulse" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide group-hover:scale-105 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-medium group-hover:text-white/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="lg:col-span-4 flex justify-center items-center h-[400px] sm:h-[500px] order-1 lg:order-2 z-10 relative" 
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20%" }}
            >
              <motion.div
                variants={circleVariants}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full bg-theme-brand-3 border-4 border-theme-brand-1 opacity-80" />
              </motion.div>
              
              <motion.div
                variants={circleVariants}
                className="absolute inset-0 flex items-center justify-center"
                transition={{ delay: 0.1 }}
              >
                <div className="w-[240px] h-[240px] sm:w-[270px] sm:h-[270px] rounded-full bg-theme-brand-3/50 border-2 border-theme-brand-1/50 opacity-60" />
              </motion.div>

              <motion.div
                className="relative w-[220px] sm:w-[250px] aspect-[9/18.5] rounded-[36px] overflow-hidden z-10"
                transition={{ type: 'spring' as const, stiffness: 300 }}
              >
                <Image
                  src={image}
                  alt={t('imageAlt')}
                  width={250}
                  height={520}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:col-span-4 flex flex-col gap-12 lg:gap-16 text-center lg:text-left order-3 relative py-4"
              variants={rightCardListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20%" }}
            >
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-t from-white/5 via-white/40 to-white/5 rounded-full" />

              {rightFeatures.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={rightItemVariants}
                  className="relative max-w-sm mx-auto lg:ml-0 lg:pl-8 group"
                >
                  <div className="hidden lg:block absolute -left-[5px] top-5">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="relative w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] border-2 border-theme-brand" />
                      <div className="absolute inset-0.5 rounded-full bg-white/80 animate-pulse" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide group-hover:scale-105 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-medium group-hover:text-white/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}