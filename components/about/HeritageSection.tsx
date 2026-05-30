'use client';

import { about } from '@/constants/images';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function HeritageSection() {
  const t = useTranslations('about');

  return (
    <section className="py-20 px-4 bg-[#f9f7f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#E6C687] font-semibold">
            {t("heritage.eyebrow")}
          </p>
          <h2 className="mb-6 text-4xl text-gray-900 md:text-5xl font-serif font-light">
            {t("heritage.title1")} <em className="text-[#E6C687] font-normal">{t("heritage.title2")}</em>
          </h2>
          <div className="w-24 h-px bg-[#E6C687] mx-auto" />
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">{t("heritage.subtitle")}</p>
        </div>

        {/* First Heritage Block */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 mb-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg h-[400px]">
              <Image
                src={about.firstShop}
                alt="Rovana Jewelry heritage shop"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover "
                priority
              />

            </div>
            <p className="mt-3 text-sm text-gray-500 text-center italic">{t("heritage.founderCaption")}</p>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#E6C687] font-semibold">
              {t("heritage.chapter1")}
            </p>
            <h3 className="mb-6 text-3xl leading-[1.1] text-gray-900 md:text-5xl font-serif font-light">
              {t("heritage.chapter1Title1")}{" "}
              <em className="text-[#E6C687] font-normal">{t("heritage.chapter1Title2")}</em>
            </h3>
            <div className="w-20 h-px bg-[#E6C687] mb-8" />
            <p className="mb-6 text-lg font-light leading-relaxed text-gray-700">
              {t("heritage.chapter1Text1")}
            </p>
            <p className="leading-relaxed text-gray-600 mb-8">{t("heritage.chapter1Text2")}</p>

            {/* Contact Information - First Branch */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E6C687]/50 text-[#E6C687] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="mb-0.5 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold">
                    {t("heritage.address")}
                  </div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Khaled+Bin+Al-Waleed+Damascus+Syria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-[#E6C687] transition-colors"
                  >
                    {t("heritage.chapter1Address")}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E6C687]/50 text-[#E6C687] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="mb-0.5 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold">
                    {t("heritage.phone")}
                  </div>
                  <a href="tel:+963955530045" className="block text-sm text-gray-900 hover:text-[#E6C687] transition-colors" dir="ltr">
                    <span className="text-gray-500 text-xs">{t("heritage.chapter1Phone2Label")}: </span>{t("heritage.chapter1Phone2")}
                  </a>
                  <a href="tel:+963968465182" className="block text-sm text-gray-900 hover:text-[#E6C687] transition-colors" dir="ltr">
                    <span className="text-gray-500 text-xs">{t("heritage.chapter1Phone3Label")}: </span>{t("heritage.chapter1Phone3")}
                  </a>
                  <a href="tel:+963112210383" className="block text-sm text-gray-900 hover:text-[#E6C687] transition-colors" dir="ltr">
                    {t("heritage.chapter1PhoneLandline")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center gap-6 my-24">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E6C687]/40" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#E6C687] font-semibold">
            {t("heritage.visitUs")}
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E6C687]/40" />
        </div>

        {/* Second Heritage Block */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:order-2 relative">
            <div className="relative overflow-hidden rounded-lg h-[400px]">
              <Image
                src={about.secondShop}
                alt="The historic Goldsmith's Market in old Damascus"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover "
              />
            </div>
            <p className="mt-3 text-sm text-gray-500 text-center italic">{t("heritage.marketCaption")}</p>
          </div>

          <div className="lg:order-1">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#E6C687] font-semibold">
              {t("heritage.chapter2")}
            </p>
            <h3 className="mb-6 text-3xl leading-[1.1] text-gray-900 md:text-5xl font-serif font-light">
              {t("heritage.chapter2Title1")}{" "}
              <em className="text-[#E6C687] font-normal">{t("heritage.chapter2Title2")}</em>
            </h3>
            <div className="w-20 h-px bg-[#E6C687] mb-8" />
            <p className="mb-8 text-lg font-light leading-relaxed text-gray-700">
              {t("heritage.chapter2Text")}
            </p>

            {/* Contact Information */}
            <div className="mb-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E6C687]/50 text-[#E6C687] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="mb-0.5 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold">
                    {t("heritage.address")}
                  </div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Al-Salihiya+Damascus+Syria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-[#E6C687] transition-colors"
                  >
                    {t("heritage.addressText")}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E6C687]/50 text-[#E6C687] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="mb-0.5 text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold">
                    {t("heritage.phone")}
                  </div>
                  <a href="tel:+963981117927" className="text-sm text-gray-900 hover:text-[#E6C687] transition-colors" dir="ltr">
                    0981 117 927
                  </a>
                  <div className="mt-1 text-xs text-gray-500">
                    rovanajewellery@gmail.com
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Al-Salihiya+Damascus+Syria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold uppercase tracking-widest px-6 py-3 transition-colors duration-200"
            >
              {t("heritage.getDirections")}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
