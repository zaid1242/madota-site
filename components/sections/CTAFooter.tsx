import Image from "next/image";
export default function CTAFooter() {
  return (
    <>
      {/* CTA SECTION */}
      <section className="relative py-40 md:py-52 bg-[#050505] text-[#F5F5F5] overflow-hidden">

        {/* ATMOSPHERIC GLOW */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#A0001C]/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">

          {/* EYEBROW */}
          <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-8">
            Private Consultation
          </p>

          {/* HEADING */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl leading-tight font-light mb-10">
            Let’s Create
            <br />
            Your Next
            <br />
            Luxury Experience
          </h2>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto mb-14">
            Connect with MADOTA to craft immersive architectural,
            interior, and luxury living experiences tailored to your vision.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            <button className="px-10 py-5 bg-[#A0001C] text-white uppercase tracking-[0.2em] text-sm hover:bg-[#7A0015] transition">
              Book Consultation
            </button>

            <button className="px-10 py-5 border border-white/10 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition">
              Explore Projects
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* BRAND */}
            <div className="lg:col-span-5">

              <Image
  src="/branding/logo-white.png"
  alt="MADOTA"
  width={140}
  height={40}
  priority
  className="object-contain mb-6"
/>

              <p className="text-neutral-400 leading-relaxed max-w-md">
                Cinematic architecture, immersive interiors,
                and timeless luxury living experiences crafted with
                refined elegance and visionary design.
              </p>

            </div>

            {/* LINKS */}
            <div className="lg:col-span-2">

              <p className="uppercase tracking-[0.3em] text-sm text-[#A0001C] mb-6">
                Navigation
              </p>

              <div className="flex flex-col gap-4 text-neutral-400">

                <a href="/" className="hover:text-white transition">
                  Home
                </a>

                <a href="/about" className="hover:text-white transition">
                  About
                </a>

                <a href="/projects" className="hover:text-white transition">
                  Projects
                </a>

                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>

              </div>

            </div>

            {/* CONTACT */}
            <div className="lg:col-span-2">

              <p className="uppercase tracking-[0.3em] text-sm text-[#A0001C] mb-6">
                Contact
              </p>

              <div className="flex flex-col gap-4 text-neutral-400">

                <p>ARENCO Tower Unit 604, Media City Sheikh Zayed Rd Dubai</p>
                <p>Info@madotadesign.com</p>
                <p>+971 54 228 9058</p>

              </div>

            </div>

            {/* SOCIAL */}
            <div className="lg:col-span-3">

              <p className="uppercase tracking-[0.3em] text-sm text-[#A0001C] mb-6">
                Social
              </p>

              <div className="flex flex-col gap-4 text-neutral-400">

                <a href="https://www.instagram.com/madotadesignandbuild?igsh=MWRoYXhibDc0NmJzNw==" className="hover:text-white transition">
                  Instagram
                </a>

                <a href="https://www.linkedin.com/company/madota/" className="hover:text-white transition">
                  LinkedIn
                </a>

              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-sm text-neutral-500">
              © 2026 MADOTA. All rights reserved.
            </p>

            <p className="text-sm text-neutral-500 uppercase tracking-[0.2em]">
              Cinematic Luxury Living
            </p>

          </div>

        </div>

      </footer>
    </>
  );
}