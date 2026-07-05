"use client";

import { m } from "framer-motion";

interface StatusBadgeProps {
  status: "LIVE" | "Coming Soon";
}

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isLive = status === "LIVE";

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border backdrop-blur-md"
      aria-label={`Status: ${status}`}
      role="status"
      style={{
        backgroundColor: isLive ? "rgba(34, 197, 94, 0.08)" : "rgba(234, 179, 8, 0.08)",
        borderColor: isLive ? "rgba(34, 197, 94, 0.2)" : "rgba(234, 179, 8, 0.2)",
      }}
    >
      <span className="relative flex h-2 w-2">
        {isLive && (
          <m.span
            className="absolute inline-flex h-full w-full rounded-full bg-green-500"
            animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${
            isLive ? "bg-green-500" : "bg-yellow-500"
          }`}
        />
      </span>
      <span
        className={`text-[10px] font-inter font-semibold tracking-wider uppercase ${
          isLive ? "text-green-400" : "text-yellow-400"
        }`}
      >
        {status}
      </span>
    </m.div>
  );
};
