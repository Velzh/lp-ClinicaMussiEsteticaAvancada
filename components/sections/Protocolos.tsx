import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Protocolos() {
  return (
    <section
      id="protocolos"
      className="border-t border-white/5 bg-surface/40 py-16 sm:py-20 lg:py-24"
      aria-labelledby="protocolos-title"
    >
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker={siteConfig.copy.protocolosKicker}
            title={siteConfig.copy.protocolosTitle}
            titleId="protocolos-title"
            support={siteConfig.copy.protocolosSupport}
          />
        </Reveal>

        <div className="mt-10 space-y-10">
          {siteConfig.protocolCategories.map((cat, catIndex) => {
            const items = siteConfig.protocols.filter(
              (p) => p.category === cat.id,
            );
            if (items.length === 0) return null;

            return (
              <Reveal key={cat.id} delay={0.06 * (catIndex + 1)}>
                <div>
                  <h3 className="mb-4 font-display text-xl font-semibold text-accent sm:text-2xl">
                    {cat.label}
                  </h3>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {items.map((protocol) => (
                      <li
                        key={protocol.id}
                        className="rounded-xl border border-white/8 bg-bg/60 p-5 transition-colors duration-200 hover:border-accent/30"
                      >
                        <h4 className="font-display text-lg font-semibold text-ink">
                          {protocol.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {protocol.summary}
                        </p>
                        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-accent-2">
                          Sessão: {protocol.duration}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
