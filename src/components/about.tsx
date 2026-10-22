import { aboutParagraphs } from "@/content/profile";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" eyebrow="01" title="About">
      <div className="max-w-3xl space-y-5 text-base leading-relaxed text-muted sm:text-lg">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
