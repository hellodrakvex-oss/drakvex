import type { Metadata } from "next";
import ArticleContent from "./ArticleContent";

export const metadata: Metadata = {
  title: "Who Is DRAKVEX? Digital Agency Overview | DRAKVEX",
  description:
    "DRAKVEX is a digital agency founded by David Joshwa, specializing in website development, AI automation, branding, UI/UX design, and digital business solutions.",
  openGraph: {
    title: "Who Is DRAKVEX? Digital Agency Overview | DRAKVEX",
    description:
      "DRAKVEX is a digital agency founded by David Joshwa that builds modern websites, AI automation systems, branding, and digital solutions for startups and businesses worldwide.",
    url: "https://drakvex.in/blog/who-is-drakvex",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "article",
    publishedTime: "2026-06-20T00:00:00Z",
    modifiedTime: "2026-06-27T00:00:00Z",
    authors: ["David Joshwa"],
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "Who Is DRAKVEX - Digital Agency Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Is DRAKVEX? Digital Agency Overview | DRAKVEX",
    description:
      "DRAKVEX is a digital agency founded by David Joshwa, specializing in website development, AI automation, branding, and digital business solutions.",
    images: ["/Drakvex.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drakvex.in/blog/who-is-drakvex" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
        { "@type": "ListItem", position: 2, name: "Knowledge Hub", item: "https://drakvex.in/blog" },
        { "@type": "ListItem", position: 3, name: "Who Is DRAKVEX", item: "https://drakvex.in/blog/who-is-drakvex" },
      ],
    },
    {
      "@type": "Article",
      headline: "Who Is DRAKVEX? A Complete Digital Agency Overview",
      description:
        "DRAKVEX is a digital agency founded by David Joshwa that builds modern websites, AI automation systems, branding, and digital solutions for startups and businesses worldwide.",
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
      datePublished: "2026-06-20",
      dateModified: "2026-06-27",
      image: "https://drakvex.in/Drakvex.png",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://drakvex.in/blog/who-is-drakvex",
      },
    },
  ],
};

export default function WhoIsDrakvexPage() {
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
