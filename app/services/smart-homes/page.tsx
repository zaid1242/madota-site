import Navbar from "@/components/layout/Navbar";
import CTAFooter from "@/components/sections/CTAFooter";
import PageTransition from "@/components/layout/PageTransition";

export default function SmartHomesPage() {
  return (
    <PageTransition>

      <main className="bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

        <Navbar />

        {/* HERO */}
        <section className="relative min-h-screen flex items-end overflow-hidden">

          {/* BACKGROUND */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop')",
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
                Smart Homes
              </p>

              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-none font-light max-w-6xl">
                Intelligent Living
                <br />
                Designed For
                <br />
                The Future
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
                  Smart Living
                </p>

              </div>

              {/* RIGHT */}
              <div className="lg:col-span-8">

                <h2 className="text-4xl md:text-6xl leading-tight font-light mb-10">
                  Seamlessly integrated
                  technology crafted
                  through luxury,
                  intelligence, and atmosphere.
                </h2>

                <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-3xl">
                  MADOTA designs immersive smart home environments where
                  architecture and intelligent automation work together
                  to elevate everyday living experiences.
                </p>

                <p className="text-lg text-neutral-500 leading-relaxed max-w-3xl">
                  From lighting and climate to security and entertainment,
                  every interaction is curated for effortless luxury living.
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
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Smart Home"
                className="w-full h-[850px] object-cover hover:scale-105 transition duration-[3000ms]"
              />

            </div>

          </div>

        </section>

        {/* FEATURES */}
        <section className="py-24 md:py-40 border-t border-white/10">

          <div className="max-w-7xl mx-auto px-6 md:px-10">

            <div className="max-w-4xl mb-20">

              <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
                Smart Home Features
              </p>

              <h2 className="text-5xl md:text-7xl leading-tight font-light">
                Intelligent Luxury
                <br />
                Experiences
              </h2>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {[
                "Automated Lighting",
                "Smart Climate Control",
                "Advanced Security Systems",
                "Integrated Entertainment",
              ].map((feature) => (
                <div
                  key={feature}
                  className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-10 hover:border-[#A0001C]/30 transition duration-500"
                >

                  <h3 className="text-3xl font-light mb-6">
                    {feature}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed">
                    Seamlessly integrated smart living systems crafted for
                    immersive comfort, security, and elevated luxury lifestyles.
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