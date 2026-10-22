import { credentials, otherFacts, skillGroups } from "@/content/profile";
import { Section } from "@/components/section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="03" title="Skills">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="text-sm tracking-wide text-stone">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-background px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <h3 className="text-sm tracking-wide text-stone">Credentials</h3>
        <ul className="mt-4 divide-y divide-line">
          {credentials.map((item) => (
            <li key={item.name} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <span>{item.name}</span>
              <span className="text-sm text-muted sm:text-right">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-sm text-stone">{otherFacts.join(" · ")}</p>
    </Section>
  );
}
