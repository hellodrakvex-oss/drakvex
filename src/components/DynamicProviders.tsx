"use client";

import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("@/components/ui/Preloader").then(m => m.Preloader), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor").then(m => m.CustomCursor), { ssr: false });
const LenisScroll = dynamic(() => import("@/components/ui/LenisScroll").then(m => m.LenisScroll), { ssr: false });

export function DynamicProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <LenisScroll>{children}</LenisScroll>
    </>
  );
}
