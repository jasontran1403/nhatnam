import { Link } from "react-router-dom";

const About3 = () => {
    return (
        <div className="about-section fix">
        <div className="about-wrapper section-padding  style3">
            <div className="shape1"><img className="float-bob-y" src="/assets/img/shape/aboutShape3_1.png" alt="shape"/></div>
            <div className="shape2"><img className="float-bob-x" src="/assets/img/shape/aboutShape3_2.png" alt="shape"/></div>
            <div className="orange-shape"><img src="/assets/img/about/orange-shape.png" alt="shape"/></div>
            <div className="container">
                <div className="row gx-60 gy-5">
                    <div className="col-xl-6">
                        <div className="about-thumb-img">
                            <img src="/assets/img/about/aboutThumb1_1.png" alt="thumb"/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-content">
                            <div className="title-area">
                                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                                    <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon"/> About Us <img
                                        className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon"/>
                                </div>
                                <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                    We Ensure Healthy & High-Quality Foods
                                </h2>
                                <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">It is a long established
                                    fact that a reader will be distracted lorem the readable content of a page when
                                    looking at layout the point lorem established fact that It is a long established
                                </div>
                            </div>
                            <div className="fancy-box-wrapper">
                                <div className="fancy-box">
                                    <div className="item"><img src="/assets/img/icon/aboutIcon2_1.svg" alt="icon"/></div>
                                    <div className="item">
                                        <h6>super quality food</h6>
                                        <p>Served our Testy Food &amp; good food by friendly</p>
                                    </div>
                                </div>
                                <div className="fancy-box">
                                    <div className="item"><img src="/assets/img/icon/aboutIcon2_2.svg" alt="icon"/></div>
                                    <div className="item">
                                        <h6>Qualified Chef</h6>
                                        <p>Served our Testy Food &amp; good food by friendly</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/about" className="theme-btn style4">
                                ABOUT US <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About3;