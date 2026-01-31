import BreadCumb from "../Components/Common/BreadCumb";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import Testimonial4 from "../Components/Testimonial/Testimonial4";
import { useTranslation } from "react-i18next";


const TestimonialPage = () => {
  const { t } = useTranslation("admin_product");
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title={t("Testimonial_page")}
            ></BreadCumb>    
            <Testimonial4></Testimonial4> 
            <Testimonial1></Testimonial1>    
        </div>
    );
};

export default TestimonialPage;