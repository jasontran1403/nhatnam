import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer1 = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="footer-section bg-title fix">
      <div className="footer-widgets-wrapper">
        <div className="shape1 float-bob-y d-none d-xxl-block">
          <img src="/assets/img/shape/footerShape1_1.png" alt="shape" />
        </div>
        <div className="shape2 d-none d-xxl-block">
          <img src="/assets/img/shape/footerShape1_2.png" alt="shape" />
        </div>
        <div className="shape3 d-none d-xxl-block">
          <img src="/assets/img/shape/footerShape1_3.png" alt="shape" />
        </div>
        <div className="shape4 d-none d-xxl-block">
          <img src="/assets/img/shape/footerShape1_4.png" alt="shape" />
        </div>

        <div className="container">
          <div className="footer-top">
            <div className="row gy-4">
              <div className="col-lg-4">
                <div className="fancy-box">
                  <div className="item1">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="item2">
                    <h6>{t("footer.address_title")}</h6>
                    <p>{t("footer.address_value")}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                <div className="fancy-box">
                  <div className="item1">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="item2">
                    <h6>{t("footer.email_title")}</h6>
                    <p>{t("footer.email_value")}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                <div className="fancy-box">
                  <div className="item1">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div className="item2">
                    <h6>{t("footer.hotline_title")}</h6>
                    <p>{t("footer.hotline_value")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link to="/">
                    <img src="/assets/img/logo/logoWhite.svg" alt="logo-img" />
                  </Link>
                </div>

                <div className="footer-content">
                  <p>{t("footer.about_text")}</p>

                  <div className="social-icon d-flex align-items-center">
                    <a href="#" aria-label="facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" aria-label="twitter">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" aria-label="linkedin">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" aria-label="youtube">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>{t("footer.quick_links")}</h3>
                </div>

                <ul className="list-area">
                  <li>
                    <Link to="/about">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.link.about")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.link.gallery")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.link.blog")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.link.faq")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.link.contact")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>{t("footer.our_menu")}</h3>
                </div>

                <ul className="list-area">
                  <li>
                    <Link to="/menu">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.menu.burger")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.menu.pizza")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.menu.fresh_food")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.menu.vegetable")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/menu">
                      <i className="bi bi-chevron-double-right"></i>
                      {t("footer.menu.desserts")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h3>{t("footer.contact_us")}</h3>
                </div>

                <ul className="list-area">
                  <li className="mb-2">
                    {t("footer.open_days_week")}{" "}
                    <span className="text-theme-color2">{t("footer.open_time_week")}</span>
                  </li>
                  <li>
                    {t("footer.open_days_sat")}{" "}
                    <span className="text-theme-color2">{t("footer.open_time_sat")}</span>
                  </li>
                </ul>

                <form className="mt-4">
                  <div className="form-control">
                    <input
                      className="email"
                      type="email"
                      placeholder={t("footer.email_placeholder")}
                    />
                    <button type="submit" className="submit-btn" aria-label="submit">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>

                  <div className="form-control style2 mt-3">
                    <input id="checkbox" name="checkbox" type="checkbox" />
                    <label htmlFor="checkbox">
                      {t("footer.privacy_agree")}{" "}
                      <a href="contact.html">{t("footer.privacy_policy")}</a>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft" data-wow-delay=".3s">
              {t("footer.copyright")} <a href="#">{t("footer.brand")}</a>
            </p>

            <ul className="brand-logo wow fadeInRight" data-wow-delay=".5s">
              <li>
                <a className="text-white" href="#">
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  {t("footer.privacy")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
