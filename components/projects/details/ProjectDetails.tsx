"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language/LanguageProvider";
import {
  getProjectBySlug,
  type ProjectSlug,
} from "@/data/projects";

type ProjectDetailsProps = {
  slug: ProjectSlug;
};

export default function ProjectDetails({
  slug,
}: ProjectDetailsProps) {
  const { t } = useLanguage();

  const projectData = getProjectBySlug(slug);

  if (!projectData) {
    return null;
  }

  const project =
    t.projects[projectData.translationKey];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* GLOW */}

        <div className="absolute left-[20%] top-[20%] h-72 w-72 rounded-full bg-violet-600/10 blur-[110px] sm:h-96 sm:w-96 sm:blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* BACK */}

          <Link
            href="/#projects"
            className="inline-flex min-h-10 items-center gap-3 font-mono text-xs text-zinc-500 transition-colors hover:text-white"
          >
            <span>←</span>

            {t.projects.details.back}
          </Link>

          {/* PROJECT NUMBER */}

          <div className="mt-14 font-mono text-[10px] tracking-[0.3em] text-violet-400 sm:mt-20 sm:text-xs">
            PROJECT / {projectData.index}
          </div>

          {/* TITLE */}

          <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            {project.title}
          </h1>

          {/* SUBTITLE */}

          <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:mt-6 sm:text-xs">
            {project.subtitle}
          </div>

          {/* TECHNOLOGIES */}

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-8">
            {projectData.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-zinc-400 sm:px-3 sm:text-xs"
                >
                  {technology}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* MAIN SCREENSHOT */}

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#09090c] sm:min-h-[400px] sm:rounded-3xl lg:min-h-[500px]">
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "45px 45px",
              }}
            />

            <div className="relative z-10 px-5 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700 sm:text-xs sm:tracking-[0.25em]">
                {
                  t.projects.details
                    .screenshotPlaceholder
                }
              </div>

              <div className="mt-3 text-base text-zinc-500 sm:text-xl">
                {project.title}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-400 sm:text-xs">
              {t.projects.details.about}
            </div>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}

      <section className="border-y border-white/10 bg-white/[0.015] px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-400 sm:text-xs">
            {t.projects.details.architecture}
          </div>

          <div className="mt-7 flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/20 px-5 text-center sm:mt-10 sm:min-h-[320px] sm:px-8">
            <span className="max-w-md text-sm leading-7 text-zinc-600">
              {
                t.projects.details
                  .architecturePlaceholder
              }
            </span>
          </div>
        </div>
      </section>

      {/* GALLERY */}

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-400 sm:text-xs">
            {t.projects.details.gallery}
          </div>

          <div className="mt-7 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {[1, 2, 3].map((image) => (
              <div
                key={image}
                className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <span className="font-mono text-[10px] text-zinc-700 sm:text-xs">
                  screenshot_{image}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}