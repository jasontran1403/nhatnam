
const Contact4 = () => {
    return (
        <div>
<div className="contact-us-section section-padding fix">
        <div className="contact-box-wrapper style2">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1 border-0">
                            <div className="contact-icon"><img className="rounded-circle" src="/assets/img/icon/phone2.png"
                                    alt="icon" /></div>
                            <h3 className="title">Phone Number</h3>
                            <p>+123 (5246) 2356 65</p>
                            <p> +123 (214) 321</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1 border-0">
                            <div className="contact-icon"><img className="rounded-circle" src="/assets/img/icon/gmail2.png"
                                    alt="icon" /></div>
                            <h3 className="title">Email Address</h3>
                            <p>info.needhelp@gmail.com</p>
                            <p>hello@gmail.com.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1 border-0">
                            <div className="contact-icon"><img className="rounded-circle" src="/assets/img/icon/location2.png"
                                    alt="icon" /></div>
                            <h3 className="title">Our Address</h3>
                            <p>8502 Preston Rd. Inglewood, Maine 98380</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1 border-0">
                            <div className="contact-icon"><img className="rounded-circle" src="/assets/img/icon/clock2.png"
                                    alt="icon" /></div>
                            <h3 className="title">Opening Time</h3>
                            <p>Mon - Fri 09:00 AM 05: PM <br/> Sat - Sun close</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-form-section style2 section-padding pt-0 fix">
        <div className="contact-form-wrapper style2">
            <div className="container">
                <div className="row gx-60 gy-5">
                    <div className="col-12">
                        <div className="contact-form style2">
                            <h2>Get in Touch</h2>
                            <form className="row" action="#">
                                <div className="col-md-6">
                                    <input className="bg-color2" type="text" placeholder="Full Name" />
                                </div>
                                <div className="col-md-6">
                                    <input className="bg-color2" type="email" placeholder="Email Address" />
                                </div>
                                <div className="col-md-6">
                                    <input className="bg-color2" type="number" placeholder="Phone Number" />
                                </div>
                                <div className="col-md-6">
                                    <select name="orderby" className="single-select bg-color2" aria-label="Shop order">
                                        <option value="subject" selected="selected">Subject</option>
                                        <option value="complain">Complain</option>
                                        <option value="greetings">Greetings</option>
                                        <option value="date">Expire Date</option>
                                        <option value="price">About Price</option>
                                        <option value="order">About order</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea id="message" className="form-control bg-color2"
                                        placeholder="Write your message here..." rows="5"></textarea>
                                </div>
                                <div className="col-12 form-group">
                                    <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                    <label htmlFor="reviewcheck">Collaboratively formulate principle capital. Progressively
                                        evolve user<span className="checkmark"></span></label>
                                </div>
                                <div className="col-12 form-group mb-0">
                                    <button className="theme-btn w-100">SUBMIT NOW <i
                                            className="fa-sharp fa-regular fa-arrow-right-long bg-transparent text-white"></i></button>
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
            height="550"  loading="lazy"
            ></iframe>
    </div>            
        </div>
    );
};

export default Contact4;