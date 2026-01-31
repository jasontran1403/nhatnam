import { useRef, useState } from "react";
import Slider from "react-slick";
import VideoModal from "../VideoModal/VideoModal";
import { useTranslation } from "react-i18next";

const Testimonial1 = () => {
  const { t } = useTranslation("about");

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: false,
    autoplaySpeed: 4000,
  };

  const sliderRef = useRef(null);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(true);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };

  // giữ data như cũ – chỉ map sang key i18n
  const tesItems = [
    { img: "/assets/img/testimonial/testimonialProfile1_1.png", name: "Albert Flores", roleKey: "food_reviewer" },
    { img: "/assets/img/testimonial/testimonialProfile1_1.png", name: "Albert Flores", roleKey: "food_reviewer" },
    { img: "/assets/img/testimonial/testimonialProfile1_1.png", name: "Albert Flores", roleKey: "food_reviewer" },
  ];

  return (
    <section className="testimonial-section fix bg-color3">
      <div className="testimonial-wrapper style1 section-padding">
        <div className="shape">
          <img src="/assets/img/testimonial/testimonialThumb1_1.png" alt="thumb" />
        </div>
        <div className="shape2">
          <img src="/assets/img/shape/testimonialShape1_1.png" alt="shape" />
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center">
            {/* Video */}
            <div className="col-xl-5 d-flex align-items-center justify-content-center">
              <div className="video-wrap cir36">
                <a onClick={handelClick} className="play-btn popup-video">
                  <img src="/assets/img/shape/player.svg" alt="icon" />
                </a>
              </div>
            </div>

            {/* Testimonial */}
            <div className="col-xl-7">
              <div className="title-area">
                <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                  <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                  {t("testimonial.subtitle")}
                  <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                </div>

                <h2 className="title text-white wow fadeInUp" data-wow-delay="0.7s">
                  {t("testimonial.title")}
                </h2>
              </div>

              <div className="slider-area">
                <Slider ref={sliderRef} {...settings}>
                  {tesItems.map((item, i) => (
                    <div key={i}>
                      <div className="testimonial-card style1">
                        <div className="testimonial-header">
                          <div className="fancy-box">
                            <div className="item1">
                              <img src={item.img} alt="profile" />
                            </div>
                            <div className="item2">
                              <h6>{item.name}</h6>
                              <p>{t(`testimonial.designation.${item.roleKey}`)}</p>
                              <div className="icon">
                                <img src="/assets/img/icon/star.svg" alt="star" />
                              </div>
                            </div>
                            <div className="quote">
                              <img src="/assets/img/icon/quote.svg" alt="quote" />
                            </div>
                          </div>
                        </div>

                        <p>{t("testimonial.content")}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>

        {/* arrows */}
        <div className="btn-wrap">
          <div onClick={previous} className="arrow-prev">
            <i className="bi bi-arrow-left"></i>
          </div>
          <div onClick={next} className="arrow-next">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>

      {/* marquee giữ nguyên */}
      <div className="marquee-wrapper style-2 text-slider section-padding">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item style-2">
              <span className="text-slider text-style">chicken pizza</span>
              <span className="text-slider text-style">GRILLED CHICKEN</span>
              <span className="text-slider text-style">BURGER</span>
              <span className="text-slider text-style">FRESH PASTA</span>
              <span className="text-slider text-style">CHICKEN FRY</span>
            </li>
          </ul>
        </div>
      </div>

      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </section>
  );
};

export default Testimonial1;
