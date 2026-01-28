import { Link } from "react-router-dom";

const Cart = () => {
    return (
<div className="th-cart-wrapper  section-padding fix bg-white">
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
                        <tr className="cart_item">
                            <td data-title="Product">
                                <Link className="cartimage" to="/shop/shop-details"><img width="91" height="91"
                                        src="/assets/img/dishes/dishes4_1.png" alt="Image"/></Link>
                            </td>
                            <td data-title="Name">
                                <Link className="cartname" to="/shop/shop-details">Brick Oven Pepperoni</Link>
                            </td>
                            <td data-title="Price">
                                <span className="amount"><bdi><span>$</span>18</bdi></span>
                            </td>
                            <td data-title="Quantity">
                                <div className="quantity">
                                    <button className="quantity-minus qty-btn"><i className="bi bi-dash-lg"></i></button>
                                    <input type="number" className="qty-input" value="1" min="1" max="99" />
                                    <button className="quantity-plus qty-btn"><i className="bi bi-plus-lg"></i></button>
                                </div>
                            </td>
                            <td data-title="Total">
                                <span className="amount"><bdi><span>$</span>18</bdi></span>
                            </td>
                            <td data-title="Remove">
                                <a href="#" className="remove"><i className="bi bi-trash"></i></a>
                            </td>
                        </tr>
                        <tr className="cart_item">
                            <td data-title="Product">
                                <Link className="cartimage" to="/shop/shop-details"><img width="91" height="91"
                                        src="/assets/img/dishes/dishes4_2.png" alt="Image" /></Link>
                            </td>
                            <td data-title="Name">
                                <Link className="cartname" to="/shop/shop-details">Cheese Hand-Pizza</Link>
                            </td>
                            <td data-title="Price">
                                <span className="amount"><bdi><span>$</span>18</bdi></span>
                            </td>
                            <td data-title="Quantity">
                                <div className="quantity">
                                <button className="quantity-minus qty-btn"><i className="bi bi-dash-lg"></i></button>
                                    <input type="number" className="qty-input" value="1" min="1" max="99" />
                                    <button className="quantity-plus qty-btn"><i className="bi bi-plus-lg"></i></button>
                                </div>
                            </td>
                            <td data-title="Total">
                                <span className="amount"><bdi><span>$</span>18</bdi></span>
                            </td>
                            <td data-title="Remove">
                                <a href="#" className="remove"><i className="bi bi-trash"></i></a>
                            </td>
                        </tr>
                        <tr className="cart_item">
                            <td data-title="Product">
                                <Link className="cartimage" to="/shop/shop-details"><img width="91" height="91"
                                        src="/assets/img/dishes/dishes4_3.png" alt="Image" /></Link>
                            </td>
                            <td data-title="Name">
                                <Link className="cartname" to="/shop/shop-details">Over Loaded Vegan</Link>
                            </td>
                            <td data-title="Price">
                                <span className="amount"><bdi><span>$</span>18</bdi></span>
                            </td>
                            <td data-title="Quantity">
                                <div className="quantity">
                                <button className="quantity-minus qty-btn"><i className="bi bi-dash-lg"></i></button>
                                    <input type="number" className="qty-input" value="1" min="1" max="99" />
                                    <button className="quantity-plus qty-btn"><i className="bi bi-plus-lg"></i></button>
                                </div>
                            </td>
                            <td data-title="Total">
                                <span className="amount"><bdi><span>$</span>18</bdi></span>
                            </td>
                            <td data-title="Remove">
                                <a href="#" className="remove"><i className="bi bi-trash"></i></a>
                            </td>
                        </tr>
                        <tr className="cart_item">
                            <td data-title="Product">
                                <Link className="cartimage" to="/shop/shop-details"><img width="91" height="91"
                                        src="/assets/img/dishes/dishes4_4.png" alt="Image" /></Link>
                            </td>
                            <td data-title="Name">
                                <Link className="cartname" to="/shop/shop-details">Chicken Leg Piece</Link>
                            </td>
                            <td data-title="Price">
                                <span className="amount"><bdi><span>$</span>18</bdi></span>
                            </td>
                            <td data-title="Quantity">
                                <div className="quantity">
                                <button className="quantity-minus qty-btn"><i className="bi bi-dash-lg"></i></button>
                                    <input type="number" className="qty-input" value="1" min="1" max="99" />
                                    <button className="quantity-plus qty-btn"><i className="bi bi-plus-lg"></i></button>
                                </div>
                            </td>
                            <td data-title="Total">
                                <span className="amount"><bdi><span>$</span>18</bdi></span>
                            </td>
                            <td data-title="Remove">
                                <a href="#" className="remove"><i className="bi bi-trash"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="6" className="actions">
                                <div className="th-cart-coupon">
                                    <input type="text" className="form-control" placeholder="Coupon Code..." />
                                    <button type="submit" className="theme-btn">Apply Coupon</button>
                                </div>

                                <Link to="/shop/cart" className="theme-btn cart-btn0">Update cart</Link>
                                <Link to="/shop" className="theme-btn">Continue Shopping</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div className="row justify-content-end">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <h2 className="h4 summary-title">Cart Totals</h2>
                    <table className="cart_totals">
                        <tbody>
                            <tr>
                                <td>Cart Subtotal</td>
                                <td data-title="Cart Subtotal">
                                    <span className="amount"><bdi><span>$</span>47</bdi></span>
                                </td>
                            </tr>
                            <tr className="shipping">
                                <th>Shipping and Handling</th>
                                <td data-title="Shipping and Handling">
                                    <ul className="woocommerce-shipping-methods list-unstyled">
                                        <li>
                                            <input type="radio" id="free_shipping" name="shipping_method"
                                                className="shipping_method" />
                                            <label htmlFor="free_shipping">Free shipping</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="flat_rate" name="shipping_method"
                                                className="shipping_method" checked="checked" />
                                            <label htmlFor="flat_rate">Shipping Price</label>
                                        </li>
                                    </ul>
                                    <p className="woocommerce-shipping-destination">
                                        Shipping options will be updated during checkout.
                                    </p>
                                    <form action="#" method="post">
                                        <a href="#" className="shipping-calculator-button">Change address</a>
                                        <div className="shipping-calculator-form">
                                            <p className="form-row">
                                                <select className="form-select">
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="BD" selected="selected">Bangladesh</option>
                                                </select>
                                            </p>
                                            <p>
                                                <select className="form-select">
                                                    <option value="">Select an option…</option>
                                                    <option value="BD-05">Bagerhat</option>
                                                    <option value="BD-01">Bandarban</option>
                                                    <option value="BD-02">Barguna</option>
                                                    <option value="BD-06">Barishal</option>
                                                </select>
                                            </p>
                                            <p className="form-row">
                                                <input type="text" className="form-control" placeholder="Town / City" />
                                            </p>
                                            <p className="form-row">
                                                <input type="text" className="form-control" placeholder="Postcode / ZIP" />
                                            </p>
                                            <p>
                                                <button className="theme-btn btn-fw">Update</button>
                                            </p>
                                        </div>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="order-total">
                                <td>Order Total</td>
                                <td data-title="Total">
                                    <strong><span className="amount"><bdi><span>$</span>47</bdi></span></strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="wc-proceed-to-checkout mt-3">
                        <Link to="/checkout" className="theme-btn btn-fw">Proceed to checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cart;