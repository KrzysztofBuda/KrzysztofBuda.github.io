"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

type AboutTimelineProps = {
  items: TimelineItem[];
};

export default function AboutTimeline({
  items,
}: AboutTimelineProps) {
  return (
    <div className="relative">
      {/* MAIN LINE */}

      <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-violet-400/50 via-white/10 to-transparent" />

      <div className="space-y-8 sm:space-y-10">
        {items.map((item, index) => (
          <motion.div
            key={`${item.year}-${item.title}`}
            initial={{
              opacity: 0,
              x: 20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
            }}
            className="relative pl-9 sm:pl-10"
          >
            {/* DOT */}

            <div className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-violet-400/40 bg-[#050505]">
              <div className="h-[5px] w-[5px] rounded-full bg-violet-400" />
            </div>

            {/* YEAR */}

            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-violet-400">
              {item.year}
            </div>

            {/* TITLE */}

            <h3 className="mt-2 text-base font-semibold tracking-tight text-zinc-200 sm:text-lg">
              {item.title}
            </h3>

            {/* SUBTITLE */}

            <div className="mt-1 font-mono text-[11px] text-zinc-600 sm:text-xs">
              {item.subtitle}
            </div>

            {/* DESCRIPTION */}

            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500 sm:leading-7">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}