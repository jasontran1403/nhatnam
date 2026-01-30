import OrderList from "../Components/Blog/OrderList";
import BreadCumb from "../Components/Common/BreadCumb";
import ProtectedContent from "../Layout/ProtectedContent";

const Orders = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Orders"
            ></BreadCumb>
            <ProtectedContent message="Bạn cần đăng nhập để xem tài nguyên này">
                <OrderList></OrderList>
            </ProtectedContent>
        </div>
    );
};

export default Orders;