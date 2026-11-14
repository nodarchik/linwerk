import Link from "next/link";

export function NotListed() {
  return (
    <section
      className="svc-sec"
      id="not-listed"
      aria-labelledby="nl-title"
      style={{ paddingTop: "0" }}
    >
      <div className="wrap">
        <div className="ig-banner">
          <div>
            <h2 id="nl-title" data-reveal="">
              Your field isn’t on the list?
            </h2>
            <p>Niche or brand new, we build for it too. Tell us about yours.</p>
          </div>
          <Link className="btn btn-primary" href="/contact?type=project">
            Discuss a project
          </Link>
        </div>
      </div>
    </section>
  );
}
