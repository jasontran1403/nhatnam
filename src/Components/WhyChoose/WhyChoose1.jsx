import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import { Link } from "react-router-dom";

const WhyChoose1 = () => {

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
<section className="history-section fix  bg-title">
        <div className="tree-shape">
            <img src="/assets/img/history/tree-shape.png" alt="img" />
        </div>
        <div className="container">
            <div className="history-wrapper style1">
                <div className="row gx-60">
                    <div className="col-lg-8">
                        <div className="history-thumb mt-5 mt-lg-0">
                            <img className="thumb" src="/assets/img/history/historyThumb1_1.jpg" alt="thumb" /> 


                            <div className="video-wrap ripple-effect">
                                <a onClick={handelClick} className="play-btn popup-video"><img
                                        className="playerImg" src="/assets/img/shape/player2.svg" alt="icon" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="history-content section-padding">
                            <div className="title-area mb-45">
                                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                                    <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" /> Why choose us <img
                                        className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                                </div>
                                <div className="title text-start text-white wow fadeInUp" data-wow-delay="0.7s">
                                    The history of our restaurant
                                </div>

                                <p className="text-white">It is a long established fact that a reader will be distracted the
                                    readable content of a page</p>
                            </div>

                            <div className="fancy-box style6">
                                <div className="item">
                                    <div className="icon">
                                        <img src="/assets/img/icon/wcuIcon2_1.png" alt="icon" />
                                    </div>

                                </div>
                                <div className="item">
                                    <h6 className="title">Buffet Service</h6>
                                    <p className="text">It is a long established fact that a reader will be distracted the
                                    </p>
                                </div>
                            </div>
                            <div className="fancy-box style6">
                                <div className="item">
                                    <div className="icon">
                                        <img src="/assets/img/icon/wcuIcon2_2.png" alt="icon" />
                                    </div>

                                </div>
                                <div className="item">
                                    <h6 className="title">Cook & Sarve Faster</h6>
                                    <p className="text">It is a long established fact that a reader will be distracted the
                                    </p>
                                </div>
                            </div>
                            <Link to="/menu" className="theme-btn style4">
                                ORDER NOW <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
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

export default WhyChoose1;