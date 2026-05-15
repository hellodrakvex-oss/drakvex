"use client";

import { motion } from "framer-motion";

const techs = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "AI Automation", "Cloud Infrastructure", "Framer Motion", "Supabase", "Node.js"
];

export const TechMarquee = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden bg-white/[0.02] border-y border-white/5">
      <div className="flex w-[200vw] sm:w-[150vw]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 sm:gap-24 whitespace-nowrap px-12"
        >
          {/* Double array for seamless loop */}
          {[...techs, ...techs].map((tech, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-xl md:text-3xl font-space-grotesk font-bold text-white/20 uppercase tracking-widest hover:text-white/80 transition-colors cursor-default">
                {tech}
              </span>
              {i % 2 === 0 && <span className="w-2 h-2 rounded-full bg-brand-blue/50" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
