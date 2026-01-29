import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopCard from "../Card/ShopCard";
import { ProductService, STATUS_CODE } from "../../Utils/MainService";
import "../../assets/Skeleton.css";
import BASE_URL from "../../Utils/constants/apiEndpoints";

const Shop1 = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [pageSize] = useState(12);

    // Filters & Sort
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [sortDir, setSortDir] = useState('asc');
    const [searchQuery, setSearchQuery] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000000 });

    // View mode
    const [viewMode, setViewMode] = useState('grid');

    const categories = ['sausages', 'small goods', 'hela', 'richs'];

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            const params = {
                page: currentPage,
                size: pageSize,
                sortBy,
                sortDir,
                ...(selectedCategory && { category: selectedCategory }),
                ...(searchQuery && { search: searchQuery }),
                minPrice: priceRange.min,
                maxPrice: priceRange.max,
            };

            const response = await ProductService.getProducts(params);

            if (response.code === STATUS_CODE.SUCCESS) {
                const data = response.data;
                setProducts(data.content || []);
                setTotalPages(data.totalPages || 0);
                setTotalItems(data.totalElements || 0);
            } else {
                setError(response.message || 'Không thể tải sản phẩm');
            }
        } catch (err) {
            console.error('Error fetching products:', err);
            setError(err.message || 'Không thể tải sản phẩm');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage, sortBy, sortDir, selectedCategory, searchQuery, priceRange]);

    // Filter client-side: hỗ trợ category nhiều giá trị (cách nhau bằng ;)
    const filteredProducts = products.filter(product => {
        const matchesSearch = !searchQuery ||
            product.name.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesPrice = product.defaultPrice >= priceRange.min &&
            product.defaultPrice <= priceRange.max;

        // Filter category: sản phẩm có category chứa selectedCategory (dù nhiều category)
        const matchesCategory = !selectedCategory ||
            (product.category || '').toLowerCase().split(';')
                .some(cat => cat.trim().toLowerCase() === selectedCategory.toLowerCase());

        return matchesSearch && matchesPrice && matchesCategory;
    });

    const handlePageChange = (page) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(0);
    };

    const handleSortChange = (e) => {
        const value = e.target.value;
        switch (value) {
            case 'popularity':
                setSortBy('name');
                setSortDir('asc');
                break;
            case 'price':
                setSortBy('defaultPrice');
                setSortDir('asc');
                break;
            case 'price-desc':
                setSortBy('defaultPrice');
                setSortDir('desc');
                break;
            case 'date':
                setSortBy('createdAt');
                setSortDir('desc');
                break;
            default:
                setSortBy('name');
                setSortDir('asc');
        }
        setCurrentPage(0);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        }).format(price || 0);
    };

    return (
        <div className="shop-section section-padding fix">
            <div className="shop-wrapper style1">
                <div className="container">
                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-xl-3 col-lg-4 order-2 order-md-1 wow fadeInUp" data-wow-delay=".3s">
                            <div className="main-sidebar">
                                {/* Search */}
                                <div className="single-sidebar-widget">
                                    <h5 className="widget-title">Search</h5>
                                    <div className="search-widget">
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <input
                                                type="text"
                                                placeholder="Search here"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                            <button type="submit"><i className="bi bi-search"></i></button>
                                        </form>
                                    </div>
                                </div>

                                {/* Categories */}
                                <div className="single-sidebar-widget">
                                    <h5 className="widget-title">Categories</h5>
                                    <ul className="tagcloud">
                                        <li>
                                            <a
                                                href="#"
                                                className={!selectedCategory ? 'active' : ''}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleCategoryChange('');
                                                }}
                                            >
                                                All
                                            </a>
                                        </li>
                                        {categories.map((cat) => (
                                            <li key={cat}>
                                                <a
                                                    href="#"
                                                    className={selectedCategory === cat ? 'active' : ''}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleCategoryChange(cat);
                                                    }}
                                                >
                                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Price Range (giữ nguyên nếu bạn muốn) */}
                                <div className="single-sidebar-widget">
                                    <h5 className="widget-title">Filter By Price</h5>
                                    <div className="range__barcustom">
                                        <div className="slider">
                                            <div className="progress"></div>
                                        </div>
                                        <div className="range-input">
                                            <input type="range" className="range-min" min="0" max="10000000" value={priceRange.min} />
                                            <input type="range" className="range-max" min="0" max="10000000" value={priceRange.max} />
                                        </div>
                                        <div className="range-items">
                                            <div className="price-input">
                                                <div className="price-wrapper d-flex align-items-center gap-1">
                                                    <div className="field">
                                                        <span>Price:</span>
                                                    </div>
                                                    <div className="field">
                                                        <input
                                                            type="number"
                                                            className="input-min"
                                                            value={priceRange.min}
                                                            onChange={(e) => setPriceRange({
                                                                ...priceRange,
                                                                min: Number(e.target.value) || 0,
                                                            })}
                                                        />
                                                    </div>
                                                    <div className="separators">-</div>
                                                    <div className="field">
                                                        <input
                                                            type="number"
                                                            className="input-max"
                                                            value={priceRange.max}
                                                            onChange={(e) => setPriceRange({
                                                                ...priceRange,
                                                                max: Number(e.target.value) || 10000000,
                                                            })}
                                                        />
                                                    </div>
                                                    <a href="#" className="filter-btn mt-2 me-3" onClick={(e) => e.preventDefault()}>Filter</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="col-xl-9 col-lg-8 order-1 order-md-2 wow fadeInUp" data-wow-delay=".5s">
                            {/* Sort & View Toggle */}
                            <div className="sort-bar">
                                <div className="row g-sm-0 gy-20 justify-content-between align-items-center">
                                    <div className="col-md">
                                        <p className="woocommerce-result-count">
                                            Showing {currentPage * pageSize + 1} - {Math.min((currentPage + 1) * pageSize, totalItems)} of {totalItems} Results
                                        </p>
                                    </div>

                                    <div className="col-md-auto">
                                        <form className="woocommerce-ordering" method="get">
                                            <select name="orderby" className="single-select" aria-label="Shop order" onChange={handleSortChange}>
                                                <option value="menu_order" selected="selected">Default Sorting</option>
                                                <option value="popularity">Sort by popularity</option>
                                                <option value="date">Sort by latest</option>
                                                <option value="price">Sort by price: low to high</option>
                                                <option value="price-desc">Sort by price: high to low</option>
                                            </select>
                                        </form>
                                    </div>

                                    <div className="col-md-auto">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className={`nav-link ${viewMode === 'grid' ? 'active' : ''}`}
                                                    id="pills-grid-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-grid"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-grid"
                                                    aria-selected={viewMode === 'grid'}
                                                    onClick={() => setViewMode('grid')}
                                                >
                                                    <i className="fa-solid fa-grid"></i>
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button
                                                    className={`nav-link ${viewMode === 'list' ? 'active' : ''}`}
                                                    id="pills-list-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-list"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-list"
                                                    aria-selected={viewMode === 'list'}
                                                    onClick={() => setViewMode('list')}
                                                >
                                                    <i className="fa-solid fa-list"></i>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Tab Content */}
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className={`tab-pane fade ${viewMode === 'grid' ? 'show active' : ''}`}
                                    id="pills-grid"
                                    role="tabpanel"
                                    aria-labelledby="pills-grid-tab"
                                    tabIndex="0"
                                >
                                    {loading ? (
                                        <div className="row g-4">
                                            {[...Array(6)].map((_, i) => (
                                                <div key={i} className="col-lg-4 col-md-6">
                                                    <div className="dishes-card style2 skeleton">
                                                        <div className="dishes-thumb skeleton-thumb"></div>
                                                        <div className="dishes-content">
                                                            <h3 className="skeleton-text"></h3>
                                                            <div className="star skeleton-text short"></div>
                                                            <div className="text skeleton-text short"></div>
                                                            <h6 className="skeleton-text short"></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : error ? (
                                        <div className="alert alert-danger text-center py-5">{error}</div>
                                    ) : filteredProducts.length === 0 ? (
                                        <div className="alert alert-info text-center py-5">Không tìm thấy sản phẩm.</div>
                                    ) : (
                                        <div className="dishes-card-wrap style2">
                                            {filteredProducts.map((product) => (
                                                <ShopCard
                                                    key={product.id}
                                                    img={
                                                        product.imageUrl
                                                            ? `${BASE_URL}/api/auth${product.imageUrl}`
                                                            : "/assets/img/dishes/default.png"
                                                    }
                                                    title={product.name}
                                                    content={product.description || "Delicious food"}
                                                    prices={product.prices} // Truyền mảng giá
                                                    variants={product.variants} // Truyền biến thể
                                                    id={product.id}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div
                                    className={`tab-pane fade ${viewMode === 'list' ? 'show active' : ''}`}
                                    id="pills-list"
                                    role="tabpanel"
                                    aria-labelledby="pills-list-tab"
                                    tabIndex="0"
                                >
                                    <p className="text-center py-5">Chế độ danh sách đang được phát triển. Vui lòng chuyển sang chế độ lưới.</p>
                                </div>
                            </div>

                            {/* Pagination */}
                            {!loading && !error && totalPages > 1 && (
                                <div className="page-nav-wrap text-center">
                                    <ul>
                                        <li>
                                            <a
                                                className={`previous ${currentPage === 0 ? 'disabled' : ''}`}
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (currentPage > 0) handlePageChange(currentPage - 1);
                                                }}
                                            >
                                                <i className="bi bi-arrow-left"></i>
                                            </a>
                                        </li>
                                        {[...Array(totalPages)].map((_, idx) => (
                                            <li key={idx}>
                                                <a
                                                    className={`page-numbers ${currentPage === idx ? 'active' : ''}`}
                                                    href="#"
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
                                                className={`next ${currentPage === totalPages - 1 ? 'disabled' : ''}`}
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (currentPage < totalPages - 1) handlePageChange(currentPage + 1);
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
        </div>
    );
};

export default Shop1;