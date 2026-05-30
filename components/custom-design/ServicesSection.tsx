'use client';

import { useTranslations } from 'next-intl';

import { SERVICE_IMAGES } from '@/constants/images';

export default function ServicesSection() {
  const t = useTranslations('customDesign.services');

  const services = [
    {
      key: 'engagementRings',
      image: SERVICE_IMAGES.engagementRings
    },
    {
      key: 'weddingRings',
      image: SERVICE_IMAGES.weddingRings
    },
    {
      key: 'customNecklaces',
      image: SERVICE_IMAGES.customNecklaces
    },
    {
      key: 'redesignJewelry',
      image: SERVICE_IMAGES.redesignJewelry
    },
    {
      key: 'goldSelection',
      image: SERVICE_IMAGES.goldSelection
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
          const serviceTitle = t(`${service.key}.title`);
          const serviceDescription = t(`${service.key}.description`);
          
          return (
            <div
              key={service.key}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 bg-[#E6C687]/10 rounded-lg flex items-center justify-center group-hover:bg-[#E6C687]/20 transition-colors duration-300">
                       <img
                  src={service.image}
                  alt={serviceTitle}
                  className="w-full h-full object-cover"
                />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {serviceTitle}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {serviceDescription}
                </p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
