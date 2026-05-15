"use client";

import { GlassCard } from "./ui/GlassCard";
import { Monitor, Smartphone, Bot, MessageSquare, Cloud, ShoppingCart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "High-performance marketing websites and scalable web applications.",
    icon: Monitor,
  },
  {
    title: "UI/UX Design",
    description: "Premium, user-centric designs that convert visitors into customers.",
    icon: Smartphone,
  },
  {
    title: "AI Automation",
    description: "Intelligent systems to automate repetitive tasks and save hours.",
    icon: Bot,
  },
  {
    title: "WhatsApp Automation",
    description: "Automated customer support and lead generation bots.",
    icon: MessageSquare,
  },
  {
    title: "Cloud Deployment",
    description: "Secure, highly available, and auto-scaling infrastructure.",
    icon: Cloud,
  },
  {
    title: "E-Commerce",
    description: "Custom storefronts designed to maximize conversion rates.",
    icon: ShoppingCart,
  },
  {
    title: "SEO & Digital",
    description: "Data-driven strategies to dominate search rankings.",
    icon: TrendingUp,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 relative z-10 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-space-grotesk font-bold mb-6"
            >
              Premium Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 font-inter text-lg"
            >
              From stunning interfaces to intelligent automation, we provide end-to-end digital engineering for modern brands.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <GlassCard 
              key={index} 
              delay={index * 0.1}
              className="p-8 hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-purple/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all">
                <service.icon className="w-6 h-6 text-white/80 group-hover:text-brand-purple transition-colors" />
              </div>
              <h3 className="text-xl font-space-grotesk font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-white/50 font-inter text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
