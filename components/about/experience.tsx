"use client";

import type { ReactNode } from "react";

type Entry = {
  company: string;
  role: string;
  period: string;
  logo?: string;
  brand?: string;
};

const ENTRIES: Entry[] = [
  {
    company: "Aspivox Technologies",
    role: "MERN Stack Intern",
    period: "Oct 2025 – Nov 2025",
    logo: "/aspivox-logo.jpg",
    brand: "#2563eb",
  },
];

const ROW_HEIGHT = 64;

export function Experience(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Experience
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {ENTRIES.map((entry) => (
            <li
              key={`${entry.company}-${entry.period}`}
              className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <CompanyLogo entry={entry} />
              <div className="flex min-w-0 flex-col">
                <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                  {entry.company}
                </span>
                <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                  {entry.role}
                  <span className="text-foreground/30 mx-2">•</span>
                  <span className="text-foreground/55">{entry.period}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CompanyLogo({ entry }: { entry: Entry }): ReactNode {
  return (
    <span
      className="ring-foreground/8 inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-white ring-1 dark:ring-white/10"
      aria-hidden="true"
      style={{ borderRadius: "50%" }}
    >
      {entry.logo ? (
        <img
          src={entry.logo}
          alt={`${entry.company} logo`}
          width={48}
          height={48}
          className="h-full w-full object-cover"
          draggable={false}
        />
      ) : (
        <span
          className="text-[18px] font-semibold tracking-tight text-white"
          style={{ backgroundColor: entry.brand }}
        >
          {entry.company.charAt(0)}
        </span>
      )}
    </span>
  );
}
