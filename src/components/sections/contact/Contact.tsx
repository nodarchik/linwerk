import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";

const STEPS = [
  "We read your message and reply within two business days.",
  "If you need one, we sign an NDA before we talk details.",
  "We set up a free 30–45 minute call about your goals, scope and constraints.",
];

export function Contact() {
  return (
    <section className="svc-sec rq-page" id="contact" aria-labelledby="rq-title">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">Contact</span>
            </li>
          </ol>
        </nav>
        <div className="rq-grid">
          <div className="rq-side">
            <h1 id="rq-title">Talk to us</h1>
            <h2>What happens next?</h2>
            <ol className="rq-steps">
              {STEPS.map((step, i) => (
                <li key={step}>
                  <i>{i + 1}</i>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="rq-alt">
              Prefer email? Write to <a href="mailto:info@linwerk.com">info@linwerk.com</a>.
            </p>
          </div>
          <div className="rq-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
