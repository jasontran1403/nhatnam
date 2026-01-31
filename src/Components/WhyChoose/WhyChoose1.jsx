import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WhyChoose1 = () => {
  const { t } = useTranslation("home");

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

  const itemsRaw = t("why_choose.items", { returnObjects: true });
  const items = Array.isArray(itemsRaw) ? itemsRaw : [];

  return (
    <section className="history-section fix bg-title">
      <div className="tree-shape">
        <img src="/assets/img/history/tree-shape.png" alt="img" />
      </div>

      <div className="container">
        <div className="history-wrapper style1">
          <div className="row gx-60">
            <div className="col-lg-8">
              <div className="history-thumb mt-5 mt-lg-0">
                <img
                  className="thumb"
                  src="/assets/img/history/historyThumb1_1.jpg"
                  alt="thumb"
                />

                <div className="video-wrap ripple-effect">
                  {/* giữ nguyên structure, chỉ thêm type để tránh default submit nếu lỡ nằm trong form */}
                  <a onClick={handelClick} className="play-btn popup-video">
                    <img
                      className="playerImg"
                      src="/assets/img/shape/player2.svg"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="history-content section-padding">
                <div className="title-area mb-45">
                  <div
                    className="sub-title text-start wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <img
                      className="me-1"
                      src="/assets/img/icon/titleIcon.svg"
                      alt="icon"
                    />{" "}
                    {t("why_choose.subtitle")}{" "}
                    <img
                      className="ms-1"
                      src="/assets/img/icon/titleIcon.svg"
                      alt="icon"
                    />
                  </div>

                  <div
                    className="title text-start text-white wow fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    {t("why_choose.title")}
                  </div>

                  <p className="text-white">{t("why_choose.desc")}</p>
                </div>

                {/* ITEM 1 */}
                <div className="fancy-box style6">
                  <div className="item">
                    <div className="icon">
                      <img src="/assets/img/icon/wcuIcon2_1.png" alt="icon" />
                    </div>
                  </div>
                  <div className="item">
                    <h6 className="title">{items[0]?.title}</h6>
                    <p className="text">{items[0]?.desc}</p>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="fancy-box style6">
                  <div className="item">
                    <div className="icon">
                      <img src="/assets/img/icon/wcuIcon2_2.png" alt="icon" />
                    </div>
                  </div>
                  <div className="item">
                    <h6 className="title">{items[1]?.title}</h6>
                    <p className="text">{items[1]?.desc}</p>
                  </div>
                </div>

                <Link to="/menu" className="theme-btn style4">
                  {t("why_choose.order_now")} <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handelClose} />
    </section>
  );
};

export default WhyChoose1;
