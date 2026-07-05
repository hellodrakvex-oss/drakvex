"use client";

import { m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const PortfolioCta = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      {/* Glow orbs behind CTA */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[400px] h-[300px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl p-10 md:p-16 lg:p-20 text-center">
        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

        {/* Inner glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6 md:space-y-8">
          <m.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-white leading-tight"
          >
            Ready to Build Your{" "}
            <span className="text-brand-blue">Next Digital Product</span>?
          </m.h2>

          <m.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/50 font-inter leading-relaxed max-w-2xl mx-auto"
          >
            Let&apos;s create a high-performance website or AI solution that helps your business grow.
          </m.p>

          <m.div variants={itemVariants} className="pt-4">
            <MagneticButton variant="secondary" onClick={handleScrollToContact} type="button">
              Start Your Project
              <m.span
                className="inline-block"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 2, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </m.span>
            </MagneticButton>
          </m.div>
        </div>
      </div>
    </m.div>
  );
};
