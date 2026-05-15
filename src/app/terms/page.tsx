// src/app/terms/page.tsx
import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | DRAKVEX",
  description: "Review the official Terms of Service for DRAKVEX, a modern IT services and AI automation company.",
  openGraph: {
    title: "Terms of Service | DRAKVEX",
    description: "Review the official Terms of Service for DRAKVEX, a modern IT services and AI automation company.",
    url: "https://www.drakvex.in/terms",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "website",
    images: [{
      url: "/og-terms.jpg",
      width: 1200,
      height: 630,
      alt: "DRAKVEX — Terms of Service",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | DRAKVEX",
    description: "Review the official Terms of Service for DRAKVEX, a modern IT services and AI automation company.",
    images: ["/og-terms.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.drakvex.in/terms" },
};

export default function TermsPage() {
  return <TermsContent />;
}
