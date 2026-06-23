"use client";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative z-10 pt-20 pb-10 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="/Drakvex.png"
              alt="DRAKVEX Logo"
              width={180}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-white/50 font-inter max-w-sm mb-6">
            Building world-class digital experiences and AI automation systems for modern businesses.
          </p>

        </div>

        <div>
          <h4 className="font-space-grotesk font-bold text-white mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="/about" className="text-white/50 hover:text-brand-blue transition-colors font-inter text-sm">About</a></li>
            <li><a href="/founder" className="text-white/50 hover:text-brand-blue transition-colors font-inter text-sm">Founder</a></li>
            <li><a href="#services" className="text-white/50 hover:text-brand-blue transition-colors font-inter text-sm">Services</a></li>
            <li><a href="#contact" className="text-white/50 hover:text-brand-blue transition-colors font-inter text-sm">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-space-grotesk font-bold text-white mb-6">Legal</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="/privacy" className="text-white/50 hover:text-brand-blue transition-colors font-inter text-sm">Privacy Policy</a></li>
            <li><a href="/terms" className="text-white/50 hover:text-brand-blue transition-colors font-inter text-sm">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-white/30 font-inter text-xs">
        <p>© {new Date().getFullYear()} DRAKVEX. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Founded by{" "}
          <a href="/founder" className="text-white/50 hover:text-brand-blue transition-colors">
            David Joshwa
          </a>
        </p>
      </div>
    </footer>
  );
};
