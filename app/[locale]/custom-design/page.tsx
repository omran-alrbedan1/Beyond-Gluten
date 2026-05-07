import { getTranslations } from 'next-intl/server';
import { Sparkles } from 'lucide-react';
import { 
  HeroSection, 
  StepsSection, 
  TrustSection, 
  CustomDesignForm, 
  FaqSection,
  ServicesSection,
} from '@/components/custom-design';
import { getCustomDesignMetadata } from '../metadata/custom-design';
import { CustomDesignServiceSchema, FAQSchema } from '@/components/seo/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getCustomDesignMetadata(locale);
}

export default async function CustomDesignPage() {
  const t = await getTranslations('customDesign');

  return (
    <>
      <div className="bg-white font-sans text-gray-800 min-h-screen">
      <HeroSection />
      <ServicesSection />
      <StepsSection />
      
      {/* ── Design Request Form Section ── */}
      <section id="design-request" className="py-20 px-4 bg-[#f9f7f5] h-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 min-h-full grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#c9a98a] font-semibold">
                {t("form.eyebrow")}
              </p>
              <h2 className="mb-6 text-4xl leading-tight text-gray-900 md:text-5xl font-serif font-light">
                {t("form.title")}
              </h2>
              <div className="w-24 h-px bg-[#c9a98a] mb-8" />
              <p className="leading-relaxed text-gray-600">
                {t("subtitle")}
              </p>
              <div className="mt-8 rounded-lg bg-[#c9a98a]/10 p-6">
                <Sparkles className="mb-3 text-[#c9a98a] w-6 h-6" />
                <h3 className="mb-2 text-lg text-gray-900 font-serif font-light">{t("trust.title")}</h3>
                <p className="text-sm text-gray-600">
                  {t("trust.eyebrow")}
                </p>
              </div>
            </div>
            <CustomDesignForm />
          </div>
        </div>
      </section>
      
      <TrustSection />
      <FaqSection />
      </div>
    </>
  );
}