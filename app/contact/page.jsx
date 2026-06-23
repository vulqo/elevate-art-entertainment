import MarqueeComponent from "@/components/common/Marquee";
import Breadcumb from "@/components/contact/Breadcumb";
import Contact from "@/components/contact/Contact";
import ContactInfo from "@/components/contact/ContactInfo";
import Footer7 from "@/components/footers/Footer7";
import Header7 from "@/components/headers/Header7";
import React from "react";

export const metadata = {
  title: "Contacto",
  description:
    "Reserva tu sesión en Elevate Art Entertainment, Downtown Cincinnati. Escríbenos por WhatsApp o Instagram. Hablamos español e inglés.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header7 />
      <Breadcumb />
      <ContactInfo />
      <Contact />
      <MarqueeComponent />
      <Footer7 />
    </>
  );
}
