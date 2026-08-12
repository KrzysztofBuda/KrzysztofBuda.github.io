"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/language/LanguageProvider";

import AboutTimeline from "./AboutTimeline";

export default function About() {
  const { t } = useLanguage();

  const timeline = [
    {
      year: "2014 — 2018",
      title: t.about.timeline.mechatronics.title,
      subtitle: t.about.timeline.mechatronics.subtitle,
      description:
        t.about.timeline.mechatronics.description,
    },
    {
      year: "2020 — 2024",
      title: t.about.timeline.university.title,
      subtitle: t.about.timeline.university.subtitle,
      description:
        t.about.timeline.university.description,
    },
    {
      year: "2023",
      title: t.about.timeline.electronics.title,
      subtitle: t.about.timeline.electronics.subtitle,
      description:
        t.about.timeline.electronics.description,
    },
    {
      year: "2024 →",
      title: t.about.timeline.it.title,
      subtitle: t.about.timeline.it.subtitle,
      description:
        t.about.timeline.it.description,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 lg:py-36"
    >
      {/* TOP LINE */}

      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* BACKGROUND GLOW */}

      <div className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-700/[0.05] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* HEADER */}

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
          className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
        >
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-violet-400 sm:mb-5">
            {t.about.eyebrow}
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.about.title}
          </h2>
        </motion.div>

        {/* CONTENT */}

        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
              {t.about.lead}
            </p>

            <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-zinc-500 sm:mt-8 sm:space-y-6 sm:text-base sm:leading-8">
              <p>{t.about.paragraph1}</p>

              <p>{t.about.paragraph2}</p>
            </div>

            {/* PHILOSOPHY BOX */}

            <div className="mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:mt-10 sm:p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                {t.about.philosophyLabel}
              </div>

              <p className="mt-4 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                {t.about.philosophy}
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <AboutTimeline items={timeline} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}