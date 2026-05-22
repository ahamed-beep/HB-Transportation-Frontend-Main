/**
 * HeroSection – Full-width banner for the Resources page.
 * No props required; content is static.
 */
export default function HeroSection() {
  return (
    <section
      aria-label="Hero banner"
      className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          " url('/Images/resources/resourcehero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-22">
        <p className="text-xl font-manrope  md:text-2xl  text-neutral-400 mb-3 md:mb-5">
          Resources to
        </p>
        <h1 className="text-4xl md:text-7xl font-manrope font-extrabold tracking-tight leading-tight">
          Keep Your Shipments Moving
        </h1>
        <p className="mt-5 md:mt-8 font-manrope leading-7 md:leading-8 text-md md:text-xl  text-neutral-400 max-w-2xl mx-auto">
          Quick access to the documents shippers, brokers, and partners need
          most — from insurance certificates to carrier packets.
        </p>
      </div>
    </section>
  );
}