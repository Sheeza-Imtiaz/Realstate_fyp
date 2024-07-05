import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './AboutDetail.css';
import CustomNavbar from './Navbar';
import Footer from './Footer';

const agents = [
    { name: 'Ali Butt', image: '/images/s1.png', phone: '+92342-XXXXXX4', location: 'Gulburg, LHR' },
    { name: 'Abdul Moiz', image: '/images/s2.png', phone: '+92332-XXXXXX6', location: 'DHA, LHR' },
    { name: 'Sawera Shokut', image: '/images/s3.png', phone: '+92322-XXXXXX4', location: 'Defence, LHR' },
    { name: 'Shazil', image: '/images/images.jfif', phone: '+92342-XXXXXX0', location: 'Muslim Town, LHR' },
    { name: 'Salman', image: '/images/aabb.jfif', phone: '+92340-XXXXXX2', location: 'Gulshan Iqbal, LHR' },
    { name: 'Usman Ali', image: '/images/Avatar.webp', phone: '+92347-XXXXXX5', location: 'Cantt, LHR' },
];

const AboutDetail = () => {
    return (
        <>
            <CustomNavbar />
            <div className='top' >
                <p className='toop'> About Ower Property </p>
                <div className="about-detail">
                    <div className="content-container">
                        <div className="left-content">
                            <p>Welcome to Real Estate, where real estate expertise meets personalized service. We specialize in guiding clients through seamless buying, selling, and property management experiences. With a commitment to excellence and a deep understanding of local markets, we are dedicated to achieving your real estate goals efficiently and effectively!</p>
                        </div>
                        <div className="center-image">
                            <img src="/images/Opener-2.jpg" alt="Central" />
                        </div>
                        <div className="right-content">
                            <p>Exceptional real estate service meets unwavering commitment. With a deep-rooted passion for real estate, our team is dedicated to exceeding your expectations. Whether you're buying, selling, or managing properties, we offer personalized solutions tailored to your unique needs. </p>
                        </div>
                    </div>

                    <div className="content-container">
                        <div className="left-content">
                            <p>Exceptional real estate service meets unwavering commitment. With a deep-rooted passion for real estate, our team is dedicated to exceeding your expectations. Whether you're buying, selling, or managing properties, we offer personalized solutions tailored to your unique needs.</p>
                        </div>
                        <div className="center-image">
                            <img src="/images/aa.jpg" alt="Central" />
                        </div>
                        <div className="right-content">
                            <p>Welcome to Real Estate, where real estate expertise meets personalized service. We specialize in guiding clients through seamless buying, selling, and property management experiences. With a commitment to excellence and a deep understanding of local markets, we are dedicated to achieving your real estate goals efficiently and effectively!</p>
                        </div>
                    </div>

                    <div className="content-container">
                        <div className="left-content">
                            <p>Exceptional real estate service meets unwavering commitment. With a deep-rooted passion for real estate, our team is dedicated to exceeding your expectations. Whether you're buying, selling, or managing properties, we offer personalized solutions tailored to your unique needs. Backed by years of industry expertise and a client-first approach, we strive to deliver seamless transactions and optimal results. Discover why Real Estate is your trusted partner in real estate—contact us today to embark on your journey towards your real estate goals.</p>
                        </div>
                        <div className="center-image">
                            <img src="/images/oo.webp" alt="Central" />
                        </div>
                        <div className="right-content">
                            <p>Welcome to Real Estate, where real estate expertise meets personalized service. We specialize in guiding clients through seamless buying, selling, and property management experiences. With a commitment to excellence and a deep understanding of local markets, we are dedicated to achieving your real estate goals efficiently and effectively!</p>
                        </div>
                    </div>

                    <div className="agent-carousel" id="agents" >
                        <h2>Our Agents</h2>
                        <Carousel
                            showThumbs={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            showStatus={false}
                            centerMode={true}
                            centerSlidePercentage={33.33}
                            showArrows={true}
                        >
                            {agents.map((agent, index) => (
                                <div key={index} className="agent">
                                    <img src={agent.image} alt={agent.name} />
                                    <div className="agent-details">
                                        <p className="agent-name">{agent.name}</p>
                                        <p className="agent-phone">{agent.phone}</p>
                                        <p className="agent-location">{agent.location}</p>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>

            </div>
            <div> <Footer /></div>
        </>
    );
};

export default AboutDetail;
