import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-name">{profile.name}</p>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.linkedIn.href}>{profile.linkedIn.label}</a>
        <a href={profile.phoneHref}>{profile.phoneDisplay}</a>
      </div>
    </footer>
  );
}
