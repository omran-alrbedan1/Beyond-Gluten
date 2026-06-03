'use client';

import { HOME_IMAGES } from '@/constants/images';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import StaticParticlesWrapper from './StaticParticles';
import {
  buttonHoverVariants,
  containerVariants,
  itemVariants,
  phoneVariants,
  scrollIndicatorVariants,
  sushiVariants,
  waffleVariants,
} from '@/constants/variants';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const t = useTranslations('home');
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  
  const smoothTextY = useSpring(textY, { stiffness: 120, damping: 35 });
  const smoothOpacity = useSpring(opacity, { stiffness: 120, damping: 35 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 8;
      const y = (clientY / window.innerHeight - 0.5) * 8;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);
  
  const phoneRotateX = useTransform(mouseY, [-5, 5], [4, -4]);
  const phoneRotateY = useTransform(mouseX, [-5, 5], [isRTL ? 4 : -4, isRTL ? -4 : 4]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  const hero3Image = locale === 'ar' ? HOME_IMAGES.hero.hero3_arabic : HOME_IMAGES.hero.hero3_english;
  
  const getSvgPath = () => {
    if (isMobile) {
      if (isRTL) {
        return "M1440,900 L1440,220 L0,900 Z";
      }
      return "M0,900 L1440,900 L1440,220 Z";
    }
    
    if (isRTL) {
      return "M0,900 L0,840 C100,700 200,920 350,750 C500,580 600,800 750,590 C900,420 1000,680 1150,470 C1300,280 1380,400 1440,220 L1440,900 Z";
    }
    return "M1440,900 L1440,840 C1340,700 1240,920 1090,750 C940,580 840,800 690,590 C540,420 440,680 290,470 C140,280 60,400 0,220 L0,900 Z";
  };
  
  return (
    <section
      ref={sectionRef}
      className="relative h-screen h-[100dvh] w-full overflow-hidden px-6 py-4 md:px-12 lg:px-24 flex flex-col justify-between font-sans bg-white"
    >
      <StaticParticlesWrapper 
        showContent={showContent} 
        opacity={0.35}
        showDelay={0}
      />
      
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: backgroundY, scale: backgroundScale }}
      >
        <motion.svg
          initial={{ 
            clipPath: isRTL ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' 
          }}
          animate={{ clipPath: 'inset(0 0 0 0%)' }}
          transition={{ 
            duration: isMobile ? 0.8 : 1.2,
            ease: [0.19, 1, 0.22, 1],
            delay: 0.1
          }}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={getSvgPath()}
            className="fill-theme-blob-3"
          />
        </motion.svg>
      </motion.div>
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center my-auto w-full max-w-7xl mx-auto h-full max-h-[calc(100vh-100px)]"
            style={{ y: smoothTextY, opacity: smoothOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className={`col-span-1 lg:col-span-7 flex flex-col justify-center ${isRTL ? 'lg:mr-12 items-end text-right' : 'items-start text-left'}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={itemVariants}
                className="text-xs uppercase text-end  rtl:ml-auto tracking-wider mb-2 block font-semibold text-theme-muted-2"
              >
                {t('hero.tag')}
              </motion.span>
              
              <motion.h1
                variants={itemVariants}
                className="text-3xl font-semibold md:text-5xl lg:text-[56px] xl:text-[64px] leading-[1.1] mb-4 tracking-tight text-theme-strong"
              >
                {t.rich('hero.title', {
                  green: (chunks) => (
                    <span className="text-theme-brand">{chunks}</span>
                  )
                })}
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-xs md:text-sm lg:text-base leading-relaxed max-w-xl mb-6 font-medium text-theme-muted"
              >
                {t('hero.subtitle')}
              </motion.p>
              
              <motion.div
                className={`flex flex-row gap-3 items-center w-full ${isRTL ? 'justify-start' : 'justify-start'}`}
                variants={itemVariants}
              >
                <motion.button
                  className="px-4 py-2.5 md:px-8 md:py-3.5 text-white font-semibold rounded-full shadow-sm text-xs md:text-sm relative overflow-hidden group cursor-pointer whitespace-nowrap bg-theme-brand"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.span
                    className="absolute inset-0 bg-theme-brand-dark"
                    initial={{ x: isRTL ? "100%" : "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "tween", duration: 0.3 }}
                  />
                  <span className="relative z-10">{t('hero.cta_primary')}</span>
                </motion.button>
                
                <motion.button
                  className="px-4 py-2.5 md:px-8 md:py-3.5 bg-transparent font-semibold rounded-full text-xs md:text-sm relative overflow-hidden group cursor-pointer whitespace-nowrap text-theme-muted border border-theme-brand"
                  variants={buttonHoverVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.span
                    className="absolute inset-0 rounded-full bg-theme-brand-08"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <span className="relative z-10">{t('hero.cta_secondary')}</span>
                </motion.button>
              </motion.div>
            </motion.div>
            
            <div className={`hidden lg:col-span-5 relative lg:flex justify-center items-center h-full ${isRTL ? 'order-first' : 'order-none'}`}>
              <motion.div
                className="relative w-[320px] max-h-[65vh] drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)] z-20"
                variants={phoneVariants}
                initial="hidden"
                animate="visible"
                style={{ rotateX: phoneRotateX, rotateY: phoneRotateY, transformStyle: "preserve-3d" }}
              >
                <Image
                  src={hero3Image}
                  alt="Beyond Gluten Mobile App"
                  width={320}
                  height={600}
                  className="w-full h-full object-contain max-h-[65vh]"
                  priority
                />
              </motion.div>
              
              <motion.div
                className={`absolute top-[25%] w-36 h-36 hidden xl:block z-10 ${isRTL ? '-left-12' : '-right-12'}`}
                variants={waffleVariants}
                initial="hidden"
                animate="visible"
              >
                <Image
                  src={HOME_IMAGES.hero.hero1}
                  alt="Waffle"
                  width={144}
                  height={144}
                  className="w-full h-full object-contain scale-110"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center pt-2 mt-auto w-full"
            variants={scrollIndicatorVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center gap-2 text-[11px] font-medium tracking-wide mb-2 cursor-pointer text-theme-muted-2"
              whileHover={{ scale: 1.1 }}
            >
              <svg
                width="12"
                height="18"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current"
              >
                <rect x="1" y="1" width="12" height="18" rx="6" strokeWidth="1.5" />
                <circle cx="7" cy="6" r="1" fill="currentColor" />
              </svg>
              <span>{t('hero.scroll_indicator')}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {showContent && (
          <motion.div
            className={`absolute bottom-[-30px] w-64 z-30 pointer-events-none hidden md:block ${isRTL ? 'right-[-30px]' : 'left-[-30px]'}`}
            variants={sushiVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={HOME_IMAGES.hero.hero2}
              alt="Healthy Gluten-Free Food"
              width={256}
              height={256}
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}