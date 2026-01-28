import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";

const Contact1 = () => {

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
<section className="contact-section fix bg-color3">
        <div className="contact-shape">
            <img src="/assets/img/shape/cta-shape.png" alt="img" />
        </div>
        <div className="contact-wrapper style1 section-padding ">
            <div className="shape"><img src="/assets/img/contact/contactThumb1_1.png" alt="thumb" /></div>
            <div className="shape2"><img src="/assets/img/contact/contactThumb1_2.jpg" alt="shape" /></div>
            <div className="container"> 
                <div className="row g-5 d-flex justify-content-center">
                    <div
                        className="col-xl-5 d-flex align-items-center justify-content-center justify-content-md-start z-3 order-2 order-xl-1">
                        <div className="contact-card-wrap">
                            <div className="title-area">
                                <div className="sub-title text-white text-start wow fadeInUp" data-wow-delay="0.5s">
                                    <img className="me-1" src="/assets/img/icon/titleIconWhite.svg" alt="icon" />CONTACT US<img
                                        className="ms-1" src="/assets/img/icon/titleIconWhite.svg" alt="icon" />
                                </div>
                                <h2 className="title text-start text-white wow fadeInUp" data-wow-delay="0.7s">
                                    Meet Our Expert Chefe
                                </h2>
                            </div>

                            <div className="contact-form style1">
                                <form className="row g-3">
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                        <label htmlFor="date" className="form-label">Select Date*</label>
                                        <input type="date" className="form-control" id="date" required />
                                    </div>
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                                        <label htmlFor="time" className="form-label">Select Time*</label>
                                        <input type="time" className="form-control" id="time" required />
                                    </div>
                                    <div className="col-md-12 wow fadeInUp" data-wow-delay="0.6s">
                                        <label htmlFor="service" className="form-label">Type Of Service*</label>
                                        <input className="form-control" id="service" placeholder="Total Guests" required />
                                    </div>
                                    <div className="col-md-12 wow fadeInUp" data-wow-delay="0.8s">
                                        <label htmlFor="message" className="form-label">Your Message</label>
                                        <textarea id="message" className="form-control"
                                            placeholder="Write your message here..." rows="5"></textarea>
                                    </div>
                                    <div className="col-12 wow fadeInUp" data-wow-delay="0.9s">
                                        <button type="submit" className="theme-btn style5">
                                            BOOK A TABLE<i className="bi bi-arrow-right"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>


                        </div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center justify-content-center justify-content-md-center order-1 order-xl-2 wow fadeInUp"
                        data-wow-delay="0.2s">
                        <div className="video-wrap">
                            <a onClick={handelClick} className="play-btn popup-video"><img
                                    className="cir36" src="/assets/img/shape/player.svg" alt="icon" /></a>
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

export default Contact1;