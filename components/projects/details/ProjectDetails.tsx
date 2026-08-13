"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

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

  if (slug === "mobile-waiter") {
    const project = t.projects.mobileWaiter;

    return (
      <main className="min-h-screen bg-[#050505] text-white">
        {/* HERO */}

        <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
          <GridBackground />

          <div className="absolute left-[20%] top-[20%] h-72 w-72 rounded-full bg-violet-600/10 blur-[110px] sm:h-96 sm:w-96 sm:blur-[130px]" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <BackLink label={t.projects.details.back} />

            <div className="mt-14 flex flex-wrap items-center gap-3 sm:mt-20">
              <div className="font-mono text-[10px] tracking-[0.3em] text-violet-400 sm:text-xs">
                PROJECT / {projectData.index}
              </div>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300 sm:text-[10px]">
                {project.status}
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              {project.title}
            </h1>

            <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:mt-6 sm:text-xs">
              {project.subtitle}
            </div>

            <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
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

    {/* FEATURED SCREEN */}

    <section className="px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#09090c] sm:rounded-3xl">
          <GridBackground />

          <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 py-12 sm:min-h-[560px] sm:py-16">
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-violet-500/10 blur-3xl" />

              <Image
                src="/projects/mobile-waiter/login-dark.png"
                alt={project.gallery.featuredAlt}
                width={300}
                height={669}
                priority
                className="relative h-auto w-[210px] rounded-[1.4rem] border border-white/10 shadow-2xl sm:w-[230px] lg:w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

        {/* PROBLEM */}

        <TextSection
          eyebrow={project.problem.title}
          text={project.problem.description}
        />

        {/* ARCHITECTURE */}

        <section className="border-y border-white/10 bg-white/[0.015] px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
              <div>
                <SectionLabel>
                  {project.architecture.title}
                </SectionLabel>
              </div>

              <div>
                <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
                  {project.architecture.description}
                </p>

                <ArchitectureDiagram 
                  diagram={project.architecture.diagram}
                 />
              </div>
            </div>
          </div>
        </section>

        {/* CURRENT STATE */}

        <ListSection
          title={project.currentState.title}
          items={project.currentState.items}
        />

        {/* TECHNICAL HIGHLIGHTS */}

        <section className="border-y border-white/10 bg-white/[0.015] px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
              <div>
                <SectionLabel>
                  {project.highlights.title}
                </SectionLabel>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {project.highlights.items.map(
                  (item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6"
                    >
                      <div className="font-mono text-[10px] text-violet-400">
                        0{index + 1}
                      </div>

                      <p className="mt-4 text-sm leading-7 text-zinc-300 sm:text-base">
                        {item}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}

        <ListSection
          title={project.roadmap.title}
          items={project.roadmap.items}
          roadmap
        />

        {/* GALLERY */}

        <section className="border-t border-white/10 px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionLabel>
              {project.gallery.title}
            </SectionLabel>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
              {project.gallery.description}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
              <AppScreenshot
                src="/projects/mobile-waiter/login-dark.png"
                alt={project.gallery.loginAlt}
              />

              <AppScreenshot
                src="/projects/mobile-waiter/menu-dark.png"
                alt={project.gallery.menuAlt}
              />

              <AppScreenshot
                src="/projects/mobile-waiter/connection-dark.png"
                alt={project.gallery.connectionAlt}
              />

              <AppScreenshot
                src="/projects/mobile-waiter/settings-dark.png"
                alt={project.gallery.settingsAlt}
              />
            </div>
          </div>
        </section>
      </main>
    );
  }

  /*
   * SYSTEM GARAGE
   *
   * Na razie zostawiamy dotychczasową
   * wersję strony projektu.
   */

  const project = t.projects.garage;

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HERO */}

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-32">
        <GridBackground />

        <div className="absolute left-[20%] top-[20%] h-72 w-72 rounded-full bg-violet-600/10 blur-[110px] sm:h-96 sm:w-96 sm:blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <BackLink label={t.projects.details.back} />

          <div className="mt-14 font-mono text-[10px] tracking-[0.3em] text-violet-400 sm:mt-20 sm:text-xs">
            PROJECT / {projectData.index}
          </div>

          <h1 className="mt-5 max-w-4xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            {project.title}
          </h1>

          <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600 sm:mt-6 sm:text-xs">
            {project.subtitle}
          </div>

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

      {/* SCREENSHOT PLACEHOLDER */}

      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#09090c] sm:min-h-[400px] sm:rounded-3xl lg:min-h-[500px]">
            <GridBackground />

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

      <TextSection
        eyebrow={t.projects.details.about}
        text={project.description}
      />

      {/* ARCHITECTURE */}

      <section className="border-y border-white/10 bg-white/[0.015] px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>
            {t.projects.details.architecture}
          </SectionLabel>

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
          <SectionLabel>
            {t.projects.details.gallery}
          </SectionLabel>

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

function BackLink({
  label,
}: {
  label: string;
}) {
  return (
    <Link
      href="/#projects"
      className="inline-flex min-h-10 items-center gap-3 font-mono text-xs text-zinc-500 transition-colors hover:text-white"
    >
      <span aria-hidden="true">←</span>

      {label}
    </Link>
  );
}

function GridBackground() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "45px 45px",
      }}
    />
  );
}

function SectionLabel({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-400 sm:text-xs">
      {children}
    </div>
  );
}

function TextSection({
  eyebrow,
  text,
}: {
  eyebrow: string;
  text: string;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
        <div>
          <SectionLabel>
            {eyebrow}
          </SectionLabel>
        </div>

        <div>
          <p className="max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

function ListSection({
  title,
  items,
  roadmap = false,
}: {
  title: string;
  items: readonly string[];
  roadmap?: boolean;
}) {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
        <div>
          <SectionLabel>
            {title}
          </SectionLabel>
        </div>

        <div className="grid gap-3">
          {items.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5"
            >
              <div
                className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[9px] ${
                  roadmap
                    ? "border-white/10 text-zinc-600"
                    : "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300"
                }`}
              >
                {roadmap
                  ? String(index + 1).padStart(
                      2,
                      "0",
                    )
                  : "✓"}
              </div>

              <p className="text-sm leading-7 text-zinc-300 sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureDiagram({
  diagram,
}: {
  diagram: {
    mobileClient: string;
    localServer: string;
    posDatabase: string;
    mobileTechnologies: string;
    serverTechnologies: string;
    databaseTechnologies: string;
    apiConnection: string;
    repositoryConnection: string;
  };
}) {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-[#08080b] p-5 sm:p-8">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
        <ArchitectureNode
          eyebrow={diagram.mobileClient}
          title="Android"
          technologies={
            diagram.mobileTechnologies
          }
        />

        <ArchitectureConnection
          label={diagram.apiConnection}
        />

        <ArchitectureNode
          eyebrow={diagram.localServer}
          title="FastAPI"
          technologies={
            diagram.serverTechnologies
          }
        />

        <ArchitectureConnection
          label={
            diagram.repositoryConnection
          }
        />

        <ArchitectureNode
          eyebrow={diagram.posDatabase}
          title="Firebird"
          technologies={
            diagram.databaseTechnologies
          }
        />
      </div>
    </div>
  );
}

function ArchitectureNode({
  eyebrow,
  title,
  technologies,
}: {
  eyebrow: string;
  title: string;
  technologies: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <div className="font-mono text-[9px] tracking-[0.2em] text-violet-400">
        {eyebrow}
      </div>

      <div className="mt-3 text-lg font-medium text-zinc-100">
        {title}
      </div>

      <div className="mt-2 font-mono text-[10px] leading-5 text-zinc-600">
        {technologies}
      </div>
    </div>
  );
}

function ArchitectureConnection({
  label,
}: {
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 py-1 lg:px-1">
      <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-700">
        {label}
      </div>

      <div className="text-zinc-700">
        <span className="lg:hidden">↓</span>
        <span className="hidden lg:inline">
          →
        </span>
      </div>
    </div>
  );
}

function AppScreenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="flex justify-center rounded-2xl border border-white/10 bg-[#09090c] p-4 sm:p-5">
      <Image
        src={src}
        alt={alt}
        width={300}
        height={669}
        className="h-auto w-full max-w-[260px] rounded-xl border border-white/10"
      />
    </div>
  );
}