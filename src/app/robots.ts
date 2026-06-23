import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://drakvex.in",
    sitemap: "https://drakvex.in/sitemap.xml",
  };
}
