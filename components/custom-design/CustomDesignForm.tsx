/* CustomDesignForm.tsx - With Form Message Pattern Like CustomFormField */
'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Gem, User, Phone, Mail, Palette, Calendar } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FileUpload from '@/components/ui/FileUpload';
import { COLORS, JEWELRY_TYPES, KARATS, OCCASIONS } from '@/constants/site';

// Form state type
interface CustomDesignFormState {
  fullName: string;
  phone: string;
  email?: string;
  jewelryType: string;
  goldKarat: string;
  goldColor?: string;
  budget?: string;
  occasion?: string;
  description: string;
  contactMethod?: string;
}

export default function CustomDesignForm() {
  const t = useTranslations('customDesign');
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Create Zod validation schema with translations
  const createValidationSchema = () => {
    return z.object({
      fullName: z.string().min(1, t('validation.fullNameRequired')),
      phone: z.string().min(1, t('validation.phoneRequired')),
      email: z.string().email(t('validation.emailInvalid')).optional().or(z.literal('')),
      jewelryType: z.string().min(1, t('validation.jewelryTypeRequired')),
      goldKarat: z.string().min(1, t('validation.goldKaratRequired')),
      goldColor: z.string().optional(),
      budget: z.string().optional(),
      occasion: z.string().optional(),
      description: z.string().min(10, t('validation.descriptionMin')),
      contactMethod: z.string().optional(),
    });
  };

  const form = useForm<CustomDesignFormState>({
    resolver: zodResolver<CustomDesignFormState, any, CustomDesignFormState>(createValidationSchema()),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      jewelryType: "",
      goldKarat: "",
      goldColor: "",
      budget: "",
      occasion: "",
      description: "",
      contactMethod: "whatsapp",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: CustomDesignFormState) => {
    setIsSubmitting(true);

    try {
      // Create FormData to send file
      const formData = new FormData();
      formData.append('fullName', data.fullName.trim());
      formData.append('phone', data.phone.trim());
      formData.append('email', data.email?.trim() || '');
      formData.append('jewelryType', data.jewelryType);
      formData.append('goldKarat', data.goldKarat);
      formData.append('goldColor', data.goldColor || '');
      formData.append('budget', data.budget || '');
      formData.append('occasion', data.occasion || '');
      formData.append('description', data.description.trim());
      formData.append('contactMethod', data.contactMethod || 'whatsapp');
      if (imageFile) {
        formData.append('referenceImage', imageFile);
      }

      const response = await fetch('/api/custom-design', {
        method: 'POST',
        body: formData,
      });

      const responseData = await response.json();

      if (response.ok) {
        // Show success message
        toast.success(t("form.success"));
        
        form.reset();
        
        setImageFile(null);
        
        // Reset file input
        const fileInput = document.getElementById('reference-image') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        // Show specific error message from server
        toast.error(responseData.message || "Failed to submit request. Please try again.");
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error("Failed to submit request. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle form reset with proper state management
  const handleReset = () => {
    form.reset();
    setImageFile(null);
    const fileInput = document.getElementById('reference-image') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" border border-gray-200 bg-white p-4 sm:p-6 md:p-10 shadow-sm"
      >
        <div className='grid gap-4  sm:gap-5 md:grid-cols-2'>

        {/* Full Name - Required */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-2">
              <FormLabel 
                htmlFor={field.name}
                className="text-xs uppercase tracking-[0.25em] text-gray-500 block"
              >
                {t("form.fullName")}
                <span className="text-primary ml-1">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 rtl:left-1 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4" aria-hidden="true" />
                  <Input
                    {...field}
                    id={field.name}
                    type="text"
                    placeholder={t("form.fullNamePlaceholder")}
                    className="pl-10 ltr:pl-10 rtl:pl-16 p-5 text-sm sm:text-base"
                    aria-invalid={fieldState.invalid}
                    aria-describedby={fieldState.error ? `${field.name}-error` : undefined}
                  />
                </div>
              </FormControl>
              {fieldState.error && (
                <FormMessage 
                  id={`${field.name}-error`}
                  className="text-red-500 text-xs mt-1"
                  role="alert"
                />
              )}
            </FormItem>
          )}
        />
        
        {/* Phone Number - Required */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => (
            <FormItem className="space-y-2">
              <FormLabel 
                htmlFor={field.name}
                className="text-xs uppercase tracking-[0.25em] text-gray-500 block"
              >
                {t("form.phone")}
                <span className="text-primary ml-1">*</span>
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 rtl:left-1 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4" />
                  <Input
                    {...field}
                    id={field.name}
                    type="tel"
                    placeholder={t("form.phonePlaceholder")}
                    className="pl-10 ltr:pl-10 rtl:pl-16 p-5 text-sm sm:text-base"
                    aria-invalid={fieldState.invalid}
                    aria-describedby={fieldState.error ? `${field.name}-error` : undefined}
                  />
                </div>
              </FormControl>
              {fieldState.error && (
                <FormMessage 
                  id={`${field.name}-error`}
                  className="text-red-500 text-xs mt-1"
                  role="alert"
                />
              )}
            </FormItem>
          )}
        />
        
        {/* Email Address - Optional */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-xs uppercase tracking-[0.25em] text-gray-500 block">
                {t("form.email")}
              </FormLabel>
              <FormControl>
                <div className="relative">
                  <Mail className="absolute left-3 rtl:left-1 top-1/2 transform -translate-y-1/2 text-primary w-4 h-4" />
                  <Input
                    {...field}
                    type="email"
                    placeholder={t("form.emailPlaceholder")}
                    className="pl-10 ltr:pl-10 rtl:pl-16 p-5  text-sm sm:text-base"
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />
        
        {/* Jewelry Type - Required */}
        <FormField
          control={form.control}
          name="jewelryType"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-xs uppercase tracking-[0.25em] text-gray-500 block">
                {t("form.jewelryType")}
                <span className="text-primary ml-1">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full h-14  p-5 sm:h-12 text-sm sm:text-base">
                    <Gem className="mr-2 h-4 w-4 text-primary" />
                    <SelectValue placeholder={t("form.selectJewelryType")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='p-2'>
                  {JEWELRY_TYPES.map((type: any) => (
                    <SelectItem key={type} value={type}>
                      {t(`jewelry.${type}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />
        
        {/* Gold Karat - Required */}
        <FormField
          control={form.control}
          name="goldKarat"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-xs uppercase tracking-[0.25em] text-gray-500 block">
                {t("form.goldKarat")}
                <span className="text-primary ml-1">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full p-5 text-sm sm:text-base">
                    <Palette className="mr-2 h-4 w-4 text-primary" />
                    <SelectValue placeholder={t("form.selectKarat")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='p-2'>
                  {KARATS.map((karat) => (
                    <SelectItem key={karat} value={karat}>{karat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />
        
        {/* Gold Color - Optional */}
        <FormField
          control={form.control}
          name="goldColor"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-xs uppercase tracking-[0.25em] text-gray-500 block">
                {t("form.goldColor")}
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full p-5 text-sm sm:text-base">
                    <Palette className="mr-2 h-4 w-4 text-primary" />
                    <SelectValue placeholder={t("form.selectColor")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='p-2'>
                  {COLORS.map((color) => (
                    <SelectItem key={color} value={color}>
                      {t(`color.${color}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />
        
        {/* Occasion - Optional */}
        <FormField
          control={form.control}
          name="occasion"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-xs uppercase tracking-[0.25em] text-gray-500 block">
                {t("form.occasion")}
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full p-5 text-sm sm:text-base">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    <SelectValue placeholder={t("form.selectOccasion")} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='p-2'>
                  {OCCASIONS.map((occasion) => (
                    <SelectItem key={occasion} value={occasion}>
                      {t(`occasion.${occasion}`)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />
          
        </div>
      
        {/* Reference Image - Optional with File Upload */}
        <div className="space-y-2 col-span-2">
          <label className="text-xs uppercase tracking-[0.25em] text-gray-500 block">
            {t("form.reference")}
          </label>
          <FileUpload
            id="reference-image"
            accept="image/*"
            maxSizeMB={5}
            onFileChange={setImageFile}
            selectedFile={imageFile}
          />
        </div>
        
        {/* Design Description - Required (full width) */}
      <div className='col-span-2'>
          <FormField
          control={form.control}
          name="description"
          
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel className="text-xs uppercase tracking-[0.25em] text-gray-500 block">
                {t("form.description")}
                <span className="text-primary ml-1">*</span>
              </FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  className="w-full border border-gray-300 px-4 py-2 text-sm sm:text-base outline-none focus:border-primary transition-colors min-h-36 resize-vertical"
                  placeholder={t("form.descriptionPlaceholder")}
                  rows={5}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-xs mt-1" />
            </FormItem>
          )}
        />
      </div>
        
        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold uppercase tracking-widest px-6 sm:px-8 py-3 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-busy={isSubmitting}
          >
            <Gem className="w-4 h-4 text-primary" />
            {isSubmitting ? t("form.submitting") : t("form.submit")}
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 text-sm font-semibold uppercase tracking-widest px-6 py-3 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t("form.reset")}
          </button>
        </div>
      </form>
    </Form>
  );
}