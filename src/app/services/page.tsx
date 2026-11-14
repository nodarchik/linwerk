import type { Metadata } from "next";
import { FaqSchema } from "@/components/FaqList";
import { IntegrationsSphere } from "@/components/fx/IntegrationsSphere";
import { PageFx } from "@/components/fx/PageFx";
import { StageAccordion } from "@/components/fx/StageAccordion";
import { Tabs } from "@/components/fx/Tabs";
import { PageScope } from "@/components/layout/PageScope";
import { Faq } from "@/components/sections/services/Faq";
import { Hero } from "@/components/sections/services/Hero";
import { Integrations } from "@/components/sections/services/Integrations";
import { WhatWeBuild } from "@/components/sections/services/WhatWeBuild";
import { WhyUs } from "@/components/sections/services/WhyUs";
import { GetStarted } from "@/components/sections/shared/GetStarted";
import { Process } from "@/components/sections/shared/Process";
import { SERVICES_FAQ } from "@/data/faqs";

export const metadata: Metadata = { title: "Services" };

const TRAILS = ["get-started", "hero"] as const;

export default function ServicesPage() {
  return (
    <>
      <PageScope page="services" />
      <FaqSchema items={SERVICES_FAQ} />
      <main>
        <Hero />
        <WhatWeBuild />
        <div className="grp-end" aria-hidden="true" />
        <Integrations />
        <Process />
        <WhyUs />
        <Faq />
        <GetStarted />
      </main>
      <IntegrationsSphere section="integrations" />
      <Tabs tablist=".proc-tabs" />
      <StageAccordion section="why-us" scenes=".wf .sc" />
      <PageFx reveal appear faq trails={TRAILS} />
    </>
  );
}
