import SellerProductManagement from "../Components/Blog/SellerProductManagement";
import BreadCumb from "../Components/Common/BreadCumb";
import ProtectedContent from "../Layout/ProtectedContent";

import { useTranslation } from "react-i18next";

const ProductManagement = () => {
const { t } = useTranslation("admin_product");
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title={t("title")}
            ></BreadCumb>
            <ProtectedContent message={t("title_protect")}>
                <SellerProductManagement></SellerProductManagement>
            </ProtectedContent>
        </div>
    );
};

export default ProductManagement;