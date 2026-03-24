import GalleryCollection from "./ProductsGallery";

const GallerySausage = () => {
  const colClasses = [
    "col-lg-5 col-md-6",
    "col-lg-4 col-md-6",
    "col-lg-3 col-md-6",
    "col-lg-4 col-md-6",
    "col-lg-4 col-md-6",
    "col-lg-4 col-md-6",
    "col-lg-4 col-md-6",
    "col-lg-4 col-md-6",
    "col-lg-4 col-md-6",
    "col-lg-5 col-md-6",
    "col-lg-4 col-md-6",
    "col-lg-3 col-md-6",
  ];

  return (
    <GalleryCollection
      translationKey="gallery.sausage"
      imagePrefix="/assets/img/gallery/gallerySauSage_"
      detailLabel="Sausage Collection"
      cardClassName="gallery-product-card"
      colClasses={colClasses}
    />
  );
};

export default GallerySausage;