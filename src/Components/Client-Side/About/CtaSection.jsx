export function CtaSection() {
  return (
    <section className="bg-[#000000]">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
        <h2 className="text-3xl font-manrope md:text-4xl font-bold mb-6">Let's Move Your Freight The Right Way</h2>
        <p className="text-neutral-400 font-manrope text-sm md:text-base max-w-xl mx-auto">
          Whether you need fast delivery or temperature-controlled transport, we're here to get it done right.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/quote" className="bg-white text-[#1E1E1E] font-semibold rounded-full px-6 py-2.5 text-sm font-medium hover:bg-neutral-200 transition">Get a Quote</a>
          <a href="/contact" className="bg-neutral-800 text-[#FAFAFA] border border-white/10 rounded-full px-6 py-2.5 text-sm font-manrope font-medium hover:bg-neutral-700 transition">Contact Us</a>
        </div>
      </div>
    </section>
  );
}