"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or wait for window load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <m.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        >
          {/* Animated glow background */}
          <m.div
            className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-transparent to-brand-purple/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          <div className="relative flex flex-col items-center">
            {/* Logo Text */}
            <div className="overflow-hidden">
              <m.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1], // cinematic easing
                  delay: 0.2,
                }}
                className="text-5xl md:text-7xl font-space-grotesk font-bold tracking-tighter text-white"
              >
                DRAKVEX
              </m.p>
            </div>
            
            {/* Tagline */}
            <div className="overflow-hidden mt-2">
              <m.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6,
                }}
                className="text-sm md:text-base font-inter tracking-widest text-white/50 uppercase"
              >
                Digital Excellence
              </m.p>
            </div>

            {/* Loading line */}
            <m.div
              className="w-0 h-[1px] bg-white mt-8"
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
            />
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};
