import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";

const Offer2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const offerItems = [
        {img:'/assets/img/offer/offerThumb1_2.png', bgimg:'/assets/img/bg/offerBG2_1.jpg', title1:'start price $25', title2:'TODAY SPACIAL FOOD', content:'limits Time Offer', addClass:'theme-btn style5'},      
        {img:'/assets/img/offer/offerThumb1_3.png', bgimg:'/assets/img/bg/offerBG2_2.jpg', title1:'start price $28', title2:'special chicken roll', content:'limits Time Offer', addClass:'theme-btn style4'},         
        {img:'/assets/img/offer/offerThumb1_1.png', bgimg:'/assets/img/bg/offerBG2_3.jpg', title1:'start price $55', title2:'SPICY FRIED CHICKEN', content:'limits Time Offer', addClass:'theme-btn style4'},         
      ]; 

    return (
<div className="offer-section fix bg-color2 mt-5">
        <div className="offer-wrapper">
            <div className="container">
                <div className="row gy-4">
                {offerItems.map((item, i) => (
                    <div key={i} className="col-lg-6 col-xl-4">
                        <div className="offer-card style1 wow fadeInUp" data-wow-delay="0.2s" data-background={item.bgimg}
                            >
                            <div className="offer-content">
                                <h6 className="text-white">{item.title1}</h6>
                                <h3>{item.title2}</h3>
                                <p className="text-white">{item.content}</p>
                                <Link to="/menu" className={item.addClass}>
                                    ORDER NOW <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                </Link>
                            </div>
                            <div className="offer-thumb">
                                <img className="thumbImg" src={item.img} alt="thumb" />
                                <div className="shape float-bob-x"><img src="/assets/img/shape/offerShape1_4.png"
                                        alt="shape" /></div>
                            </div>
                        </div>
                    </div>
                     ))}
                </div>
            </div>
        </div>
    </div>

    );
};

export default Offer2;