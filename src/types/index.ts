import { type SQL } from "drizzle-orm";

import type { Icons } from "~/src/components/icons";

export type NavItem = {
  title: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
};

export type NavItemWithChildren = {
  items?: NavItemWithChildren[];
} & NavItem;

export type FooterItem = {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
};

export type MainNavItem = NavItemWithChildren;

export type SidebarNavItem = NavItemWithChildren;

export type SearchParams = Record<string, string | string[] | undefined>;

export type StoredFile = {
  id: string;
  name: string;
  url: string;
};

export type Option = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
  withCount?: boolean;
};

export type DataTableFilterField<TData> = {
  label: string;
  value: keyof TData;
  placeholder?: string;
  options?: Option[];
};

export type DrizzleWhere<T> =
  | SQL
  | ((aliases: T) => SQL<T> | undefined)
  | undefined;
