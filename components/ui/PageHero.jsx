"use client";

import Button from "@/components/ui/Button";
import Glow from "@/components/ui/Glow";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

function OrnamentalDivider({ className }) {
  return (
    <div
      className={cn("flex items-center justify-center gap-3", className)}
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold-400/50 sm:w-14" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold-400/60 bg-gold-400/20" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold-400/50 sm:w-14" />
    </div>
  );
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  note,
  fullScreen = false,
  dark = false,
  className,
  children,
}) {
  const reduceMotion = useReducedMotion();

  const stagger = (i) => (reduceMotion ? {} : { delay: 0.15 + i * 0.1 });

  return (
    <section
      className={cn(
        "section-dark relative overflow-hidden border-b border-gold-300/8",
        fullScreen ? "min-h-svh" : "min-h-[75svh]",
        "flex flex-col items-center justify-center",
        className,
      )}
    >
      {/* ---- Atmospheric layers ---- */}
      <Glow
        color="gold"
        size="44rem"
        className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 opacity-20"
      />
      <Glow
        color="copper"
        size="32rem"
        className="-bottom-40 -left-24 opacity-14"
      />
      <Glow
        color="gold"
        size="24rem"
        className="-bottom-32 -right-20 opacity-12"
      />
      <Glow
        color="sand"
        size="20rem"
        className="right-1/4 top-1/3 opacity-10"
      />

      {/* Subtle grid overlay */}
      <div className="map-grid pointer-events-none absolute inset-0 opacity-10" />

      {/* Top edge accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      {/* Vertical center line decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2"
      >
        <div className="h-16 w-full bg-gradient-to-b from-gold-400/30 to-transparent sm:h-24" />
        <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-gold-400/20 to-transparent sm:h-24" />
      </div>

      {/* ---- Main content ---- */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-28 sm:px-8 sm:py-32 lg:px-10 lg:py-36">
        <div className="flex flex-col items-center text-center">
          {/* Ornamental divider */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ...stagger(0), ease: [0.16, 1, 0.3, 1] }}
          >
            <OrnamentalDivider className="mb-7" />
          </motion.div>

          {/* Eyebrow */}
          <motion.p
            className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-gold-300/90"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ...stagger(1), ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h1
            className="mt-7 max-w-[18ch] font-heading text-[2.6rem] leading-[0.94] text-sand-50 sm:text-[3.8rem] lg:text-[5rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ...stagger(2), ease: [0.16, 1, 0.3, 1] }}
          >
            {title}
          </motion.h1>

          {/* Accent line below title */}
          <motion.div
            className="mt-8 flex items-center gap-2"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, ...stagger(3), ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-copper-500/50 sm:w-24" />
            <span className="h-[3px] w-[3px] rounded-full bg-copper-400/70" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-copper-500/50 sm:w-24" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-7 max-w-2xl text-[1rem] leading-[1.85] text-sand-200/65 sm:text-[1.08rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ...stagger(4), ease: [0.16, 1, 0.3, 1] }}
          >
            {description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ...stagger(5), ease: [0.16, 1, 0.3, 1] }}
          >
            {primaryAction ? (
              <Button href={primaryAction.href} size="lg" tone="gold" glow>
                {primaryAction.label}
              </Button>
            ) : null}
            {secondaryAction ? (
              <Button
                href={secondaryAction.href}
                size="lg"
                variant="ghost"
                tone="gold"
                className="border border-sand-200/12 text-sand-200/70 hover:bg-sand-100/6 hover:text-sand-50"
              >
                {secondaryAction.label}
              </Button>
            ) : null}
          </motion.div>

          {/* Stats */}
          {stats.length ? (
            <motion.div
              className="mt-14 flex flex-wrap items-center justify-center gap-0"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ...stagger(6), ease: [0.16, 1, 0.3, 1] }}
            >
              {stats.map((stat, idx) => (
                <div key={stat.label} className="flex items-center">
                  {idx > 0 && (
                    <span
                      className="mx-5 h-8 w-px bg-gold-400/15 sm:mx-7"
                      aria-hidden="true"
                    />
                  )}
                  <div className="text-center">
                    <p className="font-heading text-[1.8rem] leading-none text-gold-400 sm:text-[2.2rem]">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[9px] uppercase tracking-[0.18em] text-sand-200/40 sm:text-[10px]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : null}

          {/* Note */}
          {note ? (
            <motion.p
              className="mt-6 max-w-lg text-[0.82rem] leading-7 text-sand-200/30"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ...stagger(7) }}
            >
              {note}
            </motion.p>
          ) : null}

          {/* Visual panel / children */}
          {children ? (
            <motion.div
              className="relative z-10 mt-16 w-full max-w-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Corner accents */}
              <div className="pointer-events-none absolute -left-2 -top-2 h-6 w-6 border-l border-t border-gold-400/25" aria-hidden="true" />
              <div className="pointer-events-none absolute -right-2 -top-2 h-6 w-6 border-r border-t border-gold-400/25" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-2 -left-2 h-6 w-6 border-b border-l border-gold-400/25" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 border-b border-r border-gold-400/25" aria-hidden="true" />

              <div className="paper-panel-dark border-gold-300/12 p-6 sm:p-8">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gold-400/4 via-transparent to-copper-500/4"
                  aria-hidden="true"
                />
                {children}
              </div>
            </motion.div>
          ) : null}
        </div>

        {fullScreen ? <ScrollIndicator tone="dark" /> : null}
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-soot-950 to-transparent" />
    </section>
  );
}
