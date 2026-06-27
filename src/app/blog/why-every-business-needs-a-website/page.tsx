import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "Why Every Business Needs a Website in 2026 | DRAKVEX",
  description:
    "Every business needs a website to establish an online presence, attract customers, and grow. Learn why a website is essential for modern businesses and how DRAKVEX builds effective websites.",
  openGraph: {
    title: "Why Every Business Needs a Website in 2026 | DRAKVEX",
    description:
      "Every business needs a website to establish an online presence, attract customers, and drive growth. Learn the key reasons why a website is essential and how DRAKVEX builds websites that deliver results.",
    url: "https://drakvex.in/blog/why-every-business-needs-a-website",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-15T00:00:00Z",
    modifiedTime: "2026-06-27T00:00:00Z",
    authors: ["David Joshwa"],
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "Why Every Business Needs a Website - DRAKVEX Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Every Business Needs a Website in 2026 | DRAKVEX",
    description:
      "Every business needs a website to establish an online presence, attract customers, and drive growth. Learn why from DRAKVEX.",
    images: ["/Drakvex.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drakvex.in/blog/why-every-business-needs-a-website" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
        { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: "https://drakvex.in/blog" },
        { "@type": "ListItem", position: 3, name: "Why Every Business Needs a Website", item: "https://drakvex.in/blog/why-every-business-needs-a-website" },
      ],
    },
    {
      "@type": "Article",
      headline: "Why Every Business Needs a Website in 2026",
      description:
        "Every business needs a website to establish an online presence, attract customers, and drive growth. This guide explains the key reasons why a website is essential and how DRAKVEX builds effective websites.",
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
      datePublished: "2026-06-15",
      dateModified: "2026-06-27",
      image: "https://drakvex.in/Drakvex.png",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://drakvex.in/blog/why-every-business-needs-a-website",
      },
    },
  ],
};

export default function WhyWebsitePage() {
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
