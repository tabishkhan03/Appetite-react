import React from 'react'
import { Link } from 'react-router-dom'
import pizza from '../../Assets/Images/hero.png'
import Navbar from '../../components/Navbar/Navbar'
import about_1 from '../../Assets/Images/about-1.jpg'
import about_2 from '../../Assets/Images/about-2.jpg'
import about_3 from '../../Assets/Images/about-3.jpg'
import about_4 from '../../Assets/Images/about-4.jpg'
import menu_1 from '../../Assets/Images/menu-1.jpg'
import menu_2 from '../../Assets/Images/menu-2.jpg'
import menu_3 from '../../Assets/Images/menu-3.jpg'
import menu_4 from '../../Assets/Images/menu-4.jpg'
import menu_5 from '../../Assets/Images/menu-5.jpg'
import menu_6 from '../../Assets/Images/menu-6.jpg'
import menu_7 from '../../Assets/Images/menu-7.jpg'
import menu_8 from '../../Assets/Images/menu-8.jpg'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">At Appetite, we believe that every meal
                should be an unforgettable experience. That's why our culinary team is dedicated to
                crafting mouthwatering dishes that tantalize your taste buds and leave you craving for
                more.</p>
              <Link to="/booking" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book
                A Table</Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src={pizza} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                  <h5>Master Chef</h5>
                  <p>We have Great Master Chef Mr Hemant Sharma.He Has Done PHD in Cooking. He loves to cook food. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                  <h5>Quality Food</h5>
                  <p>You Will Get Best quality Food Here,You can enjoy our delicious Meals, Snacks, Dessert and Drinks.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                  <h5>Online Order</h5>
                  <p>You can order online food by using swiggy and zomato.They Will deliver your food in limited Time. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                  <h5>24/7 Service</h5>
                  <p>Our Restaurant is available for 24/7 you can Dine in her at mid night also,You can also order online.  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s"
                    src={about_1} alt='' />
                </div>
                <div className="col-6 text-start">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s"
                    src={about_2} style={{ marginTop: "25%" }} alt='' />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s"
                    src={about_3} alt='' />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s"
                    src={about_4} alt='' />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
              <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>Appetite</h1>
              <p className="mb-4">At Appetite, we invite you to embark on a gastronomic journey like no other.our
                restaurant is a haven for food enthusiasts, a place where flavors dance.</p>
              <p className="mb-4">We believe that every meal should be a memorable experience, a symphony of
                taste, texture, and presentation. That's why our talented chefs craft each dish with
                precision and passion.</p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="btn btn-primary py-3 px-5 mt-2" to="/">Read More</Link>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
            <h1 class="mb-5">Most Popular Items</h1>
          </div>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li class="nav-item">
                <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill"
                  href="#tab-1">
                  <i class="fa fa-coffee fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Lovely</small>
                    <h6 class="mt-n1 mb-0">Meal</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill"
                  href="#tab-2">
                  <i class="fa fa-hamburger fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Special</small>
                    <h6 class="mt-n1 mb-0">Snacks</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill"
                  href="#tab-3">
                  <i class="fa fa-utensils fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Delightful</small>
                    <h6 class="mt-n1 mb-0">Desserts</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill"
                  href="#tab-4">
                  <i class="fas fa-cocktail fa-2x text-primary" style={{color:"#fea116;"}}></i>
                  <div class="ps-3">
                    <small class="text-body">Refreshing</small>
                    <h6 class="mt-n1 mb-0">Drinks</h6>
                  </div>
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="row g-4">
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_1} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_2} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Sushi</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_3} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Soup</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_4} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_5} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Paneer pizza</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_6} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Fries</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_7} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>veg pizza</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_8} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Meat</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" class="tab-pane fade show p-0">
              <div class="row g-4">
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_1} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_2} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Fries</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_3} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_4} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_5} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_6} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_7} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_8} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-3" class="tab-pane fade show p-0">
              <div class="row g-4">
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_1} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_2} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_3} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_4} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_5} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_6} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_7} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_8} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-4" class="tab-pane fade show p-0">
              <div class="row g-4">
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_1} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_2} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_3} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_4} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_5} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_6} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_7} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                  <div class='col-lg-6'>
                    <div class='d-flex align-items-center'>
                      <figure style={{width:"80px",height:"80px",overflow:"hidden"}}>
                        <img class='flex-shrink-0 img-fluid rounded' src={menu_8} alt='n' style={{width:"100%"}} />
                      </figure>
                      <div class='w-100 d-flex flex-column text-start ps-4'>
                        <h5 class='d-flex justify-content-between border-bottom pb-2'>
                          <span>Chicken Burger</span>
                          <span class='text-primary'>₹120</span>
                        </h5>
                        <small class='fst-italic'>Satisfy your hunger with quality with quantity food.</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home