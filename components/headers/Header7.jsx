"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DarkMenu from "./component/DarkMenu";
import Link from "next/link";
import MobileNav from "./component/MobileNav";
import MobileMenuSocials from "./component/MobileMenuSocials";
import { site, waLink } from "@/data/site";
import { useLang } from "@/context/LanguageContext";
import LangToggle from "@/components/common/LangToggle";

export default function Header7() {
  const { t } = useLang();
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMenuOpen, setDarkMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const menuWrapper = document.querySelector(".mobile-menu-wrapper");
      const menuContainer = document.querySelector(".mobile-menu-area");

      // Check if the click is outside of modal-content but inside modal-dialog
      if (
        menuWrapper &&
        menuContainer &&
        !menuContainer.contains(event.target) &&
        menuWrapper.contains(event.target)
      ) {
        // Your logic for handling the click outside modal-content
        setMobileMenuOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleDocumentClick);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 500);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <DarkMenu setDarkMenuOpen={setDarkMenuOpen} darkMenuOpen={darkMenuOpen} />
      <div
        className={`mobile-menu-wrapper ${
          mobileMenuOpen ? "body-visible" : ""
        } `}
      >
        <div className="mobile-menu-area">
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="mobile-logo">
            <Link scroll={false} href="/">
              <Image
                width={86}
                height={24}
                src="/assets/img/logo.svg"
                alt="Elevate Art Entertainment"
              />
            </Link>
          </div>
          <div className="mobile-menu">
            <ul>
              <MobileNav />
            </ul>
          </div>
          <div className="sidebar-wrap">
            <h6>{site.city}</h6>
            <h6>{site.country}</h6>
          </div>
          <div className="sidebar-wrap">
            <h6>
              <a href={waLink("Hola, quiero reservar una sesión.")} target="_blank" rel="noopener noreferrer">
                WhatsApp: {site.whatsappDisplay}
              </a>
            </h6>
            <h6>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </h6>
          </div>
          <div className="sidebar-wrap">
            <LangToggle />
          </div>
          <div className="social-btn style3">
            <MobileMenuSocials />
          </div>
        </div>
      </div>
      <header className="nav-header header-layout2">
        <div className={`sticky-wrapper ${isScrolled ? "header-sticky" : ""} `}>
          <div className="menu-area">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link scroll={false} href="/">
                      <Image
                        width={86}
                        height={24}
                        src="/assets/img/logo-white-sm.svg"
                        alt="Elevate Art Entertainment"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="header-button">
                    <a
                      className="btn link-btn2 d-none d-lg-inline-flex"
                      href={waLink("Hola, quiero reservar una sesión en el estudio.")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="link-effect">
                        <span className="effect-1">{t("header.book")}</span>
                        <span className="effect-1">{t("header.book")}</span>
                      </span>
                    </a>
                    <span className="d-none d-lg-inline-flex align-items-center ms-2">
                      <LangToggle />
                    </span>
                    <button
                      type="button"
                      className="sidebar-btn menu-toggle2 d-none d-lg-block"
                      onClick={() => setDarkMenuOpen(true)}
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(true)}
                      className="menu-toggle sidebar-btn d-block d-lg-none"
                    >
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
