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
            loading="lazy"
            decoding="async"
          />
          <div className="jm-txt">
            <h2 id="mission-title">Every team, complete.</h2>
            <p>
              We give companies the senior engineers they&apos;re missing, and give engineers work
              that matters.
            </p>
            <Link className="btn btn-ghost" href="/contact?type=project" prefetch={false}>
              Discuss a project
            </Link>
          </div>
        </figure>
      </div>
    </section>
  );
}
