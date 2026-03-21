import { useTranslation } from "react-i18next";
import Slider from "react-slick";

const Process1 = () => {
  const images = [
    "/assets/img/wcu/wcuThumb1_1.png",
    "/assets/img/wcu/wcuThumb1_2.png",
    "/assets/img/wcu/wcuThumb1_3.png",
  ];

  const { t } = useTranslation("home");

  const stepsRaw = t("process.steps", { returnObjects: true });
  const steps = Array.isArray(stepsRaw) ? stepsRaw : [];

  const PrevArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        className="wcu-arrow wcu-arrow-prev"
        onClick={onClick}
        aria-label="Previous slide"
      >
        <i className="bi bi-chevron-left"></i>
      </button>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        className="wcu-arrow wcu-arrow-next"
        onClick={onClick}
        aria-label="Next slide"
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="wcu-section section-padding fix bg-white">
      <div className="wcu-wrapper style1">
        <div className="shape1 d-none d-xxl-block float-bob-y">
          <img src="/assets/img/shape/wcuShape1_1.png" alt="shape" />
        </div>
        <div className="shape2 d-none d-xxl-block">
          <img src="/assets/img/shape/wcuShape1_2.png" alt="shape" />
        </div>

        <div className="container">
          <div className="row gy-5 gx-80 d-flex align-items-center">
            <div className="col-md-6 order-2 order-md-1">
              <div className="wcu-content">
                <div className="title-area">
                  <div
                    className="sub-title text-start wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <img
                      className="me-1"
                      src="/assets/img/icon/titleIcon.svg"
                      alt="icon"
                    />
                    {t("process.subtitle")}
                    <img
                      className="ms-1"
                      src="/assets/img/icon/titleIcon.svg"
                      alt="icon"
                    />
                  </div>

                  <h2
                    className="title text-start wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    {t("process.title")}
                  </h2>
                </div>

                <div className="fancy-box style5">
                  <div className="item">
                    <div className="icon">
                      <img src="/assets/img/icon/wcuIcon1_1.svg" alt="icon" />
                    </div>
                  </div>
                  <div className="item">
                    <h6>{steps[0]?.title}</h6>
                    <p>{steps[0]?.desc}</p>
                  </div>
                </div>

                <div className="fancy-box style5">
                  <div className="item">
                    <div className="icon">
                      <img src="/assets/img/icon/wcuIcon1_2.svg" alt="icon" />
                    </div>
                  </div>
                  <div className="item">
                    <h6>{steps[1]?.title}</h6>
                    <p>{steps[1]?.desc}</p>
                  </div>
                </div>

                <div className="fancy-box style5">
                  <div className="item">
                    <div className="icon">
                      <img src="/assets/img/icon/wcuIcon1_3.svg" alt="icon" />
                    </div>
                  </div>
                  <div className="item">
                    <h6>{steps[2]?.title}</h6>
                    <p>{steps[2]?.desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 order-1 order-md-2">
              <div className="wcu-thumb-slider">
                <Slider {...settings}>
                  {images.map((img, i) => (
                    <div key={i} className="wcu-slide-item">
                      <img
                        className="wcu-image"
                        src={img}
                        alt={`wcu-${i + 1}`}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process1;
