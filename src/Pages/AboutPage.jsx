import About2 from "../Components/About/About2";
import Blog2 from "../Components/Blog/Blog2";
import BreadCumb from "../Components/Common/BreadCumb";
import CtaBanner1 from "../Components/CtaBanner/CtaBanner1";
import Offer4 from "../Components/Offer/Offer4";
import Team1 from "../Components/Team/Team1";
import Testimonial3 from "../Components/Testimonial/Testimonial3";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("admin_product");

  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/team1.jpg"
        Title={t("about_title")}
      ></BreadCumb>
      <Offer4></Offer4>
      <About2></About2>
      {/* <CtaBanner1></CtaBanner1> */}
      <Team1></Team1>
      <Testimonial3></Testimonial3>
      <Blog2></Blog2>
    </div>
  );
};

export default AboutPage;
