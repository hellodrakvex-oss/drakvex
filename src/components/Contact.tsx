"use client";

import { m } from "framer-motion";
import { GlassCard } from "./ui/GlassCard";
import { MagneticButton } from "./ui/MagneticButton";
import {
  Mail,
  MessageCircle,
  Calendar,
} from "lucide-react";

import { toast } from "sonner";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 relative z-10 px-6 max-w-7xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Info */}
        <div className="lg:w-1/2">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 leading-tight"
          >
            Ready to Build <br />

            <span className="text-brand-blue">
              Something Powerful?
            </span>
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 font-inter text-lg mb-12 max-w-md"
          >
            Let&apos;s transform your business with
            premium digital experiences and AI
            automation.
          </m.p>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:hello@drakvex.in"
              className="flex items-center gap-4 text-white hover:text-brand-blue transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-brand-blue/10 group-hover:border-brand-blue/50 transition-all">
                <Mail className="w-5 h-5" />
              </div>

              <span className="font-space-grotesk text-xl">
                hello@drakvex.in
              </span>
            </a>

            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=919150254231&text=Hello%20Drakvex%2C%20I%20want%20to%20know%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton
                  variant="secondary"
                  className="px-6 py-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </MagneticButton>
              </a>

              <a
                href="mailto:hello@drakvex.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton
                  variant="outline"
                  className="px-6 py-3"
                >
                  <Calendar className="w-4 h-4" />
                  Book Meeting
                </MagneticButton>
              </a>
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

                const name = formData
                  .get("name")
                  ?.toString()
                  .trim();

                const email = formData
                  .get("email")
                  ?.toString()
                  .trim();

                const message = formData
                  .get("message")
                  ?.toString()
                  .trim();

                // RESET STATES
                const fields =
                  form.querySelectorAll("input, textarea");

                fields.forEach((field) => {
                  field.classList.remove(
                    "border-red-500",
                    "ring-4",
                    "ring-red-500/20",
                    "shake"
                  );
                });

                let hasError = false;

                // NAME VALIDATION
                if (!name) {
                  const input =
                    form.querySelector(
                      'input[name="name"]'
                    );

                  input?.classList.add(
                    "border-red-500",
                    "ring-4",
                    "ring-red-500/20",
                    "shake"
                  );

                  toast.error("Name is required", {
                    description:
                      "Please enter your full name.",
                  });

                  hasError = true;
                }

                // EMAIL VALIDATION
                const emailRegex =
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!email || !emailRegex.test(email)) {
                  const input =
                    form.querySelector(
                      'input[name="email"]'
                    );

                  input?.classList.add(
                    "border-red-500",
                    "ring-4",
                    "ring-red-500/20",
                    "shake"
                  );

                  toast.error("Invalid email address", {
                    description:
                      "Please enter a valid business email.",
                  });

                  hasError = true;
                }

                // MESSAGE VALIDATION
                if (!message) {
                  const textarea =
                    form.querySelector(
                      'textarea[name="message"]'
                    );

                  textarea?.classList.add(
                    "border-red-500",
                    "ring-4",
                    "ring-red-500/20",
                    "shake"
                  );

                  toast.error("Project details missing", {
                    description:
                      "Tell us about your project goals.",
                  });

                  hasError = true;
                }

                if (hasError) return;

                const toastId = toast.loading(
                  "Sending Message...",
                  {
                    description:
                      "Connecting with DRAKVEX 🚀",
                  }
                );

                try {
              

                  // SEND EMAIL
                  const mailRes = await fetch(
                    "/api/contact",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type":
                          "application/json",
                      },
                      body: JSON.stringify({
                        name,
                        email,
                        message,
                      }),
                    }
                  );

                  if (mailRes.ok) {
                    toast.success(
                      "Message Sent Successfully 🚀",
                      {
                        id: toastId,

                        description:
                          "Our team will contact you shortly.",

                        duration: 5000,
                      }
                    );

                    form.reset();
                  } else {
                    toast.error(
                      "Failed to send message ❌",
                      {
                        id: toastId,

                        description:
                          "Please try again later.",
                      }
                    );
                  }
                } catch (error) {
                  console.log(error);

                  toast.error("Server Error ❌", {
                    id: toastId,

                    description:
                      "Something went wrong.",
                  });
                }
              }}
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-inter text-white/60">
                  Name
                </label>

                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 hover:border-white/20"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-inter text-white/60">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 hover:border-white/20"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-inter text-white/60">
                  Project Details
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals..."
                  className="w-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 hover:border-white/20 resize-none"
                />
              </div>

              {/* Button */}
              <button className="w-full bg-white text-black font-space-grotesk font-bold text-lg py-4 rounded-2xl mt-4 hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.35)] active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
