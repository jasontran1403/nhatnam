import SellerProductManagement from "../Components/Blog/SellerProductManagement";
import BreadCumb from "../Components/Common/BreadCumb";

const ProductManagement = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Product Management"
            ></BreadCumb>
            <SellerProductManagement></SellerProductManagement>
        </div>
    );
};

export default ProductManagement;