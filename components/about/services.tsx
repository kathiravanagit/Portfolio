"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";

const DepthCarousel = dynamic(() => import("@/components/ui/DepthCarousel"), {
  ssr: false,
});

type Interest = {
  title: string;
  description: string;
};

const INTERESTS: Interest[] = [
  {
    title: "Web Development",
    description:
      "Building full-stack applications with the MERN stack and Python. From concept to deployment — responsive, fast, and production-ready.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Exploring Generative AI, computer vision, and intelligent automation. Building smart features that enhance user experiences.",
  },
  {
    title: "Database & Backend",
    description:
      "Designing robust data architectures with MongoDB and PostgreSQL. Schema optimization, migrations, and scalable systems.",
  },
];

export function Interests(): ReactNode {
  const items = INTERESTS.map((s) => ({
    title: s.title,
    description: s.description,
    alt: s.title,
  }));

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Interests
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