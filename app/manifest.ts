import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Beyond Gluten',
    short_name: 'BeyondGluten',
    description: 'Gluten-Free, Full of Flavor - Beyond Gluten platform for gluten-free products and services',
    start_url: '/en',
    display: 'standalone',
    background_color: '#fff8f0',
    theme_color: '#cc7a3a',
    icons: [
      { src: '/images/logo.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/logo.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
