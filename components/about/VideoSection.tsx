'use client';

import { about } from '@/constants/images';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function StorySection() {
  const t = useTranslations('about');

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={about.ourStory}
                alt="Rovana Jewelry boutique"
                width={600}
                height={500}
                className="w-full h-100 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Story */}
          <div>
            <h3 className="mb-6 text-3xl font-serif font-light text-gray-900">
              {t("video.title")}
            </h3>
            <div className="w-20 h-px bg-[#E6C687] mb-8" />
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              {t("video.description1")}
            </p>
            <p className="leading-relaxed text-gray-600">
              {t("video.description2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
