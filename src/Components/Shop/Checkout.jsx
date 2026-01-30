import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductService } from "../../Utils/MainService";
import Toast from "../Toast/Toast";
import { BASE_URL } from "../../Utils/constants/apiEndpoints";

const Checkout = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [toasts, setToasts] = useState([]);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [orderCode, setOrderCode] = useState("");

    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (showSuccessModal) {
            const timer = setInterval(() => {
                setCountdown(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setShowSuccessModal(false);
                        navigate('/');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [showSuccessModal, navigate]);

    // Form billing (người đặt)
    const [billing, setBilling] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        notes: "",
    });

    // Form shipping khác (người nhận)
    const [shipDifferent, setShipDifferent] = useState(false);
    const [shipping, setShipping] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
    });

    // Payment method
    const [paymentMethod, setPaymentMethod] = useState("cod");

    const [isLoading, setIsLoading] = useState(false);

    // Toast
    const showToast = (message, type = "success") => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
    };

    const removeToast = id => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    // Load cart từ localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);

        const total = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setSubtotal(total);
    }, []);

    // Validate giỏ hàng trước khi đặt (tự động khi mount)
    useEffect(() => {
        if (cartItems.length > 0) {
            validateCartBeforeCheckout();
        }
    }, [cartItems]);

    const validateCartBeforeCheckout = async () => {
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

                const newCart = cartItems.map(item => {
                    const update = updates.find(u => u.productId === item.productId);

                    if (!update || update.status === "UNCHANGED") return item;

                    hasChange = true;

                    if (update.status === "REMOVED") {
                        removedCount++;
                        return null;
                    }

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

                if (hasChange) {
                    setCartItems(newCart);
                    if (removedCount > 0) {
                        showToast(`Có ${removedCount} sản phẩm đã bị xóa do không còn tồn tại.`, "error");
                    } else {
                        showToast("Một số thông tin sản phẩm đã thay đổi và đã được cập nhật.", "info");
                    }
                }
            } else {
                showToast("Lỗi khi kiểm tra giỏ hàng trước khi đặt.", "error");
            }
        } catch (err) {
            console.error("Validate error:", err);
            showToast("Không thể kiểm tra giỏ hàng.", "error");
        }
    };

    const handleInputChange = (e, form = "billing") => {
        const { name, value } = e.target;
        if (form === "billing") {
            setBilling(prev => ({ ...prev, [name]: value }));
        } else {
            setShipping(prev => ({ ...prev, [name]: value }));
        }
    };

    const handlePlaceOrder = async (e) => {
        e.preventDefault();

        if (!billing.firstName || !billing.phone || !billing.address) {
            showToast("Vui lòng điền đầy đủ thông tin người đặt hàng.", "error");
            return;
        }

        if (shipDifferent && (!shipping.firstName || !shipping.phone || !shipping.address)) {
            showToast("Vui lòng điền đầy đủ thông tin người nhận.", "error");
            return;
        }

        if (cartItems.length === 0) {
            showToast("Giỏ hàng trống.", "error");
            return;
        }

        setIsLoading(true);

        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                showToast("Vui lòng đăng nhập để đặt hàng.", "error");
                navigate('/login');
                return;
            }

            const orderRequest = {
                customerName: `${billing.firstName} ${billing.lastName || ''}`.trim(),
                customerPhone: billing.phone,
                customerEmail: billing.email || null,
                shippingAddress: billing.address.trim(),
                notes: billing.notes || null,
                paymentMethod,
                items: cartItems.map(item => ({
                    productId: item.productId,
                    variantId: item.variantId || null,
                    priceId: item.priceId,
                    quantity: item.quantity,
                })),
            };

            const response = await fetch(`${BASE_URL}/api/seller/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(orderRequest),
            });

            const result = await response.json();

            if (result.success) {
                setOrderCode(result.data.orderCode);
                setShowSuccessModal(true);
                localStorage.removeItem('cart');

                // Tự động redirect về home sau 5 giây
                const timer = setTimeout(() => {
                    setShowSuccessModal(false);
                    navigate('/');
                }, 50000);

                // Cleanup timer nếu modal bị đóng thủ công
                return () => clearTimeout(timer);
            } else {
                showToast(result.message || "Đặt hàng thất bại. Vui lòng thử lại.", "error");
            }
        } catch (err) {
            console.error("Place order error:", err);
            showToast("Lỗi kết nối server. Vui lòng thử lại sau.", "error");
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackToHome = () => {
        setShowSuccessModal(false);
        navigate('/');
    };

    return (
        <div className="th-checkout-wrapper section-padding fix">
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
                <form onSubmit={handlePlaceOrder} className="woocommerce-checkout mt-5">
                    <div className="row">
                        {/* Billing Details */}
                        <div className="col-lg-6">
                            <h2 className="h4">Thông tin thanh toán</h2>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Họ"
                                        name="firstName"
                                        value={billing.firstName}
                                        onChange={e => handleInputChange(e, "billing")}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tên"
                                        name="lastName"
                                        value={billing.lastName}
                                        onChange={e => handleInputChange(e, "billing")}
                                    />
                                </div>
                                <div className="col-12 form-group">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Số điện thoại"
                                        name="phone"
                                        value={billing.phone}
                                        onChange={e => handleInputChange(e, "billing")}
                                        required
                                    />
                                </div>
                                <div className="col-12 form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        value={billing.email}
                                        onChange={e => handleInputChange(e, "billing")}
                                    />
                                </div>
                                <div className="col-12 form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Địa chỉ giao hàng"
                                        name="address"
                                        value={billing.address}
                                        onChange={e => handleInputChange(e, "billing")}
                                        required
                                    />
                                </div>
                                <div className="col-12 form-group">
                                    <textarea
                                        cols="20"
                                        rows="5"
                                        className="form-control"
                                        placeholder="Ghi chú đơn hàng (ví dụ: giao hàng sau 5h chiều)"
                                        name="notes"
                                        value={billing.notes}
                                        onChange={e => handleInputChange(e, "billing")}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Shipping Different Address */}
                        {/* <div className="col-lg-6">
                            <p id="ship-to-different-address">
                                <input
                                    id="ship-to-different-address-checkbox"
                                    type="checkbox"
                                    checked={shipDifferent}
                                    onChange={() => setShipDifferent(!shipDifferent)}
                                />
                                <label htmlFor="ship-to-different-address-checkbox">
                                    Giao đến địa chỉ khác?
                                </label>
                            </p>

                            {shipDifferent && (
                                <div className="shipping_address mt-3">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Họ người nhận"
                                                name="firstName"
                                                value={shipping.firstName}
                                                onChange={e => handleInputChange(e, "shipping")}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Tên người nhận"
                                                name="lastName"
                                                value={shipping.lastName}
                                                onChange={e => handleInputChange(e, "shipping")}
                                            />
                                        </div>
                                        <div className="col-12 form-group">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Số điện thoại người nhận"
                                                name="phone"
                                                value={shipping.phone}
                                                onChange={e => handleInputChange(e, "shipping")}
                                                required
                                            />
                                        </div>
                                        <div className="col-12 form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Địa chỉ người nhận"
                                                name="address"
                                                value={shipping.address}
                                                onChange={e => handleInputChange(e, "shipping")}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div> */}
                    </div>

                    {/* Summary Order */}
                    <h4 className="mt-5">Tóm tắt đơn hàng</h4>
                    <table className="cart_table mb-20">
                        <thead>
                            <tr>
                                <th className="cart-col-image"></th>
                                <th className="cart-colname">Sản phẩm</th>
                                <th className="cart-colname">Đơn vị</th>
                                <th className="cart-col-price">Đơn giá</th>
                                <th className="cart-col-quantity">Số lượng</th>
                                <th className="cart-col-total">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.productId}>
                                    <td>
                                        <img
                                            width="91"
                                            height="91"
                                            src={`${BASE_URL}/api/auth${item.imageUrl}`}
                                            alt={item.productName}
                                        />
                                    </td>
                                    <td>
                                        {item.productName}
                                        {item.variantName && <small className="d-block text-muted">Biến thể: {item.variantName}</small>}
                                        <small className="d-block text-muted">
                                            {item.priceName} - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)} / {item.unit}
                                        </small>
                                    </td>
                                    <td>{item.unit}</td>
                                    <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</td>
                                    <td>{item.quantity.toFixed(2)}</td>
                                    <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price * item.quantity)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="cart-subtotal">
                                <th>Tạm tính</th>
                                <td colSpan="5">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}</td>
                            </tr>
                            <tr className="order-total">
                                <th>Tổng cộng</th>
                                <td colSpan="5">
                                    <strong>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}</strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>

                    {/* Payment Methods */}
                    <div className="mt-4">
                        <h4>Phương thức thanh toán</h4>
                        <ul className="wc_payment_methods payment_methods methods list-unstyled">
                            <li className="wc_payment_method payment_method_cod">
                                <input
                                    id="payment_method_cod"
                                    type="radio"
                                    className="input-radio"
                                    name="payment_method"
                                    value="cod"
                                    checked={paymentMethod === "cod"}
                                    onChange={() => setPaymentMethod("cod")}
                                />
                                <label htmlFor="payment_method_cod">Thanh toán khi nhận hàng (COD)</label>
                            </li>
                            <li className="wc_payment_method payment_method_bank">
                                <input
                                    id="payment_method_bank"
                                    type="radio"
                                    className="input-radio"
                                    name="payment_method"
                                    value="bank_transfer"
                                    checked={paymentMethod === "bank_transfer"}
                                    onChange={() => setPaymentMethod("bank_transfer")}
                                />
                                <label htmlFor="payment_method_bank">Chuyển khoản ngân hàng</label>
                            </li>
                        </ul>
                    </div>

                    {/* Place Order */}
                    <div className="form-row place-order mt-4">
                        <button
                            type="submit"
                            className="theme-btn btn-fw"
                            disabled={isLoading || cartItems.length === 0}
                        >
                            {isLoading ? "Đang xử lý..." : "Đặt hàng"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        padding: '32px',
                        maxWidth: '480px',
                        width: '90%',
                        textAlign: 'center',
                        position: 'relative',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    }}>
                        {/* Nút đóng */}
                        <button
                            onClick={handleBackToHome}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'none',
                                border: 'none',
                                fontSize: '24px',
                                color: '#6b7280',
                                cursor: 'pointer',
                            }}
                        >
                            ×
                        </button>

                        {/* Icon check xanh */}
                        <div style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: '#dcfce7',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px',
                        }}>
                            <svg style={{ width: '48px', height: '48px', color: '#22c55e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
                            Thank you for your purchase
                        </h2>

                        <p style={{ color: '#4b5563', marginBottom: '32px', lineHeight: '1.6' }}>
                            We've received your order and it will ship in 5-7 business days.<br />
                            Your order number is <strong>#{orderCode}</strong>.
                        </p>

                        {/* Order Summary */}
                        <div style={{
                            backgroundColor: '#f9fafb',
                            padding: '24px',
                            borderRadius: '12px',
                            marginBottom: '32px',
                            textAlign: 'left',
                        }}>
                            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
                                Order Summary
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {cartItems.map(item => (
                                    <div key={item.productId} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <img
                                            src={`${BASE_URL}/api/auth${item.imageUrl}`}
                                            alt={item.productName}
                                            style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                                        />
                                        <div style={{ flex: 1 }}>
                                            <p style={{ fontWeight: '500', color: '#111827' }}>{item.productName}</p>
                                            {item.variantName && (
                                                <p style={{ fontSize: '14px', color: '#6b7280' }}>Biến thể: {item.variantName}</p>
                                            )}
                                            <p style={{ fontSize: '14px', color: '#6b7280' }}>
                                                {item.priceName} - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)} × {item.quantity.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div style={{
                                    borderTop: '1px solid #e5e7eb',
                                    paddingTop: '16px',
                                    marginTop: '16px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    fontWeight: 'bold',
                                    fontSize: '18px',
                                    color: '#111827',
                                }}>
                                    <span>Total</span>
                                    <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(subtotal)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Back to Home Button */}
                        <button
                            onClick={handleBackToHome}
                            style={{
                                backgroundColor: '#16a34a',
                                color: 'white',
                                padding: '16px 40px',
                                borderRadius: '12px',
                                fontWeight: '600',
                                border: 'none',
                                cursor: 'pointer',
                                width: '100%',
                                fontSize: '18px',
                                transition: 'background-color 0.2s',
                            }}
                            onMouseOver={e => e.target.style.backgroundColor = '#15803d'}
                            onMouseOut={e => e.target.style.backgroundColor = '#16a34a'}
                        >
                            Back to Home
                        </button>

                        {/* Countdown */}
                        <p style={{ marginTop: '16px', fontSize: '14px', color: '#6b7280' }}>
                            Redirecting to home in {countdown} seconds...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;