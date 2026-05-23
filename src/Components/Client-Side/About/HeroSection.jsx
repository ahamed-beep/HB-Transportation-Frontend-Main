import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center
          [background-image:url('/Images/about/mobilehero.webp')]
          md:[background-image:url('/Images/about/abouthero.webp')]"
      />
      <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-32 text-center">
        <p className="text-neutral-400 font-manrope  text-2xl mb-6">Driven by Reliability</p>
        <h1 className="font-extrabold font-manrope tracking-tight text-5xl md:text-7xl mb-6">About Us</h1>
        <p className="text-neutral-300 max-w-4xl mx-auto font-manrope leading-8 md:leading-9 text-md md:text-lg">
          HB Transportation is an asset-based carrier serving the Western United States, with deep roots in the Pacific Northwest. We specialize in refrigerated and dry freight handled by our trucks, our drivers, and our team from pickup to delivery. No subhauling. No middlemen. Just freight, done right.
        </p>
        <div className=" mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-3">
            <Link href="/quote" >
            
          <button className="bg-white text-[#1E1E1E] font-manrope font-semibold rounded-full px-6 py-2 text-sm hover:bg-neutral-200 transition">Get a Quote</button>
            </Link>
            <Link href="/under-construction" >
          <button className="bg-neutral-800/80 border-[#FFFFFF] text-white border rounded-full px-4 py-2 text-sm font-medium font-manrope inline-flex items-center hover:bg-neutral-700 transition">
            Track Shipment
            <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </button>
            </Link>
        </div>
      </div>
    </section>
  );
}