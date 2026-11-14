import Link from "next/link";

export function Article() {
  return (
    <section
      className="svc-sec ar-page"
      id="article"
      aria-labelledby="hero-title"
    >
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
              <span aria-current="page" data-a="crumb" />
            </li>
          </ol>
        </nav>
        <figure className="ar-fig">
          <img
            data-a="img"
            alt=""
            width="1200"
            height="600"
            fetchPriority="high"
            decoding="async"
          />
        </figure>
        <header className="ar-head">
          <h1 id="hero-title" data-a="title" />
          <p className="ar-meta" data-a="meta" />
        </header>
        <article className="ar-body" data-a="body" />
        <div className="ar-next">
          <h2>Read next</h2>
          <a className="ar-card" data-a="next" />
        </div>
      </div>
    </section>
  );
}
