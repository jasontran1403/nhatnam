import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Faq2 = () => {
  const { t } = useTranslation("faq");

  const faqContent = t("items", { returnObjects: true });

  const accordionContentRef = useRef(null);
  const [openItemIndex, setOpenItemIndex] = useState(-1);
  const [firstItemOpen, setFirstItemOpen] = useState(true);

  const handleItemClick = (index) => {
    if (index === openItemIndex) setOpenItemIndex(-1);
    else setOpenItemIndex(index);
  };

  useEffect(() => {
    if (firstItemOpen) {
      setOpenItemIndex(0);
      setFirstItemOpen(false);
    }
  }, [firstItemOpen]);

  return (
    <div className="faq-section fix section-padding">
      <div className="container">
        <div className="title-area mb-45">
          <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
            <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
            {t("header.subtitle")}
            <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
          </div>
          <div className="title wow fadeInUp" data-wow-delay="0.7s">
            {t("header.title")}
          </div>
        </div>

        <div className="row gx-60">
          <div className="col-xl-5">
            <div className="faq-thumb w-100 h-100 fix rounded-3">
              <img
                className="w-100 h-100 rounded-3"
                src="/assets/img/dishes/burger.png"
                alt={t("imageAlt")}
              />
            </div>
          </div>

          <div className="col-xl-7">
            <div className="faq-content style-1 mt-5">
              <div className="faq-accordion">
                <div className="accordion" id="accordion">
                  {faqContent.map((item, index) => (
                    <div
                      key={index}
                      className={`accordion-item mb-3 ${index === openItemIndex ? "active" : ""}`}
                      data-wow-delay=".3s"
                    >
                      <h5 onClick={() => handleItemClick(index)} className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq1"
                          aria-expanded="true"
                          aria-controls="faq1"
                        >
                          {item.title}
                        </button>
                      </h5>

                      <div
                        ref={accordionContentRef}
                        id="faq1"
                        className="accordion-collapse"
                        data-bs-parent="#accordion"
                      >
                        <div className="accordion-body">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Faq2;
