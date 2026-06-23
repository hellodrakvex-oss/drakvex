import type { Metadata } from "next";
import { FounderContent } from "./FounderContent";

export const metadata: Metadata = {
  title: "David Joshwa | Founder of DRAKVEX",
  description:
    "Meet David Joshwa, Founder of DRAKVEX, building modern websites, AI automation systems, and digital growth solutions.",
  openGraph: {
    title: "David Joshwa | Founder of DRAKVEX",
    description:
      "Meet David Joshwa, Founder of DRAKVEX, building modern websites, AI automation systems, and digital growth solutions.",
    url: "https://drakvex.in/founder",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "David Joshwa - Founder of DRAKVEX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Joshwa | Founder of DRAKVEX",
    description:
      "Meet David Joshwa, Founder of DRAKVEX, building modern websites, AI automation systems, and digital growth solutions.",
    images: ["/Drakvex.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drakvex.in/founder" },
};

const personLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
        { "@type": "ListItem", position: 2, name: "Founder", item: "https://drakvex.in/founder" },
      ],
    },
    {
      "@type": "Person",
      name: "David Joshwa",
      jobTitle: "Founder & Developer",
      worksFor: {
        "@type": "Organization",
        name: "DRAKVEX",
      },
      url: "https://drakvex.in/founder",
      description:
        "Founder of DRAKVEX and builder of modern websites, AI systems, and business automation solutions.",
    },
  ],
};

export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <FounderContent />
    </>
  );
}
