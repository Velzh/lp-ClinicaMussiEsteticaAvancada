"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { useMotionSafe } from "@/lib/motion";

export function Hero() {
  const { reduced, transition } = useMotionSafe();
  const wa = buildWhatsAppUrl(siteConfig.whatsappMessages.default);

  const enter = (delay: number) =>
    reduced
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0 } }
      : {
          initial: { opacity: 1, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { ...transition, delay },
        };

  return (
    <section
      id="topo"
      className="hero-atmosphere relative isolate overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,245,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(247,245,248,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto flex min-h-[min(92vh,820px)] max-w-page flex-col justify-end px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <motion.p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-2"
            {...enter(0)}
          >
            {siteConfig.copy.heroKicker}
          </motion.p>

          <motion.h1
            id="hero-title"
            className="font-display text-[clamp(2.75rem,10vw,5.5rem)] font-semibold leading-[0.95] tracking-tight text-ink"
            {...enter(0.08)}
          >
            {siteConfig.copy.heroTitle}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            {...enter(0.16)}
          >
            {siteConfig.copy.heroSupport}
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink"
            {...enter(0.22)}
          >
            <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/25 bg-accent/10 px-3 py-2">
              <Star className="h-4 w-4 fill-accent text-accent" aria-hidden />
              <strong className="font-semibold">{siteConfig.copy.heroProof}</strong>
            </span>
            <span className="text-muted">{siteConfig.copy.heroProofDetail}</span>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            {...enter(0.28)}
          >
            <Button href={wa} external className="w-full sm:w-auto">
              {siteConfig.copy.ctaPrimary}
            </Button>
            <Button
              href="#simulador"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {siteConfig.copy.ctaSecondary}
            </Button>
          </motion.div>

          <motion.p
            className="mt-6 text-sm text-muted"
            {...enter(0.34)}
          >
            {siteConfig.business.yearsLabel} · {siteConfig.business.founders}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
