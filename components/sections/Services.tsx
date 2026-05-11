
import Link from "next/link";
const services = [
  {
    title: "Architecture",
    description:
      "Timeless architectural concepts crafted with cinematic vision, refined proportions, and immersive spatial storytelling.",
    number: "01",
    href: "/services/architecture",
  },

  {
    title: "Interior Design",
    description:
      "Luxury interior environments blending atmosphere, texture, light, and contemporary elegance.",
    number: "02",
    href: "/services/interior-design",
  },

  {
    title: "Luxury Villas",
    description:
      "Ultra-premium villa experiences designed for privacy, sophistication, and elevated modern living.",
    number: "03",
    href: "/services/luxury-villas",
  },

  {
    title: "Smart Homes",
    description:
      "Intelligent living systems integrated seamlessly into modern luxury architecture.",
    number: "04",
    href: "/services/smart-homes",
  },
];

import GsapReveal from "@/components/animations/GsapReveal";
export default function Services() {
  return (
    <section className="relative py-32 md:py-44 bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

      {/* RED ATMOSPHERIC GLOW */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#A0001C]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP CONTENT */}
        
 <GsapReveal>
  <div className="max-w-3xl mb-20">

          <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
            Luxury Services
          </p>

          <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
            Curated Spaces
            <br />
            Crafted For
            <br />
            Elevated Living
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            MADOTA delivers immersive architectural and interior experiences
            blending cinematic storytelling, refined materials, and timeless luxury.
          </p>

        </div>
        </GsapReveal>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {services.map((service) => (
  <Link
    href={service.href}
    key={service.number}
    className="group relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-10 md:p-14 hover:border-[#A0001C]/40 transition duration-700 overflow-hidden hover:-translate-y-2 block"
  >

    {/* HOVER GLOW */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#A0001C]/0 via-[#A0001C]/0 to-[#A0001C]/10 opacity-0 group-hover:opacity-100 transition duration-500" />

    {/* NUMBER */}
    <p className="text-[#A0001C] text-sm tracking-[0.3em] mb-10">
      {service.number}
    </p>

    {/* TITLE */}
    <h3 className="text-4xl md:text-5xl font-light mb-6">
      {service.title}
    </h3>

    {/* DESCRIPTION */}
    <p className="text-neutral-400 leading-relaxed mb-10 max-w-md">
      {service.description}
    </p>

    {/* LINK TEXT */}
    <p className="uppercase tracking-[0.3em] text-sm text-white group-hover:text-[#A0001C] transition">
      Explore Service
    </p>

  </Link>
))}

        </div>

      </div>

    </section>
  );
}