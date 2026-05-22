"use client"; // Required for useRef in Next.js App Router

import { useRef } from "react";
import DirectoryCard from "./DirectoryCard";

const directory = [
  { name: "Jenny Wilson" },
  { name: "Jane Cooper" },
  { name: "Courtney Henry" },
  { name: "Devon Lane" },
  { name: "Esther Howard" },
  { name: "Robert Fox" },
];

/**
 * DirectorySection – Horizontally scrollable staff contact cards.
 */
export default function DirectorySection() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amt = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amt : amt, behavior: "smooth" });
  };

  return (
    <section
      id="directory"
      aria-labelledby="directory-heading"
      className=" py-16 md:py-24 bg-[#2F2F2F] "
    >
        <div className=" md:px-20 px-5  mx-auto " >


      
      {/* Header row */}
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <h2
          id="directory-heading"
          className="text-3xl  font-manrope md:text-5xl font-extrabold"
        >
          Our Directory
        </h2>

        <div className="flex gap-3 md:gap-6" role="group" aria-label="Scroll directory">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
            aria-label="Scroll left"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
            aria-label="Scroll right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
 
        </div>
             <div
        ref={scrollerRef}
        className="flex gap-5 ml-5 md:ml-15 overflow-x-auto snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: "none" }}
        role="list"
        aria-label="Staff directory"
      >
        {directory.map((person, i) => (
          <div key={person.name} role="listitem">
            <DirectoryCard {...person} avatarIndex={i + 10} />
          </div>
        ))}
      </div>
    </section>
  );
}