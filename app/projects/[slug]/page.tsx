import Navbar from "@/components/layout/Navbar";
import CTAFooter from "@/components/sections/CTAFooter";

export default function SingleProjectPage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 p-10 md:p-20">
          <p className="uppercase tracking-[0.3em] text-sm text-[#A0001C] mb-4">
            Luxury Villa
          </p>

          <h1 className="text-5xl md:text-8xl font-light mb-6">
            Skyline Villa
          </h1>

          <p className="text-neutral-400 uppercase tracking-[0.2em] text-sm">
            Dubai, UAE • 2026
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 md:py-40">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-10">
            A cinematic architectural experience designed for timeless luxury.
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed mb-8">
            Skyline Villa blends immersive architecture, emotional atmosphere,
            and refined luxury materials into one timeless living experience.
          </p>

          <p className="text-lg text-neutral-500 leading-relaxed">
            Every space was crafted with cinematic composition, premium
            textures, and elevated modern elegance.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
            alt="Interior"
            className="w-full h-[700px] object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop"
            alt="Architecture"
            className="w-full h-[700px] object-cover"
          />
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}