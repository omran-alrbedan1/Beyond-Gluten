'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { HOME_IMAGES } from '@/constants/images';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import {
  contactUsContainerVariants,
  contactUsImageVariants,
  contactUsHeaderVariants,
  contactUsFormVariants,
  contactUsInputVariants,
  contactUsCircleTopVariants,
  contactUsCircleBottomVariants,
  contactUsImageHoverVariants,
  contactUsSubmitMessageVariants,
  contactUsSubmitButtonVariants,
} from '@/constants/variants';

export default function ContactUs() {
  const t = useTranslations('home.contactUs');
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exitY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const exitOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const smoothExitY = useSpring(exitY, { stiffness: 100, damping: 30 });
  const smoothExitOpacity = useSpring(exitOpacity, { stiffness: 100, damping: 30 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 px-6 sm:px-8 lg:px-12 w-full overflow-hidden"
    >
      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        style={{ y: smoothExitY, opacity: smoothExitOpacity }}
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={contactUsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-20%" }}
        >
          {/* Image Section with Animation */}
          <motion.div
            variants={contactUsImageVariants}
            className="lg:col-span-5 -ml-[4rem] md:-ml-[12rem] -mt-12 relative w-full flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[550px]"
          >
            <motion.div
              variants={contactUsImageHoverVariants}
              whileHover="hover"
              className="w-4/5 h-4/5 mx-auto relative"
            >
              <Image
                src={HOME_IMAGES.contactUs}
                alt={t('imageAlt')}
                width={540}
                height={540}
                className="w-full h-full object-contain"
                priority
              />
              
              {/* Decorative floating circles */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-[#8C936E]/10"
                variants={contactUsCircleTopVariants}
                initial="initial"
                animate="animate"
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-[#8C936E]/5"
                variants={contactUsCircleBottomVariants}
                initial="initial"
                animate="animate"
              />
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <div className="lg:col-span-7 w-full max-w-xl mx-auto lg:mx-0 z-10 flex flex-col justify-center">
            <motion.div
              variants={contactUsHeaderVariants}
              className="flex flex-col mb-3"
            >
              <span className="text-xs tracking-[0.25em] font-bold text-[#8C936E] uppercase">
                {t('tag')}
              </span>
            </motion.div>

            <motion.h2
              variants={contactUsHeaderVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mb-10"
            >
              {t('title')}
            </motion.h2>

            {submitted && (
              <motion.div
                variants={contactUsSubmitMessageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium"
              >
                ✅ {t('successMessage')}
              </motion.div>
            )}

            <motion.form
              variants={contactUsFormVariants}
              onSubmit={handleSubmit}
              className="space-y-4 w-full"
            >
              {/* Name Input with Icon */}
              <motion.div
                variants={contactUsInputVariants(0.1)}
                className="relative"
              >
                <label htmlFor="name" className="sr-only">{t('nameLabel')}</label>
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  placeholder={t('namePlaceholder')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 pl-11 pr-5 py-3.5 text-sm outline-none focus:border-[#8C936E] focus:ring-1 focus:ring-[#8C936E] transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Email Input with Icon */}
              <motion.div
                variants={contactUsInputVariants(0.2)}
                className="relative"
              >
                <label htmlFor="email" className="sr-only">{t('emailLabel')}</label>
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  placeholder={t('emailPlaceholder')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 pl-11 pr-5 py-3.5 text-sm outline-none focus:border-[#8C936E] focus:ring-1 focus:ring-[#8C936E] transition-all duration-300"
                  required
                />
              </motion.div>

              {/* Message Input with Icon */}
              <motion.div
                variants={contactUsInputVariants(0.3)}
                className="relative"
              >
                <label htmlFor="message" className="sr-only">{t('messageLabel')}</label>
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t('messagePlaceholder')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-gray-200 pl-11 pr-5 py-3.5 text-sm outline-none focus:border-[#8C936E] focus:ring-1 focus:ring-[#8C936E] transition-all duration-300 resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={contactUsInputVariants(0.4)}
                className="flex justify-end pt-4"
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  variants={contactUsSubmitButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-[#8C936E] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all hover:bg-[#7A815E] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {t('sending')}
                    </span>
                  ) : (
                    <>
                      {t('submitButton')}
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}