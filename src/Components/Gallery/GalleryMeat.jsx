import GalleryCollection from "./ProductsGallery";

const GalleryMeat = () => {
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
      translationKey="gallery.meat"
      imagePrefix="/assets/img/gallery/galleryMeat_"
      detailLabel="Meat Collection"
      cardClassName="gallery-card-sausage"
      colClasses={colClasses}
    />
  );
};

export default GalleryMeat;