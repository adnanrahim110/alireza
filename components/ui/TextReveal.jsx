"use client";

import { cn } from "@/lib/utils";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function TextReveal({ text, className }) {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const words = text.split(" ");

  if (reduceMotion) {
    return (
      <p
        className={cn(
          "font-heading text-[1.8rem] leading-[1.2] sm:text-[2.4rem] lg:text-[3rem]",
          className,
        )}
      >
        {text}
      </p>
    );
  }

  return (
    <p
      ref={containerRef}
      className={cn(
        "flex flex-wrap font-heading text-[1.8rem] leading-[1.2] sm:text-[2.4rem] lg:text-[3rem]",
        className,
      )}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;

        return (
          <Word
            key={`${word}-${i}`}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ children, range, progress }) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span className="mr-[0.3em] mt-1 inline-block" style={{ opacity }}>
      {children}
    </motion.span>
  );
}
