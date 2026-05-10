const projects = [
  {
    title: "Skyline Villa",
    category: "Luxury Villa",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Obsidian Residence",
    category: "Architecture",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Veloura Interior",
    category: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section className="relative py-32 md:py-44 bg-[#050505] text-[#F5F5F5] overflow-hidden">

      {/* ATMOSPHERIC GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A0001C]/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-6">
              Featured Projects
            </p>

            <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
              Cinematic Spaces
              <br />
              Designed For
              <br />
              Timeless Luxury
            </h2>

          </div>

          <p className="max-w-xl text-lg text-neutral-400 leading-relaxed">
            Explore immersive architectural experiences where modern elegance,
            atmosphere, and cinematic design language converge into timeless living.
          </p>

        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LARGE PROJECT */}
          <div className="lg:col-span-7 group cursor-pointer">

            <div className="relative overflow-hidden">

              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-[700px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-10 md:p-14">

                <p className="uppercase tracking-[0.3em] text-sm text-[#A0001C] mb-4">
                  {projects[0].category}
                </p>

                <h3 className="text-4xl md:text-6xl font-light">
                  {projects[0].title}
                </h3>

              </div>

            </div>

          </div>

          {/* SMALL PROJECTS */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {projects.slice(1).map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden cursor-pointer"
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[335px] object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-8">

                  <p className="uppercase tracking-[0.3em] text-xs text-[#A0001C] mb-3">
                    {project.category}
                  </p>

                  <h3 className="text-3xl md:text-4xl font-light">
                    {project.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}