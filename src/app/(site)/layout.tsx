import AppHeader from "~/src/components/layout/app-header/app-header";

type LocaleLayoutProps = {
  children: React.ReactNode;
};

export default async function LocaleLayout({
  children,
}: Readonly<LocaleLayoutProps>) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex flex-1 flex-col gap-4 px-2 items-center mt-2">
        {children}
      </main>
    </div>
  );
}
