import { useParams } from "react-router-dom";
import BreadCumb from "../Components/Common/BreadCumb";
import ShopDetails from "../Components/ShopDetails/ShopDetails";

const ShopDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/breadcumb.jpg"
        Title="Chi Tiết Sản Phẩm"
      />
      <ShopDetails productId={id} />
    </div>
  );
};

export default ShopDetailsPage;