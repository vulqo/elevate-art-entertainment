"use client";
import React, { useState } from "react";
import { waLink } from "@/data/site";

// CTA: WhatsApp como acción principal (izquierda) + formulario del template (derecha).
export default function CtaContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg =
      `Hola, soy ${form.name || ""}.` +
      (form.email ? ` Mi correo: ${form.email}.` : "") +
      (form.message ? ` ${form.message}` : " Quiero reservar una sesión.");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="cta-area-1 overflow-hidden bg-title space text-xl-start text-center">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center align-items-center gy-5">
          <div className="col-xl-5 col-lg-10">
            <div className="title-area mb-0">
              <span className="sub-title">Reserva</span>
              <h3 className="text-smoke" style={{ fontSize: "2.2rem", lineHeight: 1.2 }}>
                ¿Listo para grabar tu próximo hit?
              </h3>
              <p className="sec-text mt-20 mb-30">
                La forma más rápida es por WhatsApp: te respondemos al momento y
                agendamos tu sesión. Hablamos español e inglés.
              </p>
              <a
                href={waLink("Hola, quiero reservar una sesión en el estudio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn style2"
              >
                <span className="link-effect">
                  <span className="effect-1">
                    <i className="fab fa-whatsapp me-2"></i>RESERVA POR WHATSAPP
                  </span>
                  <span className="effect-1">
                    <i className="fab fa-whatsapp me-2"></i>RESERVA POR WHATSAPP
                  </span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-form-wrap">
              <p className="mb-20 text-smoke">
                ¿Prefieres dejarnos tu mensaje? Llénalo y lo enviamos por
                WhatsApp con un clic.
              </p>
              <form onSubmit={handleSubmit} className="contact-form ajax-contact">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="name"
                        placeholder="Nombre*"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="email"
                        placeholder="Correo (opcional)"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        required
                        name="message"
                        placeholder="¿En qué te ayudamos?*"
                        className="form-control style-border style2"
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20">
                    <span className="link-effect">
                      <span className="effect-1">ENVIAR POR WHATSAPP</span>
                      <span className="effect-1">ENVIAR POR WHATSAPP</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
