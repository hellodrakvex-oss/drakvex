import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LenisScroll } from "@/components/ui/LenisScroll";
import { Preloader } from "@/components/ui/Preloader";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DRAKVEX | Modern Websites & AI Systems",
  description: "We help startups and businesses build powerful digital experiences using cutting-edge web technologies and AI automation.",
  openGraph: {
    title: "DRAKVEX | Modern Websites & AI Systems",
    description: "Premium digital experiences and AI automation.",
    url: "https://drakvex.in",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`}>
      <body className="bg-black text-white min-h-screen">
        <div className="noise-overlay"></div>
        <Preloader />
        <CustomCursor />
        <LenisScroll>{children}</LenisScroll>
        <Toaster
    position="top-right"
    richColors
    closeButton
  />
      </body>
    </html>
  );
}
