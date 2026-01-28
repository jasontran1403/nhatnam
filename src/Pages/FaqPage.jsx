import BreadCumb from "../Components/Common/BreadCumb";
import Faq2 from "../Components/Faq/Faq2";

const FaqPage = () => {
    return (
        <div>
              <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Faq"
            ></BreadCumb>   
            <Faq2></Faq2>         
        </div>
    );
};

export default FaqPage;