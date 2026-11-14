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
              <span aria-current="page">Industries</span>
            </li>
          </ol>
        </nav>
        <h1 id="hero-title" data-reveal="">
          We learn your industry before we write code
        </h1>
        <p className="sub" data-reveal="">
          Fourteen sectors, each with its own rules. We learn new ones fast.
        </p>
        <div className="ctas">
          <Link className="btn btn-primary" href="/request">
            Request engineers
          </Link>{" "}
          <Link className="btn btn-ghost" href="/contact?type=project">
            Discuss a project
          </Link>
        </div>
      </div>
    </section>
  );
}
