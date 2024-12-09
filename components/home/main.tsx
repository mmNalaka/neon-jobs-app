"use client";

import { Shell } from "@/components/shell";
import { Content } from "./content";
import Header from "./header";
import { HeroGrid } from "./hero-grid";
import { Quotes } from "./quotes";
import { Intro } from "./intro";

export default function HomePage() {
	return (
		<Shell className="mb-16 max-w-7xl font-mono">
			<Header />
			<HeroGrid />
			<Intro />
			<Quotes />
			<Content />
		</Shell>
	);
}
