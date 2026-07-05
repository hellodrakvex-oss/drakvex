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
      category="AI Automation"
      title="What Is AI Automation? A Complete Guide for Businesses"
      description="AI automation uses artificial intelligence to automate repetitive tasks, streamline workflows, and improve business efficiency. This guide explains what AI automation is, why it matters, and how DRAKVEX builds custom AI systems."
      publishedDate="June 5, 2026"
      updatedDate="June 27, 2026"
      readingTime="7 min read"
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
            Businesses today face increasing pressure to do more with less. Repetitive tasks such as data entry, customer support responses, and report generation consume hours of valuable time. AI automation offers a way to offload these tasks to intelligent systems, freeing teams to focus on strategic work. DRAKVEX helps businesses implement AI automation to improve efficiency, reduce costs, and scale operations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">What Is AI Automation?</h2>
          <GlassCard className="p-6 mb-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              <strong>AI automation</strong> is the use of artificial intelligence technologies to automate tasks that typically require human intelligence. This includes natural language processing, machine learning, computer vision, and decision-making algorithms. AI automation systems can learn from data, adapt to new inputs, and perform complex tasks without explicit programming for every scenario.
            </p>
          </GlassCard>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            Unlike traditional automation that follows rigid rules, AI automation can handle variability and ambiguity. For example, an AI-powered chatbot can understand different ways customers ask the same question and provide accurate responses. A data processing pipeline can extract information from unstructured documents and organize it automatically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Why AI Automation Matters</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed mb-4">
            AI automation is transforming how businesses operate. Key reasons it matters:
          </p>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Cost reduction</strong> — Automating repetitive tasks reduces labor costs and minimizes human error.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Scalability</strong> — AI systems can handle thousands of tasks simultaneously, allowing businesses to scale without proportional increases in headcount.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>Speed and accuracy</strong> — AI processes data faster and with fewer errors than manual methods, enabling real-time responses and data-driven decisions.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong>24/7 availability</strong> — AI-powered systems such as chatbots provide round-the-clock customer support without breaks.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Who Needs AI Automation</h2>
          <p className="text-white/60 font-inter text-base leading-relaxed">
            Any business that handles repetitive tasks, large volumes of data, or customer inquiries can benefit from AI automation. This includes e-commerce stores that need automated order processing and customer support, service businesses that schedule appointments and send reminders, manufacturing companies that monitor equipment and predict maintenance, marketing teams that personalize campaigns at scale, and startups that need to maximize output with limited resources.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Benefits of AI Automation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Time Savings</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">Automating routine tasks saves hours of manual work each day, allowing teams to focus on high-value activities.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Reduced Errors</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">AI systems perform tasks consistently without fatigue, reducing mistakes caused by human oversight.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Improved Customer Experience</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">AI chatbots and automated responses provide instant support, improving customer satisfaction and response times.</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="text-lg font-space-grotesk font-bold text-white mb-2">Data-Driven Insights</h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed">AI automation systems collect and analyze data, providing actionable insights for better business decisions.</p>
            </GlassCard>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Common AI Automation Mistakes</h2>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Automating broken processes</strong> — Automating an inefficient process only makes bad results faster. Fix the process first.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Lack of human oversight</strong> — AI systems need monitoring and occasional intervention. Fully hands-off automation can lead to errors going unnoticed.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>Ignoring data quality</strong> — AI models are only as good as the data they are trained on. Poor data leads to poor automation outcomes.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Best Practices for AI Automation</h2>
          <ul className="space-y-3 text-white/60 font-inter text-base">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Start small</strong> — Identify one repetitive task and automate it successfully before expanding to more complex workflows.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Measure outcomes</strong> — Track metrics such as time saved, error reduction, and customer satisfaction to evaluate automation success.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
              <span><strong>Plan for integration</strong> — Ensure your AI automation systems integrate with existing tools such as CRMs, email platforms, and databases.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-3">
            <FaqItem
              q="What is the difference between AI automation and traditional automation?"
              a="Traditional automation follows predefined rules and cannot handle unexpected scenarios. AI automation uses machine learning and natural language processing to adapt to new situations, understand context, and improve over time."
            />
            <FaqItem
              q="How does DRAKVEX implement AI automation for businesses?"
              a="DRAKVEX designs and builds custom AI automation systems including chatbots, data processing pipelines, and intelligent agents. Each solution is tailored to the specific workflow and business needs of the client."
            />
            <FaqItem
              q="Is AI automation expensive to implement?"
              a="The cost depends on the complexity of the automation. Simple chatbot automation is more affordable than complex multi-system integrations. DRAKVEX provides cost-effective solutions that deliver measurable ROI through time savings and efficiency gains."
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-space-grotesk font-bold text-white mb-4">Summary</h2>
          <GlassCard className="p-6">
            <p className="text-white/80 font-inter text-base leading-relaxed">
              AI automation uses artificial intelligence to automate repetitive tasks, streamline workflows, and improve business efficiency. Any business handling repetitive tasks, data processing, or customer inquiries can benefit from AI automation. DRAKVEX, founded by David Joshwa, builds custom AI automation systems including chatbots, data pipelines, and intelligent agents that help businesses save time, reduce costs, and scale operations effectively.
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
