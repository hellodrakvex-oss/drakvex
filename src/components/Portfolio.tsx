"use client";

import { m } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { PortfolioCta } from "./PortfolioCta";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const headingItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const Portfolio = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const moreProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="relative z-10 py-24 md:py-32 lg:py-40 px-6"
      aria-label="Selected Work"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <m.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20 lg:mb-28 text-center"
        >
          <m.h2
            variants={headingItem}
            className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold text-white mb-5 md:mb-6"
          >
            Selected <span className="text-brand-blue">Work</span>
          </m.h2>

          <m.p
            variants={headingItem}
            className="text-base md:text-lg text-white/50 font-inter max-w-2xl mx-auto leading-relaxed"
          >
            Every project represents a real business, a unique challenge, and a carefully
            crafted digital solution built by DRAKVEX.
          </m.p>
        </m.div>

        {/* Featured Projects */}
        <div className="space-y-24 md:space-y-28 lg:space-y-32 mb-24 md:mb-28 lg:mb-32">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects */}
        <div className="mb-24 md:mb-32">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-14"
          >
            <h3 className="text-xl md:text-2xl font-space-grotesk font-bold text-white/80">
              More Projects
            </h3>
            <div className="mt-2 w-12 h-0.5 bg-brand-blue/50 rounded-full" />
          </m.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {moreProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <PortfolioCta />
      </div>
    </section>
  );
};
