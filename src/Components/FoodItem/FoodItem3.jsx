import { useState } from "react";
import { Link } from "react-router-dom";

const FoodItem3 = () => {

    const [isActive, setIsActive] = useState('tab1');

    return (
        <section className="food-menu-section fix">
        <div className="food-menu-wrapper style3">
            <div className="container">
                <div className="food-menu-tab-wrapper style3 section-padding bg-white rounded-5">
                    <div className="shape1 d-none d-xl-block"><img className="float-bob-x"
                            src="/assets/img/shape/foodmenuShape3_1.png" alt="shape" /></div>
                    <div className="shape2 d-none d-xl-block"><img className="float-bob-y"
                            src="/assets/img/shape/foodmenuShape3_2.png" alt="shape" /></div>
                    <div className="shape3 d-none d-xl-block"><img className="float-bob-y"
                            src="/assets/img/shape/foodmenuShape3_3.png" alt="shape" /></div>
                    <div className="title-area">
                        <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                            <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" /> DELICIOUS DISHES <img
                                className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                        </div>
                        <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                            Getting You Hungry
                        </h2>
                    </div>


                    <div className="food-menu-tab style2">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className={`nav-item ${isActive === 'tab1' ? 'active' : ''}`} onClick={() => setIsActive('tab1')}  role="presentation">
                                <button className="nav-link" id="pills-Breakfast-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Breakfast" type="button" role="tab"
                                    aria-controls="pills-Breakfast" aria-selected="true">Breakfast</button>
                            </li>
                            <li className={`nav-item ${isActive === 'tab2' ? 'active' : ''}`} onClick={() => setIsActive('tab2')}  role="presentation">
                                <button className="nav-link" id="pills-Lunch-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Lunch" type="button" role="tab" aria-controls="pills-Lunch"
                                    aria-selected="false">Lunch</button>
                            </li>
                            <li className={`nav-item ${isActive === 'tab3' ? 'active' : ''}`} onClick={() => setIsActive('tab3')}  role="presentation">
                                <button className="nav-link" id="pills-Dinner-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Dinner" type="button" role="tab" aria-controls="pills-Dinner"
                                    aria-selected="false">Dinner</button>
                            </li>
                            <li className={`nav-item ${isActive === 'tab4' ? 'active' : ''}`} onClick={() => setIsActive('tab4')}  role="presentation">
                                <button className="nav-link" id="pills-Dessert-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Dessert" type="button" role="tab"
                                    aria-controls="pills-Dessert" aria-selected="false">Dessert</button>
                            </li>
                            <li className={`nav-item ${isActive === 'tab5' ? 'active' : ''}`} onClick={() => setIsActive('tab5')}  role="presentation">
                                <button className="nav-link" id="pills-Drink-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Drink" type="button" role="tab" aria-controls="pills-Drink"
                                    aria-selected="false">Drink</button>
                            </li>
                            <li className={`nav-item ${isActive === 'tab6' ? 'active' : ''}`} onClick={() => setIsActive('tab6')}  role="presentation">
                                <button className="nav-link" id="pills-Snack-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Snack" type="button" role="tab" aria-controls="pills-Snack"
                                    aria-selected="false">Snack</button>
                            </li>
                            <li className={`nav-item ${isActive === 'tab7' ? 'active' : ''}`} onClick={() => setIsActive('tab7')}  role="presentation">
                                <button className="nav-link" id="pills-Suops-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Suops" type="button" role="tab" aria-controls="pills-Suops"
                                    aria-selected="false">Suops</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className={`tab-pane ${isActive === 'tab1' ? 'active' : ''}`} id="pills-Breakfast" role="tabpanel"
                                aria-labelledby="pills-Breakfast-tab" tabIndex="0">
                                <div className="row gx-60">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3 className="active">Crispy Calamari</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Spinach & Artichoke Dip</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>French Onion Soup</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Caprcse Flatbread</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Chelled Sea Food</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Beef Carpaccio</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Bacon Wrapped Dates</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Charred Brussels Sprouts</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Vegetables Burger</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Brief Chicken</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ${isActive === 'tab2' ? 'active' : ''}`} id="pills-Lunch" role="tabpanel"
                                aria-labelledby="pills-Lunch-tab" tabIndex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Crispy Calamari</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>French Onion Soup</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>                                        
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Spinach & Artichoke Dip</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>

                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Caprcse Flatbread</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Chelled Sea Food</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Beef Carpaccio</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Bacon Wrapped Dates</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Vegetables Burger</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>                                       
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Charred Brussels Sprouts</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>

                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Brief Chicken</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ${isActive === 'tab3' ? 'active' : ''}`} id="pills-Dinner" role="tabpanel"
                                aria-labelledby="pills-Dinner-tab" tabIndex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Crispy Calamari</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Spinach & Artichoke Dip</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>French Onion Soup</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Chelled Sea Food</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>                                        
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Caprcse Flatbread</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Beef Carpaccio</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Bacon Wrapped Dates</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Charred Brussels Sprouts</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Vegetables Burger</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Brief Chicken</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ${isActive === 'tab4' ? 'active' : ''}`} id="pills-Dessert" role="tabpanel"
                                aria-labelledby="pills-Dessert-tab" tabIndex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Crispy Calamari</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Spinach & Artichoke Dip</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>French Onion Soup</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Caprcse Flatbread</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Chelled Sea Food</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Beef Carpaccio</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>

                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Charred Brussels Sprouts</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Bacon Wrapped Dates</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>                                        
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Vegetables Burger</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Brief Chicken</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ${isActive === 'tab5' ? 'active' : ''}`} id="pills-Drink" role="tabpanel"
                                aria-labelledby="pills-Drink-tab" tabIndex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Crispy Calamari</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Spinach & Artichoke Dip</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>French Onion Soup</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
     
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Chelled Sea Food</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Caprcse Flatbread</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>                                        
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Beef Carpaccio</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Bacon Wrapped Dates</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Charred Brussels Sprouts</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Vegetables Burger</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Brief Chicken</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ${isActive === 'tab6' ? 'active' : ''}`} id="pills-Snack" role="tabpanel"
                                aria-labelledby="pills-Snack-tab" tabIndex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Crispy Calamari</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Spinach & Artichoke Dip</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>French Onion Soup</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Caprcse Flatbread</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Chelled Sea Food</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Beef Carpaccio</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Bacon Wrapped Dates</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Charred Brussels Sprouts</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Vegetables Burger</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Brief Chicken</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane ${isActive === 'tab7' ? 'active' : ''}`} id="pills-Suops" role="tabpanel"
                                aria-labelledby="pills-Suops-tab" tabIndex="0">
                                <div className="row gx-30">
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Crispy Calamari</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$15.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Spinach & Artichoke Dip</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$25.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>French Onion Soup</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$115.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Caprcse Flatbread</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$154.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Chelled Sea Food</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$55.99</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Beef Carpaccio</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$65.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Bacon Wrapped Dates</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$135.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Charred Brussels Sprouts</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$95.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Vegetables Burger</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$75.99</h6>
                                        </div>
                                        <div className="single-menu-items">
                                            <div className="details">
                                                <div className="menu-content">
                                                    <Link to="/menu">
                                                        <h3>Brief Chicken</h3>
                                                    </Link>
                                                    <p>It is a testament to our commitment to sustainability, quality,
                                                        and the art of cooking</p>
                                                </div>
                                            </div>

                                            <h6>$44.99</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="marquee-wrapper style-1 section-padding mt-1">
            <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                    <li className="marquee-item style1">
                        <span className="text-slider"></span><span className="text-slider text-style">French Onion Soup</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Chelled Sea Food</span>
                        <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                        <span className="text-slider"></span><span className="text-slider text-style">French Onion Soup</span>
                        <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">French Onion Soup</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Chelled Sea Food</span>
                        <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                        <span className="text-slider"></span><span className="text-slider text-style">French Onion Soup</span>
                        <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    );
};

export default FoodItem3;