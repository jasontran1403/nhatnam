import BreadCumb from "../Components/Common/BreadCumb";
import Wishlist from "../Components/Shop/Wishlist";

const WishlistPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Wishlist"
            ></BreadCumb>   
            <Wishlist></Wishlist>         
        </div>
    );
};

export default WishlistPage;