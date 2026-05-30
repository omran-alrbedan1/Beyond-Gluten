'use client';

import { useLocale, useTranslations } from 'next-intl';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND_IMAGES } from '@/constants/images';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const navLinks = [
    { key: 'about', href: '/about' },
    { key: 'custom-design', href: '/custom-design' },
    { key: 'contact', href: '/contact' },
  ] as const;


  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-6 md:pb-8 px-4 sm:px-6" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          
          {/* Logo and Brand - Column 1 */}
          <div className="text-center sm:text-start"> 
            <div className="mb-5 flex justify-center sm:justify-start">
              <Image 
                src={BRAND_IMAGES.logo2} 
                alt="Rovana Jewelry" 
                width={120}
                height={40}
                className="h-auto w-auto"
                priority
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-5 max-w-xs mx-auto sm:mx-0">
              {t('description')}
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3 justify-center sm:justify-start">
              <a 
                href="https://www.facebook.com/share/1BLpnTQo49/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 text-white" />
              </a>
              <a 
                  href="https://www.instagram.com/rovana_jewellery2?igsh=MXFpcjB3NDI0bTluNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href="mailto:rovanajewellery@gmail.com"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="text-center sm:text-start">
            <h3 className="text-base font-serif font-light mb-4 text-[#E6C687] uppercase tracking-wider">
              {t('navigation.title')}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link 
                    href={href}
                    className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-[#E6C687] transition-colors duration-200 group"
                  >
                    <ChevronRight className={`w-3 h-3 opacity-0 transition-all duration-200 ${locale === 'ar' ? '-mr-4 group-hover:opacity-100 group-hover:mr-0 rotate-180' : '-ml-4 group-hover:opacity-100 group-hover:ml-0'}`} />
                    <span className={`transition-transform duration-200 ${locale === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                      {t(`navigation.${key}`)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information - Column 3 */}
          <div className="text-center sm:text-start">
            <h3 className="text-base font-serif font-light mb-4 text-[#E6C687] uppercase tracking-wider">
              {t('contact.title')}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center sm:justify-start group">
                <MapPin className="w-4 h-4 text-[#E6C687] flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Al-Salihiya+Damascus+Syria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200"
                >
                  {t('contact.address')}
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start group">
                <Mail className="w-4 h-4 text-[#E6C687] flex-shrink-0" />
                <a 
                  href="mailto:rovanajewellery@gmail.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('contact.email')}
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center sm:justify-start group">
                <Phone className="w-4 h-4 text-[#E6C687] flex-shrink-0" />
                <a 
                  href="tel:+963981117927"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  dir="ltr"
                >
                  {t('contact.phone')}
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours - Column 4 */}
          <div className="text-center sm:text-start">
            <h3 className="text-base font-serif font-light mb-4 text-[#E6C687] uppercase tracking-wider">
              {t('business.title')}
            </h3>
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-sm text-gray-400">{t('business.sundayThursday')}</p>
                <p className="text-sm text-gray-300 font-medium">{t('business.sundayThursdayHours')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 md:pt-8 mt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400 text-center md:text-left">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}