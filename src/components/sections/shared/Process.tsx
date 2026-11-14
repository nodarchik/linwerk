import Link from "next/link";

export function Process() {
  return (
    <section className="svc-sec" id="process" aria-labelledby="proc-title">
      <div className="wrap">
        <h2 id="proc-title" data-reveal="">
          How a project runs
        </h2>
        <div className="proc-tabs" role="tablist" aria-label="Which process">
          <button
            type="button"
            role="tab"
            id="pt-project"
            aria-selected="true"
            aria-controls="steps-project"
          >
            Project delivery
          </button>{" "}
          <button
            type="button"
            role="tab"
            id="pt-staff"
            aria-selected="false"
            aria-controls="steps-staff"
            tabIndex={-1}
          >
            Outstaffing
          </button>
        </div>
        <div id="steps-project" role="tabpanel" aria-labelledby="pt-project">
          <ol className="proc-steps">
            <li>
              <span className="ps-num" aria-hidden="true">
                01
              </span>
              <b>Discovery call</b>
              <p>A free 30–45 minute call about your goals, scope and constraints.</p>
            </li>
            <li>
              <span className="ps-num" aria-hidden="true">
                02
              </span>
              <b>Discovery &amp; architecture</b>
              <p>We map the scope and design the system. The architecture is yours to keep.</p>
            </li>
            <li>
              <span className="ps-num" aria-hidden="true">
                03
              </span>
              <b>Design &amp; engineering</b>
              <p>Two-week sprints, with a working demo at the end of each.</p>
            </li>
            <li>
              <span className="ps-num" aria-hidden="true">
                04
              </span>
              <b>Support &amp; evolution</b>
              <p>A 90-day warranty after launch, then an SLA as the product grows.</p>
            </li>
          </ol>
        </div>
        <div id="steps-staff" role="tabpanel" aria-labelledby="pt-staff" hidden>
          <ol className="proc-steps">
            <li>
              <span className="ps-num" aria-hidden="true">
                01
              </span>
              <b>Brief</b>
              <p>Tell us the stack, seniority and headcount you need.</p>
            </li>
            <li>
              <span className="ps-num" aria-hidden="true">
                02
              </span>
              <b>Matched CVs</b>
              <p>CVs that fit your brief, in two business days.</p>
            </li>
            <li>
              <span className="ps-num" aria-hidden="true">
                03
              </span>
              <b>Your interviews</b>
              <p>You interview the candidates and choose who joins.</p>
            </li>
            <li>
              <span className="ps-num" aria-hidden="true">
                04
              </span>
              <b>Onboarding</b>
              <p>Your engineers start in your team in two weeks.</p>
            </li>
          </ol>
        </div>
        <div className="proc-ctas">
          <Link className="btn btn-primary" href="/request">
            Request engineers
          </Link>
        </div>
      </div>
    </section>
  );
}
