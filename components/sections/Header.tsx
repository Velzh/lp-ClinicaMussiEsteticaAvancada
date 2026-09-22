"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const wa = buildWhatsAppUrl(siteConfig.whatsappMessages.default);
  const { logo } = siteConfig.images;

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#topo"
          className="flex min-w-0 items-center gap-3"
          aria-label={siteConfig.business.name}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            priority
            className="h-11 w-11 rounded-md object-contain sm:h-12 sm:w-12"
          />
          <span className="min-w-0">
            <span className="block font-display text-lg font-semibold leading-tight tracking-tight text-ink sm:text-xl">
              {siteConfig.business.nameShort}
            </span>
            <span className="mt-0.5 flex items-center gap-1 text-xs text-muted">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
              {siteConfig.business.locationBadge}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label={siteConfig.copy.navAria}
        >
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href={wa}
            external
            className="hidden sm:inline-flex"
            ariaLabel={siteConfig.copy.headerCta}
          >
            {siteConfig.copy.headerCta}
          </Button>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/10 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-white/5 bg-bg px-4 py-4 lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1" aria-label={siteConfig.copy.navAria}>
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="min-h-11 rounded-md px-3 py-3 text-sm text-ink hover:bg-surface"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button href={wa} external className="mt-2 w-full">
            {siteConfig.copy.headerCta}
          </Button>
        </nav>
      </div>
    </header>
  );
}
