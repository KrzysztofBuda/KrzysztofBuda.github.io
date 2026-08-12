"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/components/language/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] py-20 sm:py-28 lg:py-36"
    >
      {/* TOP LINE */}

      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* BACKGROUND GLOW */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-150px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-700/[0.08] blur-[150px]"
      />

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
        >
          {/* LABEL */}

          <div className="font-mono text-xs uppercase tracking-[0.3em] text-violet-400">
            {t.contact.eyebrow}
          </div>

          {/* TITLE */}

          <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:mt-6 sm:text-6xl lg:text-7xl">
            {t.contact.title}
          </h2>

          {/* DESCRIPTION */}

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:mt-8 sm:text-lg sm:leading-8">
            {t.contact.description}
          </p>
        </motion.div>

        {/* MAIN CONTACT */}

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
            delay: 0.1,
          }}
          className="mt-10 sm:mt-14"
        >
          <a
            href="mailto:buda.krzysztof00@gmail.com"
            className="group inline-flex max-w-full items-center gap-3 border-b border-white/15 pb-3 text-lg font-medium tracking-tight text-zinc-200 transition-colors hover:border-violet-400/60 hover:text-white sm:gap-4 sm:text-2xl lg:text-3xl"
          >
            <span className="min-w-0 break-all">
              buda.krzysztof00@gmail.com
            </span>

            <span className="shrink-0 text-violet-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </motion.div>

        {/* LINKS */}

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-16 sm:grid-cols-2">
          <ContactLink
            label="GitHub"
            value="github.com/krzysztofbuda"
            href="https://github.com/krzysztofbuda"
          />

          <ContactLink
            label="LinkedIn"
            value="linkedin.com/in/krzysztofbuda"
            href="https://www.linkedin.com/in/krzysztofbuda/"
          />
        </div>

        {/* STATUS */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="mt-9 flex items-center gap-3 sm:mt-12"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          <span className="font-mono text-xs leading-5 text-zinc-600">
            {t.contact.status}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 items-center justify-between gap-4 bg-[#08080a] p-5 transition-colors hover:bg-white/[0.035] sm:p-8"
    >
      <div className="min-w-0">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-700">
          {label}
        </div>

        <div className="mt-3 break-all text-sm text-zinc-400 transition-colors group-hover:text-zinc-200 sm:text-base">
          {value}
        </div>
      </div>

      <span className="shrink-0 text-lg text-zinc-700 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400">
        ↗
      </span>
    </a>
  );
}