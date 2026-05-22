export default function QuoteHero() {
  return (
    <section
      aria-label="Get a quote hero banner"
      className="relative bg-cover bg-center
        [background-image:url('/Images/quote/mobilequotehero.webp')]
        md:[background-image:url('/Images/quote/quotehero.webp')]"
    >
      <div className="mx-auto px-6 py-20 md:py-27 text-center">
        <h1 className="text-4xl font-manrope md:text-7xl font-extrabold leading-13 md:leading-20 tracking-tight">
          Get a Quote in
          <br />
          Hours, Not Days
        </h1>
        <p className="mt-4 font-manrope text-md md:text-xl leading-8 text-gray-200 max-w-xl mx-auto">
          Tell us about your load and we&apos;ll get back to you the same business
          day with pricing and availability.
        </p>
      </div>
    </section>
  );
}