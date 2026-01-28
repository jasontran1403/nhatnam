import { Link } from "react-router-dom";

const ServiceDetails = () => {
    return (
        <section className="service-details-section section-padding fix">
        <div className="container">
            <div className="service-details-area">
                <div className="row g-5">
                    <div className="col-12 col-lg-4">
                        <div className="main-sidebar2">
                            <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".2s">
                                <div className="wid-title">
                                    <h3>Search</h3>
                                </div>
                                <div className="search-widget">
                                    <form action="#">
                                        <input type="text" placeholder="Search here" />
                                        <button type="submit"> <i className="bi bi-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="single-sidebar-widget wow fadeInUp" data-wow-delay=".4s">
                                <div className="wid-title">
                                    <h3>Categories</h3>
                                </div>
                                <div className="news-widget-categories">
                                    <ul>
                                        <li><a href="blog-details.html">Breakfast <span>(08)</span></a></li>
                                        <li><a href="blog-details.html">Restaurant <span>(11)</span></a></li>
                                        <li className="active"><a href="blog-details.html">Dinner <span>(12)</span></a></li>
                                        <li><a href="blog-details.html">Fast Food <span>(18)</span></a></li>
                                        <li><a href="blog-details.html">Launch<span>(07)</span></a></li>
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
                                                    1 Dec, 2024
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
                                                    8 Dec, 2024
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
                                                    28 Dec, 2024
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
                    <div className="col-12 col-lg-8">
                        <div className="service-post-details">
                            <div className="single-service-post">
                                <div className="post-featured-thumb background-image"
                                    >
                                        <img src="/assets/img/services/serviceDetailsThumb1_1.jpg" alt="" />
                                </div>
                                <div className="post-content">
                                    <h3 className="title1 wow fadeInUp" data-wow-delay=".4s">100% Fresh Food</h3>
                                    <p className="mb-3 wow fadeInUp" data-wow-delay=".6s">
                                        To provide a comprehensive description of your services, it’s important to
                                        articulate not just what you offer but how these services benefit your customers
                                        and set you apart from competitors. Below, I will outline a detailed description
                                        covering various aspects of a typical service-oriented business. You can adapt
                                        these points to fit the specific details of your services
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay=".8s">
                                        If you are looking to highlight the details behind a claim of 100% fresh food,
                                        it is crucial to communicate what makes your food genuinely fresh. Here are some
                                        key points and ways you might explain this to customers, ensuring transparency
                                        and boosting trus
                                    </p>
                                    <h3 className="title2 wow fadeInUp" data-wow-delay=".4s">The Best Services Tailored for
                                        You</h3>
                                    <p className="mb-4 wow fadeInUp" data-wow-delay="1.2s">
                                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis
                                        aute irure and dolor in reprehenderit.Consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim
                                        veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in
                                        reprehenderit.
                                    </p>
                                    <div className="row gx-30 gy-5">
                                        <div className="col-xl-6">
                                            <div className="service-details-thumb">
                                                <img src="/assets/img/services/serviceDetailsThumb1_2.jpg" alt="thumb" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <p className="mb-3">To provide a comprehensive description of your services,
                                                it’s important to articulate not just what you offer but how</p>
                                            <ul className="checklist d-flex align-items-center gap-2">
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                        viewBox="0 0 18 18" fill="none">
                                                        <path opacity="0.982" fillRule="evenodd" clipRule="evenodd"
                                                            d="M16.8307 0.0155634C17.2618 -0.0560929 17.5092 0.119688 17.5729 0.542907C17.5553 0.676087 17.5097 0.799782 17.4362 0.914001C14.2331 6.07025 11.0299 11.2265 7.82682 16.3828C7.25178 17.0979 6.52913 17.2997 5.65885 16.9882C5.52866 16.9101 5.39842 16.832 5.26823 16.7538C3.60807 14.7291 1.94791 12.7044 0.287758 10.6796C-0.211089 9.72342 -0.0613473 8.88357 0.736977 8.16009C1.28538 7.81381 1.87132 7.73568 2.49479 7.92572C2.68981 8.01013 2.87209 8.11431 3.04166 8.23822C4.13541 9.24084 5.22916 10.2434 6.32291 11.246C6.49366 11.3704 6.66295 11.3704 6.83073 11.246C10.107 7.56623 13.3687 3.87482 16.6159 0.171813C16.6946 0.125071 16.7662 0.0729892 16.8307 0.0155634Z"
                                                            fill="#D40000" />
                                                    </svg>
                                                </li>
                                                <li>Overview of Services</li>
                                            </ul>
                                            <ul className="checklist d-flex align-items-center gap-2">
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                        viewBox="0 0 18 18" fill="none">
                                                        <path opacity="0.982" fillRule="evenodd" clipRule="evenodd"
                                                            d="M16.8307 0.0155634C17.2618 -0.0560929 17.5092 0.119688 17.5729 0.542907C17.5553 0.676087 17.5097 0.799782 17.4362 0.914001C14.2331 6.07025 11.0299 11.2265 7.82682 16.3828C7.25178 17.0979 6.52913 17.2997 5.65885 16.9882C5.52866 16.9101 5.39842 16.832 5.26823 16.7538C3.60807 14.7291 1.94791 12.7044 0.287758 10.6796C-0.211089 9.72342 -0.0613473 8.88357 0.736977 8.16009C1.28538 7.81381 1.87132 7.73568 2.49479 7.92572C2.68981 8.01013 2.87209 8.11431 3.04166 8.23822C4.13541 9.24084 5.22916 10.2434 6.32291 11.246C6.49366 11.3704 6.66295 11.3704 6.83073 11.246C10.107 7.56623 13.3687 3.87482 16.6159 0.171813C16.6946 0.125071 16.7662 0.0729892 16.8307 0.0155634Z"
                                                            fill="#D40000" />
                                                    </svg>
                                                </li>
                                                <li>Quality and Standards</li>
                                            </ul>
                                            <ul className="checklist d-flex align-items-center gap-2">
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                        viewBox="0 0 18 18" fill="none">
                                                        <path opacity="0.982" fillRule="evenodd" clipRule="evenodd"
                                                            d="M16.8307 0.0155634C17.2618 -0.0560929 17.5092 0.119688 17.5729 0.542907C17.5553 0.676087 17.5097 0.799782 17.4362 0.914001C14.2331 6.07025 11.0299 11.2265 7.82682 16.3828C7.25178 17.0979 6.52913 17.2997 5.65885 16.9882C5.52866 16.9101 5.39842 16.832 5.26823 16.7538C3.60807 14.7291 1.94791 12.7044 0.287758 10.6796C-0.211089 9.72342 -0.0613473 8.88357 0.736977 8.16009C1.28538 7.81381 1.87132 7.73568 2.49479 7.92572C2.68981 8.01013 2.87209 8.11431 3.04166 8.23822C4.13541 9.24084 5.22916 10.2434 6.32291 11.246C6.49366 11.3704 6.66295 11.3704 6.83073 11.246C10.107 7.56623 13.3687 3.87482 16.6159 0.171813C16.6946 0.125071 16.7662 0.0729892 16.8307 0.0155634Z"
                                                            fill="#D40000" />
                                                    </svg>
                                                </li>
                                                <li>Customization</li>
                                            </ul>
                                            <ul className="checklist d-flex align-items-center gap-2">
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                        viewBox="0 0 18 18" fill="none">
                                                        <path opacity="0.982" fillRule="evenodd" clipRule="evenodd"
                                                            d="M16.8307 0.0155634C17.2618 -0.0560929 17.5092 0.119688 17.5729 0.542907C17.5553 0.676087 17.5097 0.799782 17.4362 0.914001C14.2331 6.07025 11.0299 11.2265 7.82682 16.3828C7.25178 17.0979 6.52913 17.2997 5.65885 16.9882C5.52866 16.9101 5.39842 16.832 5.26823 16.7538C3.60807 14.7291 1.94791 12.7044 0.287758 10.6796C-0.211089 9.72342 -0.0613473 8.88357 0.736977 8.16009C1.28538 7.81381 1.87132 7.73568 2.49479 7.92572C2.68981 8.01013 2.87209 8.11431 3.04166 8.23822C4.13541 9.24084 5.22916 10.2434 6.32291 11.246C6.49366 11.3704 6.66295 11.3704 6.83073 11.246C10.107 7.56623 13.3687 3.87482 16.6159 0.171813C16.6946 0.125071 16.7662 0.0729892 16.8307 0.0155634Z"
                                                            fill="#D40000" />
                                                    </svg>
                                                </li>
                                                <li>Professional Staff</li>
                                            </ul>
                                            <ul className="checklist d-flex align-items-center gap-2">
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                        viewBox="0 0 18 18" fill="none">
                                                        <path opacity="0.982" fillRule="evenodd" clipRule="evenodd"
                                                            d="M16.8307 0.0155634C17.2618 -0.0560929 17.5092 0.119688 17.5729 0.542907C17.5553 0.676087 17.5097 0.799782 17.4362 0.914001C14.2331 6.07025 11.0299 11.2265 7.82682 16.3828C7.25178 17.0979 6.52913 17.2997 5.65885 16.9882C5.52866 16.9101 5.39842 16.832 5.26823 16.7538C3.60807 14.7291 1.94791 12.7044 0.287758 10.6796C-0.211089 9.72342 -0.0613473 8.88357 0.736977 8.16009C1.28538 7.81381 1.87132 7.73568 2.49479 7.92572C2.68981 8.01013 2.87209 8.11431 3.04166 8.23822C4.13541 9.24084 5.22916 10.2434 6.32291 11.246C6.49366 11.3704 6.66295 11.3704 6.83073 11.246C10.107 7.56623 13.3687 3.87482 16.6159 0.171813C16.6946 0.125071 16.7662 0.0729892 16.8307 0.0155634Z"
                                                            fill="#D40000" />
                                                    </svg>
                                                </li>
                                                <li>Pricing and Value</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="mt-4">To provide a comprehensive description of your services, it’s
                                        important to articulate not just what you offer but how these services benefit
                                        your customers and set you apart from competitors. Below, I will outline a
                                        detailed description covering various aspects of a typical service-oriented
                                        business. You can adapt these points to fit the specific details of your
                                        services</p>
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

export default ServiceDetails;