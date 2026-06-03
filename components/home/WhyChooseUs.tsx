'use client';

import Image from 'next/image';
import { HOME_IMAGES } from '@/constants/images';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  whyChooseUsContainerVariants,
  whyChooseUsCardVariants,
  whyChooseUsIconVariants,
} from '@/constants/variants';

export default function WhyChooseUs() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const t = useTranslations('home');

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const smoothExitY = useSpring(exitY, { stiffness: 100, damping: 30 });
  const smoothExitOpacity = useSpring(exitOpacity, { stiffness: 100, damping: 30 });

  const features = [
    {
      translationKey: 'features.items.0',
      image: HOME_IMAGES.whyChooseUs.medicine,
      alt: "Medicine check icon"
    },
    {
      translationKey: 'features.items.1',
      image: HOME_IMAGES.whyChooseUs.certificate,
      alt: "Certificate icon"
    },
    {
      translationKey: 'features.items.2',
      image: HOME_IMAGES.whyChooseUs.vending,
      alt: "Vending machine icon"
    }
  ];

  const cardVariants = whyChooseUsCardVariants(isRTL);

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-16 md:py-24 overflow-hidden bg-theme-blob-3 relative"
    >
      <motion.div 
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10"
        style={{ y: smoothExitY, opacity: smoothExitOpacity }}
      >
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-3 mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div 
              className="w-8 h-[1px] bg-theme-brand/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transformOrigin: isRTL ? 'left' : 'right' }}
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-theme-brand">
              {t('hero.tag')}
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
            {t('features.title')}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto"
          variants={whyChooseUsContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center px-4"
              variants={cardVariants}
              custom={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-24 h-24 rounded-full bg-theme-blob-2 shadow-inner flex items-center justify-center mb-6"
                variants={whyChooseUsIconVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <motion.div
                  className="relative w-12 h-12"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-contain opacity-70"
                  />
                </motion.div>
              </motion.div>
              
              <motion.h3
                className="text-lg font-bold leading-snug mb-4 max-w-[280px] text-theme-strong"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + (index * 0.2) }}
              >
                {t(`${feature.translationKey}.title`)}
              </motion.h3>
              
              <motion.p
                className="text-[13px] md:text-sm leading-relaxed max-w-[320px] text-theme-muted"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + (index * 0.2) }}
              >
                {t(`${feature.translationKey}.description`)}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}