
const ChefDetails1 = () => {
    return (
<div className="chefe-details-section section-padding fix">
        <div className="container">
            <div className="row gy-5 gx-60">
                <div className="col-xl-6">
                    <div className="chefe-thumb">
                        <img className="img-fluid" src="/assets/img/chefe/chefeThumb2_1.png" alt="chefThumb" />
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="chefe-details-wrapper style1">
                        <h2>Ronald Richards</h2>
                        <h6>senior cooker</h6>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit food voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi</p>
                        <h5>Skills:</h5>
                        <div className="progress-wrap wow fadeInUp" data-wow-delay=".2s">
                            <div className="progress-meta">
                                <div className="title">Cooking Chiness</div>
                                <div className="percentage">86%</div>
                            </div>
                            <div className="progress-container">
                                <div className="progress-bar">
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrap wow fadeInUp" data-wow-delay=".5s">
                            <div className="progress-meta">
                                <div className="title">Serve Managment</div>
                                <div className="percentage">95%</div>
                            </div>
                            <div className="progress-container">
                                <div className="progress-bar">
                                </div>
                            </div>
                        </div>
                        <div className="progress-wrap wow fadeInUp" data-wow-delay=".9s">
                            <div className="progress-meta">
                                <div className="title">Human Interacation</div>
                                <div className="percentage">75%</div>
                            </div>
                            <div className="progress-container">
                                <div className="progress-bar">
                                </div>
                            </div>
                        </div>
                        <div className="follow-area">
                            <h5 className="mb-3"> Follow on </h5>
                            <ul className="social-media">
                                <li> <a href="https://www.facebook.com"> <i className="bi bi-facebook"></i> </a>
                                </li>
                                <li> <a href="https://www.youtube.com"> <i className="bi bi-youtube"></i> </a> </li>
                                <li> <a href="https://www.x.com"> <i className="bi bi-twitter-x"></i> </a> </li>
                                <li> <a href="https://www.linkedin.com"><i className="bi bi-linkedin"></i> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ChefDetails1;