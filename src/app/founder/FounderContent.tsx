"use client";

import { m } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Monitor, Bot, Building2, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const expertise = [
  {
    title: "Website Development",
    description:
      "Website development is the process of designing and building high-performance websites and modern web applications. David Joshwa builds websites using Next.js, React, TypeScript, and Tailwind CSS, optimized for speed, security, and search engines.",
    icon: Monitor,
  },
  {
    title: "AI Automation",
    description: "AI automation uses artificial intelligence to create intelligent systems that automate and optimize business workflows. David Joshwa builds custom AI agents, chatbots, and automation pipelines that reduce manual effort and improve efficiency.",
    icon: Bot,
  },
  {
    title: "Business Systems",
    description: "Business systems are custom software solutions designed to improve operational efficiency. David Joshwa builds tailored applications that help businesses manage data, automate processes, and scale operations effectively.",
    icon: Building2,
  },
  {
    title: "Digital Products",
    description: "Digital products are user-centric applications and experiences designed to drive business growth. David Joshwa develops digital solutions focused on usability, accessibility, and measurable outcomes for clients.",
    icon: Target,
  },
];

export function FounderContent() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.06),transparent_60%)]" />
      </div>

      <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto w-full">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="text-xs font-inter uppercase tracking-widest text-white/80">
              Founder
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter leading-[1.1] mb-4">
            David Joshwa
          </h1>
          <p className="text-xl md:text-2xl text-brand-blue font-space-grotesk font-semibold mb-4">
            Founder & Developer
          </p>
          <p className="text-lg text-white/50 font-inter mb-8">DRAKVEX</p>
          <p className="text-lg md:text-xl text-white/60 font-inter max-w-3xl mx-auto leading-relaxed">
            David Joshwa is the Founder and Developer of DRAKVEX, a digital agency focused on building modern websites, business platforms, and AI-powered solutions. As a developer and entrepreneur, David Joshwa helps businesses transform ideas into impactful digital experiences through website development, AI automation, branding, and custom software solutions.
          </p>
        </m.div>
      </section>

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              My Story
            </h2>
            <p className="text-white/60 font-inter text-lg leading-relaxed mb-6">
              David Joshwa started DRAKVEX with a goal of helping businesses build a stronger digital presence through modern technology. As a developer and entrepreneur, David Joshwa creates websites, AI automation systems, and digital solutions that solve real-world problems for startups and established businesses. Today, DRAKVEX continues to grow with a focus on innovation, quality, and meaningful client partnerships, delivering website development, AI automation, branding, and digital solutions that drive measurable results.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard className="p-8 md:p-12">
              <h3 className="text-2xl font-space-grotesk font-bold mb-4 text-white">
                Professional Journey
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-blue mt-2 shrink-0" />
                  <div>
                    <p className="text-white font-inter font-medium">Founded DRAKVEX</p>
                    <p className="text-white/50 font-inter text-sm">Building Digital Excellence</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-purple mt-2 shrink-0" />
                  <div>
                    <p className="text-white font-inter font-medium">Web Development & AI Systems</p>
                    <p className="text-white/50 font-inter text-sm">Delivering websites and automation</p>
                  </div>
                </li>
               
              </ul>
            </GlassCard>
          </m.div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto w-full">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
            Expertise
          </h2>
          <p className="text-white/60 font-inter text-lg max-w-2xl">
            Areas where David Joshwa brings deep knowledge and experience.
          </p>
        </m.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <GlassCard
              key={item.title}
              delay={index * 0.1}
              className="p-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-blue/50 transition-all">
                <item.icon className="w-6 h-6 text-white/80 group-hover:text-brand-blue transition-colors" />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto w-full">
        <GlassCard className="p-12 md:p-16 text-center">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
              Let&apos;s Build Something Great
            </h2>
            <p className="text-white/60 font-inter text-lg max-w-2xl mx-auto mb-8">
              Have a project in mind? Reach out and let&apos;s make it happen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-space-grotesk font-bold hover:bg-white/20 transition-all duration-300"
              >
                Home <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-space-grotesk font-bold hover:bg-white/20 transition-all duration-300"
              >
                About DRAKVEX <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-space-grotesk font-bold hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </m.div>
        </GlassCard>
      </section>
    </main>
  );
}
