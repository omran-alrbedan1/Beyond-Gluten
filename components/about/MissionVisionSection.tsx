'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MISSION_VISION_IMAGES } from '@/constants/images';

export function MissionVisionSection() {
  const t = useTranslations('about');

  return (
    <section className="py-20 px-4 bg-[#f9f7f5]">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Mission */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg h-[380px]">
            <Image
              src={MISSION_VISION_IMAGES.mission}
              alt="Our Mission"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="mb-4 text-3xl font-serif font-light text-gray-900">
              {t("missionVision.missionTitle")}
            </h3>
            <div className="w-16 h-px bg-[#E6C687] mb-6" />
            <p className="text-base leading-relaxed text-gray-600">
              {t("missionVision.missionText")}
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text — comes first on desktop (left side) */}
          <div>
            <h3 className="mb-4 text-3xl font-serif font-light text-gray-900">
              {t("missionVision.visionTitle")}
            </h3>
            <div className="w-16 h-px bg-[#E6C687] mb-6" />
            <p className="text-base leading-relaxed text-gray-600">
              {t("missionVision.visionText")}
            </p>
          </div>

          {/* Image — right side */}
          <div className="relative overflow-hidden rounded-lg h-[380px]">
            <Image
              src={MISSION_VISION_IMAGES.vision}
              alt="Our Vision"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
