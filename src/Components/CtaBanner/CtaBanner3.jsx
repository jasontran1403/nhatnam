import { Link } from "react-router-dom";

const CtaBanner3 = () => {
    return (
<section className="cta-section style-white fix">
        <div className="cta-wrapper style3">
            <div className="container">
                <div className="cta-wrap  section-padding pt-xl-0 pb-xl-0 style3">
                    <div className="shape1 float-bob-x d-none d-xxl-block"><img src="/assets/img/shape/ctaShape3_1.png"
                            alt="shape"/></div>
                    <div className="shape2 float-bob-y d-none d-xxl-block"><img src="/assets/img/shape/ctaShape3_2.png"
                            alt="shape"/></div>
                    <div className="shape3 float-bob-y d-none d-xxl-block"><img src="/assets/img/shape/ctaShape3_3.png"
                            alt="shape"/></div>
                    <div className="shape4 d-none d-xxl-block"><img src="/assets/img/shape/ctaShape3_4.png" alt="shape"/>
                    </div>
                    <div className="shape5 d-none d-xxl-block"><img src="/assets/img/shape/ctaShape3_5.png" alt="shape"/>
                    </div>
                    <div className="shape6 d-none d-xxl-block"><img className="cir36" src="/assets/img/shape/ctaShape3_6.png"
                            alt="shape"/></div>
                    <div className="shape7 d-none d-xxl-block"><img src="/assets/img/shape/ctaShape3_7.png" alt="shape" />
                    </div>
                    <div className="row g-5">
                        <div className="col-xl-6  d-flex align-items-center justify-content-center order-2 order-xl-1">
                            <div className="cta-content">
                                <h6 className="text-white wow fadeInUp" data-wow-delay="0.5s"><img className="me-1"
                                        src="/assets/img/icon/titleIconWhite.svg" alt="icon"/>DOWNLOAD APP<img
                                        className="ms-1" src="/assets/img/icon/titleIconWhite.svg" alt="icon"/></h6>
                                <h3 className="wow fadeInUp" data-wow-delay="0.7s">Download food app Order today!</h3>
                                <div className="btn-wrapper d-md-flex align-items-center gap-2">
                                    <div className="btns">
                                        <Link className="apple-btn wow fadeInUp" data-wow-delay="0.9s" to="https://www.apple.com/store">
                                            <div className="d-flex align-items-center   gap-2">
                                                <img src="/assets/img/icon/appleStore.svg" alt="icon"/>
                                                <div>
                                                    <span>Get it on</span>
                                                    <h6>App store</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="btns">
                                        <Link className="google-btn wow fadeInUp" data-wow-delay="0.9s" to="https://play.google.com/store/">
                                            <div className="d-flex align-items-center  gap-2">
                                                <img src="/assets/img/icon/playStore.svg" alt="icon"/>
                                                <div>
                                                    <span>Get it on</span>
                                                    <h6>Google play</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-6 d-flex align-items-center justify-content-center justify-content-xl-start order-1 order-xl-2">
                            <div className="cta-thumb">
                                <img className="img-fluid float-bob-x" src="/assets/img/cta/ctaThumb3_1.png" alt="thumb"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    );
};

export default CtaBanner3;