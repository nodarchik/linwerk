import type { Metadata } from "next";
import { LegalView } from "@/components/legal/LegalView";
import { PageScope } from "@/components/layout/PageScope";
import { LEGAL, type LegalSlug } from "@/data/legal";

export function legalMetadata(slug: LegalSlug): Metadata {
  const { title, summary } = LEGAL[slug];
  return { title, description: summary };
}

export function LegalPage({ slug }: { slug: LegalSlug }) {
  return (
    <>
      <PageScope page="article" />
      <main>
        <LegalView doc={LEGAL[slug]} />
      </main>
    </>
  );
}
