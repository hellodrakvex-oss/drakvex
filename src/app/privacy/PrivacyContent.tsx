"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyContent() {
  const lastUpdated = "May 2026";

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
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
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          Your privacy and data security matter to us.
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

      {/* Content Cards */}
      <motion.div
        className="mx-auto max-w-6xl space-y-12 py-20 px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
      >
        {/* Information Collection */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li><strong>Contact‑form submissions</strong> – name, email, company, and message.</li>
            <li><strong>Technical data</strong> – IP address, device type, operating system, and browser.</li>
            <li><strong>Cookies & local storage</strong> – session identifiers, preference settings, and marketing opt‑ins.</li>
          </ul>
        </GlassCard>
        {/* Contact Form Data */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Contact Form Data Handling</h2>
          <p className="text-white/80">
            Submissions are stored in an encrypted PostgreSQL database and are used solely to respond to your inquiry. We never share this data with third parties without your explicit consent.
          </p>
        </GlassCard>
        {/* Cookies */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-white/80">We use three cookie categories:</p>
          <ul className="list-disc list-inside space-y-2 mt-2 text-white/80">
            <li><strong>Essential</strong> – maintain session state and security.</li>
            <li><strong>Functional</strong> – remember theme & language preferences.</li>
            <li><strong>Analytics</strong> – Google Analytics 4 & Plausible Analytics to improve performance. Opt‑out via the cookie banner.</li>
          </ul>
        </GlassCard>
        {/* Analytics */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Analytics & Tracking</h2>
          <p className="text-white/80">
            We employ industry‑standard analytics to understand usage patterns, improve UI/UX, and monitor site health. No personal identifiers are exported to third‑party services.
          </p>
        </GlassCard>
        {/* Third‑Party Services */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Third‑Party Services</h2>
          <p className="text-white/80">DRAKVEX integrates with the following external providers:</p>
          <ul className="list-disc list-inside space-y-2 mt-2 text-white/80">
            <li><strong>Google Analytics 4</strong> – traffic & conversion analysis.</li>
            <li><strong>Plausible Analytics</strong> – privacy‑first stats.</li>
            <li><strong>Supabase</strong> – realtime database for portfolio projects (no user data is stored here).</li>
          </ul>
          <p className="mt-4 text-white/60">These services may set their own cookies; their privacy policies apply.</p>
        </GlassCard>
        {/* Data Security */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-white/80">
            All data in transit uses TLS 1.3 encryption. At rest, we encrypt databases with AES‑256. Access is restricted to authorized personnel, and we perform regular security audits and penetration testing.
          </p>
        </GlassCard>
        {/* Client Confidentiality */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Client Confidentiality</h2>
          <p className="text-white/80">
            For project‑specific data (e.g., custom AI models, proprietary designs), we sign NDAs and store files in isolated, encrypted buckets. We never disclose client data to third parties without a signed agreement.
          </p>
        </GlassCard>
        {/* User Rights */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Your Rights</h2>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li><strong>Access & download</strong> – request a copy of all personal data we hold about you.</li>
            <li><strong>Correction</strong> – ask us to correct inaccurate data.</li>
            <li><strong>Deletion</strong> – request removal of your data (except where legally required to retain).</li>
            <li><strong>Data portability</strong> – receive your data in a machine‑readable format.</li>
            <li><strong>Opt‑out</strong> – withdraw consent for marketing communications at any time via the link at the bottom of our emails.</li>
          </ul>
          <p className="mt-4 text-white/60">To exercise any right, please contact us using the details below.</p>
        </GlassCard>
        {/* Policy Updates */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Policy Updates</h2>
          <p className="text-white/80">
            We may revise this policy to reflect regulatory changes or new features. The “Last Updated” date at the top indicates the most recent version. Continued use of the website after changes implies acceptance of the updated terms.
          </p>
        </GlassCard>
        {/* Contact */}
        <GlassCard>
          <h2 className="font-space-grotesk text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-white/80">If you have questions, concerns, or requests regarding your data, please reach out:</p>
          <address className="mt-4 not-italic text-white/80">
            <strong>DRAKVEX</strong> – IT Services & AI Automation<br />
            Founder: David&nbsp;Joshwa<br />
            <a href="mailto:hello@drakvex.in" className="underline hover:text-brand-blue transition-colors">hello@drakvex.in</a><br />
            <a href="https://www.drakvex.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-blue transition-colors">https://www.drakvex.in</a>
          </address>
        </GlassCard>
      </motion.div>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-black via-[#1a1a2a] to-black">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#3B82F6]/30 rounded-full filter blur-3xl animate-float" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#8B5CF6]/30 rounded-full filter blur-3xl animate-float animation-delay-2000" />
        </div>
        <div className="mx-auto max-w-3xl text-center space-y-8 px-6">
          <h3 className="font-space-grotesk text-4xl font-bold text-white">Questions About Our Privacy Practices?</h3>
          <p className="text-white/70 text-lg">Reach out directly or navigate back to the homepage.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="mailto:hello@drakvex.in" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 border border-white/20 rounded-xl text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              Contact Us
            </a>
            <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-brand-blue/30 border border-brand-blue/40 rounded-xl text-white backdrop-blur-md hover:bg-brand-blue/50 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,242,0.3)]">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`
        bg-white/5 backdrop-blur-xl border border-[rgba(255,255,255,0.08)]
        rounded-xl p-8 sm:p-10 md:p-12
        text-white/90
        hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
        transition-shadow duration-300
        ${className}
      `}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
