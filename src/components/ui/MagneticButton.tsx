"use client";

import { HTMLMotionProps, m } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export const MagneticButton = ({ children, className, variant = "primary", ...props }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "bg-[#2563eb] text-white hover:bg-[#2563eb]/90 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]",
    outline: "bg-transparent border border-white/20 text-white hover:bg-white/5",
  };

  return (
    <m.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative px-6 py-3 rounded-full font-inter font-medium transition-colors duration-300 overflow-hidden group",
        variants[variant],
        className
      )}
      data-magnetic
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      {variant !== "primary" && (
        <m.div
          className="absolute inset-0 z-0 bg-gradient-to-r from-brand-blue/0 via-white/10 to-brand-purple/0"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
    </m.button>
  );
};
