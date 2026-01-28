import BreadCumb from "../Components/Common/BreadCumb";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import Testimonial4 from "../Components/Testimonial/Testimonial4";

const TestimonialPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Testimonial"
            ></BreadCumb>    
            <Testimonial4></Testimonial4> 
            <Testimonial1></Testimonial1>    
        </div>
    );
};

export default TestimonialPage;