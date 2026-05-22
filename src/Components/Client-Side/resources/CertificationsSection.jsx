/**
 * CertificationsSection – Displays company compliance badges.
 * Pure server component – no interactivity needed.
 */
export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="px-5 bg-[#383838] md:px-20 py-16 md:py-15  mx-auto text-center"
    >
      <h2
        id="certifications-heading"
        className="text-3xl font-manrope text-[#FFFFFF] md:text-4xl font-bold mb-10"
      >
        Certifications
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* SmartWay */}
        <div
          className="bg-[#D9D9D9]/10 rounded-sm px-10 py-8 w-80 h-36 flex items-center justify-center border border-white/5"
          aria-label="SmartWay Transport Partner certification"
        >
       <img className="" src="/Images/resources/leaf.webp" />
        </div>

         <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* SmartWay */}
        <div
          className="bg-[#D9D9D9]/10 rounded-sm px-10 py-8 w-80 md:w-65 h-45 md:h-36 flex items-center justify-center border border-white/5"
          aria-label="SmartWay Transport Partner certification"
        >
       <img className="" src="/Images/resources/circle.webp" />
        </div>
        </div>
      </div>
    </section>
  );
}