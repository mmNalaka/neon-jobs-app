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
} as const;

export type SiteConfig = typeof siteConfig;
