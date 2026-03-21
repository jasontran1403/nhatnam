import BreadCumb from "../Components/Common/BreadCumb";
import GallerySausage from "../Components/Gallery/GallerySausage";

const SausagePage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/sausage_breadcum.jpg"
                Title="Sausage"
            ></BreadCumb>   
            <GallerySausage></GallerySausage>         
        </div>
    );
};

export default SausagePage;