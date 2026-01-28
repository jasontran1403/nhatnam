import Slider from "react-slick";

const Brand1 = () => {

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
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
            }
          }
        ]
      };  

    const brandContent = [
        {img:'/assets/img/logo/clientLogo1_1.png'},
        {img:'/assets/img/logo/clientLogo1_2.png'},
        {img:'/assets/img/logo/clientLogo1_3.png'},
        {img:'/assets/img/logo/clientLogo1_4.png'},
        {img:'/assets/img/logo/clientLogo1_5.png'},
        {img:'/assets/img/logo/clientLogo1_6.png'},
      ];

    return (
<div className="brand-section-3 fix section-padding">
        <div className="container">
            <div className="slider-area wow fadeInUp" data-wow-delay="0.5s">
                <div className="swiper clientSliderOne">
                    <div className="swiper-wrapper">
                    <Slider {...settings}>
                    {brandContent.map((item, i) => (
                        <div key={i} className="swiper-slide">
                            <div className="client-img text-center"><img src={item.img}
                                    alt="logo" />
                            </div>
                        </div>
                        ))}
                    </Slider>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Brand1;