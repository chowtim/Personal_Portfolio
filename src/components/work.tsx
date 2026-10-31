import { projects, sanKwaiMeasures, strata, workIntro } from "@/content/profile";

const employers = [
  "Hong Kong Housing Authority",
  "Buildings Department",
  "Hong Kong Housing Society",
] as const;

export function Work() {
  return (
    <section id="work" className="section-space">
      <header className="work-intro">
        <h2 className="rise">Work</h2>
        <p className="rise d1">
          {workIntro.role} at {workIntro.org}, {workIntro.period}.
        </p>
      </header>
      {employers.map((employer) => (
        <div className="employer" key={employer}>
          <h3 className="employer-name">{employer}</h3>
          {projects
            .filter((project) => project.employer === employer)
            .map((project) => {
              const lines = project.visualText ?? [];
              const poster = lines.join(" ");
              const titledByPoster =
                poster.length > 0 && poster.toLowerCase() === project.title.toLowerCase();
              const longPoster = lines.every((line) => line.length <= 14)
                ? false
                : poster.length > 18;
              const posterBlock =
                lines.length > 0 ? (
                  <div className="visual type-visual">
                    {titledByPoster ? (
                      <h4 className={longPoster ? "visual-words long" : "visual-words"}>
                        {lines.map((line) => (
                          <span className="poster-line" key={line}>
                            {line}
                          </span>
                        ))}
                      </h4>
                    ) : (
                      <p className={longPoster ? "visual-words long" : "visual-words"}>
                        {lines.map((line) => (
                          <span className="poster-line" key={line}>
                            {line}
                          </span>
                        ))}
                      </p>
                    )}
                    {project.visualNote ? <p className="visual-note">{project.visualNote}</p> : null}
                  </div>
                ) : null;
              return (
                <article
                  id={project.id}
                  key={project.id}
                  className={project.visual === "section" ? "project project-sheet" : "project"}
                  style={{ ["--block" as string]: project.minHeight }}
                >
                  {project.visual === "section" && project.image ? (
                    <>
                      {posterBlock}
                      <div className="sheet-head">
                        <h4>{project.title}</h4>
                        {project.kind || project.period ? (
                          <p className="meta">{[project.kind, project.period].filter(Boolean).join(". ")}.</p>
                        ) : null}
                        <ul className="measures">
                          {sanKwaiMeasures.map((item) => (
                            <li key={item.word}>
                              <strong>{item.word}</strong>
                              <span>{item.caption}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <figure className="visual section-visual">
                        <img
                          className="drawing"
                          src={project.image.src}
                          alt={project.image.alt}
                          width={2526}
                          height={1786}
                        />
                      </figure>
                      <div className="sheet-split">
                        {project.sideImage ? (
                          <figure className="side-figure">
                            <img
                              src={project.sideImage.src}
                              alt={project.sideImage.alt}
                              width={1200}
                              height={750}
                            />
                            <figcaption>{project.sideImage.caption}</figcaption>
                          </figure>
                        ) : null}
                        <div className="copy">
                          {project.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                          {project.strata ? <GroundModel /> : null}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {posterBlock}
                      <div className="cluster">
                        <div className="copy">
                          <h4 className={project.title.length > 36 ? "long" : undefined}>{project.title}</h4>
                          {project.kind || project.period ? (
                            <p className="meta">{[project.kind, project.period].filter(Boolean).join(". ")}.</p>
                          ) : null}
                        </div>
                        <div className="copy">
                          {project.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </article>
              );
            })}
        </div>
      ))}
    </section>
  );
}

function GroundModel() {
  return (
    <fieldset className="strata">
      <legend>Ground model on section 2-2</legend>
      {strata.map((layer, index) => (
        <input
          key={layer.id}
          id={layer.id}
          type="radio"
          name="stratum"
          defaultChecked={index === 0}
        />
      ))}
      <div className="strata-options">
        {strata.map((layer) => (
          <span key={layer.id}>
            <label htmlFor={layer.id}>
              <i className="swatch" style={{ background: layer.swatch }} aria-hidden="true" />
              {layer.name}
            </label>
          </span>
        ))}
      </div>
      <div className="strata-panels">
        {strata.map((layer) => (
          <div key={layer.id} className={`panel show p-${layer.id}`}>
            {layer.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </fieldset>
  );
}
