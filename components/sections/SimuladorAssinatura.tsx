"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";
import { siteConfig, type QueixaId } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useMotionSafe } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function SimuladorAssinatura() {
  const [selected, setSelected] = useState<QueixaId>(
    siteConfig.simuladorQueixas[0].id,
  );
  const { reduced, transition } = useMotionSafe();

  const active =
    siteConfig.simuladorQueixas.find((q) => q.id === selected) ??
    siteConfig.simuladorQueixas[0];

  const wa = buildWhatsAppUrl(
    siteConfig.whatsappMessages.simulador(active.whatsappHint),
  );

  return (
    <section
      id="simulador"
      className="border-t border-white/5 bg-bg py-16 sm:py-20 lg:py-24"
      aria-labelledby="simulador-title"
    >
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker={siteConfig.copy.simuladorKicker}
            title={siteConfig.copy.simuladorTitle}
            titleId="simulador-title"
            support={siteConfig.copy.simuladorSupport}
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <Reveal delay={0.08}>
            <fieldset>
              <legend className="mb-4 text-sm font-medium text-ink">
                {siteConfig.copy.simuladorLabel}
              </legend>
              <div
                className="grid gap-3 sm:grid-cols-2"
                role="radiogroup"
                aria-label={siteConfig.copy.simuladorLabel}
              >
                {siteConfig.simuladorQueixas.map((queixa) => {
                  const isActive = queixa.id === selected;
                  return (
                    <button
                      key={queixa.id}
                      type="button"
                      role="radio"
                      aria-checked={isActive}
                      onClick={() => setSelected(queixa.id)}
                      className={cn(
                        "min-h-14 rounded-lg border px-4 py-3 text-left transition-colors duration-200",
                        isActive
                          ? "border-accent bg-accent/15 text-ink ring-1 ring-[var(--ring)]"
                          : "border-white/10 bg-surface text-muted hover:border-accent/35 hover:text-ink",
                      )}
                    >
                      <span className="block text-sm font-semibold text-ink">
                        {queixa.label}
                      </span>
                      <span className="mt-1 block text-xs text-muted">
                        {queixa.shortLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </Reveal>

          <Reveal delay={0.12}>
            <div
              className="surface-velvet rounded-xl border border-white/8 p-5 sm:p-7"
              aria-live="polite"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-2">
                {siteConfig.copy.simuladorResultLabel}
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={reduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 1, y: 0 } : { opacity: 1, y: -12 }}
                  transition={transition}
                >
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {active.protocolName}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-4 text-sm">
                    <p className="inline-flex items-center gap-2 text-muted">
                      <Clock className="h-4 w-4 text-accent" aria-hidden />
                      <span>
                        <span className="text-ink">
                          {siteConfig.copy.simuladorDurationLabel}:{" "}
                        </span>
                        {active.duration}
                      </span>
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-ink">
                      <Sparkles className="h-4 w-4 text-accent" aria-hidden />
                      {siteConfig.copy.simuladorTechLabel}
                    </p>
                    <ul className="space-y-2">
                      {active.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="border-l-2 border-accent/40 pl-3 text-sm text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-lg border border-accent-2/20 bg-accent-2/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent-2">
                      {siteConfig.copy.simuladorResultadoLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink">
                      {active.expectedResult}
                    </p>
                  </div>

                  <Button href={wa} external className="mt-6 w-full sm:w-auto">
                    {siteConfig.copy.simuladorCta}
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
