import BreadCumb from "../Components/Common/BreadCumb";
import Contact4 from "../Components/Contact/Contact4";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation("admin_product");

  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/bg/breadcumb.jpg"
        Title={t("contact_title")}
      ></BreadCumb>
      <Contact4></Contact4>
    </div>
  );
};

export default ContactPage;
