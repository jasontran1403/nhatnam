import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const Faq1 = () => {
  const { t } = useTranslation("home");

  const faqRaw = t("faq.items", { returnObjects: true });
  const faqContent = Array.isArray(faqRaw) ? faqRaw : [];

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) setOpenItemIndex(-1);
    else setOpenItemIndex(index);
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 1 } },
      { breakpoint: 1199, settings: { slidesToShow: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } }
    ]
  };

  const sliderRef = useRef(null);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const brandContent = [
    { img: "/assets/img/faq/01.jpg" },
    { img: "/assets/img/faq/01.jpg" },
    { img: "/assets/img/faq/01.jpg" }
  ];

  return (
    <div className="faq-section section-padding pb-0 fix">
      <div className="container">
        <div className="faq-wrapper-4">
          <div className="row gy-5 gx-60">
            <div className="col-xl-6">
              <div className="title-area mb-45">
                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                  <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                  {t("faq.subtitle")}
                  <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                </div>

                <div className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                  {t("faq.title")}
                </div>
              </div>

              <div className="faq-content-3">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    {faqContent.map((item, index) => {
                      const collapseId = `faq-${index}`;
                      const isActive = index === openItemIndex;

                      return (
                        <div
                          key={index}
                          className={`accordion-item ${isActive ? "active" : ""}`}
                          data-wow-delay=".2s"
                        >
                          <h4 onClick={() => handleItemClick(index)} className="accordion-header">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#${collapseId}`}
                              aria-expanded={isActive ? "true" : "false"}
                              aria-controls={collapseId}
                            >
                              {item.q}
                            </button>
                          </h4>

                          <div
                            ref={accordionContentRef}
                            id={collapseId}
                            className={`accordion-collapse ${isActive ? "show" : ""}`}
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body">{item.a}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="faq-image-area">
                <div className="swiper faq-slider">
                  <div className="swiper-wrapper">
                    <Slider ref={sliderRef} {...settings}>
                      {brandContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                          <div className="faq-img">
                            <img src={item.img} alt="img" />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  <div className="btn-wrap">
                    <div onClick={previous} className="arrow-prev">
                      <i className="bi bi-arrow-left"></i>
                    </div>
                    <div onClick={next} className="arrow-next">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>

                <div className="clock-wrapper-area">
                  <h3>{t("faq.discount_title")}</h3>

                  <div className="clock-wrapper">
                    <div className="clock">
                      <div className="number" id="days">20</div>
                      <div className="text">{t("faq.countdown.days")}</div>
                    </div>
                    <div className="clock">
                      <div className="number" id="hours">48</div>
                      <div className="text">{t("faq.countdown.hours")}</div>
                    </div>
                    <div className="clock">
                      <div className="number" id="minutes">16</div>
                      <div className="text">{t("faq.countdown.minutes")}</div>
                    </div>
                    <div className="clock">
                      <div className="number" id="seconds">38</div>
                      <div className="text">{t("faq.countdown.seconds")}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq1;
