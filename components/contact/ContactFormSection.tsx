//@ts-nocheck
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

export default function ContactFormSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('idle');
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: form.get('message'),
        }),
      });
      if (res.ok) { setStatus('success'); (e.target as HTMLFormElement).reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  const infoItems = [
    {
      key: 'email',
      icon: (
        <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      key: 'phone',
      icon: (
        <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      key: 'address',
      icon: (
        <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      label: t('social.facebook'),
      href: '#',
      icon: <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
    },
    {
      label: t('social.instagram'),
      href: '#',
      icon: <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
    },
    {
      label: t('social.linkedin'),
      href: '#',
      icon: <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
    },
  ];

  const fieldVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay, ease: 'easeOut' } },
  });

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28 overflow-hidden ">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 ${isRTL ? 'lg:direction-rtl' : ''}`}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >

          {/* ── Form column ── */}
          <motion.div variants={fieldVariants(0)}>

            <h2 className="font-serif text-3xl font-normal text-theme-strong mb-1">
              {t('info.title')}
            </h2>
            <p className="text-sm text-theme-muted-2 mb-8 leading-relaxed">
              {t('subtitle', { fallback: "We'd love to hear from you. Fill in the form and we'll respond shortly." })}
            </p>

            <hr className="border-t border-[#EDECE6] mb-8" />

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <motion.div variants={fieldVariants(0.1)}>
                <label htmlFor="name" className="block text-[10px] font-medium uppercase tracking-[0.09em] text-theme-muted-2 mb-1.5">
                  {t('form.name')}
                </label>
                <input
                  id="name" name="name" required
                  placeholder={t('form.name')}
                  className="w-full border-0 border-b border-[#E0DFD8] bg-transparent py-2.5 text-sm text-theme-strong placeholder:text-[#C5C3BB] focus:border-theme-brand focus:outline-none focus:ring-0 transition-colors duration-200"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fieldVariants(0.15)}>
                <label htmlFor="email" className="block text-[10px] font-medium uppercase tracking-[0.09em] text-theme-muted-2 mb-1.5">
                  {t('form.email')}
                </label>
                <input
                  id="email" name="email" type="email" required
                  placeholder={t('form.email')}
                  className="w-full border-0 border-b border-[#E0DFD8] bg-transparent py-2.5 text-sm text-theme-strong placeholder:text-[#C5C3BB] focus:border-theme-brand focus:outline-none focus:ring-0 transition-colors duration-200"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={fieldVariants(0.2)}>
                <label htmlFor="message" className="block text-[10px] font-medium uppercase tracking-[0.09em] text-theme-muted-2 mb-1.5">
                  {t('form.message')}
                </label>
                <textarea
                  id="message" name="message" rows={4} required
                  placeholder={t('form.message')}
                  className="w-full border-0 border-b border-[#E0DFD8] bg-transparent py-2.5 text-sm text-theme-strong placeholder:text-[#C5C3BB] focus:border-theme-brand focus:outline-none focus:ring-0 transition-colors duration-200 resize-none"
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={fieldVariants(0.25)}>
                <motion.button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-theme-brand hover:bg-theme-brand-dark text-white text-[13px] font-medium tracking-wide px-6 py-3 rounded-sm transition-colors duration-200 cursor-pointer"
                  whileTap={{ scale: 0.97 }}
                >
                  {t('form.submit')}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.button>
              </motion.div>

              {status === 'success' && (
                <motion.p
                  className="text-sm text-theme-brand bg-theme-brand-08 rounded px-4 py-3"
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                >
                  {t('form.success')}
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  className="text-sm text-red-500 bg-red-50 rounded px-4 py-3"
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                >
                  {t('form.error')}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* ── Info column ── */}
          <motion.div
            className="flex flex-col justify-center"
            variants={fieldVariants(0.1)}
          >
            {/* Brand accent line */}
            <div className="w-7 h-0.5 bg-theme-brand mb-8" />

            <div className="space-y-7">
              {infoItems.map((item, i) => (
                <motion.div
                  key={item.key}
                  className="flex items-start gap-4"
                  variants={fieldVariants(0.15 + i * 0.07)}
                >
                  <div className="w-12 h-12 rounded-full border border-theme-brand/30 flex items-center justify-center text-theme-brand shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.09em] text-theme-muted-2 mb-1">
                      {item.key === 'email' ? 'Email' : item.key === 'phone' ? 'Phone' : 'Address'}
                    </p>
                    <p className="text-sm text-theme-strong leading-relaxed">
                      {t(`info.${item.key}`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10 pt-8 border-t border-[#EDECE6]">
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-theme-brand flex items-center justify-center text-theme-brand hover:bg-theme-brand transition-colors duration-200"
                    whileTap={{ scale: 0.92 }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}