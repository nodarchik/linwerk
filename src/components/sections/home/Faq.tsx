import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { HOME_FAQ } from "@/data/faqs";

export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 id="faq-title" data-reveal="">
            Frequently asked questions
          </h2>
          <p className="faq-intro">
            Straight answers about how working with us works. Anything else, ask us directly.
          </p>
          <Link className="btn btn-ghost" href="/contact?type=project" prefetch={false}>
            Discuss a project
          </Link>
        </div>
        <FaqList items={HOME_FAQ} />
      </div>
    </section>
  );
}
