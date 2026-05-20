import { CtaSection } from "@/Components/Client-Side/About/CtaSection";
import { HeroSection } from "@/Components/Client-Side/About/HeroSection";
import { OurStory } from "@/Components/Client-Side/About/OurStory";
import { StatsBar } from "@/Components/Client-Side/About/StatsBar";
import WhyChooseUs from "@/Components/Client-Side/About/WhyChooseUs";
import Footer from "@/Components/Client-Side/Home/Footer";
import Navbar from "@/Components/Client-Side/Home/Navbar";


export const metadata = {
  title: "About Us | HB Transportation",
  description:
    "HB Transportation is a family-owned asset-based carrier specializing in refrigerated and dry freight across the Western U.S. No subhauling. No middlemen. Just freight, done right.",
  alternates: {
    canonical: "https://www.hbtinc.org/about",
  },
  openGraph: {
    title: "About Us | HB Transportation",
    description:
      "Family-owned refrigerated & dry freight carrier serving the Western United States since 2008.",
    url: "https://www.hbtinc.org/about",
    siteName: "HB Transportation",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-neutral-900 text-white font-sans min-h-screen">
        <Navbar/>
      <HeroSection />
      <OurStory />
      <StatsBar />
      <WhyChooseUs/>
      <CtaSection />
<Footer/>
    </main>
  );
}