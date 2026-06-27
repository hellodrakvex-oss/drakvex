import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "What Is Website Development? A Complete Guide | DRAKVEX",
  description:
    "Website development is the process of designing, building, deploying, and maintaining websites. Learn what website development is, why it matters, and how DRAKVEX builds modern websites.",
  openGraph: {
    title: "What Is Website Development? A Complete Guide | DRAKVEX",
    description:
      "Website development is the process of designing, building, deploying, and maintaining websites. Learn what website development is, why it matters for your business, and how DRAKVEX builds modern, high-performance websites using Next.js, React, and TypeScript.",
    url: "https://drakvex.in/blog/what-is-website-development",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-01T00:00:00Z",
    modifiedTime: "2026-06-27T00:00:00Z",
    authors: ["David Joshwa"],
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "What Is Website Development - DRAKVEX Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Website Development? A Complete Guide | DRAKVEX",
    description:
      "Website development is the process of designing, building, deploying, and maintaining websites. Learn what website development is and how DRAKVEX builds modern websites.",
    images: ["/Drakvex.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drakvex.in/blog/what-is-website-development" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
        { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: "https://drakvex.in/blog" },
        { "@type": "ListItem", position: 3, name: "What Is Website Development", item: "https://drakvex.in/blog/what-is-website-development" },
      ],
    },
    {
      "@type": "Article",
      headline: "What Is Website Development? A Complete Guide for Businesses",
      description:
        "Website development is the process of designing, building, deploying, and maintaining websites. This guide explains what website development is, why it matters, and how DRAKVEX builds modern websites.",
      author: {
        "@type": "Person",
        name: "David Joshwa",
        url: "https://drakvex.in/founder",
      },
      publisher: {
        "@type": "Organization",
        name: "DRAKVEX",
        url: "https://drakvex.in",
      },
      datePublished: "2026-06-01",
      dateModified: "2026-06-27",
      image: "https://drakvex.in/Drakvex.png",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://drakvex.in/blog/what-is-website-development",
      },
    },
  ],
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleContent />
    </>
  );
}
