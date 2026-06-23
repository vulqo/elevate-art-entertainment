// Servicios del estudio. Se usan en la home y en la página de Servicios.
// Iconos disponibles: /assets/img/icon/feature-icon1-1.svg ... feature-icon1-6.svg

const SERVICES = [
  {
    id: 1,
    icon: "/assets/img/icon/feature-icon1-1.svg",
    iconSrc: "/assets/img/icon/feature-icon1-1.svg",
    title: "Grabación de voz",
    text: "Sesión de grabación profesional por hora en cabina con tratamiento acústico.",
    price: "$25 / hora",
  },
  {
    id: 2,
    icon: "/assets/img/icon/feature-icon1-2.svg",
    iconSrc: "/assets/img/icon/feature-icon1-2.svg",
    title: "Beats con licencia",
    text: "Beats únicos para ti, con licencia de uso listos para tu canción.",
    price: "Desde $90",
  },
  {
    id: 3,
    icon: "/assets/img/icon/feature-icon1-3.svg",
    iconSrc: "/assets/img/icon/feature-icon1-3.svg",
    title: "Producción musical completa",
    text: "Tu canción desde cero: dirección creativa, grabación, mezcla y máster.",
    price: "Mezcla $80 · Máster $30",
  },
  {
    id: 4,
    icon: "/assets/img/icon/feature-icon1-4.svg",
    iconSrc: "/assets/img/icon/feature-icon1-4.svg",
    title: "Distribución digital",
    text: "Subimos tu música a Spotify, Apple Music y demás plataformas.",
    price: "$15 / canción",
  },
  {
    id: 5,
    icon: "/assets/img/icon/feature-icon1-5.svg",
    iconSrc: "/assets/img/icon/feature-icon1-5.svg",
    title: "Video musical y fotografía",
    text: "Videoclips con cámaras profesionales y sesiones de fotos.",
    price: "Desde $180",
  },
  {
    id: 6,
    icon: "/assets/img/icon/feature-icon1-6.svg",
    iconSrc: "/assets/img/icon/feature-icon1-6.svg",
    title: "Registro de derechos de autor",
    text: "Protege legalmente tu música con el registro de copyright.",
    price: "Cotización",
  },
  {
    id: 7,
    icon: "/assets/img/icon/feature-icon1-1.svg",
    iconSrc: "/assets/img/icon/feature-icon1-1.svg",
    title: "Diseño gráfico",
    text: "Flyers para tus canciones y eventos, a la medida de tu proyecto.",
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
