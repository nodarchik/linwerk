import Link from "next/link";
import { Block } from "@/components/blog/ArticleView";
import type { LegalDoc } from "@/data/legal";

/** A legal page: the article layout without the picture. */
export function LegalView({ doc }: { doc: LegalDoc }) {
  return (
    <section className="svc-sec ar-page" id="article" aria-labelledby="hero-title">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <span aria-current="page">{doc.title}</span>
            </li>
          </ol>
        </nav>
        <header className="ar-head">
          <h1 id="hero-title">{doc.title}</h1>
          <p className="ar-meta">Last updated · {doc.updated}</p>
        </header>
        <article className="ar-body">
          {doc.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>
      </div>
    </section>
  );
}
