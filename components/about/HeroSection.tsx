'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { about, HERO_IMAGES } from '@/constants/images';

export function HeroSection() {
  const t = useTranslations('about');

  return (
    <section className="relative w-full h-[60vh] min-h-100 max-h-150 overflow-hidden bg-linear-to-b from-[#f9f7f5] to-white">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0">
        <Image 
          src={about.aboutUsHero} 
          alt="Heritage background" 
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#E6C687] font-semibold">
          {t("eyebrow")}
        </p>
        <h1 className="mb-6 text-5xl leading-tight text-gray-900 md:text-7xl font-serif font-light">
          {t("title1")} <em className="text-[#E6C687] font-normal">{t("title2")}</em>
        </h1>
        <div className="w-24 h-px bg-[#E6C687] mx-auto mb-8" />
        <p className="text-lg font-light leading-relaxed text-gray-700 italic max-w-3xl">
          "{t("quote")}"
        </p>
      </div>
    </section>
  );
}
