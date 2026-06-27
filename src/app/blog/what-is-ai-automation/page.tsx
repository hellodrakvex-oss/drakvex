import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "What Is AI Automation? A Complete Guide for Businesses | DRAKVEX",
  description:
    "AI automation uses artificial intelligence to automate repetitive tasks, streamline workflows, and improve business efficiency. Learn what AI automation is and how DRAKVEX implements it.",
  openGraph: {
    title: "What Is AI Automation? A Complete Guide for Businesses | DRAKVEX",
    description:
      "AI automation uses artificial intelligence to automate repetitive tasks, streamline workflows, and improve business efficiency. Learn what AI automation is, why it matters, and how DRAKVEX builds custom AI systems.",
    url: "https://drakvex.in/blog/what-is-ai-automation",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-05T00:00:00Z",
    modifiedTime: "2026-06-27T00:00:00Z",
    authors: ["David Joshwa"],
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "What Is AI Automation - DRAKVEX Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is AI Automation? A Complete Guide for Businesses | DRAKVEX",
    description:
      "AI automation uses artificial intelligence to automate repetitive tasks and streamline workflows. Learn what AI automation is and how DRAKVEX builds custom AI systems.",
    images: ["/Drakvex.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drakvex.in/blog/what-is-ai-automation" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
        { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: "https://drakvex.in/blog" },
        { "@type": "ListItem", position: 3, name: "What Is AI Automation", item: "https://drakvex.in/blog/what-is-ai-automation" },
      ],
    },
    {
      "@type": "Article",
      headline: "What Is AI Automation? A Complete Guide for Businesses",
      description:
        "AI automation uses artificial intelligence to automate repetitive tasks, streamline workflows, and improve business efficiency. This guide explains what AI automation is and how DRAKVEX implements custom AI systems.",
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
      datePublished: "2026-06-05",
      dateModified: "2026-06-27",
      image: "https://drakvex.in/Drakvex.png",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://drakvex.in/blog/what-is-ai-automation",
      },
    },
  ],
};

export default function AiAutomationPage() {
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
