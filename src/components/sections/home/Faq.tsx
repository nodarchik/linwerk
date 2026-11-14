import Link from "next/link";

export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 id="faq-title" data-reveal="">
            Frequently asked questions
          </h2>
          <p className="faq-intro">
            Straight answers about how working with us works. Anything else, ask
            us directly.
          </p>
          <Link className="btn btn-ghost" href="/contact?type=project">
            Discuss a project
          </Link>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>
              How quickly can your engineers start?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Within weeks. Tell us your stack and the seniority you need, we
              match candidates, you interview them, and the engineers you choose
              join your team.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Do I get to interview the engineers?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Yes. You interview every candidate and decide who joins. Nobody
              starts on your project without your approval.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              What does it cost to get started?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              There’s no recruitment fee, and engineers start with a risk-free
              trial. Projects are priced as a fixed price or as time and
              materials.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Who owns the code and the IP?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              You do. Code, IP, documentation and infrastructure accounts are
              yours from day one, and it’s written into the contract.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Can you take on a whole project, not just engineers?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Yes. Our architects, QA and delivery leads scope it, build it,
              ship it and support it after launch, with one named delivery lead
              accountable end to end and a committed delivery date.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Can we change how we work together later?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Yes. Most long-term clients combine models, and you can switch
              between them without renegotiating from scratch.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
