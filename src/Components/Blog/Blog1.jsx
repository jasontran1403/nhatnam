import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const Blog1 = () => {
  const { t } = useTranslation("about");

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 3 } },
      { breakpoint: 1199, settings: { slidesToShow: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderRef = useRef(null);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  // chỉ đổi title sang i18n, img giữ nguyên
  const blogImages = [
    "/assets/img/blog/blogThumb1_1.jpg",
    "/assets/img/blog/blogThumb1_2.jpg",
    "/assets/img/blog/blogThumb1_3.jpg",
    "/assets/img/blog/blogThumb1_1.jpg",
    "/assets/img/blog/blogThumb1_2.jpg",
    "/assets/img/blog/blogThumb1_3.jpg",
  ];

  const blogItems = t("blog.items", { returnObjects: true }) || [];

  return (
    <section className="blog-section section-padding fix">
      <div className="burger-shape">
        <img src="/assets/img/blog/burger-shape.png" alt="img" />
      </div>
      <div className="pizza-shape">
        <img src="/assets/img/blog/pizza-shape.png" alt="img" />
      </div>

      <div className="blog-wrapper style1">
        <div className="container">
          <div className="blog-card-wrap style1">
            <div className="title-area">
              <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                {t("blog.subtitle")}
                <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
              </div>

              <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                {t("blog.title")}
              </h2>
            </div>

            <div className="slider-area">
              <div className="swiper blogSliderOne">
                <div className="swiper-wrapper cs_slider_gap_301">
                  <Slider ref={sliderRef} {...settings}>
                    {blogItems.map((item, i) => (
                      <div key={i} className="swiper-slide">
                        <div className="blog-card style1 wow fadeInUp" data-wow-delay="0.2s">
                          <div className="blog-thumb">
                            <img src={blogImages[i] || blogImages[0]} alt="thumb" />
                          </div>

                          <div className="blog-content">
                            <div className="blog-meta">
                              <div className="item1">
                                <h6>{t("blog.date.day")}</h6>
                                <p>{t("blog.date.month")}</p>
                              </div>

                              <div className="item2">
                                <div className="icon">
                                  <img src="/assets/img/icon/user.svg" alt="icon" />
                                  <span>{t("blog.meta.by")}</span>
                                </div>
                              </div>

                              <div className="item3">
                                <div className="icon">
                                  <img src="/assets/img/icon/tag.svg" alt="icon" />
                                  <span>{t("blog.meta.tag")}</span>
                                </div>
                              </div>
                            </div>

                            <Link to="/blog/blog-details">
                              <h3>{item.title}</h3>
                            </Link>

                            <Link to="/blog/blog-details" className="link-btn">
                              <span>{t("blog.readMore")}</span> <i className="bi bi-arrow-up-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
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
    </section>
  );
};

export default Blog1;
