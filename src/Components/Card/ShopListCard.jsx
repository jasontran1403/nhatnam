import { Link } from "react-router-dom";

const ShopListCard = ({img,title,content,price}) => {
    return (
        <div className="dishes-card style4 wow fadeInUp" data-wow-delay="0.2s">
        <div className="dishes-thumb">
            <img src={img} alt="thumb" />
            <div className="circle-shape"><img className="cir36"
                    src="/assets/img/food-items/circleShape.png" alt="shape" /></div>
        </div>
        <div className="dishes-content">
            <Link to="/shop/shop-details">
                <h3>{title}</h3>
            </Link>
            <div className="icon">
                <a href="#"> <i className="fa-regular fa-heart"></i></a>
            </div>
            <div className="star"><img src="/assets/img/icon/star2.svg" alt="icon" /></div>
            <div className="text">{content}</div>
            <h6>{price}</h6>
            <Link to="/shop/shop-details" className="theme-btn style6"> Order Now <i className="bi bi-basket2"></i></Link>
        </div>
    </div>
    );
};

export default ShopListCard;