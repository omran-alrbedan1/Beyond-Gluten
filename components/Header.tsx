//@ts-nocheck
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { BRAND_IMAGES } from '@/constants/images';

export default function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'customDesign', href: '/custom-design' },
    { key: 'contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`
        bg-white sticky top-0 z-50 transition-shadow duration-300
        ${scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-100'}
      `}>
        {/* ── Main header row ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* LEFT — Hamburger (mobile only) */}
            <button
              className="md:hidden text-gray-600 hover:text-primary transition-colors p-2 -ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.8" 
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            {/* CENTER — Logo */}
            <Link href="/" className="md:absolute md:left-1/2 md:-translate-x-1/2">
              <div className="flex flex-row items-center gap-2 md:gap-3 group">
                {/* Circular logo container */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden shadow-md group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={BRAND_IMAGES.logo} 
                    alt="Rovana" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Tagline with elegant decoration */}
                <div className="relative flex flex-col items-center">
                  <span
                    className="text-base md:text-[22px] font-light tracking-[0.25em] md:tracking-[0.35em] text-gray-900 uppercase group-hover:text-primary transition-colors duration-300 whitespace-nowrap"
                    style={{ fontFamily: "'Cormorant Garamond', 'Garamond', 'Georgia', serif" }}
                  >
                    Rovana
                  </span>
                </div>
              </div>
            </Link>

            {/* RIGHT — Language Switcher */}
            <div className="flex items-center gap-2 md:gap-3 z-20">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-10 py-3 border-t border-gray-100 relative">
          {/* Decorative top line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-primary/40"></div>
          
          {navLinks.map(({ key, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                className={`
                  relative text-[13px] font-medium tracking-[0.2em] uppercase transition-all duration-200 py-2 group
                  ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}
                `}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {t(key as any)}
                
                {/* Active indicator - always visible for active link */}
                {isActive && (
                  <span className="absolute -bottom-3 left-0 w-full h-0.5 bg-[#E6C687]"></span>
                )}
                
                {/* Hover underline effect - only show when not active */}
                {!isActive && (
                  <span className="absolute -bottom-3 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Mobile Navigation Drawer ── */}
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            
            {/* Drawer */}
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50 animate-in slide-in-from-top duration-300">
              <div className="px-6 py-6 flex flex-col gap-3">
                {navLinks.map(({ key, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={key}
                      href={href}
                      className={`
                        text-sm font-medium tracking-[0.2em] uppercase transition-all py-3 px-4 rounded-lg
                        ${isActive 
                          ? 'text-primary bg-primary/5 border-l-4 border-primary' 
                          : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                        }
                      `}
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(key as any)}
                    </Link>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}