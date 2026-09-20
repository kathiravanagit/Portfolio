"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";

const DepthCarousel = dynamic(() => import("@/components/ui/DepthCarousel"), {
  ssr: false,
});

type Service = {
  title: string;
  description: string;
  image: string;
};

const SERVICES: Service[] = [
  {
    title: "Custom Web Development",
    description:
      "Full-stack applications built with the MERN stack and Python backends. From concept to deployment — responsive, fast, and production-ready.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=800&fit=crop",
  },
  {
    title: "AI Integrations",
    description:
      "Smart features powered by Generative AI and computer vision. API integrations, chatbots, and intelligent automation for your products.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=800&fit=crop",
  },
  {
    title: "Database Management",
    description:
      "Robust, scalable data architectures with MongoDB and PostgreSQL. Schema design, optimization, and migration strategies that grow with your app.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=800&fit=crop",
  },
];

export function Services(): ReactNode {
  const items = SERVICES.map((s) => ({
    image: s.image,
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
            cardWidth={240}
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
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-background border-foreground/5 flex flex-col gap-1.5 rounded-2xl border px-4 py-3"
            >
              <span className="text-foreground text-[14px] font-semibold tracking-tight">
                {service.title}
              </span>
              <span className="text-foreground/55 text-[12px] leading-relaxed tracking-tight sm:text-[13px]">
                {service.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
