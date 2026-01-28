import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";

const About2 = () => {

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };

    return (
<section className="about-us-section fix section-padding pt-0">
        <div className="about-wrapper style2">
            <div className="shape1 d-none d-xxl-block"><img src="/assets/img/shape/aboutShape2_1.png" alt="shape" /></div>
            <div className="container">
                <div className="about-us section-padding">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                            <div className="about-thumb mb-5 mb-lg-0">
                                <img src="/assets/img/about/aboutThumb2_1.png" alt="thumb" />
                                <div className="video-wrap">
                                    <a onClick={handelClick} 
                                        className="play-btn popup-video"><img className="cir36"
                                            src="/assets/img/shape/player.svg" alt="icon" /></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="title-area">
                                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                                    <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />About US<img
                                        className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                                </div>
                                <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                    Variety of flavours from american cuisine
                                </h2>
                                <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">Every dish is not just
                                    prepared it is a crafted with a savor the a utmost precision and a deep understanding
                                    sdf of flavor harmony. The experienced hands of our chefs</div>
                            </div>
                            <div className="fancy-box-wrapper">
                                <div className="fancy-box">
                                    <div className="item"><img src="/assets/img/icon/aboutIcon1_1.svg" alt="icon" /></div>
                                    <div className="item">
                                        <h6>super quality food</h6>
                                        <p>Served our Testy Food & good food by friendly</p>
                                    </div>
                                </div>
                                <div className="fancy-box">
                                    <div className="item"><img src="/assets/img/icon/aboutIcon1_2.svg" alt="icon" /></div>
                                    <div className="item">
                                        <h6>Qualified Chef</h6>
                                        <p>Served our Testy Food & good food by friendly</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="marquee-wrapper style-1 text-slider section-padding pt-0">
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
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal> 

    </section>
    );
};

export default About2;