import { useTranslation } from "react-i18next";

const Testimonial4 = () => {
  const { t } = useTranslation("testimonial");

  const layout = [
    { img: '/assets/img/testimonial/testimonialProfile1_1.png', addclass: 'col-lg-7' },
    { img: '/assets/img/testimonial/testimonialProfile1_2.png', addclass: 'col-lg-5' },
    { img: '/assets/img/testimonial/testimonialProfile1_3.png', addclass: 'col-lg-5' },
    { img: '/assets/img/testimonial/testimonialProfile1_4.png', addclass: 'col-lg-7' },
    { img: '/assets/img/testimonial/testimonialProfile1_5.png', addclass: 'col-lg-4' },
    { img: '/assets/img/testimonial/testimonialProfile1_6.png', addclass: 'col-lg-4' },
    { img: '/assets/img/testimonial/testimonialProfile1_7.png', addclass: 'col-lg-4' }
  ];

  const items = t("items", { returnObjects: true });

  return (
    <div className="testimonial-section section-padding fix">
      <div className="container">
        <div className="row gx-40">
          {items.map((item, i) => (
            <div key={i} className={layout[i]?.addclass || "col-lg-4"}>
              <div className="testimonial-card style1">
                <div className="testimonial-header">
                  <div className="fancy-box">
                    <div className="item1">
                      <img src={layout[i]?.img} alt={item.name} />
                    </div>
                    <div className="item2">
                      <h6>{item.name}</h6>
                      <p>{item.role}</p>
                      <div className="icon">
                        <img src="/assets/img/icon/star.svg" alt="icon" />
                      </div>
                    </div>
                    <div className="quote">
                      <img src="/assets/img/icon/quote.svg" alt="icon" />
                    </div>
                  </div>
                </div>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial4;
