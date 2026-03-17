"use client";

import { motion, useReducedMotion } from "motion/react";

export default function ScrollIndicator({ tone = "dark" }) {
  const reduceMotion = useReducedMotion();
  const light = tone === "light";

  return (
    <div className="flex justify-center pt-6 pb-2">
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span
          className={
            light
              ? "text-[9px] font-semibold uppercase tracking-[0.3em] text-soot-700/60"
              : "text-[9px] font-semibold uppercase tracking-[0.3em] text-sand-200/50"
          }
        >
          Scroll
        </span>
        <motion.div
          className={
            light
              ? "h-8 w-px bg-linear-to-b from-copper-500/60 to-transparent"
              : "h-8 w-px bg-linear-to-b from-gold-400/70 to-transparent"
          }
          animate={
            reduceMotion
              ? {}
              : { scaleY: [1, 1.5, 1], opacity: [0.7, 0.35, 0.7] }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
