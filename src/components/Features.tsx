"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Modern UI/UX",
  "Lightning Fast Performance",
  "AI-Powered Systems",
  "SEO Optimized",
  "Scalable Architecture",
  "Secure Cloud Deployment",
  "Mobile Responsive",
  "Dedicated Support"
];

export const Features = () => {
  return (
    <section className="py-32 relative z-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-space-grotesk font-bold mb-6"
          >
            Why Choose <span className="text-brand-blue">DRAKVEX</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 font-inter text-lg mb-8"
          >
            We don&apos;t just build websites; we engineer digital ecosystems that drive growth, automate operations, and elevate your brand globally.
          </motion.p>
        </div>

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors group"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-blue group-hover:text-white transition-colors" />
              <span className="font-inter text-white/80 group-hover:text-white transition-colors">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
