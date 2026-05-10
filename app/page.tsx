import PageLoader from "@/components/layout/PageLoader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Process from "@/components/sections/Process";
import CTAFooter from "@/components/sections/CTAFooter";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import PageTransition from "@/components/layout/PageTransition";
export default function Home() {
  return (
    
    <SmoothScroll>
      
<PageTransition>
    <main className="bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden">
      <CustomCursor />
      <PageLoader />
      <Navbar />
      <Hero />
      <AboutPreview />
      <Services />
      <Projects />
      <Stats />
      <Testimonials />
      <Process />
      <CTAFooter />
    </main>
    </PageTransition>
    </SmoothScroll>
  );
}