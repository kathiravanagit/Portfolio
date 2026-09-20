import {
  ArrowRight,
  Bot,
  Globe,
  Layers,
  LineChart,
  Shield,
  Utensils,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  liveUrl?: string;
  githubUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: "cms",
    icon: Globe,
    iconLabel: "CMS",
    title:
      "Conference Management System — a full-stack platform for managing conferences, registrations, and scheduling.",
    description:
      "Built with React, Node.js, and MongoDB. Handles real-time updates, user authentication, and event management.",
    meta: "Full Stack Developer, 2025",
    imageRatio: 16 / 10,
    image: "/projects/cms.svg",
    imageAlt: "Conference Management System preview",
    liveUrl: "https://cms-18.vercel.app/",
    githubUrl: "https://github.com/kathiravanagit/conference-management-system.git",
  },
  {
    id: "astra",
    icon: Bot,
    iconLabel: "Astra LMS Bot",
    title:
      "An intelligent learning management system bot with automated scheduling and student tracking.",
    description:
      "Backend-focused project built with Python and Django. Integrates with LMS platforms for seamless automation.",
    meta: "Backend Developer, 2025",
    imageRatio: 16 / 10,
    image: "/projects/astra.jpeg",
    imageAlt: "Astra LMS Bot preview",
    liveUrl: "https://astralmsbot.vercel.app/",
    githubUrl: "https://github.com/kathiravanagit/Astra-LMS-bot.git",
  },
  {
    id: "authkit",
    icon: Shield,
    iconLabel: "AuthKit",
    title:
      "A secure user authentication system with JWT tokens, role-based access control, and session management.",
    description:
      "Built with Node.js, Express.js, and MongoDB. Provides secure login, signup, and password recovery flows.",
    meta: "Backend Developer, 2025",
    imageRatio: 16 / 10,
    image: "/projects/authkit.png",
    imageAlt: "User Authentication System preview",
    liveUrl: "https://authkit6.vercel.app/",
    githubUrl: "https://github.com/kathiravanagit/user-authentication-system.git",
  },
  {
    id: "blog",
    icon: Layers,
    iconLabel: "Blog",
    title:
      "A full-featured blog platform with content management, user comments, and rich text editing.",
    description:
      "Built with Django and PostgreSQL. Features admin dashboard, post scheduling, and SEO optimization.",
    meta: "Backend Developer, 2025",
    imageRatio: 16 / 10,
    image: "/projects/blog.png",
    imageAlt: "Blog platform preview",
    liveUrl: "https://blog-iqez.onrender.com/",
    githubUrl: "https://github.com/kathiravanagit/Blog.git",
  },
  {
    id: "recipe",
    icon: Utensils,
    iconLabel: "Recipe Ideas",
    title:
      "A beautiful recipe discovery app with search functionality, filtering, and detailed cooking instructions.",
    description:
      "Frontend project built with React. Features responsive design, API integration, and interactive UI.",
    meta: "Frontend Developer, 2025",
    imageRatio: 16 / 10,
    image: "/projects/recipe-ideas.png",
    imageAlt: "Recipe Ideas app preview",
    liveUrl: "https://recipe-ideas12.vercel.app/",
    githubUrl: "https://github.com/kathiravanagit/recipe-ideas.git",
  },
  {
    id: "coffee",
    icon: LineChart,
    iconLabel: "Coffee Shop",
    title:
      "An elegant coffee shop website with menu display, online ordering, and responsive design.",
    description:
      "Frontend project built with HTML, CSS, and JavaScript. Clean UI with smooth animations.",
    meta: "Frontend Developer, 2024",
    imageRatio: 16 / 10,
    image: "/projects/coffee-shop.png",
    imageAlt: "Coffee Shop Website preview",
    liveUrl: "https://coffee-shop-website-kappa-blush.vercel.app/",
    githubUrl: "https://github.com/kathiravanagit/Coffee-Shop-Website.git",
  },
  {
    id: "spotify",
    icon: Globe,
    iconLabel: "Album Finder",
    title:
      "A React-based album discovery app using the Spotify API with search, filtering, and album details.",
    description:
      "Frontend project built with React and Spotify API. Features real-time search and responsive grid layout.",
    meta: "Frontend Developer, 2024",
    imageRatio: 16 / 10,
    image: "/projects/spotify.png",
    imageAlt: "Spotify Album Finder preview",
    liveUrl: "https://spotify-album-finder-wwo5.vercel.app/",
    githubUrl: "https://github.com/kathiravanagit/Spotify-album-finder.git",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Full-stack applications, backend systems, and frontend experiments
              I&rsquo;ve built and shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="https://github.com/kathiravanagit?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between px-1 pb-2">
          <p className="text-[12px] tracking-tight text-foreground/50">
            {project.meta}
          </p>
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-foreground/8 hover:border-foreground/15 focus-ring inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-background text-foreground/70 transition-colors hover:text-foreground"
                aria-label="Live demo"
              >
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-foreground/8 hover:border-foreground/15 focus-ring inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-background text-foreground/70 transition-colors hover:text-foreground"
                aria-label="Source code"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
