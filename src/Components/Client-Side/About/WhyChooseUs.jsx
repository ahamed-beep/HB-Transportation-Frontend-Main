"use client";

const features = [
  { i: "alarm",  t: "On-time delivery you can count on" },
  { i: "truck",  t: "Real-time communication & updates with live tracking" },
  { i: "net",    t: "Modern fleet & Vetted drivers" },
  { i: "shield", t: "Safe handling, every mile of the journey" },
];

function Icon({ name }) {
  if (name === "alarm")  return <img className="h-5" src="/Images/about/icon1.webp" />;
  if (name === "truck")  return <img className="h-5" src="/Images/about/icon2.webp" />;
  if (name === "net")    return <img className="h-5" src="/Images/about/icon3.webp" />;
  return <img className="h-5" src="/Images/about/icon4.webp" />;
}

export default function WhyChooseUs() {
  return (
    <section className="bg-[#3A3A3A] flex items-center">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 w-full">
        <h2 className="text-3xl md:text-4xl font-manrope font-bold text-center text-white mb-10 md:mb-18">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left: Image + white bar */}
          <div className="order-2 md:order-1">
            <img
              src="/Images/about/whytrustus.webp"
              alt="Truck on highway"
              className="w-full h-64 sm:h-80 md:h-95 object-cover rounded-md block"
            />
            {/* ✅ sirf yeh — image ke baad normal flow mein, marginTop negative */}
            <div
              className="bg-[#D9D9D9] h-7 rounded-xl mx-auto"
              style={{ marginTop: "-13px", width: "86%" }}
            />
          </div>

          {/* Right: Feature list */}
          <div className="order-1 md:order-2 space-y-4 md:space-y-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 border border-white/10 px-5 py-6 ${
                  i === 2
                    ? "bg-[#FFFFFF]/15 border-2 border-[#FFFFFF]"
                    : "bg-[#FFFFFF]/2"
                }`}
              >
                <Icon name={f.i} />
                <span className="text-sm md:text-base font-manrope text-neutral-200">
                  {f.t}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}