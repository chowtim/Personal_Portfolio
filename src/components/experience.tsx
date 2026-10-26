import { experience } from "@/content/profile";
import { Section } from "@/components/section";

export function Experience() {
  return (
    <Section id="experience" className="bg-surface">
      <h2 className="font-serif text-5xl font-medium tracking-tight">Experience</h2>
      <ol className="mt-12">
        {experience.map((role) => (
          <li
            key={`${role.organization}-${role.period}`}
            className="grid gap-3 border-t border-line py-10 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10"
          >
            <p className="text-sm text-stone md:pt-2">{role.period}</p>
            <article className="max-w-[68ch]">
              <h3 className="font-serif text-3xl font-medium tracking-tight">{role.title}</h3>
              <p className="mt-1 text-accent">{role.organization}</p>

              {role.projects?.map((project) => (
                <div key={project.title} className="mt-8">
                  <h4 className="font-serif text-2xl">{project.title}</h4>
                  <div className="mt-3 space-y-3 leading-relaxed text-muted">
                    {project.points.map((point, index) => (
                      <div key={point}>
                        <p>{point}</p>
                        {project.figures
                          ?.filter((item) => item.after === index)
                          .map(({ figure }) => (
                            <figure key={figure.src} className="my-6">
                              <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${figure.src}`}>
                                <img
                                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${figure.src}`}
                                  alt={figure.alt}
                                  className="w-full border border-line bg-background"
                                />
                              </a>
                              <figcaption className="mt-2 text-sm text-stone">{figure.caption}</figcaption>
                            </figure>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {role.points.length > 0 && (
                <div className="mt-8 space-y-3 leading-relaxed text-muted">
                  {role.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              )}

              {role.groups?.map((group) => (
                <div key={group.title} className="mt-8">
                  <h4 className="font-serif text-2xl">{group.title}</h4>
                  <div className="mt-3 space-y-3 leading-relaxed text-muted">
                    {group.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </div>
              ))}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
