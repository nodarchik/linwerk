export function Locations() {
  return (
    <section className="svc-sec" id="locations" aria-labelledby="loc-title">
      <div className="wrap geo">
        <div className="geo-txt">
          <h2 id="loc-title" data-reveal="">
            Based in Tbilisi, working worldwide
          </h2>
          <p>
            Our home is Tbilisi. We hire engineers and work with clients around the world, maisons
            across the LVMH group among them.
          </p>
          <ul className="geo-rows">
            <li>
              <span className="mono">Headquarters</span>
              <b>Tbilisi</b>
            </li>
            <li>
              <span className="mono">Team</span>
              <b>
                <i className="geo-live" aria-hidden="true" />
                Global
              </b>
            </li>
            <li>
              <span className="mono">Clients</span>
              <b>Worldwide</b>
            </li>
          </ul>
        </div>
        <div className="geo-box" aria-hidden="true">
          <svg className="geo-svg">
            <g className="g-back" />
            <g className="g-land" />
            <g className="g-hot" />
          </svg>
        </div>
      </div>
    </section>
  );
}
