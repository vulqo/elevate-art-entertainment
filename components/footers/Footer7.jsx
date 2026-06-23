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
    </footer>
  );
}
