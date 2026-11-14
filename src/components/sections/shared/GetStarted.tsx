import Link from "next/link";

export function GetStarted() {
  return (
    <section
      className="block closing"
      id="get-started"
      data-bg="trail"
      aria-labelledby="closing-title"
    >
      <div className="hero-sky" aria-hidden="true">
        <div className="hb hb-dots" />
        <div className="hb hb-trail" />
      </div>
      <div className="wrap">
        <h2 id="closing-title" data-reveal="">
          Start small <span className="emo">🌱</span> or hand us the whole
          product
        </h2>
        <p>
          Matched engineers to interview, or a project plan within two business
          days.
        </p>
        <div className="ctas">
          <Link className="btn btn-primary" href="/request">
            Request engineers
          </Link>{" "}
          <Link className="btn btn-ghost" href="/contact?type=project">
            Discuss a project
          </Link>
        </div>
        <ul className="reassure">
          <li>
            <svg className="ic" aria-hidden="true">
              <use href="#i-check" />
            </svg>
            NDA on request
          </li>
          <li>
            <svg className="ic" aria-hidden="true">
              <use href="#i-check" />
            </svg>
            No obligation
          </li>
        </ul>
      </div>
    </section>
  );
}
