// =====================================================================
// Datos del negocio — edita SOLO este archivo y se actualiza en todo el sitio.
// =====================================================================

export const site = {
  name: "Elevate Art Entertainment",
  city: "Downtown Cincinnati, OH",
  region: "Ohio",
  country: "United States",

  // PENDIENTE: número real de WhatsApp en formato internacional, solo dígitos
  // (código de país + número). Ej: 15135551234
  whatsapp: "15135550100",
  whatsappDisplay: "+1 (513) 555-0100",

  // PENDIENTE: usuario real de Instagram (sin la @)
  instagram: "elevateartentertainment",

  // YouTube del artista (placeholder de portafolio)
  youtube: "https://www.youtube.com/@eslordhighh",

  // PENDIENTE: correo real de contacto
  email: "hello@elevateartentertainment.com",
};

// Construye un enlace de WhatsApp con un mensaje opcional ya escrito.
export function waLink(message = "") {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const igLink = `https://instagram.com/${site.instagram}`;

// Imagen de placeholder (se reemplaza por fotos/videos reales más adelante).
export function placeholderImg(seed, w = 800, h = 600) {
  return `https://picsum.photos/seed/elevate-${seed}/${w}/${h}?grayscale`;
}
