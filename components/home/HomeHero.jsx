"use client";

import Button from "@/components/ui/Button";
import FloatingBook from "@/components/ui/FloatingBook";
import Glow from "@/components/ui/Glow";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { siteContent } from "@/content/site-content";
import { motion, useReducedMotion } from "motion/react";

export default function HomeHero() {
  const { hero } = siteContent.home;
  const { cover } = siteContent.assets;
  const reduceMotion = useReducedMotion();

  const ease = [0.16, 1, 0.3, 1];
  const stagger = (i) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 + i * 3 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.72 + i * 0.04,
            delay: 0.55 + i * 0.1,
            ease,
          },
        };

  return (
    <section className="section-dark relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden">
      {/* Spotlight glow converging on the book */}
      <Glow
        color="gold"
        size="44rem"
        className="left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 opacity-25"
      />
      <Glow
        color="copper"
        size="22rem"
        className="-bottom-20 -left-20 opacity-20"
      />
      <Glow
        color="sand"
        size="18rem"
        className="-top-16 -right-16 opacity-12"
      />

      {/* Top edge shimmer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/40 to-transparent" />

      <div className="relative z-10 w-full max-w-[1320px] px-4 py-20 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.p className="eyebrow-light text-center" {...stagger(0)}>
          {hero.eyebrow}
        </motion.p>

        {/* ---- Centerpiece: Book with giant watermark ---- */}
        <div className="relative mt-10 flex flex-col items-center sm:mt-12">
          {/* Background watermark title — huge, behind the book for depth */}
          <motion.span
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-heading text-[8rem] leading-none text-sand-100/[0.03] sm:text-[12rem] lg:text-[16rem] xl:text-[19rem]"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, delay: 0.1, ease }}
            aria-hidden="true"
          >
            {siteContent.bookProfile.title}
          </motion.span>

          {/* The book — the hero of the hero */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.85, y: 44 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.12, ease }}
          >
            <FloatingBook
              alt={cover.alt}
              height={cover.height}
              src={cover.src}
              width={cover.width}
              sizes="(min-width: 1024px) 300px, 65vw"
            />
          </motion.div>
        </div>

        {/* ---- Title ---- */}
        <motion.h1
          className="mx-auto mt-10 max-w-3xl text-center font-heading text-[2.2rem] leading-[0.94] text-sand-50 sm:mt-12 sm:text-[3rem] lg:text-[4rem]"
          {...stagger(0)}
        >
          {hero.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mx-auto mt-6 max-w-xl text-center text-[1rem] leading-8 text-sand-200/65 sm:text-[1.06rem]"
          {...stagger(1)}
        >
          {hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          {...stagger(2)}
        >
          {hero.primaryAction ? (
            <Button href={hero.primaryAction.href} size="lg" tone="gold" glow>
              {hero.primaryAction.label}
            </Button>
          ) : null}
          {hero.secondaryAction ? (
            <Button
              href={hero.secondaryAction.href}
              size="lg"
              variant="ghost"
              className="border border-sand-200/15 text-sand-200/80 hover:bg-sand-100/8 hover:text-sand-50"
            >
              {hero.secondaryAction.label}
            </Button>
          ) : null}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-gold-300/10 pt-6"
          {...stagger(3)}
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="flex items-end gap-2">
              <span className="font-heading text-[1.6rem] leading-none text-gold-400 sm:text-[1.9rem]">
                {stat.value}
              </span>
              <span className="pb-1 text-[10px] uppercase tracking-[0.14em] text-sand-200/40 sm:text-[11px]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Note */}
        {hero.note ? (
          <motion.p
            className="mx-auto mt-4 max-w-lg text-center text-sm leading-7 text-sand-200/30"
            {...stagger(4)}
          >
            {hero.note}
          </motion.p>
        ) : null}

        <ScrollIndicator />
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-soot-950 to-transparent" />
    </section>
  );
}
