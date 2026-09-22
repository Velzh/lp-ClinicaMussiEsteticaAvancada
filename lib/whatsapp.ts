import { siteConfig } from "./site-config";

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function formatAddress(): string {
  return siteConfig.contact.address.full;
}
