"use client";
import { useState } from "react";

const features = [
  {
    i: "alarm",
    t: "On-time delivery you can count on",
  },
  {
    i: "truck",
    t: "Real-time communication & updates with live tracking",
  },
  {
    i: "net",
    t: "Modern fleet & Vetted drivers",
  },
  {
    i: "shield",
    t: "Safe handling, every mile of the journey",
  },
];

function Icon({ name }) {
  const c = "w-5 h-5 text-white/80 shrink-0";
  if (name === "alarm")
    return (
  <img className=" h-5" src="/Images/about/icon1.webp" />
    );
  if (name === "truck")
    return (
   <img className="h-5" src="/Images/about/icon2.webp" />
    );
  if (name === "net")
    return (
     <img className=" h-5" src="/Images/about/icon3.webp" />
    );
  return (
      <img className=" h-5" src="/Images/about/icon4.webp" />
  );
}

export default function WhyChooseUs() {
  return (
    <section className="bg-[#3A3A3A] relative  min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 w-full">
        <h2 className="text-3xl md:text-4xl font-manrope  font-bold text-center text-white mb-10 md:mb-18">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Image with white overlay bar at bottom */}
          <div className="order-2  md:order-1">
            <div className=" rounded-md overflow-hidden">
              <img
                src="/Images/about/whytrustus.webp"
                alt="Truck on highway"
                className="w-full relative z-20 h-95 object-cover block"
              />
              {/* White bar — absolute positioned on top of image at bottom */}
              <div className="absolute w-70 md:w-110  rounded-2xl z-10 left-12  top-227  md:top-140 md:left-42 right-0 bg-[#D9D9D9] h-7" />
            </div>
          </div>

          {/* Right: Feature list */}
          <div className="order-1 md:order-2 space-y-4 md:space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`flex items-center gap-4  border border-white/10 px-5 py-6 ${
                  i === 2 ? "bg-[#FFFFFF]/15 border-2 border-[#FFFFFF]" : "bg-[#FFFFFF]/2"
                }`}
              >
                <Icon name={f.i} />
                <span className="text-sm md:text-base font-manrope text-neutral-200">{f.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}