"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";

interface BlogArticleShellProps {
  category: string;
  title: string;
  description: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  authorName?: string;
  children: React.ReactNode;
}

export function BlogArticleShell({
  category,
  title,
  description,
  publishedDate,
  updatedDate,
  readingTime,
  authorName = "David Joshwa",
  children,
}: BlogArticleShellProps) {
  return (
    <main className="relative flex flex-col items-center w-full overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_60%)]" />
      </div>

      <article className="relative z-10 pt-40 pb-20 px-6 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span className="text-xs font-inter uppercase tracking-widest text-white/80">
              {category}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold tracking-tighter leading-[1.1] mb-6">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/60 font-inter max-w-3xl mb-8">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-white/40 font-inter mb-12 pb-8 border-b border-white/10">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {authorName}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {publishedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {readingTime}
            </span>
            <span className="text-white/30">
              Updated: {updatedDate}
            </span>
          </div>
        </motion.div>

        {children}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-12 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Ready to Build Your Digital Presence?
          </h2>
          <p className="text-white/60 font-inter text-lg max-w-2xl mx-auto mb-8">
            Contact DRAKVEX to discuss your project. Founded by David Joshwa, the team delivers modern websites, AI automation, and digital solutions tailored to your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-space-grotesk font-bold hover:bg-brand-blue hover:text-white transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-space-grotesk font-bold hover:bg-white/20 transition-all duration-300"
            >
              View FAQ
            </Link>
          </div>
        </motion.div>
      </article>
    </main>
  );
}
