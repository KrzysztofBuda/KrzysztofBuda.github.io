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

        {/* STATIC SYNC */}

        <section className="px-4 py-20 sm:px-6 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
              <div>
                <SectionLabel>
                  {project.staticSync.title}
                </SectionLabel>
              </div>

              <div>
                <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
                  {project.staticSync.description}
                </p>

                <StaticSyncDiagram
                  diagram={project.staticSync.diagram}
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

  const project = t.projects.garage;

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
                  src="/projects/garage-system/dashboard.jpg"
                  alt={project.gallery.featuredAlt}
                  width={366}
                  height={552}
                  priority
                  className="relative h-auto w-[220px] rounded-[1.4rem] border border-white/10 shadow-2xl sm:w-[250px] lg:w-[280px]"
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

              <GarageArchitectureDiagram
                diagram={project.architecture.diagram}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FUNCTIONALITY */}

      <ListSection
        title={project.functionality.title}
        items={project.functionality.items}
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

      {/* RESULT */}

      <TextSection
        eyebrow={project.result.title}
        text={project.result.description}
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

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <GarageProjectImage
              src="/projects/garage-system/login.jpg"
              alt={project.gallery.loginAlt}
              width={357}
              height={557}
            />

            <GarageProjectImage
              src="/projects/garage-system/automation-settings.jpg"
              alt={project.gallery.automationAlt}
              width={788}
              height={1281}
            />

            <GarageProjectImage
              src="/projects/garage-system/movement-alert.jpg"
              alt={project.gallery.notificationAlt}
              width={438}
              height={341}
            />

            <GarageProjectImage
              src="/projects/garage-system/hardware.jpg"
              alt={project.gallery.hardwareAlt}
              width={885}
              height={857}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function GarageArchitectureDiagram({
  diagram,
}: {
  diagram: {
    mobileClient: string;
    server: string;
    controller: string;
    database: string;
    hardware: string;

    mobileTechnologies: string;
    serverTechnologies: string;
    controllerTechnologies: string;
    databaseTechnologies: string;
    hardwareTechnologies: string;

    apiConnection: string;
    databaseConnection: string;
    gpioConnection: string;
  };
}) {
  return (
    <div className="mt-10 rounded-2xl border border-white/10 bg-[#08080b] p-5 sm:p-8">
      {/* MOBILE / TABLET */}

      <div className="flex flex-col lg:hidden">
        <ArchitectureNode
          eyebrow={diagram.mobileClient}
          title="Android"
          technologies={diagram.mobileTechnologies}
        />

        <GarageVerticalConnection
          label={diagram.apiConnection}
        />

        <ArchitectureNode
          eyebrow={diagram.server}
          title="Flask"
          technologies={diagram.serverTechnologies}
        />

        <div className="my-4 ml-5 flex items-center gap-3 sm:ml-10">
          <GarageHorizontalConnection
            label={diagram.databaseConnection}
          />

          <div className="min-w-0 flex-1">
            <ArchitectureNode
              eyebrow={diagram.database}
              title="MySQL"
              technologies={diagram.databaseTechnologies}
            />
          </div>
        </div>

        <GarageVerticalConnection
          label={diagram.apiConnection}
        />

        <ArchitectureNode
          eyebrow={diagram.controller}
          title="Raspberry Pi"
          technologies={diagram.controllerTechnologies}
        />

        <GarageVerticalConnection
          label={diagram.gpioConnection}
        />

        <ArchitectureNode
          eyebrow={diagram.hardware}
          title="Hardware"
          technologies={diagram.hardwareTechnologies}
        />
      </div>

      {/* DESKTOP */}

      <div className="hidden lg:grid lg:grid-cols-[1fr_minmax(220px,280px)_76px_minmax(200px,240px)_1fr] lg:items-center">
        {/* ANDROID */}

        <div className="col-start-2 row-start-1">
          <ArchitectureNode
            eyebrow={diagram.mobileClient}
            title="Android"
            technologies={diagram.mobileTechnologies}
          />
        </div>

        {/* ANDROID <-> FLASK */}

        <div className="col-start-2 row-start-2 py-3">
          <GarageVerticalConnection
            label={diagram.apiConnection}
          />
        </div>

        {/* FLASK */}

        <div className="col-start-2 row-start-3">
          <ArchitectureNode
            eyebrow={diagram.server}
            title="Flask"
            technologies={diagram.serverTechnologies}
          />
        </div>

        {/* FLASK <-> MYSQL */}

        <div className="col-start-3 row-start-3">
          <GarageHorizontalConnection
            label={diagram.databaseConnection}
          />
        </div>

        <div className="col-start-4 row-start-3">
          <ArchitectureNode
            eyebrow={diagram.database}
            title="MySQL"
            technologies={diagram.databaseTechnologies}
          />
        </div>

        {/* FLASK <-> RASPBERRY PI */}

        <div className="col-start-2 row-start-4 py-3">
          <GarageVerticalConnection
            label={diagram.apiConnection}
          />
        </div>

        {/* RASPBERRY PI */}

        <div className="col-start-2 row-start-5">
          <ArchitectureNode
            eyebrow={diagram.controller}
            title="Raspberry Pi"
            technologies={diagram.controllerTechnologies}
          />
        </div>

        {/* RASPBERRY PI <-> HARDWARE */}

        <div className="col-start-2 row-start-6 py-3">
          <GarageVerticalConnection
            label={diagram.gpioConnection}
          />
        </div>

        {/* HARDWARE */}

        <div className="col-start-2 row-start-7">
          <ArchitectureNode
            eyebrow={diagram.hardware}
            title="Hardware"
            technologies={diagram.hardwareTechnologies}
          />
        </div>
      </div>
    </div>
  );
}

function GarageVerticalConnection({
  label,
}: {
  label: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 py-3">
      <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-700">
        {label}
      </div>

      <div
        aria-hidden="true"
        className="text-sm leading-none text-zinc-700"
      >
        ↕
      </div>
    </div>
  );
}

function GarageHorizontalConnection({
  label,
}: {
  label: string;
}) {
  return (
    <div className="flex min-w-[60px] flex-col items-center justify-center gap-1.5 px-2">
      <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-zinc-700">
        {label}
      </div>

      <div
        aria-hidden="true"
        className="text-sm leading-none text-zinc-700"
      >
        ↔
      </div>
    </div>
  );
}

function GarageProjectImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-white/10 bg-[#09090c] p-4 sm:min-h-[420px] sm:p-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto max-h-[420px] w-auto max-w-full rounded-xl border border-white/10 object-contain"
      />
    </div>
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

function StaticSyncDiagram({
  diagram,
}: {
  diagram: {
    source: string;
    server: string;
    stream: string;
    staging: string;
    validation: string;
    active: string;
    application: string;

    sourceDetails: string;
    serverDetails: string;
    streamDetails: string;
    stagingDetails: string;
    validationDetails: string;
    activeDetails: string;
    applicationDetails: string;

    validationAction: string;
    previousActive: string;
    preserved: string;

    success: string;
    failure: string;
    successDescription: string;
    failureDescription: string;
  };
}) {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#08080b] p-5 sm:p-8">
      {/* INPUT FLOW */}

      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
        <SyncNode
          label={diagram.source}
          title="Firebird"
          description={diagram.sourceDetails}
        />

        <SyncArrow />

        <SyncNode
          label={diagram.server}
          title="FastAPI"
          description={diagram.serverDetails}
        />

        <SyncArrow />

        <SyncNode
          label={diagram.stream}
          title="NDJSON"
          description={diagram.streamDetails}
        />
      </div>

      {/* DOWN */}

      <div className="flex justify-center py-4 text-zinc-700">
        ↓
      </div>

      {/* LOCAL PROCESS */}

      <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <SyncNode
          label={diagram.staging}
          title="Room"
          description={diagram.stagingDetails}
          accent
        />

        <SyncArrow />

        <SyncNode
          label={diagram.validation}
          title={diagram.validationAction}
          description={
            diagram.validationDetails
          }
        />
      </div>

      {/* RESULT */}

      <div className="mt-5 grid items-start gap-4 md:grid-cols-2">
        {/* SUCCESS */}

        <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4 sm:p-5">
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-300">
            ✓ {diagram.success}
          </div>

          <div className="mt-3 text-sm font-medium text-zinc-200">
            {diagram.successDescription}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <SyncNode
              label={diagram.active}
              title="ACTIVE"
              description={
                diagram.activeDetails
              }
            />

            <div className="text-center text-zinc-700">
              ↓
            </div>

            <SyncNode
              label={diagram.application}
              title="Android"
              description={
                diagram.applicationDetails
              }
            />
          </div>
        </div>

        {/* FAILURE */}

        <div className="self-start rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
            × {diagram.failure}
          </div>

          <div className="mt-3 text-sm font-medium leading-6 text-zinc-400">
            {diagram.failureDescription}
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-white/10 px-4 py-5 text-center">
            <div className="font-mono text-[9px] tracking-[0.2em] text-zinc-600">
              {diagram.previousActive}
            </div>

            <div className="mt-2 text-sm text-zinc-400">
              ✓ {diagram.preserved}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SyncNode({
  label,
  title,
  description,
  accent = false,
}: {
  label: string;
  title: string;
  description: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        accent
          ? "border-violet-400/20 bg-violet-400/[0.05]"
          : "border-white/10 bg-white/[0.025]"
      }`}
    >
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-violet-400">
        {label}
      </div>

      <div className="mt-2 text-base font-medium text-zinc-100">
        {title}
      </div>

      <div className="mt-1 text-xs leading-5 text-zinc-600">
        {description}
      </div>
    </div>
  );
}

function SyncArrow() {
  return (
    <div className="flex items-center justify-center text-zinc-700">
      <span className="md:hidden">↓</span>

      <span className="hidden md:inline">
        →
      </span>
    </div>
  );
}