
const Testimonial4 = () => {

    
    const tesItems = [
        {img:'/assets/img/testimonial/testimonialProfile1_1.png', addclass:'col-lg-7', title:'Albert Flores', designation:'Web Designer', content:'Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt'},
        {img:'/assets/img/testimonial/testimonialProfile1_1.png', addclass:'col-lg-5', title:'Albert Flores', designation:'Web Designer', content:'Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis'},
        {img:'/assets/img/testimonial/testimonialProfile1_1.png', addclass:'col-lg-5', title:'Albert Flores', designation:'Web Designer', content:'Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis'},
        {img:'/assets/img/testimonial/testimonialProfile1_1.png', addclass:'col-lg-7', title:'Albert Flores', designation:'Web Designer', content:'Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt'},       
        {img:'/assets/img/testimonial/testimonialProfile1_1.png', addclass:'col-lg-4', title:'Albert Flores', designation:'Web Designer', content:'Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt'},       
        {img:'/assets/img/testimonial/testimonialProfile1_1.png', addclass:'col-lg-4', title:'Albert Flores', designation:'Web Designer', content:'Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt'},       
        {img:'/assets/img/testimonial/testimonialProfile1_1.png', addclass:'col-lg-4', title:'Albert Flores', designation:'Web Designer', content:'Penatibus magnis dis point parturient montes nascetur ridiculus mus Ut id lorem ac enim the vestibulum blandit nec sit amet felis. Fusce quis diam odio Cras mattis mi quis tincidunt'},       
              
      ];     


    return (
<div className="testimonial-section section-padding fix">
        <div className="container">
            <div className="row gx-40">
            {tesItems.map((item, i) => (
                <div key={i} className={item.addclass}>
                    <div className="testimonial-card style1">
                        <div className="testimonial-header">
                            <div className="fancy-box">
                                <div className="item1"><img src={item.img}
                                        alt="thumb" /></div>
                                <div className="item2">
                                    <h6>{item.title}</h6>
                                    <p>{item.designation}</p>
                                    <div className="icon"><img src="/assets/img/icon/star.svg" alt="icon" /></div>
                                </div>
                                <div className="quote"><img src="/assets/img/icon/quote.svg" alt="icon" />
                                </div>
                            </div>
                        </div>
                        <p>{item.content}</p>
                    </div>
                </div>
                ))}

            </div>
        </div>
    </div>
    );
};

export default Testimonial4;