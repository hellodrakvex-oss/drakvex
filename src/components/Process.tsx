"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Deep dive into your business goals, target audience, and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Crafting premium UI/UX interfaces with wireframes and interactive prototypes.",
  },
  {
    number: "03",
    title: "Development",
    description: "Building scalable and fast applications using cutting-edge tech stacks.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous testing, SEO optimization, and secure cloud deployment.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="mb-24 md:w-1/2">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6"
        >
          Our <span className="text-brand-purple">Process</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 font-inter text-lg"
        >
          A streamlined approach to turning complex problems into elegant digital solutions.
        </motion.p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-blue/50 via-brand-purple/50 to-transparent transform md:-translate-x-1/2" />

        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row items-start md:items-center relative ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Indicator */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-brand-blue transform -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-brand-blue font-mono text-sm mb-4">
                  Phase {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-white/50 font-inter leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
