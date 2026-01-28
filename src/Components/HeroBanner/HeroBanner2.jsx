import { Link } from "react-router-dom";
import Slider from "react-slick";

const HeroBanner2 = () => {

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

    const heroContent = [
        {img:'/assets/img/banner/bannerThumb2_1.png', subtitle:'WELCOME FRESHEAT', title:'SPICY FRIED CHICKEN', btnname:'ORDER NOW'},
        {img:'/assets/img/banner/bannerThumb2_2.png', subtitle:'WELCOME FRESHEAT', title:'SPICY FRIED NOODLES', btnname:'ORDER NOW'},
        {img:'/assets/img/banner/bannerThumb2_3.png', subtitle:'WELCOME FRESHEAT', title:'SPICY FRIED PASTA', btnname:'ORDER NOW'},
      ]; 

    return (
        <section className="banner-section fix">
        <div className="slider-area">
            <div className="swiper banner2-slider">
                <div className="swiper-wrapper">
                <Slider {...settings}>
                {heroContent.map((item, i) => (
                    <div key={i} className="swiper-slide">
                        <div className="banner-wrapper style2 bg-img">
                            <div className="shape1_1 d-none d-xxl-block float-bob-x" data-animation="slideInLeft"
                                data-duration="2s" data-delay=".3s"><img src="/assets/img/shape/bannerShape2_1.svg"
                                    alt="shape" /></div>
                            <div className="shape1_2 d-none d-xxl-block float-bob-y" data-animation="slideInLeft"
                                data-duration="2s" data-delay=".3s"><img src="/assets/img/shape/bannerShape2_2.svg"
                                    alt="shape" /></div>
                            <div className="shape1_3 d-none d-xxl-block" data-animation="slideInLeft" data-duration="3s"
                                data-delay="2s"><img src="/assets/img/shape/bannerShape2_3.svg" alt="shape" /></div>
                            <div className="shape1_4 d-none d-xxl-block float-bob-x" data-animation="slideInLeft"
                                data-duration="2s" data-delay=".3s"><img src="/assets/img/shape/bannerShape2_4.svg"
                                    alt="shape" /></div>
                            <div className="shape1_5 d-none d-xxl-block float-bob-y" data-animation="slideInLeft"
                                data-duration="2s" data-delay=".3s"><img src="/assets/img/shape/bannerShape2_5.svg"
                                    alt="shape" /></div>
                            <div className="shape1_6 d-none d-xxl-block cir36"><img
                                    src="/assets/img/shape/bannerShape1_6.svg" alt="shape" /></div>
                            <div className="overlay"></div>
                            <div className="banner-container">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-xxl-6">
                                            <div className="banner-title-area">
                                                <div className="banner-style1">
                                                    <div className="section-title">
                                                        <h6 className="sub-title" data-animation="slideInRight"
                                                            data-duration="2s" data-delay=".3s"> {item.subtitle} </h6>
                                                        <h1 className="title" data-animation="slideInRight"
                                                            data-duration="2s" data-delay=".5s">
                                                            {item.title}
                                                        </h1>
                                                        <Link className="theme-btn" to="/menu"
                                                            data-animation="slideInRight" data-duration="2s"
                                                            data-delay=".7s">{item.btnname} <i className="bi bi-arrow-right"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-xl-6 d-none d-xxl-block">
                                            <div className="banner-thumb-area" data-tilt data-animation="slideInRight"
                                                data-duration="2s" data-delay=".9s">
                                                <img src={item.img} alt="shape" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                    </Slider>

                </div>

                <div className="arrow-prev2"><img src="/assets/img/icon/arrowPrev.svg" alt="Icon" /></div>
                <div className="arrow-next2"><img src="/assets/img/icon/arrowNext.svg" alt="Icon" /></div>
                <div className="pagination-className2 swiper-pagination"></div>
            </div>
        </div>
    </section>
    );
};

export default HeroBanner2;