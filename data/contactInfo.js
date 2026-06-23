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
    address: "Downtown Cincinnati,",
    city: "Ohio, USA",
    linkUrl: "https://maps.google.com/?q=Downtown+Cincinnati+OH",
    linkText: "Ver en el mapa",
  },
  {
    iconSrc: "/assets/img/icon/speech-bubble.svg",
    title: "WhatsApp",
    email: site.whatsappDisplay,
    email2: "Hablamos español e inglés",
    linkUrl: waLink("Hola, quiero más información."),
    linkText: "Escríbenos",
  },
  {
    iconSrc: "/assets/img/icon/phone.svg",
    title: "Instagram",
    phoneNumber1: `@${site.instagram}`,
    phoneNumber2: "Mira nuestro trabajo",
    linkUrl: igLink,
    linkText: "Síguenos",
  },
];
