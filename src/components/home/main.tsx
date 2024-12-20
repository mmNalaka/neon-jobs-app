"use client";

import { Shell } from "~/src/components/shell";
import { Content } from "./content";
import Header from "./header";
import { HeroGrid } from "./hero-grid";
import { Intro } from "./intro";
import { Quotes } from "./quotes";

export default function HomePage() {
  return (
    <Shell variant="full" className="mb-16 w-full font-mono">
      <Header />
      <HeroGrid />
      <Intro />
      <Quotes />
      <Content />
    </Shell>
  );
}
