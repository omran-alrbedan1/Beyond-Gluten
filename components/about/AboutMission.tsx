'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { ABOUT_IMAGES } from '@/constants/images';
import {
  aboutMissionContainerVariants,
  aboutMissionItemVariants,
  aboutMissionImageVariants,
  aboutMissionTextVariants,
  aboutMissionLineVariants,
  aboutMissionIconVariants,
} from '@/constants/variants';

export default function AboutMission() {
  const t = useTranslations('about');
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const smoothExitY = useSpring(exitY, { stiffness: 100, damping: 30 });
  const smoothExitOpacity = useSpring(exitOpacity, { stiffness: 100, damping: 30 });

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 px-4 overflow-hidden relative"
      variants={aboutMissionContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div 
        className="max-w-6xl mx-auto space-y-20 md:space-y-28"
        style={{ y: smoothExitY, opacity: smoothExitOpacity }}
      >
        {/* Mission Section - Image Left, Text Right */}
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={aboutMissionItemVariants}
        >
          {/* Image - Left Side */}
          <motion.div
            className="relative h-[420px]"
            variants={aboutMissionImageVariants}
          >
            {/* Decorative circle behind image */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-theme-brand/10 to-transparent rounded-full blur-3xl"
              variants={aboutMissionIconVariants}
            />
            <Image
              src={ABOUT_IMAGES.mission}
              alt={t('mission.title')}
              fill
              className="object-contain relative z-10"
              priority
            />
          </motion.div>

          {/* Text - Right Side */}
          <motion.div variants={aboutMissionTextVariants}>
            <motion.h3 
              className="mb-4 text-3xl md:text-4xl font-bold text-theme-strong"
              variants={aboutMissionTextVariants}
            >
              {t('mission.title')}
            </motion.h3>
            <motion.div
              className="h-px bg-theme-brand rounded-full"
              variants={aboutMissionLineVariants}
            />
            <motion.p 
              className="text-base md:text-lg leading-relaxed text-theme-muted mt-6"
              variants={aboutMissionTextVariants}
              transition={{ delay: 0.5 }}
            >
              {t('mission.body')}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Vision Section - Text Left, Image Right */}
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          variants={aboutMissionItemVariants}
        >
          {/* Text - Left Side */}
          <motion.div variants={aboutMissionTextVariants}>
            <motion.h3 
              className="mb-4 text-3xl md:text-4xl font-bold text-theme-strong"
              variants={aboutMissionTextVariants}
            >
              {t('vision.title')}
            </motion.h3>
            <motion.div
              className="h-px bg-theme-brand rounded-full"
              variants={aboutMissionLineVariants}
            />
            <motion.p 
              className="text-base md:text-lg leading-relaxed text-theme-muted mt-6"
              variants={aboutMissionTextVariants}
              transition={{ delay: 0.5 }}
            >
              {t('vision.body')}
            </motion.p>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            className="relative h-[380px]"
            variants={aboutMissionImageVariants}
          >
            {/* Decorative circle behind image */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tl from-theme-brand/10 to-transparent rounded-full blur-3xl"
              variants={aboutMissionIconVariants}
            />
            <Image
              src={ABOUT_IMAGES.vision}
              alt={t('vision.title')}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain relative z-10"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}