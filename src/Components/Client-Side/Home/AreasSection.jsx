// components/AreasSection.jsx
// Server Component - SSG compatible

const stats = [
  { v: "99%", l: "On-Time Delivery" },
  { v: "20+", l: "Years Experience" },
  { v: "100+", l: "Trusted Clients" },
  { v: "24/7", l: "Dispatch Support" },
];

function StatValue({ value }) {
  return (
    <span>
      {value.split("").map((char, i) =>
        /[0-9]/.test(char) ? (
          <span key={i} className="font-bold">{char}</span>
        ) : (
          <span key={i} className="font-normal">{char}</span>
        )
      )}
    </span>
  );
}

export default function AreasSection() {
  return (
    <section id="areas" className="bg-[#383838] py-20">
      <div className="md:mx-auto md:px-6 grid md:grid-cols-2 gap-12 md:gap-120 items-center">
        
        {/* Left side */}
        <div>
          <div className="text-center">
            <h2 className="text-4xl text-[#FFFFFF] font-manrope font-bold">Areas Covered</h2>
            <p className="text-gray-400  md:whitespace-nowrap text-md md:text-lg md:ml-21 font-manrope mt-3">
              Asset-based services across the western U.S
            </p>
          </div>

          {/* ✅ Image fix — w-full h-auto, parent overflow-hidden hata diya */}
          <img
            src="/Images/usa.webp"
            alt="HB Transportation coverage map across Western United States"
            className="md:mt-40 mt-13 w-full md:ml-60 h-auto object-contain md:scale-200"
            loading="lazy"
          />

          <div className="flex items-center justify-center sm:ml-10 md:ml-20 gap-6 md:mt-28 opacity-60">
            <img src="/Images/leafwhite.webp" className=" h-14 md:h-19" alt="" />
            <img src="/Images/circlewhite.webp" className=" h-22 md:h-30" alt="" />
          </div>
        </div>

        {/* Right side — stats card */}
        <div className="justify-center mx-6 flex ">
          <div className="bg-[#1F1F1F] w-full  md:max-w-xs py-10 rounded-sm space-y-12">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-5xl font-poppins text-white">
                  <StatValue value={s.v} />
                </div>
                <div className="text-sm font-manrope text-gray-400 mt-4">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}