import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { buildGalleryItems, GALLERY_CATEGORY_KEYS } from "./gallery.helpers";
import BreadCumb from "../Common/BreadCumb";

const ProductsGallery = () => {
  const { t } = useTranslation("product");
  const [searchParams, setSearchParams] = useSearchParams();

  const [currentIndex, setCurrentIndex] = useState(null);
  const [animateKey, setAnimateKey] = useState(0);
  const [direction, setDirection] = useState("next");

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = 9;

  const activeCategoryParam = searchParams.get("category");
  console.log("Active Category from URL:", activeCategoryParam);
  const activeCategory = GALLERY_CATEGORY_KEYS.includes(activeCategoryParam)
    ? activeCategoryParam
    : "all";

  const allItems = useMemo(() => buildGalleryItems(t), [t]);

  const categoryFilteredItems = useMemo(() => {
    if (activeCategory === "all") return allItems;
    return allItems.filter((item) => item.category === activeCategory);
  }, [allItems, activeCategory]);

  const filteredAndSortedItems = useMemo(() => {
    let result = [...categoryFilteredItems];

    if (searchQuery.trim()) {
      const keyword = searchQuery.trim().toLowerCase();
      result = result.filter(
        (item) =>
          item.title?.toLowerCase().includes(keyword) ||
          item.subtitle?.toLowerCase().includes(keyword) ||
          item.desc?.toLowerCase().includes(keyword),
      );
    }

    switch (sortBy) {
      case "name-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "latest":
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        break;
    }

    return result;
  }, [categoryFilteredItems, searchQuery, sortBy]);

  const totalItems = filteredAndSortedItems.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  const paginatedItems = useMemo(() => {
    const start = currentPage * pageSize;
    return filteredAndSortedItems.slice(start, start + pageSize);
  }, [filteredAndSortedItems, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [searchQuery, sortBy, activeCategory]);

  const openDetail = (item) => {
    const realIndex = filteredAndSortedItems.findIndex((x) => x.id === item.id);
    setDirection("next");
    setAnimateKey((prev) => prev + 1);
    setCurrentIndex(realIndex);
  };

  const handleClose = () => setCurrentIndex(null);

  const next = () => {
    setDirection("next");
    setAnimateKey((prev) => prev + 1);
    setCurrentIndex((prev) =>
      prev === filteredAndSortedItems.length - 1 ? 0 : prev + 1,
    );
  };

  const prev = () => {
    setDirection("prev");
    setAnimateKey((prev) => prev + 1);
    setCurrentIndex((prev) =>
      prev === 0 ? filteredAndSortedItems.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, filteredAndSortedItems.length]);

  const handleCategoryChange = (category) => {
    if (category === "all") {
      setSearchParams({});
      return;
    }

    setSearchParams({ category });
  };

  const handlePageChange = (page) => {
    if (page < 0 || page >= totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentItem =
    currentIndex !== null ? filteredAndSortedItems[currentIndex] : null;

  const categoryOptions = [
    { key: "all", label: t("gallery_categories.all") },
    { key: "sausage", label: t("gallery_categories.sausage") },
    { key: "meat", label: t("gallery_categories.meat") },
    { key: "hela", label: t("gallery_categories.hela") },
    { key: "rich", label: t("gallery_categories.rich") },
  ];

  const breadcrumbConfig = {
    all: {
      title: t("gallery_breadcrumb.all_title"),
      bgimg: "/assets/img/bg/breadcrumb-products.jpg",
    },
    sausage: {
      title: t("gallery_breadcrumb.sausage_title"),
      bgimg: "/assets/img/bg/breadcrumb-sausage.jpg",
    },
    meat: {
      title: t("gallery_breadcrumb.meat_title"),
      bgimg: "/assets/img/bg/breadcrumb-meat.jpg",
    },
    hela: {
      title: t("gallery_breadcrumb.hela_title"),
      bgimg: "/assets/img/bg/breadcrumb-hela.gif",
    },
    rich: {
      title: t("gallery_breadcrumb.rich_title"),
      bgimg: "/assets/img/bg/breadcrumb-rich.gif",
    },
  };

  const currentBreadcrumb =
    breadcrumbConfig[activeCategory] || breadcrumbConfig.all;

  return (
    <>
      <BreadCumb
        Title={currentBreadcrumb.title}
        bgimg={currentBreadcrumb.bgimg}
      />
      <div className="gallery-section section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 order-2 order-md-1">
              <div className="gallery-meat-shop1-sidebar">
                <div className="gallery-meat-shop1-widget">
                  <h5 className="gallery-meat-shop1-widget-title">
                    {t("gallery_ui.categories")}
                  </h5>

                  <ul className="gallery-meat-shop1-tags">
                    {categoryOptions.map((item) => (
                      <li key={item.key}>
                        <button
                          type="button"
                          className={
                            activeCategory === item.key ? "active" : ""
                          }
                          onClick={() => handleCategoryChange(item.key)}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="gallery-meat-shop1-widget">
                  <h5 className="gallery-meat-shop1-widget-title">
                    {t("gallery_ui.search")}
                  </h5>

                  <div className="gallery-meat-shop1-search">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        placeholder={t("gallery_ui.search_placeholder")}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button type="submit" aria-label={t("gallery_ui.search")}>
                        <i className="bi bi-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              <div className="gallery-meat-shop1-sortbar">
                <div className="gallery-meat-shop1-toolbar">
                  <div className="gallery-meat-shop1-toolbar-left">
                    <p className="gallery-meat-shop1-result-count">
                      {t("gallery_ui.showing_count", { count: totalItems })}
                    </p>
                  </div>

                  <div className="gallery-meat-shop1-toolbar-right">
                    <select
                      className="gallery-meat-shop1-select"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="default">
                        {t("gallery_sort.default")}
                      </option>
                      <option value="name-asc">
                        {t("gallery_sort.name_asc")}
                      </option>
                      <option value="name-desc">
                        {t("gallery_sort.name_desc")}
                      </option>
                      <option value="latest">{t("gallery_sort.latest")}</option>
                    </select>

                    <div className="gallery-meat-shop1-viewmode">
                      <button
                        type="button"
                        className={`gallery-meat-shop1-viewbtn ${
                          viewMode === "grid" ? "active" : ""
                        }`}
                        onClick={() => setViewMode("grid")}
                        aria-label={t("gallery_ui.grid_view")}
                      >
                        <i className="fa-solid fa-grid-2"></i>
                      </button>

                      <button
                        type="button"
                        className={`gallery-meat-shop1-viewbtn ${
                          viewMode === "list" ? "active" : ""
                        }`}
                        onClick={() => setViewMode("list")}
                        aria-label={t("gallery_ui.list_view")}
                      >
                        <i className="fa-solid fa-list"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {totalItems === 0 ? (
                <div className="alert alert-info text-center py-5">
                  {t("gallery_ui.no_products")}
                </div>
              ) : viewMode === "grid" ? (
                <div className="row gy-4 mb-4">
                  {paginatedItems.map((item) => (
                    <div key={item.id} className="col-xl-4 col-md-6">
                      <div
                        className={`${item.cardClassName} gallery-meat-shop1-grid-card`}
                        onClick={() => openDetail(item)}
                      >
                        <div className="gallery-thumb style2 gallery-popup-trigger gallery-meat-shop1-grid-thumb">
                          <img src={item.img} alt={item.title} />
                          <div className="icon">
                            <img
                              src="/assets/img/icon/arrow_icon.png"
                              alt="icon"
                            />
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
              ) : (
                <div className="gallery-meat-shop1-list-wrap">
                  {paginatedItems.map((item) => (
                    <div
                      key={item.id}
                      className="gallery-meat-shop1-list-item"
                      onClick={() => openDetail(item)}
                    >
                      <div className="gallery-meat-shop1-list-thumb">
                        <img src={item.img} alt={item.title} />
                      </div>

                      <div className="gallery-meat-shop1-list-content">
                        <span className="gallery-meat-shop1-list-label">
                          {item.detailLabel}
                        </span>
                        <h4>{item.title}</h4>
                        <h6>{item.subtitle}</h6>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="page-nav-wrap text-center">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className={currentPage === 0 ? "disabled" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage - 1);
                        }}
                      >
                        <i className="bi bi-arrow-left"></i>
                      </a>
                    </li>

                    {[...Array(totalPages)].map((_, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className={`page-numbers ${currentPage === idx ? "active" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(idx);
                          }}
                        >
                          {idx + 1}
                        </a>
                      </li>
                    ))}

                    <li>
                      <a
                        href="#"
                        className={
                          currentPage === totalPages - 1 ? "disabled" : ""
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }}
                      >
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {currentItem && (
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
                <img src={currentItem.img} alt={currentItem.title} />
              </div>

              <div className="info">
                <span className="gallery-detail-label">
                  {currentItem.detailLabel}
                </span>
                <h3>{currentItem.title}</h3>
                <h6>{currentItem.subtitle}</h6>
                <p>{currentItem.desc}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsGallery;
