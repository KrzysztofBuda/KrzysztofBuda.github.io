"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { useLanguage } from "@/components/language/LanguageProvider";

export default function HeroScrollIndicator() {
  const { t } = useLanguage();

  return (
    <motion.div
      animate={{
        y: [0, 6, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 md:flex"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
        {t.hero.scroll}
      </span>

      <ArrowDown size={15} />
    </motion.div>
  );
}