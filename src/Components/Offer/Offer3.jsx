import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Offer3 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
        <div className="offer-section section-padding fix bg-color2" >
        <div className="offer-shape">
            <img src="/assets/img/offer/offer-shape.png" alt="img" />
        </div>
        <div className="offer-wrapper3">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6">
                        <div className="offer-card style1 rounded-5 wow fadeInUp" data-wow-delay="0.5s" data-background="/assets/img/bg/offerBG2_2.jpg"
                            >
                            <div className="offer-content">
                                <h6>start price $28</h6>
                                <h3>special chicken roll</h3>
                                <p>limits Time Offer</p>
                                <Link to="/menu" className="theme-btn style4">
                                    ORDER NOW <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                            <div className="offer-thumb">
                                <img className="thumbImg" src="/assets/img/offer/offerThumb1_3.png" alt="thumb" />
                                <div className="shape float-bob-x"><img src="/assets/img/shape/offerShape1_4.png"
                                        alt="shape" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="offer-card style1  rounded-5  wow fadeInUp" data-wow-delay="0.7s" data-background="/assets/img/bg/offerBG2_3.jpg"
                           >
                            <div className="offer-content">
                                <h6 className="text-white">start price $55</h6>
                                <h3>SPICY FRIED CHICKEN</h3>
                                <p className="text-white">limits Time Offer</p>
                                <Link to="/menu" className="theme-btn style4">
                                    ORDER NOW <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                            <div className="offer-thumb">
                                <img className="thumbImg" src="/assets/img/offer/offerThumb1_1.png" alt="thumb" />
                                <div className="shape float-bob-x"><img src="/assets/img/shape/offerShape1_4.png"
                                        alt="shape" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Offer3;