import AreasSection from "@/Components/Client-Side/Home/AreasSection";
import Footer from "@/Components/Client-Side/Home/Footer";
import HeroSection from "@/Components/Client-Side/Home/HeroSection";
import Navbar from "@/Components/Client-Side/Home/Navbar";
import ProcessSection from "@/Components/Client-Side/Home/Processsection";
import ReadyCTA from "@/Components/Client-Side/Home/ReadyCTA";
import ServicesSection from "@/Components/Client-Side/Home/ServicesSection";
import WhyTrustSection from "@/Components/Client-Side/Home/WhyTrustSection";

export const metadata = {
  title: "Home | HB Transportation",
  description:
    "HB Transportation delivers refrigerated, produce, and dry freight across the Western United States with 99% on-time delivery and 24/7 dispatch support.",
  alternates: {
    canonical: "/",
  },
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TransportCompany",
    name: "HB Transportation",
    url: "https://hbtinc.org",
    logo: "https://hbtinc.org/logo.png",
    telephone: "+15306732116",
    email: "info@hbtinc.org",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "Western United States",
    },
    description:
      "Reliable refrigerated, produce, and dry freight transportation across the Western United States.",
    openingHours: "Mo-Fr 07:00-17:00",
    areaServed: "Western United States",
    serviceType: [
      "Refrigerated Freight",
      "Expedited Shipping",
      "Dedicated Lanes",
      "Cold Chain Logistics",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-neutral-900 text-white font-sans">
        <Navbar />
        <main>
          <HeroSection />
          <WhyTrustSection />
          <ServicesSection />
          <AreasSection />
          <ProcessSection />
          <ReadyCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}