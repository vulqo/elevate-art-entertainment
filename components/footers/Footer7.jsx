import React from "react";
import { site, waLink } from "@/data/site";

export default function Footer7() {
  return (
    <footer className="footer-wrapper footer-layout8 overflow-hidden bg-theme">
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <p>
                {site.city} <br />
                {site.country} · Hablamos español e inglés
              </p>
            </div>
            <div className="col-md-6 align-self-center text-md-end">
              <p className="copyright-text">
                <a href={waLink("Hola, quiero reservar una sesión.")} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {site.whatsappDisplay}
                </a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Crédito de Vulqo (agencia) */}
      <div style={{ backgroundColor: "#0a0c00", padding: "16px 0" }}>
        <div className="container text-center">
          <a
            href="https://vulqo.us"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              color: "#9fa2ad",
              fontSize: "13px",
              letterSpacing: "0.3px",
            }}
          >
            Hecho con fuego por
            <img
              src="/assets/img/vulqo.png"
              alt="Vulqo"
              style={{ height: "20px", width: "auto", display: "block" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
