import Navbar from "@/components/layout/Navbar";
import CTAFooter from "@/components/sections/CTAFooter";
import PageTransition from "@/components/layout/PageTransition";
import Link from "next/link";

const services = [
  {
    title: "Architecture",
    description:
      "Timeless architectural environments crafted through cinematic luxury and refined spatial storytelling.",

    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop",

    href: "/services/architecture",
  },

  {
    title: "Interior Design",
    description:
      "Immersive interior experiences blending atmosphere, materiality, and contemporary elegance.",

    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",

    href: "/services/interior-design",
  },

  {
    title: "Luxury Villas",
    description:
      "Ultra-premium villas designed for privacy, emotional living, and timeless modern luxury.",

    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",

    href: "/services/luxury-villas",
  },

  {
    title: "Smart Homes",
    description:
      "Intelligent luxury living systems seamlessly integrated into refined architectural experiences.",

    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",

    href: "/services/smart-homes",
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>

      <main className="bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

        <Navbar />

        {/* HERO */}
        <section className="relative py-32 md:py-44 border-b border-white/10 overflow-hidden">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#A0001C]/10 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

            <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-8">
              Luxury Design Services
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-none font-light max-w-6xl">
              Curated
              <br />
              Architectural
              <br />
              Experiences
            </h1>

          </div>

        </section>

        {/* INTRO */}
        <section className="py-24 md:py-40">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

              {/* LEFT */}
              <div className="lg:col-span-4">

                <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
                  MADOTA Services
                </p>

              </div>

              {/* RIGHT */}
              <div className="lg:col-span-8">

                <h2 className="text-4xl md:text-6xl leading-tight font-light mb-10">
                  Luxury environments
                  designed through emotion,
                  atmosphere, and timeless architecture.
                </h2>

                <p className="text-lg text-neutral-400 leading-relaxed max-w-3xl">
                  Every MADOTA service is crafted to deliver immersive luxury living
                  experiences through cinematic architecture, refined interiors,
                  and elevated design language.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* SERVICES GRID */}
        <section className="pb-24 md:pb-44">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {services.map((service) => (
                <Link
                  href={service.href}
                  key={service.title}
                  className="group block"
                >

                  {/* IMAGE */}
                  <div className="relative overflow-hidden mb-8">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[700px] object-cover group-hover:scale-110 transition duration-[2000ms] ease-out"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition duration-700" />

                  </div>

                  {/* CONTENT */}
                  <div>

                    <p className="uppercase tracking-[0.3em] text-xs text-[#A0001C] mb-4">
                      Luxury Service
                    </p>

                    <h2 className="text-3xl md:text-5xl font-light mb-6">
                      {service.title}
                    </h2>

                    <p className="text-neutral-400 leading-relaxed max-w-xl mb-8">
                      {service.description}
                    </p>

                    <p className="uppercase tracking-[0.3em] text-xs text-white/70 group-hover:text-[#A0001C] transition duration-500">
                      Explore Service
                    </p>

                  </div>

                </Link>
              ))}

            </div>

          </div>

        </section>

        <CTAFooter />

      </main>

    </PageTransition>
  );
}