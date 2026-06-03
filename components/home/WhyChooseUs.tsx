'use client';

import Image from 'next/image';
import { HOME_IMAGES } from '@/constants/images';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  whyChooseUsContainerVariants,
  whyChooseUsCardVariants,
  whyChooseUsIconVariants,
  whyChooseUsHeaderContainerVariants,
  whyChooseUsTagContainerVariants,
  whyChooseUsTagLineVariants,
  whyChooseUsFeatureTitleVariants,
  whyChooseUsFeatureDescVariants,
  whyChooseUsIconInnerVariants,
} from '@/constants/variants';

export default function WhyChooseUs() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
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
          variants={whyChooseUsHeaderContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-20%" }}
        >
          <motion.div 
            className="flex items-center gap-3 mb-2"
            variants={whyChooseUsTagContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-20%" }}
          >
            <motion.div 
              className="w-8 h-[1px] bg-theme-brand/30"
              variants={whyChooseUsTagLineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20%" }}
              style={{ transformOrigin: isRTL ? 'left' : 'right' }}
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-theme-brand">
              {t('hero.tag')}
            </span>
            <motion.div 
              className="w-8 h-[1px] bg-theme-brand/40"
              variants={whyChooseUsTagLineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-20%" }}
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
          whileInView="visible"
          viewport={{ once: false, margin: "-20%" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center px-4"
              variants={cardVariants}
              custom={index}
              whileHover="hover"
            >
              <motion.div
                className="w-24 h-24 rounded-full bg-theme-blob-2 shadow-inner flex items-center justify-center mb-6"
                variants={whyChooseUsIconVariants}
                whileHover="hover"
              >
                <motion.div
                  className="relative w-12 h-12"
                  variants={whyChooseUsIconInnerVariants}
                  whileHover="hover"
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
                variants={whyChooseUsFeatureTitleVariants(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20%" }}
              >
                {t(`${feature.translationKey}.title`)}
              </motion.h3>
              
              <motion.p
                className="text-[13px] md:text-sm leading-relaxed max-w-[320px] text-theme-muted"
                variants={whyChooseUsFeatureDescVariants(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-20%" }}
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