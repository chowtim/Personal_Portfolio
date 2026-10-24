import { aboutParagraphs } from "@/content/profile";
import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" className="border-t border-line">
      <div className="grid gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:gap-16">
        <h2 className="font-serif text-5xl font-medium tracking-tight">About</h2>
        <div className="max-w-[68ch] space-y-5 text-lg leading-relaxed text-muted">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
