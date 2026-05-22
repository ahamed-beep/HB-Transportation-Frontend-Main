import Footer from "@/Components/Client-Side/Home/Footer";
import Navbar from "@/Components/Client-Side/Home/Navbar";
import QuoteCTA from "@/Components/Client-Side/Quote/QuoteCTA";
import QuoteForm from "@/Components/Client-Side/Quote/QuoteForm";
import QuoteHero from "@/Components/Client-Side/Quote/QuoteHero";

export const metadata = {
  title: "Get a Freight Quote | HB Transportation",
  description:
    "Request a freight shipping quote from HB Transportation. Fast response within hours — dry van, reefer, and flatbed loads across the US.",
  alternates: {
    canonical: "https://www.hbtransportation.com/quote",
  },
  openGraph: {
    title: "Get a Freight Quote | HB Transportation",
    description:
      "Request a freight shipping quote from HB Transportation. Fast response within hours.",
    url: "https://www.hbtransportation.com/quote",
    siteName: "HB Transportation",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "HB Transportation freight trucks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Freight Quote | HB Transportation",
    description: "Request a freight shipping quote. Fast response within hours.",
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freight Shipping Quote",
  provider: {
    "@type": "Organization",
    name: "HB Transportation",
    url: "https://www.hbtransportation.com",
  },
  description:
    "Request a freight shipping quote for dry van, reefer, or flatbed loads. HB Transportation responds within the same business day.",
  areaServed: "US",
  serviceType: "Freight Transportation",
};

export default function QuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-neutral-900 text-white font-sans">
        <Navbar/>
        <QuoteHero />
        <QuoteForm />
        <QuoteCTA />
        <Footer/>
      </main>
    </>
  );
}