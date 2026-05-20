const steps = [
  { n: "01", t: "Request a Quote", active: true },
  { n: "02", t: "Confirm Your Shipment", active: false },
  { n: "03", t: "Track Shipment", active: false },
  { n: "04", t: "We Deliver On Time", active: false },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#383838] pb-18 md:py-10">
      <div className="max-w-7xl mx-auto mb-10 px-6">
        <h2 className="text-2xl md:text-4xl font-manrope font-bold text-center mb-16 text-[#FFFFFF]">
          Simple & Reliable Process
        </h2>

        {/* ── DESKTOP ── */}
        <div className="hidden md:flex items-start justify-between">
          {steps.map((s, i) => (
            <div key={s.n} className="group relative flex flex-col items-center flex-1">
              {i !== 0 && (
                <div
                  className="absolute top-8 border-t-2 border-dashed border-neutral-600"
                  style={{ left: "calc(-50% + 40px)", right: "calc(50% + 40px)" }}
                />
              )}
              <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold font-manrope transition-all duration-200 group-hover:scale-110 ${
                s.active
                  ? "bg-white text-[#191919]"
                  : "bg-[#2A2A2A] text-gray-400 group-hover:bg-white group-hover:text-[#191919]"
              }`}>
                <svg
                  className={`absolute -left-2.5 w-5 h-5 text-white bg-neutral-900 rounded-full p-0.5 transition-opacity duration-200 ${
                    s.active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {s.n}
              </div>
              <p className={`mt-4 text-sm font-manrope text-center transition-colors duration-200 ${
                s.active
                  ? "text-white font-medium"
                  : "text-gray-400 group-hover:text-white group-hover:font-medium"
              }`}>
                {s.t}
              </p>
            </div>
          ))}
        </div>

        {/* ── MOBILE ── */}
        <div className="flex md:hidden flex-col items-center">
          {steps.map((s, i) => (
            <div key={s.n} className="flex flex-col items-center">
              {i !== 0 && (
                <div className="border-l-2 border-dashed border-neutral-600 h-20" />
              )}
              <div className="group flex flex-col items-center">
                <div className={`relative w-25 h-25 rounded-full flex items-center justify-center text-2xl font-bold font-manrope transition-all duration-200 group-hover:scale-105 ${
                  s.active
                    ? "bg-white text-[#191919]"
                    : "bg-[#2A2A2A] text-gray-400 group-hover:bg-white group-hover:text-[#191919]"
                }`}>
                  <svg
                    className={`absolute -left-3 w-6 h-6 text-white bg-neutral-900 rounded-full p-0.5 transition-opacity duration-200 ${
                      s.active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {s.n}
                </div>
                <p className={`mt-3 text-xl font-manrope text-center transition-colors duration-200 ${
                  s.active
                    ? "text-white font-medium"
                    : "text-gray-400 group-hover:text-white group-hover:font-medium"
                }`}>
                  {s.t}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}