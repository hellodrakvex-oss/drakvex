import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "DRAKVEX Knowledge Hub | Website Development, AI Automation & Business Growth",
  description:
    "Explore expert guides from DRAKVEX on website development, AI automation, branding, SEO, UI/UX design, and digital business growth. Learn from founder David Joshwa and the DRAKVEX team.",
  openGraph: {
    title: "DRAKVEX Knowledge Hub | Website Development, AI Automation & Business Growth",
    description:
      "Explore expert guides from DRAKVEX on website development, AI automation, branding, and digital business growth.",
    url: "https://drakvex.in/blog",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "DRAKVEX Knowledge Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRAKVEX Knowledge Hub | Website Development, AI Automation & Business Growth",
    description:
      "Explore expert guides from DRAKVEX on website development, AI automation, branding, and digital business growth.",
    images: ["/Drakvex.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drakvex.in/blog" },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
        { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: "https://drakvex.in/blog" },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "DRAKVEX Knowledge Hub",
      description:
        "Expert guides on website development, AI automation, branding, and digital business growth from DRAKVEX.",
      publisher: {
        "@type": "Organization",
        name: "DRAKVEX",
      },
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogContent />
    </>
  );
}
