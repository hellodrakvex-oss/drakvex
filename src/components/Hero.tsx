"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
useEffect(() => {
  const generated = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 1800,
    y: Math.random() * 1000,
  }));
  setParticles(generated);
}, []);
  

  return (
    <section ref={containerRef} suppressHydrationWarning className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Ultra Premium Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">

        {/* Main Aurora Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full 
    bg-blue-500/20 blur-[140px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full 
    bg-purple-500/20 blur-[140px]"
        />

        {/* Cinematic Planet */}
        <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] rounded-full border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-sm shadow-[0_0_120px_rgba(59,130,246,0.25)]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_45%)]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-soft-light bg-[url('/noise.png')]" />

        {/* Floating Particles */}
        
{/* Floating Particles */}
<div className="absolute inset-0">
  {particles.map(p => (
    <motion.div
      key={p.id}
      initial={{ opacity: 0, y: p.y, x: p.x }}
      animate={{ opacity: [0, 1, 0], y: -100 }}
      transition={{ duration: 4 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5 }}
      className="absolute w-1 h-1 rounded-full bg-white/40"
    />
  ))}
</div>

        {/* Dark Vignette */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center text-center h-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-brand-blue" />
          <span className="text-xs font-inter uppercase tracking-widest text-white/80">Premium Digital Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-bold tracking-tighter leading-[1.1] max-w-5xl"
        >
          Modern Websites & <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
            AI Systems
          </span>{" "}
          for Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-white/60 font-inter max-w-2xl"
        >
          We help startups and businesses build powerful digital experiences using cutting-edge web technologies and AI automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="#work">
  <MagneticButton
    variant="secondary"
    className="w-full sm:w-auto py-4 px-8 text-base"
  >
    View Our Work{" "}
    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
  </MagneticButton>
</a>
          <MagneticButton variant="outline" className="w-full sm:w-auto py-4 px-8 text-base">
            Book Free Strategy Call
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Floating Elements / Mockups (Parallax) */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0 pointer-events-none z-20 hidden lg:block"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 3.6 }}
          className="absolute top-1/4 left-10 w-64 h-40 glass rounded-xl p-4 flex flex-col gap-3"
        >
          <div className="w-1/2 h-2 bg-white/20 rounded" />
          <div className="w-3/4 h-2 bg-white/10 rounded" />
          <div className="flex-1 rounded bg-gradient-to-br from-brand-blue/20 to-transparent border border-brand-blue/30 mt-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 3.8 }}
          className="absolute bottom-1/4 right-10 w-56 h-48 glass rounded-xl p-4 flex flex-col gap-3"
        >
          <div className="flex justify-between items-center">
            <div className="w-8 h-8 rounded-full bg-brand-purple/20 border border-brand-purple/50" />
            <div className="w-16 h-4 bg-white/10 rounded" />
          </div>
          <div className="w-full h-2 bg-white/10 rounded mt-4" />
          <div className="w-4/5 h-2 bg-white/10 rounded" />
          <div className="w-full h-2 bg-white/10 rounded" />
        </motion.div>
      </motion.div>
    </section>
  );
};
