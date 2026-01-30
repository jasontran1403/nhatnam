import Slider from "react-slick";
import parse from 'html-react-parser';
import { useRef } from "react";

const HeroBanneer3 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };  

    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };
    
    const previous = () => {
        sliderRef.current.slickPrev();
    }; 

    const heroContent = [
        {img:'/assets/img/shape/766 × 478.png', subtitle:'Sausage', title:'<span>SEA</span> FOODS', content:'Every dish is not just prepared it is a crafted with a savor the a utmost precision and a deep understanding sdf of flavor Every dish is not just prepared it is a crafted with a savor', location:'Rd. Santa Ana, Illinois 85486, United States'},
        {img:'/assets/img/shape/766 × 478_1.png', subtitle:'Rich', title:'<span>SEA</span> FOODS', content:'Every dish is not just prepared it is a crafted with a savor the a utmost precision and a deep understanding sdf of flavor Every dish is not just prepared it is a crafted with a savor', location:'Rd. Santa Ana, Illinois 85486, United States'},
        {img:'/assets/img/shape/766 × 478_3.png', subtitle:'Hela', title:'<span>SEA</span> FOODS', content:'Every dish is not just prepared it is a crafted with a savor the a utmost precision and a deep understanding sdf of flavor Every dish is not just prepared it is a crafted with a savor', location:'Rd. Santa Ana, Illinois 85486, United States'},

      ]; 

    return (
<section className="banner-section fix">
        <div className="slider-area">
            <div className="swiper banner3-slider">
                <div className="swiper-wrapper">
                <Slider ref={sliderRef} {...settings}>
                {heroContent.map((item, i) => (
                    <div key={i} className="swiper-slide">
                        <div className="banner-wrapper style3 bg-img">
                            <div className="shape1  d-none d-xxl-block" data-animation="slideInLeft" data-duration="2s"
                                data-delay=".3s">
                                <img className="float-bob-y" src="/assets/img/shape/bannerShape3_1.svg" alt="shape" />
                            </div>
                            <div className="shape2  d-none d-xxl-block" data-animation="slideInLeft" data-duration="2s"
                                data-delay=".5s">
                                <img className="float-bob-x" src="/assets/img/shape/bannerShape3_2.svg" alt="shape" />
                            </div>
                            <div className="shape3" data-tilt data-tilt-max="4"
                                data-animation="slideInLeft" data-duration="2s" data-delay=".8s">
                                <img src={item.img} alt="shape" />
                            </div>
                            <div className="shape4 d-none d-xxl-block" data-animation="slideInLeft" data-duration="2s"
                                data-delay="1s">
                                <img src="/assets/img/shape/bannerShape3_4.svg" alt="shape" />
                            </div>
                            <div className="shape2"></div>
                            <div className="overlay"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="banner-style3">
                                            <div className="subtitle" data-animation="slideInRight" data-duration="2s"
                                                data-delay=".3s">{item.subtitle}</div>
                                            <p data-animation="slideInRight" data-duration="2s" data-delay="2s">{item.content}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    </Slider>

                </div>

                <div onClick={previous} className="arrow-prev3"><img src="/assets/img/icon/arrowPrev.svg" alt="Icon" /></div>
                <div onClick={next} className="arrow-next3"><img src="/assets/img/icon/arrowNext.svg" alt="Icon" /></div>
                <div className="pagination-className3 swiper-pagination"></div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanneer3;