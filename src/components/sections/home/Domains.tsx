import Link from "next/link";

export function Domains() {
  return (
    <section className="domains" id="domains" aria-labelledby="domains-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="domains-title" data-reveal="">
            Domains we know
          </h2>
          <Link className="tlink" href="/industries">
            See industry expertise
          </Link>
        </div>
        <ul className="domain-grid">
          <li>Fintech</li>
          <li>Banking</li>
          <li>Insurance</li>
          <li>Healthcare</li>
          <li>Retail &amp; e-commerce</li>
          <li>Manufacturing</li>
          <li>Logistics</li>
          <li>Real estate</li>
          <li>Education</li>
          <li>Legal</li>
          <li>Travel</li>
          <li>Media</li>
          <li>Energy</li>
          <li>Telecom</li>
          <li>Public sector</li>
        </ul>
      </div>
    </section>
  );
}
