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
      <span className="h-px w-10 bg-linear-to-r from-transparent to-gold-400/50 sm:w-14" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold-400/60 bg-gold-400/20" />
      <span className="h-px w-10 bg-linear-to-l from-transparent to-gold-400/50 sm:w-14" />
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
  pClassName = "",
  children,
  boxClass = "",
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
      <Glow
        color="gold"
        size="44rem"
        className="left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 opacity-20"
      />
      <Glow
        color="copper"
        size="32rem"
        className="-bottom-40 -left-24 opacity-14 glow-hide-mobile"
      />
      <Glow
        color="gold"
        size="24rem"
        className="-bottom-32 -right-20 opacity-12 glow-hide-mobile"
      />
      <Glow
        color="sand"
        size="20rem"
        className="right-1/4 top-1/3 opacity-10 glow-hide-mobile"
      />

      <div className="map-grid pointer-events-none absolute inset-0 opacity-10" />

      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold-400/40 to-transparent" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 sm:block"
      >
        <div className="h-16 w-full bg-linear-to-b from-gold-400/30 to-transparent sm:h-24" />
        <div className="absolute bottom-0 h-16 w-full bg-linear-to-t from-gold-400/20 to-transparent sm:h-24" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-330 px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              ...stagger(0),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <OrnamentalDivider className="mb-6 sm:mb-7" />
          </motion.div>

          <motion.p
            className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold-300/90 sm:text-[0.68rem] sm:tracking-[0.32em]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ...stagger(1),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            className="mt-6 max-w-[20ch] font-heading text-[2.2rem] leading-[0.94] text-sand-50 sm:mt-7 sm:text-[3.4rem] lg:text-[5rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ...stagger(2),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="mt-6 flex items-center gap-2 sm:mt-8"
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.7,
              ...stagger(3),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="h-px w-12 bg-linear-to-r from-transparent to-copper-500/50 sm:w-24" />
            <span className="h-0.75 w-0.75 rounded-full bg-copper-400/70" />
            <span className="h-px w-12 bg-linear-to-l from-transparent to-copper-500/50 sm:w-24" />
          </motion.div>

          <motion.p
            className={cn(
              "mt-6 max-w-2xl text-[0.95rem] leading-[1.8] text-sand-200/65 sm:mt-7 sm:text-[1.08rem] sm:leading-[1.85]",
              pClassName,
            )}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ...stagger(4),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-8 flex w-full flex-col items-center gap-3 px-2 sm:mt-10 sm:w-auto sm:flex-row sm:px-0"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ...stagger(5),
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {primaryAction ? (
              <Button
                href={primaryAction.href}
                size="lg"
                tone="gold"
                glow
                dark
                className="w-full sm:w-auto"
              >
                {primaryAction.label}
              </Button>
            ) : null}
            {secondaryAction ? (
              <Button
                href={secondaryAction.href}
                size="lg"
                variant="outline"
                tone="gold"
                dark
                className="w-full sm:w-auto"
              >
                {secondaryAction.label}
              </Button>
            ) : null}
          </motion.div>

          {stats.length ? (
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-0 sm:mt-14"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ...stagger(6),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {stats.map((stat, idx) => (
                <div key={stat.label} className="flex items-center">
                  {idx > 0 && (
                    <span
                      className="mx-4 h-8 w-px bg-gold-400/15 sm:mx-7"
                      aria-hidden="true"
                    />
                  )}
                  <div className="text-center">
                    <p className="font-heading text-[1.5rem] leading-none text-gold-400 sm:text-[2.2rem]">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[9px] uppercase tracking-[0.16em] text-sand-200/40 sm:text-[10px] sm:tracking-[0.18em]">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : null}

          {note ? (
            <motion.p
              className={cn(
                "mt-6 max-w-lg text-[0.82rem] leading-7 text-sand-200/30",
              )}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ...stagger(7) }}
            >
              {note}
            </motion.p>
          ) : null}

          {children ? (
            <motion.div
              className={cn(
                "relative z-10 mt-12 w-full max-w-lg sm:mt-16",
                boxClass,
              )}
              initial={
                reduceMotion ? false : { opacity: 0, y: 30, scale: 0.97 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="pointer-events-none absolute -left-2 -top-2 hidden h-6 w-6 border-l border-t border-gold-400/25 sm:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-2 -top-2 hidden h-6 w-6 border-r border-t border-gold-400/25 sm:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-2 -left-2 hidden h-6 w-6 border-b border-l border-gold-400/25 sm:block"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-2 -right-2 hidden h-6 w-6 border-b border-r border-gold-400/25 sm:block"
                aria-hidden="true"
              />

              <div className="paper-panel-dark border-gold-300/12 p-5 sm:p-8">
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-b from-gold-400/4 via-transparent to-copper-500/4"
                  aria-hidden="true"
                />
                {children}
              </div>
            </motion.div>
          ) : null}
        </div>

        {fullScreen ? <ScrollIndicator tone="dark" /> : null}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-soot-950 to-transparent" />
    </section>
  );
}
