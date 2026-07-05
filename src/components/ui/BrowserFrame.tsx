"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url: string;
  className?: string;
  children?: ReactNode;
}

export const BrowserFrame = ({ src, alt, url, className, children }: BrowserFrameProps) => {
  return (
    <div className={cn("relative group", className)}>
      <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-black/60 backdrop-blur-sm shadow-2xl shadow-black/50 transition-shadow duration-700 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]">
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-10" />

        {/* Window controls bar */}
        <div className="relative h-9 md:h-10 px-4 flex items-center gap-2 bg-white/[0.02] border-b border-white/[0.05] z-10">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/70 group-hover:bg-red-500 transition-colors duration-300" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/70 group-hover:bg-yellow-500 transition-colors duration-300" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/70 group-hover:bg-green-500 transition-colors duration-300" />
          <div className="flex-1 flex justify-center px-2">
            <div className="w-full max-w-[180px] md:max-w-[240px] px-2.5 md:px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.04] text-[10px] md:text-[11px] text-white/40 font-inter truncate text-center">
              {url}
            </div>
          </div>
        </div>

        {/* Screenshot area */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            className="object-cover object-top transition-all duration-700 group-hover:scale-105"
            loading="lazy"
          />

          {/* Always-visible gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-700" />

          {/* Content overlay on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
            {children || (
              <m.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-inter font-medium hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Website
                <ArrowUpRight className="w-4 h-4" />
              </m.a>
            )}
          </div>
        </div>

        {/* Bottom subtle glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      </div>

      {/* Soft glow behind card on hover */}
      <div className="absolute -inset-4 bg-gradient-to-br from-brand-blue/0 via-brand-blue/0 to-brand-purple/0 group-hover:from-brand-blue/[0.03] group-hover:via-brand-purple/[0.02] group-hover:to-brand-blue/[0.01] rounded-3xl blur-3xl transition-all duration-1000 -z-10" />
    </div>
  );
};
