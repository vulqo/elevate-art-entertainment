// =====================================================================
// Datos del negocio — edita SOLO este archivo y se actualiza en todo el sitio.
// =====================================================================

export const site = {
  name: "Elevate Art Entertainment",
  // URL de producción (cambiar cuando haya dominio propio).
  url: "https://elevate-art-entertainment-vulqollc.vercel.app",
  city: "Downtown Cincinnati, OH",
  region: "Ohio",
  country: "United States",

  // WhatsApp en formato internacional, solo dígitos (código de país + número).
  whatsapp: "15137201583",
  whatsappDisplay: "+1 (513) 720-1583",

  instagram: "elevate_artt",

  // YouTube del artista (placeholder de portafolio)
  youtube: "https://www.youtube.com/@eslordhighh",

  email: "info@elevateartentertainment.com",
};

// Construye un enlace de WhatsApp con un mensaje opcional ya escrito.
export function waLink(message = "") {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const igLink = `https://instagram.com/${site.instagram}`;

// Imagen de placeholder TEMÁTICA (estudio / música), se reemplaza por
// fotos/videos reales más adelante. Usa LoremFlickr (fotos reales por tema).
export function placeholderImg(seed, w = 800, h = 600, theme = "recording,studio,music") {
  const str = String(seed);
  let lock = 0;
  for (let i = 0; i < str.length; i++) lock = (lock + str.charCodeAt(i) * (i + 7)) % 100000;
  return `https://loremflickr.com/${w}/${h}/${theme}?lock=${lock + 1}`;
}
