import type { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About DRAKVEX | Modern Websites & AI Systems for Growth",
  description:
    "Learn about DRAKVEX, a digital agency founded by David Joshwa, specializing in modern websites, AI automation systems, branding, and business growth solutions.",
  openGraph: {
    title: "About DRAKVEX | Modern Websites & AI Systems for Growth",
    description:
      "Learn about DRAKVEX, a digital agency founded by David Joshwa, specializing in modern websites, AI automation systems, branding, and business growth solutions.",
    url: "https://drakvex.in/about",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "About DRAKVEX - Modern Websites & AI Systems for Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About DRAKVEX | Modern Websites & AI Systems for Growth",
    description:
      "Learn about DRAKVEX, a digital agency founded by David Joshwa, specializing in modern websites, AI automation systems, branding, and business growth solutions.",
    images: ["/Drakvex.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drakvex.in/about" },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://drakvex.in/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <AboutContent />
    </>
  );
}
