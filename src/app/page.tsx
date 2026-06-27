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

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
      ],
    },
    {
      "@type": "Service",
      name: "Website Development",
      provider: { "@type": "Organization", name: "DRAKVEX" },
      description:
        "Website development is the process of designing and building high-performance marketing websites and scalable web applications. DRAKVEX builds websites using Next.js, React, TypeScript, and Tailwind CSS, optimized for speed, security, and search engines.",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      name: "AI Automation",
      provider: { "@type": "Organization", name: "DRAKVEX" },
      description:
        "AI automation uses artificial intelligence to automate repetitive tasks, streamline workflows, and reduce manual effort. DRAKVEX builds custom AI agents, chatbots, and automation systems for businesses.",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      name: "UI/UX Design",
      provider: { "@type": "Organization", name: "DRAKVEX" },
      description:
        "UI/UX design creates user interfaces and experiences that make digital products intuitive and visually appealing. DRAKVEX creates premium, user-centric designs that help businesses convert visitors into customers.",
      areaServed: "Worldwide",
    },
    {
      "@type": "Service",
      name: "Branding",
      provider: { "@type": "Organization", name: "DRAKVEX" },
      description:
        "Branding creates unique identities for businesses through logos, design systems, and visual guidelines. DRAKVEX creates complete brand identities that help businesses stand out in their market.",
      areaServed: "Worldwide",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
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
    </>
  );
}
