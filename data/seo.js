import { site } from "@/data/site";

// Imagen para compartir en redes (placeholder temático; reemplazar por una
// imagen de marca 1200x630 cuando esté lista).
const ogImage = "https://loremflickr.com/1200/630/recording-studio,music?lock=7";

// Construye los metadatos de una página (título con marca + OpenGraph + Twitter).
export function buildMeta({ title, description, path = "/" }) {
  const fullTitle =
    path === "/" ? title : `${title} | ${site.name}`;
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
