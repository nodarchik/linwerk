"use client";

import { useEffect } from "react";
import { stageAccordion } from "@/lib/stage-accordion";
import { fitScenes } from "@/lib/ui-scene";

/** An accordion beside a stage of interface pictures (see lib/stage-accordion). `scenes` selects the pictures inside
    each stage layer. */
export function StageAccordion({ section, scenes }: { section: string; scenes: string }) {
  useEffect(() => {
    const sec = document.getElementById(section);
    if (!sec) return;
    const stopFit = fitScenes(".ui-fit", sec);
    const stop = stageAccordion(sec, scenes);
    return () => {
      stopFit();
      stop();
    };
  }, [section, scenes]);

  return null;
}
