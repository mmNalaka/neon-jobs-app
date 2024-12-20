import { MainNavItem } from "~/src/types";

export const siteConfig = {
  name: "Neon Jobs",
  url: "https://neon-jobs.vercel.app/",
  ogImage: "https://neon-jobs.vercel.app/opengraph-image.png",
  description:
    "A job portal for tech professionals, build by developers for developers.",
  links: {
    github: "https://github.com/cahyawibawa/neon-jobs",
    deploy:
      "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcahyawibawa%2Fneon-jobs",
  },
  keywords: [
    "Next.js",
    "Drizzle",
    "Neon",
    "Better Auth",
    "shadcn ui",
    "Resend",
    "Stripe",
    "SaaS",
    "Boilerplate",
  ],
  // Main nav
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "How it works",
      href: "/how-it-works",
      description: "All the products we have to offer.",
    },
    {
      title: "Abaout us",
      href: "/about",
      description: "Discover our stores and their products",
    },
    {
      title: "Success stories",
      href: "/success-stories",
      description: "Build your own custom skateboard.",
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Read our latest blog posts.",
    },
    {
      title: "Support",
      href: "/support",
      description: "Get in touch with us.",
    },
  ] satisfies MainNavItem[],
} as const;

export type SiteConfig = typeof siteConfig;
