import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl =  'https://abusarajewelry.com';
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: "%s | Abu Sara Jewelry",
      default: "Abu Sara Jewelry — Fine Gold & Custom Jewelry Since 1921",
    },
    description: "Jordan's trusted family-owned jeweler since 1921. Handcrafted gold, engagement rings, and custom designs in Amman.",
    openGraph: {
      type: "website",
      locale: locale === 'ar' ? 'ar_JO' : 'en_US',
      url: `${baseUrl}/${locale}`,
      siteName: "Abu Sara Jewelry",
      title: "Abu Sara Jewelry — Fine Gold & Custom Jewelry Since 1921",
      description: "Jordan's trusted family-owned jeweler since 1921. Handcrafted gold and custom designs in Amman.",
      images: [{
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Abu Sara Jewelry Collection",
      }],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;  
  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer/>
          <WhatsAppFloat />
          <Toaster richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
