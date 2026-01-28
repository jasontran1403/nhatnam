import { Link } from "react-router-dom";
import Slider from "react-slick";

const FeatureCategory1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

      const foodItems = [
        {img:'/assets/img/dishes/dishes3_1.jpg', title:'Chicken Burger', content:'13+ Varieties'},      
        {img:'/assets/img/dishes/dishes3_2.jpg', title:'Chinese Pasta', content:'10+ Varieties'},      
        {img:'/assets/img/dishes/dishes3_3.jpg', title:'Chicken Pizza', content:'15+ Varieties'},      
        {img:'/assets/img/dishes/dishes3_4.jpg', title:'Grilled Chicken', content:'30+ Varieties'},      
        {img:'/assets/img/dishes/dishes3_5.jpg', title:'Chicken Grille', content:'10+ Varieties'},      
        {img:'/assets/img/dishes/dishes3_1.jpg', title:'Chinese Pasta', content:'10+ Varieties'},      
      ]; 

    return (
<section className="popular-dishes-section fix section-padding">
        <div className="popular-dishes-wrapper style3">
            <div className="shape1 d-none d-xxl-block"><img src="/assets/img/shape/dishesShape3_1.png" alt="shape" /></div>
            <div className="shape2 d-none d-xxl-block"><img src="/assets/img/shape/dishesShape3_2.png" alt="shape" /></div>
            <div className="container1">
                <div className="title-area">
                    <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                        <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />POPULAR DISHES<img className="ms-1"
                            src="/assets/img/icon/titleIcon.svg" alt="icon" />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                        Our feature category
                    </h2>
                </div>

                <div className="slider-area">
                    <div className="swiper popularDishesSliderOne">
                        <div className="swiper-wrapper cs_slider_gap_301">
                        <Slider {...settings}>
                        {foodItems.map((item, i) => (
                            <div key={i} className="swiper-slide">
                                <div className="dishes-card style3">
                                    <div className="dishes-thumb">
                                        <img src={item.img} alt="thumb" /> 
                                        <div className="view-more">
                                            <Link to="/menu">
                                                <h3> VIEW MORE </h3>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="dishes-content">
                                        <Link to="/menu">
                                            <h3>{item.title}</h3>
                                        </Link>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="marquee-wrapper style-1 text-slider section-padding pt-0 mt-5">
            <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                    <li className="marquee-item style1">
                        <span className="text-slider"></span><span className="text-slider text-style">chicken pizza</span>
                        <span className="text-slider"></span><span className="text-slider text-style">GRILLED CHICKEN</span>
                        <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN PIZZA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">chicken pizza</span>
                        <span className="text-slider"></span><span className="text-slider text-style">GRILLED CHICKEN</span>
                        <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN PIZZA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    );
};

export default FeatureCategory1;