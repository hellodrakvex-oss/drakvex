import type { Metadata } from "next";
import FaqContent from "./FaqContent";

export const metadata: Metadata = {
  title: "FAQ | DRAKVEX — Frequently Asked Questions",
  description:
    "Find answers to frequently asked questions about DRAKVEX, its founder David Joshwa, services including website development, AI automation, branding, UI/UX design, and how to start your project.",
  openGraph: {
    title: "FAQ | DRAKVEX — Frequently Asked Questions",
    description:
      "Learn more about DRAKVEX, a digital agency founded by David Joshwa. Get answers about website development, AI automation, branding, and how to get started.",
    url: "https://drakvex.in/faq",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "DRAKVEX FAQ — Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | DRAKVEX — Frequently Asked Questions",
    description:
      "Find answers about DRAKVEX, services, founder David Joshwa, and how to start your project.",
    images: ["/Drakvex.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drakvex.in/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakvex.in" },
        { "@type": "ListItem", position: 2, name: "FAQ", item: "https://drakvex.in/faq" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is DRAKVEX?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DRAKVEX is a digital agency founded by David Joshwa that specializes in website development, AI automation, branding, UI/UX design, and digital business solutions. The agency helps startups and established businesses build modern digital products and AI-powered systems to accelerate growth.",
          },
        },
        {
          "@type": "Question",
          name: "Who founded DRAKVEX?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DRAKVEX was founded by David Joshwa, who serves as the Founder and Developer of the agency. David Joshwa is a developer and entrepreneur focused on building modern websites, AI automation systems, and digital solutions for businesses.",
          },
        },
        {
          "@type": "Question",
          name: "What services does DRAKVEX provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DRAKVEX provides website development, AI automation, branding, UI/UX design, and digital business solutions. Additional services include WhatsApp automation, e-commerce development, cloud deployment, SEO, and digital marketing strategies.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does DRAKVEX serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DRAKVEX serves a variety of industries including e-commerce, agriculture, fashion, cultural organizations, and technology startups. The agency builds custom digital solutions tailored to the specific needs of each industry and business size.",
          },
        },
        {
          "@type": "Question",
          name: "What is AI automation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI automation is the use of artificial intelligence to automate repetitive tasks, streamline workflows, and reduce manual effort. DRAKVEX builds custom AI automation systems including chatbots, data processing pipelines, and intelligent agents that help businesses operate more efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "How does DRAKVEX build websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DRAKVEX builds websites using modern technologies such as Next.js, React, TypeScript, and Tailwind CSS. The development process follows four phases: discovery, design, development, and launch. Each website is designed to be fast, secure, mobile-responsive, and optimized for search engines.",
          },
        },
        {
          "@type": "Question",
          name: "Why choose DRAKVEX?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Clients choose DRAKVEX for its combination of modern UI/UX design, AI-powered systems, SEO optimization, scalable architecture, and dedicated support. DRAKVEX delivers end-to-end digital solutions that help businesses establish a strong online presence and automate operations.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact DRAKVEX?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact DRAKVEX by emailing hello@drakvex.in, sending a message through the contact form on the website, or reaching out via WhatsApp at +91 9150254231. The team typically responds within 24 hours.",
          },
        },
        {
          "@type": "Question",
          name: "Does DRAKVEX build custom software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, DRAKVEX builds custom software solutions including business management systems, data processing tools, and AI-powered applications. Each solution is designed to meet the specific operational needs of the client.",
          },
        },
        {
          "@type": "Question",
          name: "Does DRAKVEX provide SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, DRAKVEX provides SEO and digital marketing services. The agency implements data-driven strategies including technical SEO, on-page optimization, content strategy, and performance optimization to help websites rank higher in search engine results.",
          },
        },
        {
          "@type": "Question",
          name: "Does DRAKVEX offer website maintenance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, DRAKVEX offers website maintenance and support services. This includes regular updates, security monitoring, performance optimization, content updates, and technical support to ensure websites remain secure and performant.",
          },
        },
        {
          "@type": "Question",
          name: "Where is DRAKVEX based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DRAKVEX is based in India and serves clients worldwide. The agency operates remotely, delivering digital services to businesses across different countries and time zones.",
          },
        },
        {
          "@type": "Question",
          name: "Who is David Joshwa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "David Joshwa is the Founder and Developer of DRAKVEX. He is a developer and entrepreneur who builds modern websites, AI automation systems, business platforms, and digital solutions. He founded DRAKVEX with the mission of helping businesses establish a stronger digital presence through modern technology.",
          },
        },
        {
          "@type": "Question",
          name: "How can I start a project with DRAKVEX?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To start a project with DRAKVEX, contact the team via email at hello@drakvex.in or through the contact form on the website. Describe your project goals and requirements, and the team will respond with a proposal, timeline, and pricing structure tailored to your needs.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does DRAKVEX use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DRAKVEX uses modern technologies including Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Node.js, and Vercel for cloud deployment. For AI automation, the agency builds custom AI agents, chatbots, and workflow automation systems using various AI frameworks and APIs.",
          },
        },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqContent />
    </>
  );
}
