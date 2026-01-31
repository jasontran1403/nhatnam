// CartPage.jsx
import BreadCumb from "../Components/Common/BreadCumb";
import Cart from "../Components/Shop/Cart";
import ProtectedContent from "../Layout/ProtectedContent";
import { useTranslation } from "react-i18next";


const CartPage = () => {
    const { t } = useTranslation("admin_product");
  
  return (
    <div>
      <BreadCumb bgimg="/assets/img/bg/breadcumb.jpg" Title={t("cart_title")} />

      <ProtectedContent message="Bạn cần đăng nhập để xem tài nguyên này">
        <Cart />
      </ProtectedContent>
    </div>
  );
};

export default CartPage;