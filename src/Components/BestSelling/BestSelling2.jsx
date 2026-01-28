import { Link } from "react-router-dom";

const BestSelling2 = () => {

    const foodItems = [
        {img:'/assets/img/dishes/dishes2_1.png', title:'Chicken Pizza', content:'The registration fee', price:'$24.00'},    
        {img:'/assets/img/dishes/dishes2_2.png', title:'Egg and Cucumber', content:'The registration fee', price:'$28.00'},    
        {img:'/assets/img/dishes/dishes2_3.png', title:'Chicken Fried Rice', content:'The registration fee', price:'$20.00'},    
        {img:'/assets/img/dishes/dishes2_4.png', title:'Chicken Leg Piece', content:'The registration fee', price:'$58.00'},    
        {img:'/assets/img/dishes/dishes2_5.png', title:'Chinese Pasta', content:'The registration fee', price:'$70.00'},    
      ]; 


    return (
        <section className="popular-dishes-section fix section-padding pt-0">
        <div className="popular-dishes-wrapper-container">
            <div className="container">
                <div className="popular-dishes-wrapper style2 section-padding bg-white ">
                    <div className="shape1 float-bob-x d-none d-xxl-block"><img
                            src="/assets/img/shape/popularDishesShape1_1.png" alt="shape" /></div>
                    <div className="shape2 float-bob-x d-none d-xxl-block"><img
                            src="/assets/img/shape/popularDishesShape1_2.png" alt="shape" /></div>
                    <div className="container">
                        <div className="title-area">
                            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />POPULAR DISHES<img
                                    className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                Our Most Popular Deals
                            </h2>
                        </div>
                        <div className="dishes-card-wrap style1 mb-60">
                        {foodItems.map((item, i) => (
                            <div key={i} className="dishes-card style2 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="dishes-thumb">
                                    <img src={item.img} alt="thumb" />
                                    <div className="circle-shape"><img className="cir36"
                                            src="/assets/img/food-items/circleShape.png" alt="shape" /></div>
                                </div>
                                <div className="dishes-content">
                                    <Link to="/menu">
                                        <h3>{item.title}</h3>
                                    </Link>
                                    <div className="star"><img src="/assets/img/icon/star2.svg" alt="icon" /></div>
                                    <div className="text">{item.content}</div>
                                    <h6>{item.price}</h6>
                                    <Link to="/menu" className="theme-btn style6"> Order Now <i className="bi bi-basket2"></i></Link>
                                </div>
                            </div>
                             ))}
                        </div>
                        <div className="btn-wrapper">
                            <Link className="theme-btn" to="/menu"> VIEW ALL ITEM <i className="bi bi-arrow-right"></i></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
    );
};

export default BestSelling2;