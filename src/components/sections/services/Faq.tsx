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
              Is outstaffing your main business, or do you do full projects too?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>Both. Most start with engineers and grow.</p>
          </details>
          <details className="faq-item">
            <summary>
              Can I start with one engineer and expand later?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>Yes. We recommend it.</p>
          </details>
          <details className="faq-item">
            <summary>
              We’re not sure which services we need. Where do we start?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>A free discovery call.</p>
          </details>
          <details className="faq-item">
            <summary>
              Do you subcontract any of this?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>No. Our own team delivers.</p>
          </details>
          <details className="faq-item">
            <summary>
              What’s the smallest engagement you take on?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>One engineer, or a three-month project.</p>
          </details>
          <details className="faq-item">
            <summary>
              How do you price work?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Monthly, fixed or time and materials. See{" "}
              <Link href="/pricing">pricing</Link>.
            </p>
          </details>
          <details className="faq-item">
            <summary>
              Who owns the code and the intellectual property?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>You do, from the first commit.</p>
          </details>
          <details className="faq-item">
            <summary>
              Can you work with our existing in-house team?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>Yes. That’s most of our work.</p>
          </details>
          <details className="faq-item">
            <summary>
              What happens if we need to pause or stop?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>You keep everything. No lock-in.</p>
          </details>
          <details className="faq-item">
            <summary>
              How quickly can you start?
              <span className="pm" aria-hidden="true" />
            </summary>
            <p>
              Engineers: matched CVs in two business days, working in two weeks.
              Project teams in 2–4 weeks.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
