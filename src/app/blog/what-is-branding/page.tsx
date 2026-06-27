import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "What Is Branding? A Complete Guide for Businesses | DRAKVEX",
  description:
    "Branding is the process of creating a unique identity for a business through visual elements, messaging, and strategy. Learn what branding is, why it matters, and how DRAKVEX builds brands.",
  openGraph: {
    title: "What Is Branding? A Complete Guide for Businesses | DRAKVEX",
    description:
      "Branding is the process of creating a unique identity for a business through visual elements, messaging, and strategy. Learn what branding is, why it matters, and how DRAKVEX creates brand identities.",
    url: "https://drakvex.in/blog/what-is-branding",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-10T00:00:00Z",
    modifiedTime: "2026-06-27T00:00:00Z",
    authors: ["David Joshwa"],
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "What Is Branding - DRAKVEX Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Branding? A Complete Guide for Businesses | DRAKVEX",
    description:
      "Branding is the process of creating a unique identity for a business. Learn what branding is, why it matters, and how DRAKVEX creates brand identities.",
    images: ["/Drakvex.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drakvex.in/blog/what-is-branding" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
        { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: "https://drakvex.in/blog" },
        { "@type": "ListItem", position: 3, name: "What Is Branding", item: "https://drakvex.in/blog/what-is-branding" },
      ],
    },
    {
      "@type": "Article",
      headline: "What Is Branding? A Complete Guide for Businesses",
      description:
        "Branding is the process of creating a unique identity for a business through visual elements, messaging, and strategy. This guide explains what branding is, why it matters, and how DRAKVEX creates brand identities.",
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
      datePublished: "2026-06-10",
      dateModified: "2026-06-27",
      image: "https://drakvex.in/Drakvex.png",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://drakvex.in/blog/what-is-branding",
      },
    },
  ],
};

export default function BrandingPage() {
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
