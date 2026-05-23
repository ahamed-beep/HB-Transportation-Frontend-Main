import Link from "next/link";

export default function QuoteCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative bg-cover bg-center
        [background-image:url('/Images/quote/ctamob.webp')]
        md:[background-image:url('/Images/quote/ctadesk.webp')]"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-white/4 " />

      <div className="relative  mx-auto px-6 py-16 md:py-20 text-center">
        <h2 id="cta-heading" className="text-2xl font-manrope md:text-4xl font-bold">
          Need Immediate Assistance?
        </h2>
        <p className="mt-7 text-lg text-gray-400 font-manrope  mx-auto">
          Our team is ready to help you plan your shipment quickly and efficiently.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
            <a
        href="tel:+1 (530) 673-2116"
  className="bg-white text-[#1E1E1E] font-semibold text-sm px-8 py-2 rounded-full hover:bg-gray-200 transition"
>
  Call Us
</a>
<Link href='/under-construction' >
          <button className="bg-white/8 text-[#FAFAFA] font-manrope text-sm font-medium px-5 py-2 rounded-full border border-neutral-600 hover:bg-neutral-700 transition">
            Track Shipment
          </button>
</Link>
        </div>
      </div>
    </section>
  );
}