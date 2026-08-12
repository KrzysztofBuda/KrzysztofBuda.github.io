"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import ProjectVisual from "./ProjectVisual";

type ProjectCardProps = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  placeholder: string;
  compact?: boolean;
  href?: string;
  ctaLabel?: string;
};

export default function ProjectCard({
  index,
  title,
  subtitle,
  description,
  technologies,
  placeholder,
  compact = false,
  href,
  ctaLabel,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
      }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-colors hover:border-white/20"
    >
      {!compact && (
        <ProjectVisual
          title={title}
          placeholder={placeholder}
          index={index}
        />
      )}

      <div
        className={
          compact
            ? "p-5 sm:p-7"
            : "p-5 sm:p-8"
        }
      >
        {/* HEADER */}

        <div className="flex items-start justify-between gap-4 sm:gap-5">
          <div className="min-w-0">
            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400 sm:text-xs">
              {subtitle}
            </div>

            <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
              {title}
            </h3>
          </div>

          {compact && (
            <span className="shrink-0 font-mono text-[10px] text-zinc-700 sm:text-xs">
              {index}
            </span>
          )}
        </div>

        {/* DESCRIPTION */}

        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
          {description}
        </p>

        {/* TECHNOLOGIES */}

        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1.5 font-mono text-[10px] text-zinc-500 transition-colors group-hover:text-zinc-400 sm:px-3 sm:text-[11px]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* DETAILS LINK */}

        {href && ctaLabel && (
          <div className="mt-6 border-t border-white/10 pt-5 sm:mt-7 sm:pt-6">
            <Link
              href={href}
              className="group/link inline-flex min-h-10 items-center gap-3 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {ctaLabel}

              <span className="text-violet-400 transition-transform duration-200 group-hover/link:translate-x-1">
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </motion.article>
  );
}