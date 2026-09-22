import { Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="border-t border-white/5 bg-surface/40 py-16 sm:py-20 lg:py-24"
      aria-labelledby="depoimentos-title"
    >
      <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker={siteConfig.copy.depoimentosKicker}
            title={siteConfig.copy.depoimentosTitle}
            titleId="depoimentos-title"
            support={siteConfig.copy.depoimentosSupport}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-lg border border-accent/25 bg-accent/10 px-4 py-3">
            <span className="inline-flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
              ))}
            </span>
            <strong className="text-ink">
              {siteConfig.socialProof.googleRatingLabel} estrelas
            </strong>
            <span className="text-sm text-muted">
              {siteConfig.socialProof.googleReviewsLabel}
            </span>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {siteConfig.testimonials.map((item, index) => (
            <Reveal key={item.id} delay={0.06 * (index + 1)}>
              <li className="flex h-full flex-col rounded-xl border border-white/8 bg-bg/70 p-5">
                <blockquote className="flex-1 text-sm leading-relaxed text-ink">
                  “{item.quote}”
                </blockquote>
                <footer className="mt-5 border-t border-white/8 pt-4">
                  <cite className="not-italic text-sm font-semibold text-accent">
                    {item.author}
                  </cite>
                  <p className="mt-1 text-xs text-muted">{item.source}</p>
                </footer>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
