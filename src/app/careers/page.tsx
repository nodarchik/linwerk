import type { Metadata } from "next";
import { FaqSchema } from "@/components/FaqList";
import { PageFx } from "@/components/fx/PageFx";
import { PageScope } from "@/components/layout/PageScope";
import { Faq } from "@/components/sections/careers/Faq";
import { Hero } from "@/components/sections/careers/Hero";
import { Mission } from "@/components/sections/careers/Mission";
import { OpenRoles } from "@/components/sections/careers/OpenRoles";
import { GetStarted } from "@/components/sections/shared/GetStarted";
import { CAREERS_FAQ } from "@/data/faqs";

export const metadata: Metadata = { title: "Careers" };

const TRAILS = ["get-started", "hero"] as const;
// In-page links (See open roles) land below the sticky header.
const ANCHORS = { selector: 'main a[href^="#"]', offset: 64 } as const;

export default function CareersPage() {
  return (
    <>
      <PageScope page="careers" />
      <FaqSchema items={CAREERS_FAQ} />
      <main>
        <Hero />
        <Mission />
        <OpenRoles />
        <Faq />
        <GetStarted />
      </main>
      <PageFx reveal appear faq trails={TRAILS} anchors={ANCHORS} />
    </>
  );
}
