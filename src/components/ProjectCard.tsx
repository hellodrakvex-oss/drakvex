"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BrowserFrame } from "./ui/BrowserFrame";
import { StatusBadge } from "./ui/StatusBadge";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Main card */}
      <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500 group-hover:border-white/[0.12] group-hover:bg-white/[0.04] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.06)]">
        {/* Top inner glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated border glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-purple/5" />
        </div>

        {/* Browser Frame */}
        <BrowserFrame
          src={project.image}
          alt={`${project.title} website screenshot`}
          url={project.url}
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-inter font-medium hover:bg-white/90 transition-colors">
              Visit Website
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </BrowserFrame>

        {/* Card Content */}
        <div className="p-5 md:p-6 space-y-4">
          {/* Top row: Status + Category */}
          <div className="flex items-center justify-between gap-3">
            <StatusBadge status={project.status} />
            <span className="text-[10px] font-inter text-white/30 tracking-wider uppercase shrink-0">
              {project.industry}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-space-grotesk font-bold text-white group-hover:text-brand-blue transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-white/50 font-inter leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-[10px] font-inter font-medium rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Visit Link */}
          <div className="pt-1">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-inter text-white/50 hover:text-brand-blue transition-colors duration-300 group/link"
            >
              Visit Website
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </m.div>
  );
};
