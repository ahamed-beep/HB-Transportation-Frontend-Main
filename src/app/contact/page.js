import ContactForm from "@/Components/Client-Side/Contact/ContactForm";
import CTASection from "@/Components/Client-Side/Contact/CTASection";
import HeroSection from "@/Components/Client-Side/Contact/HeroSection";
import Footer from "@/Components/Client-Side/Home/Footer";
import Navbar from "@/Components/Client-Side/Home/Navbar";
import { Menu, Phone, Mail } from "lucide-react";

export const metadata = {
  title: "Contact Us | HBT Inc — Shipping & Logistics Support",
  description:
    "Get in touch with HBT Inc for shipment inquiries, tracking updates, or logistics support. Call us at +1 (530) 673-2116 or email info@hbtinc.org.",
  keywords: [
    "HBT Inc contact",
    "shipping support",
    "logistics inquiry",
    "track shipment",
    "freight contact",
    "HBT contact form",
  ],
  authors: [{ name: "HBT Inc" }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Contact HBT Inc — Shipping & Logistics Support",
    description:
      "Reach out to HBT Inc for quick assistance with your shipment or logistics needs.",
    url: "https://www.hbtinc.org/contact",
    siteName: "HBT Inc",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "HBT Inc — Contact Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact HBT Inc — Shipping & Logistics",
    description:
      "Have questions about your shipment? Contact our expert team today.",
    images: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://www.hbtinc.org/contact",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact HBT Inc",
  url: "https://www.hbtinc.org/contact",
  description:
    "Contact page for HBT Inc shipping and logistics. Reach us by phone or email.",
  mainEntity: {
    "@type": "Organization",
    name: "HBT Inc",
    url: "https://www.hbtinc.org",
    email: "info@hbtinc.org",
    telephone: "+1-530-673-2116",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-530-673-2116",
      contactType: "customer support",
      email: "info@hbtinc.org",
      availableLanguage: "English",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="page-wrapper">
     

        <main id="main-content">
            <Navbar/>
          <HeroSection />
          <ContactForm />
          <CTASection />
          <Footer/>
        </main>
      </div>

  
    </>
  );
}