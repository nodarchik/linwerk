import Link from "next/link";

export function Hero() {
  return (
    <section className="svh" id="hero" data-bg="trail" aria-labelledby="hero-title">
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
              <span aria-current="page">Careers</span>
            </li>
          </ol>
        </nav>
        <h1 id="hero-title" data-reveal="">
          Build systems that matter, with senior engineers
        </h1>
        <p className="sub" data-reveal="">
          150+ specialists, 70% of them senior. Real products, real decisions.
        </p>
        <div className="ctas">
          <a className="btn btn-primary" href="#open-roles">
            See open roles
          </a>
        </div>
      </div>
    </section>
  );
}
