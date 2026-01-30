import BreadCumb from "../Components/Common/BreadCumb";
import Wishlist from "../Components/Shop/Wishlist";
import ProtectedContent from "../Layout/ProtectedContent";

const WishlistPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Wishlist"
            ></BreadCumb>
            <ProtectedContent message="Bạn cần đăng nhập để xem tài nguyên này">
                <Wishlist></Wishlist>
            </ProtectedContent>
        </div>
    );
};

export default WishlistPage;