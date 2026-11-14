export function Recognition() {
  return (
    <section className="svc-sec" id="recognition" aria-labelledby="rec-title">
      <div className="wrap">
        <div className="svc-head is-stack">
          <h2 id="rec-title" data-reveal="">
            Certifications, partners and awards
          </h2>
        </div>
        <ul className="recs">
          <li>
            <h3>Certifications</h3>
            <div className="slots-b">
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-shield" />
                </svg>
                <b>ISO 27001</b>
                <span>Information security</span>
              </i>
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-shield" />
                </svg>
                <b>ISO 9001</b>
                <span>Quality management</span>
              </i>
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-shield" />
                </svg>
                <b>SOC 2 Type II</b>
                <span>Security controls</span>
              </i>
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-shield" />
                </svg>
                <b>Cyber Essentials</b>
                <span>UK security</span>
              </i>
            </div>
          </li>
          <li>
            <h3>Partnerships</h3>
            <div className="slots-b">
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-badge" />
                </svg>
                <b>AWS</b>
                <span>Advanced Partner</span>
              </i>
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-badge" />
                </svg>
                <b>Google Cloud</b>
                <span>Partner</span>
              </i>
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-badge" />
                </svg>
                <b>Microsoft</b>
                <span>Solutions Partner</span>
              </i>
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-badge" />
                </svg>
                <b>Shopify</b>
                <span>Plus Partner</span>
              </i>
            </div>
          </li>
          <li>
            <h3>Awards</h3>
            <div className="slots-b">
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-star" />
                </svg>
                <b>Clutch</b>
                <span>Top Developers 2026</span>
              </i>
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-star" />
                </svg>
                <b>GoodFirms</b>
                <span>Top Software Company</span>
              </i>
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-star" />
                </svg>
                <b>Awwwards</b>
                <span>Honorable Mention</span>
              </i>
              <i className="rb">
                <svg className="ic" aria-hidden="true">
                  <use href="#i-star" />
                </svg>
                <b>The Manifest</b>
                <span>Most Reviewed</span>
              </i>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
