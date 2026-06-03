'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HOME_IMAGES } from '@/constants/images';
import {
  appScreenshotsContainerVariants,
  appScreenshotsHeaderVariants,
  appScreenshotsTagVariants,
  appScreenshotsTitleVariants,
  appScreenshotsCarouselVariants,
  appScreenshotsDotsVariants,
  appScreenshotsCardItemVariants,
} from '@/constants/variants';

const screenshots = [
  { src: HOME_IMAGES.appDownloadScreenshots.screen1, label: 'Cart Details' },
  { src: HOME_IMAGES.appDownloadScreenshots.screen2, label: 'Product Info' },
  { src: HOME_IMAGES.appDownloadScreenshots.screen3, label: 'Main Dashboard' },
  { src: HOME_IMAGES.appDownloadScreenshots.screen4, label: 'Restaurant Space' },
  { src: HOME_IMAGES.appDownloadScreenshots.screen1, label: 'Live Courier' },
];

export default function AppScreenshots() {
  const [activeScreen, setActiveScreen] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const smoothExitY = useSpring(exitY, { stiffness: 100, damping: 30 });
  const smoothExitOpacity = useSpring(exitOpacity, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white pb-36 pt-36 px-6 sm:px-8 lg:px-12 w-full text-center overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute top-0 left-0 w-full leading-[0] z-0 pointer-events-none">
        <svg 
          viewBox="0 0 1440 180" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,90 C120,30 240,150 360,90 C480,30 600,150 720,90 C840,30 960,150 1080,90 C1200,30 1320,150 1440,90 V0 H0 Z" 
            fill="#E4E6DC" 
            opacity="0.3"
          />
          <path 
            d="M0,80 C100,20 200,140 300,80 C400,20 500,140 600,80 C700,20 800,140 900,80 C1000,20 1100,140 1200,80 C1300,20 1400,140 1440,80 V0 H0 Z" 
            fill="#EAECE2" 
            opacity="0.5"
          />
          <path 
            d="M0,70 C80,10 160,130 240,70 C320,10 400,130 480,70 C560,10 640,130 720,70 C800,10 880,130 960,70 C1040,10 1120,130 1200,70 C1280,10 1360,130 1440,70 V0 H0 Z" 
            fill="#EDEFE6" 
          />
          <path 
            d="M0,60 C90,0 180,120 270,60 C360,0 450,120 540,60 C630,0 720,120 810,60 C900,0 990,120 1080,60 C1170,0 1260,120 1350,60 C1395,30 1425,90 1440,60 V0 H0 Z" 
            fill="#F0F1EA" 
            opacity="0.7"
          />
        </svg>
      </div>

      <motion.div
        className="relative z-10"
        style={{ y: smoothExitY, opacity: smoothExitOpacity }}
      >
        <motion.div
          variants={appScreenshotsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-20%" }}
        >
          <motion.div 
            className="flex flex-col items-center gap-3 mb-3 pt-6"
            variants={appScreenshotsHeaderVariants}
          >
            <motion.span 
              className="text-xs tracking-[0.35em] font-bold text-[#8C936E] uppercase"
              variants={appScreenshotsTagVariants}
            >
              Screenshots
            </motion.span>
          </motion.div>

          <motion.h2 
            className="relative z-10 text-4xl sm:text-5xl font-extrabold tracking-tight mb-24 text-neutral-900"
            variants={appScreenshotsTitleVariants}
          >
            App Screenshots
          </motion.h2>

          <motion.div 
            className="relative max-w-7xl mx-auto h-[420px] md:h-[500px] flex items-center justify-center z-10"
            variants={appScreenshotsCarouselVariants}
          >
            <div className="absolute flex items-center justify-center gap-4 sm:gap-8 w-full h-full">
              {screenshots.map((screen, idx) => {
                const offset = idx - activeScreen;
                const isCenter = offset === 0;
                const isLeftFlank = offset === -1;
                const isRightFlank = offset === 1;
                const isFarLeft = offset === -2;
                const isFarRight = offset === 2;

                let responsiveClasses = "opacity-0 scale-50 pointer-events-none z-0";
                if (isCenter) {
                  responsiveClasses = "w-[210px] sm:w-[250px] md:w-[280px] z-30 opacity-100 scale-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] ring-4 ring-[#8C936E]/10";
                } else if (isLeftFlank || isRightFlank) {
                  responsiveClasses = "w-[170px] sm:w-[200px] md:w-[240px] z-20 opacity-60 scale-90 hidden sm:block grayscale-[20%]";
                } else if (isFarLeft || isFarRight) {
                  responsiveClasses = "w-[140px] sm:w-[160px] md:w-[200px] z-10 opacity-30 scale-85 hidden lg:block grayscale";
                }

                return (
                  <motion.button
                    type="button"
                    key={idx}
                    onClick={() => setActiveScreen(idx)}
                    variants={appScreenshotsCardItemVariants}
                    initial="hidden"
                    whileInView={isCenter ? "center" : "flank"}
                    viewport={{ once: false, margin: "-20%" }}
                    custom={idx}
                    style={{
                      transform: `translateX(${offset * 12}px)`,
                    }}
                    className={`transition-all duration-700 ease-out focus:outline-none flex-shrink-0 select-none rounded-[36px] overflow-hidden border border-neutral-200/40 aspect-[9/18.5] relative ${responsiveClasses}`}
                  >
                    <div className="w-full h-full relative">
                      <Image 
                        src={screen.src} 
                        alt={screen.label} 
                        fill 
                        priority={isCenter}
                        className="object-cover" 
                      />
                      {!isCenter && <div className="absolute inset-0 bg-black/[0.03] transition-opacity duration-700" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            className="relative z-10 flex justify-center gap-2.5 mt-20 pb-6"
            variants={appScreenshotsDotsVariants}
          >
            {screenshots.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveScreen(idx)}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  idx === activeScreen ? 'bg-[#8C936E] w-8' : 'bg-neutral-200 w-2.5 hover:bg-neutral-300'
                }`}
                aria-label={`Show screen layout ${idx + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full leading-[0] z-0 pointer-events-none">
        <svg 
          viewBox="0 0 1440 180" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,110 C120,170 240,50 360,110 C480,170 600,50 720,110 C840,170 960,50 1080,110 C1200,170 1320,50 1440,110 V180 H0 Z" 
            fill="#EDEFE6" 
          />
          <path 
            d="M0,100 C100,160 200,40 300,100 C400,160 500,40 600,100 C700,160 800,40 900,100 C1000,160 1100,40 1200,100 C1300,160 1400,40 1440,100 V180 H0 Z" 
            fill="#EAECE2" 
            opacity="0.5"
          />
          <path 
            d="M0,90 C80,150 160,30 240,90 C320,150 400,30 480,90 C560,150 640,30 720,90 C800,150 880,30 960,90 C1040,150 1120,30 1200,90 C1280,150 1360,30 1440,90 V180 H0 Z" 
            fill="#E4E6DC" 
            opacity="0.3"
          />
          <path 
            d="M0,80 C90,140 180,20 270,80 C360,140 450,20 540,80 C630,140 720,20 810,80 C900,140 990,20 1080,80 C1170,140 1260,20 1350,80 C1395,110 1425,50 1440,80 V180 H0 Z" 
            fill="#F0F1EA" 
            opacity="0.7"
          />
        </svg>
      </div>
    </section>
  );
}