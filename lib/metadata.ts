import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

const BASE_URL = 'https://beyond-gluten.vercel.app';

const openGraphImage = {
  url: `${BASE_URL}/og-image.jpg`,
  width: 1200,
  height: 630,
  alt: 'Beyond Gluten - Gluten-Free Platform',
  type: 'image/jpeg',
};

export async function getRootLayoutMetadata({ locale }: { locale: string }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'layout.metadata' });

    return {
        metadataBase: new URL(BASE_URL),
        title: {
            default: t('title.default'),
            template: t('title.template')
        },
        description: t('description'),
        keywords: t('keywords'),
        authors: [{ name: 'FutureX Digital Solutions', url: 'https://futxtech.com' }],
        creator: 'FutureX',
        publisher: 'FutureX Digital Solutions',
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
        },
        alternates: {
            canonical: `${BASE_URL}/${locale}`,
            languages: {
              'x-default': `${BASE_URL}/en`,
              'en': `${BASE_URL}/en`,
              'ar': `${BASE_URL}/ar`,
            },
        },
        openGraph: {
            type: 'website',
            locale: locale === 'ar' ? 'ar_AR' : 'en_US',
            url: `${BASE_URL}/${locale}`,
            siteName: 'Beyond Gluten',
            title: t('title.default'),
            description: t('description'),
            images: ['/og-image.jpg'],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title.default'),
            description: t('description'),
            images: [`${BASE_URL}/og-image.jpg`],
        },
        icons: { icon: '/favicon.ico', apple: '/images/logo.png' },
        verification: { google: 'google-site-verification-code' }
    };
}

export async function getHomePageMetadata({ locale }: { locale: string }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'home.metadata' });
    const canonicalUrl = `${BASE_URL}/${locale}`;

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: t('openGraph.title'),
            description: t('openGraph.description'),
            url: canonicalUrl,
            images: [openGraphImage],
        },
    };
}

export async function getAboutPageMetadata({ locale }: { locale:string }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'about.metadata' });
    const canonicalUrl = `${BASE_URL}/${locale}/about`;

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: t('openGraph.title'),
            description: t('openGraph.description'),
            url: canonicalUrl,
            images: [openGraphImage],
        },
    };
}

export async function getContactPageMetadata({ locale }: { locale:string }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'contact.metadata' });
    const canonicalUrl = `${BASE_URL}/${locale}/contact`;

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        alternates: { canonical: canonicalUrl },
        openGraph: {
            title: t('openGraph.title'),
            description: t('openGraph.description'),
            url: canonicalUrl,
            images: [openGraphImage],
        },
    };
}

export async function getPoliciesPageMetadata({ locale }: { locale:string }): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'policies.metadata' });
    const canonicalUrl = `${BASE_URL}/${locale}/policies`;

    return {
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        robots: { index: false, follow: true },
        alternates: { canonical: canonicalUrl },
    };
}
