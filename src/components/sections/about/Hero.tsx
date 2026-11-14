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
              <span aria-current="page">About us</span>
            </li>
          </ol>
        </nav>
        <h1 id="hero-title" data-reveal="">
          Engineers who own the outcome
        </h1>
        <p className="sub" data-reveal="">
          Founded in 2021. 150+ specialists, building software for clients in 20+ countries.
        </p>
        <div className="ctas">
          <Link className="btn btn-primary" href="/request">
            Request engineers
          </Link>{" "}
          <Link className="btn btn-ghost" href="/contact?type=project" prefetch={false}>
            Discuss a project
          </Link>
        </div>
      </div>
    </section>
  );
}
