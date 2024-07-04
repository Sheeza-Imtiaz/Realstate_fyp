import React from "react";
import Footer from "./Footer";
import { Row, Col, Button, Container } from "react-bootstrap";
import CustomNavbar from "./Navbar";
import Pricing from "./Pricecard/Price";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    width: 100%;
    height: auto;
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

    @media (max-width: 600px) {
      position: static;
      width: 100%;
      height: auto;
    }
  }
  #img2 {
    position: absolute;
    top: 50px;
    right: 10px;
    width: 300px;
    height: 200px;

    @media (max-width: 600px) {
      position: static;
      width: 100%;
      height: auto;
    }
  }
  #img3 {
    position: absolute;
    top: 235px;
    left: 10px;
    width: 300px;
    height: 200px;

    @media (max-width: 600px) {
      position: static;
      width: 100%;
      height: auto;
    }
  }
  #img4 {
    position: absolute;
    top: 270px;
    right: 10px;
    width: 280px;
    height: 200px;

    @media (max-width: 600px) {
      position: static;
      width: 100%;
      height: auto;
    }
  }
`;

const AboutContent = styled.div`
  max-width: 660px;
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

  @media (max-width: 600px) {
    text-align: center;
    margin-left: 0;
  }
`;

const WhyChooseUs = styled.div`
  margin-top: 4rem;
  text-align: center;

  h2 {
    font-size: 40px;
    color: #1e4f5c;
    font-weight: 600;
    margin-bottom: 20px;
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
    text-shadow: -2px 2px 0 #1e4f5c, -1px 1px 0 #1e4f5c, -1px -1px 0 #1e4f5c,
      -1px -1px 0 #1e4f5c;
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

const AboutUsContainerFluid = styled.div`
  .about {
    padding: 1rem;
    margin-top:60px !important;

    @media (min-width: 600px) {
        margin-top: 200px;
      }

    .about-content {
      @media (min-width: 600px) {
        margin-bottom: 20px !important;
      }
    }

    .about-model {
      img {
        ${'' /* top:20px */}
        width: 100%;
        height: 90vh; /* Maintain aspect ratio */
        border-radius: 0.5rem;

        @media (max-width: 600px) {
          margin-top: 1rem;
          height:50vh;
        }
      }
    }
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
            We exceptional real estate service meets unwavering commitment. With a deep-rooted passion for real estate, our team is dedicated to exceeding your expectations. Whether you're buying, selling, or managing properties, we offer personalized solutions tailored to your unique needs. Backed by years of industry expertise and a client-first approach, we strive to deliver seamless transactions and optimal results. Discover why Real Estate is your trusted partner in real estate—contact us today to embark on your journey towards your real estate goals.</p>
           <NavLink to='/aboutdetail'><Button>Learn More</Button></NavLink> 
          </AboutContent>
        </AboutUsContainer>
        <WhyChooseUs>
          <h2>
            Why <span>Choose</span> Us
          </h2>
          <p>From Finding properties to Designing and Transforming them into Homes</p>
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
                design your dream home considering all your wishes for you to own
                a place to feel happy, loved, and special.
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

  <AboutUsContainerFluid>
    <Container fluid className="about">
      <Row>
        <Col lg={6} className="about-content">
          <h2>
            We are the Best <br />
            <span> Real Estate Company</span>
          </h2>
          <p>
          Welcome to Resl Estate, where real estate expertise meets personalized service. We specialize in guiding clients through seamless buying, selling, and property management experiences. With a commitment to excellence and a deep understanding of local markets, we are dedicated to achieving your real estate goals efficiently and effectively.
          </p>
         <NavLink to='/aboutdetail'><Button>View More Details</Button></NavLink> 
        </Col>
        <Col lg={6} className="about-model">
          <img src="/images/about.jpg" alt="our team" />
        </Col>
      </Row>
    </Container>
  </AboutUsContainerFluid>
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
