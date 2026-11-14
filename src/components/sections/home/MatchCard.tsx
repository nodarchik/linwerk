import { PEOPLE } from "@/data/people";

/**
 * The Match card: one of our team members on a photo tile, the role, skills and the terms. Every person is in the
 * markup; <HeroSlider> moves `is-active` from one to the next on its clock.
 */
export function MatchCard() {
  return (
    <div className="hp-card">
      <div className="hp-body">
        <div className="hp-tile">
          {PEOPLE.map((p, i) => (
            <img
              key={p.img}
              className={i === 0 ? "hp-img is-active" : "hp-img"}
              src={p.img}
              alt={p.role}
              width={900}
              height={1125}
              decoding="async"
            />
          ))}
        </div>
        <div className="hp-info">
          <div className="hp-roles">
            {PEOPLE.map((p, i) => (
              <div key={p.role} className={i === 0 ? "hp-role is-active" : "hp-role"}>
                <b>{p.role}</b>
                <ul>
                  {p.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <dl className="hp-facts">
            <div>
              <dt>Rate</dt>
              <dd>Negotiable • $$$</dd>
            </div>
            <div>
              <dt>Interview</dt>
              <dd>You decide</dd>
            </div>
            <div>
              <dt>Trial</dt>
              <dd>Risk-free</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
