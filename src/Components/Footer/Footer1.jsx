import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <footer className="footer-section bg-title fix">
        <div className="footer-widgets-wrapper">
            <div className="shape1 float-bob-y d-none d-xxl-block"><img src="/assets/img/shape/footerShape1_1.png"
                    alt="shape" /></div>
            <div className="shape2 d-none d-xxl-block"><img src="/assets/img/shape/footerShape1_2.png" alt="shape" /></div>
            <div className="shape3 d-none d-xxl-block"><img src="/assets/img/shape/footerShape1_3.png" alt="shape" /></div>
            <div className="shape4  d-none d-xxl-block"><img src="/assets/img/shape/footerShape1_4.png" alt="shape" /></div>
            <div className="container">
                <div className="footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4">
                            <div className="fancy-box">
                                <div className="item1"><i className="bi bi-geo-alt-fill"></i></div>
                                <div className="item2">
                                    <h6>address</h6>
                                    <p>4648 Rocky Road Philadelphia </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                            <div className="fancy-box">
                                <div className="item1"><i className="bi bi-envelope-fill"></i></div>
                                <div className="item2">
                                    <h6>send email</h6>
                                    <p>info@exmple.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                            <div className="fancy-box">
                                <div className="item1"><i className="bi bi-telephone-fill"></i></div>
                                <div className="item2">
                                    <h6>call emergency</h6>
                                    <p>+88 0123 654 99</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <Link to="/">
                                    <img src="/assets/img/logo/logoWhite.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="footer-content">
                                <p>
                                    Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a lacinia
                                    curabitur
                                    lacinia mollis
                                </p>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                    <a href="#"><i className="bi bi-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Quick Links</h3>
                            </div>
                            <ul className="list-area">
                                <li>
                                    <Link to="/about">
                                    <i className="bi bi-chevron-double-right"></i>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gallery">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Our Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Our Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq">
                                    <i className="bi bi-chevron-double-right"></i>
                                        FAQ’S
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Our Menu</h3>
                            </div>
                            <ul className="list-area">
                                <li>
                                    <Link to="/menu">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Burger King
                                    </Link>
                                </li>
                                <li>
                                <Link to="/menu">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Pizza king
                                    </Link>
                                </li>
                                <li>
                                <Link to="/menu">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Fresh Food
                                    </Link>
                                </li>
                                <li>
                                <Link to="/menu">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Vegetable
                                    </Link>
                                </li>
                                <li>
                                <Link to="/menu">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Desserts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Contact Us</h3>
                            </div>
                            <ul className="list-area">
                                <li className="mb-2">
                                    Monday – Friday: <span className="text-theme-color2"> 8am – 4pm </span>
                                </li>
                                <li>
                                    Saturday: <span className="text-theme-color2"> 8am – 12am </span>
                                </li>
                            </ul>
                            <form className="mt-4">
                                <div className="form-control">
                                    <input className="email" type="email" placeholder="Your email address" /> 
                                    <button type="submit" className="submit-btn"><i className="bi bi-arrow-right"></i></button>
                                </div>
                                <div className="form-control style2 mt-3">
                                    <input id="checkbox" name="checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">I agree to the <a href="contact.html">Privacy Policy.
                                        </a></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-wrapper d-flex align-items-center justify-content-between">
                    <p className="wow fadeInLeft" data-wow-delay=".3s">
                        © All Copyright 2024 by <a href="#">FreshEat</a>
                    </p>
                    <ul className="brand-logo wow fadeInRight" data-wow-delay=".5s">
                        <li>
                            <a className="text-white" href="#">
                                Terms & Condition
                            </a>
                        </li>
                        <li>
                            <a className="text-white" href="#">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer1;