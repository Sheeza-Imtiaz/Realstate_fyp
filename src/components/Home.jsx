import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import "./Home.css";
import HoverCarousel from "hover-carousel";
import { Row, Col, Button } from 'react-bootstrap';
import TestimonialSlider from './testimonial/testimonial';
import CustomNavbar from './Navbar';
import { NavLink } from 'react-router-dom';
// import Pricing from './Pricecard/Price';
// import { useState } from 'react';

const Home = () => {
  

  const images = [
    "images/property-1.jpg",
    "images/property-2.jpg",
    "images/property-3.jpg",
    "images/property-4.jpg",
    "images/property-5.jpg",
    "images/property-6.jpg",
  ]
  const [type, setType] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const properties = document.querySelectorAll('.property-item');
    properties.forEach((property) => {
      const propertyType = property.querySelector('.position-absolute').textContent.trim().toLowerCase();
      if (
        (type === '' || propertyType === type.toLowerCase())
      ) {
        property.style.display = 'block';
      } else {
        property.style.display = 'none';
      }
    });
  };
  const [propertyTypes, setPropertyTypes] = useState([
    { type: 'Apartment', count: 123, icon: '/images/icon-apartment.png' },
    { type: 'Villa', count: 123, icon: '/images/icon-villa.png' },
    { type: 'Home', count: 123, icon: '/images/icon-house.png' },
    { type: 'Office', count: 123, icon: '/images/icon-deal.png' },
  ]);

  // Use effect to automatically increment and decrement counts
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPropertyTypes((prevPropertyTypes) =>
        prevPropertyTypes.map((property) => ({
          ...property,
          count: property.count + Math.floor(Math.random() * 3 - 1) // Random increment or decrement by 1
        }))
      );
    }, 1000);
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  return (
    <>
      <div className='home'>
        <CustomNavbar />
        {/* header section  */}
        <div className=' hero'>
          <div className='parent'>
            <div className=' intro' >
              <p>Looking For a Property !</p>
              <h1><span>Buy </span>and <span>Sell</span> Properties</h1>
              <p className='detail'>Welcome to Real Estate, where buying and selling properties is made easy.<br></br>Explore diverse listings, receive expert guidance, and enjoy a seamless user experience. Find your <br></br>perfect home or sell with confidence today!
              </p>
            </div>
          </div>
          <div className='child'>
            <HoverCarousel images={images} className="imaga" />
          </div>
        </div>
        {/* about section  */}
        <div className='container-fluid about'>
          <Row>
            <Col lg={6} className='about-model spimg'>
              <img src="/images/about.jpg" alt='our team' />
            </Col>
            <Col lg={6} className='about-content'>
              <h2>We are the Best <br /><span> Real Estate Company</span></h2>
              <p>Discover excellence with Us, where we specialize in finding your perfect property and ensuring a seamless selling experience. Trusted for our expertise and dedication, we're committed to your satisfaction every step of the way</p>
              <NavLink to='/aboutdetail'><Button>View More Details</Button></NavLink>
            </Col>
          </Row>
        </div>
        {/* property type  */}
        <div className="container-fluid py-2">
      <div className="container property">
        <div className="text-center mx-auto mb-5">
          <h1 className="mb-3">Property Types</h1>
          <p>
            Discover a wide array of property types tailored to meet your unique preferences and needs. Whether you're seeking a cozy apartment, a spacious family home, or a luxurious estate, we have options to suit every lifestyle. Find the perfect property that fits your vision with ease at Real Estate.
          </p>
        </div>
        <div className="row">
          {propertyTypes.map((property, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="cat-item d-block bg-light text-center rounded p-3">
                <div className="rounded p-4">
                  <div className="icon mb-3">
                    <img className="img-fluid" src={property.icon} alt={`${property.type} Icon`} />
                  </div>
                  <h6>{property.type}</h6>
                  <span>{property.count} Properties</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

        {/* how it works section  */}
        <div className="how-it-works">
          <div className="container">
            <h2>How It Works</h2>
            <div className="flex">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <span className="fas fa-home"></span>
                <h4>Find A Property</h4>
                <p>Discover your ideal property effortlessly with us. Browse through our extensive listings and filter options to find homes that match your criteria. Whether you're looking for a cozy apartment, a family home, or a luxurious estate, we have something for everyone!</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <span className="fas fa-dollar-sign"></span>
                <h4>Buy A Property</h4>
                <p>Buying your dream property has never been easier. With our user-friendly platform, you can explore detailed property listings, schedule viewings, and connect with sellers directly. Our goal is to make your buying experience smooth and stress-free!</p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <span className="fas fa-chart-line"></span>
                <h4>Investing</h4>
                <p>Explore investment opportunities with confidence. Whether you're a seasoned investor or new to the market, we provide insights and resources to help you make informed decisions. From rental properties to commercial ventures, we're here to support your investment journey!</p>
              </div>
            </div>
          </div>
        </div>


        {/* property listing  */}
        <div className="container py-5 mt-5">
          <div className="container property-section">
            <div className="row g-0 gx-5 ">
              <div className="col-lg-6">
                <div className="text-start mx-auto wow slideInLeft" data-wow-delay="0.1s">
                  <h1 className="mb-3">Property Listing</h1>
                  <p>Explore our comprehensive property listings featuring a variety of options tailored to suit different lifestyles and preferences. Whether you're searching for apartments, villas, houses, or offices, each listing provides detailed information to help you find your ideal property.</p>
                </div>
              </div>
              <div className="col-lg-6 justify-content-end ">
                <form id="searchForm" onSubmit={handleSubmit} className="justify-content-center d-flex">
                  <div className="me-2">
                    <input type="text" className="form-control" id="propertyType" value={type}
                      onChange={(e) => setType(e.target.value)}
                      placeholder="Search by type"
                    />
                  </div>
                  <button type="submit" className="btn-b align-self-end">Search</button>
                </form>
              </div>
            </div>

            {/* card */}
            <div className='row g-4 mt-2'>
              <div className="car col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%", position: "relative" }} data-bs-toggle="modal" data-bs-target="#propertyModal1">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-1.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>Apartment</div>

                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>1,234,500</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Golden Urban House</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>DHA phase4 Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
              {/* modal 1 */}
              <div className="modal fade" id="propertyModal1" tabIndex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel">Golden Urban House</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-1.jpg" alt="" />
                      <p><strong>Price:</strong> 1,234,500</p>
                      <p><strong>Location:</strong>DHA phase4 Lahore, Pakistan</p>
                      <p><strong>Description:</strong> Located in DHA Lhr, this 5 bedrooms, 3 bathroom home offers 24 sqft of living space. Recently constructed, it features have garden. Conveniently situated near Airpot.
                      </p>
                    </div>
                    <div className="modal-footer">
                    <NavLink to='/aboutdetail'>  <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}>Contact Agent</button> </NavLink>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className="car col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%", position: "relative" }} data-bs-toggle="modal" data-bs-target="#propertyModal1">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-2.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>Apartment</div>

                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>11,234,500</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Pool House</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>DHA phase6 Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
              {/* model 2 */}
              <div className="modal fade" id="propertyModal2" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel">Pool House</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-2.jpg" alt="" />
                      <p><strong>Price:</strong>11,234,500</p>
                      <p><strong>Location:</strong>DHA phase6 Lahore, Pakistan </p>
                      <p><strong>Description:</strong> Located in DHA Lhr, this 5 bedrooms, 3 bathroom home offers 24 sqft of living space. Recently constructed, it features have garden. Conveniently situated near Airpot.</p>
                    </div>
                    <div className="modal-footer">
                    <NavLink to='/aboutdetail'>  <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}>Contact Agent</button> </NavLink>                    </div>
                  </div>
                </div>
              </div>
              {/* card 3  */}
              <div className="car col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="modal" data-bs-target="#propertyModal3">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-3.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>Home</div>
                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>544,322,000</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Garden Pool House</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>23 Street, Gullburg, LHR</p>
                  </div>
                </div>
              </div>
              {/* model 3 */}
              <div className="modal fade" id="propertyModal3" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel">Garden Pool House</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-3.jpg" alt="" />
                      <p><strong>Price:</strong> 544,322,000</p>
                      <p><strong>Location:</strong>23 Street, Gullburg, LHR</p>
                      <p><strong>Description:</strong>  Located in Gullburg Lhr, this 5 bedrooms, 3 bathroom home offers 24 sqft of living space. Recently constructed, it features have garden. Conveniently situated near Airpot.</p>
                    </div>
                    <div className="modal-footer">
                    <NavLink to='/aboutdetail'>  <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}>Contact Agent</button> </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 4  */}
              <div className="car col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="modal" data-bs-target="#propertyModal4">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-4.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>Villa</div>
                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>33,345,000</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">USA design House</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>Block 4 DHA phase2, Lahore</p>
                  </div>
                </div>
              </div>
              {/* model 4 */}
              <div className="modal fade" id="propertyModal4" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel">USA design House</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-4.jpg" alt="" />
                      <p><strong>Price:</strong>33,345,000 </p>
                      <p><strong>Location:</strong>Block 4 DHA phase2, Lahore </p>
                      <p><strong>Description:</strong>  Located in DHA Lhr, this 5 bedrooms, 3 bathroom home offers 24 sqft of living space. Recently constructed, it features have garden. Conveniently situated near Airpot.</p>
                    </div>
                    <div className="modal-footer">
                    <NavLink to='/aboutdetail'>  <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}>Contact Agent</button> </NavLink>                    </div>
                  </div>
                </div>
              </div>
              {/* card 5 */}
              <div className="car col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="modal" data-bs-target="#propertyModal5">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-5.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>office</div>
                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>90,738,300</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Asian Design House</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>1Muslim Town Near Nehar</p>
                  </div>
                </div>
              </div>
              {/* model 5 */}
              <div className="modal fade" id="propertyModal5" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel">Asian Design House</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-5.jpg" alt="" />
                      <p><strong>Price:</strong>90,738,300 </p>
                      <p><strong>Location:</strong> Muslim Town Near Nehar</p>
                      <p><strong>Description:</strong>  Located in muslim town Lhr, this 5 bedrooms, 3 bathroom home offers 24 sqft of living space. Recently constructed, it features have garden. Conveniently situated near Airpot.</p>
                    </div>
                    <div className="modal-footer">
                    <NavLink to='/aboutdetail'>  <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}>Contact Agent</button> </NavLink>                    </div>
                  </div>
                </div>
              </div>
              {/* card 6 */}
              <div className="car col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="modal" data-bs-target="#propertyModal6">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-6.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>Villa</div>
                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>222,443,400</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Double Story Style</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i> Defance Raya Lahore</p>
                  </div>
                </div>
              </div>
              {/* model  6*/}
              <div className="modal fade" id="propertyModal6" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel6">Double Story Style</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-6.jpg" alt="" />
                      <p><strong>Price:</strong> 222,443,40</p>
                      <p><strong>Location:</strong> Defance Raya Lahore</p>
                      <p><strong>Description:</strong>  Located in dafence Lhr, this 5 bedrooms, 3 bathroom home offers 24 sqft of living space. Recently constructed, it features have garden. Conveniently situated near Airpot.</p>
                    </div>
                    <div className="modal-footer">
                    <NavLink to='/aboutdetail'>  <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}>Contact Agent</button> </NavLink>                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* testimonial section  */}
        <div> <TestimonialSlider /></div>
        {/* footer section  */}
        <div><Footer /></div>
      </div>
    </>
  )
};



export default Home;