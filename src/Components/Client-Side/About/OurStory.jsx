export function OurStory() {
  return (
    <section className="bg-[#3A3A3A]">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-20 grid md:grid-cols-2 gap-10 ">
        <div>
          <h2 className="text-3xl font-manrope md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-neutral-300 font-manrope  leading-7 md:leading-relaxed text-sm md:text-base mb-8">
            HB Transportation was founded in 2008 by Sarbjit Hayer, who started the company with a single truck, a reefer, and one driver hauling produce across the Pacific Northwest.
          </p>
          <p className="text-neutral-300 font-manrope leading-7  md:leading-relaxed text-sm md:text-base">
            Nearly two decades later, his vision still drives HB. As a family-owned business, we've grown into an asset-based carrier with deep roots in produce, now operating across nearly all Western states — and we've built relationships with customers that have lasted since the very beginning. We're still building new ones every day, because we still pick up the phone, still treat every load like it matters, and still operate with the same integrity Sarbjit founded HB on. Today HB Transportation is a family-owned and operated carrier hauling refrigerated and dry freight across the Western U.S. for shippers who value reliability, communication, and long-term partnership.
          </p>
        </div>
        <div className=" rounded-xl md:rounded-sm overflow-hidden">
          <img src="/Images/about/ourstory.webp" alt="HB truck" className="w-full  md:h-108 object-cover" />
        </div>
      </div>
    </section>
  );
}