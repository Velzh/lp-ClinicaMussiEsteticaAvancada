import { siteConfig } from "./site-config";
import { formatAddress } from "./whatsapp";

export function getMedicalBusinessJsonLd() {
  const { business, contact, socialProof, specialties } = siteConfig;
  const { address } = contact;

  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: business.name,
    description: business.tagline,
    url: siteConfig.siteUrl,
    telephone: `+${contact.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.mapEmbed.lat,
      longitude: siteConfig.mapEmbed.lng,
    },
    founder: [
      {
        "@type": "Person",
        name: business.ceo,
        jobTitle: business.ceoRole,
      },
      {
        "@type": "Person",
        name: business.professional,
        jobTitle: business.credential,
      },
    ],
    sameAs: [business.instagramUrl],
    foundingDate: String(business.since),
    areaServed: {
      "@type": "City",
      name: "Sorocaba",
    },
    priceRange: "$$",
    knowsAbout: [...specialties, ...siteConfig.protocols.map((p) => p.title)],
    openingHoursSpecification: contact.hours
      .filter((h) => !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.time.split("–")[0],
        closes: h.time.split("–")[1],
        description: `${h.day}: ${h.time}`,
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: socialProof.googleRating,
      reviewCount: socialProof.googleReviews,
      bestRating: 5,
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Anos de atuação",
        value: String(socialProof.yearsActive),
      },
    ],
  };
}

export function getJsonLdScriptContent(): string {
  return JSON.stringify(getMedicalBusinessJsonLd());
}

export function getFullAddressLine(): string {
  return formatAddress();
}
