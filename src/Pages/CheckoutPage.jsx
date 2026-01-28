import BreadCumb from "../Components/Common/BreadCumb";
import Checkout from "../Components/Shop/Checkout";

const CheckoutPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Checkout"
            ></BreadCumb>   
            <Checkout></Checkout>         
        </div>
    );
};

export default CheckoutPage;