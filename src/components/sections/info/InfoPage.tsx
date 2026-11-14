import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, FaqSchema } from "@/components/FaqList";
import { PageFx } from "@/components/fx/PageFx";
import { PageScope } from "@/components/layout/PageScope";
import { GetStarted } from "@/components/sections/shared/GetStarted";
import { INFO_PAGES, type InfoPageData, type InfoSlug } from "@/data/info-pages";

const TRAILS = ["get-started", "hero"] as const;

export function infoMetadata(slug: InfoSlug): Metadata {
  const { title, description } = INFO_PAGES[slug];
  return { title, description };
}

/** A page of cards in the Industries layout: hero, card sections, a banner, an optional FAQ and the closing. */
export function InfoPage({ slug }: { slug: InfoSlug }) {
  const page: InfoPageData = INFO_PAGES[slug];
  return (
    <>
      <PageScope page="industries" />
      {page.faq.length > 0 && <FaqSchema items={page.faq} />}
      <main>
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
                  <span aria-current="page">{page.title}</span>
                </li>
              </ol>
            </nav>
            <h1 id="hero-title" data-reveal="">
              {page.heading}
            </h1>
            <p className="sub" data-reveal="">
              {page.sub}
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
        {page.sections.map((section, i) => (
          <section
            className="svc-sec"
            id={section.id}
            key={section.id}
            aria-labelledby={`${section.id}-title`}
            style={i > 0 ? { paddingTop: "0" } : undefined}
          >
            <div className="wrap">
              <div className="svc-head is-stack">
                <h2 id={`${section.id}-title`} data-reveal="">
                  {section.title}
                </h2>
              </div>
              <div className="ig">
                <ul className={section.cards.length % 3 === 0 ? "ig-r c3" : "ig-r"}>
                  {section.cards.map((card) => (
                    <li className="ig-card" key={card.title}>
                      <h3>{card.title}</h3>
                      {card.note && <p className="ig-n">{card.note}</p>}
                      <p className="ig-d">{card.text}</p>
                      {card.list.length > 0 && (
                        <ul className="ig-list">
                          {card.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
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
                  {page.banner.title}
                </h2>
                <p>{page.banner.text}</p>
              </div>
              <Link className="btn btn-primary" href={page.banner.href}>
                {page.banner.label}
              </Link>
            </div>
          </div>
        </section>
        {page.faq.length > 0 && (
          <section className="faq" id="faq" aria-labelledby="faq-title">
            <div className="wrap faq-grid">
              <div className="faq-head">
                <h2 id="faq-title" data-reveal="">
                  Frequently asked questions
                </h2>
                <Link className="btn btn-ghost" href="/contact?type=project">
                  Discuss a project
                </Link>
              </div>
              <FaqList items={page.faq} />
            </div>
          </section>
        )}
        <GetStarted />
      </main>
      <PageFx reveal appear faq={page.faq.length > 0} trails={TRAILS} />
    </>
  );
}
