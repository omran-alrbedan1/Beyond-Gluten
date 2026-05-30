import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import { ads, HERO_IMAGES } from '@/constants/images';

export default function HeroSection() {
  const t = useTranslations('customDesign');
  return (
    <section className="relative w-full h-[500px] overflow-hidden bg-gray-900 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={ads.hero1}
          alt="Luxury jewelry background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,169,138,0.18),transparent_48%)] z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#E6C687] font-semibold">
          {t("eyebrow")}
        </p>
        <h1 className="mx-auto mb-6 max-w-4xl text-5xl leading-[1.05] text-white md:text-7xl font-serif font-light">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/70">
          {t("subtitle")}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#design-request"
            className="inline-block bg-[#E6C687] hover:bg-[#b8956f] text-white text-sm font-semibold uppercase tracking-widest px-8 py-3 transition-colors duration-200"
          >
            {t("hero.primary")}
          </a>
          <a
            href="https://wa.me/963981117927?text=Hello Rovana Jewelry, I would like to book a custom design."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold uppercase tracking-widest px-8 py-3 transition-colors duration-200 hover:bg-white/10"
          >
            <MessageCircle className="w-4 h-4" />
            {t("secondary")}
          </a>
        </div>
      </div>
    </section>
  );
}