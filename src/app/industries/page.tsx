import type { Metadata } from "next";
import { FaqSchema } from "@/components/FaqList";
import { PageFx } from "@/components/fx/PageFx";
import { PageScope } from "@/components/layout/PageScope";
import { Faq } from "@/components/sections/industries/Faq";
import { Hero } from "@/components/sections/industries/Hero";
import { Industries } from "@/components/sections/industries/Industries";
import { NotListed } from "@/components/sections/industries/NotListed";
import { GetStarted } from "@/components/sections/shared/GetStarted";
import { INDUSTRIES_FAQ } from "@/data/faqs";

export const metadata: Metadata = { title: "Industries" };

const TRAILS = ["get-started", "hero"] as const;

export default function IndustriesPage() {
  return (
    <>
      <PageScope page="industries" />
      <FaqSchema items={INDUSTRIES_FAQ} />
      <main>
        <Hero />
        <Industries />
        <NotListed />
        <Faq />
        <GetStarted />
      </main>
      <PageFx reveal appear faq trails={TRAILS} />
    </>
  );
}
