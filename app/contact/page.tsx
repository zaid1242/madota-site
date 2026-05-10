import Navbar from "@/components/layout/Navbar";
import CTAFooter from "@/components/sections/CTAFooter";

export default function ContactPage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative py-32 md:py-44 border-b border-white/10 overflow-hidden">

        {/* RED GLOW */}
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#A0001C]/10 blur-3xl rounded-full -translate-x-1/2" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-8">
            Private Consultation
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-none font-light max-w-6xl">
            Let’s Create
            <br />
            Something
            <br />
            Extraordinary
          </h1>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 md:py-40">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* LEFT SIDE */}
            <div className="lg:col-span-4">

              <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
                Contact MADOTA
              </p>

              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-10">
                Begin Your
                <br />
                Luxury Design
                <br />
                Journey
              </h2>

              <div className="space-y-8 text-neutral-400">

                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-white mb-2">
                    Email
                  </p>

                  <p>hello@madota.com</p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-white mb-2">
                    Phone
                  </p>

                  <p>+971 00 000 0000</p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.3em] text-xs text-white mb-2">
                    Studio
                  </p>

                  <p>Dubai, UAE</p>
                </div>

              </div>

            </div>

            {/* FORM */}
            <div className="lg:col-span-8">

              <form className="space-y-8">

                {/* NAME */}
                <div>

                  <label className="block uppercase tracking-[0.3em] text-xs text-neutral-400 mb-4">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent border border-white/10 px-6 py-5 outline-none focus:border-[#A0001C] transition"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block uppercase tracking-[0.3em] text-xs text-neutral-400 mb-4">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border border-white/10 px-6 py-5 outline-none focus:border-[#A0001C] transition"
                  />

                </div>

                {/* PROJECT TYPE */}
                <div>

                  <label className="block uppercase tracking-[0.3em] text-xs text-neutral-400 mb-4">
                    Project Type
                  </label>

                  <select
                    className="w-full bg-[#0A0A0A] border border-white/10 px-6 py-5 outline-none focus:border-[#A0001C] transition"
                  >
                    <option>Luxury Villa</option>
                    <option>Interior Design</option>
                    <option>Architecture</option>
                    <option>Real Estate</option>
                  </select>

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block uppercase tracking-[0.3em] text-xs text-neutral-400 mb-4">
                    Project Vision
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your vision..."
                    className="w-full bg-transparent border border-white/10 px-6 py-5 outline-none focus:border-[#A0001C] transition resize-none"
                  />

                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-5 pt-4">

                  <button
                    type="submit"
                    className="px-10 py-5 bg-[#A0001C] text-white uppercase tracking-[0.2em] text-sm hover:bg-[#7A0015] transition"
                  >
                    Send Inquiry
                  </button>

                  <a
                    href="https://wa.me/971000000000"
                    target="_blank"
                    className="px-10 py-5 border border-white/10 uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition text-center"
                  >
                    WhatsApp
                  </a>

                </div>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* MAP */}
      <section className="pb-24 md:pb-40">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="border border-white/10 overflow-hidden">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="500"
              loading="lazy"
              className="grayscale contrast-125 brightness-75"
            />

          </div>

        </div>

      </section>

      <CTAFooter />

    </main>
  );
}