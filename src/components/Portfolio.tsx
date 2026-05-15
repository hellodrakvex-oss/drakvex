"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";
import Image from "next/image";

const projects = [
  {
    title: "Mithilaipatti.in",
    category: "Cultural Community Platform",
    tech: ["Html", "Css", "js"],
    link: "https://www.mithilaipatti.in",
    image: "/projects/Mithilaipatti.png",
    color: "from-amber-500/20 to-orange-500/5",
  },
  {
    title: "AgriHubTN.com",
    category: "Modern Agriculture Commerce Platform",
    tech: ["Html", "Css", "Js", "Node.js", "MongoDB", "Stripe"],
    link: "https://www.agrihubtn.com",
    image: "/projects/AgriHubTN.png",
    color: "from-green-500/20 to-emerald-500/5",
  },
  {
    title: "NammaThaiyalKadai.in",
    category: "Fashion & Tailoring Business Website",
    tech: ["Html", "Css", "js"],
    link: "https://www.nammathaiyalkadai.in",
    image: "/projects/NammaThaiyalKadai.png",
    color: "from-pink-500/20 to-rose-500/5",
  },
];

export const Portfolio = () => {
  return (
    <section id="work" className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6"
        >
          Elite Digital <span className="text-brand-blue">Showcase</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 font-inter text-lg max-w-2xl mx-auto"
        >
          Explore our recent world-class products designed and engineered for modern businesses.
        </motion.p>
      </div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
          >
            {/* Project Mockup */}
            <div className="w-full lg:w-3/5 relative group cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700`} />

              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-4 md:p-8 transform transition-transform duration-700 group-hover:scale-[1.02]">
                {/* Browser Frame */}
                <div className="w-full h-full rounded-lg overflow-hidden border border-white/10 bg-black shadow-2xl flex flex-col">
                  <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 backdrop-blur-sm">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <MagneticButton variant="primary">
                          View Live Site
                        </MagneticButton>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-2/5 flex flex-col">
              <span className="text-brand-blue font-inter uppercase tracking-widest text-sm mb-4">
                {project.category}
              </span>
              <h3 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-6 text-white group-hover:text-brand-blue transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-inter rounded-full border border-white/10 bg-white/5 text-white/70">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-brand-blue transition-colors font-inter group"
              >
                View Case Study
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
