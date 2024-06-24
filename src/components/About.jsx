import React from "react";
import Footer from "./Footer";
import { Row, Col, Button } from "react-bootstrap";
import CustomNavbar from "./Navbar";
import Pricing from "./Pricecard/Price";
import styled from "styled-components";

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 2rem;
  width: 630px;
  height: 480px;
  background: #eef3f0;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
  #img1 {
    position: absolute;
    top: 15px;
    left: 30px;
    width: 250px;
    height: 200px;
  }
  #img2 {
    position: absolute;
    top: 50px;
    right: 10px;
    width: 300px;
    height: 200px;
  }
  #img3 {
    position: absolute;
    top: 235px;
    left: 10px;
    width: 300px;
    height: 200px;
  }
  #img4 {
    position: absolute;
    top: 270px;
    right: 10px;
    width: 280px;
    height: 200px;
  }
`;

const AboutContent = styled.div`
  max-width: 500px;
  text-align: center;
  h2 {
    font-size: 40px;
    color: #1e4f5c;
    font-weight: 600;
    margin-bottom: 60px;
  }
  p {
    font-size: 18px;
  }
  span {
    color: #fc9700;
  }
  Button {
    width: 180px;
    height: 50px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #ffffff;
    background-color: #1e4f5c;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    text-align: left;
    margin-left: 2rem;
  }
`;

const WhyChooseUs = styled.div`
  margin-top: 4rem;
  text-align: center;

  h2 {
    font-size: 40px;
    color: #1e4f5c;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p {
    font-size: 18px;
  }
  span {
    color: #fc9700;
  }
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eef3f0;
  h3 {
    font-size: 40px;
    color: #fc9700;
    font-weight: 500;
    text-shadow: -2px 2px 0  #1e4f5c,
                -1px 1px 0  #1e4f5c,
                -1px -1px 0  #1e4f5c,
                -1px -1px 0  #1e4f5c;
                  }
  p {
    font-size: 18px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }

  div {
    margin: 1rem 0;
    max-width: 200px;
    text-align: center;
  }

  img {
    width: 50px;
    height: auto;
    margin-bottom: 1rem;
  }
`;

const About = () => {
  return (
    <>
      <div>
        <CustomNavbar />
        <AboutUsContainer>
          <ImageGrid>
            <img src="/images/property-1.jpg" alt="Property 1" id="img1" />
            <img src="/images/property-2.jpg" alt="Property 2" id="img2" />
            <img src="/images/property-3.jpg" alt="Property 3" id="img3" />
            <img src="/images/property-4.jpg" alt="Property 4" id="img4" />
          </ImageGrid>
          <AboutContent>
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              PRIMEHEIM provides a complete range of services to help our
              clients own their dream home. Taking away all the stress and
              time-consuming activities related to search, bureaucracy,
              financing, renovation, and moving. Our goal is to provide the
              highest level of service, the widest selection of options, and the
              most competitive prices for you to own the home of your dreams.
            </p>
            <Button>Learn More</Button>
          </AboutContent>
        </AboutUsContainer>
        <WhyChooseUs>
          <h2>
            Why <span>Choose</span> Us
          </h2>
          <p>
            From Finding properties to Designing and Transforming them into
            Homes
          </p>
          <Steps>
            <div>
              <img src="/images/house.png" alt="Find Icon" />
              <h3>Find</h3>
              <p>
                After reviewing your wish list and analyzing your needs, we will
                find the property that has the greatest potential to become your
                dream home.
              </p>
            </div>
            <div>
              <img src="/images/design.png" alt="Design Icon" />
              <h3>Design</h3>
              <p>
                All spaces are harmoniously designed to make you feel HOME. We
                design your dream home considering all your wishes for you to
                own a place to feel happy, loved, and special.
              </p>
            </div>
            <div>
              <img src="/images/transform.png" alt="Transform Icon" />
              <h3>Transform</h3>
              <p>
                We transform dreams into reality creating a safe, cheerful, and
                loving place that you will call HOME.
              </p>
            </div>
          </Steps>
        </WhyChooseUs>


        <AboutUsContainer>
        <div className="container-fluid about">
          <Row>
            <Col lg={6} className="about-text">
              <h2>
                We are the Best <br />
                <span> Real Estate Company</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                vel, sit accusamus veritatis excepturi mollitia saepe laborum
                eos molestias nostrum dicta molestiae soluta, vitae
                voluptatibus. Animi voluptate voluptatum voluptates. Quisquam.
              </p>
              <Button>View More Details</Button>
            </Col>
            <Col lg={6} className="about-model spimg">
              <img src="/images/about.jpg" alt="our team" />
            </Col>
          </Row>
        </div>
        </AboutUsContainer>


      </div>

      <div>
        <Pricing />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;


  /* <div className="container-fluid py-5">
          <div className="about-section">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn about-texts" data-wow-delay="0.5s">
                <h2 className="mb-4" style={{ color: "#1e4f5c", fontSize: "40px", fontWeight: "600" }}>
                  <span style={{ color: "#fc9700" }}>#1</span> Place To Find The Perfect Property
                </h2>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <p><i className="fa fa-check me-3" style={{ color: "#1e4f5c" }}></i>Tempor erat elitr rebum at clita</p>
                <p><i className="fa fa-check me-3" style={{ color: "#1e4f5c" }}></i>Aliqu diam amet diam et eos</p>
                <p><i className="fa fa-check me-3" style={{ color: "#1e4f5c" }}></i>Clita duo justo magna dolore erat amet</p>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="about-img position-relative overflow-hidden p-5 pe-0">
                  <img className="img-fluid w-100" src="images/property-6.jpg" alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div> */
