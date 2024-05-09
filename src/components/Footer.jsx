import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid footer mt-5 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: "#eef3f0", height: "vh", paddingTop: "40px" }}>
      <div className="container ">
        <div className="row ">
          <div className="col-lg-3 col-md-6">
            <h5 className="text mb-4 fs-4">Get In Touch</h5>
            <p className="mb-2 fs-7"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p className="mb-2 fs-7"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2 fs-7"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <button className="btn btn-outline-light btn-social"><i className="fab fa-twitter"></i></button>
              <button className="btn btn-outline-light btn-social"><i className="fab fa-facebook-f"></i></button>
              <button className="btn btn-outline-light btn-social"><i className="fab fa-youtube"></i></button>
              <button className="btn btn-outline-light btn-social"><i className="fab fa-linkedin-in"></i></button>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text mb-4 fs-4">Quick Links</h5>
            <a href="/about" className="btn btn-link text-dark fs-7">About Us</a>
            <a href="/contact" className="btn btn-link text-dark fs-7">Contact Us</a>
            <a href="/services" className="btn btn-link text-dark fs-7">Our Services</a>
            <a href="/privacy-policy" className="btn btn-link text-dark fs-7">Privacy Policy</a>
            <a href="/terms-and-conditions" className="btn btn-link text-dark fs-7">Terms & Condition</a>
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
            <p className='fs-7'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
              <input className="form-control w-100 py-3 ps-4 pe-5 fs-7" type="text" placeholder="Your email" />
              <button style={{ backgroundColor: '#236c7e', color: 'white' }} type="button" className="btn py-2 position-absolute top-0 end-0 mt-2 me-6">SignUp</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 fs-6">
              &copy; <a href="#" className="border-bottom">Your Site Name</a>, All Right Reserved.
              Designed By <a href="" className="border-bottom">HTML React</a>
            </div>
            <div className="col-md-6 text-center text-md-end text-dark">
              <div className="footer-menu">
                <a href="#" className='text-dark fs-6'>Home</a>
                <a href="#" className='text-dark fs-6'>Cookies</a>
                <a href="#" className='text-dark fs-6'>Help</a>
                <a href="#" className='text-dark fs-6'>FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
