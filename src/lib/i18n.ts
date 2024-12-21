// file generated by the Paraglide-Next init command
import { PrefixStrategy, Navigation, Middleware } from "@inlang/paraglide-next";
import type { AvailableLanguageTag } from "~/paraglide/runtime";

const strategy = PrefixStrategy<AvailableLanguageTag>({
  prefixDefault: "never",
});

export const middleware = Middleware({ strategy });
export const { Link, useRouter, usePathname, redirect, permanentRedirect } =
  Navigation({ strategy });
