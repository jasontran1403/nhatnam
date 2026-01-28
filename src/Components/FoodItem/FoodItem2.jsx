import FoodItemCard2 from "../Card/FoodItemCard2";

const FoodItem2 = () => {
    return (
        <section className="food-menu-section fix section-padding pt-0">
        <div className="food-menu-wrapper-container style2">
            <div className="container">
                <div className="food-menu-wrapper style2 section-padding">
                    <div className="container">
                        <div className="title-area">
                            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />POPULAR DISHES<img
                                    className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="icon" />
                            </div>
                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                Our Most Popular Deals
                            </h2>
                        </div>
                        <div className="food-menu-tab-wrapper style2">
                            <div className="row gy-5">
                                <div className="col-xl-4 d-flex align-items-center justify-content-center">
                                    <div className="tab-left">
                                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link active" id="pills-chinesePasta-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-chinesePasta"
                                                    role="tab" aria-controls="pills-chinesePasta" aria-selected="true">
                                                        <FoodItemCard2
                                                            img="/assets/img/menu/menuThumb1_1.png"
                                                            title="Chinese Pasta"
                                                            content="It's a testament to our."
                                                            price="$15.99"                                                            
                                                        >
                                                        </FoodItemCard2>
                                                </div>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link" id="pills-chickenFriedRice-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-chickenFriedRice"
                                                    role="tab" aria-controls="pills-chickenFriedRice"
                                                    aria-selected="false">
                                                    <FoodItemCard2
                                                        img="/assets/img/menu/menuThumb1_2.png"
                                                        title="Chicken Fried Rice"
                                                        content="It's a testament to our."
                                                        price="$25.99"
                                                    ></FoodItemCard2>
                                                </div>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link" id="pills-chickenPizza-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-chickenPizza" role="tab"
                                                    aria-controls="pills-chickenPizza" aria-selected="false">
                                                    <FoodItemCard2
                                                        img="/assets/img/menu/menuThumb1_3.png"
                                                        title="Chicken Pizza"
                                                        content="It's a testament to our."
                                                        price="$115.99"
                                                    ></FoodItemCard2>
                                                </div>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link" id="pills-chickenNoodles-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-chickenNoodles"
                                                    role="tab" aria-controls="pills-chickenNoodles"
                                                    aria-selected="false">
                                                    <FoodItemCard2
                                                        img="/assets/img/menu/menuThumb1_4.png"
                                                        title="Chicken Noodles"
                                                        content="It's a testament to our."
                                                        price="$154.99"
                                                    ></FoodItemCard2>
                                                </div>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link" id="pills-grilledChicken-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-grilledChicken"
                                                    role="tab" aria-controls="pills-grilledChicken"
                                                    aria-selected="false">
                                                    <FoodItemCard2
                                                        img="/assets/img/menu/menuThumb1_5.png"
                                                        title="Grilled Chicken"
                                                        content="It's a testament to our."
                                                        price="$55.99"
                                                    ></FoodItemCard2>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-xl-4 d-flex align-items-center justify-content-center">
                                    <div className="middle-tab-content">
                                        <div className="tab-content" id="pills-tabContent">
                                            <div className="tab-pane fade show active" id="pills-chinesePasta"
                                                role="tabpanel" aria-labelledby="pills-chinesePasta-tab" tabIndex="0">
                                                <div className="menuthumb">
                                                    <img src="/assets/img/menu/menuThumb3_1.png" alt="thumb" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 d-flex align-items-center justify-content-center">
                                    <div className="tab-right">
                                        <ul className="nav nav-pills mb-3" id="pills-tab2" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link" id="pills-EggCucumber-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-EggCucumber" role="tab"
                                                    aria-controls="pills-EggCucumber" aria-selected="true">
                                                    <FoodItemCard2
                                                        img="/assets/img/menu/menuThumb1_6.png"
                                                        title="Egg and Cucumber"
                                                        content="It's a testament to our."
                                                        price="$65.99"
                                                    ></FoodItemCard2>  

                                                </div>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link" id="pills-chickenWhiteRice-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-chickenWhiteRice"
                                                    role="tab" aria-controls="pills-chickenWhiteRice"
                                                    aria-selected="false">
                                                    <FoodItemCard2
                                                        img="/assets/img/menu/menuThumb1_7.png"
                                                        title="Chicken White Rice"
                                                        content="It's a testament to our."
                                                        price="$135.99"
                                                    ></FoodItemCard2> 
                                                </div>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link" id="pills-specialBurger-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-specialBurger" role="tab"
                                                    aria-controls="pills-specialBurger" aria-selected="false">
                                        <FoodItemCard2
                                            img="/assets/img/menu/menuThumb1_8.png"
                                            title="Spatial Barger"
                                            content="It's a testament to our."
                                            price="$95.99"
                                        ></FoodItemCard2>
                                                </div>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link" id="pills-vegetablesBurger-tab"
                                                    data-bs-toggle="pill" data-bs-target="#pills-vegetablesBurger"
                                                    role="tab" aria-controls="pills-vegetablesBurger"
                                                    aria-selected="false">
                                         <FoodItemCard2
                                            img="/assets/img/menu/menuThumb1_9.png"
                                            title="Vegetables Burger"
                                            content="It's a testament to our."
                                            price="$75.99"
                                        ></FoodItemCard2> 

                                                </div>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <div className="nav-link" id="pills-briefChicken-tab" data-bs-toggle="pill"
                                                    data-bs-target="#pills-briefChicken" role="tab"
                                                    aria-controls="pills-briefChicken" aria-selected="false">
                                        <FoodItemCard2
                                            img="/assets/img/menu/menuThumb1_10.png"
                                            title="Brief Chicken"
                                            content="It's a testament to our."
                                            price="$44.99"
                                        ></FoodItemCard2>  
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    );
};

export default FoodItem2;