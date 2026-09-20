"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";

const DepthCarousel = dynamic(() => import("@/components/ui/DepthCarousel"), {
  ssr: false,
});

type Service = {
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    title: "Custom Web Development",
    description:
      "Full-stack applications built with the MERN stack and Python backends. From concept to deployment — responsive, fast, and production-ready.",
  },
  {
    title: "AI Integrations",
    description:
      "Smart features powered by Generative AI and computer vision. API integrations, chatbots, and intelligent automation for your products.",
  },
  {
    title: "Database Management",
    description:
      "Robust, scalable data architectures with MongoDB and PostgreSQL. Schema design, optimization, and migration strategies that grow with your app.",
  },
];

export function Services(): ReactNode {
  const items = SERVICES.map((s) => ({
    title: s.title,
    description: s.description,
    alt: s.title,
  }));

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Services
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <div className="h-[420px] w-full">
          <DepthCarousel
            items={items}
            cardWidth={260}
            cardHeight={320}
            depth={180}
            spread={70}
            tilt={18}
            tiltDirection="right"
            perspective={1200}
            visibleCards={3}
            falloff={0.25}
            blur={4}
            autoplay
            loop
            showControls
            showIndicators
          />
        </div>
      </div>
    </div>
  );
}