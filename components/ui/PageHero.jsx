"use client";

import Button from "@/components/ui/Button";
import Glow from "@/components/ui/Glow";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  note,
  fullScreen = false,
  className,
  children,
}) {
  const reduceMotion = useReducedMotion();

  const stagger = (i) => (reduceMotion ? {} : { delay: 0.12 + i * 0.08 });

  return (
    <section
      className={cn(
        "section-dark relative overflow-hidden",
        fullScreen ? "min-h-[100svh]" : "min-h-[70svh]",
        "flex items-center",
        className,
      )}
    >
      {/* Atmospheric glows */}
      <Glow color="gold" size="36rem" className="-top-40 -left-32 opacity-50" />
      <Glow
        color="copper"
        size="28rem"
        className="-bottom-32 -right-28 opacity-35"
      />
      <Glow
        color="sand"
        size="18rem"
        className="top-1/3 right-1/4 opacity-20"
      />

      {/* Top edge shimmer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] lg:items-center lg:gap-16">
          {/* ---- Text column ---- */}
          <div>
            <motion.p
              className="eyebrow-light"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ...stagger(0),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {eyebrow}
            </motion.p>

            <motion.h1
              className="mt-5 max-w-[14ch] font-heading text-[2.8rem] leading-[0.92] text-sand-50 sm:text-[4rem] lg:text-[5.2rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                ...stagger(1),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="mt-7 max-w-xl text-[1.02rem] leading-8 text-sand-200/75 sm:text-[1.08rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ...stagger(2),
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {description}
            </motion.p>

            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ...stagger(3),
                ease: [0.16, 1, 0.3, 1],
              }}
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
                  className="text-sand-200/80 border-sand-200/15 hover:bg-sand-100/8 hover:text-sand-50"
                >
                  {secondaryAction.label}
                </Button>
              ) : null}
            </motion.div>

            {stats.length ? (
              <motion.div
                className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gold-300/15 pt-6"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ...stagger(4),
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-end gap-2">
                    <span className="font-heading text-[1.7rem] leading-none text-gold-400 sm:text-[2rem]">
                      {stat.value}
                    </span>
                    <span className="pb-1 text-[10px] uppercase tracking-[0.14em] text-sand-200/45 sm:text-[11px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            ) : null}

            {note ? (
              <motion.p
                className="mt-5 max-w-lg text-sm leading-7 text-sand-200/40"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ...stagger(5) }}
              >
                {note}
              </motion.p>
            ) : null}
          </div>

          {/* ---- Visual column ---- */}
          {children ? (
            <motion.div
              className="relative z-10 lg:ml-auto lg:w-full"
              initial={
                reduceMotion ? false : { opacity: 0, scale: 0.97, y: 24 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {children}
            </motion.div>
          ) : null}
        </div>

        {fullScreen ? <ScrollIndicator /> : null}
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-soot-950 to-transparent" />
    </section>
  );
}
