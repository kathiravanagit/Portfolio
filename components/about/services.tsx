import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  icon: string;
};

const SERVICES: Service[] = [
  {
    title: "Custom Web Development",
    description:
      "Full-stack applications built with the MERN stack and Python backends. From concept to deployment — responsive, fast, and production-ready.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "AI Integrations",
    description:
      "Smart features powered by Generative AI and computer vision. API integrations, chatbots, and intelligent automation for your products.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Database Management",
    description:
      "Robust, scalable data architectures with MongoDB and PostgreSQL. Schema design, optimization, and migration strategies that grow with your app.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  },
];

export function Services(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Services
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-background border-foreground/5 flex flex-col gap-3 rounded-3xl border p-4"
            >
              <span className="border-foreground/10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border">
                <svg
                  className="h-5 w-5 text-foreground/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={service.icon}
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="text-foreground text-[15px] font-semibold tracking-tight">
                  {service.title}
                </span>
                <span className="text-foreground/60 text-[13px] leading-relaxed tracking-tight sm:text-[14px]">
                  {service.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
