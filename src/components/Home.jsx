import React from 'react';
import Footer from './Footer';
import "./Home.css";
import HoverCarousel from "hover-carousel";
import { Row, Col, Button } from 'react-bootstrap';


const Home = () => {

  const images = [
    "images/property-1.jpg",
    "images/property-2.jpg",
    "images/property-3.jpg",
    "images/property-4.jpg",
    "images/property-5.jpg",
    "images/property-6.jpg",
  ]
  return (
    <div className='home'>
      {/* header section  */}
      <div className=' hero'>
        <div className='parent'>
          <div className=' intro' >
            <p>Looking For a Property !</p>
            <h1><span>Buy </span>and <span>Sell</span> Properties</h1>
            <p className='detail'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, <br />
              a aliquam nesciunt libero placeat sed commodi tempore repellat sint sequi eligendi <br />
              incidunt consectetur autem veniam aperiam, vitae facere, saepe error!</p>
          </div>
        </div>
        <div className='child'>
          <HoverCarousel images={images} />
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel, sit accusamus veritatis excepturi mollitia saepe laborum eos molestias nostrum dicta molestiae soluta, vitae voluptatibus. Animi voluptate voluptatum voluptates. Quisquam.</p>
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
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
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
        <div className=' container'>
          <h2>How It Works</h2>
          <div className='flex'>
            <div>
              <span className='fas fa-home'></span>
              <h4>Find A Property</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptas quia accusamus error neque tenetur facere optio, sequi quis numquam libero possimus ipsa id quibusdam consectetur. Perspiciatis excepturi labore pariatur!</p>
            </div>
            <div>
              <span className='fas fa-dollar-sign'></span>
              <h4>Buy A Property</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptas quia accusamus error neque tenetur facere optio, sequi quis numquam libero possimus ipsa id quibusdam consectetur. Perspiciatis excepturi labore pariatur!</p>
            </div>
            <div>
              <span className='fas fa-chart-line'></span>
              <h4>Investing</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem voluptas quia accusamus error neque tenetur facere optio, sequi quis numquam libero possimus ipsa id quibusdam consectetur. Perspiciatis excepturi labore pariatur!</p>
            </div>
          </div>
        </div>
      </div>
      {/* property listing  */}
      <div class="container py-5">
        <div class="container property-section">
          <div class="row g-0 gx-5 align-items-end">
            <div class="col-lg-6">
              <div class="text-start mx-auto wow slideInLeft" data-wow-delay="0.1s">
                <h1 class="mb-3">Property Listing</h1>
                <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
              </div>
            </div>
            {/* card */}
            <div className='row g-4'>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }}>
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-1.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{
                      color: "#236c7e", fontSize: "18px", fontWeight: "600"
                    }}>Appartment</div>
                  </div>
                  <div className="p-4">
                    <h5 className="mb-3" style={{
                      color: "#fc9700"
                    }}>$12,345</h5>
                    <h4 className="d-block h5 mb-2" >Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#236c7e" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }}>
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-2.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{
                      color: "#236c7e", fontSize: "18px", fontWeight: "600"
                    }}>Appartment</div>
                  </div>
                  <div className="p-4">
                    <h5 className="mb-3" style={{
                      color: "#fc9700"
                    }}>$12,345</h5>
                    <h4 className="d-block h5 mb-2" >Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#236c7e" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }}>
                  <div className="position-relative overflow-hidden">
                   <img className="img-fluid" src="images/property-3.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{
                      color: "#236c7e", fontSize: "18px", fontWeight: "600"
                    }}>Building</div>
                  </div>
                  <div className="p-4">
                    <h5 className="mb-3" style={{
                      color: "#fc9700"
                    }}>$12,345</h5>
                    <h4 className="d-block h5 mb-2" >Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#236c7e" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }}>
                  <div className="position-relative overflow-hidden">
                   <img className="img-fluid" src="images/property-4.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{
                      color: "#236c7e", fontSize: "18px", fontWeight: "600"
                    }}>Appartment</div>
                  </div>
                  <div className="p-4">
                    <h5 className="mb-3" style={{
                      color: "#fc9700"
                    }}>$12,345</h5>
                    <h4 className="d-block h5 mb-2" >Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#236c7e" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }}>
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-5.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{
                      color: "#236c7e", fontSize: "18px", fontWeight: "600"
                    }}>Office</div>
                  </div>
                  <div className="p-4">
                    <h5 className="mb-3" style={{
                      color: "#fc9700"
                    }}>$12,345</h5>
                    <h4 className="d-block h5 mb-2" >Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#236c7e" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="property-item rounded" style={{ height: "100%" }}>
                  <div className="position-relative overflow-hidden">
                    <img className="img-fluid" src="images/property-6.jpg" alt="" />
                    <div className="bg-white rounded-top position-absolute start-0 bottom-0 mx-4 pt-1 px-3" style={{
                      color: "#236c7e", fontSize: "18px", fontWeight: "600"
                    }}>House</div>
                  </div>
                  <div className="p-4">
                    <h5 className="mb-3" style={{
                      color: "#fc9700"
                    }}>$12,345</h5>
                    <h4 className="d-block h5 mb-2">Golden Urban House For Sell</h4>
                    <p><i className="fa fa-map-marker-alt me-2" style={{ color: "#236c7e" }}></i>123 Street, New York, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div> <Footer /></div>
    </div>
  )
};
export default Home;