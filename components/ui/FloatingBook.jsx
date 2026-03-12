"use client";

import useMousePosition from "@/hooks/useMousePosition";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function FloatingBook({ src, alt, width, height, sizes }) {
  const containerRef = useRef(null);
  const mouse = useMousePosition(containerRef);
  const reduceMotion = useReducedMotion();

  const rotateY = reduceMotion ? 0 : mouse.x * 8;
  const rotateX = reduceMotion ? 0 : mouse.y * -5;
  const glowX = 50 + mouse.x * 18;
  const glowY = 50 + mouse.y * 18;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[17rem]"
      style={{ perspective: "1200px" }}
    >
      {/* atmospheric glow behind the book */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 scale-150"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(207,174,64,0.18), transparent 60%)`,
          filter: "blur(40px)",
          transition: "background 0.3s ease-out",
        }}
      />

      <motion.div
        className="relative will-change-transform"
        animate={
          reduceMotion
            ? {}
            : {
                rotateY,
                rotateX,
              }
        }
        transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* floating shadow */}
        <div
          aria-hidden="true"
          className="absolute -bottom-6 left-1/2 h-6 w-4/5 -translate-x-1/2 rounded-[50%] bg-black/20 blur-xl transition-transform duration-300"
          style={{
            transform: `translateX(calc(-50% + ${mouse.x * -6}px))`,
          }}
        />

        <div className="overflow-hidden rounded-[1.5rem] border border-gold-300/30 bg-soot-900 shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
          <Image
            alt={alt}
            className="h-auto w-full object-cover"
            height={height}
            priority
            sizes={sizes || "(min-width: 1024px) 260px, 60vw"}
            src={src}
            width={width}
          />
        </div>
      </motion.div>

      {/* idle float on mobile */}
      <style jsx>{`
        @media (hover: none) {
          div :global([style*="preserve-3d"]) {
            animation: gentle-float 4s ease-in-out infinite;
          }
        }
        @keyframes gentle-float {
          0%,
          100% {
            transform: translateY(0px) rotateY(0deg);
          }
          50% {
            transform: translateY(-8px) rotateY(2deg);
          }
        }
      `}</style>
    </div>
  );
}
