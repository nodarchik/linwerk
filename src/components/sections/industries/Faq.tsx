import Link from "next/link";

export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 id="faq-title" data-reveal="">
            Frequently asked questions
          </h2>
          <Link className="btn btn-ghost" href="/contact?type=project">
            Discuss a project
          </Link>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>
              How much industry experience do you need before starting?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>One to two weeks of discovery.</p>
          </details>
          <details className="faq-item">
            <summary>
              Can you sign industry-specific compliance agreements?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Yes: NDAs, BAAs and GDPR agreements. See{" "}
              <Link href="/security-compliance">security and compliance</Link>.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Do you have engineers who’ve worked in my sector before?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>Often. Ask and we’ll say honestly.</p>
          </details>
          <details className="faq-item">
            <summary>
              Will you work with our existing industry-specific systems?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>Yes. That’s routine for us.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
