import Link from "next/link";

export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 id="faq-title" data-reveal="">
            Frequently asked questions
          </h2>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>
              Is remote work genuinely available, or is it hybrid in practice?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Yes. Most roles are fully remote; hybrid teams meet in Tbilisi or
              Batumi two days a week.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Do you publish salary ranges?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Yes. We share the range in the first call, before any interview.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              What does the technical interview involve?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              A 60-minute talk with two senior engineers about real problems you
              have solved. No live coding, and AI tools are fine.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Which technologies would I work with?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              See <Link href="/technologies">our stack</Link>.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Do engineers talk to clients directly?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>Yes, it’s part of the role.</p>
          </details>
          <details className="faq-item">
            <summary>
              How often do people change projects?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Every 12 to 18 months on average, and you can ask to move sooner.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Do you sponsor relocation or visas?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Yes, for Tbilisi and Batumi: visa support and a relocation package
              for senior roles.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
