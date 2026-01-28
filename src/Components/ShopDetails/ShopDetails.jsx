import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductService, STATUS_CODE } from "../../Utils/MainService";

const API_BASE = 'http://localhost:9009';

const ShopDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [showVariantModal, setShowVariantModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await ProductService.getProductDetail(id);

        if (response.code === STATUS_CODE.SUCCESS) {
          const prod = response.data;
          setProduct(prod);

          const imgList = [];
          if (prod.imageUrl) imgList.push(`${API_BASE}/api/auth${prod.imageUrl}`);

          if (prod.variants?.length > 0) {
            prod.variants.forEach(v => {
              if (v.imageUrl) imgList.push(`${API_BASE}/api/auth${v.imageUrl}`);
            });
          }

          setImages(imgList.length > 0 ? imgList : ["/assets/img/dishes/default.png"]);
          setCurrentImage(imgList[0] || "/assets/img/dishes/default.png");

          if (prod.variants?.length > 0) {
            const defaultVariant = prod.variants.find(v => v.isDefault) || prod.variants[0];
            setSelectedVariant(defaultVariant);
          }
        } else {
          setError(response.message || 'Không tải được chi tiết sản phẩm');
        }
      } catch (err) {
        setError(err.message || 'Lỗi kết nối server');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (type) => {
    if (type === 'plus') setQuantity(q => q + 1);
    if (type === 'minus' && quantity > 1) setQuantity(q => q - 1);
  };

  const handleAddToCart = () => {
    if (product.variants?.length > 0 && !selectedVariant) {
      setShowVariantModal(true);
      return;
    }
    console.log("Thêm vào giỏ:", { productId: product.id, variantId: selectedVariant?.id, quantity });
    alert("Đã thêm vào giỏ hàng!");
  };

  const handleAddToWishlist = () => {
    if (product.variants?.length > 0 && !selectedVariant) {
      setShowVariantModal(true);
      return;
    }
    console.log("Thêm vào wishlist:", { productId: product.id, variantId: selectedVariant?.id });
    alert("Đã thêm vào danh sách yêu thích!");
  };

  const selectVariant = (variant) => {
    setSelectedVariant(variant);
    setShowVariantModal(false);
  };

  const changeImage = (imgSrc) => {
    setCurrentImage(imgSrc);
  };

  if (loading) return <div className="text-center py-5">Đang tải...</div>;
  if (error) return <div className="alert alert-danger text-center py-5">{error}</div>;
  if (!product) return <div className="alert alert-info text-center py-5">Không tìm thấy sản phẩm</div>;

  return (
    <div className="shop-details-section section-padding pb-0 fix">
      <div className="shop-details-wrapper style1">
        <div className="container">
          <div className="shop-details bg-white">
            <div className="container">
              <div className="row gx-60">
                {/* Phần ảnh + thumbnails */}
                <div className="col-lg-6">
                  <div className="product-big-img bg-color2 d-flex align-items-center justify-content-center position-relative">
                    <div
                      className="dishes-thumb position-relative"
                      style={{
                        width: '100%',
                        maxWidth: '500px',
                        height: '450px',
                        overflow: 'hidden',
                        borderRadius: '12px',
                      }}
                    >
                      <img
                        src={currentImage}
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center',
                        }}
                      />
                    </div>
                  </div>

                  {images.length > 1 && (
                    <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
                      {images.map((imgSrc, index) => (
                        <div
                          key={index}
                          onClick={() => changeImage(imgSrc)}
                          style={{
                            width: '80px',
                            height: '80px',
                            border: currentImage === imgSrc ? '3px solid #ff6b00' : '2px solid #ddd',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                          }}
                        >
                          <img
                            src={imgSrc}
                            alt={`Thumbnail ${index}`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="col-lg-6">
                  <div className="product-about">
                    <div className="title-wrapper">
                      <h2 className="product-title">{product.name}</h2>
                      <div className="price">
                        {product.defaultPrice ? formatPrice(product.defaultPrice) : "Liên hệ"}
                      </div>
                    </div>

                    <p className="text">{product.description || "Mô tả sản phẩm đang được cập nhật..."}</p>

                    {product.variants?.length > 0 && (
                      <div className="mb-4">
                        <h6>Biến thể:</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {product.variants.map((v) => (
                            <button
                              key={v.id}
                              className={`btn btn-outline-primary ${selectedVariant?.id === v.id ? 'active' : ''}`}
                              onClick={() => setSelectedVariant(v)}
                            >
                              {v.variantName}
                              {v.isDefault && " (Mặc định)"}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="actions">
                      <div className="quantity">
                        <p>Số lượng</p>
                        <div className="qty-wrapper">
                          <button className="quantity-minus qty-btn" onClick={() => handleQuantityChange('minus')}>
                            <i className="bi bi-dash-lg"></i>
                          </button>
                          <input type="number" className="qty-input" value={quantity} readOnly />
                          <button className="quantity-plus qty-btn" onClick={() => handleQuantityChange('plus')}>
                            <i className="bi bi-plus-lg"></i>
                          </button>
                        </div>
                      </div>

                      <button className="theme-btn cart-btn0" onClick={handleAddToCart}>
                        Thêm vào giỏ <i className="bi bi-basket3-fill"></i>
                      </button>

                      <button className="theme-btn style5 border-0" onClick={handleAddToWishlist}>
                        Yêu thích <i className="bi bi-heart-fill"></i>
                      </button>
                    </div>

                    {showVariantModal && (
                      <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.6)' }}>
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">Chọn biến thể</h5>
                              <button type="button" className="btn-close" onClick={() => setShowVariantModal(false)}></button>
                            </div>
                            <div className="modal-body">
                              <p>Chọn biến thể cho "{product.name}":</p>
                              <div className="d-flex flex-column gap-2">
                                {product.variants.map((v) => (
                                  <button
                                    key={v.id}
                                    className="btn btn-outline-primary text-start"
                                    onClick={() => selectVariant(v)}
                                  >
                                    {v.variantName} {v.isDefault && "(Mặc định)"}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button className="btn btn-secondary" onClick={() => setShowVariantModal(false)}>
                                Đóng
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price || 0);
};

export default ShopDetails;