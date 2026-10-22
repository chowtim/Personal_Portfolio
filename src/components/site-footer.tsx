import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-6 py-8 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}</p>
        <a href="#top" className="hover:text-foreground">
          Back to top
        </a>
      </div>
    </footer>
  );
}
