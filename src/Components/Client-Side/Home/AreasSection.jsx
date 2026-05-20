// components/AreasSection.jsx
// Server Component - SSG compatible

const stats = [
  { v: "99%", l: "On-Time Delivery" },
  { v: "20+", l: "Years Experience" },
  { v: "100+", l: "Trusted Clients" },
  { v: "24/7", l: "Dispatch Support" },
];

// Numbers aur symbols alag karta hai
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
      <div className="max-w-7xl md:mx-auto md:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div  >
          <div  className="text-center " >

          <h2 className="text-4xl text-[#FFFFFF] font-manrope font-bold">Areas Covered</h2>
          <p className="text-gray-400 text-md md:text-lg font-manrope mt-3">Asset-based services across the western U.S</p>
          </div>
          <img
            src="/Images/usa.webp"
            alt="HB Transportation coverage map across Western United States"
            className="mt-8  w-full h-full "
            loading="lazy"
          />
          <div className="flex items-center justify-center gap-6 mt-6 opacity-60">
            <img src="/Images/leafwhite.webp" className="h-14 " alt="" />
            <img src="/Images/circlewhite.webp" className="h-22" alt="" />
          </div>
        </div>
        <div className=" justify-center flex px-10 " >

      
        <div className="bg-[#1F1F1F] w-full  md:ml-15 md:max-w-xs py-10 rounded-sm space-y-12">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-5xl font-poppins text-white">
                <StatValue value={s.v} />
              </div>
              <div className="text-sm  font-manrope text-gray-400 mt-4">{s.l}</div>
            </div>
          ))}
        </div>
          </div>
      </div>
    </section>
  );
}