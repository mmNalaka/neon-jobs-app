import Link from "next/link";

import { AuthDropdown } from "~/components/layouts/auth-dropdown";
import { siteConfig } from "~/config/site";

import { Icons } from "./icons";
import { Navigation } from "./layouts/navigation";
import { User } from "better-auth/types";

export default function AppHeader({ user }: { user: User | null }) {
  return (
    <header className="flex h-20 shrink-0 items-center justify-between gap-2 px-4 mt-2">
      <Link href="/" className="items-center space-x-2 hidden sm:flex">
        <Icons.logoPrimary className="h-18 w-28" aria-hidden="true" />
        <span className="sr-only">Home</span>
      </Link>

      <div className="flex items-center space-x-2">
        <Navigation items={siteConfig.mainNav} />
      </div>

      <div className="flex items-center gap-2">
        <AuthDropdown user={user} />
        {/* <ThemeSwitcher variant="outline" /> */}
      </div>
    </header>
  );
}
