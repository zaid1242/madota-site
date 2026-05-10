"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import FadeUp from "@/components/animations/FadeUp";
export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-[#F5F5F5]">
      
      {/* VIDEO BACKGROUND */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover scale-110"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#7A0015]/30 to-black/80" />

      {/* RED GLOW */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[#A0001C]/30 blur-3xl rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
          
          <FadeUp>
  <div className="max-w-4xl">
            
            {/* EYEBROW */}
            <p className="uppercase tracking-[0.4em] text-sm text-neutral-300 mb-8">
              Luxury Architecture & Interior Design
            </p>

            {/* HEADING */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[120px] leading-none font-light mb-8">
  Crafting
  <br />
  <span className="text-[#A0001C]">
    Luxury Living
  </span>
</h1>
            {/* DESCRIPTION */}
            <p className="max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed mb-10">
              Architectural masterpieces, immersive interiors,
              and visionary spaces designed for the world’s most refined lifestyles.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              <MagneticButton>

  <button
    className="px-8 py-4 bg-[#A0001C] text-white uppercase tracking-[0.2em] text-sm hover:bg-[#7A0015] transition duration-500"
  >
    Explore Projects
  </button>

</MagneticButton>

              <button className="px-8 py-4 border border-white/20 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition">
                Book Consultation
              </button>

            </div>

          </div>

     </FadeUp>   </div>
      </div>

    </section>
  );
}