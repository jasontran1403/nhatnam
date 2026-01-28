import { Link } from "react-router-dom";

const Gallery2 = () => {

    const brandContent = [
        {img:'/assets/img/gallery/galleryThumb2_1.jpg',addclass:'col-lg-5'},
        {img:'/assets/img/gallery/galleryThumb2_2.jpg',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/galleryThumb2_3.jpg',addclass:'col-lg-3'},
        {img:'/assets/img/gallery/galleryThumb2_4.jpg',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/galleryThumb2_5.jpg',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/galleryThumb2_6.jpg',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/galleryThumb2_7.jpg',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/galleryThumb2_8.jpg',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/galleryThumb2_9.jpg',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/galleryThumb2_10.jpg',addclass:'col-lg-5'},
        {img:'/assets/img/gallery/galleryThumb2_11.jpg',addclass:'col-lg-4'},
        {img:'/assets/img/gallery/galleryThumb2_12.jpg',addclass:'col-lg-3'},

      ];

    return (
        <div className="gallery-section section-padding fix">
        <div className="container">
            <div className="row gy-4 mb-4">
            {brandContent.map((item, i) => (
                <div key={i} className={item.addclass}>
                    <div className="gallery-thumb style2">
                        <Link to="/menu">
                            <img src={item.img} alt="thumb" />
                            <div className="icon"><img src="/assets/img/icon/arrow_icon.png" alt="icon" /></div>
                        </Link>
                    </div>
                </div>
                ))}
            
            </div>
        </div>
    </div>
    );
};

export default Gallery2;