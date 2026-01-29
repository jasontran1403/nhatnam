import OrderItem from "../Components/Blog/OrderItem";
import OrderList from "../Components/Blog/OrderList";
import BreadCumb from "../Components/Common/BreadCumb";

const Orders = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Orders"
            ></BreadCumb>
            <OrderList></OrderList>
        </div>
    );
};

export default Orders;