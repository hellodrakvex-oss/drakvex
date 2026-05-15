"use client";

import { motion } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { MagneticButton } from "./ui/MagneticButton";
import { Mail, MessageCircle, Calendar } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative z-10 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Info */}
        <div className="lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 leading-tight"
          >
            Ready to Build <br />
            <span className="text-brand-blue">Something Powerful?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 font-inter text-lg mb-12 max-w-md"
          >
            Let's transform your business with premium digital experiences and AI automation.
          </motion.p>

          <div className="flex flex-col gap-6">
            <a href="mailto:hello@drakvex.in" className="flex items-center gap-4 text-white hover:text-brand-blue transition-colors group">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:border-brand-blue/50 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-space-grotesk text-xl">hello@drakvex.in</span>
            </a>

            <div className="flex flex-wrap gap-4 mt-4">
              <MagneticButton variant="secondary" className="px-6 py-3">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </MagneticButton>
              <MagneticButton variant="outline" className="px-6 py-3">
                <Calendar className="w-4 h-4" /> Book Meeting
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:w-1/2">
          <GlassCard className="p-8 md:p-12">
            <form
              className="flex flex-col gap-6"
              onSubmit={async (e) => {
                e.preventDefault();

                const form = e.currentTarget;

                const formData = new FormData(form);

                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");

                const res = await fetch("/api/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name,
                    email,
                    message,
                  }),
                });

                if (res.ok) {
                  alert("Message sent successfully 🚀");
                  form.reset();
                } else {
                  alert("Something went wrong ❌");
                }
              }}
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-inter text-white/60">Name</label>
                <input
                  name="name"
                  type="text"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-inter text-white/60">Email</label>
                <input
                  name="email"
                  type="email"
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-inter text-white/60">Project Details</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button className="w-full bg-white text-black font-space-grotesk font-bold text-lg py-4 rounded-lg mt-4 hover:bg-brand-blue hover:text-white transition-colors duration-300">
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
