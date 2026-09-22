import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CtaFinal() {
  const wa = buildWhatsAppUrl(siteConfig.whatsappMessages.default);
  const hoursWa = buildWhatsAppUrl(siteConfig.whatsappMessages.hours);

  return (
    <section
      id="agendar"
      className="border-t border-white/5 bg-bg py-16 sm:py-20 lg:py-24"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-surface via-bg to-surface px-6 py-12 sm:px-10 sm:py-14">
            <div
              className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
              aria-hidden
            />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-2">
              {siteConfig.copy.ctaKicker}
            </p>
            <h2
              id="cta-title"
              className="mt-3 max-w-xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-ink"
            >
              {siteConfig.copy.ctaTitle}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {siteConfig.copy.ctaSupport}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={wa} external className="w-full sm:w-auto">
                {siteConfig.copy.ctaButton}
              </Button>
              <Button
                href={hoursWa}
                external
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {siteConfig.copy.ctaHours}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
