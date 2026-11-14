import { FaqList } from "@/components/FaqList";
import { CAREERS_FAQ } from "@/data/faqs";

export function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <h2 id="faq-title" data-reveal="">
            Frequently asked questions
          </h2>
        </div>
        <FaqList items={CAREERS_FAQ} />
      </div>
    </section>
  );
}
