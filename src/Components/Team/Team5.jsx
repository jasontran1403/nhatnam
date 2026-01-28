import { Link } from "react-router-dom";

const Team5 = () => {

    const teamItems = [
        {img:'/assets/img/chefe/chefeThumb2_1.jpg', title:'Devon Lane', content:'President of Sales', facebook:'#', linkedin:'#', youtube:'#'},
        {img:'/assets/img/chefe/chefeThumb2_2.jpg', title:'Ralph Edwards', content:'Chefe Manager', facebook:'#', linkedin:'#', youtube:'#'},
        {img:'/assets/img/chefe/chefeThumb2_3.jpg', title:'Marvin McKinney', content:'Main Chefe', facebook:'#', linkedin:'#', youtube:'#'},
      ]; 

    return (
        <section className="chefe-section fix section-padding bg-white">

        <div className="chefe-wrapper style1">
            <div className="container">
                <div className="title-area">
                    <div className="title  wow fadeInUp" data-wow-delay="0.7s">
                        Other Chefs
                    </div>
                </div>
                <div className="chefe-card-wrap style1 pb-5">
                    <div className="row gy-5 gx-80">

                    {teamItems.map((item, i) => (
                        <div key={i} className="col-md-6 col-xl-4">
                            <div className="chefe-card style2 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="chefe-thumb">
                                    <img src={item.img} alt="thumb" />
                                </div>

                                <div className="icon">
                                    <span>Share</span>
                                    <a href={item.facebook}><i className="bi bi-facebook"></i></a>
                                    <a href={item.youtube}><i className="bi bi-youtube"></i></a>
                                    <a href={item.linkedin}><i className="bi bi-linkedin"></i></a>
                                </div>
                                <div className="chefe-content">
                                    <Link to="/chef/chef-details">
                                        <h3>{item.title}</h3>
                                    </Link>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Team5;