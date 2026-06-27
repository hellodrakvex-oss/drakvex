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
      category="Branding"
      title="What Is Branding? A Complete Guide for Businesses"
      description="Branding is the process of creating a unique identity for a business through visual elements, messaging, and strategy. This guide explains what branding is, why it matters, and how DRAKVEX creates brand identities."
      publishedDate="June 10, 2026"
      updatedDate="June 27, 2026"
      readingTime="7 min read"
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
            In a crowded marketplace, businesses need more than a good product or service to stand out. They need a brand that customers remember, trust, and choose over competitors. Branding is the strategic discipline that creates this differentiation. DRAKVEX helps businesses build brand identities that communicate their values, attract their target audience, and drive long-term loyalty.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">What Is Branding?</h2>
          <GlassCard className="p-6 mb-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              <strong>Branding</strong> is the process of creating a unique identity for a business through visual elements, messaging, positioning, and customer experience. A brand includes the logo, color palette, typography, tone of voice, brand values, and the overall perception customers have of the business. Branding is not just a logo; it is how a business presents itself to the world and how customers feel when they interact with it.
            </p>
          </GlassCard>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            Effective branding communicates what a business stands for, what it offers, and why it matters. It creates emotional connections with customers and builds trust over time. Branding applies across all touchpoints including websites, social media, packaging, advertising, customer service, and physical spaces.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Why Branding Matters</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed mb-4">
            Branding is a critical business investment. Key reasons it matters:
          </p>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Differentiation</strong> — A strong brand sets a business apart from competitors and makes it recognizable in a crowded market.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Trust and credibility</strong> — Professional branding signals that a business is established, reliable, and committed to quality.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Customer loyalty</strong> — People form emotional attachments to brands they identify with, leading to repeat purchases and referrals.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Premium pricing</strong> — Strong brands can command higher prices because customers perceive them as more valuable.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Who Needs Branding</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            Every business that wants to be taken seriously needs branding. Startups need branding to establish their identity and attract early customers. Small businesses use branding to compete with larger players. Growing companies need branding to maintain consistency across new markets and products. Even established businesses rebrand to stay relevant and reach new audiences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Benefits of Professional Branding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Clear Identity</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">A cohesive brand identity makes your business instantly recognizable across all channels and touchpoints.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Consistent Messaging</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Brand guidelines ensure that every communication aligns with your values, tone, and visual identity.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Emotional Connection</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Great branding creates an emotional bond with customers, turning one-time buyers into loyal advocates.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Competitive Advantage</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">A strong brand differentiates your business and gives customers a reason to choose you over alternatives.</p>
            </GlassCard>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Common Branding Mistakes</h2>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Inconsistent branding</strong> — Using different logos, colors, or tones across platforms confuses customers and weakens brand recognition.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Copying competitors</strong> — Imitating another brand makes it hard to stand out and can damage authenticity.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Ignoring the target audience</strong> — Branding that appeals to the business owner but not the target customer will not drive results.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Best Practices for Branding</h2>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Define your brand strategy first</strong> — Clarify your mission, values, target audience, and positioning before designing visuals.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Invest in professional design</strong> — A professionally designed logo and visual system creates a strong first impression.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Create brand guidelines</strong> — Document your brand rules so every team member and partner can apply them consistently.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            <FaqItem
              q="What is the difference between branding and marketing?"
              a="Branding defines who you are as a business your identity, values, and personality. Marketing is how you promote your business to attract customers. Branding comes first; marketing communicates the brand to the world."
            />
            <FaqItem
              q="How does DRAKVEX approach branding projects?"
              a="DRAKVEX starts with discovery to understand the business goals, target audience, and competitive landscape. The team then develops brand strategy, visual identity including logo and color palette, and brand guidelines that ensure consistency across all applications."
            />
            <FaqItem
              q="How long does it take to create a brand identity?"
              a="A complete brand identity project typically takes 3 to 6 weeks depending on complexity. This includes strategy development, visual design, revisions, and final brand guideline documentation."
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Summary</h2>
          <GlassCard className="p-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              Branding is the process of creating a unique identity for a business through visual elements, messaging, and customer experience. Every business that wants to stand out, build trust, and attract loyal customers needs professional branding. DRAKVEX, founded by David Joshwa, creates complete brand identities including logos, design systems, and guidelines that help businesses communicate their value and connect with their audience.
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
      </motion.div>
    </BlogArticleShell>
  );
}
