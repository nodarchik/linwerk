import Link from "next/link";
import { lqip } from "@/data/lqip";

export function Blog() {
  return (
    <section className="block blog" id="blog" aria-labelledby="blog-title">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="blog-title" data-reveal="">
            From the blog
          </h2>
        </div>
        <div className="blog-grid">
          <article className="blog-card">
            <Link className="bc-link" href="/blog/agency-launch">
              {" "}
              <div className="bc-art" aria-hidden="true" style={lqip("agency_launch")}>
                <img
                  src="/blog/agency-launch.webp"
                  alt=""
                  width="1200"
                  height="600"
                  fetchPriority="low"
                  decoding="async"
                />
              </div>{" "}
              <div className="bc-body">
                <p className="bc-meta">
                  <span>Company news</span>
                  <span>4 min read</span>
                </p>
                <h3>We’re open: senior engineers, on your terms</h3>
                <p className="bc-sum">
                  Why we started the agency, how we work, from one engineer in your team to a whole
                  product delivered, and what you can expect from the first conversation.
                </p>
                <span className="bc-more tlink">Read article</span>
              </div>{" "}
            </Link>
          </article>
          <article className="blog-card">
            <Link className="bc-link" href="/blog/why-going-digital-is-hard">
              {" "}
              <div className="bc-art" aria-hidden="true" style={lqip("going_digital")}>
                <img
                  src="/blog/going-digital.webp"
                  alt=""
                  width="1200"
                  height="600"
                  fetchPriority="low"
                  decoding="async"
                />
              </div>{" "}
              <div className="bc-body">
                <p className="bc-meta">
                  <span>Digital transformation</span>
                  <span>7 min read</span>
                </p>
                <h3>Why going digital is harder for smaller businesses</h3>
                <p className="bc-sum">
                  Paper files, legacy tools and no in-house tech team: the obstacles small and
                  mid-sized companies hit on the way to digital, and how to get past them one step
                  at a time.
                </p>
                <span className="bc-more tlink">Read article</span>
              </div>{" "}
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
