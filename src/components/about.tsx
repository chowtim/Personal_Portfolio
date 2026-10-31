import { aboutFacts, aboutLead, registrations } from "@/content/profile";

export function About() {
  return (
    <section id="about" className="section-space">
      <div className="about-grid">
        <h2 className="rise">About</h2>
        <p className="lead rise d1">{aboutLead}</p>
        <dl className="facts rise d2">
          {aboutFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="record rise d3">
          <div className="reg-head">
            <p className="group-label">Professional Qualification</p>
            <p className="group-label">Membership number</p>
          </div>
          <ul className="reg-list">
            {registrations.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
