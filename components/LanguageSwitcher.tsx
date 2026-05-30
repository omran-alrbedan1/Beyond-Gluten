'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={() => switchLocale(locale === 'en' ? 'ar' : 'en')}
      className="text-xs font-medium tracking-wide uppercase text-gray-600 hover:text-[#E6C687] transition-colors duration-200"
    >
      {locale === 'en' ? 'العربية' : 'English'}
    </button>
  );
}
