import { STEPS } from "@/constants/site";
import { useTranslations } from 'next-intl';
import { Palette, Hammer, Sparkles, Package } from 'lucide-react';

const stepIcons = [Palette, Hammer, Sparkles, Package];

export default function StepsSection() {
  const t = useTranslations('customDesign');
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f9f7f5]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#E6C687] font-semibold">
            {t("steps.eyebrow")}
          </p>
          <h2 className="text-4xl text-gray-900 md:text-5xl font-serif font-light">
            {t("steps.title")}
          </h2>
          <div className="w-24 h-px bg-[#E6C687] mx-auto mt-6" />
        </div>
        <div className="grid gap-8 md:grid-cols-4">
          {STEPS.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div 
                key={step} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#E6C687]/10 overflow-hidden"
              >
                {/* Decorative background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E6C687]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Step number in corner */}
                <div className="absolute top-4 right-4">
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 bg-[#E6C687]/20 rounded-full animate-pulse" />
                    <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-[#E6C687] to-[#b8956f] rounded-full shadow-md">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="flex justify-center pt-8 pb-6">
                  <div className="w-16 h-16 bg-[#E6C687]/10 rounded-full flex items-center justify-center group-hover:bg-[#E6C687]/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-[#E6C687]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="px-6 pb-8">
                  <p className="text-sm leading-relaxed text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">
                    {t(`steps.${index + 1}`)}
                  </p>
                </div>
                
                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-[#E6C687] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#E6C687]/30 rounded-full" />
            <div className="w-8 h-px bg-[#E6C687]/30" />
            <div className="w-2 h-2 bg-[#E6C687]/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
