import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const Team1 = () => {
  const { t } = useTranslation("about");

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 6 } },
      { breakpoint: 1199, settings: { slidesToShow: 4 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  // Giữ data như cũ, chỉ đổi "content" sang key role để dịch
  const teamItems = [
    { img: "/assets/img/chefe/chefeThumb1_1.png", title: "Ralph Edwards", roleKey: "chef_lead", facebook: "#", linkedin: "#" },
    { img: "/assets/img/chefe/chefeThumb1_2.png", title: "Leslie Alexander", roleKey: "chef_assistant", facebook: "#", linkedin: "#" },
    { img: "/assets/img/chefe/chefeThumb1_3.png", title: "Ronald Richards", roleKey: "chef_assistant", facebook: "#", linkedin: "#" },
  ];

  const logoItems = [
    { img: "/assets/img/logo/clientLogo1_1.png" },
    { img: "/assets/img/logo/clientLogo1_2.png" },
    { img: "/assets/img/logo/clientLogo1_3.png" },
    { img: "/assets/img/logo/clientLogo1_4.png" },
    { img: "/assets/img/logo/clientLogo1_5.png" },
    { img: "/assets/img/logo/clientLogo1_6.png" },
    { img: "/assets/img/logo/clientLogo1_1.png" },
    { img: "/assets/img/logo/clientLogo1_2.png" },
  ];

  return (
    <section className="chefe-section fix section-padding">
      <div className="chefe-wrapper style1">
        <div className="shape1 d-none d-xxl-block">
          <img className="float-bob-y" src="/assets/img/shape/chefeShape1_1.png" alt="shape" />
        </div>
        <div className="shape2 d-none d-xxl-block">
          <img className="float-bob-x" src="/assets/img/shape/chefeShape1_2.png" alt="shape" />
        </div>

        <div className="container">
          <div className="title-area">
            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
              <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
              {t("team.subtitle")}
              <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
            </div>

            <h2 className="title  wow fadeInUp" data-wow-delay="0.7s">
              {t("team.title")}
            </h2>
          </div>

          <div className="chefe-card-wrap style1 pb-5">
            <div className="row">
              {teamItems.map((item, i) => (
                <div key={i} className="col-lg-6 col-xl-4">
                  <div className="chefe-card style1 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="chefe-thumb">
                      <img src={item.img} alt="thumb" />
                    </div>

                    <div className="icon">
                      <Link className="hovered-icon" to={item.facebook}>
                        <i className="bi bi-facebook"></i>
                      </Link>

                      {/* giữ nguyên icon/share, chỉ thêm aria-label để song ngữ */}
                      <a href="#" aria-label={t("team.share")}>
                        <i className="bi bi-share"></i>
                      </a>

                      <Link className="hovered-icon" to={item.linkedin}>
                        <i className="bi bi-linkedin"></i>
                      </Link>
                    </div>

                    <div className="chefe-content">
                      <Link to="/chef/chef-details">
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{t(`team.roles.${item.roleKey}`)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-area pt-5 mt-4 wow fadeInUp" data-wow-delay="0.5s">
            <div className="swiper clientSliderOne">
              <div className="swiper-wrapper">
                <Slider {...settings}>
                  {logoItems.map((item, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="client-img text-center">
                        <img src={item.img} alt="logo" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team1;
