import Link from "next/link";

export function Hero() {
  return (
    <section
      className="svh"
      id="hero"
      data-bg="trail"
      aria-labelledby="hero-title"
    >
      <div className="hero-sky" aria-hidden="true">
        <div className="hb hb-dots" />
        <div className="hb hb-trail" />
      </div>
      <div className="wrap svh-in">
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/careers#open-roles">Careers</Link>
            </li>
            <li>
              <span aria-current="page" data-j="title" />
            </li>
          </ol>
        </nav>
        <h1 id="hero-title" data-j="title" />
        <p className="sub jd-meta">
          <span data-j="where" />
        </p>
      </div>
    </section>
  );
}
