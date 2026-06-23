// Servicios del estudio. Se usan en la home y en la página de Servicios.
// faIcon = clase de Font Awesome (solid). title/text bilingües (es + _en).

const SERVICES = [
  {
    id: 1,
    faIcon: "fa-microphone",
    title: "Grabación de voz",
    title_en: "Voice recording",
    text: "Graba tus voces con calidad profesional en cabina acústicamente tratada. Por hora, sin apuros.",
    text_en: "Record your vocals with pro quality in an acoustically treated booth. By the hour, no rush.",
    price: "$25 / hora",
  },
  {
    id: 2,
    faIcon: "fa-music",
    title: "Beats con licencia",
    title_en: "Licensed beats",
    text: "Beats originales hechos para ti, con licencia lista para que publiques sin problemas.",
    text_en: "Original beats made for you, with a ready-to-use license so you can release with no issues.",
    price: "Desde $90",
  },
  {
    id: 3,
    faIcon: "fa-headphones",
    title: "Producción musical completa",
    title_en: "Full music production",
    text: "Llevamos tu idea a una canción terminada: dirección creativa, grabación, mezcla y máster.",
    text_en: "We take your idea to a finished song: creative direction, recording, mixing and mastering.",
    price: "Mezcla $80 · Máster $30",
  },
  {
    id: 4,
    faIcon: "fa-compact-disc",
    title: "Distribución digital",
    title_en: "Digital distribution",
    text: "Tu música en Spotify, Apple Music y todas las plataformas, lista para escucharse.",
    text_en: "Your music on Spotify, Apple Music and every platform, ready to be heard.",
    price: "$15 / canción",
  },
  {
    id: 5,
    faIcon: "fa-video",
    title: "Video musical y fotografía",
    title_en: "Music video & photography",
    text: "Videoclips y fotos con cámaras profesionales: que tu música se vea tan bien como suena.",
    text_en: "Music videos and photos with pro cameras: make your music look as good as it sounds.",
    price: "Desde $180",
  },
  {
    id: 6,
    faIcon: "fa-copyright",
    title: "Registro de derechos de autor",
    title_en: "Copyright registration",
    text: "Registra tu copyright y protege legalmente todo lo que creas.",
    text_en: "Register your copyright and legally protect everything you create.",
    price: "Desde $50",
  },
  {
    id: 7,
    faIcon: "fa-palette",
    title: "Diseño gráfico",
    title_en: "Graphic design",
    text: "Flyers y artes para tus lanzamientos y eventos, listos para redes.",
    text_en: "Flyers and artwork for your releases and events, ready for social.",
    price: "Desde $30",
  },
];

// Tipos de licencia de beats (precios estándar; Luis los revisa luego).
export const BEAT_LICENSES = [
  {
    name: "Básica",
    name_en: "Basic",
    price: "$90",
    desc: "Para empezar: streaming y uso no comercial. El beat puede venderse a otros.",
    desc_en: "To get started: streaming and non-commercial use. The beat can still be sold to others.",
  },
  {
    name: "Premium",
    name_en: "Premium",
    price: "$150",
    desc: "Distribución en plataformas y monetización. Incluye los archivos del proyecto.",
    desc_en: "Platform distribution and monetization. Includes the project files.",
  },
  {
    name: "Exclusiva",
    name_en: "Exclusive",
    price: "$300",
    desc: "El beat es solo tuyo: se retira de la venta y nadie más lo usa.",
    desc_en: "The beat is yours alone: it's pulled from sale and no one else uses it.",
  },
];

// Helper para elegir el campo según idioma.
export function tField(item, field, lang) {
  return lang === "en" ? item[`${field}_en`] || item[field] : item[field];
}

// Home "Qué hacemos" (6 tarjetas)
export const featureData = SERVICES.slice(0, 6);
export const featureData2 = SERVICES.slice(0, 6);
export const featureData3 = SERVICES.slice(0, 6);
// Página de Servicios (las 7, con precio)
export const featureData4 = SERVICES;

export const allFeatures = SERVICES;
