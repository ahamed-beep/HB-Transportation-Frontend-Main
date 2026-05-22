import Footer from "@/Components/Client-Side/Home/Footer";
import Navbar from "@/Components/Client-Side/Home/Navbar";
import CertificationsSection from "@/Components/Client-Side/resources/CertificationsSection";
import DirectorySection from "@/Components/Client-Side/resources/DirectorySection";
import HeroSection from "@/Components/Client-Side/resources/HeroSection";
import ResourcesSection from "@/Components/Client-Side/resources/ResourcesSection";


export const metadata = {
  title: "Resources | HB Transportation",
  description:
    "Quick access to carrier packets, authority letters, W-9, proof of insurance, and staff directory for HB Transportation's shippers, brokers, and partners.",

  // Canonical URL – update to your production domain
  alternates: {
    canonical: "https://www.hbtransportation.com/resources",
  },

  // Open Graph (Facebook / LinkedIn previews)
  openGraph: {
    title: "Resources | HB Transportation",
    description:
      "Download carrier packet documents and contact our team. HB Transportation — keeping your shipments moving.",
    url: "https://www.hbtransportation.com/resources",
    siteName: "HB Transportation",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "HB Transportation — freight trucks on the road",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Resources | HB Transportation",
    description:
      "Download carrier packet documents and contact our team. HB Transportation — keeping your shipments moving.",
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    ],
  },

  // Robots directive
  robots: {
    index: true,
    follow: true,
  },
};


export default function ResourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HB Transportation",
    url: "https://www.hbtransportation.com",
    description:
      "HB Transportation provides freight trucking services across the US, certified by SmartWay and the California Air Resources Board.",
    sameAs: [],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "SmartWay Transport Partner",
        credentialCategory: "certification",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "California Air Resources Board Certified",
        credentialCategory: "certification",
      },
    ],
  };

  return (
    <>
      {/* JSON-LD structured data – invisible to users, readable by crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#1f1f1f] text-white">
        {/* 1. Hero banner */}
        <Navbar/>
        <HeroSection />

        {/* 2. Carrier packet documents */}
        <ResourcesSection />

        {/* 3. Staff directory (client component for scroll) */}
        <DirectorySection />

        {/* 4. Compliance certifications */}
        <CertificationsSection />
        <Footer/>
      </main>
    </>
  );
}