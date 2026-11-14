import Link from "next/link";
import type React from "react";

export function About() {
  return (
    <section
      className="about"
      id="about"
      data-ph="natural"
      data-roles=""
      aria-labelledby="about-title"
    >
      <div className="wrap">
        <div className="about-head">
          <h2 id="about-title" data-reveal="">
            About us
          </h2>
          <div className="about-copy">
            <p>
              We are an engineering agency for international teams, maisons
              across the LVMH group among them. One more person in your team or
              a whole project delivered: we work the way your team already does.
            </p>
            <Link className="tlink" href="/about">
              More about us
            </Link>
          </div>
        </div>
        <figure className="about-team" aria-label="Five members of our team">
          <div className="at-t">
            <div
              className="at-ph"
              style={{ "--lqip": "url(data:image/png" } as React.CSSProperties}
            >
              <img
                src="/team/p1-blur.webp"
                alt=""
                width="720"
                height="900"
                fetchPriority="low"
                decoding="async"
              />
            </div>
            <p className="at-role">
              <b>Delivery manager</b>
            </p>
          </div>
          <div className="at-t">
            <div
              className="at-ph"
              style={{ "--lqip": "url(data:image/png" } as React.CSSProperties}
            >
              <img
                src="/team/p2-blur.webp"
                alt=""
                width="720"
                height="900"
                fetchPriority="low"
                decoding="async"
              />
            </div>
            <p className="at-role">
              <b>Backend engineer</b>
            </p>
          </div>
          <div className="at-t">
            <div
              className="at-ph"
              style={{ "--lqip": "url(data:image/png" } as React.CSSProperties}
            >
              <img
                src="/team/p3-blur.webp"
                alt=""
                width="720"
                height="900"
                fetchPriority="low"
                decoding="async"
              />
            </div>
            <p className="at-role">
              <b>Product designer</b>
            </p>
          </div>
          <div className="at-t">
            <div
              className="at-ph"
              style={{ "--lqip": "url(data:image/png" } as React.CSSProperties}
            >
              <img
                src="/team/p4-blur.webp"
                alt=""
                width="720"
                height="900"
                fetchPriority="low"
                decoding="async"
              />
            </div>
            <p className="at-role">
              <b>Frontend engineer</b>
            </p>
          </div>
          <div className="at-t">
            <div
              className="at-ph"
              style={{ "--lqip": "url(data:image/png" } as React.CSSProperties}
            >
              <img
                src="/team/p5-blur.webp"
                alt=""
                width="720"
                height="900"
                fetchPriority="low"
                decoding="async"
              />
            </div>
            <p className="at-role">
              <b>QA lead</b>
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}
