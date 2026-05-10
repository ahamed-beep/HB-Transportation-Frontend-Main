// components/Footer.jsx
// Server Component - SSG compatible

import { ArrowUpRight, MoveUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-900 py-14">
      <div className="max-w-7xl  mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div  >
          <div className="w-20 h-20 rounded-full   flex items-center justify-center font-serif italic font-bold text-xl mb-4">
            <img src="/Images/Footerlogo.webp" className="w-full h-full" alt="" />
          </div>
          <p className="text-sm text-[#1E1E1E]  mt-8  font-manrope max-w-xs">
           Reliable, on-time freight solutions across the Western United States. We focus on safety, consistency, and long-term partnerships.
          </p>
          <div className="flex gap-3 mt-8">
            <a href="https://facebook.com" aria-label="HB Transportation on Facebook" className="w-9 h-9 rounded-full bg-[#1C1C21] text-white flex items-center justify-center text-sm"><img src="/Images/facebook.webp" className="h-4 w-4" alt="Facebook" /></a>
            <a href="https://instagram.com" aria-label="HB Transportation on Instagram" className="w-9 h-9 border border-[#212121] rounded-full bg-white text-white flex items-center justify-center text-sm"><img src="/Images/instagram.webp" className="h-4 w-4 " alt="Instagram" /></a>
            <a href="https://linkedin.com" aria-label="HB Transportation on LinkedIn" className="w-9 h-9 rounded-full bg-[#1C1C21] text-white flex items-center justify-center text-sm"><img className="h-4 w-4" src="/Images/linkdin.webp" alt="LinkedIn" /></a>
          </div>
        </div>


         <div className="mt-10 hidden md:block md:ml-13 font-manrope " >
          <h3 className="font-bold text-[#1E1E1E] font-manrope mb-4">QUICKLINKS</h3>
          <ul className="space-y-2 text-sm font-manrope text-[#1E1E1E]">
            <li><a href="/" className="hover:text-neutral-900">Home</a></li>
            <li><a href="/about" className="hover:text-neutral-900">About</a></li>
            <li><a href="/resources" className="hover:text-neutral-900">Resources</a></li>
            <li><a href="/quote" className="hover:text-neutral-900">Quote</a></li>
            <li><a href="/contact" className="hover:text-neutral-900">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="mt-10 hidden md:block" >
          <h3 className="font-bold text-[#1E1E1E] font-manrope mb-4">SERVICES</h3>
          <ul className="space-y-2 text-sm font-manrope text-[#1E1E1E]">
            <li><a href="/services/expedited" className="hover:text-neutral-900">Expedited Shipping</a></li>
            <li><a href="/services/dedicated-lanes" className="hover:text-neutral-900">Dedicated Lanes</a></li>
            <li><a href="/services/tracking" className="hover:text-neutral-900">Real-Time Tracking</a></li>
            <li><a href="/services/cold-chain" className="hover:text-neutral-900">Cold Chain</a></li>
          </ul>
        </div>
<div className="flex gap-18  block md:hidden"  >


        {/* Quick Links */}
        <div className="  font-manrope " >
          <h3 className="font-bold text-[#1E1E1E] font-manrope mb-4">QUICKLINKS</h3>
          <ul className="space-y-2 text-sm font-manrope text-[#1E1E1E]">
            <li><a href="/" className="hover:text-neutral-900">Home</a></li>
            <li><a href="/about" className="hover:text-neutral-900">About</a></li>
            <li><a href="/resources" className="hover:text-neutral-900">Resources</a></li>
            <li><a href="/quote" className="hover:text-neutral-900">Quote</a></li>
            <li><a href="/contact" className="hover:text-neutral-900">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="" >
          <h3 className="font-bold text-[#1E1E1E] font-manrope mb-4">SERVICES</h3>
          <ul className="space-y-2 text-sm font-manrope text-[#1E1E1E]">
            <li><a href="/services/expedited" className="hover:text-neutral-900">Expedited Shipping</a></li>
            <li><a href="/services/dedicated-lanes" className="hover:text-neutral-900">Dedicated Lanes</a></li>
            <li><a href="/services/tracking" className="hover:text-neutral-900">Real-Time Tracking</a></li>
            <li><a href="/services/cold-chain" className="hover:text-neutral-900">Cold Chain</a></li>
          </ul>
        </div>

        </div>

        {/* Contact */}
  {/* Contact */}
<div className="md:mt-10">
  {/* "Let's" with arrow badge + "Work Together" */}
  <div className="mb-4">
    <h3 className="font-bold text-[#1E1E1E] font-manrope text-2xl flex items-center gap-2">
      Let's
      <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
        <ArrowUpRight size={16} />
      </span>
    </h3>
    <h3 className="font-bold text-[#1E1E1E] font-manrope text-2xl">
      Work Together
    </h3>
  </div>

  <p className="text-sm text-gray-700 flex items-center gap-2 mt-4">
    <img src="/Images/phoneb.webp" className="w-4 h-4" alt="Phone" />
    <a href="tel:+15306732116" className="hover:underline font-manrope text-[#1E1E1E]">+1 (530) 673-2116</a>
  </p>
  <p className="text-sm text-gray-700 flex items-center gap-2 mt-2">
     <img src="/Images/email.webp" className="w-4 h-4" alt="Email" />
    <a href="mailto:info@hbtinc.org" className="hover:underline font-manrope text-[#1E1E1E]">info@hbtinc.org</a>
  </p>
  <div className="flex" >

  <a
  href="/drive"
  className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-sm bg-[#383838] text-white text-sm hover:bg-neutral-700"
>
  <span className="flex font-manrope items-center gap-2">
    <img src="/Images/clap.webp" className="w-4 h-4" alt="" /> Apply as a Driver
  </span>
  <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
    <ArrowUpRight size={14} />
  </span>
</a>
    </div>
</div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-center text-center md:justify-between text-sm font-manrope text-gray-500">
        <span  className="font-manrope text-[#1E1E1E]" >©{new Date().getFullYear()} HB Transportation | All Rights Reserved</span>
        <div className="flex text-[#1E1E1E] text-center justify-center font-manrope gap-6 mt-2 md:mt-0">
          <a href="/terms" className="hover:text-neutral-700">Terms and Conditions</a>
          <a href="/privacy" className="hover:text-neutral-700">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}