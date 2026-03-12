"use client";

import { motion, useReducedMotion } from "motion/react";

export default function ScrollIndicator() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex justify-center pt-6 pb-2">
      <motion.div
        className="flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-sand-200/50">
          Scroll
        </span>
        <motion.div
          className="h-8 w-px bg-gradient-to-b from-gold-400/70 to-transparent"
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
