import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";
import { MotionProvider } from "@/components/MotionProvider";
import { DynamicProviders } from "@/components/DynamicProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drakvex.in"),
  title: "DRAKVEX | Modern Websites & AI Systems for Growth",
  description:
    "DRAKVEX builds modern websites, AI automation systems, branding solutions, and digital experiences for startups and businesses.",
  keywords: [
    "DRAKVEX",
    "David Joshwa",
    "Web Development",
    "Website Design",
    "AI Automation",
    "Digital Agency",
    "Business Websites",
    "Startup Websites",
    "SEO Services",
    "Branding",
  ],
  authors: [{ name: "David Joshwa" }],
  creator: "DRAKVEX",
  publisher: "DRAKVEX",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://drakvex.in",
  },
  applicationName: "DRAKVEX",
  openGraph: {
    title: "DRAKVEX | Modern Websites & AI Systems for Growth",
    description:
      "Premium websites, AI automation systems, and digital solutions for modern businesses.",
    url: "https://drakvex.in",
    siteName: "DRAKVEX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/Drakvex.png",
        width: 1200,
        height: 630,
        alt: "DRAKVEX - Modern Websites & AI Systems for Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@drakvex",
    title: "DRAKVEX",
    description: "Modern Websites & AI Systems for Growth",
    images: ["/Drakvex.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "DRAKVEX",
      url: "https://drakvex.in",
      logo: "https://drakvex.in/Drakvex.png",
      description: "DRAKVEX is a digital agency founded by David Joshwa, specializing in website development, AI automation, branding, UI/UX design, and digital business solutions.",
      founder: {
        "@type": "Person",
        name: "David Joshwa",
        jobTitle: "Founder & Developer",
        url: "https://drakvex.in/founder",
      },
      brand: {
        "@type": "Brand",
        name: "DRAKVEX",
      },
      knowsAbout: [
        "Website Development",
        "AI Automation",
        "Branding",
        "UI/UX Design",
        "Digital Solutions",
      ],
      sameAs: [
        "https://drakvex.in/about",
        "https://drakvex.in/founder",
        "https://drakvex.in/faq",
        "https://drakvex.in/blog",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "hello@drakvex.in",
          contactType: "sales",
          availableLanguage: ["English"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+919150254231",
          contactType: "customer service",
          availableLanguage: ["English", "Tamil"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      name: "DRAKVEX",
      url: "https://drakvex.in",
      description: "DRAKVEX is a digital agency founded by David Joshwa, specializing in website development, AI automation, branding, UI/UX design, and digital business solutions.",
      publisher: {
        "@type": "Organization",
        name: "DRAKVEX",
      },
    },
    {
      "@type": "Person",
      name: "David Joshwa",
      jobTitle: "Founder & Developer",
      url: "https://drakvex.in/founder",
      description: "David Joshwa is the Founder and Developer of DRAKVEX, a digital agency specializing in website development, AI automation, branding, and digital business solutions.",
      worksFor: {
        "@type": "Organization",
        name: "DRAKVEX",
      },
      knowsAbout: [
        "Website Development",
        "AI Automation",
        "Branding",
        "UI/UX Design",
        "Digital Solutions",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-black text-white min-h-screen">
        <div className="noise-overlay" aria-hidden="true"></div>

        <MotionProvider>
          <DynamicProviders>{children}</DynamicProviders>
        </MotionProvider>

        <Toaster
          position="top-right"
          richColors
          closeButton
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="lazyOnload"
/>

<Script id="google-analytics" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
      </body>
    </html>
  );
}