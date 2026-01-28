import { Link } from "react-router-dom";

const ShopCard = ({ img, title, content, price, id }) => {
    return (
        <div className="dishes-card style2 wow fadeInUp" data-wow-delay="0.2s">
            <div className="dishes-thumb">
                <img src={img} alt="thumb" />
                <div className="circle-shape">
                    <img className="cir36" src="/assets/img/food-items/circleShape.png" alt="shape" />
                </div>
            </div>
            <div className="dishes-content">
                <Link to={`/details/${id}`}>
                    <h3>{title}</h3>
                </Link>
                <div className="star">
                    <img src="/assets/img/icon/star2.svg" alt="icon" />
                </div>
                <div className="text">{content}</div>
                <h6>{price}</h6>
                <Link to={`/details/${id}`} className="theme-btn style6">
                    Order Now <i className="bi bi-basket2"></i>
                </Link>
            </div>
        </div>
    );
};

export default ShopCard;