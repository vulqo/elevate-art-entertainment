import React from "react";
import { site, igLink } from "@/data/site";

// JSON-LD para SEO local (Google entiende que es un estudio en Cincinnati).
export default function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    additionalType: "https://schema.org/LocalBusiness",
    name: site.name,
    description:
      "Estudio de grabación, producción musical y contenido visual en Downtown Cincinnati. Grabación, beats, mezcla y máster, distribución digital, video musical y fotografía.",
    url: site.url,
    email: site.email,
    telephone: site.whatsappDisplay,
    image: `${site.url}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cincinnati",
      addressRegion: "OH",
      addressCountry: "US",
    },
    areaServed: "Cincinnati, Ohio",
    knowsLanguage: ["es", "en"],
    sameAs: [igLink, site.youtube],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
