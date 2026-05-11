import Navbar from "@/components/layout/Navbar";
import CTAFooter from "@/components/sections/CTAFooter";
import PageTransition from "@/components/layout/PageTransition";

export default function ArchitecturePage() {
  return (
    <PageTransition>

      <main className="bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

        <Navbar />

        {/* HERO */}
        <section className="relative min-h-screen flex items-end overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop')",
            }}
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

          {/* RED GLOW */}
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#A0001C]/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

          {/* CONTENT */}
          <div className="relative z-10 w-full px-6 md:px-10 pb-20 md:pb-28">

            <div className="max-w-7xl mx-auto">

              <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-8">
                Luxury Architecture
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-none font-light max-w-6xl">
                Architecture
                <br />
                Designed For
                <br />
                Timeless Living
              </h1>

            </div>

          </div>

        </section>

        {/* INTRO */}
        <section className="py-24 md:py-44">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

              {/* LEFT */}
              <div className="lg:col-span-4">

                <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
                  Architectural Vision
                </p>

              </div>

              {/* RIGHT */}
              <div className="lg:col-span-8">

                <h2 className="text-4xl md:text-6xl leading-tight font-light mb-10">
                  Cinematic architecture
                  crafted through atmosphere,
                  precision, and emotion.
                </h2>

                <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-3xl">
                  MADOTA creates immersive architectural environments where
                  modern luxury, refined proportions, and timeless design
                  language converge into extraordinary living experiences.
                </p>

                <p className="text-lg text-neutral-500 leading-relaxed max-w-3xl">
                  Every structure is carefully designed to balance spatial flow,
                  light, materiality, and emotional atmosphere.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURE IMAGE */}
        <section className="pb-24 md:pb-44">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Architecture"
                className="w-full h-[800px] object-cover hover:scale-105 transition duration-[3000ms]"
              />

            </div>

          </div>

        </section>

        {/* SERVICES */}
        <section className="py-24 md:py-40 border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="max-w-4xl mb-20">

              <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
                Architecture Services
              </p>

              <h2 className="text-5xl md:text-7xl leading-tight font-light">
                Elevated Architectural
                <br />
                Experiences
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {[
                "Luxury Villas",
                "Contemporary Residences",
                "Smart Home Architecture",
                "Private Estates",
              ].map((service) => (
                <div
                  key={service}
                  className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-10 hover:border-[#A0001C]/30 transition duration-500"
                >

                  <h3 className="text-3xl font-light mb-6">
                    {service}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed">
                    Bespoke architectural environments designed with cinematic
                    luxury, immersive atmosphere, and refined modern aesthetics.
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        <CTAFooter />

      </main>

    </PageTransition>
  );
}