import ResourceCard from "./ResourceCard";

/** Static data – move to a CMS / API call if content changes frequently */
const resources = [
  {
    n: "01",
    title: "Introductory Page",
    desc: "This provides a written overview of the company. Find company information, a message from the CEO, and more.",
  },
  {
    n: "02",
    title: "Authority Letter",
    desc: "The Authority Letter is a letter issued by the Federal Motor Carrier Safety Administration (FMCSA), which indicates the motor carrier's right to operate a commercial motor vehicle in order to transport goods or passengers for hire.",
  },
  {
    n: "03",
    title: "W-9",
    desc: "The W-9 is a request for Taxpayer Identification Number and Certification.",
  },
  {
    n: "04",
    title: "Proof of Insurance",
    desc: "Proof of Insurance displays the company's coverage for commercial liability, automobile liability, motor truck cargo, and umbrella coverage.",
  },
  {
    n: "05",
    title: "Directory",
    desc: "Quickly access important contact information such as phone numbers, extensions, and emails of specific employees, in a printable format.",
  },
];

/**
 * ResourcesSection – Introductory copy + scrollable list of resource cards.
 */
export default function ResourcesSection() {
  return (
    <section
      id="resources"
      aria-labelledby="resources-heading"
      className="px-5 bg-[#383838] md:px-23 py-16 md:py-18  mx-auto"
    >
      <h2
        id="resources-heading"
        className="text-4xl font-manrope md:text-6xl font-extrabold mb-6 md:mb-12"
      >
        Resources
      </h2>

      <p className="text-gray-300 max-w-3xl text-sm md:text-base leading-7 md:leading-8">
        At HB Transportation, we&apos;re committed to providing our drivers and
        partners with the tools and resources they need to ensure both driver
        safety and the secure transport of every load.
      </p>
      <p className="text-gray-300 max-w-3xl leading-7 text-sm md:text-base mt-1 md:mt-7">
        To access the documents included in our carrier packet, please refer to
        the list below.
      </p>

      <div className="mt-10 md:mt-14 space-y-5">
        {resources.map((r) => (
          <ResourceCard key={r.n} {...r} />
        ))}
      </div>
    </section>
  );
}