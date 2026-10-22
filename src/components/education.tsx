import { awards, education } from "@/content/profile";
import { Section } from "@/components/section";

export function Education() {
  return (
    <Section id="education" eyebrow="04" title="Education">
      <ol className="space-y-6">
        {education.map((item) => (
          <li key={item.credential}>
            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-medium tracking-tight">{item.credential}</h3>
                <p className="text-sm text-stone">{item.period}</p>
              </div>
              <p className="mt-1 text-accent">{item.school}</p>
              <ul className="mt-4 space-y-1 text-muted">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <h3 className="text-sm tracking-wide text-stone">Awards</h3>
        <ul className="mt-4 space-y-4">
          {awards.map((award) => (
            <li key={award.name} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <span>
                {award.name}
                <span className="text-muted"> · {award.by}</span>
              </span>
              <span className="text-sm text-stone">{award.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
