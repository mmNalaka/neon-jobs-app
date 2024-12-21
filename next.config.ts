import { paraglide } from "@inlang/paraglide-next/plugin"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {},
};

export default paraglide({
	paraglide: {
		project: "./project.inlang",
		outdir: "./src/paraglide"
	},
	...nextConfig
});
