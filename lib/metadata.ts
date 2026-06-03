import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

const BASE_URL = 'https://beyond-gluten.vercel.app';

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
            canonical: BASE_URL,
            languages: {
              'en': `${BASE_URL}/en`,
              'ar': `${BASE_URL}/ar`,
            },
        },
        openGraph: {
            type: 'website',
            locale: locale === 'ar' ? 'ar_AR' : 'en_US',
            url: BASE_URL,
            siteName: 'Beyond Gluten',
            title: t('title.default'),
            description: t('description'),
            images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Beyond Gluten - Gluten Free Platform' }]
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title.default'),
            description: t('description'),
            images: ['/twitter-image.jpg']
        },
        icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
        manifest: '/site.webmanifest',
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
