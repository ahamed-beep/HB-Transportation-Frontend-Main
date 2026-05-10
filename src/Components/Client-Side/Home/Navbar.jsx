"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Open: pehle DOM mein aao, phir animate
  const openMenu = () => {
    setMenuOpen(true);
    setTimeout(() => setVisible(true), 10);
  };

  // Close: pehle animate out, phir DOM se hato
  const closeMenu = () => {
    setVisible(false);
    setTimeout(() => setMenuOpen(false), 300);
  };

  // ESC key se band ho
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") closeMenu(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header>
      {/* TOP BAR */}
      <div className="bg-[#383838]">
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-2 flex items-center justify-between text-sm">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="w-[63px] h-[60px] rounded-full flex items-center justify-center font-serif italic font-bold text-lg">
              <img src="/Images/logo.webp" alt="HB Transportation Logo" />
            </div>
          </div>

          {/* DESKTOP: contact info */}
          <div className="hidden md:flex items-center gap-8 text-[#FFFFFF]">
            <span className="flex text-[16px] items-center gap-2">
              <img src="/Images/phone.webp" className="h-[20px]" alt="" aria-hidden="true" />
              +1 (530) 673-2116
            </span>
            <span className="text-[16px] flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[20px]" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
              </svg>
              Info@hbtinc.org
            </span>
          </div>

          {/* DESKTOP: Track + Drive buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/track" className="px-5 py-2 rounded-full bg-[#FFFFFF] text-[#1E1E1E] text-[16px] font-medium hover:bg-gray-200">Track</a>
            <a href="/drive" className="px-5 py-2 rounded-full bg-[#FFFFFF] text-[#1E1E1E] text-[16px] font-medium hover:bg-gray-200">Drive</a>
          </div>

          {/* MOBILE: Hamburger button */}
          <button
            className="md:hidden text-white p-2"
            onClick={openMenu}
            aria-label="Open navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* DESKTOP NAV LINKS BAR */}
      <div className="hidden md:block bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <nav aria-label="Main navigation" className="flex items-center gap-8 text-[19px] text-[#191919]">
            <a href="/" className="hover:text-gray-500">Home</a>
            <a href="/about" className="hover:text-gray-500">About</a>
            <a href="/resources" className="hover:text-gray-500">Resources</a>
            <a href="/quote" className="hover:text-gray-500">Quote</a>
            <a href="/contact" className="hover:text-gray-500">Contact Us</a>
          </nav>
          <div className="text-[19px] text-[#191919]">Office Hours: M-F 7am-5pm</div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      {menuOpen && (
        <>
          {/* Overlay - fade in/out */}
          <div
            className="fixed inset-0 z-40 md:hidden transition-opacity duration-300"
            style={{ backgroundColor: visible ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)" }}
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Sidebar - slide in from right */}
          <div
            className="fixed top-0 right-0 h-full w-[280px] bg-[#383838] z-50 md:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-in-out"
            style={{ transform: visible ? "translateX(0)" : "translateX(100%)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-700">
              <img src="/Images/logo.webp" alt="HB Transportation Logo" className="h-[48px]" />
              <button onClick={closeMenu} aria-label="Close navigation menu" className="text-white p-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <nav aria-label="Mobile navigation" className="flex flex-col px-6 pt-6 gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/resources", label: "Resources" },
                { href: "/quote", label: "Quote" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-white text-[17px] py-3 border-b border-neutral-800 hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 px-6 pt-6 text-[15px] text-gray-300">
              <a href="tel:+15306732116" className="flex items-center gap-3 hover:text-white transition-colors">
                <img src="/Images/phone.webp" className="h-[18px]" alt="" aria-hidden="true" />
                +1 (530) 673-2116
              </a>
              <a href="mailto:info@hbtinc.org" className="flex items-center gap-3 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[18px] shrink-0" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                Info@hbtinc.org
              </a>
              <span className="text-gray-500 text-[13px]">Office Hours: M-F 7am-5pm</span>
            </div>

            {/* Track + Drive buttons */}
            <div className="mt-auto px-6 pb-8 flex flex-col gap-3">
              <a href="/track" className="text-center py-3 rounded-full bg-white text-[#1E1E1E] text-[15px] font-medium hover:bg-gray-200 transition-colors">
                Track
              </a>
              <a href="/drive" className="text-center py-3 rounded-full bg-white text-[#1E1E1E] text-[15px] font-medium hover:bg-gray-200 transition-colors">
                Drive
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}