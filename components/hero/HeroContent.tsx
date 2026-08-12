"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/components/language/LanguageProvider";

const technologies = [
  "Python",
  "Kotlin",
  "SQL",
  "FastAPI",
  "Android",
  "Embedded",
];

export default function HeroContent() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
      }}
    >
      {/* STATUS */}

      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl sm:mb-7">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>

        <span className="font-mono text-xs text-zinc-400">
          {t.hero.availability}
        </span>
      </div>

      {/* HEADING */}

      <h1 className="max-w-3xl text-[2.65rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
        {t.hero.titleLine1}
        <br />

        {t.hero.titleLine2}{" "}

        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          {t.hero.titleAccent}
        </span>
      </h1>

      {/* DESCRIPTION */}

      <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:mt-7 sm:text-lg">
        {t.hero.description}
      </p>

      {/* TECHNOLOGIES */}

      <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-violet-400/30 hover:text-violet-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* BUTTONS */}

      <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
        <a
          href="#projects"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.02] hover:bg-zinc-200"
        >
          {t.hero.projectsButton}

          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.07]"
        >
          {t.hero.contactButton}
        </a>
      </div>
    </motion.div>
  );
}