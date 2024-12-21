"use client";

import { Link } from "@/lib/i18n";
import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";
import * as React from "react";

import { BadgeCheck, CreditCard, Gauge, Sparkles } from "lucide-react";
import * as m from "~/paraglide/messages";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/src/components/ui/avatar";
import { Button, type ButtonProps } from "~/src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/src/components/ui/dropdown-menu";
import { Separator } from "~/src/components/ui/separator";
import { Skeleton } from "~/src/components/ui/skeleton";
import { signOut, useSession } from "~/src/lib/auth-client";

type AuthDropdownProps = {} & React.ComponentPropsWithRef<
  typeof DropdownMenuTrigger
> &
  ButtonProps;

export function AuthDropdown({ ...props }: AuthDropdownProps) {
  const { data } = useSession();
  const user = data?.user;

  const handleSignOut = async () => {
    await signOut();
  };

  if (!user) {
    return (
      <>
        <div className="flex items-center gap-2 sm:hidden">
          <Button size="sm" variant="default" {...props} asChild>
            <Link href="/signin">
              Sign In<span className="sr-only">Sign In</span>
            </Link>
          </Button>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <Button size="lg" variant="defaultOutline" {...props} asChild>
            <Link href="/find-jobs">Find jobs</Link>
          </Button>
          <Button size="lg" variant="default" {...props} asChild>
            <Link href="/signup">Hire talent</Link>
          </Button>
          <Separator orientation="vertical" className="mx-2 h-8" />
          <Button size="lg" variant="secondaryOutline" {...props} asChild>
            <Link href="/signin">
              {m.auth_sign_in()} <EnterIcon />{" "}
            </Link>
          </Button>
        </div>
      </>
    );
  }

  const initials = `${user.name?.charAt(0) ?? ""} ${
    user.name?.charAt(0) ?? ""
  }`;
  const email = user.email;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="size-8 rounded-full" {...props}>
          <Avatar className="size-8">
            <AvatarImage src={user.image ?? undefined} alt={user.name ?? ""} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-primary">
              {user.name}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <React.Suspense
          fallback={
            <div className="flex flex-col space-y-1.5 p-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-full rounded-sm" />
              ))}
            </div>
          }
        >
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Upgrade to Pro</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <BadgeCheck className="mr-2 h-4 w-4" />
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard">
                <Gauge className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </React.Suspense>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={handleSignOut}>
          <ExitIcon className="mr-2 size-4" aria-hidden="true" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
