
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import CTAFooter from "@/components/sections/CTAFooter";

const projects = [
  {
    title: "Skyline Villa",
    category: "Luxury Villa",
    location: "Dubai, UAE",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Obsidian Residence",
    category: "Architecture",
    location: "London, UK",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Veloura Interior",
    category: "Interior Design",
    location: "Milan, Italy",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Noir Penthouse",
    category: "Luxury Living",
    location: "New York, USA",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative py-32 md:py-44 border-b border-white/10">

        {/* GLOW */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A0001C]/10 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

          <p className="uppercase tracking-[0.4em] text-sm text-[#A0001C] mb-8">
            Featured Portfolio
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-none font-light max-w-6xl">
            Cinematic
            <br />
            Architecture
            <br />
            Portfolio
          </h1>

        </div>

      </section>

      {/* PROJECTS GRID */}
      <section className="py-24 md:py-40">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {projects.map((project) => (
              <Link
  href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
  key={project.title}
>
                {/* IMAGE */}
                <div className="relative overflow-hidden mb-8">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[700px] object-cover group-hover:scale-110 transition duration-[2000ms] ease-out"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                </div>

                {/* CONTENT */}
                <div className="flex items-end justify-between gap-8">

                  <div>

                    <p className="uppercase tracking-[0.3em] text-xs text-[#A0001C] mb-4">
                      {project.category}
                    </p>

                    <h2 className="text-3xl md:text-5xl font-light mb-4">
                      {project.title}
                    </h2>

                    <p className="text-neutral-500 uppercase tracking-[0.2em] text-sm">
                      {project.location}
                    </p>

                  </div>

                  <div>

                    <p className="text-neutral-500 text-sm tracking-[0.2em]">
                      {project.year}
                    </p>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      <CTAFooter />

    </main>
  );
}