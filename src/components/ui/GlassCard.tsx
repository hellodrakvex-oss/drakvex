"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard = ({ children, className, hoverEffect = true, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={hoverEffect ? { y: -5, scale: 1.01 } : {}}
      className={cn(
        "relative rounded-2xl overflow-hidden group",
        "bg-white/[0.03] backdrop-blur-xl border border-white/[0.08]",
        "transition-all duration-500",
        hoverEffect && "hover:border-white/[0.15] hover:bg-white/[0.05]",
        className
      )}
    >
      {/* Subtle top inner glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-50" />
      
      {/* Ambient background glow that follows hover (using CSS for simplicity, can also use Framer Motion) */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
        "bg-gradient-to-tr from-brand-blue/[0.05] via-transparent to-brand-purple/[0.05]"
      )} />
      
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};
