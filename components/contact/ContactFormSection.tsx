'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { sectionVariants, itemVariants, contactFormCardVariants, contactFormFieldVariants, contactFormMessageVariants, contactFormInfoColumnVariants, contactFormInfoItemVariants, contactFormSocialVariants } from '@/constants/variants';

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

      if (res.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

    const formCardVariants = contactFormCardVariants(isRTL);
  const infoColumnVariants = contactFormInfoColumnVariants(isRTL);
  const infoItems = [
    {
      key: 'email',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      key: 'phone',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      key: 'address',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      label: t('social.facebook'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: '#',
    },
    {
      label: t('social.instagram'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      href: '#',
    },
    {
      label: t('social.linkedin'),
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: '#',
    },
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28 overflow-hidden bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ${isRTL ? 'lg:direction-rtl' : ''}`}
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Form Column */}
          <motion.div
            className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
            variants={formCardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-theme-strong mb-2">
                  {t('form.name')}
                </label>
                <motion.input
                  id="name"
                  name="name"
                  required
                  className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-theme-brand focus:ring-2 focus:ring-theme-brand/20 focus:outline-none transition-all duration-300 bg-theme-blob-3/30 text-theme-strong placeholder:text-theme-muted-2"
                  placeholder={t('form.name')}
                  variants={contactFormFieldVariants(0.2)}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  whileFocus="focus"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-theme-strong mb-2">
                  {t('form.email')}
                </label>
                <motion.input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-theme-brand focus:ring-2 focus:ring-theme-brand/20 focus:outline-none transition-all duration-300 bg-theme-blob-3/30 text-theme-strong placeholder:text-theme-muted-2"
                  placeholder={t('form.email')}
                  variants={contactFormFieldVariants(0.3)}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  whileFocus="focus"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-theme-strong mb-2">
                  {t('form.message')}
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-theme-brand focus:ring-2 focus:ring-theme-brand/20 focus:outline-none transition-all duration-300 bg-theme-blob-3/30 text-theme-strong placeholder:text-theme-muted-2 resize-none"
                  placeholder={t('form.message')}
                  variants={contactFormFieldVariants(0.4)}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  whileFocus="focus"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full rounded-xl bg-theme-brand px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-theme-brand-dark cursor-pointer"
                variants={contactFormFieldVariants(0.5)}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover="hover"
                whileTap="tap"
              >
                {t('form.submit')}
              </motion.button>

              {status === 'success' && (
                <motion.p
                  className="text-sm font-medium text-theme-brand bg-theme-brand/10 rounded-xl px-4 py-3"
                  variants={contactFormMessageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {t('form.success')}
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  className="text-sm font-medium text-red-500 bg-red-50 rounded-xl px-4 py-3"
                  variants={contactFormMessageVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {t('form.error')}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Info Column */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            variants={infoColumnVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-theme-strong mb-6">
                {t('info.title')}
              </h2>

              <div className="space-y-4">
                {infoItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    className="group flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
                    variants={contactFormInfoItemVariants(index, isRTL)}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    whileHover="hover"
                  >
                    <div className="w-12 h-12 rounded-xl bg-theme-blob-3 flex items-center justify-center text-theme-brand shrink-0 group-hover:bg-theme-brand group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-theme-muted-2 mb-1">
                        {item.key === 'email' ? 'Email' : item.key === 'phone' ? 'Phone' : 'Address'}
                      </p>
                      <p className="text-sm font-medium text-theme-strong">
                        {t(`info.${item.key}`)}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={itemVariants}
            >
              <h3 className="text-lg font-bold text-theme-strong mb-4">
                {t('social.title')}
              </h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-full bg-theme-brand flex items-center justify-center text-white transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                    variants={contactFormSocialVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
