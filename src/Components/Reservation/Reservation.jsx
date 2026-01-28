
const Reservation = () => {
    return (
        <div className="reservation-section section-padding fix">
        <div className="reservation-wrapper">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-xl-6 d-flex align-items-center">
                        <div className="get-in-touch">
                            <h2>GET IN TOUCH</h2>
                            <p className="desc">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore of magna aliqua. Ut enim ad minim veniam, made</p>
                            <div className="contact-info-wrapper">
                                <div className="contact-info">
                                    <h5>Contact</h5>
                                    <p>+012 3455 862 69</p>
                                </div>
                                <div className="contact-info">
                                    <h5>Email</h5>
                                    <p>companyInfo@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-info-wrapper">
                                <div className="contact-info">
                                    <h5>Address</h5>
                                    <p>Jackpark, Ghana</p>
                                </div>
                                <div className="contact-info">
                                    <h5>Follow</h5>
                                    <ul className="social-media">
                                        <li> <a href="https://www.facebook.com"> <i className="bi bi-facebook"></i>
                                            </a>
                                        </li>
                                        <li> <a href="https://www.x.com"> <i className="bi bi-twitter-x"></i>
                                            </a> </li>
                                        <li> <a href="https://www.youtube.com"> <i className="bi bi-youtube"></i> </a>
                                        </li>
                                        <li> <a href="https://www.linkedin.com"> <i className="bi bi-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="reservation-form">
                            <div className="contact-form style2">
                                <h2>Create An <span className="text-theme-color">Reservation</span> </h2>
                                <form className="row" action="#">
                                    <div className="col-md-6">
                                        <label className="mb-2" htmlFor="date">Select Date*</label>
                                        <input id="date" type="date" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="mb-2" htmlFor="time">Select Time*</label>
                                        <input id="time" type="time" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="mb-2" htmlFor="phone">Give Phone Number*</label>
                                        <input id="phone" type="number" placeholder="Phone Number" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="mb-2" htmlFor="service">Number of Guest*</label>
                                        <input id="service" type="text" placeholder="Guest" />
                                    </div>
                                    <div className="col-12">
                                        <textarea id="message" className="form-control"
                                            placeholder="Write your message here..." rows="5"></textarea>
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="theme-btn w-100">BOOK A TABLE <i className="bi bi-arrow-right bg-transparent text-white"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Reservation;