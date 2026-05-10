"use client";

import StaggerContainer from "@/components/animations/StaggerContainer";
import StaggerItem from "@/components/animations/StaggerItem";

export default function AboutPreview() {
  return (
    <section className="relative py-24 md:py-44 bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#A0001C]/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        <StaggerContainer>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE SIDE */}
          <StaggerItem>
  <div className="relative">

            <div className="overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury Interior"
                className="w-full h-[700px] object-cover"
              />
            </div>

            {/* SMALL FLOATING CARD */}
            <div className="absolute -bottom-10 -right-10 bg-[#111111]/90 backdrop-blur-md border border-white/10 p-8 max-w-xs">
              <p className="uppercase tracking-[0.3em] text-xs text-neutral-400 mb-3">
                MADOTA Philosophy
              </p>

              <p className="text-sm leading-relaxed text-neutral-300">
                We create timeless environments blending architecture,
                emotion, atmosphere, and cinematic luxury living.
              </p>
            </div>

          </div></StaggerItem>

          {/* TEXT SIDE */}
          <div>

            {/* EYEBROW */}
            <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
              About MADOTA
            </p>

            {/* HEADING */}
            <h2 className="text-5xl md:text-7xl leading-tight font-light mb-10">
              Architecture
              <br />
              Designed As
              <br />
              Emotional Experience
            </h2>

            {/* PARAGRAPH */}
            <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl">
              At MADOTA, every space is conceived as a cinematic journey —
              blending architecture, emotion, atmosphere, and refined luxury
              into timeless living experiences.
            </p>

            <p className="text-lg text-neutral-400 leading-relaxed mb-12 max-w-xl">
              We craft immersive environments where light, texture,
              proportion, and storytelling merge into one refined vision
              of contemporary luxury.
            </p>

            {/* BUTTON */}
            <button className="px-8 py-4 bg-[#A0001C] text-white uppercase tracking-[0.2em] text-sm hover:bg-[#7A0015] transition">
              Discover Philosophy
            </button>

          </div>

       
        </div></StaggerContainer>

      </div>

    </section>
  );
}