"use client";

import { CalendarRange } from "lucide-react";
import { useState } from "react";

const inputBase =
  "w-full bg-[#FFFFFF]/2 border border-[#FFFFFF]/15  px-6 py-6 text-md text-[#FFFFFF]/40 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition";

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-gray-400 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CalendarIcon = () => (
 <CalendarRange className="h-6 w-6 text-gray-400 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2" />
);

const CheckBadge = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l2.39 2.45 3.4-.55.55 3.4L20.79 9.6 18.34 12l2.45 2.39-2.45 2.39.55 3.4-3.4-.55L12 22l-2.39-2.45-3.4.55-.55-3.4L3.21 14.4 5.66 12 3.21 9.6l2.45-2.39-.55-3.4 3.4.55L12 2z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export default function QuoteForm() {
  const [form, setForm] = useState({
    pickup: "", delivery: "", pickupDate: "", freightType: "",
    weight: "", temperature: "", fullName: "", phone: "",
    email: "", company: "", notes: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request:", form);
    alert("Quote request submitted!");
  };

  return (
    <section aria-labelledby="quote-form-heading" className=" bg-[#383838] px-4 md:px-6 py-12 md:py-16">
      <form
        onSubmit={handleSubmit}
        className="  md:mx-20 bg-neutral-800/60 border border-neutral-700 rounded-md p-6 md:px-22 md:py-12"
      >
        <h2 id="quote-form-heading" className="text-3xl   font-manrope font-bold">Request Your Quote</h2>
        <p className="text-sm font-manrope leading-7   text-gray-300 mt-6">
          Fill out the details below and our team will get back to you. <br/> shortly with the best possible rate.
        </p>

        {/* Shipping Details */}
        <h3 className="text-lg font-manrope  mt-12 mb-4">Shipping Details:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <select name="pickup" value={form.pickup} onChange={handleChange} className={`${inputBase} appearance-none border-[#FFFFFF] `}>
              <option value="" className="bg-neutral-800">Pickup Location</option>
              <option className="bg-neutral-800">New York, NY</option>
              <option className="bg-neutral-800">Los Angeles, CA</option>
              <option className="bg-neutral-800">Chicago, IL</option>
            </select>
            <ChevronDown />
          </div>
          <div className="relative">
            <select name="delivery" value={form.delivery} onChange={handleChange} className={`${inputBase} appearance-none`}>
              <option value="" className="bg-neutral-800">Delivery Location</option>
              <option className="bg-neutral-800">Houston, TX</option>
              <option className="bg-neutral-800">Miami, FL</option>
              <option className="bg-neutral-800">Seattle, WA</option>
            </select>
            <ChevronDown />
          </div>
        </div>
        <div className="relative mt-4">
          <input
            type="text"
            name="pickupDate"
            placeholder="Pickup Date"
            value={form.pickupDate}
            onChange={handleChange}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => { if (!e.target.value) e.target.type = "text"; }}
            className={inputBase}
          />
          <CalendarIcon />
        </div>

        {/* Freight Details */}
        <h3 className="text-lg  mt-8 mb-4">Freight Details:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <select name="freightType" value={form.freightType} onChange={handleChange} className={`${inputBase} appearance-none`}>
              <option value="" className="bg-neutral-800">Freight Type</option>
              <option className="bg-neutral-800">Dry Van</option>
              <option className="bg-neutral-800">Reefer</option>
              <option className="bg-neutral-800">Flatbed</option>
            </select>
            <ChevronDown />
          </div>
          <div className="relative">
            <select name="weight" value={form.weight} onChange={handleChange} className={`${inputBase} appearance-none`}>
              <option value="" className="bg-neutral-800">Weight / Load Size</option>
              <option className="bg-neutral-800">Less than 10,000 lbs</option>
              <option className="bg-neutral-800">10,000 - 25,000 lbs</option>
              <option className="bg-neutral-800">25,000+ lbs</option>
            </select>
            <ChevronDown />
          </div>
        </div>
        <div className="relative mt-4">
          <select name="temperature" value={form.temperature} onChange={handleChange} className={`${inputBase} appearance-none`}>
            <option value="" className="bg-neutral-800">Temperature Requirements</option>
            <option className="bg-neutral-800">Ambient</option>
            <option className="bg-neutral-800">Refrigerated</option>
            <option className="bg-neutral-800">Frozen</option>
          </select>
          <ChevronDown />
        </div>

        {/* Contact Info */}
        <h3 className="text-lg  mt-8 mb-4">Contact Information:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} className={inputBase} />
          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className={inputBase} />
        </div>
        <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className={`${inputBase} mt-4`} />
        <input type="text" name="company" placeholder="Company Name" value={form.company} onChange={handleChange} className={`${inputBase} mt-4`} />

        {/* Notes */}
        <h3 className="text-lg  mt-8 mb-4">Additional Notes:</h3>
        <textarea
          name="notes"
          placeholder="Message"
          value={form.notes}
          onChange={handleChange}
          rows={5}
          className={`${inputBase} resize-none`}
        />

        <button
          type="submit"
          className="mt-8 bg-white text-[#383838] font-semibold text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-200 transition"
        >
          Get My Quote
        </button>
      </form>

      {/* Feature cards */}
      <div className=" md:mx-30 grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
        {["Fast response within hours", "Reliable and on-time delivery", "Real-time tracking available"].map((text) => (
          <div key={text} className="bg-[#2F2F2F] border border-neutral-700 rounded-lg py-8 px-4 flex flex-col items-center text-center">
        <img src="/Images/quote/tickbadge.webp" className="h-10 w-10"  alt="" />
            <p className="mt-3 text-sm font-manrope text-gray-200">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}