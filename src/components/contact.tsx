import { CopyEmail } from "@/components/copy-email";
import { Section } from "@/components/section";
import { profile } from "@/content/profile";

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
        <div>
          <h2 className="font-serif text-5xl font-medium tracking-tight">Contact</h2>
          <p className="mt-6 max-w-xl font-serif text-3xl leading-tight">{profile.openTo}</p>
          <p className="mt-3 text-muted">{profile.availability}</p>
        </div>
        <div>
          <p className="text-sm text-stone">Email</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 inline-block break-all text-lg underline decoration-line underline-offset-4 hover:text-accent"
          >
            {profile.email}
          </a>
          <div className="mt-5">
            <CopyEmail email={profile.email} />
          </div>
          <p className="mt-6 text-sm text-stone">Location</p>
          <p className="mt-1 text-lg">{profile.location}</p>
          <p className="mt-6 text-sm text-stone">LinkedIn</p>
          <a
            href={profile.linkedIn.href}
            className="mt-1 inline-block text-lg underline decoration-line underline-offset-4 hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.linkedIn.label}
          </a>
        </div>
      </div>
    </Section>
  );
}
