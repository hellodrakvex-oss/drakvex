"use client";

import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is DRAKVEX?",
    answer:
      "DRAKVEX is a digital agency founded by David Joshwa that specializes in website development, AI automation, branding, UI/UX design, and digital business solutions. The agency helps startups and established businesses build modern digital products and AI-powered systems to accelerate growth.",
  },
  {
    question: "Who founded DRAKVEX?",
    answer:
      "DRAKVEX was founded by David Joshwa, who serves as the Founder and Developer of the agency. David Joshwa is a developer and entrepreneur focused on building modern websites, AI automation systems, and digital solutions for businesses.",
  },
  {
    question: "What services does DRAKVEX provide?",
    answer:
      "DRAKVEX provides website development, AI automation, branding, UI/UX design, and digital business solutions. Additional services include WhatsApp automation, e-commerce development, cloud deployment, SEO, and digital marketing strategies.",
  },
  {
    question: "What industries does DRAKVEX serve?",
    answer:
      "DRAKVEX serves a variety of industries including e-commerce, agriculture, fashion, cultural organizations, and technology startups. The agency builds custom digital solutions tailored to the specific needs of each industry and business size.",
  },
  {
    question: "What is AI automation?",
    answer:
      "AI automation is the use of artificial intelligence to automate repetitive tasks, streamline workflows, and reduce manual effort. DRAKVEX builds custom AI automation systems including chatbots, data processing pipelines, and intelligent agents that help businesses operate more efficiently.",
  },
  {
    question: "How does DRAKVEX build websites?",
    answer:
      "DRAKVEX builds websites using modern technologies such as Next.js, React, TypeScript, and Tailwind CSS. The development process follows four phases: discovery, design, development, and launch. Each website is designed to be fast, secure, mobile-responsive, and optimized for search engines.",
  },
  {
    question: "Why choose DRAKVEX?",
    answer:
      "Clients choose DRAKVEX for its combination of modern UI/UX design, AI-powered systems, SEO optimization, scalable architecture, and dedicated support. DRAKVEX delivers end-to-end digital solutions that help businesses establish a strong online presence and automate operations.",
  },
  {
    question: "How can I contact DRAKVEX?",
    answer:
      "You can contact DRAKVEX by emailing hello@drakvex.in, sending a message through the contact form on the website, or reaching out via WhatsApp at +91 9150254231. The team typically responds within 24 hours.",
  },
  {
    question: "Does DRAKVEX build custom software?",
    answer:
      "Yes, DRAKVEX builds custom software solutions including business management systems, data processing tools, and AI-powered applications. Each solution is designed to meet the specific operational needs of the client.",
  },
  {
    question: "Does DRAKVEX provide SEO?",
    answer:
      "Yes, DRAKVEX provides SEO and digital marketing services. The agency implements data-driven strategies including technical SEO, on-page optimization, content strategy, and performance optimization to help websites rank higher in search engine results.",
  },
  {
    question: "Does DRAKVEX offer website maintenance?",
    answer:
      "Yes, DRAKVEX offers website maintenance and support services. This includes regular updates, security monitoring, performance optimization, content updates, and technical support to ensure websites remain secure and performant.",
  },
  {
    question: "Where is DRAKVEX based?",
    answer:
      "DRAKVEX is based in India and serves clients worldwide. The agency operates remotely, delivering digital services to businesses across different countries and time zones.",
  },
  {
    question: "Who is David Joshwa?",
    answer:
      "David Joshwa is the Founder and Developer of DRAKVEX. He is a developer and entrepreneur who builds modern websites, AI automation systems, business platforms, and digital solutions. He founded DRAKVEX with the mission of helping businesses establish a stronger digital presence through modern technology.",
  },
  {
    question: "How can I start a project with DRAKVEX?",
    answer:
      "To start a project with DRAKVEX, contact the team via email at hello@drakvex.in or through the contact form on the website. Describe your project goals and requirements, and the team will respond with a proposal, timeline, and pricing structure tailored to your needs.",
  },
  {
    question: "What technologies does DRAKVEX use?",
    answer:
      "DRAKVEX uses modern technologies including Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Node.js, and Vercel for cloud deployment. For AI automation, the agency builds custom AI agents, chatbots, and workflow automation systems using various AI frameworks and APIs.",
  },
];

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl hover:border-white/[0.15] transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
        aria-expanded={open}
      >
        <h3 className="text-lg font-space-grotesk font-bold text-white pr-4">
          {question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="px-6 text-white/60 font-inter text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </motion.article>
  );
}

export default function FaqContent() {
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
              FAQ
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter leading-[1.1] mb-6">
            Frequently Asked
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">
              Questions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-inter max-w-3xl mx-auto">
            Everything you need to know about DRAKVEX, its services, founder David Joshwa, and how to start your digital project.
          </p>
        </motion.div>
      </section>

      <section className="relative z-10 py-10 pb-20 px-6 max-w-3xl mx-auto w-full">
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="relative z-10 py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-12 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-white/60 font-inter text-lg max-w-2xl mx-auto mb-8">
              Reach out to DRAKVEX and the team will get back to you within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-space-grotesk font-bold hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-space-grotesk font-bold hover:bg-white/20 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
