import { getTranslations } from 'next-intl/server';
import { 
  HERO_IMAGES,
  wedding, 
} from '@/constants/images';
import Hero from '@/components/home/Hero';
import Testimonials from '@/components/home/Testimonials';
import { LuxeGallery } from '@/components/ui-luxe/LuxeGallery';
import { getHomeMetadata } from './metadata/home';

// ─── Metadata Generation ─────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getHomeMetadata(locale);
}

// ─── Main Page ───────────────────────────────────────────────────
export default async function HomePage() {
  const t = await getTranslations('home');

  return (
    <>
      <div className="bg-white font-sans text-gray-800 min-h-screen">
        {/* ── HERO ── */}
        <Hero />

      {/* ── WELCOME ── */}
      <section className="py-8 px-4 text-center max-w-2xl mx-auto">
        <h1 className="text-2xl font-serif font-light text-gray-900 mb-3">{t('welcome.title')}</h1>
        <p className="text-sm text-gray-500 leading-relaxed">{t('welcome.description')}</p>
      </section>

      {/* ── COLLECTION SECTION ── */}
      <LuxeGallery 
      showHeading={true}
      withFeaturedRow={true}
    />
      {/* ── WEDDING BANNER ── */}
      <section className="relative w-full h-96 overflow-hidden mb-14">
        <img src={wedding.weddingSection} alt="Wedding" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-light leading-snug drop-shadow">
            {t('wedding.title')}
          </h2>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <Testimonials />

      </div>
    </>
  );
}
