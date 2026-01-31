import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About3 = () => {
  const { t } = useTranslation("home");
  const featuresRaw = t("about.features", { returnObjects: true });
  const features = Array.isArray(featuresRaw) ? featuresRaw : [];
  return (
    <div className="about-section fix">
      <div className="about-wrapper section-padding  style3">
        <div className="shape1">
          <img
            className="float-bob-y"
            src="/assets/img/shape/aboutShape3_1.png"
            alt="shape"
          />
        </div>
        <div className="shape2">
          <img
            className="float-bob-x"
            src="/assets/img/shape/aboutShape3_2.png"
            alt="shape"
          />
        </div>
        <div className="orange-shape">
          <img src="/assets/img/about/orange-shape.png" alt="shape" />
        </div>
        <div className="container">
          <div className="row gx-60 gy-5">
            <div className="col-xl-6">
              <div className="about-thumb-img">
                <img src="/assets/img/about/aboutThumb1_1.png" alt="thumb" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-content">
                <div className="title-area">
                  <div
                    className="sub-title text-start wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <img
                      className="me-1"
                      src="/assets/img/icon/titleIcon.svg"
                      alt="icon"
                    />{" "}
                    {t("about.subtitle")}
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
                    {t("about.title")}
                  </h2>
                  <div
                    className="text text-start wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    {t("about.description")}
                  </div>
                </div>
                <div className="fancy-box-wrapper">
                  {features.map((f, i) => (
                    <div key={i} className="fancy-box">
                      <div className="item">
                        <img
                          src={`/assets/img/icon/aboutIcon2_${i + 1}.svg`}
                          alt="icon"
                        />
                      </div>
                      <div className="item">
                        <h6>{f.title}</h6>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/about" className="theme-btn style4">
                  {t("about.button")} <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
