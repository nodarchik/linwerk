import type { Metadata } from "next";
import Link from "next/link";
import { PageScope } from "@/components/layout/PageScope";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <PageScope page="request" />
      <main>
        <section className="svc-sec rq-page" aria-labelledby="nf-title">
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <span aria-current="page">Page not found</span>
                </li>
              </ol>
            </nav>
            <div className="rq-side">
              <h1 id="nf-title">This page isn’t here yet</h1>
              <h2>The link you followed has no page behind it.</h2>
              <div className="ctas">
                <Link className="btn btn-primary" href="/">
                  Back to home
                </Link>{" "}
                <Link className="btn btn-ghost" href="/request">
                  Request engineers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
