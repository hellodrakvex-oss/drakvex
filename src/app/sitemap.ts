import type { MetadataRoute } from "next";

const BASE_URL = "https://drakvex.in";

interface PageEntry {
  path: string;
  priority: number;
}

const pages: PageEntry[] = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/founder", priority: 0.7 },
  { path: "/privacy", priority: 0.5 },
  { path: "/terms", priority: 0.5 },
  { path: "/faq", priority: 0.7 },
  { path: "/blog", priority: 0.8 },
  { path: "/blog/what-is-website-development", priority: 0.6 },
  { path: "/blog/what-is-ai-automation", priority: 0.6 },
  { path: "/blog/what-is-branding", priority: 0.6 },
  { path: "/blog/why-every-business-needs-a-website", priority: 0.6 },
  { path: "/blog/who-is-drakvex", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${BASE_URL}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.priority,
  }));
}
