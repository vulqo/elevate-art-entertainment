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

// Imágenes de placeholder TEMÁTICAS de estudio/música (licencia abierta,
// vía Openverse). Relevantes y de buena calidad; se reemplazan por fotos
// definitivas del cliente más adelante.
const PLACEHOLDER_IMAGES = [
  "/assets/img/photos/console.jpg",
  "/assets/img/photos/studio1.jpg",
  "/assets/img/photos/mic.jpg",
  "/assets/img/photos/studio2.jpg",
  "/assets/img/photos/headphones.jpg",
  "/assets/img/photos/video.jpg",
  "/assets/img/photos/photo.jpg",
  "/assets/img/photos/concert.jpg",
];
// Elige una imagen real de forma determinista según el "seed".
export function placeholderImg(seed) {
  const str = String(seed);
  let n = 0;
  for (let i = 0; i < str.length; i++) {
    n = (n + str.charCodeAt(i) * (i + 7)) % PLACEHOLDER_IMAGES.length;
  }
  return PLACEHOLDER_IMAGES[n];
}
