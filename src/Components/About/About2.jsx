import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import { useTranslation } from "react-i18next";

const About2 = () => {
  const { t } = useTranslation("about");

  const [iframeSrc, setIframeSrc] = useState("about:blank");
  const [toggle, setToggle] = useState(false);

  const handelClick = () => {
    setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
    setToggle(!toggle);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(!toggle);
  };

  const features = t("about2.features", { returnObjects: true });
  const marqueeItems = t("about2.marquee", { returnObjects: true });

  return (
    <section className="about-us-section fix section-padding pt-0">
      <div className="about-wrapper style2">
        <div className="shape1 d-none d-xxl-block">
          <img src="/assets/img/shape/aboutShape2_1.png" alt="shape" />
        </div>
        <div className="container">
          <div className="about-us section-padding">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                <div className="about-thumb mb-5 mb-lg-0">
                  <img src="/assets/img/about/aboutThumb2_1.png" alt="thumb" />
                  <div className="video-wrap">
                    <a onClick={handelClick} className="play-btn popup-video">
                      <img
                        className="cir36"
                        src="/assets/img/shape/player.svg"
                        alt="icon"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
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
                    {t("about2.subtitle")}
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
                    {t("about2.title")}
                  </h2>

                  <div
                    className="text text-start wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    {t("about2.description")}
                  </div>
                </div>

                <div className="fancy-box-wrapper">
                  {features?.map((f, idx) => (
                    <div key={idx} className="fancy-box">
                      <div className="item">
                        <img
                          src={`/assets/img/icon/aboutIcon1_${idx + 1}.svg`}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee giữ structure y nguyên, chỉ đổi text */}
      <div className="marquee-wrapper style-1 text-slider section-padding pt-0">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item style1">
              {marqueeItems?.map((txt, i) => (
                <span key={`a-${i}`} className="text-slider text-style">
                  {txt}
                </span>
              ))}
              {/* lặp thêm 1 vòng cho chạy dài (giữ như bản gốc bạn đang copy 2 lần) */}
              {marqueeItems?.map((txt, i) => (
                <span key={`b-${i}`} className="text-slider text-style">
                  {txt}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>

      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />
    </section>
  );
};

export default About2;
