"use client";

import { useEffect, useState } from "react";

export default function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function update() {
      const currentY = window.scrollY;
      const diff = currentY - lastY;

      if (Math.abs(diff) >= threshold) {
        setDirection(diff > 0 ? "down" : "up");
        lastY = currentY;
      }

      setScrollY(currentY);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrollY };
}
