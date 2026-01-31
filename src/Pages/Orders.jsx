import OrderList from "../Components/Blog/OrderList";
import BreadCumb from "../Components/Common/BreadCumb";
import ProtectedContent from "../Layout/ProtectedContent";
import { useTranslation } from "react-i18next";

const Orders = () => {
  const { t } = useTranslation("admin_product");
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/breadcumb.jpg"
        Title={t("order_title")}
      ></BreadCumb>
      <ProtectedContent message={t("title_protect")}>
        <OrderList></OrderList>
      </ProtectedContent>
    </div>
  );
};

export default Orders;
