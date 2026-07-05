"use client";

import { m } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Suresh",
    role: "Owner, Namma Thaiyal Kadai",
    quote: "Our online orders skyrocketed after the new website launch. DRAKVEX built a custom e-commerce website that helped our fashion business reach more customers online.",
  },
];


export const Testimonials = () => {
  return (
    <section className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-space-grotesk font-bold mb-4"
        >
          Client <span className="text-brand-purple">Stories</span>
        </m.h2>
        <p className="text-white/60 font-inter text-lg">DRAKVEX has helped businesses across e-commerce, agriculture, and fashion industries build modern digital products and grow their online presence.
</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <GlassCard key={idx} className="p-8 relative" delay={idx * 0.1}>
            <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
            <p className="text-white/80 font-inter leading-relaxed mb-8 relative z-10">
               &quot;{t.quote}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white font-space-grotesk font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-inter font-medium text-sm">{t.name}</p>
                <p className="text-white/50 text-xs font-inter">{t.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
