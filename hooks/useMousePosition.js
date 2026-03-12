"use client";

import { useEffect, useRef, useState } from "react";

export default function useMousePosition(ref) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const frameRef = useRef(null);

  useEffect(() => {
    const element = ref?.current;
    if (!element) return;

    function onMove(event) {
      if (frameRef.current) return;

      frameRef.current = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

        setPosition({
          x: Math.max(-1, Math.min(1, x)),
          y: Math.max(-1, Math.min(1, y)),
        });
        frameRef.current = null;
      });
    }

    function onLeave() {
      setPosition({ x: 0, y: 0 });
    }

    element.addEventListener("mousemove", onMove, { passive: true });
    element.addEventListener("mouseleave", onLeave);

    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", onLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [ref]);

  return position;
}
