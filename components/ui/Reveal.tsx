"use client";

import { motion } from "framer-motion";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { reduced, reveal, transition } = useMotionSafe();

  return (
    <motion.div
      className={cn(className)}
      initial={reveal.initial}
      whileInView={reveal.animate}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ ...transition, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
