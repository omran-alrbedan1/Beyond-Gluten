'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { User, Phone, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface ContactFormState {
  name: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createValidationSchema = () => {
    return z.object({
      name: z.string().min(1, t('form.validation.nameRequired')),
      phone: z.string().min(1, t('form.validation.phoneRequired')),
      message: z.string().min(10, t('form.validation.messageMin')),
    });
  };

  const form = useForm<ContactFormState>({
    resolver: zodResolver(createValidationSchema()),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactFormState) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.ok) {
        toast.success(t("form.success"));
        form.reset();
      } else {
        toast.error(responseData.message || t("form.error"));
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error(t("form.networkError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-5 sm:space-y-6 md:space-y-8"
      >
        {/* Name Field - Required */}
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-1.5 sm:space-y-2">
              <FormLabel 
                htmlFor={field.name}
                className="block text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-500 font-medium"
              >
                {t("form.name")}
                <span className="text-primary ml-1" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </FormLabel>
              <FormControl>
                <div className="relative group">
                  <User 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4 sm:w-5 sm:h-5 pointer-events-none transition-colors group-focus-within:text-primary-dark" 
                    aria-hidden="true" 
                  />
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    placeholder={t("form.namePlaceholder")}
                    className="pl-9 sm:pl-10 h-11 sm:h-12 md:h-14 w-full text-sm sm:text-base rounded-lg sm:rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    aria-invalid={!!fieldState.error}
                    aria-describedby={fieldState.error ? `${field.name}-error` : undefined}
                    aria-required="true"
                  />
                </div>
              </FormControl>
              {fieldState.error && (
                <FormMessage 
                  id={`${field.name}-error`}
                  className="text-red-500 text-xs sm:text-sm mt-1.5"
                  role="alert"
                />
              )}
            </FormItem>
          )}
        />
        
        {/* Phone Field - Required */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-1.5 sm:space-y-2">
              <FormLabel 
                htmlFor={field.name}
                className="block text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-500 font-medium"
              >
                {t("form.phone")}
                <span className="text-primary ml-1" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </FormLabel>
              <FormControl>
                <div className="relative group">
                  <Phone 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4 sm:w-5 sm:h-5 pointer-events-none" 
                    aria-hidden="true" 
                  />
                  <Input
                    {...field}
                    id={field.name}
                    type="tel"
                    placeholder={t("form.phonePlaceholder")}
                    className="pl-9 sm:pl-10 h-11 sm:h-12 md:h-14 w-full text-sm sm:text-base rounded-lg sm:rounded-xl border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    aria-invalid={!!fieldState.error}
                    aria-describedby={fieldState.error ? `${field.name}-error` : undefined}
                    aria-required="true"
                  />
                </div>
              </FormControl>
              {fieldState.error && (
                <FormMessage 
                  id={`${field.name}-error`}
                  className="text-red-500 text-xs sm:text-sm mt-1.5"
                  role="alert"
                />
              )}
            </FormItem>
          )}
        />
        
        {/* Message Field - Required */}
        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-1.5 sm:space-y-2">
              <FormLabel 
                htmlFor={field.name}
                className="block text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-500 font-medium"
              >
                {t("form.message")}
                <span className="text-primary ml-1" aria-hidden="true">*</span>
                <span className="sr-only">(required)</span>
              </FormLabel>
              <FormControl>
                <div className="relative group">
                  <MessageSquare 
                    className="absolute left-3 top-3 sm:top-4 text-primary w-4 h-4 sm:w-5 sm:h-5 pointer-events-none" 
                    aria-hidden="true" 
                  />
                  <textarea
                    {...field}
                    id={field.name}
                    rows={4}
                    placeholder={t("form.messagePlaceholder")}
                    className="w-full pl-9 sm:pl-10 px-4 py-2.5 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-y sm:resize-none text-sm sm:text-base"
                    aria-invalid={!!fieldState.error}
                    aria-describedby={fieldState.error ? `${field.name}-error` : undefined}
                    aria-required="true"
                  />
                </div>
              </FormControl>
              {fieldState.error && (
                <FormMessage 
                  id={`${field.name}-error`}
                  className="text-red-500 text-xs sm:text-sm mt-1.5"
                  role="alert"
                />
              )}
            </FormItem>
          )}
        />
        
        {/* Form Actions */}
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 items-stretch xs:items-center pt-4 sm:pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full xs:flex-1 bg-[#E6C687] hover:bg-primary/90 text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] py-3 sm:py-3.5 md:py-4 px-6 rounded-lg sm:rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md active:scale-[0.98]"
            aria-busy={isSubmitting}
            aria-label={isSubmitting ? "Sending message" : "Send message"}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t("form.sending")}
              </span>
            ) : (
              t("form.submit")
            )}
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}
            className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-3.5 md:py-4 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] rounded-lg sm:rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 active:scale-[0.98]"
          >
            {t("form.reset")}
          </button>
        </div>

        {/* Optional: Form footer note */}
        <p className="text-[11px] sm:text-xs text-gray-400 text-center mt-4 sm:mt-6">
          <span aria-hidden="true">*</span> {t("form.requiredFieldsNote") || "Required fields"}
        </p>
      </form>
    </Form>
  );
}