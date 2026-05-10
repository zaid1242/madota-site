const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding the vision, lifestyle, atmosphere, and architectural aspirations behind every project.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Crafting cinematic spatial concepts that merge emotion, luxury, and timeless architectural identity.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Refining every detail through immersive layouts, premium materials, and elevated aesthetics.",
  },
  {
    number: "04",
    title: "Construction",
    description:
      "Executing projects with precision craftsmanship, luxury finishes, and architectural excellence.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "Presenting a completed environment that embodies timeless luxury and cinematic living.",
  },
];

export default function Process() {
  return (
    <section className="relative py-32 md:py-44 bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

      {/* RED ATMOSPHERIC GLOW */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#A0001C]/10 blur-3xl rounded-full -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP CONTENT */}
        <div className="max-w-4xl mb-24">

          <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
            Our Process
          </p>

          <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
            A Refined Journey
            <br />
            From Vision
            <br />
            To Reality
          </h2>

          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            Every MADOTA project follows a cinematic design methodology —
            balancing architecture, emotion, luxury, and immersive storytelling.
          </p>

        </div>

        {/* PROCESS LIST */}
        <div className="space-y-6">

          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12 hover:border-[#A0001C]/30 transition duration-500"
            >

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* NUMBER */}
                <div className="lg:col-span-2">
                  <p className="text-[#A0001C] text-lg tracking-[0.3em]">
                    {step.number}
                  </p>
                </div>

                {/* TITLE */}
                <div className="lg:col-span-3">
                  <h3 className="text-3xl md:text-4xl font-light">
                    {step.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <div className="lg:col-span-7">
                  <p className="text-neutral-400 leading-relaxed text-lg max-w-2xl">
                    {step.description}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}