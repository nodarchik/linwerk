import { RolesBoard, type RoleCard } from "@/components/careers/RolesBoard";
import { JOBS, type Job, type JobBlock } from "@/data/jobs";

const unique = (values: string[]) => Array.from(new Set(values));

function words(block: JobBlock): string[] {
  if (typeof block === "string") return [block];
  if (Array.isArray(block)) return block;
  return [block.intro ?? "", ...block.list];
}

// Only what the board needs crosses to the client: the card's line and one lower-cased search string per role.
function toCard(job: Job): RoleCard {
  const meta = [
    job.dept,
    job.location,
    ...(job.mode === job.location ? [] : [job.mode]),
    job.type,
  ].join(" · ");
  const haystack = [
    job.title,
    job.dept,
    job.location,
    job.mode,
    job.type,
    job.level,
    job.summary,
    ...words(job.about),
    ...words(job.work),
    ...words(job.you),
    ...words(job.nice),
  ]
    .join(" ")
    .toLowerCase();
  return {
    slug: job.slug,
    title: job.title,
    dept: job.dept,
    location: job.location,
    meta,
    haystack,
  };
}

export function OpenRoles() {
  return (
    <section className="svc-sec" id="open-roles" aria-labelledby="roles-title">
      <div className="wrap">
        <div className="svc-head is-stack">
          <h2 id="roles-title" data-reveal="">
            Open positions
          </h2>
        </div>
        <RolesBoard
          roles={JOBS.map(toCard)}
          locations={unique(JOBS.map((job) => job.location))}
          departments={unique(JOBS.map((job) => job.dept))}
        />
      </div>
    </section>
  );
}
