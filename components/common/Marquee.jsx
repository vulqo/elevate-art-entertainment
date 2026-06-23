"use client";
import Marquee from "react-fast-marquee";
import { useLang } from "@/context/LanguageContext";

export default function MarqueeComponent() {
  const { t } = useLang();
  const marQueeItems = [
    { id: 1, href: "/contact", text: t("marquee.1"), icon: "fas fa-star-of-life" },
    { id: 2, href: "/contact", text: t("marquee.2"), icon: "fas fa-star-of-life" },
    { id: 3, href: "/contact", text: t("marquee.3"), icon: "fas fa-star-of-life" },
    { id: 4, href: "/contact", text: t("marquee.4"), icon: "fas fa-star-of-life" },
  ];
  return (
    <div className="container-fluid p-0 overflow-hidden">
      <div className="slider__marquee clearfix marquee-wrap">
        <div className="marquee_mode marquee__group">
          <Marquee pauseOnHover={true}>
            {marQueeItems.map((elm, i) => (
              <h6 key={i} className="item m-item">
                <a href={elm.href}>
                  <i className={elm.icon}></i> {elm.text}
                </a>
              </h6>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
