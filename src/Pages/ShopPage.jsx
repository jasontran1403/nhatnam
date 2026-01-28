import BreadCumb from "../Components/Common/BreadCumb";
import Shop1 from "../Components/Shop/Shop1";

const ShopPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Shop"
            ></BreadCumb>  
            <Shop1></Shop1>          
        </div>
    );
};

export default ShopPage;