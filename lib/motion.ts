"use client";

import { useReducedMotion } from "framer-motion";

export function useMotionSafe() {
  const reduced = useReducedMotion();
  return {
    reduced: reduced ?? false,
    reveal: reduced
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : { initial: { opacity: 1, y: 24 }, animate: { opacity: 1, y: 0 } },
    transition: reduced
      ? { duration: 0 }
      : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  };
}
