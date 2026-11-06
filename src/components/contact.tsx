import { asset, profile } from "@/content/profile";

export function Contact() {
  return (
    <section id="contact" className="section-space contact">
      <h2 className="contact-sentence rise">
        A chartered civil engineer who specializes in geotechnical design
      </h2>
      <img
        className="portrait"
        src={asset("/chow-wing-tim.jpg")}
        alt="Portrait of Chow Wing Tim"
        width={640}
        height={640}
      />
      <div className="reach">
        <div className="reach-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedIn.href}>{profile.linkedIn.label}</a>
        </div>
        <p className="where">
          {profile.location}. <a href={profile.phoneHref}>{profile.phoneDisplay}</a>. {profile.notice}.
        </p>
      </div>
    </section>
  );
}
