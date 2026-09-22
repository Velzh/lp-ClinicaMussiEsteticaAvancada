import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsappFloat() {
  const href = buildWhatsAppUrl(siteConfig.whatsappMessages.default);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteConfig.copy.floatAria}
      className="fixed bottom-5 right-4 z-50 inline-flex min-h-12 min-w-12 items-center justify-center rounded-full bg-accent text-bg shadow-[0_12px_32px_rgba(226,184,114,0.35)] transition-transform duration-200 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
    </a>
  );
}
