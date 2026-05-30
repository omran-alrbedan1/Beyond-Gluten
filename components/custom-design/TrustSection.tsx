import { TRUST } from '@/constants/site';
import { PenLine, CheckCircle2, ShieldCheck, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TrustSection() {
  const t = useTranslations('customDesign');
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#E6C687] font-semibold">
            {t("trust.eyebrow")}
          </p>
          <h2 className="text-4xl text-white md:text-5xl font-serif font-light">
            {t("trust.title")}
          </h2>
          <div className="w-24 h-px bg-[#E6C687] mx-auto mt-6" />
        </div>
        <div className="grid gap-px bg-white/10 md:grid-cols-4">
          {TRUST.map((item) => {
            const Icon = item.icon === "PenLine" ? PenLine : 
                         item.icon === "CheckCircle2" ? CheckCircle2 :
                         item.icon === "ShieldCheck" ? ShieldCheck : MessageCircle;
            return (
              <div key={item.key} className="bg-gray-900 p-8 text-center transition-transform hover:scale-[1.02]">
                <Icon className="mx-auto mb-5 text-[#E6C687] w-7 h-7" />
                <h3 className="text-xl text-white font-serif font-light">{t(`trust.${item.key}`)}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
