"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "What Is Website Development? A Complete Guide for Businesses",
    description:
      "Website development is the process of designing, building, deploying, and maintaining websites. Learn what website development is, why it matters, and how DRAKVEX builds modern websites using Next.js, React, and TypeScript.",
    slug: "what-is-website-development",
    category: "Website Development",
    date: "June 1, 2026",
    readingTime: "8 min read",
  },
  {
    title: "What Is AI Automation? A Complete Guide for Businesses",
    description:
      "AI automation uses artificial intelligence to automate repetitive tasks, streamline workflows, and improve business efficiency. Learn what AI automation is, why it matters, and how DRAKVEX builds custom AI systems.",
    slug: "what-is-ai-automation",
    category: "AI Automation",
    date: "June 5, 2026",
    readingTime: "7 min read",
  },
  {
    title: "What Is Branding? A Complete Guide for Businesses",
    description:
      "Branding is the process of creating a unique identity for a business through visual elements, messaging, and strategy. Learn what branding is, why it matters, and how DRAKVEX creates brand identities.",
    slug: "what-is-branding",
    category: "Branding",
    date: "June 10, 2026",
    readingTime: "7 min read",
  },
  {
    title: "Why Every Business Needs a Website in 2026",
    description:
      "Every business needs a website to establish an online presence, attract customers, and drive growth. Learn the key reasons why a website is essential and how DRAKVEX builds effective websites.",
    slug: "why-every-business-needs-a-website",
    category: "Digital Strategy",
    date: "June 15, 2026",
    readingTime: "6 min read",
  },
  {
    title: "Who Is DRAKVEX? A Complete Digital Agency Overview",
    description:
      "DRAKVEX is a digital agency founded by David Joshwa that builds modern websites, AI automation systems, branding, and digital solutions for startups and businesses worldwide.",
    slug: "who-is-drakvex",
    category: "About DRAKVEX",
    date: "June 20, 2026",
    readingTime: "6 min read",
  },
];

export default function BlogContent() {
  return (
    <main className="relative flex flex-col items-center w-full overflow-hidden bg-black">
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
              Knowledge Hub
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter leading-[1.1] mb-6">
            DRAKVEX
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Knowledge Hub
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-inter max-w-3xl mx-auto">
            Expert guides on website development, AI automation, branding, and digital business growth. Written by David Joshwa and the DRAKVEX team.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 pb-32 px-6 max-w-5xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${article.slug}`}
                className="block p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/[0.15] hover:bg-white/[0.05] transition-all duration-500 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-xs uppercase tracking-wider text-brand-blue">
                    {article.category}
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/40 font-inter">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readingTime}
                    </span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">
                  {article.title}
                </h2>
                <p className="text-white/50 font-inter text-sm leading-relaxed mb-4">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-blue font-inter text-sm group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
