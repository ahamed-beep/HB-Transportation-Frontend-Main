"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TOTAL_DOTS = 2;

const altTexts = {
  "Expedited Shipping": "Time-sensitive freight moved fast. Next-day capacity for high-priority reefer and dry freight.",
  "Dedicated Lanes": "HB Transportation dedicated lane freight truck",
  "Real-Time Tracking": "GPS tracking dashboard for HB Transportation",
  "Cold Chain": "HB Transportation refrigerated cold chain truck",
};

// ✅ Koi internal services array nahi — parent se prop aati hai
export default function ServicesSlider({ services }) {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const sliderRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const updateCardWidth = () => {
      if (!wrapperRef.current) return;
      const containerWidth = wrapperRef.current.offsetWidth;
      const gap = 16;
      setCardWidth((containerWidth - gap * 3) / 3.5);
    };
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const goTo = (index) => {
    if (index < 0 || index >= TOTAL_DOTS) return;
    const slider = sliderRef.current;
    if (!slider) return;
    const maxScroll = slider.scrollWidth - slider.offsetWidth;
    slider.scrollTo({ left: maxScroll * (index / (TOTAL_DOTS - 1)), behavior: "smooth" });
    setCurrent(index);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const maxScroll = slider.scrollWidth - slider.offsetWidth;
    const dot = Math.round((slider.scrollLeft / maxScroll) * (TOTAL_DOTS - 1));
    setCurrent(isNaN(dot) ? 0 : dot);
  };

  return (
    <div className=" mx-2 md:mx-5">

      <div className="flex items-start justify-between mb-8 px-6">
        <div>
          <h2 className="text-3xl md:mt-0 mt-3 font-bold text-[#191919] font-manrope">Our Services</h2>
          <p className="text-[#191919] font-manrope mt-3 text-md max-w-xs">
            Flexible freight solutions designed to meet your business needs.
          </p>
        </div>
        <div className="flex mt-10 items-center gap-6">
          <button
            onClick={() => goTo(current - 1)}
            aria-label="Previous services"
            className={`md:w-12 md:h-12 w-10 h-10 rounded-full border-2 text-xl flex items-center justify-center transition-all ${
              current === 0
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-[#404040] bg-white text-[#1E1E1E] hover:bg-gray-100"
            }`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            aria-label="Next services"
            className={`md:w-12 md:h-12 w-10 h-10 rounded-full text-xl flex items-center justify-center transition-all ${
              current === TOTAL_DOTS - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#2E2E2E] text-white hover:bg-neutral-700"
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div ref={wrapperRef} className="overflow-hidden md:pl-6">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {services.map((s, i) => (
            <div
              key={s.title}
              className="flex-shrink-0 p-1 md:p-1.5 rounded-lg bg-[#191919] snap-start flex flex-col gap-3"
              style={{
                width: cardWidth > 0 ? `${cardWidth}px` : "260px",
                minWidth: "200px",
              }}
            >
              <div
                className="relative rounded-md overflow-hidden"
                style={{ height: "280px" }}
              >
                <Image
                  src={s.img}
                  alt={altTexts[s.title] || s.title}
                  fill
                  className="object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 768px) 60vw, 28vw"
                />
              </div>

              <div className="ml-4">
                <h3 className="text-[#FFFFFF] text-lg md:text-xl font-manrope leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm font-manrope mb-4 md:mb-3 text-gray-400 md:mt-1 mt-3 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Page ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-neutral-900" : "w-3 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  );
}