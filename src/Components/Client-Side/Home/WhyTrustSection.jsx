"use client";

import { useState } from "react";
import { Timer } from "lucide-react";

const cards = [
  { icon: "clock", title: "On-time delivery you can count on" },
  { icon: "phone", title: "Real-time communication & updates with live tracking" },
  { icon: "truck", title: "Modern fleet & Vetted drivers" },
  { icon: "headset", title: "Dedicated support team 24/7" },
];

function CardIcon({ icon, isWhite }) {
  const cls = `w-15 h-15 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
    isWhite ? "bg-white text-neutral-900" : "bg-[#2A2A2A] text-gray-300"
  }`;

  if (icon === "phone") return (
    <div className={cls}>
      <img src="/Images/hung.webp" className="h-5" alt="" style={{ filter: isWhite ? "invert(0)" : "invert(1)" }} />
    </div>
  );
  if (icon === "truck") return (
    <div className={cls}>
      <img src="/Images/truck.webp" className="h-5" alt="" style={{ filter: isWhite ? "invert(0)" : "invert(1)" }} />
    </div>
  );
  if (icon === "headset") return (
    <div className={cls}>
      <img src="/Images/call.webp" className="h-5" alt="" style={{ filter: isWhite ? "invert(0)" : "invert(1)" }} />
    </div>
  );
  return (
    <div className={cls}>
      <Timer className="h-8" />
    </div>
  );
}

function Card({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-sm px-3 py-8 text-center transition-all duration-300 cursor-default ${
        hovered
          ? "bg-[#2A2A2A] border border-transparent -translate-y-2 shadow-lg shadow-black/40"
          : "bg-white/1 border border-[#70707066]"
      }`}
    >
      <CardIcon icon={card.icon} isWhite={hovered} />
      <p className="text-sm font-manrope text-gray-200">{card.title}</p>
    </div>
  );
}

export default function WhyTrustSection() {
  return (
    <section className="bg-[#3A3A3A] py-13 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-2xl md:text-4xl font-manrope font-bold">Why Businesses Trust</h2>
            <p className="text-2xl text-gray-300 font-semibold font-manrope mt-3">HB Transportation</p>
          </div>
          <p className="text-gray-300 font-manrope text-lg max-w-sm md:ml-50 md:pt-2">
            We don&apos;t just move freight we build long-term partnerships. Our focus is reliability, clear communication, and consistent delivery performance.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}