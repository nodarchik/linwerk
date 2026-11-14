import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ApplyDialog } from "@/components/careers/ApplyDialog";
import { JobHero, JobRole } from "@/components/careers/JobSections";
import { PageFx } from "@/components/fx/PageFx";
import { PageScope } from "@/components/layout/PageScope";
import { ModalProvider } from "@/components/Modal";
import { JOBS, getJob } from "@/data/jobs";

export function generateStaticParams() {
  return JOBS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const job = getJob((await params).slug);
  return job ? { title: { absolute: `${job.title} · Careers · Linwerk` } } : {};
}

const TRAILS = ["hero"] as const;

export default async function JobPage({ params }: PageProps<"/careers/[slug]">) {
  const job = getJob((await params).slug);
  if (!job) notFound();

  return (
    <>
      <PageScope page="job" />
      <ModalProvider>
        <main>
          <JobHero job={job} />
          <JobRole job={job} />
        </main>
        <ApplyDialog roleTitle={job.title} />
      </ModalProvider>
      <PageFx appear trails={TRAILS} />
    </>
  );
}
