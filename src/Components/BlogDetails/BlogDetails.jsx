import { useEffect } from "react";
import { Link } from "react-router-dom";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const BlogDetails = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (
<div className="blog-details-section section-padding fix">
        <div className="container">
            <div className="blog-details-area">
                <div className="row g-5">
                    <div className="col-12 col-lg-8">
                        <div className="blog-post-details">
                            <div className="single-blog-post">
                                <div className="post-featured-thumb background-image" data-background="/assets/img/blog/blogThumb3_1.jpg"
                                    >
                                    </div>
                                <div className="post-content">
                                    <ul className="post-list d-flex align-items-center wow fadeInUp" data-wow-delay=".2s">
                                        <li>
                                            <i className="fa-light fa-user"></i>
                                            By Admin
                                        </li>
                                        <li>
                                            <i className="fa-light fa-comments"></i>
                                            2 Comments
                                        </li>
                                        <li>
                                            <i className="fa-regular fa-tag"></i>
                                            Fast Food Services
                                        </li>
                                    </ul>
                                    <h3 className="wow fadeInUp" data-wow-delay=".4s">
                                        Tackling the Changes of Food Industry</h3>
                                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis
                                        aute irure and dolor in reprehenderit.
                                    </p>
                                    <p className="mb-3 wow fadeInUp" data-wow-delay=".8s">
                                        The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta
                                        arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus
                                        libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac
                                        ante rutrum sed the is sodales augue consequat.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="1s">
                                        Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis
                                        convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra
                                        bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat
                                        auctor.
                                    </p>
                                    <div className="hilight-text mt-4 mb-4 wow fadeInUp" data-wow-delay=".8s">
                                        <p>Pellentesque sollicitudin congue dolor non aliquam. Morbi volutpat, nisi vel
                                            ultricies urnacondimentum, sapien neque
                                            lobortis tortor, quis efficitur mi ipsum eu metus. Praesent eleifend orci
                                            sit
                                            amet
                                            est vehicula.
                                        </p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                            viewBox="0 0 36 36" fill="none">
                                            <path
                                                d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
                                                stroke="#EB0029" />
                                            <path
                                                d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
                                                stroke="#EB0029" />
                                        </svg>
                                    </div>
                                    <p className="mt-4 mb-5 wow fadeInUp" data-wow-delay="1s">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam
                                        in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula
                                        consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis
                                        imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                                        Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
                                        Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam
                                        condimentum, vel euismod erat placerat. In iaculis arcu eros.
                                    </p>
                                    <div className="row g-4 wow fadeInUp" data-wow-delay="1s">
                                        <div className="col-lg-6">
                                            <div className="details-image">
                                                <img src="/assets/img/blog/blogThumb3_2.jpg" alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="details-image">
                                                <img src="/assets/img/blog/blogThumb3_3.jpg" alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="pt-5 wow fadeInUp" data-wow-delay="1.2s">
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis
                                        aute irure and dolor in reprehenderit.Consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim
                                        veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in
                                        reprehenderit.
                                    </p>
                                </div>
                            </div>
                            <div className="row tag-share-wrap mb-30 wow fadeInUp" data-wow-delay=".8s">
                                <div className="col-lg-8 col-12">
                                    <div className="tagcloud">
                                        <h6 className="d-inline me-2">Tags: </h6>
                                        <a href="#">News</a>
                                        <a className="active" href="#">business</a>
                                        <a href="#">marketing</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end wow fadeInUp"
                                    data-wow-delay="1.2s">
                                    <div className="social-share">
                                        <span className="me-3">Share:</span>
                                        <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                    <a href="#"><i className="bi bi-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="comments-area wow fadeInUp" data-wow-delay="1.2s">
                                <div className="comments-heading">
                                    <h3>02 Comments</h3>
                                </div>
                                <div className="blog-single-comment d-flex gap-4 pt-30 pb-30">
                                    <div className="image">
                                        <img src="/assets/img/blog/comment-author1.png" alt="image" />
                                    </div>
                                    <div className="content">
                                        <div
                                            className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                            <div className="con">
                                                <h5><a href="#">Albert Flores</a></h5>
                                                <span>March 20, 2024 at 2:37 pm</span>
                                            </div>
                                            <div className="btn">
                                                <a href="#" className="reply">Reply</a>
                                            </div>
                                        </div>
                                        <p className="mt-10 mb-0">Neque porro est qui dolorem ipsum quia quaed inventor
                                            veritatis et quasi
                                            architecto var sed efficitur turpis gilla sed
                                            sit amet finibus eros. Lorem Ipsum is simply dummy
                                        </p>
                                    </div>
                                </div>
                                <div className="blog-single-comment d-flex gap-4 pt-30 pb-30">
                                    <div className="image">
                                        <img src="/assets/img/blog/comment-author2.png" alt="image" />
                                    </div>
                                    <div className="content">
                                        <div
                                            className="head d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                            <div className="con">
                                                <h5><a href="#">Alex Flores</a></h5>
                                                <span>March 20, 2024 at 2:37 pm</span>
                                            </div>
                                            <div className="btn">
                                                <a href="#" className="reply">Reply</a>
                                            </div>
                                        </div>
                                        <p className="mt-10 mb-0">Neque porro est qui dolorem ipsum quia quaed inventor
                                            veritatis et quasi
                                            architecto var sed efficitur turpis gilla sed
                                            sit amet finibus eros. Lorem Ipsum is simply dummy
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form-wrap pt-5 wow fadeInUp" data-wow-delay="1.2s">
                                <h3>Leave a comments</h3>
                                <form action="#" id="contact-form" method="POST">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Your Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-clt">
                                                <input type="text" name="email" id="email2" placeholder="Your Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-clt">
                                                <textarea name="message" id="message"
                                                    placeholder="Write Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <button type="submit" className="theme-btn">
                                                Post a Comment <i className="bi bi-arrow-right bg-transparent text-white ms-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">

                    <div className="main-sidebar2">
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".2s">
                            <div className="wid-title">
                                <h3>Search</h3>
                            </div>
                            <div className="search-widget">
                                <form action="#">
                                    <input type="text" placeholder="Search here" />
                                    <button type="submit"><i className="bi bi-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".4s">
                            <div className="wid-title">
                                <h3>Categories</h3>
                            </div>
                            <div className="news-widget-categories">
                                <ul>
                                    <li><Link to="/blog/blog-details">Breakfast <span>(08)</span></Link></li>
                                    <li><Link to="/blog/blog-details">Restaurant <span>(11)</span></Link></li>
                                    <li className="active"><Link to="/blog/blog-details">Dinner <span>(12)</span></Link></li>
                                    <li><Link to="/blog/blog-details">Fast Food <span>(18)</span></Link></li>
                                    <li><Link to="/blog/blog-details">Launch<span>(07)</span></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".6s">
                            <div className="wid-title">
                                <h3>Recent Post</h3>
                            </div>
                            <div className="recent-post-area">
                                <div className="recent-items">
                                    <div className="recent-thumb">
                                        <img src="/assets/img/blog/blogRecentThumb3_1.png" alt="img" />
                                    </div>
                                    <div className="recent-content">
                                        <ul>
                                            <li>
                                                <img src="/assets/img/icon/calendarIcon.png" alt="icon" />
                                                18 Dec, 2024
                                            </li>
                                        </ul>
                                        <h6>
                                            <Link to="/blog/blog-details">
                                                Avoid Health Risk Food &amp; <br/>
                                                Endure High Availability
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                                <div className="recent-items">
                                    <div className="recent-thumb">
                                        <img src="/assets/img/blog/blogRecentThumb3_2.png" alt="img" />
                                    </div>
                                    <div className="recent-content">
                                        <ul>
                                            <li>
                                                <img src="/assets/img/icon/calendarIcon.png" alt="icon" />
                                                18 Dec, 2024
                                            </li>
                                        </ul>
                                        <h6>
                                            <Link to="/blog/blog-details">
                                                Tacking the Condition of <br/>
                                                Your Fresh Mind
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                                <div className="recent-items">
                                    <div className="recent-thumb">
                                        <img src="/assets/img/blog/blogRecentThumb3_3.png" alt="img" />
                                    </div>
                                    <div className="recent-content">
                                        <ul>
                                            <li>
                                                <img src="/assets/img/icon/calendarIcon.png" alt="icon" />
                                                18 Dec, 2024
                                            </li>
                                        </ul>
                                        <h6>
                                            <Link to="/blog/blog-details">
                                                What’s the Holding Back <br/>
                                                the Food Solution
                                            </Link>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".9s">
                            <div className="wid-title">
                                <h3>Tags</h3>
                            </div>
                            <div className="news-widget-categories">
                                <div className="tagcloud">
                                    <a href="#">Cheese</a>
                                    <a className="active" href="#">Cocktail</a>
                                    <a href="#">Drink</a>
                                    <a href="#">Uncategorized</a>
                                    <a href="#">Pizza</a>
                                    <a href="#">Non Veg</a>
                                </div>
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

export default BlogDetails;