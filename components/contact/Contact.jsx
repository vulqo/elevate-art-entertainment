"use client";

import { useState } from "react";
import { waLink } from "@/data/site";

export default function Contact() {
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
    <div className="contact-area-1 space bg-title shape-mockup-wrap">
      <div
        className="contact-map shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: 0, bottom: "140px" }}
      >
        <iframe
          src="https://maps.google.com/maps?q=Downtown%20Cincinnati%2C%20OH&t=m&z=13&output=embed&iwloc=near"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <h2 className="sec-title text-smoke">¿Listo para grabar?</h2>
                <p className="sec-text">
                  Llena el formulario y se abrirá WhatsApp con tu mensaje listo
                  para enviar. También puedes escribirnos directo.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="contact-form ajax-contact">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
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
                        id="email"
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
                        id="contactForm"
                        className="form-control style-border"
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
