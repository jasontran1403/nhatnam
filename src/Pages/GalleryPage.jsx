import BreadCumb from "../Components/Common/BreadCumb";
import Gallery2 from "../Components/Gallery/Gallery2";

const GalleryPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Gallery"
            ></BreadCumb>   
            <Gallery2></Gallery2>         
        </div>
    );
};

export default GalleryPage;