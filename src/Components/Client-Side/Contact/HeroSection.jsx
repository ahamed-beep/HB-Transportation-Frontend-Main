import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[320px] md:min-h-[420px] py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <Image
          src="/Images/contact/contactheromob.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        {/* Desktop Image */}
        <Image
          src="/Images/contact/contactherodesk.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hidden md:block"
        />
      </div>

      <div className="relative z-10  mx-auto text-center text-white">
        <h1 className="text-4xl font-manrope md:text-6xl font-bold mb-4 leading-12">
          Get in Touch With Our Team
        </h1>
        <p className="text-sm font-manrope  md:text-lg text-gray-300 leading-8">
          Have a question or need help with your shipment?
          <br />
          We&apos;re here to assist you quickly and reliably.
        </p>
      </div>
    </section>
  );
}