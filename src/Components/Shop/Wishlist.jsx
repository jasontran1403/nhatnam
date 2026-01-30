import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ProductService } from "../../Utils/MainService";
import Toast from "../Toast/Toast";
import { BASE_URL } from "../../Utils/constants/apiEndpoints";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedItems, setSelectedItems] = useState([]); // Lưu dạng "productId-variantId-priceId"
  const [isUpdating, setIsUpdating] = useState(false);
  const [toasts, setToasts] = useState([]);
  const isInitialMount = useRef(true);

  // Tạo unique key cho mỗi item
  const getItemKey = (item) =>
    `${item.productId}-${item.variantId || "no-variant"}-${item.priceId || "no-price"}`;

  // Hiển thị toast
  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  // Xóa toast
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Lưu wishlist vào localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Load & validate wishlist khi mount
  useEffect(() => {
    if (wishlistItems.length > 0) {
      validateWishlist();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const validateWishlist = async () => {
    setIsUpdating(true);
    try {
      const itemsToValidate = wishlistItems.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        unit: item.unit,
        imageUrl: item.imageUrl,
        priceId: item.priceId,
        priceName: item.priceName,
        price: item.price,
        variantId: item.variantId,
        variantName: item.variantName,
      }));

      const response = await ProductService.validateCartItems(itemsToValidate);

      if (response.code === 900) {
        const updates = response.data;
        let hasChange = false;
        let removedCount = 0;
        let changedItems = [];

        const newWishlist = wishlistItems
          .map((item) => {
            const update = updates.find(
              (u) =>
                u.productId === item.productId &&
                u.variantId === item.variantId &&
                u.priceId === item.priceId
            );

            if (!update || update.status === "UNCHANGED") {
              return item;
            }

            hasChange = true;

            if (update.status === "REMOVED") {
              removedCount++;
              return null;
            }

            changedItems.push(item.productName || "Sản phẩm");

            return {
              ...item,
              productName: update.productName || item.productName,
              unit: update.unit || item.unit,
              imageUrl: update.imageUrl || item.imageUrl,
              priceId: update.priceId || item.priceId,
              priceName: update.priceName || item.priceName,
              price: update.price || item.price,
              variantId: update.variantId || item.variantId,
              variantName: update.variantName || item.variantName,
            };
          })
          .filter(Boolean);

        if (hasChange) {
          setWishlistItems(newWishlist);
          if (removedCount > 0) {
            showToast(`Có ${removedCount} sản phẩm đã bị xóa khỏi danh sách yêu thích.`, "error");
          } else {
            showToast(
              `Danh sách yêu thích đã được cập nhật (món ${changedItems.join(", ")} thay đổi).`,
              "info"
            );
          }
        } else if (!isInitialMount.current) {
          showToast("Danh sách yêu thích đã được cập nhật thành công!", "success");
        }

        isInitialMount.current = false;
      } else {
        showToast("Lỗi khi kiểm tra danh sách yêu thích: " + response.message, "error");
      }
    } catch (err) {
      console.error("Validate wishlist error:", err);
      showToast("Không thể kiểm tra danh sách yêu thích.", "error");
    } finally {
      setIsUpdating(false);
    }
  };

  // Xóa 1 item
  const removeItem = (productId, variantId, priceId) => {
    setWishlistItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.variantId === variantId &&
            item.priceId === priceId
          )
      )
    );
    showToast("Đã xóa sản phẩm khỏi danh sách yêu thích.", "success");
  };

  // Xóa nhiều item đã chọn
  const removeSelected = () => {
    if (selectedItems.length === 0) {
      showToast("Vui lòng chọn sản phẩm để xóa.", "info");
      return;
    }

    setWishlistItems((prev) =>
      prev.filter((item) => !selectedItems.includes(getItemKey(item)))
    );
    setSelectedItems([]);
    showToast(`Đã xóa ${selectedItems.length} sản phẩm khỏi danh sách yêu thích.`, "success");
  };

  // === Hàm thêm vào giỏ hàng từ wishlist (lấy từ ShopDetails, điều chỉnh cho wishlist) ===
  const addToCartFromWishlist = (item) => {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    const newItem = {
      productId: item.productId,
      productName: item.productName,
      unit: item.unit || "Kg",
      imageUrl: item.imageUrl,
      priceId: item.priceId,
      priceName: item.priceName,
      price: item.price,
      variantId: item.variantId || null,
      variantName: item.variantName || null,
      quantity: 1.00,           // Mặc định 1 khi add từ wishlist
      total: item.price * 1.00, // Tính ngay total
    };

    const existingIndex = currentCart.findIndex(
      (cartItem) =>
        cartItem.productId === newItem.productId &&
        cartItem.variantId === newItem.variantId &&
        cartItem.priceId === newItem.priceId
    );

    let updatedCart;
    if (existingIndex !== -1) {
      // Đã có → tăng số lượng
      updatedCart = [...currentCart];
      updatedCart[existingIndex].quantity += 1.00;
      updatedCart[existingIndex].total += newItem.price; // tăng đúng giá 1 đơn vị
      showToast(`Đã tăng số lượng "${item.productName}" trong giỏ hàng!`, "success");
    } else {
      // Chưa có → thêm mới
      updatedCart = [...currentCart, newItem];
      showToast(`Đã thêm "${item.productName}" vào giỏ hàng!`, "success");
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Checkbox select all
  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(wishlistItems.map(getItemKey));
    } else {
      setSelectedItems([]);
    }
  };

  // Checkbox từng item
  const toggleSelectItem = (item) => {
    const key = getItemKey(item);
    setSelectedItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <div className="section-padding">
      {/* Toast container */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={1800}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>

      <div className="container">
        <div className="tinv-wishlist woocommerce tinv-wishlist-clear">
          <div className="tinv-header">
            <h2 className="mb-30">Danh sách yêu thích</h2>
          </div>

          {wishlistItems.length === 0 ? (
            <p className="text-center py-5">Danh sách yêu thích của bạn đang trống.</p>
          ) : (
            <form action="#" method="post" autoComplete="off">
              <table className="tinvwl-table-manage-list">
                <thead>
                  <tr>
                    <th className="product-cb">
                      <input
                        type="checkbox"
                        className="global-cb"
                        checked={selectedItems.length === wishlistItems.length && wishlistItems.length > 0}
                        onChange={toggleSelectAll}
                        disabled={isUpdating}
                      />
                    </th>
                    <th className="product-remove"></th>
                    <th className="product-thumbnail">&nbsp;</th>
                    <th className="product-name">
                      <span className="tinvwl-full">Tên sản phẩm</span>
                      <span className="tinvwl-mobile">Sản phẩm</span>
                    </th>
                    <th className="product-price">Đơn giá</th>
                    <th className="product-stock">Trạng thái</th>
                    <th className="product-action">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item) => {
                    const itemKey = getItemKey(item);

                    return (
                      <tr key={itemKey} className="wishlist_item">
                        <td className="product-cb">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(itemKey)}
                            onChange={() => toggleSelectItem(item)}
                            disabled={isUpdating}
                          />
                        </td>
                        <td className="product-remove">
                          <button
                            type="button"
                            onClick={() =>
                              removeItem(item.productId, item.variantId, item.priceId)
                            }
                            disabled={isUpdating}
                            title="Xóa"
                          >
                            <i className="bi bi-x"></i>
                          </button>
                        </td>
                        <td className="product-thumbnail">
                          <Link to={`/details/${item.productId}`}>
                            <img
                              src={`${BASE_URL}/api/auth${item.imageUrl}`}
                              alt={item.productName}
                              className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                            />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link to={`/details/${item.productId}`}>{item.productName}</Link>
                          {item.variantName && (
                            <small className="d-block text-muted">
                              Biến thể: {item.variantName}
                            </small>
                          )}
                          <small className="d-block text-muted">
                            {item.priceName} -{" "}
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.price)}{" "}
                            / {item.unit}
                          </small>
                        </td>
                        <td className="product-price">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(item.price)}
                            </bdi>
                          </span>
                        </td>
                        <td className="product-stock">
                          <p className="stock in-stock">
                            <span>
                              <i className="fas fa-check text-success"></i>
                            </span>
                            <span className="tinvwl-txt text-success">Có sẵn</span>
                          </p>
                        </td>
                        <td className="product-action">
                          <button
                            className="button as-btn style4"
                            type="button"
                            onClick={() => addToCartFromWishlist(item)}
                            disabled={isUpdating}
                            title="Thêm vào giỏ"
                          >
                            <i className="bi bi-basket3-fill"></i>
                            <span className="tinvwl-txt">Thêm vào giỏ</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {selectedItems.length > 0 && (
                <div className="mt-4">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={removeSelected}
                    disabled={isUpdating}
                  >
                    Xóa {selectedItems.length} sản phẩm đã chọn
                  </button>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;