
const Contact2 = () => {
    return (
<section className="contact-section fix bg-color3">
        <div className="contact-wrapper style2 section-padding bg-img">
            <div className="container">
                <div className="row g-0 d-flex justify-content-center">
                    <div className="col-xl-8 z-3 order-2 order-xl-1">
                        <div className="contact-card-wrap">
                            <div className="contact-form-wrapper style2">
                                <div className="contact-form style2 rounded-0">
                                    <div className="title-area mx-492 mx-auto">
                                        <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                            <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" /> Book Your
                                            Seat <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                                        </div>
                                        <h2 className="title text-center  wow fadeInUp" data-wow-delay="0.7s">
                                            Excellent Service Each and Every Time
                                        </h2>
                                    </div>
                                    <form className="row" action="#">
                                        <div className="col-md-6">
                                            <input type="text" placeholder="Full Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="number" placeholder="Phone Number" />
                                        </div>
                                        <div className="col-md-6">
                                            <select name="guest" className="single-select" aria-label="guest number">
                                                <option value="subject">Guest</option>
                                                <option value="guestnumber">0-10</option>
                                                <option value="guestnumber">10-20</option>
                                                <option value="guestnumber">20-30</option>
                                                <option value="guestnumber">30-40</option>
                                                <option value="guestnumber">50+</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea id="message" className="form-control"
                                                placeholder="Write your message here..." rows="5"></textarea>
                                        </div>
                                        <div className="col-12 form-group">
                                            <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                            <label htmlFor="reviewcheck">Collaboratively formulate principle capital.
                                                Progressively
                                                evolve user<span className="checkmark"></span></label>
                                        </div>
                                        <div className="col-12 form-group mb-0">
                                            <button className="theme-btn w-100"> MAKE A RESERVATION <i className="bi bi-arrow-right bg-transparent text-white"></i> </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 order-1 order-xl-2 wow fadeInUp bg-title " data-wow-delay="0.2s">
                        <div className="opening-details py-5">
                            <div className="title-area mx-492 mx-auto">
                                <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                    <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" /> Reservation <img
                                        className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                                </div>
                                <h2 className="title text-white text-center  wow fadeInUp" data-wow-delay="0.7s">
                                    Opening Time
                                </h2>
                            </div>

                            <div className="icon text-center">
                                <img src="/assets/img/icon/star5.svg" alt="icon" />
                            </div>

                            <div className="schedule-wrapper">
                                <div className="schedule">
                                    <div className="day">MONDAY TO FRIDAY</div>
                                    <div className="time">10.00</div>
                                    <div className="time">20.00</div>
                                </div>
                                <div className="schedule">
                                    <div className="day">MONDAY TO FRIDAY</div>
                                    <div className="time">10.00</div>
                                    <div className="time">20.00</div>
                                </div>
                            </div>

                            <div className="number">+1 303 404 608</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Contact2;