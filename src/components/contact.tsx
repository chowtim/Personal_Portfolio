import { CopyEmail } from "@/components/copy-email";
import { Section } from "@/components/section";
import { profile } from "@/content/profile";

const links = [
  { label: "LinkedIn", value: profile.linkedIn.label, href: profile.linkedIn.href },
  { label: "GitHub", value: profile.github.label, href: profile.github.href },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="05" title="Contact">
      <div className="grid gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-8 md:grid-cols-2">
        <div>
          <p className="text-sm text-stone">Email</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block break-all text-lg text-foreground hover:text-accent"
          >
            {profile.email}
          </a>
          <div className="mt-5">
            <CopyEmail email={profile.email} />
          </div>
        </div>

        <dl className="space-y-5">
          <div>
            <dt className="text-sm text-stone">Location</dt>
            <dd className="mt-1 text-lg">{profile.location}</dd>
          </div>
          {links.map((link) => (
            <div key={link.label}>
              <dt className="text-sm text-stone">{link.label}</dt>
              <dd className="mt-1">
                <a
                  href={link.href}
                  className="text-lg text-foreground hover:text-accent"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.value}
                </a>
              </dd>
            </div>
          ))}
          <div>
            <dt className="text-sm text-stone">Availability</dt>
            <dd className="mt-1 text-lg">{profile.availability}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
