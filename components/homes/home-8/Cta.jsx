"use client";
import Socials from "@/components/footers/component/Socials";
import React from "react";
import { waLink } from "@/data/site";

export default function Cta() {
  return (
    <div className="cta-area-1 overflow-hidden bg-theme space text-xl-start text-center">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-7 col-lg-10">
            <div className="title-area mb-xl-0 mb-40">
              <h2 className="sec-title">¿Listo para grabar tu próximo hit?</h2>
              <p className="sec-text mt-30 mb-n2">
                Reserva tu sesión o pide una cotización. Respondemos rápido por
                WhatsApp. Hablamos español e inglés.
              </p>
              <div className="social-btn style3 justify-content-xl-start justify-content-center mt-30">
                <Socials />
              </div>
            </div>
          </div>
          <div className="col-xl-4 align-self-center text-xl-end">
            <a
              href={waLink("Hola, quiero reservar una sesión en el estudio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn style2"
            >
              <span className="link-effect">
                <span className="effect-1">RESERVA POR WHATSAPP</span>
                <span className="effect-1">RESERVA POR WHATSAPP</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
