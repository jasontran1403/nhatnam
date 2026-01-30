import { useRef } from "react";
import Slider from "react-slick";

const Testimonial3 = () => {

     const settings = {
                dots: false,
                infinite: true,
                speed: 2000,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                swipeToSlide: true,
                autoplay: false,
                autoplaySpeed: 4000,        
                responsive: [
                  {
                    breakpoint: 1399,
                    settings: {
                      slidesToShow: 2,
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
    
              const tesItems = [
                {img:'/assets/img/testimonial/testimonialProfile3_1.png', title:'Albert Flores', designation:'Food Reviewer', content:'There are many variations digof passages of Lorem Ipsum available,d like digital agency but the majority have suffered nalteration in some form, by injected humour'},
                {img:'/assets/img/testimonial/testimonialProfile3_2.png', title:'Brooklyn', designation:'Food Reviewer', content:'There are many variations digof passages of Lorem Ipsum available,d like digital agency but the majority have suffered nalteration in some form, by injected humour'},
                {img:'/assets/img/testimonial/testimonialProfile3_1.png', title:'Albert Flores', designation:'Food Reviewer', content:'There are many variations digof passages of Lorem Ipsum available,d like digital agency but the majority have suffered nalteration in some form, by injected humour'},
                {img:'/assets/img/testimonial/testimonialProfile3_2.png', title:'Brooklyn', designation:'Food Reviewer', content:'There are many variations digof passages of Lorem Ipsum available,d like digital agency but the majority have suffered nalteration in some form, by injected humour'},                
              ];              

    return (
        <div className="testimonial-section section-padding pb-0 fix">
        <div className="testi-shape">
            <img src="/assets/img/testimonial/testi-shape.png" alt="img" />
        </div>
        <div className="testimonial-wrapper style3">
            <div className="container">
                <div className="title-area">
                    <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                        <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />Testimonials<img className="ms-1"
                            src="/assets/img/icon/titleIcon.svg" alt="icon" />
                    </div>
                    <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                        What Clients Say About Us
                    </h2>
                </div>

                <div className="slider-area">
                    <div className="swiper testmonialSliderThree">
                        <div className="swiper-wrapper cs_slider_gap_301">
                        <Slider ref={sliderRef} {...settings}>
                        {tesItems.map((item, i) => (
                            <div key={i} className="swiper-slide">
                                <div className="testimonial-card style3">
                                    <div className="testimomnial-thumb">
                                        <img src={item.img} alt="img" />
                                    </div>
                                    <div className="testimonial-body">
                                        <div className="icon"><img src="/assets/img/icon/star2.svg" alt="icon" /></div>

                                        <p>{item.content}</p>

                                        <div className="fancy-box">
                                            <div className="item2">
                                                <h6>{item.title}</h6>
                                                <p>{item.designation}</p>
                                            </div>
                                            <div className="quote"><img src="/assets/img/icon/quote.svg" alt="icon" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                ))}
                                </Slider>

                        </div>
                    </div>
                </div>

                <div className="btn-wrap">
                <div onClick={previous} className="arrow-prev"><i className="bi bi-arrow-left"></i></div>
                <div onClick={next} className="arrow-next"><i className="bi bi-arrow-right"></i></div>
                </div>

            </div>
        </div>
    </div>

    );
};

export default Testimonial3;