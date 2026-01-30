import SellerProductManagement from "../Components/Blog/SellerProductManagement";
import BreadCumb from "../Components/Common/BreadCumb";
import ProtectedContent from "../Layout/ProtectedContent";

const ProductManagement = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Product Management"
            ></BreadCumb>
            <ProtectedContent message="Bạn cần đăng nhập để xem tài nguyên này">
                <SellerProductManagement></SellerProductManagement>
            </ProtectedContent>
        </div>
    );
};

export default ProductManagement;