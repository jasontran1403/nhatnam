import { Link } from "react-router-dom";

const ChefDetails2 = () => {
    return (
        <div>
    <div className="chefe-details-section section-padding fix">
        <div className="container">
            <div className="about-chefe-details">
                <div className="row gy-5 gx-60">
                    <div className="col-xl-6">
                        <div className="chefe-thumb">
                            <img className="img-fluid" src="/assets/img/chefe/chefeThumb2_2.png" alt="chefThumb" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="chefe-details-wrapper style2">
                            <div className="star-wrapper">
                                <img src="/assets/img/icon/star4.svg" alt="icon" /> (5k)
                            </div>
                            <h2>Ronald Richards</h2>
                            <h6>senior cooker</h6>
                            <p>On the other hand, we denounce with righteous indignation dislike men who are so beguiled
                                and
                                demoralized by the charms of pleasure of the moment so blinded by desire</p>

                            <div className="follow-area">
                                <ul className="social-media">
                                <li> <a href="https://www.facebook.com"> <i className="bi bi-facebook"></i> </a>
                                </li>
                                <li> <a href="https://www.youtube.com"> <i className="bi bi-linkedin"></i> </a> </li>
                                <li> <a href="https://www.x.com"> <i className="bi bi-twitter-x"></i> </a> </li>
                                <li> <a href="https://www.linkedin.com"><i className="bi bi-linkedin"></i> </a>
                                </li>
                                </ul>
                            </div>
                            <Link className="theme-btn" to="/menu">Contact with me<i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="about-chefe-skills-section bg-title section-padding fix">
        <div className="container">
            <div className="row gy-5 gx-60">
                <div className="col-lg-6">
                    <div className="skills-desc">
                        <h2 className="text-white">Welcome to our culinary haven where each dish is a symphony of flavors
                            meticulously</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="progress-wrap wow fadeInUp" data-wow-delay=".2s">
                        <div className="progress-meta">
                            <div className="title text-white">Cooking Chiness</div>
                            <div className="percentage text-white">86%</div>
                        </div>
                        <div className="progress-container">
                            <div className="progress-bar">
                            </div>
                        </div>
                    </div>
                    <div className="progress-wrap wow fadeInUp" data-wow-delay=".5s">
                        <div className="progress-meta">
                            <div className="title text-white">Serve Managment</div>
                            <div className="percentage text-white">95%</div>
                        </div>
                        <div className="progress-container">
                            <div className="progress-bar">
                            </div>
                        </div>
                    </div>
                    <div className="progress-wrap wow fadeInUp" data-wow-delay=".9s">
                        <div className="progress-meta">
                            <div className="title text-white">Human Interacation</div>
                            <div className="percentage text-white">75%</div>
                        </div>
                        <div className="progress-container">
                            <div className="progress-bar">
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

export default ChefDetails2;