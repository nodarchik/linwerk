import { PEOPLE } from "@/data/people";

// Runs while the HTML is parsed, before the first paint: the person shown first is a random one on every page open.
const PICK = `(function(){var c=document.currentScript.parentNode,i=c.querySelectorAll(".hp-img"),r=c.querySelectorAll(".hp-role"),k=Math.floor(Math.random()*i.length);i[k].loading="eager";i[k].classList.add("is-active");r[k].classList.add("is-active")})()`;

/**
 * The Match card: one of our team members on a photo tile, the role, skills and the terms. Every person is in the
 * markup and none is active in it: the inline script picks a random one to start with (<HeroSlider> does when the
 * page is reached without a reload), then <HeroSlider> moves `is-active` from one to the next on its clock.
 */
export function MatchCard() {
  return (
    <div className="hp-card">
      <div className="hp-body">
        <div className="hp-tile">
          {PEOPLE.map((p) => (
            <img
              key={p.img}
              className="hp-img"
              src={p.img}
              alt={p.role}
              width={900}
              height={1125}
              // only the picked face is needed at once (the script makes it eager); the others must not be preloaded
              loading="lazy"
              decoding="async"
              suppressHydrationWarning
            />
          ))}
        </div>
        <div className="hp-info">
          <div className="hp-roles">
            {PEOPLE.map((p) => (
              <div key={p.role} className="hp-role" suppressHydrationWarning>
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
      <script dangerouslySetInnerHTML={{ __html: PICK }} />
      <noscript>
        <style>{`.hp-img:first-child,.hp-role:first-child{opacity:1;transform:none}`}</style>
      </noscript>
    </div>
  );
}
