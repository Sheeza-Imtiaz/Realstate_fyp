import React from 'react';
import Footer from './Footer';
import "./Home.css";
import Navbar from './Navbar';
import Contact from './Contact';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import pimage1 from "../../public/images/"


const Home = () => {
    return (
        <div className='home'>
            <div className='container hero'>
                <div className='row'>
                    <div className='col-lg-6 intro' >
                        <p>Looking For a Property !</p>
                        <h1><span>Buy </span>and <span>Sell</span> Properties</h1>
                        <p className='detail'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, <br />
                            a aliquam nesciunt libero placeat sed commodi tempore repellat sint sequi eligendi <br />
                            incidunt consectetur autem veniam aperiam, vitae facere, saepe error!</p>
                        <a href="" className='home-btn'> Details</a>
                    </div>
                    <div className='col-lg-6 intro-img'>
                        <img src="/images/header.png.png " alt='about image' />
                    </div>

                </div>
            </div>
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

            <div className='row about'>
                <div className='col-lg-6 about-model'>
                    <img src="/images/hero.png " alt='about image' />
                </div>

                <div className='col-lg-6 about-text' >
                    <h2>We are the Best <br /> Real Estate Company</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel, sit accusamus veritatis excepturi mollitia saepe laborum eos molestias nostrum dicta molestiae soluta, vitae voluptatibus. Animi voluptate voluptatum voluptates. Quisquam.</p>
                    <button>View More Details</button>
                </div>
            </div>
            {/* <div className=' product'>
                <div className='p-heading'>
                    <h3>Properties</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima fugiat aperiam, quos quibusdam beatae dolore id, ullam deserunt blanditiis sint earum doloremque iure cumque vitae hic. Earum accusamus sit nesciunt.</p>
                </div>
                <div className='product-container'>
                    <Bproperty image={pimage1} name="Al-Musalla" price="245,432" />
                    <Bproperty image={pimage1} name="Al-Musalla" price="245,432" />
                    <Bproperty image={pimage1} name="Al-Musalla" price="245,432" />

                </div>
            </div> */}


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Our Clients Say!</h1>
                        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <OwlCarousel
                        className="owl-carousel testimonial-carousel wow fadeInUp"
                        data-wow-delay="0.1s"
                        loop
                        autoplay
                        items={1}
                        margin={30}
                        nav >
                        <div className="testimonial-item bg-light rounded p-3">
                            <div className="bg-white border rounded p-4">
                                <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                <div className="d-flex align-items-center">
                                    <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{ width: '45px', height: '45px' }} alt="Client" />
                                    <div className="ps-3">
                                        <h6 className="fw-bold mb-1">Client Name</h6>
                                        <small>Profession</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Add more testimonial items here */}
                    </OwlCarousel>
                </div>
            </div>
            <Footer />
        </div>


    )
};
export default Home;