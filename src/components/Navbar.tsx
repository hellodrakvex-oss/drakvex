"use client";

import { useState} from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center py-6 ${isScrolled ? "py-4" : "py-6"
        }`}
    >
      <div className={`
        flex items-center justify-between px-6 py-3 mx-4 w-full max-w-7xl
        transition-all duration-500 rounded-full
        ${isScrolled ? "bg-black/40 backdrop-blur-md border border-white/10" : "bg-transparent border-transparent"}
      `}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image
            src="/Drakvex.png"
            alt="DRAKVEX Logo"
            width={150}
            height={150}

          />
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-inter text-white/70 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-blue group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <MagneticButton onClick={() => window.location.href = "#contact"} variant="primary" className="py-2 px-5 text-sm">
            Start Project
          </MagneticButton>
        </div>
      </div>
    </motion.nav>
  );
};
