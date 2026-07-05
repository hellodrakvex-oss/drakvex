export interface Project {
  id: string;
  title: string;
  url: string;
  category: string;
  description: string;
  tech: string[];
  services: string[];
  industry: string;
  year: string;
  status: "LIVE" | "Coming Soon";
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "gkjourneys",
    title: "GKJourneys.com",
    url: "https://www.gkjourneys.com",
    category: "Premium Travel & Tourism Website",
    description:
      "A premium travel website designed to simplify tour discovery, improve customer engagement, and provide a seamless booking experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
    services: ["Website Design", "Website Development", "UI/UX", "SEO"],
    industry: "Travel",
    year: "2026",
    status: "LIVE",
    image: "/projects/gkjourneys.png",
    featured: true,
  },
  {
    id: "gerdtrust",
    title: "GERDTrust.in",
    url: "https://gerdtrust.in",
    category: "NGO & Trust Website",
    description:
      "A modern website developed for an educational and rural development trust with accessibility, transparency, and trust-focused design.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    services: ["Website Design", "Website Development", "UI/UX","Deployment & Hosting"],
    industry: "NGO",
    year: "2026",
    status: "LIVE",
    image: "/projects/gerdtrust.png",
    featured: true,
  },
  {
    id: "mithilaipatti",
    title: "Mithilaipatti.in",
    url: "https://www.mithilaipatti.in",
    category: "Cultural Community Platform",
    description:
      "A cultural community platform showcasing the rich heritage and traditions of the Mithila region.",
    tech: ["HTML", "CSS", "JS"],
    services: ["Website Design", "Website Development"],
    industry: "Community",
    year: "2025",
    status: "LIVE",
    image: "/projects/Mithilaipatti.png",
    featured: false,
  },
  {
    id: "nammathaiyalkadai",
    title: "NammaThaiyalKadai.in",
    url: "https://www.nammathaiyalkadai.in",
    category: "Fashion & Tailoring Business Website",
    description:
      "A fashion and tailoring business website showcasing custom designs, fabric collection, and online appointment booking.",
    tech: ["HTML", "CSS", "JS"],
    services: ["Website Design", "Website Development", "Brand Identity"],
    industry: "Fashion",
    year: "2025",
    status: "LIVE",
    image: "/projects/NammaThaiyalKadai.png",
    featured: false,
  },
];
