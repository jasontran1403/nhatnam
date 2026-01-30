import BreadCumb from "../Components/Common/BreadCumb";
import Checkout from "../Components/Shop/Checkout";
import ProtectedContent from "../Layout/ProtectedContent";

const CheckoutPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Checkout"
            ></BreadCumb>
            <ProtectedContent message="Bạn cần đăng nhập để xem tài nguyên này">
                <Checkout></Checkout>
            </ProtectedContent>
        </div>
    );
};

export default CheckoutPage;