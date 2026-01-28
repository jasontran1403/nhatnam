import { Link } from "react-router-dom";

const Team4 = () => {

    const teamItems = [
        {img:'/assets/img/chefe/chefeThumb1_1.png', title:'Ralph Edwards', content:'Chef Lead', facebook:'#', linkedin:'#'},
        {img:'/assets/img/chefe/chefeThumb1_2.png', title:'Leslie Alexander', content:'Chef Assistant', facebook:'#', linkedin:'#'},
        {img:'/assets/img/chefe/chefeThumb1_3.png', title:'Ronald Richards', content:'Chef Assistant', facebook:'#', linkedin:'#'},
        {img:'/assets/img/chefe/chefeThumb1_4.png', title:'Jenny Wilson', content:'Medical Assistant', facebook:'#', linkedin:'#'},
        {img:'/assets/img/chefe/chefeThumb1_5.png', title:'Guy Hawkins', content:'Chef Assistant', facebook:'#', linkedin:'#'},
        {img:'/assets/img/chefe/chefeThumb1_6.png', title:'Robert Fox', content:'Chef Assistant', facebook:'#', linkedin:'#'},
      ];

    return (
<div className="chefe-section fix section-padding">
        <div className="chefe-wrapper style1">
            <div className="shape1 d-none d-xxl-block"><img className="float-bob-y" src="/assets/img/shape/chefeShape1_1.png"
                    alt="shape" /></div>
            <div className="shape2 d-none d-xxl-block"><img className="float-bob-x" src="/assets/img/shape/chefeShape1_2.png"
                    alt="shape"/></div>
            <div className="container">
                <div className="chefe-card-wrap style1">
                    <div className="row">

                    {teamItems.map((item, i) => (
                        <div key={i} className="col-lg-6 col-xl-4">
                            <div className="chefe-card style1 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="chefe-thumb">
                                    <img src={item.img} alt="thumb" />
                                </div>
                                <div className="icon">
                                <Link className="hovered-icon" to={item.facebook}><i className="bi bi-facebook"></i></Link>
                                    <a href="#"><i className="bi bi-share"></i></a>
                                    <Link className="hovered-icon" to={item.linkedin}><i className="bi bi-linkedin"></i></Link>
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
    </div>
    );
};

export default Team4;