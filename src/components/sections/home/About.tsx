import Link from "next/link";

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div className="about-head">
          <h2 id="about-title" data-reveal="">
            About us
          </h2>
          <div className="about-copy">
            <p>
              We are an engineering agency for international teams, maisons across the LVMH group
              among them. One more person in your team or a whole project delivered: we work the way
              your team already does.
            </p>
            <Link className="tlink" href="/about">
              More about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
