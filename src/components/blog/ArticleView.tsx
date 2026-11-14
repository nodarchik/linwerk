import Link from "next/link";
import type { Article, ArticleBlock } from "@/data/articles";

const meta = (article: Article) => `${article.tag} · ${article.minutes} min read`;

function Block({ block }: { block: ArticleBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  if ("h" in block) return <h2>{block.h}</h2>;
  if ("quote" in block) return <blockquote>{block.quote}</blockquote>;
  return (
    <ul>
      {block.list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ArticleView({ article, next }: { article: Article; next: Article }) {
  return (
    <section className="svc-sec ar-page" id="article" aria-labelledby="hero-title">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#blog">Blog</Link>
            </li>
            <li>
              <span aria-current="page">{article.title}</span>
            </li>
          </ol>
        </nav>
        <figure className="ar-fig">
          <img
            src={article.img}
            alt=""
            width={1200}
            height={600}
            fetchPriority="high"
            decoding="async"
          />
        </figure>
        <header className="ar-head">
          <h1 id="hero-title">{article.title}</h1>
          <p className="ar-meta">
            {meta(article)} · {article.date}
          </p>
        </header>
        <article className="ar-body" data-appear-block="">
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>
        <div className="ar-next">
          <h2>Read next</h2>
          <Link className="ar-card" href={`/blog/${next.slug}`} data-appear-block="">
            <img src={next.img} alt="" width={1200} height={600} loading="lazy" decoding="async" />
            <span>
              <span className="ar-meta">{meta(next)}</span>
              <b>{next.title}</b>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
