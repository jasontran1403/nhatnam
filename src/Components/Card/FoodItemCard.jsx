import { Link } from "react-router-dom";

const FoodItemCard = ({img,title,content,price}) => {
    return (
        <div className="single-menu-items">
        <div className="details">
            <div className="menu-item-thumb"><img src={img}
                    alt="thumb"/></div>
            <div className="menu-content">
                <Link to="/menu">
                    <h3>{title}</h3>
                </Link>
                <p>{content}</p>
            </div>
        </div>
        <h6>{price}</h6>
    </div>
    );
};

export default FoodItemCard;