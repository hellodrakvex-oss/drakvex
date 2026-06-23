"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Monitor, Bot, Building2, Palette, Sparkles } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description:
      "High-performance marketing websites and scalable web applications tailored to your brand.",
    icon: Monitor,
  },
  {
    title: "AI Automation",
    description:
      "Intelligent systems that automate repetitive tasks, streamline workflows, and save hours every day.",
    icon: Bot,
  },
  {
    title: "Business Systems",
    description:
      "Custom software solutions designed to optimize operations, manage data, and drive growth.",
    icon: Building2,
  },
  {
    title: "Branding",
    description:
      "Complete brand identities including logos, design systems, and visual guidelines that stand out.",
    icon: Palette,
  },
  {
    title: "Digital Experiences",
    description:
      "Immersive, user-centric digital products that engage audiences and convert visitors into customers.",
    icon: Sparkles,
  },
];

export function AboutContent() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_60%)]" />
      </div>

      <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-inter uppercase tracking-widest text-white/80">
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter leading-[1.1] mb-6">
            We Build Digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-inter max-w-3xl mx-auto">
            DRAKVEX is a digital agency founded by David Joshwa, dedicated to
            crafting modern websites, AI-powered systems, and transformative
            digital experiences for startups and businesses worldwide.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-white/60 font-inter text-lg leading-relaxed mb-6">
              DRAKVEX was founded with a clear vision: to help businesses
              harness the power of modern technology. We combine creative design
              with technical expertise to deliver solutions that drive real
              results.
            </p>
            <p className="text-white/60 font-inter text-lg leading-relaxed">
              David Joshwa serves as Founder and Developer of DRAKVEX, leading
              a team passionate about building websites, AI automation systems,
              and digital products that make a difference.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="w-full aspect-square rounded-3xl bg-gradient-to-br from-brand-blue/20 via-brand-purple/10 to-transparent border border-white/10 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className="text-6xl font-space-grotesk font-bold text-white mb-4">
                    {new Date().getFullYear() - 2024}+
                  </div>
                  <div className="text-white/50 font-inter">Years of Building</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-white/60 font-inter text-lg leading-relaxed">
            DRAKVEX helps businesses build modern websites and AI-powered
            systems that accelerate growth. We believe technology should be
            accessible, powerful, and beautifully crafted.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            What We Build
          </h2>
          <p className="text-white/60 font-inter text-lg max-w-2xl">
            From concept to launch, we deliver end-to-end digital solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard
              key={service.title}
              delay={index * 0.1}
              className="p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-blue/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all">
                <service.icon className="w-6 h-6 text-white/80 group-hover:text-brand-blue transition-colors" />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Our Vision
            </h2>
            <p className="text-white/60 font-inter text-lg leading-relaxed">
              We envision a world where every business, regardless of size, has
              access to world-class digital products and AI-driven automation.
              DRAKVEX is committed to pushing the boundaries of what is
              possible with technology.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Founded by David Joshwa
            </h2>
            <p className="text-white/60 font-inter text-lg leading-relaxed mb-6">
              DRAKVEX was founded by David Joshwa with the mission of making
              premium digital experiences accessible to modern businesses.
            </p>
            <Link
              href="/founder"
              className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue/80 transition-colors font-inter"
            >
              Meet the Founder →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto w-full">
        <GlassCard className="p-12 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Let&apos;s Build Together
            </h2>
            <p className="text-white/60 font-inter text-lg max-w-2xl mx-auto mb-8">
              Ready to transform your digital presence? Partner with DRAKVEX and
              bring your vision to life.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-space-grotesk font-bold hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              Start Your Project
            </Link>
          </motion.div>
        </GlassCard>
      </section>
    </main>
  );
}
