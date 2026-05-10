import Navbar from "@/components/layout/Navbar";
import CTAFooter from "@/components/sections/CTAFooter";

export default function AboutPage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">

        {/* IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* RED GLOW */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#A0001C]/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-8">
            About MADOTA
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-none font-light max-w-5xl">
            Designing
            <br />
            Cinematic Luxury
            <br />
            Experiences
          </h1>

        </div>

      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 md:py-44">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* LEFT */}
            <div className="lg:col-span-4">

              <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
                Our Philosophy
              </p>

            </div>

            {/* RIGHT */}
            <div className="lg:col-span-8">

              <h2 className="text-4xl md:text-6xl leading-tight font-light mb-10">
                Architecture is not simply
                about buildings —
                it is about emotion,
                atmosphere, and experience.
              </h2>

              <p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-3xl">
                At MADOTA, we believe every environment should tell a story.
                Through cinematic composition, refined materials, and timeless
                architectural language, we craft immersive spaces designed
                for elevated modern living.
              </p>

              <p className="text-lg text-neutral-500 leading-relaxed max-w-3xl">
                Every detail — from light and texture to proportion and flow —
                is carefully orchestrated to create emotionally resonant luxury experiences.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* IMAGE SECTION */}
      <section className="pb-24 md:pb-44">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Interior"
              className="w-full h-[700px] object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Villa"
              className="w-full h-[700px] object-cover"
            />

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="py-24 md:py-40 border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="max-w-4xl mb-20">

            <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
              Core Values
            </p>

            <h2 className="text-5xl md:text-7xl leading-tight font-light">
              Crafted With
              <br />
              Precision & Emotion
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              "Timeless Luxury",
              "Cinematic Storytelling",
              "Architectural Precision",
            ].map((value) => (
              <div
                key={value}
                className="border border-white/10 bg-white/[0.02] p-10"
              >

                <h3 className="text-3xl font-light mb-6">
                  {value}
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  Every MADOTA project is crafted with immersive design thinking,
                  refined materiality, and elevated architectural vision.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      <CTAFooter />

    </main>
  );
}