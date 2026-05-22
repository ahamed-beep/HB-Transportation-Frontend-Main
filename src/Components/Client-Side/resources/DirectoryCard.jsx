import { MailOpen, PhoneCall, PhoneOutgoing } from "lucide-react";

/**
 * DirectoryCard – Contact card for a single staff member.
 *
 * @param {{ name: string, designation?: string, phone?: string, email?: string, avatarIndex?: number }} props
 */
export default function DirectoryCard({
  name,
  designation = "Designation",
  phone = "(+1) 923-4141-524",
  email = "Paaji@HbTransportation.com",
  avatarIndex = 10,
}) {
  return (
    <article className="bg-[#D9D9D9]/10 mt-8  rounded-lg p-2.5 min-w-[240px] md:min-w-[260px] snap-start border border-white/5 shrink-0">
      {/* Avatar */}
      <div
        className="w-full h-56 md:h-65 rounded-lg bg-gray-700"
        style={{
          backgroundImage: `url('https://i.pravatar.cc/400?img=${avatarIndex}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="img"
        aria-label={`Photo of ${name}`}
      />

      <div className="mt-4">
        <h4 className=" font-semibold text-lg">{name}</h4>
        <p className="text-gray-400 text-sm mt-1.5 font-manrope">{designation}</p>

        <address className="mt-3 pt-4.5 pb-3 border-[#FFFFFF]/20 border-t  space-y-2 text-sm text-gray-300 not-italic">
          {/* Phone */}
          <div className="flex  items-center gap-2">
     <PhoneCall className="w-4 h-4"  />
            <a href={`tel:${phone}`} className="hover:text-white transition-colors">
              {phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
        <MailOpen className="w-4 h-4" />
            <a
              href={`mailto:${email}`}
              className="hover:text-white transition-colors break-all"
            >
              {email}
            </a>
          </div>
        </address>
      </div>
    </article>
  );
}