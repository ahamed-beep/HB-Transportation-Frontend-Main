"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="HB Transportation hero banner"
      className="relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/Images/herosection.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-7 md:px-14 py-10 md:py-32">

        <motion.p
          className="text-[#FFFFFF] font-manrope text-[23px] md:text-[40px] mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Reliable Freight
        </motion.p>

        <motion.h1
          className="text-4xl md:text-7xl font-bold leading-tight text-[#FFFFFF] font-manrope"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          Delivered On Time<br />Every Time.
        </motion.h1>

        <motion.p
          className="mt-4 md:mt-6 text-gray-100 md:text-gray-200 text-[18px] md:text-[19px] font-manrope max-w-sm md:max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          Refrigerated, produce, and dry freight transportation across the Western United States
        </motion.p>

        <MotionLink
          href="/quote"
          className="mt-8 text-sm md:mt-12 inline-block px-4.5 md:px-8 py-2 rounded-full bg-white text-[#1E1E1E] font-manrope font-semibold hover:bg-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Get a Quote
        </MotionLink>

        <motion.div
          className="md:mt-0 mt-10 md:absolute text-xl font-manrope md:right-22 md:text-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
        >
          <p className="text-[#FFFFFF] font-light font-manrope">
            Trusted by <span className="text-[#F0AA1D]">100+ businesses </span>|
          </p>
          <p className="text-[#FFFFFF] font-manrope">
            99% On-Time Delivery
          </p>
        </motion.div>

      </div>
    </section>
  );
}