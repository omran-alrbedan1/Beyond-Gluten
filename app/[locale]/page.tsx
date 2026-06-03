import type { Metadata } from "next";
import { AppDownload, AppScreenshots, AwesomeFeatures, ClientReviews, ContactUs, WhyChooseUs, InnovativeShop, Hero } from "@/components/home";
import { getHomePageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getHomePageMetadata({ locale });
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <WhyChooseUs />
      </section>

      <InnovativeShop />

      <section id="features">
        <AwesomeFeatures />
      </section>

      <section id="download">
        <AppDownload />
      </section>

      <section id="screenshots">
        <AppScreenshots />
      </section>

      <section id="testimonials">
        <ClientReviews />
      </section>

      <section id="contact">
        <ContactUs />
      </section>
    </main>
  );
}
