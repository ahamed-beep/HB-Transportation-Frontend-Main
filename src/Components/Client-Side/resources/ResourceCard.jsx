"use client";

/**
 * ResourceCard – Displays a single carrier-packet document entry.
 * Desktop: number left | text center | thumbnail right (unchanged)
 * Mobile:  number top-left + thumbnail top-right | title + desc below
 *
 * @param {{ n: string, title: string, desc: string }} props
 */

const PDF_URL = "/documents/carrier-packet.pdf"; // ← apna PDF path yahan replace karo

export default function ResourceCard({ n, title, desc }) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = PDF_URL;
    link.download = `${title.replace(/\s+/g, "-")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <article className="bg-[#D9D9D966]/8 rounded-sm border border-white/5 px-7">
      {/* ── MOBILE LAYOUT ── */}
      <div className="flex md:hidden flex-col">
        {/* Row 1: number top-left + thumbnail+download top-right */}
        <div className="flex items-start justify-between pt-6">
          <div
            aria-hidden="true"
            className="text-6xl mt-4 font-manrope font-extrabold text-neutral-600 leading-none"
          >
            {n}
          </div>

          <div className="flex flex-col items-center gap-2">
            <div
              className="w-24 h-23 flex justify-center items-center bg-gray-200 rounded-sm"
              role="img"
              aria-label={`${title} preview`}
            >
              <img src="/Images/resources/pdf.webp" className="w-15 h-15" alt="" />
            </div>
            <button
              type="button"
              onClick={handleDownload}
              className="text-xs text-gray-300 hover:text-white flex items-center gap-1 transition-colors mb-1"
              aria-label={`Download ${title}`}
            >
              Download
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Row 2: title + desc */}
        <div className="mt-4 pb-6">
          <h3 className="text-xl font-manrope mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (bilkul unchanged) ── */}
      <div className="hidden md:flex flex-row items-start gap-10">
        <div
          aria-hidden="true"
          className="text-6xl py-10 font-manrope font-extrabold text-neutral-600 shrink-0"
        >
          {n}
        </div>

        <div className="flex-1 mt-5.5">
          <h3 className="text-2xl font-manrope mb-2">{title}</h3>
          <p className="text-gray-300 mb-4 text-base leading-relaxed">{desc}</p>
        </div>

        <div className="flex flex-col items-end gap-2 w-32 shrink-0">
          <div
            className="w-24 mt-5 h-23 flex justify-center items-center bg-gray-200 rounded-sm"
            role="img"
            aria-label={`${title} preview`}
          >
            <img src="/Images/resources/pdf.webp" className="w-15 h-15" alt="" />
          </div>
          <button
            type="button"
            onClick={handleDownload}
            className="text-sm mb-3 text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
            aria-label={`Download ${title}`}
          >
            Download
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}