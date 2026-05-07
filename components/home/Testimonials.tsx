'use client';

import { useTranslations } from 'next-intl';
import { HERO_IMAGES } from '@/constants/images';

// Testimonial data
const testimonials = [
  {
    key: 'saif',
    avatar: HERO_IMAGES.abuSaraHero,
    featured: false
  },
  {
    key: 'tala',
    avatar: HERO_IMAGES.abuSaraHero2,
    featured: true
  },
  {
    key: 'anas',
    avatar: HERO_IMAGES.abuSaraHero3,
    featured: false
  }
];

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const t = useTranslations('home.testimonials');
  
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 sm:p-6 relative w-full sm:w-137.5 ${
      testimonial.featured ? 'border-l-4 border-primary ltr:border-l-4 rtl:border-r-4 ml-0 ltr:ml-0 rtl:mr-0 sm:ltr:-ml-14 sm:rtl:-mr-14' : ''
    }`}>
      {/* Quote Icon */}
      <div className="absolute top-4 ltr:right-4 rtl:left-4 text-primary text-2xl sm:text-4xl">
        "
      </div>

      {/* Customer Info */}
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full overflow-hidden shrink-0">
          <img 
            src={testimonial.avatar} 
            alt={t(`${testimonial.key}.name`)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            {t(`${testimonial.key}.name`)}
          </p>
          {/* Stars */}
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 text-[#c9a98a] fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-left ltr:text-left rtl:text-right">
            {t(`${testimonial.key}.text`)}
          </p>
        </div>
      </div>
    </div>
  );
}

// Main Testimonials Component
export default function Testimonials() {
  const t = useTranslations('home');

  return (
    <section className="px-4 max-w-6xl mx-auto mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif font-light text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t('testimonials.description')}
            </p>
          </div>
        </div>

        {/* Right Testimonials */}
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.key} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
