"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* VIOLET GLOW */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[5%] top-[15%] h-96 w-96 rounded-full bg-violet-600/15 blur-[120px]"
      />

      {/* BLUE GLOW */}

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] right-[5%] h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]"
      />
    </>
  );
}