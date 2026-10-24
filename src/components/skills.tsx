import { otherFacts, professionalDevelopment, qualifications, skillGroups } from "@/content/profile";
import { Section } from "@/components/section";

function CredentialList({ items }: { items: readonly { name: string; detail: string }[] }) {
  return (
    <ul className="mt-4 divide-y divide-line">
      {items.map((item) => (
        <li
          key={item.name}
          className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
        >
          <span>{item.name}</span>
          <span className="text-sm text-muted sm:max-w-[24rem] sm:text-right">{item.detail}</span>
        </li>
      ))}
    </ul>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="font-serif text-5xl font-medium tracking-tight">Skills</h2>
      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm text-stone">{group.title}</h3>
            <p className="mt-3 font-serif text-3xl leading-tight">{group.items.join("  ·  ")}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-stone">{otherFacts.join(" · ")}</p>

      <div id="certifications" className="mt-16 scroll-mt-24">
        <h3 className="font-serif text-4xl font-medium tracking-tight">
          Certifications & Professional Development
        </h3>
        <div className="mt-8 max-w-3xl">
          <h4 className="text-sm text-stone">Professional qualifications</h4>
          <CredentialList items={qualifications} />
        </div>
        <div className="mt-10 max-w-3xl">
          <h4 className="text-sm text-stone">Other professional development</h4>
          <CredentialList items={professionalDevelopment} />
        </div>
      </div>
    </Section>
  );
}
