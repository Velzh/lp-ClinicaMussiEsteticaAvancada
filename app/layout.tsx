import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import { getJsonLdScriptContent } from "@/lib/json-ld";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.business.name} | Estética Avançada em Sorocaba`,
    template: `%s | ${siteConfig.business.nameShort}`,
  },
  description: `${siteConfig.business.yearsLabel}. ${siteConfig.business.tagline}. Avaliação no WhatsApp ${siteConfig.contact.whatsappDisplay}.`,
  keywords: [
    "estética avançada Sorocaba",
    "Clínica Mussi",
    "criolipólise Sorocaba",
    "botox Sorocaba",
    "day spa Sorocaba",
    "limpeza de pele Sorocaba",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.siteUrl,
    siteName: siteConfig.business.name,
    title: `${siteConfig.business.name} | Sorocaba`,
    description: siteConfig.business.yearsLabel,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.business.name,
    description: siteConfig.business.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-body antialiased">
        <a href="#conteudo" className="skip-link">
          {siteConfig.copy.skipLink}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getJsonLdScriptContent() }}
        />
      </body>
    </html>
  );
}
