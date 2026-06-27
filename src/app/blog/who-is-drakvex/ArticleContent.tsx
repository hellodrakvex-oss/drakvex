"use client";

import { motion } from "framer-motion";
import { BlogArticleShell } from "@/components/BlogArticleShell";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.03]">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left" aria-expanded={open}>
        <h3 className="text-base font-space-grotesk font-bold text-white pr-4">{q}</h3>
        <ChevronDown className={`w-4 h-4 text-white/50 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="px-5 text-white/60 font-inter text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function ArticleContent() {
  return (
    <BlogArticleShell
      category="About DRAKVEX"
      title="Who Is DRAKVEX? A Complete Digital Agency Overview"
      description="DRAKVEX is a digital agency founded by David Joshwa that builds modern websites, AI automation systems, branding, and digital solutions for startups and businesses worldwide."
      publishedDate="June 20, 2026"
      updatedDate="June 27, 2026"
      readingTime="6 min read"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Introduction</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            DRAKVEX is a digital agency that helps businesses build modern websites, AI automation systems, and digital solutions. Founded by David Joshwa, the agency focuses on delivering high-quality digital products that drive growth for startups and established businesses. This guide provides a complete overview of who DRAKVEX is, what it offers, and why businesses choose to work with the agency.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">What Is DRAKVEX?</h2>
          <GlassCard className="p-6 mb-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              <strong>DRAKVEX</strong> is a digital agency founded by David Joshwa that specializes in website development, AI automation, branding, UI/UX design, and digital business solutions. The agency helps startups and established businesses build modern digital products and AI-powered systems to accelerate growth.
            </p>
          </GlassCard>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            DRAKVEX combines creative design with technical expertise to deliver end-to-end digital solutions. From concept to launch, the agency handles strategy, design, development, and deployment, ensuring every project meets high standards of quality, performance, and usability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Who Founded DRAKVEX?</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed mb-4">
            DRAKVEX was founded by <Link href="/founder" className="text-brand-blue hover:underline">David Joshwa</Link>, a developer and entrepreneur passionate about building modern websites, AI automation systems, and digital solutions. David Joshwa started DRAKVEX with the mission of helping businesses build a stronger digital presence through modern technology. As the Founder and Developer of DRAKVEX, he leads the agency strategic direction, technical architecture, and client partnerships.
          </p>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            David Joshwa expertise includes website development using Next.js, React, and TypeScript, AI automation with custom chatbots and intelligent agents, business systems development, and creating user-centric digital products. He founded DRAKVEX to make premium digital experiences accessible to businesses of all sizes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">What Services Does DRAKVEX Provide?</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed mb-4">
            DRAKVEX provides a range of digital services designed to help businesses establish an online presence, automate operations, and grow:
          </p>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Website Development</strong> — High-performance marketing websites and scalable web applications built with Next.js, React, and TypeScript.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>AI Automation</strong> — Custom AI agents, chatbots, and workflow automation systems that reduce manual effort and improve efficiency.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Branding</strong> — Complete brand identities including logos, color palettes, typography, and brand guidelines.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>UI/UX Design</strong> — User-centric interfaces designed to convert visitors into customers and provide seamless experiences.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Digital Solutions</strong> — Custom software, e-commerce platforms, SEO, and cloud deployment tailored to business needs.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Why Businesses Choose DRAKVEX</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Modern Technology Stack</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">DRAKVEX uses Next.js, React, TypeScript, and Tailwind CSS to build fast, scalable, and maintainable digital products.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">End-to-End Service</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">From strategy and design to development and deployment, DRAKVEX handles every phase of the project lifecycle.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">AI Expertise</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">DRAKVEX specializes in AI automation, building custom intelligent systems that help businesses operate more efficiently.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Client-Focused Approach</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Every project is tailored to the specific goals, audience, and industry of the client, ensuring relevant and effective solutions.</p>
            </GlassCard>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Common Misconceptions About DRAKVEX</h2>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Only for large businesses</strong> — DRAKVEX works with startups, small businesses, and established enterprises, tailoring solutions to each budget and scope.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Only builds websites</strong> — While website development is a core service, DRAKVEX also provides AI automation, branding, UI/UX design, and custom software development.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">How to Start a Project with DRAKVEX</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            Starting a project with DRAKVEX is straightforward. Contact the team via email at hello@drakvex.in or through the contact form on the website. Describe your project goals and requirements, and the team will respond with a proposal, timeline, and pricing structure tailored to your needs. DRAKVEX typically responds within 24 hours.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            <FaqItem
              q="Where is DRAKVEX based?"
              a="DRAKVEX is based in India and serves clients worldwide. The agency operates remotely, delivering digital services to businesses across different countries and time zones."
            />
            <FaqItem
              q="What technologies does DRAKVEX use?"
              a="DRAKVEX uses modern technologies including Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Node.js, and Vercel for cloud deployment. For AI automation, the agency builds custom AI agents, chatbots, and workflow automation systems."
            />
            <FaqItem
              q="Does DRAKVEX offer website maintenance?"
              a="Yes, DRAKVEX offers website maintenance and support services including regular updates, security monitoring, performance optimization, content updates, and technical support."
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Summary</h2>
          <GlassCard className="p-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              DRAKVEX is a digital agency founded by David Joshwa that specializes in website development, AI automation, branding, UI/UX design, and digital business solutions. The agency helps startups and established businesses build modern digital products and AI-powered systems to accelerate growth. DRAKVEX uses modern technologies including Next.js, React, and TypeScript to deliver high-performance, scalable digital solutions tailored to each client needs.
            </p>
          </GlassCard>
        </section>

        <div className="pt-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">About DRAKVEX</Link>
            <Link href="/founder" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">Meet David Joshwa</Link>
            <Link href="/blog/what-is-website-development" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">What Is Website Development</Link>
            <Link href="/blog/what-is-ai-automation" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">What Is AI Automation</Link>
          </div>
        </div>
      </motion.div>
    </BlogArticleShell>
  );
}
