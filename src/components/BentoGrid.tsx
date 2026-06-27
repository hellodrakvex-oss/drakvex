"use client";

import { GlassCard } from "./ui/GlassCard";
import { Zap, Code2, Cpu, Rocket } from "lucide-react";

const bentoItems = [
  {
    title: "Lightning Fast",
    description: "DRAKVEX builds websites on Next.js edge infrastructure for sub-second load times, ensuring fast page loads and a smooth user experience across all devices.",
    icon: Zap,
    className: "md:col-span-2 md:row-span-1",
    delay: 0.1,
  },
  {
    title: "AI-Powered",
    description: "DRAKVEX builds custom AI agents and chatbots that automate business workflows, reduce manual effort, and improve operational efficiency through artificial intelligence.",
    icon: Cpu,
    className: "md:col-span-1 md:row-span-2",
    delay: 0.2,
  },
  {
    title: "Modern Tech",
    description: "DRAKVEX uses modern technologies including React, Next.js, TypeScript, Tailwind CSS, Framer Motion, and Vercel to build scalable, secure digital products.",
    icon: Code2,
    className: "md:col-span-1 md:row-span-1",
    delay: 0.3,
  },
  {
    title: "Scalable Apps",
    description: "DRAKVEX builds enterprise-grade architecture that scales with business growth, handling increased traffic, data, and user demand without performance degradation.",
    icon: Rocket,
    className: "md:col-span-2 md:row-span-1",
    delay: 0.4,
  },
];

export const BentoGrid = () => {
  return (
    <section className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-space-grotesk font-bold mb-4">
          Built for the <span className="text-brand-blue">Future</span>
        </h2>
        <p className="text-white/60 font-inter max-w-2xl mx-auto text-lg">
          We use modern technologies to build scalable, secure, and blazing fast digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        {bentoItems.map((item, idx) => (
          <GlassCard key={idx} className={`p-8 flex flex-col justify-between ${item.className}`} delay={item.delay}>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:border-brand-blue/50 group-hover:bg-brand-blue/10">
              <item.icon className="w-6 h-6 text-white group-hover:text-brand-blue transition-colors" />
            </div>
            
            <div>
              <h3 className="text-xl font-space-grotesk font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-white/60 font-inter text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
