import { awards, education } from "@/content/profile";
import { Section } from "@/components/section";

export function Education() {
  return (
    <Section id="education" className="border-t border-line bg-raised/50">
      <h2 className="font-serif text-5xl font-medium tracking-tight">Education</h2>
      <ol className="mt-10 grid gap-8 md:grid-cols-2">
        {education.map((item) => (
          <li key={item.credential} className="border-t border-line pt-6">
            <p className="text-sm text-stone">{item.period}</p>
            <h3 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight">
              {item.credential}
            </h3>
            <p className="mt-3 text-accent">{item.school}</p>
            <ul className="mt-3 space-y-1 text-muted">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-14">
        <h3 className="font-serif text-3xl">Awards</h3>
        <ul className="mt-4 max-w-3xl divide-y divide-line">
          {awards.map((award) => (
            <li
              key={award.name}
              className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between"
            >
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
