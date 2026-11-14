import { HeroSlider } from "@/components/fx/HeroSlider";
import { HomeScenes } from "@/components/fx/HomeScenes";
import { PageFx } from "@/components/fx/PageFx";
import { PageScope } from "@/components/layout/PageScope";
import { About } from "@/components/sections/home/About";
import { Blog } from "@/components/sections/home/Blog";
import { Domains } from "@/components/sections/home/Domains";
import { Faq } from "@/components/sections/home/Faq";
import { Hero } from "@/components/sections/home/Hero";
import { HowWeWork } from "@/components/sections/home/HowWeWork";
import { WhatWeDo } from "@/components/sections/home/WhatWeDo";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { GetStarted } from "@/components/sections/shared/GetStarted";

const TRAILS = ["hero", "get-started"] as const;

export default function HomePage() {
  return (
    <>
      <PageScope page="index" />
      <main>
        <Hero />
        <HowWeWork />
        <WhatWeDo />
        <Domains />
        <WhyUs />
        <About />
        <Blog />
        <Faq />
        <GetStarted />
      </main>
      <HeroSlider />
      <HomeScenes />
      <PageFx reveal appear faq trails={TRAILS} lazyImages=".at-ph img,.bc-art img" />
    </>
  );
}
