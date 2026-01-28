import About2 from "../Components/About/About2";
import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import CtaBanner1 from "../Components/CtaBanner/CtaBanner1";
import Offer4 from "../Components/Offer/Offer4";
import Team1 from "../Components/Team/Team1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const AboutPage = () => {
    return (
        <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="About Us"
            ></BreadCumb>   
            <Offer4></Offer4>
            <About2></About2>
            <CtaBanner1></CtaBanner1>
            <Team1></Team1>
            <Testimonial1></Testimonial1>
            <Blog1></Blog1>
        </div>
    );
};

export default AboutPage;