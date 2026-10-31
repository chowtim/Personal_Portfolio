import { skillGroups } from "@/content/profile";

export function Practice() {
  const [software, languages, licence] = skillGroups;
  return (
    <section id="skills" className="section-space">
      <div className="practice-grid">
        <h2>Skills</h2>
        <div className="practice-col">
          <p className="group-label">{software.label}</p>
          <div className="rows">
            {software.rows.map((row) => (
              <div className="row" key={row.name}>
                <span className="dot" aria-hidden="true" />
                <b>{row.name}</b>
                <i>{row.value}</i>
              </div>
            ))}
          </div>
        </div>
        <div className="practice-col">
          <p className="group-label">{languages.label}</p>
          <div className="rows">
            {languages.rows.map((row) => (
              <div className="row" key={row.name}>
                <span className="dot" aria-hidden="true" />
                <b>{row.name}</b>
                <i>{row.value}</i>
              </div>
            ))}
          </div>
          <p className="group-label" style={{ marginTop: "2.5rem" }}>
            {licence.label}
          </p>
          <div className="rows">
            {licence.rows.map((row) => (
              <div className="row" key={row.name}>
                <span className="dot" aria-hidden="true" />
                <b>{row.name}</b>
                <i>{row.value}</i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
