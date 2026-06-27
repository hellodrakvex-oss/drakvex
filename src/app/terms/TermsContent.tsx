// src/app/terms/TermsContent.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Reusable glass card component
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-xl p-8 sm:p-10 md:p-12 text-white/90 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-shadow duration-300 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Animation variants for staggered sections
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function TermsContent() {
  const lastUpdated = "May 2026";
  return (
    <main className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      {/* Hero */}
      <motion.header
        className="relative flex flex-col items-center justify-center py-28 text-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.12),transparent_70%)] animate-aurora-spin" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-[#8B5CF6]/5 to-[#3B82F6]/10" />
          </div>
        </div>
        <h1 className="font-space-grotesk font-bold text-5xl sm:text-6xl tracking-wider text-white">
          Terms of Service
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          Please review the terms and conditions governing the use of DRAKVEX services.
        </p>
        <motion.span
          className="mt-6 inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-white/80 border border-white/20"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Last Updated — {lastUpdated}
        </motion.span>
        <motion.div
          className="mt-8 w-48 h-0.5 bg-white/20 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "12rem" }}
          transition={{ delay: 0.5, duration: 0.6 }}
        />
      </motion.header>

      {/* Legal Sections */}
      <motion.div
        className="mx-auto max-w-5xl space-y-12 py-20 px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
      >
        {/* Section 1 – Introduction */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-white/80">
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of DRAKVEX’s platforms, products, and services (collectively, &quot;Services&quot;).
          </p>
        </GlassCard>

        {/* Section 2 – Acceptance of Terms */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
          <p className="text-white/80">
            By creating an account or otherwise using our Services, you affirm that you are at least 18 years old and have the legal capacity to enter into a binding agreement.
          </p>
        </GlassCard>

        {/* Section 3 – Services Offered */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">3. Services Offered</h2>
          <p className="text-white/80">
            DRAKVEX provides AI‑driven automation, consulting, and custom software development services. Details of each offering are described on our website and may be updated from time to time.
          </p>
        </GlassCard>

        {/* Section 4 – Client Responsibilities */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">4. Client Responsibilities</h2>
          <p className="text-white/80">
            You agree to provide accurate information, comply with all applicable laws, and refrain from any activity that could damage, disable, or impair our Services.
          </p>
        </GlassCard>

        {/* Section 5 – Payments & Billing */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">5. Payments & Billing</h2>
          <p className="text-white/80">
            All fees are payable in USD unless otherwise agreed. Invoices are due upon receipt. Late payments may incur interest at the maximum rate permitted by law.
          </p>
        </GlassCard>

        {/* Section 6 – Project Timelines */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">6. Project Timelines</h2>
          <p className="text-white/80">
            Project schedules are estimates and may change due to scope adjustments, resource availability, or external factors. We will communicate significant changes promptly.
          </p>
        </GlassCard>

        {/* Section 7 – Intellectual Property */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">7. Intellectual Property</h2>
          <p className="text-white/80">
            All pre‑existing IP and third‑party materials remain the property of their owners. Deliverables created for you under a paid contract become your exclusive property upon full payment, unless otherwise specified.
          </p>
        </GlassCard>

        {/* Section 8 – Confidentiality */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">8. Confidentiality</h2>
          <p className="text-white/80">
            Both parties agree to keep confidential any non‑public information disclosed during the engagement and to use it solely for the purpose of fulfilling the contract.
          </p>
        </GlassCard>

        {/* Section 9 – Revisions & Support */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">9. Revisions & Support</h2>
          <p className="text-white/80">
            Standard revisions are included as defined in the proposal. Additional changes or support beyond the scope will be billed at our standard rates.
          </p>
        </GlassCard>

        {/* Section 10 – Third‑Party Services */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">10. Third‑Party Services</h2>
          <p className="text-white/80">
            Our Services may incorporate third‑party APIs or tools. You are responsible for complying with those providers&apos; terms and any associated fees.
          </p>
        </GlassCard>

        {/* Section 11 – Limitation of Liability */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
          <p className="text-white/80">
            To the fullest extent permitted by law, DRAKVEX shall not be liable for indirect, incidental, or consequential damages arising from the use of our Services.
          </p>
        </GlassCard>

        {/* Section 12 – Termination */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">12. Termination</h2>
          <p className="text-white/80">
            Either party may terminate the agreement with 30 days written notice. Upon termination, all outstanding fees become immediately due.
          </p>
        </GlassCard>

        {/* Section 13 – Policy Updates */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">13. Policy Updates</h2>
          <p className="text-white/80">
            We reserve the right to modify these Terms at any time. Updated terms will be posted on our website with a new &quot;Last Updated&quot; date
          </p>
        </GlassCard>

        {/* Section 14 – Contact Information */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">14. Contact Information</h2>
          <p className="text-white/80">
            For any questions regarding these Terms, please contact us at
            <a href="mailto:hello@drakvex.in" className="underline hover:text-brand-blue transition-colors ml-1">hello@drakvex.in</a>.
          </p>
        </GlassCard>
      </motion.div>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-black via-[#1a1a2a] to-black">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3B82F6]/30 rounded-full filter blur-3xl animate-float" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#8B5CF6]/30 rounded-full filter blur-3xl animate-float animation-delay-2000" />
        </div>
        <div className="mx-auto max-w-3xl text-center space-y-8 px-6">
          <h3 className="font-space-grotesk text-4xl font-bold text-white">Need Clarification About Our Terms?</h3>
          <a href="mailto:hello@drakvex.in" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            Contact Support
          </a>
          <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-blue/30 border border-brand-blue/40 rounded-xl text-white backdrop-blur-md hover:bg-brand-blue/50 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,242,0.3)]">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
