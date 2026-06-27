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
      category="Website Development"
      title="What Is Website Development? A Complete Guide for Businesses"
      description="Website development is the process of designing, building, deploying, and maintaining websites. This guide explains what website development is, why it matters for your business, and how DRAKVEX builds modern, high-performance websites."
      publishedDate="June 1, 2026"
      updatedDate="June 27, 2026"
      readingTime="8 min read"
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
            In today digital economy, a website is often the first interaction a potential customer has with a business. Whether you run a small local shop or a growing enterprise, your website serves as your online storefront, your brand hub, and your primary channel for customer acquisition. Website development is the technical and creative process that makes this possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">What Is Website Development?</h2>
          <GlassCard className="p-6 mb-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              <strong>Website development</strong> is the process of designing, building, deploying, and maintaining websites. It involves front-end development (what users see and interact with), back-end development (server logic, databases, and APIs), and full-stack development (both front-end and back-end).
            </p>
          </GlassCard>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            Website development includes planning the site structure, creating visual designs, writing code, integrating features such as contact forms and payment systems, testing for performance and security, and deploying the site to a web server. Modern website development also includes search engine optimization, mobile responsiveness, accessibility compliance, and ongoing maintenance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Why Website Development Matters</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed mb-4">
            A professionally developed website does more than look good. It helps businesses:
          </p>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Establish credibility</strong> — 75% of users judge a business credibility based on its website design.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Generate leads and sales</strong> — A well-optimized website converts visitors into customers through clear calls to action and streamlined user flows.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Build brand awareness</strong> — Your website is the central hub for your brand identity, showcasing your products, services, and values.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Provide customer support</strong> — FAQs, chatbots, and contact forms help customers find answers and reach your team.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Who Needs Website Development</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            Every business that wants to be found online needs website development. This includes startups launching their first product, small businesses looking to expand their reach, e-commerce stores that need reliable shopping platforms, service providers such as consultants and agencies, and established companies that need to modernize outdated sites. Even individuals such as freelancers, artists, and creators benefit from having a professional website to showcase their work and attract opportunities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Benefits of Professional Website Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Fast Performance</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Modern development techniques ensure fast load times, reducing bounce rates and improving user satisfaction.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Mobile Responsive</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Websites built with responsive design work seamlessly on desktops, tablets, and smartphones.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">SEO Optimized</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Proper semantic HTML, structured data, and performance optimization help websites rank higher in search results.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Secure and Scalable</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Professional development includes security best practices and architecture that grows with your business.</p>
            </GlassCard>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Common Website Development Mistakes</h2>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Ignoring mobile optimization</strong> — Over half of web traffic comes from mobile devices. A site that does not work on phones loses potential customers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Slow load times</strong> — Users expect pages to load in under three seconds. Slow sites drive visitors away and hurt search rankings.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Poor navigation</strong> — If users cannot find what they need within a few clicks, they leave. Clear information architecture is essential.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Skipping SEO</strong> — A beautiful website is useless if nobody can find it. Technical SEO should be built in from the start.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Best Practices for Website Development</h2>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Plan before you build</strong> — Define your goals, target audience, and content structure before writing any code.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Use modern frameworks</strong> — Technologies like Next.js, React, and TypeScript provide better performance, maintainability, and developer experience.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Optimize for Core Web Vitals</strong> — Google uses metrics like Largest Contentful Paint and Cumulative Layout Shift to rank sites. Build with these in mind.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Test thoroughly</strong> — Test on multiple browsers, devices, and network conditions before launching.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            <FaqItem
              q="What is the difference between front-end and back-end development?"
              a="Front-end development focuses on the visual parts of a website that users see and interact with, including layout, buttons, and animations. Back-end development handles the server-side logic, databases, and APIs that power the website behind the scenes. Full-stack development covers both."
            />
            <FaqItem
              q="How long does it take to build a professional website?"
              a="The timeline depends on complexity. A simple marketing website typically takes 2 to 4 weeks. A custom web application or e-commerce platform can take 6 to 12 weeks or more. DRAKVEX provides detailed timelines during the discovery phase."
            />
            <FaqItem
              q="How much does website development cost?"
              a="Costs vary based on features, design complexity, and functionality. Basic websites start at lower price points, while custom applications with AI automation, e-commerce, and advanced integrations require higher investment. Contact DRAKVEX for a personalized quote."
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Summary</h2>
          <GlassCard className="p-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              Website development is the process of designing, building, deploying, and maintaining websites that help businesses establish an online presence, attract customers, and drive growth. Every business that wants to succeed online needs a professionally developed website that is fast, mobile-responsive, and optimized for search engines. DRAKVEX, founded by David Joshwa, builds modern websites using Next.js, React, and TypeScript, delivering high-performance digital experiences tailored to each client needs.
            </p>
          </GlassCard>
        </section>

        <div className="pt-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">About DRAKVEX</Link>
            <Link href="/founder" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">Meet David Joshwa</Link>
            <Link href="/blog/what-is-ai-automation" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">What Is AI Automation</Link>
            <Link href="/blog/why-every-business-needs-a-website" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">Why Every Business Needs a Website</Link>
          </div>
        </div>
      </motion.div>
    </BlogArticleShell>
  );
}
