import { Link } from "react-router-dom";

const CtaBanner2 = () => {
    return (
        <section className="cta-section fix">
        <div className="cta-wrapper  section-padding pt-xl-0 pb-xl-0 style2">
            <div className="shape1 float-bob-x d-none d-xxl-block"><img src="/assets/img/shape/ctaShape2_1.png" alt="shape" />
            </div>
            <div className="shape2 float-bob-y d-none d-xxl-block"><img src="/assets/img/shape/ctaShape2_2.png" alt="shape" />
            </div>
            <div className="shape3 float-bob-y d-none d-xxl-block"><img src="/assets/img/shape/ctaShape2_3.png" alt="shape" />
            </div>
            <div className="shape4   d-none d-xxl-block"><img src="/assets/img/shape/ctaShape2_4.png" alt="shape" /></div>
            <div className="shape5   d-none d-xxl-block"><img src="/assets/img/shape/ctaShape2_5.png" alt="shape" /></div>
            <div className="shape6   d-none d-xxl-block"><img src="/assets/img/shape/ctaShape2_6.png" alt="shape" /></div>
            <div className="shape7   d-none d-xxl-block"><img className="cir36" src="/assets/img/shape/ctaShape2_7.png"
                    alt="shape" /></div>
            <div className="container">
                <div className="cta-wrap style2">
                    <div className="row">
                        <div className="col-xl-6  d-flex align-items-center  order-2 order-xl-1">
                            <div className="cta-content">
                                <h6 className="wow fadeInUp" data-wow-delay="0.5s">WELCOME NHATNAMFOOD</h6>
                                <h3 className="wow fadeInUp" data-wow-delay="0.7s">TODAY SPACIAL FOOD</h3>
                                <p className="wow fadeInUp" data-wow-delay="0.8s">limits Time Offer</p>
                                <Link className="theme-btn wow fadeInUp" data-wow-delay="0.9s" to="/menu">ORDER NOW <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div
                            className="col-xl-6 d-flex align-items-center justify-content-center justify-content-xl-end order-1 order-xl-2">
                            <div className="cta-thumb">
                                <img className="img-fluid float-bob-x" src="/assets/img/cta/ctaThumb2_1.png" alt="thumb" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
};

export default CtaBanner2;