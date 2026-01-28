
const Contact3 = () => {
    return (
        <div>
<div className="contact-us-section section-padding fix">
        <div className="contact-box-wrapper style1">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><img src="/assets/img/icon/location.png" alt="icon" /></div>
                            <h3 className="title">Our Address</h3>
                            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><img src="/assets/img/icon/gmail.png" alt="icon" /></div>
                            <h3 className="title">info@exmple.com</h3>
                            <p>Email us anytime for any kind ofquety.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><img src="/assets/img/icon/phone.png" alt="icon" /></div>
                            <h3 className="title">Hot: +208-666-01112</h3>
                            <p>24/7/365 priority Live Chat and ticketing support.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><img src="/assets/img/icon/clock.png" alt="icon" /></div>
                            <h3 className="title">Opening Hour</h3>
                            <p>Sunday-Fri: 9 AM – 6 PM Saturday: 9 AM – 4 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-form-section section-padding pt-0 fix">
        <div className="contact-form-wrapper style2">
            <div className="container">
                <div className="row gx-60 gy-5">
                    <div className="col-xl-6">
                        <div className="contact-form-thumb">
                            <img src="/assets/img/contact/contactThumb2_1.png" alt="thumb" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-form style2">
                            <h2>Get in Touch</h2>
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
                                    <select name="orderby" className="single-select" aria-label="Shop order">
                                        <option value="subject">Subject</option>
                                        <option value="complain">Complain</option>
                                        <option value="greetings">Greetings</option>
                                        <option value="date">Expire Date</option>
                                        <option value="price">About Price</option>
                                        <option value="order">About order</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea id="message" className="form-control" placeholder="Write your message here..."
                                        rows="5"></textarea>
                                </div>
                                <div className="col-12 form-group">
                                    <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                    <label htmlFor="reviewcheck">Collaboratively formulate principle capital. Progressively
                                        evolve user<span className="checkmark"></span></label>
                                </div>
                                <div className="col-12 form-group mb-0">
                                    <button className="theme-btn w-100">SUBMIT NOW <i className="bi bi-arrow-right bg-transparent text-white"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="map-wrapper contact-area-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28821.965472924858!2d89.07524545!3d25.4467646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcb92fb4d9696d%3A0x74b18fed6b93e5e5!2sNobabgonj%20National%20garden!5e0!3m2!1sen!2sbd!4v1724820772279!5m2!1sen!2sbd"
            height="550" loading="lazy"
            ></iframe>
    </div>            
        </div>
    );
};

export default Contact3;