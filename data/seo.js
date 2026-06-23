import { site } from "@/data/site";

// La imagen para compartir en redes (OpenGraph/Twitter) la genera
// app/opengraph-image.js (imagen de marca). Por eso aquí no se define imagen:
// Next la añade automáticamente a todas las rutas.

// Construye los metadatos de una página (título con marca + OpenGraph + Twitter).
export function buildMeta({ title, description, path = "/" }) {
  const fullTitle = path === "/" ? title : `${title} | ${site.name}`;
  const url = `${site.url}${path}`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(site.url),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url,
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
