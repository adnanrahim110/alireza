"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      duration: 1.05,
      anchors: {
        offset: -96,
        duration: 1.1,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
