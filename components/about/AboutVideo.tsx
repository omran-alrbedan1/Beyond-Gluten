'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  aboutContainerVariants,
  aboutTextVariants,
  aboutVideoVariants,
  aboutBadgeVariants,
} from './variants';
import Image from 'next/image';
import { Images } from 'lucide-react';
import { IMAGES } from '@/constants/images';

export default function AboutVideo() {
  const t = useTranslations('about');


  return (
    <motion.section
      className="w-full pt-20 md:py-28  overflow-hidden"
      variants={aboutContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <motion.div variants={aboutBadgeVariants}>
              <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-theme-brand mb-3 inline-block">
                {t('video.title')}
              </h3>
            </motion.div>
            
            <motion.h2
              variants={aboutTextVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-theme-strong mb-4"
            >
              {t('video.heading')}
            </motion.h2>
            
            <motion.p
              variants={aboutTextVariants}
              className="text-sm text-theme-muted leading-relaxed mb-4"
            >
              {t('video.body')}
            </motion.p>

            {/* Additional Description */}
            <motion.p
              variants={aboutTextVariants}
              className="text-sm text-theme-muted leading-relaxed mb-6"
            >
              {t('video.additionalBody') || "Since our founding, we've grown from a small kitchen operation to a trusted name in gluten-free living. Our dedicated team of nutritionists, chefs, and technologists work around the clock to ensure every product and piece of content meets the highest standards of safety and quality."}
            </motion.p>

            {/* Fun Fact / Highlight */}
            <motion.div
              variants={aboutTextVariants}
              className="bg-theme-brand/5 rounded-xl p-4 border-l-4 border-theme-brand"
            >
              <p className="text-xs text-theme-muted-2 font-medium mb-1">✨ {t('video.didYouKnow') || "Did You Know?"}</p>
              <p className="text-sm text-theme-muted leading-relaxed">
                {t('video.fact') || "Over 10,000+ gluten-free products have been certified through our platform, helping thousands of families enjoy safe, delicious meals every day."}
              </p>
            </motion.div>
          </div>

          {/* Right Video */}
          <motion.div
            variants={aboutVideoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-1/2"
          >
            <Image
              src={'/og-image.jpg'}
              fill
              alt={'logo'}
            />
            <div className="relative overflow-hidden rounded-2xl shadow-lg" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title={t('video.title') || "About video"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}