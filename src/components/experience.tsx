import { experience } from "@/content/profile";
import { Section } from "@/components/section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="02" title="Experience">
      <ol className="space-y-6">
        {experience.map((role) => (
          <li key={`${role.organization}-${role.period}`}>
            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-medium tracking-tight">{role.title}</h3>
                <p className="text-sm text-stone">{role.period}</p>
              </div>
              <p className="mt-1 text-accent">{role.organization}</p>
              <ul className="mt-5 space-y-3 text-muted">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {role.groups?.map((group) => (
                <div key={group.title} className="mt-6 border-t border-line pt-6">
                  <h4 className="text-base font-medium text-foreground">{group.title}</h4>
                  <ul className="mt-3 space-y-3 text-muted">
                    {group.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-stone" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
