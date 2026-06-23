// Servicios del estudio. Se usan en la home y en la página de Servicios.
// faIcon = clase de Font Awesome (solid) relacionada al servicio.

const SERVICES = [
  {
    id: 1,
    faIcon: "fa-microphone",
    title: "Grabación de voz",
    text: "Graba tus voces con calidad profesional en cabina acústicamente tratada. Por hora, sin apuros.",
    price: "$25 / hora",
  },
  {
    id: 2,
    faIcon: "fa-music",
    title: "Beats con licencia",
    text: "Beats originales hechos para ti, con licencia lista para que publiques sin problemas.",
    price: "Desde $90",
  },
  {
    id: 3,
    faIcon: "fa-sliders",
    title: "Producción musical completa",
    text: "Llevamos tu idea a una canción terminada: dirección creativa, grabación, mezcla y máster.",
    price: "Mezcla $80 · Máster $30",
  },
  {
    id: 4,
    faIcon: "fa-compact-disc",
    title: "Distribución digital",
    text: "Tu música en Spotify, Apple Music y todas las plataformas, lista para escucharse.",
    price: "$15 / canción",
  },
  {
    id: 5,
    faIcon: "fa-video",
    title: "Video musical y fotografía",
    text: "Videoclips y fotos con cámaras profesionales: que tu música se vea tan bien como suena.",
    price: "Desde $180",
  },
  {
    id: 6,
    faIcon: "fa-copyright",
    title: "Registro de derechos de autor",
    text: "Registra tu copyright y protege legalmente todo lo que creas.",
    price: "Cotización",
  },
  {
    id: 7,
    faIcon: "fa-palette",
    title: "Diseño gráfico",
    text: "Flyers y artes para tus lanzamientos y eventos, listos para redes.",
    price: "Cotización",
  },
];

// Home "Qué hacemos" (6 tarjetas)
export const featureData = SERVICES.slice(0, 6);
export const featureData2 = SERVICES.slice(0, 6);
export const featureData3 = SERVICES.slice(0, 6);
// Página de Servicios (las 7, con precio)
export const featureData4 = SERVICES;

export const allFeatures = SERVICES;
