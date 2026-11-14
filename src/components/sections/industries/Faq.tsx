import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { INDUSTRIES_FAQ } from "@/data/faqs";

export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 id="faq-title" data-reveal="">
            Frequently asked questions
          </h2>
          <Link className="btn btn-ghost" href="/contact?type=project" prefetch={false}>
            Discuss a project
          </Link>
        </div>
        <FaqList items={INDUSTRIES_FAQ} />
      </div>
    </section>
  );
}
