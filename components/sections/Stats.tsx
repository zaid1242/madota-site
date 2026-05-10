const stats = [
  {
    number: "12+",
    label: "Years Experience",
  },
  {
    number: "180+",
    label: "Luxury Projects",
  },
  {
    number: "35+",
    label: "Global Clients",
  },
  {
    number: "08",
    label: "Design Awards",
  },
];

export default function Stats() {
  return (
    <section className="relative py-32 md:py-40 bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

      {/* RED GLOW */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-[#A0001C]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP CONTENT */}
        <div className="text-center max-w-4xl mx-auto mb-24">

          <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
            MADOTA Experience
          </p>

          <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
            Creating Timeless
            <br />
            Luxury Experiences
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Our work combines cinematic architecture, immersive interiors,
            and refined craftsmanship to shape exceptional living environments.
          </p>

        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-10 md:p-14 text-center"
            >

              {/* NUMBER */}
              <h3 className="text-5xl md:text-7xl font-light text-[#A0001C] mb-6">
                {stat.number}
              </h3>

              {/* LABEL */}
              <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-neutral-400">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}