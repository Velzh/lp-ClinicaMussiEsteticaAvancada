import { Instagram, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const wa = buildWhatsAppUrl(siteConfig.whatsappMessages.default);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-surface pb-24 pt-14 sm:pb-20">
      <div className="mx-auto grid max-w-page gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold text-ink">
            {siteConfig.business.nameShort}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {siteConfig.business.name}
          </p>
          <p className="mt-3 text-sm text-muted">
            {siteConfig.business.founders}
          </p>
          <a
            href={siteConfig.business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-accent hover:text-accent/85"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            {siteConfig.business.instagram}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            {siteConfig.copy.footerEndereco}
          </h3>
          <p className="mt-3 flex gap-2 text-sm leading-relaxed text-muted">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            <a
              href={siteConfig.mapEmbed.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              {siteConfig.contact.address.full}
            </a>
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-accent hover:text-accent/85"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.contact.whatsappDisplay}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            {siteConfig.copy.footerAtendimento}
          </h3>
          <ul className="mt-3 space-y-2">
            {siteConfig.contact.hours.map((item) => (
              <li
                key={item.day}
                className="flex justify-between gap-4 text-sm text-muted"
              >
                <span>{item.day}</span>
                <span className={item.closed ? "text-muted/70" : "text-ink"}>
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-page border-t border-white/5 px-4 pt-6 sm:px-6 lg:px-8">
        <p className="text-xs leading-relaxed text-muted">
          {siteConfig.copy.footerLegal}
        </p>
        <p className="mt-2 text-xs text-muted/80">
          {siteConfig.copy.footerLicensesPlaceholder}
        </p>
        <p className="mt-4 text-xs text-muted">
          © {year} {siteConfig.business.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
