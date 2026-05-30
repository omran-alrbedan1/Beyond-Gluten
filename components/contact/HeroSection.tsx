'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { HERO_IMAGES } from '@/constants/images';

export default function HeroSection() {
  const t = useTranslations('contact');

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <Image
        src={HERO_IMAGES.jewelry}
        alt="Rovana Jewelry"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-16">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white font-semibold">
          {t("eyebrow")}
        </p>
        <h1 className="mb-4 text-4xl leading-tight text-white md:text-5xl font-serif font-light">
          {t("title1")} <em className="text-[#E6C687] font-normal">{t("title2")}</em>
        </h1>
        <div className="w-16 h-px bg-[#E6C687] mx-auto mb-4" />
        <p className="leading-relaxed text-gray-200">{t("subtitle")}</p>
      </div>
    </section>
  );
}
