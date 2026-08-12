"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/language/LanguageProvider";
import { projects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { t } = useLanguage();

  const featuredProjects = projects.filter(
    (project) => !project.compact,
  );

  const smallerProjects = projects.filter(
    (project) => project.compact,
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 lg:py-36"
    >
      {/* TOP LINE */}

      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* BACKGROUND GLOW */}

      <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-violet-700/[0.06] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* SECTION HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-violet-400 sm:mb-5">
            {t.projects.eyebrow}
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.projects.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:mt-6 sm:text-lg">
            {t.projects.description}
          </p>
        </motion.div>

        {/* FEATURED PROJECTS */}

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => {
            const translation =
              t.projects[project.translationKey];

            return (
              <ProjectCard
                key={project.index}
                index={project.index}
                title={translation.title}
                subtitle={translation.subtitle}
                description={translation.description}
                placeholder={
                  t.projects.screenshotPlaceholder
                }
                technologies={[
                  ...project.technologies,
                ]}
                href={
                  project.slug
                    ? `/projects/${project.slug}`
                    : undefined
                }
                ctaLabel={
                  project.slug
                    ? t.projects.viewProject
                    : undefined
                }
              />
            );
          })}
        </div>

        {/* SMALLER PROJECTS */}

        <div className="mt-5 grid gap-5 sm:mt-6 sm:gap-6 md:grid-cols-2">
          {smallerProjects.map((project) => {
            const translation =
              t.projects[project.translationKey];

            return (
              <ProjectCard
                key={project.index}
                index={project.index}
                title={translation.title}
                subtitle={translation.subtitle}
                description={translation.description}
                placeholder={
                  t.projects.screenshotPlaceholder
                }
                technologies={[
                  ...project.technologies,
                ]}
                compact
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}