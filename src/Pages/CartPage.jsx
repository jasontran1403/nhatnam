// CartPage.jsx
import BreadCumb from "../Components/Common/BreadCumb";
import Cart from "../Components/Shop/Cart";
import ProtectedContent from "../Layout/ProtectedContent";

const CartPage = () => {
  return (
    <div>
      <BreadCumb bgimg="/assets/img/bg/breadcumb.jpg" Title="Cart" />

      <ProtectedContent message="Bạn cần đăng nhập để xem tài nguyên này">
        <Cart />
      </ProtectedContent>
    </div>
  );
};

export default CartPage;