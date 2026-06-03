const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'FutureX Digital Solutions',
  url: 'https://futxtech.com',
  logo: 'https://futxtech.com/images/logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+962780185759',
    contactType: 'customer service',
    availableLanguage: ['Arabic', 'English'],
    areaServed: 'JO'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Amman',
    addressCountry: 'JO'
  }
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Beyond Gluten',
  url: 'https://beyond-gluten.vercel.app',
  description: 'أول منصة متكاملة لمنتجات وخدمات الخالي من الجلوتين في العالم العربي',
  inLanguage: 'ar',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://beyond-gluten.vercel.app/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}