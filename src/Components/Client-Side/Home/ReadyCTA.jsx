// components/ReadyCTA.jsx
"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function ReadyCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative w-full h-110 md:h-90"
      style={{
        backgroundImage: "url('/Images/ctaimage.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Invisible scroll trigger */}
      <div ref={ref} className="absolute top-0 left-0 w-full h-1 pointer-events-none" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-white/6 z-0" />

      {/* Truck — left se slide in */}
      <motion.img
        src="/Images/truck5.webp"
        className="top-58 h-70 md:h-120 md:top-3 absolute left-0 z-10"
        alt=""
        initial={{ x: "-100%" }}
        animate={{ x: isInView ? 0 : "-100%" }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      />

      {/* Content — fade + slide up */}
      <motion.div
        className="relative z-20 max-w-7xl px-8 md:px-6 py-10 md:py-20 text-center md:text-left md:ml-150 flex justify-center flex-col"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      >
        <div>
          <h2 className="text-2xl md:text-4xl font-bold font-manrope text-white">
            Ready to Move Your Freight?
          </h2>
          <p className="text-gray-300 font-manrope mt-6 md:mt-3">
            Let&apos;s get your shipment on the road quickly and safely.
          </p>
          <div className="md:mt-6 mt-10 justify-center md:justify-start flex gap-4">
            <Link
              href="/quote"
              className="px-4 py-2 font-semibold rounded-full bg-white text-[#1E1E1E] font-manrope hover:bg-gray-200"
            >
              Get a Quote
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full bg-neutral-800 text-white font-manrope font-medium border border-neutral-600 hover:bg-neutral-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}