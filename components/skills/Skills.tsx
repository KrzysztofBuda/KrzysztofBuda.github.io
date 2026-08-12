"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/language/LanguageProvider";

type SkillGroupProps = {
  number: string;
  title: string;
  skills: string[];
};

export default function Skills() {
  const { t } = useLanguage();

  const groups = [
    {
      number: "01",
      title: t.skills.backend,
      skills: ["Python", "FastAPI", "Flask", "REST API"],
    },
    {
      number: "02",
      title: t.skills.mobile,
      skills: ["Kotlin", "Android", "Jetpack Compose"],
    },
    {
      number: "03",
      title: t.skills.databases,
      skills: ["SQL", "Firebird", "MySQL"],
    },
    {
      number: "04",
      title: t.skills.systems,
      skills: [
        "Linux",
        "Networking",
        "Server configuration",
        "Hardware integration",
      ],
    },
    {
      number: "05",
      title: t.skills.embedded,
      skills: [
        "C / C++",
        "Raspberry Pi",
        "Electronics",
        "VHDL / Verilog",
      ],
    },
    {
      number: "06",
      title: t.skills.tools,
      skills: [
        "Git",
        "FastReport",
        "Postman",
        "PyInstaller",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 lg:py-36"
    >
      {/* TOP LINE */}

      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* GLOW */}

      <div className="absolute right-[5%] top-[20%] h-96 w-96 rounded-full bg-blue-700/[0.05] blur-[130px]" />

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
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-violet-400 sm:mb-5">
            {t.skills.eyebrow}
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.skills.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:mt-6 sm:text-lg">
            {t.skills.description}
          </p>
        </motion.div>

        {/* GROUPS */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <SkillGroup
              key={group.title}
              number={group.number}
              title={group.title}
              skills={group.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({
  number,
  title,
  skills,
}: SkillGroupProps) {
  return (
    <motion.article
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.55,
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-violet-400/20 hover:bg-white/[0.035] sm:p-7"
    >
      {/* NUMBER */}

      <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-700">
        {number}
      </div>

      {/* TITLE */}

      <h3 className="mt-5 text-base font-semibold tracking-tight text-zinc-200 sm:mt-6 sm:text-lg">
        {title}
      </h3>

      {/* SKILLS */}

      <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1.5 font-mono text-[10px] text-zinc-500 transition-colors group-hover:text-zinc-400 sm:px-3 sm:text-[11px]"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* DECORATIVE GLOW */}

      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-violet-600/0 blur-[60px] transition-colors group-hover:bg-violet-600/[0.06]" />
    </motion.article>
  );
}