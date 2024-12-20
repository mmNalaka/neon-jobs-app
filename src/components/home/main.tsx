"use client";

import { Shell } from "~/src/components/shell";
import { Content } from "./content";
import { HeroGrid } from "./hero-grid";
import { Intro } from "./intro";
import { Quotes } from "./quotes";

export default function HomePage() {
  return (
    <Shell variant="full" className="mb-16 w-full font-mono">
      <HeroGrid />
      <Intro />
      <Quotes />
      <Content />
    </Shell>
  );
}
