// app/under-construction/page.jsx

import Footer from "@/Components/Client-Side/Home/Footer";
import Navbar from "@/Components/Client-Side/Home/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Under Construction | HB Transportation",
};

export default function UnderConstruction() {
  return (
    <main className="min-h-screen bg-[#1F1F1F] flex flex-col items-center justify-center text-white font-manrope px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">🚧</h1>
      <h2 className="text-3xl md:text-4xl font-bold mt-4">Under Construction</h2>
      <p className="text-gray-400 mt-4 max-w-md text-sm md:text-base">
        We're working hard to bring this page to life. Check back soon.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-3 rounded-full bg-white text-[#1E1E1E] font-semibold text-sm hover:bg-gray-200 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}