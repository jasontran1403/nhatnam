import { Link } from "react-router-dom";

const Blog3 = () => {

    const blogItems = [
        {img:'/assets/img/blog/blogThumb1_1.jpg', title:'Fast Food Frenzy a Taste of Convenience'},     
        {img:'/assets/img/blog/blogThumb1_2.jpg', title:'Benefits of health and safety measures'},     
        {img:'/assets/img/blog/blogThumb1_3.jpg', title:'Quick Cravings Unraveling Fast Food Delights'},     
        {img:'/assets/img/blog/blogThumb1_4.jpg', title:'Fast Food Frenzy a Taste of Convenience'},     
        {img:'/assets/img/blog/blogThumb1_5.jpg', title:'Benefits of health and safety measures'},     
        {img:'/assets/img/blog/blogThumb1_6.jpg', title:'Quick Cravings Unraveling Fast Food Delights'},         
      ]; 

    return (
        <section className="blog-section section-padding fix">
        <div className="blog-wrapper style3 mt-n30">
            <div className="container">
                <div className="blog-card-wrap style3">

                {blogItems.map((item, i) => (
                    <div key={i} className="blog-card style1 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-thumb">
                            <img src={item.img} alt="thumb" />
                        </div>
                        <div className="blog-content">
                            <div className="blog-meta">
                                <div className="item1">
                                    <h6>15</h6>
                                    <p>Dec</p>
                                </div>
                                <div className="item2">
                                    <div className="icon"><img src="/assets/img/icon/user.svg" alt="icon" /><span>By
                                            Admin</span></div>
                                </div>
                                <div className="item3">
                                    <div className="icon"><img src="/assets/img/icon/tag.svg" alt="icon" /><span>Noodles</span>
                                    </div>
                                </div>
                            </div>
                            <Link to="/blog/blog-details">
                                <h3>{item.title}</h3>
                            </Link>
                            <Link to="/blog/blog-details" className="link-btn">
                                <span>Read More</span> <i className="fa-solid fa-arrow-right-long"></i>
                            </Link>
                        </div>
                    </div>
                    ))}



                </div>

            </div>
        </div>
    </section>
    );
};

export default Blog3;