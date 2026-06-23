"use client";
import { testimonialData2 } from "@/data/testimonials";
import Slider from "react-slick";
import { useLang } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLang();
  const sliderOptions = {
    slidesToShow: 2,
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial-area-8 space-top dot-style2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <span className="sub-title">{t("testi.sub")}</span>
              <h2 className="sec-title text-smoke">{t("testi.title")}</h2>
            </div>
          </div>
        </div>
        <Slider
          {...sliderOptions}
          className="row global-carousel testi-slider3 dot-style2"
        >
          {testimonialData2.map((elm, i) => (
            <div key={i} className="col-lg-6 sliderItem2">
              <div className="testi-box style3">
                <div className="quote-icon">
                  <i
                    className="fas fa-quote-left"
                    style={{ fontSize: "40px", color: "var(--brand)" }}
                  ></i>
                </div>
                <p className="testi-box_text">“{elm.text}”</p>
                <div className="testi-box_profile">
                  <h4 className="testi-box_name">{elm.name}</h4>
                  <span className="testi-box_desig">{elm.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
