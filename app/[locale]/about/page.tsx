import type { Metadata } from 'next';
import { getAboutPageMetadata } from '@/lib/metadata';
import { AboutHero, AboutMission, AboutVision } from '@/components/about';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getAboutPageMetadata({ locale });
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <AboutHero />
      <AboutMission />
      <AboutVision />
    </main>
  );
}
