import Link from "next/link";

export function Mission() {
  return (
    <section className="svc-sec" id="mission" aria-labelledby="mission-title">
      <div className="wrap">
        <figure className="jm-fig">
          <img
            src="/blog/agency-launch.webp"
            alt=""
            width="1200"
            height="600"
            fetchPriority="high"
            decoding="async"
          />
          <div className="jm-txt">
            <h2 id="mission-title">Every team, complete.</h2>
            <p>
              We give companies the senior engineers they’re missing, and give engineers work that
              matters.
            </p>
            <Link className="btn btn-ghost" href="/about">
              About us
            </Link>
          </div>
        </figure>
      </div>
    </section>
  );
}
