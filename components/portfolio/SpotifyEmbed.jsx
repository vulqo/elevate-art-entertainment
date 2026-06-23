"use client";
import React from "react";
import { useLang } from "@/context/LanguageContext";

// Reproductor de Spotify. PENDIENTE: reemplazar el ID por la playlist o el
// perfil de artista reales del cliente. Hoy usa una playlist de ejemplo.
const SPOTIFY_EMBED =
  "https://open.spotify.com/embed/playlist/37i9dQZF1DX10zKzsJ2jva?utm_source=generator&theme=0";

export default function SpotifyEmbed() {
  const { t } = useLang();
  return (
    <div className="space-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 text-center">
            <div className="title-area">
              <span className="sub-title">{t("spotify.sub")}</span>
              <h2 className="sec-title text-smoke">{t("spotify.title")}</h2>
              <p className="sec-text mt-20">{t("spotify.text")}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <iframe
              title="Spotify"
              src={SPOTIFY_EMBED}
              width="100%"
              height="380"
              style={{ borderRadius: "14px", border: 0 }}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
