"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BrowserFrame } from "./ui/BrowserFrame";
import { StatusBadge } from "./ui/StatusBadge";
import { MagneticButton } from "./ui/MagneticButton";
import type { Project } from "@/data/portfolio";

interface FeaturedProjectProps {
  project: Project;
  index: number;
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const ease = [0.16, 1, 0.3, 1] as const;

const fadeSlideLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
};

export const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <m.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div
        className={`flex flex-col ${
          isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch gap-8 md:gap-10 lg:gap-16`}
      >
        {/* Browser Frame */}
        <m.div
          variants={isReversed ? fadeSlideLeft : fadeSlideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-[58%]"
        >
          <BrowserFrame
            src={project.image}
            alt={`${project.title} website screenshot`}
            url={project.url}
            className="h-full"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="primary">
                Visit Website
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>
            </a>
          </BrowserFrame>
        </m.div>

        {/* Project Info */}
        <m.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-[42%] flex flex-col justify-center gap-5 md:gap-6"
        >
          {/* Status Badge & Industry */}
          <m.div variants={fadeSlideUp} className="flex items-center gap-3 flex-wrap">
            <StatusBadge status={project.status} />
            <span className="text-xs font-inter text-white/40 tracking-wider uppercase">
              {project.industry} &middot; {project.year}
            </span>
          </m.div>

          {/* Category */}
          <m.span
            variants={fadeSlideUp}
            className="text-brand-blue font-inter text-xs md:text-sm uppercase tracking-[0.2em] font-medium"
          >
            {project.category}
          </m.span>

          {/* Title */}
          <m.h3
            variants={fadeSlideUp}
            className="text-2xl md:text-3xl lg:text-4xl font-space-grotesk font-bold text-white leading-tight"
          >
            {project.title}
          </m.h3>

          {/* Description */}
          <m.p
            variants={fadeSlideUp}
            className="text-sm md:text-base text-white/60 font-inter leading-relaxed"
          >
            {project.description}
          </m.p>

          {/* Services Tags */}
          <m.div variants={fadeSlideUp} className="flex flex-wrap gap-2">
            {project.services.map((service, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-[11px] font-inter font-medium rounded-full bg-white/[0.04] border border-white/[0.06] text-white/50 hover:bg-white/[0.08] hover:text-white/70 hover:border-white/[0.12] transition-all duration-300"
              >
                {service}
              </span>
            ))}
          </m.div>

          {/* Tech Stack */}
          <m.div variants={fadeSlideUp} className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <m.span
                key={i}
                className="px-3 py-1 text-[11px] font-inter font-medium rounded-full bg-brand-blue/[0.06] border border-brand-blue/[0.12] text-brand-blue/80 hover:bg-brand-blue/[0.12] hover:text-brand-blue transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05, y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {tech}
              </m.span>
            ))}
          </m.div>

          {/* Visit Button */}
          <m.div variants={fadeSlideUp} className="pt-2">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <MagneticButton variant="secondary">
                Visit Website
                <m.span
                  className="inline-block"
                  initial={{ x: 0, y: 0 }}
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </m.span>
              </MagneticButton>
            </a>
          </m.div>
        </m.div>
      </div>
    </m.div>
  );
};
