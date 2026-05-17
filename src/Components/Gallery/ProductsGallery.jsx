import { useEffect, useMemo, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BreadCumb from "../Common/BreadCumb";

const API_BASE = "https://api.nhatnamfinefoods.com";
const IMG_BASE = `${API_BASE}/api/auth`;
const PAGE_SIZE = 9;

function getImgSrc(path) {
  if (!path) return "/assets/img/gallery/placeholder.jpg";
  return path.startsWith("http") ? path : `${IMG_BASE}${path}`;
}

export default function ProductsGallery() {
  const { i18n } = useTranslation("product");
  const lang = i18n.language?.startsWith("en") ? "en" : "vi";
  const [searchParams, setSearchParams] = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts]     = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy]           = useState("default");
  const [viewMode, setViewMode]       = useState("grid");

  const [currentIndex, setCurrentIndex] = useState(null);
  const [animateKey, setAnimateKey]     = useState(0);
  const [direction, setDirection]       = useState("next");

  const activeCategoryId = searchParams.get("category") || "";

  // Load categories once
  useEffect(() => {
    fetch(`${API_BASE}/api/auth/landingpage/categories`)
      .then(r => r.json())
      .then(j => setCategories(j?.data || []))
      .catch(() => {});
  }, []);

  // Load products when category / page changes
  const fetchProducts = useCallback(async (page = 0, catId = activeCategoryId) => {
    setLoading(true); setError(null);
    try {
      let url = `${API_BASE}/api/auth/landingpage/products?page=${page}&size=50`;
      if (catId) url += `&categoryId=${catId}`;
      const res = await fetch(url);
      const json = await res.json();
      const data = json?.data;
      setProducts(data?.content || []);
      setTotalItems(data?.totalItems || 0);
      setTotalPages(data?.totalPages || 1);
    } catch { setError("Không thể tải sản phẩm."); }
    finally { setLoading(false); }
  }, [activeCategoryId]);

  useEffect(() => { fetchProducts(0, activeCategoryId); setCurrentPage(0); }, [activeCategoryId]);

  // Map product → gallery item
  const allItems = useMemo(() => products.map((p, idx) => ({
    id:       String(p.id),
    title:    lang === "en" ? (p.nameEn || p.name) : p.name,
    titleAlt: lang === "en" ? p.name : (p.nameEn || ""),
    desc:     lang === "en" ? (p.descriptionEn || p.description || "") : (p.description || ""),
    img:      getImgSrc(p.imagePath),
    category: p.category,
    raw:      p,
  })), [products, lang]);

  // Client-side search + sort
  const filteredItems = useMemo(() => {
    let r = [...allItems];
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      r = r.filter(item => item.title?.toLowerCase().includes(q) || item.titleAlt?.toLowerCase().includes(q) || item.desc?.toLowerCase().includes(q));
    }
    switch (sortBy) {
      case "name-asc":  r.sort((a,b) => a.title.localeCompare(b.title)); break;
      case "name-desc": r.sort((a,b) => b.title.localeCompare(a.title)); break;
      case "latest":    r.sort((a,b) => (b.raw?.createdAt||0)-(a.raw?.createdAt||0)); break;
      default: break;
    }
    return r;
  }, [allItems, searchQuery, sortBy]);

  const clientTotalPages = Math.ceil(filteredItems.length / PAGE_SIZE);
  const paginated = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return filteredItems.slice(start, start + PAGE_SIZE);
  }, [filteredItems, currentPage]);

  useEffect(() => { setCurrentPage(0); }, [searchQuery, sortBy]);

  // Lightbox
  const openDetail = item => { const i = filteredItems.findIndex(x=>x.id===item.id); setDirection("next"); setAnimateKey(k=>k+1); setCurrentIndex(i); };
  const handleClose = () => setCurrentIndex(null);
  const next = () => { setDirection("next"); setAnimateKey(k=>k+1); setCurrentIndex(i=>i===filteredItems.length-1?0:i+1); };
  const prev = () => { setDirection("prev"); setAnimateKey(k=>k+1); setCurrentIndex(i=>i===0?filteredItems.length-1:i-1); };

  useEffect(() => {
    const h = e => { if(currentIndex===null)return; if(e.key==="Escape")handleClose(); if(e.key==="ArrowRight")next(); if(e.key==="ArrowLeft")prev(); };
    window.addEventListener("keydown",h);
    return () => window.removeEventListener("keydown",h);
  }, [currentIndex, filteredItems.length]);

  const handleCategoryChange = catId => {
    if (catId) setSearchParams({ category: catId });
    else setSearchParams({});
    setCurrentPage(0);
  };

  const handlePageChange = p => {
    if (p<0||p>=clientTotalPages) return;
    setCurrentPage(p);
    window.scrollTo({top:0,behavior:"smooth"});
  };

  const currentItem = currentIndex !== null ? filteredItems[currentIndex] : null;

  // Breadcrumb: show category name if filtered
  const activeCat = categories.find(c => String(c.id) === String(activeCategoryId));
  const breadcrumbTitle = activeCat
    ? (lang === "vi" ? (activeCat.nameVi || activeCat.name) : activeCat.name)
    : (lang === "vi" ? "Tất cả sản phẩm" : "All Products");

  const t = key => {
    const m = {
      categories:  { vi:"Danh mục", en:"Categories" },
      search:      { vi:"Tìm kiếm", en:"Search" },
      placeholder: { vi:"Tìm sản phẩm...", en:"Search products..." },
      all:         { vi:"Tất cả", en:"All" },
      showing:     { vi:`Hiển thị ${filteredItems.length} sản phẩm`, en:`Showing ${filteredItems.length} products` },
      default:     { vi:"Mặc định", en:"Default" },
      nameAsc:     { vi:"Tên A-Z", en:"Name A-Z" },
      nameDesc:    { vi:"Tên Z-A", en:"Name Z-A" },
      latest:      { vi:"Mới nhất", en:"Latest" },
      noProduct:   { vi:"Không tìm thấy sản phẩm.", en:"No products found." },
      loading:     { vi:"Đang tải...", en:"Loading..." },
      retry:       { vi:"Thử lại", en:"Retry" },
      product:     { vi:"Sản phẩm", en:"Product" },
    };
    return m[key]?.[lang] || key;
  };

  return (
    <>
      <BreadCumb Title={breadcrumbTitle} bgimg="/assets/img/bg/breadcrumb-products.jpg" />

      <div className="gallery-section section-padding fix">
        <div className="container">
          <div className="row">

            {/* Sidebar */}
            <div className="col-xl-3 col-lg-4 order-2 order-md-1">
              <div className="gallery-meat-shop1-sidebar">

                {/* Danh mục */}
                <div className="gallery-meat-shop1-widget">
                  <h5 className="gallery-meat-shop1-widget-title">{t("categories")}</h5>
                  <ul className="gallery-meat-shop1-tags">
                    <li>
                      <button type="button"
                        className={!activeCategoryId ? "active" : ""}
                        onClick={() => handleCategoryChange("")}>
                        {t("all")}
                      </button>
                    </li>
                    {categories.map(cat => (
                      <li key={cat.id}>
                        <button type="button"
                          className={String(activeCategoryId) === String(cat.id) ? "active" : ""}
                          onClick={() => handleCategoryChange(String(cat.id))}>
                          {lang === "vi" ? (cat.nameVi || cat.name) : cat.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Search */}
                <div className="gallery-meat-shop1-widget">
                  <h5 className="gallery-meat-shop1-widget-title">{t("search")}</h5>
                  <div className="gallery-meat-shop1-search">
                    <form onSubmit={e => e.preventDefault()}>
                      <input type="text" placeholder={t("placeholder")} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                      <button type="submit" aria-label={t("search")}><i className="bi bi-search"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Main */}
            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              <div className="gallery-meat-shop1-sortbar">
                <div className="gallery-meat-shop1-toolbar">
                  <div className="gallery-meat-shop1-toolbar-left">
                    <p className="gallery-meat-shop1-result-count">{t("showing")}</p>
                  </div>
                  <div className="gallery-meat-shop1-toolbar-right">
                    <select className="gallery-meat-shop1-select" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                      <option value="default">{t("default")}</option>
                      <option value="name-asc">{t("nameAsc")}</option>
                      <option value="name-desc">{t("nameDesc")}</option>
                      <option value="latest">{t("latest")}</option>
                    </select>
                    <div className="gallery-meat-shop1-viewmode">
                      <button type="button" className={`gallery-meat-shop1-viewbtn ${viewMode==="grid"?"active":""}`} onClick={()=>setViewMode("grid")}><i className="fa-solid fa-grid-2"></i></button>
                      <button type="button" className={`gallery-meat-shop1-viewbtn ${viewMode==="list"?"active":""}`} onClick={()=>setViewMode("list")}><i className="fa-solid fa-list"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-warning" role="status"/>
                  <p className="mt-3">{t("loading")}</p>
                </div>
              ) : error ? (
                <div className="alert alert-danger text-center py-4">
                  {error}<br/>
                  <button className="btn btn-sm btn-outline-danger mt-2" onClick={()=>fetchProducts(0,activeCategoryId)}>{t("retry")}</button>
                </div>
              ) : filteredItems.length === 0 ? (
                <div className="alert alert-info text-center py-5">{t("noProduct")}</div>
              ) : viewMode === "grid" ? (
                <div className="row gy-4 mb-4">
                  {paginated.map(item => (
                    <div key={item.id} className="col-xl-4 col-md-6">
                      <div className="gallery-product-card gallery-meat-shop1-grid-card" onClick={() => openDetail(item)}>
                        <div className="gallery-thumb style2 gallery-popup-trigger gallery-meat-shop1-grid-thumb">
                          <img src={item.img} alt={item.title}/>
                          <div className="icon"><img src="/assets/img/icon/arrow_icon.png" alt="icon"/></div>
                        </div>
                        <div className="gallery-card-info">
                          {item.category && (
                            <span style={{ fontSize:10, color:'#C9A84C', fontWeight:700, textTransform:'uppercase', letterSpacing:'.5px', display:'block', marginBottom:4 }}>
                              {lang==="vi"?(item.category.nameVi||item.category.name):item.category.name}
                            </span>
                          )}
                          <h5>{item.title}</h5>
                          {item.titleAlt && <p style={{fontSize:12,color:'#999',margin:0}}>{item.titleAlt}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="gallery-meat-shop1-list-wrap">
                  {paginated.map(item => (
                    <div key={item.id} className="gallery-meat-shop1-list-item" onClick={() => openDetail(item)}>
                      <div className="gallery-meat-shop1-list-thumb"><img src={item.img} alt={item.title}/></div>
                      <div className="gallery-meat-shop1-list-content">
                        <span className="gallery-meat-shop1-list-label">
                          {item.category ? (lang==="vi"?(item.category.nameVi||item.category.name):item.category.name) : t("product")}
                        </span>
                        <h4>{item.title}</h4>
                        {item.titleAlt && <h6 style={{color:'#999'}}>{item.titleAlt}</h6>}
                        <div dangerouslySetInnerHTML={{__html:item.desc}}/>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              {clientTotalPages > 1 && (
                <div className="page-nav-wrap text-center">
                  <ul>
                    <li><a href="#" className={currentPage===0?"disabled":""} onClick={e=>{e.preventDefault();handlePageChange(currentPage-1);}}><i className="bi bi-arrow-left"></i></a></li>
                    {[...Array(clientTotalPages)].map((_,idx)=>(
                      <li key={idx}><a href="#" className={`page-numbers ${currentPage===idx?"active":""}`} onClick={e=>{e.preventDefault();handlePageChange(idx);}}>{idx+1}</a></li>
                    ))}
                    <li><a href="#" className={currentPage===clientTotalPages-1?"disabled":""} onClick={e=>{e.preventDefault();handlePageChange(currentPage+1);}}><i className="bi bi-arrow-right"></i></a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {currentItem && (
        <div className="gallery-detail-modal">
          <div className="overlay" onClick={handleClose}></div>
          <div className="content">
            <button className="close" onClick={handleClose}>×</button>
            <button className="arrow left" onClick={prev}>‹</button>
            <button className="arrow right" onClick={next}>›</button>
            <div key={`${currentIndex}-${animateKey}`} className={`grid gallery-anim gallery-anim-${direction}`}>
              <div className="image"><img src={currentItem.img} alt={currentItem.title}/></div>
              <div className="info">
                {currentItem.category && (
                  <span style={{fontSize:11,color:'#C9A84C',fontWeight:700,textTransform:'uppercase',letterSpacing:'.5px',display:'block',marginBottom:8}}>
                    {lang==="vi"?(currentItem.category.nameVi||currentItem.category.name):currentItem.category.name}
                  </span>
                )}
                <h3>{currentItem.title}</h3>
                {currentItem.titleAlt && <h6 style={{color:'#999'}}>{currentItem.titleAlt}</h6>}
                <div dangerouslySetInnerHTML={{__html:currentItem.desc}}/>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}