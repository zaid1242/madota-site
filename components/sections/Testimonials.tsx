const testimonials = [
  {
    quote:
      "MADOTA transformed our vision into a timeless architectural experience that feels both emotional and deeply refined.",
    name: "Alexander Reed",
    role: "Private Villa Client",
  },
  {
    quote:
      "Every detail was curated with cinematic precision. The atmosphere, lighting, and materials created something truly extraordinary.",
    name: "Sophia Laurent",
    role: "Luxury Interior Client",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-44 bg-[#050505] text-[#F5F5F5] overflow-hidden">

      {/* ATMOSPHERIC RED GLOW */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#A0001C]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* TOP CONTENT */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
            Client Experience
          </p>

          <h2 className="text-5xl md:text-7xl leading-tight font-light">
            Designed Beyond
            <br />
            Expectations
          </h2>

        </div>

        {/* TESTIMONIALS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-10 md:p-14"
            >

              {/* QUOTE ICON */}
              <div className="text-[#A0001C] text-6xl leading-none mb-8">
                "
              </div>

              {/* QUOTE */}
              <p className="text-2xl md:text-3xl leading-relaxed font-light mb-12 text-neutral-200">
                {item.quote}
              </p>

              {/* CLIENT */}
              <div>

                <h3 className="text-lg uppercase tracking-[0.2em] mb-2">
                  {item.name}
                </h3>

                <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}