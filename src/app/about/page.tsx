import type { Metadata } from "next";
import { CountUp } from "@/components/fx/CountUp";
import { DotGlobe } from "@/components/fx/DotGlobe";
import { PageFx } from "@/components/fx/PageFx";
import { Tabs } from "@/components/fx/Tabs";
import { PageScope } from "@/components/layout/PageScope";
import { Clients } from "@/components/sections/about/Clients";
import { Hero } from "@/components/sections/about/Hero";
import { Locations } from "@/components/sections/about/Locations";
import { Mission } from "@/components/sections/about/Mission";
import { Numbers } from "@/components/sections/about/Numbers";
import { Recognition } from "@/components/sections/about/Recognition";
import { GetStarted } from "@/components/sections/shared/GetStarted";
import { Process } from "@/components/sections/shared/Process";

export const metadata: Metadata = { title: "About us" };

const TRAILS = ["get-started", "hero"] as const;

export default function AboutPage() {
  return (
    <>
      <PageScope page="about" />
      <main>
        <Hero />
        <Numbers />
        <Mission />
        <Locations />
        <Process />
        <Recognition />
        <Clients />
        <GetStarted />
      </main>
      <Tabs tablist=".proc-tabs" />
      <CountUp watch="#numbers .stats" figures="#numbers .num-c" />
      <DotGlobe box=".geo-box" />
      <PageFx reveal appear trails={TRAILS} />
    </>
  );
}
