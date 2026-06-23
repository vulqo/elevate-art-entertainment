import { site, waLink, igLink } from "@/data/site";

export const contactInfo = [
  {
    iconSrc: "/assets/img/icon/phone.svg",
    title: "Escríbenos por WhatsApp",
    text: "Respondemos rápido. Agenda tu sesión o pide una cotización sin compromiso.",
    linkText: site.whatsappDisplay,
    linkUrl: waLink("Hola, quiero reservar una sesión en el estudio."),
  },
  {
    iconSrc: "/assets/img/icon/speech-bubble.svg",
    title: "Envíanos un correo",
    text: "Cuéntanos de tu proyecto y te respondemos con los detalles.",
    linkText: site.email,
    linkUrl: `mailto:${site.email}`,
  },
];
export const contactInfo2 = [
  {
    iconSrc: "/assets/img/icon/location-pin-alt.svg",
    title: "Ubicación",
    title_en: "Location",
    address: "Downtown Cincinnati,",
    city: "Ohio, USA",
    linkUrl: "https://maps.google.com/?q=Downtown+Cincinnati+OH",
    linkText: "Ver en el mapa",
    linkText_en: "View on map",
  },
  {
    iconSrc: "/assets/img/icon/speech-bubble.svg",
    title: "WhatsApp",
    title_en: "WhatsApp",
    email: site.whatsappDisplay,
    email2: "Hablamos español e inglés",
    email2_en: "We speak Spanish & English",
    linkUrl: waLink("Hola, quiero más información."),
    linkText: "Escríbenos",
    linkText_en: "Message us",
  },
  {
    iconSrc: "/assets/img/icon/phone.svg",
    title: "Instagram",
    title_en: "Instagram",
    phoneNumber1: `@${site.instagram}`,
    phoneNumber2: "Mira nuestro trabajo",
    phoneNumber2_en: "See our work",
    linkUrl: igLink,
    linkText: "Síguenos",
    linkText_en: "Follow us",
  },
];
