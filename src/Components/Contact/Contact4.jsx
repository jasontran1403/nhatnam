import { useTranslation } from "react-i18next";

const Contact4 = () => {
  const { t } = useTranslation("contact");

  return (
    <div>
      {/* CONTACT INFO */}
      <div className="contact-us-section section-padding fix">
        <div className="contact-box-wrapper style2">
          <div className="container">
            <div className="row gy-4">

              <div className="col-md-6 col-xl-3">
                <div className="contact-box style1 border-0">
                  <div className="contact-icon">
                    <img className="rounded-circle" src="/assets/img/icon/phone2.png" alt="icon" />
                  </div>
                  <h3 className="title">{t("info.phone.title")}</h3>
                  <p>+123 (5246) 2356 65</p>
                  <p>+123 (214) 321</p>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="contact-box style1 border-0">
                  <div className="contact-icon">
                    <img className="rounded-circle" src="/assets/img/icon/gmail2.png" alt="icon" />
                  </div>
                  <h3 className="title">{t("info.email.title")}</h3>
                  <p>info.needhelp@gmail.com</p>
                  <p>hello@gmail.com</p>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="contact-box style1 border-0">
                  <div className="contact-icon">
                    <img className="rounded-circle" src="/assets/img/icon/location2.png" alt="icon" />
                  </div>
                  <h3 className="title">{t("info.address.title")}</h3>
                  <p>8502 Preston Rd. Inglewood, Maine 98380</p>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="contact-box style1 border-0">
                  <div className="contact-icon">
                    <img className="rounded-circle" src="/assets/img/icon/clock2.png" alt="icon" />
                  </div>
                  <h3 className="title">{t("info.time.title")}</h3>
                  <p style={{ whiteSpace: "pre-line" }}>
                    {t("info.time.content")}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="contact-form-section style2 section-padding pt-0 fix">
        <div className="contact-form-wrapper style2">
          <div className="container">
            <div className="contact-form style2">
              <h2>{t("form.title")}</h2>

              <form className="row">
                <div className="col-md-6">
                  <input className="bg-color2" placeholder={t("form.name")} />
                </div>
                <div className="col-md-6">
                  <input className="bg-color2" type="email" placeholder={t("form.email")} />
                </div>
                <div className="col-md-6">
                  <input className="bg-color2" type="number" placeholder={t("form.phone")} />
                </div>
                <div className="col-md-6">
                  <select className="single-select bg-color2">
                    <option>{t("form.subject")}</option>
                    <option>{t("form.subjects.complain")}</option>
                    <option>{t("form.subjects.greetings")}</option>
                    <option>{t("form.subjects.date")}</option>
                    <option>{t("form.subjects.price")}</option>
                    <option>{t("form.subjects.order")}</option>
                  </select>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control bg-color2"
                    rows="5"
                    placeholder={t("form.message")}
                  />
                </div>
                <div className="col-12 form-group">
                  <input id="reviewcheck" type="checkbox" />
                  <label htmlFor="reviewcheck">
                    {t("form.agree")}
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="col-12 form-group mb-0">
                  <button className="theme-btn w-100">
                    {t("form.submit")}{" "}
                    <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="map-wrapper contact-area-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          height="550"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact4;
