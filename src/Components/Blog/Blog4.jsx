import { Link } from "react-router-dom";

const Blog4 = () => {
    return (
        <section className="news-standard section-padding fix">
        <div className="container">
            <div className="row g-4">
                <div className="col-12 col-lg-8">
                    <div className="news-standard-wrapper">
                        <div className="news-standard-items wow fadeInUp" data-wow-delay=".2s">
                            <div className="news-thumb">
                                <img src="/assets/img/blog/blogThumb2_1.jpg" alt="img" />
                                <div className="post-date">
                                    <h3>
                                        27 <br/>
                                        <span>Feb</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="news-content">
                                <ul>
                                    <li>
                                    <i className="bi bi-person"></i>
                                        By Admin
                                    </li>
                                    <li>
                                    <i className="bi bi-chat"></i>
                                        3 Comments
                                    </li>
                                </ul>
                                <h3>
                                <Link to="/blog/blog-details">There are many Bad Effect Of junk food Restaurant</Link>
                                </h3>
                                <p className="mb-3">
                                    Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci
                                    malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum
                                    mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam
                                    et, venenatis.
                                </p>
                                <Link to="/blog/blog-details" className="theme-btn mt-1">
                                    Read More <i className="bi bi-arrow-right bg-transparent text-white"></i>
                                    
                                </Link>
                            </div>
                        </div>
                        <div className="news-standard-items wow fadeInUp" data-wow-delay=".4s">
                            <div className="news-thumb">
                                <img src="/assets/img/blog/blogThumb2_2.jpg" alt="img" />
                                <div className="post-date">
                                    <h3>
                                        19 <br/>
                                        <span>Feb</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="news-content">
                                <ul>
                                    <li>
                                    <i className="bi bi-person"></i>
                                        By Admin
                                    </li>
                                    <li>
                                    <i className="bi bi-chat"></i>
                                        2 Comments
                                    </li>
                                </ul>
                                <h3>
                                <Link to="/blog/blog-details">There are many variations of Foods are available</Link>
                                </h3>
                                <p className="mb-3">
                                    Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci
                                    malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum
                                    mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam
                                    et, venenatis.
                                </p>
                                <Link to="/blog/blog-details" className="theme-btn">
                                    Read More
                                    <i className="bi bi-arrow-right bg-transparent text-white"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="news-standard-items wow fadeInUp" data-wow-delay=".6s">
                            <div className="news-thumb">
                                <img src="/assets/img/blog/blogThumb2_3.jpg" alt="img" />
                                <div className="post-date">
                                    <h3>
                                        28 <br/>
                                        <span>Feb</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="news-content">
                                <ul>
                                    <li>
                                    <i className="bi bi-person"></i>
                                        By Admin
                                    </li>
                                    <li>
                                    <i className="bi bi-chat"></i>
                                        0 Comments
                                    </li>
                                </ul>
                                <h3>
                                <Link to="/blog/blog-details">Avoid Health Risk Food Endure High Availability</Link>
                                </h3>
                                <p className="mb-3">
                                    Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus in magna ut orci
                                    malesuada the sollicitudin. Aenean faucibus scelerisque convallis. Quisque interdum
                                    mauris id nunc molestie tincidunt erat gravida. Nullam dui libero, mollis ac quam
                                    et, venenatis.
                                </p>
                                <Link to="/blog/blog-details" className="theme-btn mt-1">
                                    Read More
                                    <i className="bi bi-arrow-right bg-transparent text-white"></i>
                                </Link>
                            </div>
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
    </section>

    );
};

export default Blog4;