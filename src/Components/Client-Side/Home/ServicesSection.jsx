"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ServicesSlider from "./Servicesslider.client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    title: "Expedited Shipping",
    img: "/Images/service1.webp",
    desc: "Time-sensitive freight moved fast. Next-day capacity for high-priority reefer and dry freight.",
  },
  {
    title: "Dedicated Lanes",
    img: "/Images/service2.webp",
    desc: "Consistent freight, consistent drivers, consistent service. We build long-term lane partnerships across the Western U.S.",
  },
  {
    title: "Real-Time Tracking",
    img: "/Images/service3.webp",
    desc: "Live GPS and temperature monitoring on every load. Know exactly where your freight is 24/7.",
  },
  {
    title: "Cold Chain",
    img: "/Images/service4.webp",
    desc: "Chilled and frozen capacity from coast to coast for produce, beverage, and pharma.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HB Transportation",
  description:
    "Expedited shipping, cold chain logistics, dedicated lanes, and real-time freight tracking across the Western U.S.",
  url: "https://www.hbtransportation.com",
  areaServed: "Western United States",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Freight Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.desc,
        image: `https://www.hbtransportation.com${s.img}`,
      },
    })),
  },
};

export default function ServicesAndDriver() {
  // Scroll trigger ref — section ke andar lagaya
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div className="relative overflow-hidden">
        {/* Invisible trigger div — section ke top pe */}
        <div ref={sectionRef} className="absolute top-0 left-0 w-full h-1 pointer-events-none" />

        <section className="bg-[#1F1F1F] min-h-150 md:min-h-70 py-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-manrope font-bold text-white">
                Start Your Journey as a Driver Today
              </h2>
              <p className="text-gray-400 font-manrope mt-4 max-w-md">
                Take the first step toward earning on your own terms. Join our
                network of trusted drivers and get access to consistent
                opportunities, flexible schedules, and full support to help you
                grow.
              </p>
              <Link
                href="/under-construction"
                className="md:mt-6 mt-12 px-4 py-3 rounded-full bg-white text-[#1E1E1E] font-semibold font-manrope inline-flex items-center gap-2 hover:bg-gray-200"
              >
                Apply as a Driver <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Mobile truck */}
        <motion.div
          className="block md:hidden w-75 h-75 z-10 absolute right-0 top-92 rounded-lg overflow-hidden"
          initial={{ x: "100%" }}
          animate={{ x: isInView ? 0 : "100%" }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <Image
            src="/Images/trukkkkkk4.webp"
            alt="Professional HB Transportation truck driver ready for duty"
            fill
            className="rounded-lg object-cover"
            loading="eager"
          />
        </motion.div>

        {/* Desktop truck */}
        <motion.div
          className="hidden md:block w-100 h-100 z-10 absolute right-0 bottom-145 rounded-lg overflow-hidden"
          initial={{ x: "100%" }}
          animate={{ x: isInView ? 0 : "100%" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          <Image
            src="/Images/trukkkkkk3.webp"
            alt="Professional HB Transportation truck driver ready for duty"
            fill
            className="rounded-lg object-cover"
            loading="eager"
          />
        </motion.div>

        <section id="services" aria-label="Our Services" className="bg-white relative py-14">
          <ul className="sr-only">
            {services.map((s) => (
              <li key={s.title}>
                <strong>{s.title}</strong>: {s.desc}
              </li>
            ))}
          </ul>
          <ServicesSlider services={services} />
        </section>
      </div>
    </>
  );
}