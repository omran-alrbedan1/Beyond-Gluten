import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import HeroSection from '@/components/contact/HeroSection';
import { getContactMetadata } from '../metadata/contact';


const CONTACT = {
  phoneTel: "+962777616777",
  phoneDisplay: "0777616777",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.1234567890!2d35.937034!3d31.953594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzMzMzMzMzMzMzMzMzMw",
  hours: [
    { day: "Saturday - Thursday", dayAr: "السبت - الخميس", time: "10:00 AM - 8:30 PM" },
    { day: "Friday", dayAr: "الجمعة", time: "Closed" },
  ],
  address: {
    line1: "Salah Al-Shemat St. 7",
    line1Ar: "ش. صلاح الشمات 7",
    line2: "Amman, Jordan",
    line2Ar: "عمّان، الأردن"
  }
};

// ─── Metadata Generation ─────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getContactMetadata(locale);
}

// ─── Main Contact Page ───────────────────────────────────────
export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <div className="bg-white font-sans text-gray-800 min-h-screen">
      
      {/* ── Hero Section ── */}
      <HeroSection />
      
      {/* ── Contact Form Section ── */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-6 border border-gray-200 bg-white p-6 md:p-8 lg:col-span-1">
              <div className="mb-6">
                <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#c9a98a] font-semibold">
                  {t("form.eyebrow")}
                </p>
                <h2 className="text-2xl text-gray-900 md:text-3xl font-serif font-light">
                  {t("form.title")}
                </h2>
                <div className="w-16 h-px bg-[#c9a98a] mx-auto mb-4" />
                <p className="leading-relaxed text-gray-600">{t("subtitle")}</p>
              </div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <aside className="space-y-6 lg:col-span-1">
              <ContactItem
                icon={MapPin}
                label={t("info.items.address.title")}
                value={
                  <>
                    {CONTACT.address.line1}
                    <br />
                    {CONTACT.address.line2}
                  </>
                }
              />
              <ContactItem
                icon={Phone}
                label={t("info.items.phone.title")}
                value={
                  <a href={`tel:${CONTACT.phoneTel}`} className="transition-colors hover:text-[#c9a98a]">
                    {CONTACT.phoneDisplay}
                  </a>
                }
              />
              <ContactItem
                icon={Clock}
                label={t("info.items.hours.title")}
                value={
                  <div className="space-y-0.5">
                    {CONTACT.hours.map((h) => (
                      <div key={h.day} className="text-sm">
                        <span className="text-gray-500">
                          {h.day}
                        </span>
                        <span className="mx-2 text-[#c9a98a]">·</span>
                        <span>{h.time}</span>
                      </div>
                    ))}
                  </div>
                }
              />

              <div className="pt-4">
                <a
                  href="https://wa.me/962777616777?text=Hello Abu Sara Jewelry, I'd like to inquire about..."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c9a98a] hover:bg-[#b8956f] text-white text-sm font-semibold uppercase tracking-widest px-8 py-3 transition-colors duration-200"
                >
                  <WhatsAppGlyph />
                  {t("info.items.whatsapp.title")}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Google Maps Section ── */}
      <section className="bg-[#f9f7f5]">
        <div className="aspect-[16/9] w-full md:aspect-[21/9]">
          <iframe
            title="Abu Sara Jewelry on Google Maps"
            src={CONTACT.mapsEmbed}
            className="h-full w-full border-0 grayscale-[0.4]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
}


// ─── Contact Item Component ───────────────────────────────────────
function ContactItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-11 h-11 shrink-0 border border-[#c9a98a]/50 text-[#c9a98a] flex items-center justify-center">
        <Icon className="w-4.5 h-4.5" />
      </div>
      <div>
        <h3 className="mb-1.5 text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">
          {label}
        </h3>
        <div className="leading-relaxed text-gray-900">{value}</div>
      </div>
    </div>
  );
}


// ─── WhatsApp Glyph Component ───────────────────────────────────────
function WhatsAppGlyph() {
  return (
    <MessageCircle className="h-4 w-4" />
  );
}
