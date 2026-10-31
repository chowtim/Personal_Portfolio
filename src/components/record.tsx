import { backgroundGroups } from "@/content/profile";

export function Record() {
  return (
    <section id="background" className="section-space">
      <div className="record-head">
        <h2>Background</h2>
      </div>
      {backgroundGroups.map((group) => {
        const showDetail = group.label === "Education" || group.label === "Professional Qualification";
        return (
          <div className="background-group" key={group.label}>
            <h3>{group.label}</h3>
            <table className="record-table">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Title</th>
                  <th scope="col">Issuing Organization</th>
                  {showDetail ? <th scope="col">Detail</th> : null}
                </tr>
              </thead>
              <tbody>
                {group.rows.map((row) => (
                  <tr key={row.title}>
                    <th className="year" scope="row">
                      {row.showYear ? row.year : ""}
                    </th>
                    <td>{row.title}</td>
                    <td>{row.body}</td>
                    {showDetail ? <td>{row.detail}</td> : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </section>
  );
}
