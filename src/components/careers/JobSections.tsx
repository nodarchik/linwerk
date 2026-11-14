import Link from "next/link";
import { Fragment } from "react";
import { ModalTrigger } from "@/components/Modal";
import { JOB_COMMON, type Job, type JobBlock } from "@/data/jobs";

function Block({ block }: { block: JobBlock }) {
  if (typeof block === "string") return <p>{block}</p>;
  if (Array.isArray(block)) return block.map((text) => <p key={text}>{text}</p>);
  return (
    <>
      {block.intro ? <p>{block.intro}</p> : null}
      <ul>
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export function JobHero({ job }: { job: Job }) {
  const where = [job.location, ...(job.mode === job.location ? [] : [job.mode]), job.type].join(
    " · ",
  );
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
              <Link href="/careers#open-roles">Careers</Link>
            </li>
            <li>
              <span aria-current="page">{job.title}</span>
            </li>
          </ol>
        </nav>
        <h1 id="hero-title">{job.title}</h1>
        <p className="sub jd-meta">
          <span>{where}</span>
        </p>
      </div>
    </section>
  );
}

const SECTIONS = [
  ["About the role", "about"],
  ["What you'll work on", "work"],
  ["About you", "you"],
  ["Nice to have", "nice"],
  ["How we hire", "hire"],
  ["What we offer", "offer"],
] as const;

const FACTS = [
  ["Department", "dept"],
  ["Location", "location"],
  ["Work mode", "mode"],
  ["Type", "type"],
  ["Level", "level"],
] as const;

export function JobRole({ job }: { job: Job }) {
  // "hire" and "offer" are the same for every role unless the role has its own
  const content = { ...JOB_COMMON, ...job };
  return (
    <section className="svc-sec" id="role" aria-label="About the role">
      <div className="wrap jd">
        <div className="jd-body">
          {SECTIONS.map(([heading, key]) => (
            <Fragment key={key}>
              <h2>{heading}</h2>
              <div data-appear-block="">
                <Block block={content[key]} />
              </div>
            </Fragment>
          ))}
        </div>
        <aside className="jd-card" aria-label="Role summary">
          <dl>
            {FACTS.map(([label, key]) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{job[key]}</dd>
              </div>
            ))}
          </dl>
          <ModalTrigger className="btn btn-primary">Apply for this role</ModalTrigger>
        </aside>
      </div>
    </section>
  );
}
