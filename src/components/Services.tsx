"use client";

import { GlassCard } from "./ui/GlassCard";
import { Monitor, Smartphone, Bot, MessageSquare, Cloud, ShoppingCart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description: "Website development is the process of designing and building websites that help businesses establish an online presence, generate leads, and improve customer engagement. DRAKVEX builds high-performance marketing websites and scalable web applications using modern technologies such as Next.js, React, and TypeScript. Each website is optimized for speed, security, mobile responsiveness, and search engines.",
    icon: Monitor,
  },
  {
    title: "UI/UX Design",
    description: "UI/UX design is the practice of creating user interfaces and experiences that make digital products intuitive, accessible, and visually appealing. DRAKVEX creates premium, user-centric designs that help businesses convert visitors into customers. This includes wireframing, prototyping, visual design, and usability testing to ensure a seamless user experience.",
    icon: Smartphone,
  },
  {
    title: "AI Automation",
    description: "AI automation uses artificial intelligence to automate repetitive tasks, streamline workflows, and reduce manual effort for businesses. DRAKVEX builds intelligent systems including custom chatbots, data processing pipelines, and AI agents that save hours of manual work each day. These solutions help businesses operate more efficiently and scale their operations.",
    icon: Bot,
  },
  {
    title: "WhatsApp Automation",
    description: "WhatsApp automation is the use of automated messaging tools to handle customer support, send notifications, and generate leads through the WhatsApp platform. DRAKVEX builds automated customer support systems and lead generation bots that help businesses communicate with customers at scale while maintaining a personal touch.",
    icon: MessageSquare,
  },
  {
    title: "Cloud Deployment",
    description: "Cloud deployment is the process of hosting applications on cloud infrastructure to ensure security, high availability, and automatic scaling. DRAKVEX sets up secure, highly available, and auto-scaling infrastructure on platforms such as Vercel, AWS, and other cloud providers. This ensures websites and applications remain fast and reliable even during traffic spikes.",
    icon: Cloud,
  },
  {
    title: "E-Commerce",
    description: "E-commerce development is the creation of online stores that enable businesses to sell products and services over the internet. DRAKVEX builds custom storefronts designed to maximize conversion rates, with features such as product management, payment processing, inventory tracking, and mobile-optimized shopping experiences.",
    icon: ShoppingCart,
  },
  {
    title: "SEO & Digital",
    description: "SEO and digital marketing are strategies used to improve a website's visibility in search engine results and attract more visitors. DRAKVEX implements data-driven strategies including technical SEO, on-page optimization, content strategy, and performance optimization to help businesses rank higher and reach their target audience effectively.",
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
