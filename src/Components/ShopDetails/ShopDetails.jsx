import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductService, STATUS_CODE } from "../../Utils/MainService";
import { BASE_URL } from "../../Utils/constants/apiEndpoints";
import Toast from "../Toast/Toast";
import { useTranslation } from "react-i18next";

const ShopDetails = () => {
  const { t } = useTranslation("shop");

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState("1.00");
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [tempTotal, setTempTotal] = useState(0);
  const [showVariantModal, setShowVariantModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [images, setImages] = useState([]);
  const [toasts, setToasts] = useState([]);

  // Hiển thị toast
  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  // Xóa toast
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await ProductService.getProductDetail(id);

        if (response.code === STATUS_CODE.SUCCESS) {
          const prod = response.data;
          setProduct(prod);

          const imgList = [];
          if (prod.imageUrl) imgList.push(`${BASE_URL}/api/auth${prod.imageUrl}`);

          if (prod.variants?.length > 0) {
            prod.variants.forEach((v) => {
              if (v.imageUrl) imgList.push(`${BASE_URL}/api/auth${v.imageUrl}`);
            });
          }

          setImages(imgList.length > 0 ? imgList : ["/assets/img/dishes/default.png"]);
          setCurrentImage(imgList[0] || "/assets/img/dishes/default.png");

          if (prod.variants?.length > 0) {
            const defaultVariant = prod.variants.find((v) => v.isDefault) || prod.variants[0];
            setSelectedVariant(defaultVariant);
          }

          const defaultPrice = prod.prices?.find((p) => p.isDefault) || prod.prices?.[0];
          setSelectedPrice(defaultPrice);
        } else {
          setError(response.message || t("detail.error_load_detail"));
        }
      } catch (err) {
        setError(err.message || t("detail.server_error"));
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, t]);

  // Debounce tạm tính
  useEffect(() => {
    const timer = setTimeout(() => {
      const numQty = parseFloat(quantity);
      if (selectedPrice && !isNaN(numQty) && numQty >= 0.01) {
        const total = selectedPrice.price * numQty;
        const rounded = Math.ceil(total * 100) / 100;
        setTempTotal(rounded);
      } else {
        setTempTotal(0);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [quantity, selectedPrice]);

  const handleQuantityChange = (e) => {
    let value = e.target.value.replace(/[^0-9.,]/g, "");
    value = value.replace(",", ".");
    setQuantity(value);
  };

  const handleQuantityBlur = () => {
    let num = parseFloat(quantity);
    if (isNaN(num) || num < 0.01) {
      setQuantity("0.01");
    } else {
      setQuantity(num.toFixed(2));
    }
  };

  const handleAddToCart = () => {
    if (product.variants?.length > 0 && !selectedVariant) {
      setShowVariantModal(true);
      return;
    }

    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    const newItem = {
      productId: product.id,
      productName: product.name,
      unit: product.unit || t("detail.unit_fallback"),
      imageUrl: product.imageUrl,
      priceId: selectedPrice?.id,
      priceName: selectedPrice?.priceName,
      price: selectedPrice?.price,
      variantId: selectedVariant?.id || null,
      variantName: selectedVariant?.variantName || null,
      quantity: parseFloat(quantity),
      total: tempTotal,
    };

    const existingItemIndex = currentCart.findIndex(
      (item) =>
        item.productId === newItem.productId &&
        item.variantId === newItem.variantId &&
        item.priceId === newItem.priceId
    );

    let updatedCart;
    if (existingItemIndex !== -1) {
      updatedCart = [...currentCart];
      updatedCart[existingItemIndex].quantity += newItem.quantity;
      updatedCart[existingItemIndex].total += newItem.total;

      showToast(t("detail.toast.cart_updated", { name: product.name }), "success");
    } else {
      updatedCart = [...currentCart, newItem];
      showToast(t("detail.toast.cart_added", { name: product.name }), "success");
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setQuantity("1.00");
  };

  const handleAddToWishlist = () => {
    if (product.variants?.length > 0 && !selectedVariant) {
      setShowVariantModal(true);
      return;
    }

    const currentWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const newItem = {
      productId: product.id,
      productName: product.name,
      unit: product.unit || t("detail.unit_fallback"),
      imageUrl: product.imageUrl,
      priceId: selectedPrice?.id,
      priceName: selectedPrice?.priceName,
      price: selectedPrice?.price,
      variantId: selectedVariant?.id || null,
      variantName: selectedVariant?.variantName || null,
      addedAt: Date.now(),
    };

    const isDuplicate = currentWishlist.some(
      (item) =>
        item.productId === newItem.productId &&
        item.variantId === newItem.variantId &&
        item.priceId === newItem.priceId
    );

    if (isDuplicate) {
      showToast(t("detail.toast.wishlist_duplicate"), "info");
      return;
    }

    const updatedWishlist = [...currentWishlist, newItem];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    showToast(t("detail.toast.wishlist_added"), "success");
  };

  const selectVariant = (variant) => {
    setSelectedVariant(variant);
    setShowVariantModal(false);
  };

  const changeImage = (imgSrc) => {
    setCurrentImage(imgSrc);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price || 0);
  };

  if (loading) return <div className="text-center py-5">{t("detail.loading")}</div>;
  if (error) return <div className="alert alert-danger text-center py-5">{error}</div>;
  if (!product) return <div className="alert alert-info text-center py-5">{t("detail.not_found")}</div>;

  const unit = product.unit || t("detail.unit_fallback");

  return (
    <div className="shop-details-section section-padding pb-0 fix">
      {/* Toast container */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>

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
                        width: "100%",
                        maxWidth: "500px",
                        height: "450px",
                        overflow: "hidden",
                        borderRadius: "12px",
                      }}
                    >
                      <img
                        src={currentImage}
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
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
                            width: "80px",
                            height: "80px",
                            border: currentImage === imgSrc ? "3px solid #ff6b00" : "2px solid #ddd",
                            borderRadius: "8px",
                            overflow: "hidden",
                            cursor: "pointer",
                            transition: "all 0.3s",
                          }}
                        >
                          <img
                            src={imgSrc}
                            alt={t("detail.thumb_alt", { index: index + 1 })}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
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
                      <div className="price">{formatPrice(selectedPrice?.price || product.defaultPrice)}</div>
                    </div>

                    <p className="text">{product.description || t("detail.description_fallback")}</p>

                    {/* Chọn biến thể */}
                    {product.variants?.length > 0 && (
                      <div className="mb-4">
                        <h6>{t("detail.variant_label")}</h6>
                        <div className="d-flex flex-wrap gap-2">
                          {product.variants.map((v) => (
                            <button
                              key={v.id}
                              className={`btn btn-outline-primary ${selectedVariant?.id === v.id ? "active" : ""}`}
                              onClick={() => setSelectedVariant(v)}
                            >
                              {v.variantName}
                              {v.isDefault && ` ${t("detail.default_suffix")}`}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Chọn mức giá */}
                    {product.prices?.length > 0 && (
                      <div className="mb-4">
                        <h6>{t("detail.price_select_label")}</h6>
                        <select
                          className="form-select"
                          value={selectedPrice?.price || ""}
                          onChange={(e) => {
                            const p = product.prices.find((p) => p.price === Number(e.target.value));
                            setSelectedPrice(p);
                          }}
                        >
                          {product.prices.map((p) => (
                            <option key={p.id} value={p.price}>
                              {p.priceName} - {formatPrice(p.price)}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    {/* Số lượng + Unit */}
                    <div className="quantity mt-4">
                      <p>{t("detail.quantity_label", { unit })}</p>
                      <div className="qty-wrapper position-relative d-flex align-items-center" style={{ maxWidth: "180px" }}>
                        <button
                          className="quantity-minus qty-btn position-absolute start-0 top-50 translate-middle-y"
                          style={{
                            zIndex: 2,
                            background: "transparent",
                            border: "none",
                            fontSize: "1.2rem",
                            padding: "0 12px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            const current = parseFloat(quantity);
                            if (current > 0.01) {
                              setQuantity((current - 0.01).toFixed(2));
                            }
                          }}
                        >
                          <i className="bi bi-dash-lg"></i>
                        </button>

                        <input
                          type="text"
                          className="qty-input form-control text-center"
                          value={quantity}
                          onChange={handleQuantityChange}
                          onFocus={(e) => e.target.select()}
                          onBlur={handleQuantityBlur}
                          placeholder="0.01"
                          style={{
                            paddingLeft: "40px",
                            paddingRight: "40px",
                            textAlign: "center",
                          }}
                        />

                        <button
                          className="quantity-plus qty-btn position-absolute end-0 top-50 translate-middle-y"
                          style={{
                            zIndex: 2,
                            background: "transparent",
                            border: "none",
                            fontSize: "1.2rem",
                            padding: "0 12px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            const current = parseFloat(quantity);
                            setQuantity((current + 0.01).toFixed(2));
                          }}
                        >
                          <i className="bi bi-plus-lg"></i>
                        </button>
                      </div>
                      <small className="text-muted d-block mt-1">{t("detail.quantity_hint", { unit })}</small>
                    </div>

                    {/* Tạm tính */}
                    <div className="mt-3">
                      <strong>{t("detail.subtotal_label")}</strong> {formatPrice(tempTotal)}
                      <small className="text-muted ms-2">{t("detail.rounded_note")}</small>
                    </div>

                    <div className="actions mt-4">
                      <button className="theme-btn cart-btn0" onClick={handleAddToCart}>
                        {t("detail.add_to_cart")} <i className="bi bi-basket3-fill"></i>
                      </button>

                      <button className="theme-btn style5 border-0" onClick={handleAddToWishlist}>
                        {t("detail.wishlist")} <i className="bi bi-heart-fill"></i>
                      </button>
                    </div>

                    {/* Modal chọn biến thể */}
                    {showVariantModal && (
                      <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.6)" }}>
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">{t("detail.modal.title")}</h5>
                              <button type="button" className="btn-close" onClick={() => setShowVariantModal(false)}></button>
                            </div>
                            <div className="modal-body">
                              <p>{t("detail.modal.desc", { name: product.name })}</p>
                              <div className="d-flex flex-column gap-2">
                                {product.variants.map((v) => (
                                  <button
                                    key={v.id}
                                    className="btn btn-outline-primary text-start"
                                    onClick={() => selectVariant(v)}
                                  >
                                    {v.variantName} {v.isDefault && t("detail.default_suffix")}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button className="btn btn-secondary" onClick={() => setShowVariantModal(false)}>
                                {t("detail.modal.close")}
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

export default ShopDetails;
