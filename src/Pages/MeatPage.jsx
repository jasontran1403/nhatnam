import BreadCumb from "../Components/Common/BreadCumb";
import GalleryMeat from "../Components/Gallery/GalleryMeat";

const MeatPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/meat_banner.png"
                Title="Meats Products"
            ></BreadCumb>   
            <GalleryMeat></GalleryMeat>         
        </div>
    );
};

export default MeatPage;