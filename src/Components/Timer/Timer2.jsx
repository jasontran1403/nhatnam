import { Link } from "react-router-dom";

const Timer2 = () => {
    return (
        <div className="timer-section section-padding pt-0 fix">
        <div className="timer-wrapper style1">
            <div className="container">
                <div className="timer-wrap style1">
                    <div className="shape1 d-none d-xxl-block"><img className="cir36" src="/assets/img/shape/timerShape1_1.svg"
                            alt="shape" /></div>
                    <div className="shape2 d-none d-xxl-block"><img src="/assets/img/shape/timerShape1_2.svg" alt="shape" />
                    </div>
                    <div className="shape3 d-none d-xxl-block"><img src="/assets/img/shape/timerShape1_3.svg" alt="shape" />
                    </div>
                    <div className="container">
                        <div className="row gy-4 gx-134">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="timer-thumb  timer-thumb2-area wow fadeInUp" data-wow-delay="0.3s">
                                    <img src="/assets/img/timer/timerThumb1_1.png" alt="thumb" />
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="timer-card style1 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="title-area">
                                        <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                            <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />Special
                                            Offer<img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                                        </div>
                                        <h2 className="title text-white wow fadeInUp" data-wow-delay="0.7s">
                                            Get 30% Discount Every Item
                                        </h2>
                                    </div>
                                    <div className="clock-wrapper">
                                        <div className="clock">
                                            <div className="number" id="days">326</div>
                                            <div className="text">days</div>
                                        </div>
                                        <div className="clock">
                                            <div className="number" id="hours">11</div>
                                            <div className="text">hrs</div>
                                        </div>
                                        <div className="clock">
                                            <div className="number" id="minutes">44</div>
                                            <div className="text">mins</div>
                                        </div>
                                        <div className="clock">
                                            <div className="number" id="seconds">26</div>
                                            <div className="text">secs</div>
                                        </div>
                                    </div>

                                    <div className="btn-wrap">
                                        <Link className="theme-btn" to="/menu">ORDER NOW <i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Timer2;