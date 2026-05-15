import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Features } from "@/components/Features";
import { Process } from "@/components/Process";
import { TechMarquee } from "@/components/TechMarquee";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full overflow-hidden">
      <Navbar />
      <Hero />
      <div className="w-full relative bg-black/80 backdrop-blur-3xl pt-20">
        <BentoGrid />
        <Services />
        <Portfolio />
        <Features />
        <Process />
        <TechMarquee />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
