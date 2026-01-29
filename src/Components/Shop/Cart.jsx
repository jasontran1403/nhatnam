import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ProductService } from "../../Utils/MainService";
import Toast from "../Toast/Toast";
import BASE_URL from "../../Utils/constants/apiEndpoints";

const Cart = () => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    const [isUpdating, setIsUpdating] = useState(false);
    const [needsUpdate, setNeedsUpdate] = useState(false);
    const [toasts, setToasts] = useState([]);
    const [editingQty, setEditingQty] = useState({});

    // Ref để kiểm tra lần load đầu tiên
    const isInitialLoad = useRef(true);

    const getCartItemKey = (item) =>
        `${item.productId}_${item.variantId ?? 'default'}`;

    // Hiển thị toast
    const showToast = (message, type = "success") => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
    };

    // Xóa toast
    const removeToast = id => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        if (cartItems.length > 0) {
            validateCart(false); // Lần đầu load: chỉ check, không update
        }
    }, []);

    const validateCart = async (isManualUpdate = false) => {
        setIsUpdating(true);
        try {
            const itemsToValidate = cartItems.map(item => ({
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

                const newCart = cartItems.map(item => {
                    const update = updates.find(u => u.productId === item.productId);

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
                }).filter(Boolean);

                // Lần đầu load: chỉ check thay đổi, KHÔNG tự update giỏ hàng
                if (isInitialLoad.current) {
                    isInitialLoad.current = false;
                    if (hasChange) {
                        showToast(
                            `Giỏ hàng cần cập nhật, món ${changedItems.join(", ")} đã thay đổi. Vui lòng nhấn "Update cart"!`,
                            "info"
                        );
                        setNeedsUpdate(true); // Disable các nút quantity/remove
                    } else {
                        // Không có thay đổi → không toast, giỏ hàng OK
                        setNeedsUpdate(false);
                    }
                } else {
                    // Từ lần sau hoặc khi nhấn nút Update cart → update thật + toast
                    setCartItems(newCart);
                    setNeedsUpdate(false); // Enable lại nút

                    if (removedCount > 0) {
                        showToast(`Có ${removedCount} sản phẩm đã bị xóa do không còn tồn tại.`, "error");
                    } else if (hasChange) {
                        showToast(
                            `Giỏ hàng đã cập nhật, món ${changedItems.join(", ")} đã thay đổi.`,
                            "info"
                        );
                    } else if (isManualUpdate) {
                        showToast("Đã cập nhật giỏ hàng thành công!", "success");
                    }
                }
            } else {
                showToast("Lỗi khi kiểm tra giỏ hàng: " + response.message, "error");
            }
        } catch (err) {
            console.error("Validate cart error:", err);
            showToast("Không thể kiểm tra giỏ hàng. Vui lòng thử lại.", "error");
        } finally {
            setIsUpdating(false);
        }
    };

    const updateQuantity = (productId, variantId, newQty) => {
        if (needsUpdate) return;

        setCartItems(prev =>
            prev.map(item =>
                item.productId === productId &&
                    item.variantId === variantId
                    ? { ...item, quantity: newQty }
                    : item
            )
        );
    };


    const removeItem = (productId, variantId) => {
        if (needsUpdate) return;

        setCartItems(prev =>
            prev.filter(
                item =>
                    !(
                        item.productId === productId &&
                        item.variantId === variantId
                    )
            )
        );

        showToast("Đã xóa sản phẩm khỏi giỏ hàng.", "success");
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="th-cart-wrapper section-padding fix bg-white">
            {/* Toast container */}
            <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
                {toasts.map(toast => (
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
                <form action="#" className="woocommerce-cart-form">
                    <table className="cart_table">
                        <thead>
                            <tr>
                                <th className="cart-col-image">Menu Image</th>
                                <th className="cart-colname">Menu Name</th>
                                <th className="cart-col-price">Price</th>
                                <th className="cart-col-quantity">Quantity</th>
                                <th className="cart-col-total">Total</th>
                                <th className="cart-col-remove">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-5">
                                        Giỏ hàng của bạn đang trống.
                                    </td>
                                </tr>
                            ) : (
                                cartItems.map(item => (
                                    <tr className="cart_item" key={getCartItemKey(item)}>
                                        <td data-title="Product">
                                            <Link className="cartimage" to={`/details/${item.productId}`}>
                                                <img
                                                    width="91"
                                                    height="91"
                                                    src={`${BASE_URL}/api/auth${item.imageUrl}`}
                                                    alt={item.productName}
                                                />
                                            </Link>
                                        </td>
                                        <td data-title="Name">
                                            <Link className="cartname" to={`/details/${item.productId}`}>
                                                {item.productName}
                                            </Link>
                                            {item.variantName && (
                                                <small className="d-block text-muted">
                                                    Biến thể: {item.variantName}
                                                </small>
                                            )}
                                            <small className="d-block text-muted">
                                                {item.priceName} - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)} / {item.unit}
                                            </small>
                                        </td>
                                        <td data-title="Price">
                                            <span className="amount">
                                                <bdi>
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                                                </bdi>
                                            </span>
                                        </td>
                                        <td data-title="Quantity">
                                            <div className="quantity" style={{ opacity: needsUpdate ? 0.5 : 1 }}>
                                                <button
                                                    type="button"
                                                    className="quantity-minus qty-btn"
                                                    disabled={needsUpdate || isUpdating}
                                                    onClick={() => {
                                                        if (item.quantity > 0.01) {
                                                            updateQuantity(item.productId, item.variantId, Number((item.quantity - 0.01).toFixed(2)));
                                                        }
                                                    }}
                                                >
                                                    <i className="bi bi-dash-lg"></i>
                                                </button>
                                                <input
                                                    type="text"
                                                    className="qty-input"
                                                    value={editingQty[getCartItemKey(item)] ?? item.quantity}
                                                    disabled={needsUpdate || isUpdating}
                                                    onFocus={(e) => {
                                                        e.target.select(); // 👈 chọn toàn bộ khi click / tab vào
                                                    }}
                                                    onChange={(e) => {
                                                        setEditingQty(prev => ({
                                                            ...prev,
                                                            [getCartItemKey(item)]: e.target.value
                                                        }));
                                                    }}
                                                    onBlur={() => {
                                                        let val = editingQty[getCartItemKey(item)] ?? item.quantity;
                                                        val = val.replace(',', '.');

                                                        let num = parseFloat(val);
                                                        if (isNaN(num) || num < 0.01) num = 0.01;

                                                        updateQuantity(
                                                            item.productId,
                                                            item.variantId,
                                                            Number(num.toFixed(2))
                                                        );

                                                        setEditingQty(prev => {
                                                            const copy = { ...prev };
                                                            delete copy[getCartItemKey(item)];
                                                            return copy;
                                                        });
                                                    }}
                                                />
                                                <button
                                                    type="button"
                                                    className="quantity-plus qty-btn"
                                                    disabled={needsUpdate || isUpdating}
                                                    onClick={() => updateQuantity(item.productId, item.variantId, Number((item.quantity + 0.01).toFixed(2)))}
                                                >
                                                    <i className="bi bi-plus-lg"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td data-title="Total">
                                            <span className="amount">
                                                <bdi>
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * item.quantity)}
                                                </bdi>
                                            </span>
                                        </td>
                                        <td data-title="Remove">
                                            <a
                                                href="#"
                                                className={`remove ${needsUpdate || isUpdating ? 'disabled' : ''}`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (!needsUpdate && !isUpdating) {
                                                        removeItem(item.productId, item.variantId);
                                                    }
                                                }}
                                            >
                                                <i className="bi bi-trash"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                            {cartItems.length > 0 && (
                                <tr>
                                    <td colSpan="6" className="actions">
                                        <div className="th-cart-coupon">
                                            <input type="text" className="form-control" placeholder="Coupon Code..." disabled={needsUpdate || isUpdating} />
                                            <button type="submit" className="theme-btn" disabled={needsUpdate || isUpdating}>Apply Coupon</button>
                                        </div>

                                        <button
                                            type="button"
                                            className="theme-btn cart-btn0"
                                            onClick={() => validateCart(true)}
                                            disabled={isUpdating}
                                        >
                                            {isUpdating ? "Đang cập nhật..." : needsUpdate ? "Cập nhật giỏ hàng" : "Update cart"}
                                        </button>
                                        <Link to="/shop" className="theme-btn">Continue Shopping</Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </form>

                {cartItems.length > 0 && (
                    <div className="row justify-content-end">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <h2 className="h4 summary-title">Cart Totals</h2>
                            <table className="cart_totals">
                                <tbody>
                                    <tr>
                                        <td>Cart Subtotal</td>
                                        <td data-title="Cart Subtotal">
                                            <span className="amount">
                                                <bdi>
                                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}
                                                </bdi>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="shipping">
                                        <th>Shipping and Handling</th>
                                        <td data-title="Shipping and Handling">
                                            <ul className="woocommerce-shipping-methods list-unstyled">
                                                <li>
                                                    <input type="radio" id="free_shipping" name="shipping_method" className="shipping_method" disabled={needsUpdate || isUpdating} />
                                                    <label htmlFor="free_shipping">Free shipping</label>
                                                </li>
                                                <li>
                                                    <input type="radio" id="flat_rate" name="shipping_method" className="shipping_method" checked disabled={needsUpdate || isUpdating} />
                                                    <label htmlFor="flat_rate">Flat rate</label>
                                                </li>
                                            </ul>
                                            <p className="woocommerce-shipping-destination">
                                                Shipping options will be updated during checkout.
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className="order-total">
                                        <td>Order Total</td>
                                        <td data-title="Total">
                                            <strong>
                                                <span className="amount">
                                                    <bdi>
                                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}
                                                    </bdi>
                                                </span>
                                            </strong>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            <div className="wc-proceed-to-checkout mt-3">
                                <Link to="/checkout" className="theme-btn btn-fw" style={{ opacity: needsUpdate ? 0.6 : 1 }}>
                                    Proceed to checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;