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

// Imágenes de placeholder REALES (del trabajo del cliente en su IG).
// Se reemplazan por fotos definitivas más adelante. Relevantes y propias.
const PLACEHOLDER_IMAGES = [
  "/assets/img/portfolio/ig/work-1.jpg",
  "/assets/img/portfolio/ig/work-2.jpg",
  "/assets/img/portfolio/ig/work-3.jpg",
  "/assets/img/portfolio/ig/work-4.jpg",
  "/assets/img/portfolio/ig/work-5.jpg",
  "/assets/img/portfolio/ig/work-6.jpg",
  "/assets/img/portfolio/ig/work-7.jpg",
  "/assets/img/portfolio/ig/work-8.jpg",
  "/assets/img/portfolio/ig/work-9.jpg",
  "/assets/img/portfolio/ig/work-11.jpg",
  "/assets/img/portfolio/ig/work-12.jpg",
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
