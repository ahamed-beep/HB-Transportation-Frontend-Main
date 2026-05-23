import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative flex items-center justify-center min-h-[300px] md:min-h-[380px] py-20 px-6 overflow-hidden" aria-labelledby="cta-heading">
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <Image
          src="/Images/contact/ctamob.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        {/* Desktop Image */}
        <Image
          src="/Images/contact/ctadesk.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center hidden md:block"
        />
        <div className="absolute inset-0 bg-white/8" />
      </div>

      <div className="relative z-10  mx-auto text-center text-white">
        <h2 id="cta-heading" className="text-3xl font-manrope md:text-5xl font-bold mb-8">
          Need Quick Help?
        </h2>
        <p className="text-gray-300 font-manrope text-sm md:text-lg mb-8   md:leading-8">
          For urgent inquiries or shipment updates,
          <br />
          feel free to reach out directly — our team is ready to assist you.
        </p>

        <div className="flex justify-center text-center items-center gap-4 flex-wrap">
          <Link
            href="tel:+15306732116"
            className="bg-white text-[#1E1E1E] font-semibold font-manrope px-8 py-2 rounded-full text-sm  hover:bg-gray-200 transition"
          >
            Call Us
          </Link>
          <Link
            href="/under-construction"
            className="bg-white/8 border font-manrope border-white/40 text-[#FAFAFA] px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition"
          >
            Track Shipment
          </Link>
        </div>
      </div>
    </section>
  );
}