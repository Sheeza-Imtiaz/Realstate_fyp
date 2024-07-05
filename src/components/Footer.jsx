import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid footer mt-5 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: "#eef3f0", height: "vh", paddingTop: "40px" }}>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-3 col-md-6">
            <h5 className="text mb-4 fs-4">Get In Touch</h5>
            <p className="mb-2 fs-7"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Lahore, Pakistan</p>
            <p className="mb-2 fs-7"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2 fs-7"><i className="fa fa-envelope me-3"></i>Realestate@gmail.com</p>
            <div className="d-flex pt-2" >
              <button className="btn btn-outline-light btn-social" style={{backgroundColor:"#1e4f5c"}}><i className="fab fa-twitter"></i></button>
              <button className="btn btn-outline-light btn-social" style={{backgroundColor:"#1e4f5c"}}><i className="fab fa-facebook-f"></i></button>
              <button className="btn btn-outline-light btn-social" style={{backgroundColor:"#1e4f5c"}}><i className="fab fa-youtube"></i></button>
              <button className="btn btn-outline-light btn-social" style={{backgroundColor:"#1e4f5c"}}><i className="fab fa-linkedin-in"></i></button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text mb-4 fs-4">Quick Links</h5>
            <Link to="/about"> <h4 className="btn btn-link text-dark bg-transparent">About Us</h4> </Link>
            <Link to="/contact"><h4 className="btn btn-link text-dark bg-transparent">Contact Us</h4></Link>
            <Link to="/aboutdetail"><h4 className="btn btn-link text-dark bg-transparent">Our Services</h4></Link>
            <h4 className="btn btn-link text-dark bg-transparent">Privacy Policy</h4>
            <h4 className="btn btn-link text-dark bg-transparent">Terms & Condition</h4>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text mb-4 fs-4">Photo Gallery</h5>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid rounded bg-shiza p-1" src="images/property-1.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-shiza p-1" src="images/property-2.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-shiza p-1" src="images/property-3.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-shiza p-1" src="images/property-4.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-shiza p-1" src="images/property-5.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-shiza p-1" src="images/property-6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text mb-4 fs-4">Newsletter</h5>
            <p className='fs-7'>Try to sell and buy a property in best prices with us.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
              <input className="form-control w-100 py-2 ps-4 pe-3 fs-7" type="text" placeholder="Your email" />
              <Link to='/loginreg'><button style={{ backgroundColor: '#1e4f5c', color: 'white' }} type="button" className="btn py-1 position-absolute top-0 end-0 mt-1 me-6">SignUp</button></Link> 
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright"> 
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              &copy; <h6 className="border-bottom">Your Site Name</h6>, All Right Reserved.
              Designed By <h6 className="border-bottom">HTML React</h6>
            </div>
            <div className="col-md-6 text-center text-md-end text-dark">
              <div className="footer-menu">
                <h6 className='text-dark'>Home</h6>
                <h6 className='text-dark'>Cookies</h6>
                <h6 className='text-dark'>Help</h6>
                <h6 className='text-dark'>FQAs</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
