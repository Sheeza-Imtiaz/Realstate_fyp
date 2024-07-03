import React, { useState } from 'react';
import Footer from './Footer';
import "./Home.css";
import HoverCarousel from "hover-carousel";
import { Row, Col, Button } from 'react-bootstrap';
import TestimonialSlider from './testimonial/testimonial';
import CustomNavbar from './Navbar';
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
            <Col lg={6} className='about-text'>
              <h2>We are the Best <br /><span> Real Estate Company</span></h2>
              <p>Discover excellence with Us, where we specialize in finding your perfect property and ensuring a seamless selling experience. Trusted for our expertise and dedication, we're committed to your satisfaction every step of the way</p>
              <Button>View More Details</Button>
            </Col>
          </Row>
        </div>
        {/* property type  */}
        <div>
          <div className="container-fluid py-3 ">
            <div className="container property">
              <div className="text-center mx-auto mb-5">
                <h1 className="mb-3">Property Types</h1>
                <p>Discover a wide array of property types tailored to meet your unique preferences and needs. Whether you're seeking a cozy apartment, a spacious family home, or a luxurious estate, we have options to suit every lifestyle. Find the perfect property that fits your vision with ease at Real Estate</p>
              </div>
              <div className="row">
                {/* Apartment */}
                <div className="col-lg-3 col-sm-6 ">
                  <div className="cat-item d-block bg-light text-center rounded p-3" >
                    <div className="rounded p-4">
                      <div className="icon mb-3">
                        <img className="img-fluid" src="/images/icon-apartment.png" alt="Apartment" />
                      </div>
                      <h6>Apartment</h6>
                      <span>123 Properties</span>
                    </div>
                  </div>
                </div>
                {/* Villa */}
                <div className="col-lg-3 col-sm-6">
                  <div className="cat-item dz-block bg-light text-center rounded p-3" >
                    <div className="rounded p-4">
                      <div className="icon mb-4">
                        <img className="img-fluid" src="/images/icon-villa.png" alt="Villa Icon" />
                      </div>
                      <h6>Villa</h6>
                      <span>123 Properties</span>
                    </div>
                  </div>
                </div>
                {/* House */}
                <div className="col-lg-3 col-sm-6">
                  <div className="cat-item d-block bg-light text-center rounded p-3" >
                    <div className="rounded p-4">
                      <div className="icon mb-4">
                        <img className="img-fluid" src="/images/icon-house.png" alt="House Icon" />
                      </div>
                      <h6>Home</h6>
                      <span>123 Properties</span>
                    </div>
                  </div>
                </div>
                {/* Office */}
                <div className="col-lg-3 col-sm-6">
                  <div className="cat-item d-block bg-light text-center rounded p-3">
                    <div className="rounded p-4">
                      <div className="icon mb-4">
                        <img className="img-fluid" src="/images/icon-deal.png" alt="Office Icon" />
                      </div>
                      <h6 >Office</h6>
                      <span>123 Properties</span>
                    </div>
                  </div>
                </div>
                {/* Repeat the same structure for other property types */}
              </div>
            </div>
          </div></div>
        {/* how it works  */}
        <div className='how-it-works'>
          <div className=' container '>
            <h2>How It Works</h2>
            <div className='flex'>
              <div>
                <span className='fas fa-home'></span>
                <h4>Find A Property</h4>
                <p>Discover your ideal property effortlessly with us. Browse through our extensive listings and filter options to find homes that match your criteria. Whether you're looking for a cozy apartment, a family home, or a luxurious estate, we have something for everyone!</p>
              </div>
              <div>
                <span className='fas fa-dollar-sign'></span>
                <h4>Buy A Property</h4>
                <p>Buying your dream property has never been easier. With our user-friendly platform, you can explore detailed property listings, schedule viewings, and connect with sellers directly. Our goal is to make your buying experience smooth and stress-free!</p>
              </div>
              <div>
                <span className='fas fa-chart-line'></span>
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
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
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
                      <p><strong>Description:</strong> Located in DHA Lhr, this 5 bedrooms, 3 bathroom home offers 24 sqft of living space. Recently constructed, it features have garden. Conveniently situated near Airpot. For more information contact us.

</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}>Contact Agent</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 2 */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="modal" data-bs-target="#propertyModal2">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-2.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>Building</div>
                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>$12,345</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              {/* model 2 */}
              <div className="modal fade" id="propertyModal2" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel">Golden Urban House For Sell</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-2.jpg" alt="" />
                      <p><strong>Price:</strong> $12,34567</p>
                      <p><strong>Location:</strong> 123 Street, New York, USA</p>
                      <p><strong>Description:</strong> Detailed description about the property. This could include information about the number of bedrooms, bathrooms, square footage, unique features, and any other relevant details that make this property special.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}  >Contact Agent</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* card 3  */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="modal" data-bs-target="#propertyModal3">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-3.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>Home</div>
                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>$12,345</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              {/* model 3 */}
              <div className="modal fade" id="propertyModal3" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel">Golden Urban House For Sell</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-3.jpg" alt="" />
                      <p><strong>Price:</strong> $12,345</p>
                      <p><strong>Location:</strong> 123 Street, New York, USA</p>
                      <p><strong>Description:</strong> Detailed description about the property. This could include information about the number of bedrooms, bathrooms, square footage, unique features, and any other relevant details that make this property special.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}  >Contact Agent</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 4  */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="modal" data-bs-target="#propertyModal4">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-4.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>Villa</div>
                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>$12,345</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              {/* model 4 */}
              <div className="modal fade" id="propertyModal4" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel">Golden Urban House For Sell</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-4.jpg" alt="" />
                      <p><strong>Price:</strong> $12,345</p>
                      <p><strong>Location:</strong> 123 Street, New York, USA</p>
                      <p><strong>Description:</strong> Detailed description about the property. This could include information about the number of bedrooms, bathrooms, square footage, unique features, and any other relevant details that make this property special.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}  >Contact Agent</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 5 */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="modal" data-bs-target="#propertyModal5">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-5.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>office</div>
                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>$12,345</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              {/* model 5 */}
              <div className="modal fade" id="propertyModal5" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel">Golden Urban House For Sell</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-5.jpg" alt="" />
                      <p><strong>Price:</strong> $12,345</p>
                      <p><strong>Location:</strong> 123 Street, New York, USA</p>
                      <p><strong>Description:</strong> Detailed description about the property. This could include information about the number of bedrooms, bathrooms, square footage, unique features, and any other relevant details that make this property special.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }}  >Contact Agent</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 6 */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }} data-bs-toggle="modal" data-bs-target="#propertyModal6">
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-6.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{ color: "#1e4f5c", fontSize: "18px", fontWeight: "600" }}>Villa</div>
                  </div>
                  <div className="p-3 d-flex justify-content-between align-items-center">
                    <h5 className="" style={{ color: "#fc9700" }}>$12,345</h5>
                    <i className="fa fa-heart" style={{ color: "#ccc", cursor: "pointer" }} onClick={(e) => e.target.style.color = e.target.style.color === 'rgb(252, 151, 0)' ? '#ccc' : '#fc9700'}></i>
                  </div>
                  <div className='ms-3'>
                    <h4 className="d-block h5 mb-2">Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#1e4f5c" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              {/* model  6*/}
              <div className="modal fade" id="propertyModal6" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="propertyModalLabel6">Golden Urban House For Sell</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <img className="img-fluid mb-3" src="images/property-6.jpg" alt="" />
                      <p><strong>Price:</strong> $12,345</p>
                      <p><strong>Location:</strong> 123 Street, New York, USA</p>
                      <p><strong>Description:</strong> Detailed description about the property. This could include information about the number of bedrooms, bathrooms, square footage, unique features, and any other relevant details that make this property special.</p>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn" style={{ backgroundColor: "#1e4f5c", color: 'white' }} >Contact Agent</button>
                    </div>
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