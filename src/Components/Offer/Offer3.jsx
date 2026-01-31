import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { useTranslation } from "react-i18next";
const Offer3 = () => {
  const { t } = useTranslation("home");
    useEffect(() => {
        loadBackgroudImages();
      }, []);
  const itemsRaw = t("offer.items", { returnObjects: true });
  const items = Array.isArray(itemsRaw) ? itemsRaw : [];
 return (
    <div className="offer-section section-padding fix bg-color2">
      <div className="offer-shape">
        <img src="/assets/img/offer/offer-shape.png" alt="img" />
      </div>

      <div className="offer-wrapper3">
        <div className="container">
          <div className="row gy-4">

            {/* CARD 1 */}
            <div className="col-lg-6">
              <div
                className="offer-card style1 rounded-5 wow fadeInUp"
                data-wow-delay="0.5s"
                data-background="/assets/img/bg/offerBG2_2.jpg"
              >
                <div className="offer-content">
                  <h6>{items[0]?.start_price}</h6>
                  <h3>{items[0]?.title}</h3>
                  <p>{items[0]?.note}</p>
                  <Link to="/menu" className="theme-btn style4">
                    {t("offer.order_now")} <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>

                <div className="offer-thumb">
                  <img
                    className="thumbImg"
                    src="/assets/img/offer/offerThumb1_3.png"
                    alt="thumb"
                  />
                  <div className="shape float-bob-x">
                    <img src="/assets/img/shape/offerShape1_4.png" alt="shape" />
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-lg-6">
              <div
                className="offer-card style1 rounded-5 wow fadeInUp"
                data-wow-delay="0.7s"
                data-background="/assets/img/bg/offerBG2_3.jpg"
              >
                <div className="offer-content">
                  <h6 className="text-white">{items[1]?.start_price}</h6>
                  <h3>{items[1]?.title}</h3>
                  <p className="text-white">{items[1]?.note}</p>
                  <Link to="/menu" className="theme-btn style4">
                    {t("offer.order_now")} <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>

                <div className="offer-thumb">
                  <img
                    className="thumbImg"
                    src="/assets/img/offer/offerThumb1_1.png"
                    alt="thumb"
                  />
                  <div className="shape float-bob-x">
                    <img src="/assets/img/shape/offerShape1_4.png" alt="shape" />
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

export default Offer3;