"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Database,
  Terminal,
} from "lucide-react";
import type { ReactNode } from "react";

import { useLanguage } from "@/components/language/LanguageProvider";

export default function HeroTerminal() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
        delay: 0.3,
      }}
      className="relative w-full min-w-0"
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0c]/90 shadow-2xl shadow-violet-950/20 backdrop-blur-xl"
      >
        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5 sm:px-5 sm:py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80 sm:h-3 sm:w-3" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80 sm:h-3 sm:w-3" />
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-600 sm:text-xs">
            <Terminal size={13} />
            krzysztof@dev
          </div>
        </div>

        {/* BODY */}

        <div className="p-4 font-mono text-xs sm:p-6 sm:text-sm">
          <div className="mb-5 text-zinc-500 sm:mb-6">
            <span className="text-violet-400">$</span>{" "}
            whoami
          </div>

          <div className="mb-7 text-base text-white sm:mb-8 sm:text-lg">
            krzysztof.buda
          </div>

          <div className="mb-3 text-zinc-500">
            <span className="text-violet-400">$</span>{" "}
            system --status
          </div>

          <div className="space-y-3 border-l border-white/10 pl-3 sm:pl-4">
            <TerminalRow
              icon={<Code2 size={15} />}
              label="Backend"
              value="ONLINE"
            />

            <TerminalRow
              icon={<Database size={15} />}
              label="APIs"
              value="ONLINE"
            />

            <TerminalRow
              icon={<Cpu size={15} />}
              label="Android"
              value="ONLINE"
            />

            <TerminalRow
              icon={<Cpu size={15} />}
              label="Embedded"
              value="ONLINE"
            />
          </div>

          <div className="mt-7 flex items-center gap-2 text-zinc-600 sm:mt-8">
            <span className="text-violet-400">$</span>

            <span className="h-4 w-2 animate-pulse bg-violet-400" />
          </div>
        </div>

        {/* MOBILE CURRENT FOCUS */}

        <div className="border-t border-white/10 px-4 py-4 sm:hidden">
          <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
            {t.hero.currentFocusLabel}
          </div>

          <div className="mt-1 text-sm text-zinc-200">
            {t.hero.currentFocusValue}
          </div>
        </div>
      </motion.div>

      {/* DESKTOP CURRENT FOCUS */}

      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-10 -left-5 hidden rounded-xl border border-white/10 bg-[#0c0c0e]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          {t.hero.currentFocusLabel}
        </div>

        <div className="mt-1 text-sm text-zinc-200">
          {t.hero.currentFocusValue}
        </div>
      </motion.div>
    </motion.div>
  );
}

function TerminalRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 sm:gap-8">
      <div className="flex items-center gap-2.5 text-zinc-500 sm:gap-3">
        {icon}

        <span>{label}</span>
      </div>

      <span className="text-[10px] text-emerald-400 sm:text-xs">
        {value}
      </span>
    </div>
  );
}