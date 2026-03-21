import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const GallerySausage = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [animateKey, setAnimateKey] = useState(0);
  const [direction, setDirection] = useState("next");

  const { t } = useTranslation("product");
  const galleryItems = t("gallery.sausage", { returnObjects: true });

  const colClasses = [
    "col-lg-5",
    "col-lg-4",
    "col-lg-3",
    "col-lg-4",
    "col-lg-4",
    "col-lg-4",
    "col-lg-4",
    "col-lg-4",
    "col-lg-4",
    "col-lg-5",
    "col-lg-4",
    "col-lg-3",
  ];

  const brandContent = galleryItems.map((item, index) => ({
    img: `/assets/img/gallery/gallerySauSage_${index + 1}.jpg`,
    addclass: [colClasses[index]],
    title: item.title,
    subtitle: item.subtitle,
    desc: item.desc,
  }));

  const handleClose = () => setCurrentIndex(null);

  const next = () => {
    setCurrentIndex((prev) =>
      prev === brandContent.length - 1 ? 0 : prev + 1,
    );
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? brandContent.length - 1 : prev - 1,
    );
  };

  // 🎯 keyboard control
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <>
      <div className="gallery-section section-padding fix">
        <div className="container">
          <div className="row gy-4 mb-4">
            {brandContent.map((item, i) => (
              <div key={i} className={item.addclass}>
                <div
                  className="gallery-product-card"
                  onClick={() => {
                    setDirection("next");
                    setAnimateKey((prev) => prev + 1);
                    setCurrentIndex(i);
                  }}
                >
                  <div className="gallery-thumb style2 gallery-popup-trigger">
                    <img src={item.img} alt={item.title} />
                    <div className="icon">
                      <img src="/assets/img/icon/arrow_icon.png" alt="icon" />
                    </div>
                  </div>

                  <div className="gallery-card-info">
                    <h5>{item.title}</h5>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {currentIndex !== null && (
        <div className="gallery-detail-modal">
          <div className="overlay" onClick={handleClose}></div>

          <div className="content">
            <button className="close" onClick={handleClose}>
              ×
            </button>

            <button className="arrow left" onClick={prev}>
              ‹
            </button>

            <button className="arrow right" onClick={next}>
              ›
            </button>

            <div
              key={`${currentIndex}-${animateKey}`}
              className={`grid gallery-anim gallery-anim-${direction}`}
            >
              <div className="image">
                <img
                  src={brandContent[currentIndex].img}
                  alt={brandContent[currentIndex].title}
                />
              </div>

              <div className="info">
                <span className="gallery-detail-label">Sausage Collection</span>
                <h3>{brandContent[currentIndex].title}</h3>
                <h6>{brandContent[currentIndex].subtitle}</h6>
                <p>{brandContent[currentIndex].desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySausage;
