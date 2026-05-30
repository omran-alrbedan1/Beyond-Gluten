
import { 
  HeroSection, 
  StorySection, 
  MissionVisionSection, 
  HeritageSection 
} from '@/components/about';
import { getAboutMetadata } from '../metadata/about';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getAboutMetadata(locale);
}

export default function AboutPage() {
  return (
    <div className="bg-white font-sans text-gray-800 min-h-screen">
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <HeritageSection />
    </div>
  );
}
