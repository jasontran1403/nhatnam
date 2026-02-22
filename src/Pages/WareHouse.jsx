import WareHouseList from "../Components/Blog/WareHouseList";
import BreadCumb from "../Components/Common/BreadCumb";
import ProtectedContent from "../Layout/ProtectedContent";
import { useTranslation } from "react-i18next";

const WareHouse = () => {
  const { t } = useTranslation("admin_product");
  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/breadcumb.jpg"
        Title={t("warehouse_title")}
      ></BreadCumb>
      <ProtectedContent message={t("title_protect")}>
        <WareHouseList></WareHouseList>
      </ProtectedContent>
    </div>
  );
};

export default WareHouse;
