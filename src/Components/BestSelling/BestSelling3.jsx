import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BestSelling3 = () => {
  const { t } = useTranslation("home");

  const foodItems = [
    { img: "/assets/img/dishes/dishes6_1.png", price: "$24.00" },
    { img: "/assets/img/dishes/dishes6_2.png", price: "$28.00" },
    { img: "/assets/img/dishes/dishes6_3.png", price: "$20.00" },
    { img: "/assets/img/dishes/dishes6_4.png", price: "$58.00" },
  ];
  const itemsText = t("popular_dishes.items", { returnObjects: true });

  return (
    <section className="popular-dishes-section fix section-padding pb-0">
      <div className="popular-dishes-wrapper-container">
        <div className="container">
          <div className="popular-dishes-wrapper style4">
            <div className="shape1 float-bob-x d-none d-xxl-block">
              <img src="/assets/img/shape/dishesShape5_1.png" alt="shape" />
            </div>
            <div className="container">
              <div className="title-area mb-45">
                <div
                  className="sub-title text-center wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <img
                    className="me-1"
                    src="/assets/img/icon/titleIcon.svg"
                    alt="icon"
                  />
                  {t("popular_dishes.subtitle")}
                  <img
                    className="ms-1"
                    src="/assets/img/icon/titleIcon.svg"
                    alt="icon"
                  />
                </div>
                <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                  {t("popular_dishes.title")}
                </h2>
              </div>
              <div className="dishes-card-wrap style4">
                {foodItems.map((item, i) => {const text = itemsText?.[i] || {}; return (
                  <div
                    key={i}
                    className="dishes-card style5 wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    <div className="dishes-thumb">
                      <img src={item.img} alt="thumb" />
                    </div>
                    <div className="dishes-content">
                      <Link to="/menu">
                        <h3>{text.name}</h3>
                      </Link>
                      <div className="star">
                        <img src="/assets/img/icon/star2.svg" alt="icon" />
                      </div>
                      <div className="text">{item.content}</div>
                      <h6>{item.price}</h6>
                      <Link to="/menu" className="theme-btn style6">
                        {" "}
                        {t("popular_dishes.order_now")} <i className="bi bi-basket2"></i>
                      </Link>
                    </div>
                  </div>
                )} )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling3;
