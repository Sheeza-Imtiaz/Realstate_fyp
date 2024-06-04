import React from 'react';
import Footer from './Footer';
import { Row, Col, Button } from 'react-bootstrap';
import CustomNavbar from './Navbar';

const About = () => {
  return (
    <>
    <div>
    <CustomNavbar/>
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
    <div className="container-fluid py-5">
      <div className="about-section">
        <div className="row g-5 align-items-center">
        
          <div className="col-lg-6 wow fadeIn about-texts" data-wow-delay="0.5s">
          <h2 className="mb-4" style={{color:"#236c7e" , fontSize:"40px" , fontWeight:"600"}}>
    <span style={{color:"#fc9700"}}>#1</span> Place To Find The Perfect Property
</h2>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p><i className="fa fa-check me-3" style={{color:"#1e4f5c"}}></i>Tempor erat elitr rebum at clita</p>
            <p><i className="fa fa-check me-3" style={{color:"#1e4f5c"}}></i>Aliqu diam amet diam et eos</p>
            <p><i className="fa fa-check me-3" style={{color:"#1e4f5c"}}></i>Clita duo justo magna dolore erat amet</p>
          </div>  
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img position-relative overflow-hidden p-5 pe-0">
              <img className="img-fluid w-100" src="images/property-6.jpg" alt="About" />
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
    </div>     
    </>
  );
};

export default About;
