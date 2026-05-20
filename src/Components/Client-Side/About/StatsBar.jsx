const stats = [
  { v: "99%", l: "On-Time Delivery" },
  { v: "20+", l: "Years Experience" },
  { v: "100+", l: "Trusted Clients" },
  { v: "24/7", l: "Dispatch Support" },
];

export function StatsBar() {
  return (
    <section className="bg-[#1F1F1F] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.l}>
            <div className="text-4xl text-[#FFFFFF] font-poppins md:text-5xl font-bold">{s.v}</div>
            <div className="text-neutral-400 font-manrope text-sm mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}