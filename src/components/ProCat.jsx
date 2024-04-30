import React from 'react';

const ProCat = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5">
          <h1 className="mb-3">Property Types</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="row g-4">
          {/* Apartment */}
          <div className="col-lg-3 col-sm-6">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid"  src="/images/icon-apartment.png"alt="Apartment Icon" />
                </div>
                <h6>Apartment</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          {/* Villa */}
          <div className="col-lg-3 col-sm-6">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="/images/icon-villa.png" alt="Villa Icon" />
                </div>
                <h6>Villa</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          {/* House */}
          <div className="col-lg-3 col-sm-6">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="/images/icon-house.png" alt="House Icon" />
                </div>
                <h6>Home</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          {/* Office */}
          <div className="col-lg-3 col-sm-6">
            <a className="cat-item d-block bg-light text-center rounded p-3" href="">
              <div className="rounded p-4">
                <div className="icon mb-3">
                  <img className="img-fluid" src="/images/icon-.png" alt="Office Icon" />
                </div>
                <h6>Office</h6>
                <span>123 Properties</span>
              </div>
            </a>
          </div>
          {/* Repeat the same structure for other property types */}
        </div>
      </div>
    </div>
  );
};

export default ProCat;
