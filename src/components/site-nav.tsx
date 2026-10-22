import { navItems, profile } from "@/content/profile";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-3 px-6 py-3 sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <a href="#top" className="shrink-0 text-sm font-medium tracking-tight">
          {profile.name}
        </a>
        <nav aria-label="Sections" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm py-1 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
