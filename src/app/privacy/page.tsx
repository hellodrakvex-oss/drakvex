// src/app/privacy/page.tsx
import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | DRAKVEX",
  description:
    "Read the official privacy policy of DRAKVEX, a modern IT services and AI automation company.",
  openGraph: {
    title: "Privacy Policy | DRAKVEX",
    description:
      "Your privacy and data security matter to us. Learn how DRAKVEX collects, uses, and protects your information.",
    url: "https://drakvex.in/privacy",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "DRAKVEX — Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | DRAKVEX",
    description:
      "Read the official privacy policy of DRAKVEX, a modern IT services and AI automation company.",
    images: ["/og-privacy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://drakvex.in/privacy",
  },
};

export default function PrivacyPolicy() {
  return <PrivacyContent />;
}
