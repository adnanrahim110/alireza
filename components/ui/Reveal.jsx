"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

const variants = {
  "fade-up": (y) => ({
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  }),
  "fade-in": () => ({ hidden: { opacity: 0 }, visible: { opacity: 1 } }),
  "slide-left": () => ({
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  }),
  "slide-right": () => ({
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  }),
  scale: () => ({
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  }),
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.72,
  variant = "fade-up",
}) {
  const reduceMotion = useReducedMotion();
  const v = variants[variant]?.(y) ?? variants["fade-up"](y);

  return (
    <motion.div
      className={cn(className)}
      initial={reduceMotion ? { opacity: 1 } : v.hidden}
      whileInView={reduceMotion ? { opacity: 1 } : v.visible}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
