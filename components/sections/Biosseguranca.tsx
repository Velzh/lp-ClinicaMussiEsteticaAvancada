import { ShieldCheck, Users, Building2, Award } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Users, ShieldCheck, Building2, Award] as const;

export function Biosseguranca() {
  return (
    <section
      id="biosseguranca"
      className="border-t border-white/5 bg-bg py-16 sm:py-20 lg:py-24"
      aria-labelledby="bio-title"
    >
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker={siteConfig.copy.bioKicker}
            title={siteConfig.copy.bioTitle}
            titleId="bio-title"
            support={siteConfig.copy.bioSupport}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 font-display text-3xl font-semibold text-accent sm:text-4xl">
            {siteConfig.business.yearsLabel}
          </p>
          <p className="mt-2 text-sm text-muted">
            Condução: {siteConfig.business.founders}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {siteConfig.diferenciais.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.id} delay={0.06 * (index + 1)}>
                <li className="rounded-xl border border-white/8 bg-surface p-5">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/15 text-accent">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={0.2}>
          <ul className="mt-8 flex flex-wrap gap-2">
            {siteConfig.specialties.map((spec) => (
              <li
                key={spec}
                className="rounded-md border border-accent-2/25 bg-accent-2/10 px-3 py-2 text-xs font-medium text-ink"
              >
                {spec}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
