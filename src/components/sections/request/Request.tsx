import Link from "next/link";
import { RequestForm } from "@/components/forms/RequestForm";

const STEPS = [
  "We read your request and reply within two business days.",
  "If you need one, we sign an NDA before we talk details.",
  "You get the CVs of matched engineers and interview the ones you like.",
];

export function Request() {
  return (
    <section className="svc-sec rq-page" id="request" aria-labelledby="rq-title">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Request engineers</span>
            </li>
          </ol>
        </nav>
        <div className="rq-grid">
          <div className="rq-side">
            <h1 id="rq-title">Request engineers</h1>
            <h2>What happens next?</h2>
            <ol className="rq-steps">
              {STEPS.map((step, i) => (
                <li key={step}>
                  <i>{i + 1}</i>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rq-card">
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
}
