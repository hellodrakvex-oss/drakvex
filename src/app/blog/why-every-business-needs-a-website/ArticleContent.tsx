"use client";

import { m } from "framer-motion";
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
      category="Digital Strategy"
      title="Why Every Business Needs a Website in 2026"
      description="Every business needs a website to establish an online presence, attract customers, and drive growth. This guide explains the key reasons why a website is essential and how DRAKVEX builds effective websites."
      publishedDate="June 15, 2026"
      updatedDate="June 27, 2026"
      readingTime="6 min read"
    >
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Introduction</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            In 2026, having a website is no longer optional for businesses. Consumers expect to find businesses online, research their offerings, and make purchasing decisions based on what they see. A website is the foundation of a business digital presence. DRAKVEX helps businesses build websites that attract customers, generate leads, and support long-term growth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Why Every Business Needs a Website</h2>
          <GlassCard className="p-6 mb-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              <strong>A website</strong> is a collection of web pages that provides information about a business, its products or services, and how customers can reach it. A website serves as the digital storefront, brand hub, and primary channel for customer acquisition in the modern economy.
            </p>
          </GlassCard>
          <p className="text-white/60 font-inter text-base leading-relaxed mb-4">
            Here are the key reasons every business needs a website:
          </p>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Online visibility</strong> — Most consumers search online before making a purchase. If your business does not have a website, potential customers may not find you.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Credibility and trust</strong> — A professional website signals that your business is legitimate and established. Consumers trust businesses with a strong online presence.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>24/7 availability</strong> — Unlike a physical store, a website works around the clock, providing information and accepting inquiries or orders at any time.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Cost-effective marketing</strong> — A website combined with SEO and content marketing provides ongoing visibility without the recurring costs of traditional advertising.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Customer insights</strong> — Analytics tools reveal how visitors find and interact with your site, providing valuable data for business decisions.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Who Needs a Website</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            Every business type benefits from having a website. Local businesses such as restaurants, salons, and clinics need websites to appear in local search results and provide directions and hours. E-commerce businesses need websites to sell products online. Service providers such as consultants, agencies, and freelancers need websites to showcase their work and attract clients. Even individuals such as artists, authors, and speakers benefit from having a central online presence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Benefits of Having a Professional Website</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Increased Reach</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">A website makes your business accessible to customers beyond your local area, expanding your potential market.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Lead Generation</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Contact forms, booking systems, and call-to-action buttons convert website visitors into leads and customers.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Brand Building</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Your website is the central hub for your brand, showcasing your story, values, and unique offerings.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Competitive Edge</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Many small businesses still lack a professional website. Having one gives you an advantage over competitors.</p>
            </GlassCard>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Common Mistakes When Building a Website</h2>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Using outdated design</strong> — An outdated or poorly designed website can damage credibility and drive visitors away.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Not optimizing for mobile</strong> — With over half of web traffic coming from mobile devices, a non-responsive site loses a significant portion of potential customers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Neglecting SEO</strong> — Building a website without search engine optimization means it may never appear in search results.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Best Practices for Building a Business Website</h2>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Focus on user experience</strong> — Design your site around what your visitors need. Clear navigation, fast load times, and intuitive layouts keep users engaged.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Include clear calls to action</strong> — Every page should guide visitors toward a desired action, whether contacting you, making a purchase, or signing up.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Invest in professional development</strong> — A professionally built website performs better, ranks higher, and provides a better return on investment than a DIY solution.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            <FaqItem
              q="Can a small business succeed without a website?"
              a="While some businesses operate through social media alone, a website provides credibility, control, and search visibility that social platforms cannot match. A website is a long-term asset that you own and control."
            />
            <FaqItem
              q="How does DRAKVEX build websites for businesses?"
              a="DRAKVEX follows a four-phase process: discovery to understand business goals, design to create user-centric interfaces, development using modern technologies such as Next.js and React, and launch with testing and SEO optimization."
            />
            <FaqItem
              q="What is the cost of a business website?"
              a="The cost depends on the complexity and features required. A simple brochure website costs less than a full e-commerce platform or custom web application. Contact DRAKVEX for a personalized quote based on your specific needs."
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Summary</h2>
          <GlassCard className="p-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              Every business needs a website to establish an online presence, attract customers, and drive growth. A professional website provides credibility, 24/7 availability, cost-effective marketing, and valuable customer insights. DRAKVEX, founded by David Joshwa, builds modern, high-performance websites that help businesses establish a strong digital presence and achieve their growth goals.
            </p>
          </GlassCard>
        </section>

        <div className="pt-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">About DRAKVEX</Link>
            <Link href="/founder" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">Meet David Joshwa</Link>
            <Link href="/blog/what-is-website-development" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">What Is Website Development</Link>
            <Link href="/blog/who-is-drakvex" className="text-brand-blue hover:text-brand-blue/80 font-inter text-sm underline transition-colors">Who Is DRAKVEX</Link>
          </div>
        </div>
      </m.div>
    </BlogArticleShell>
  );
}
